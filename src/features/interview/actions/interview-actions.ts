"use server";

import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { InterviewRequest } from "../types";
import {
  InterviewRequestSchema,
  InterviewProfileContextSchema,
} from "../schemas/interview-request.schema";
import {
  JobType,
  JobStatus,
  InterviewStatus,
  InterviewTemplateStatus,
  InterviewTemplateSource,
  Prisma,
} from "@prisma/client";
import { tasks } from "@trigger.dev/sdk/v3";
import { generateInterviewTask } from "@/trigger/generate-interview";
import { GlobalInterviewTemplateService } from "../services/global-interview-template.service";
import { ModuleActivityService } from "@/features/progress/services";
import {
  ModuleType,
  ModuleCompletionStatus,
  ModuleActivityEventType,
} from "@/features/progress/types";
import { normalizeError, safeAction } from "@/lib/error-handler";
import {
  mapInterviewType,
  mapExperienceLevel,
  mapDifficulty,
  mapExpToStr,
  mapDiffToStr,
} from "../utils/interview-mappers";

export async function createInterviewJob(request: InterviewRequest) {
  return safeAction(async () => {
    const { userId: clerkId } = await auth();

    if (!clerkId) {
      throw new Error("Unauthorized: You must be logged in to generate an interview.");
    }

  // Find DB User
  const dbUser = await prisma.user.findUnique({
    where: { clerkId },
  });

  if (!dbUser) {
    throw new Error("User record not found.");
  }

  // Validate incoming request
  const validatedRequest = InterviewRequestSchema.parse(request);
  const targetQuestionCount = validatedRequest.questionCount || 10;
  const mappedInterviewType = mapInterviewType(validatedRequest.interviewType);
  const mappedExpLevel = mapExperienceLevel(validatedRequest.experienceLevel);
  const mappedDifficulty = mapDifficulty(validatedRequest.difficulty);

  const isPersonalized = !validatedRequest.personalization.skipped;

  // ============================================================
  // CASE A: Generic Interview (Check for existing Global Template)
  // ============================================================
  if (!isPersonalized) {
    const existingGlobalTemplate = await GlobalInterviewTemplateService.findMatchingTemplate(
      validatedRequest.role,
      mappedExpLevel,
      mappedInterviewType,
      mappedDifficulty
    );

    if (existingGlobalTemplate) {
      if (
        existingGlobalTemplate.status === InterviewTemplateStatus.ACTIVE &&
        existingGlobalTemplate.templateBlobUrl &&
        existingGlobalTemplate.templateBlobUrl.trim() !== ""
      ) {
        // Create user-scoped InterviewTemplate copy
        const userTemplate = await prisma.interviewTemplate.create({
          data: {
            userId: dbUser.id,
            role: validatedRequest.role,
            experienceLevel: mappedExpLevel,
            difficulty: mappedDifficulty,
            interviewType: mappedInterviewType,
            questionCount: existingGlobalTemplate.questionCount || targetQuestionCount,
            estimatedDuration: existingGlobalTemplate.estimatedDuration,
            templateBlobUrl: existingGlobalTemplate.templateBlobUrl,
            status: InterviewTemplateStatus.ACTIVE,
            personalized: false,
          },
        });

        // Instant Cache Hit: Reuse existing canonical template blob directly (No LLM, No Trigger.dev, No Blob cloning)
        const session = await prisma.interviewSession.create({
          data: {
            userId: dbUser.id,
            globalInterviewTemplateId: existingGlobalTemplate.id,
            interviewTemplateId: userTemplate.id,
            templateSource: InterviewTemplateSource.GLOBAL,
            role: validatedRequest.role,
            experienceLevel: mappedExpLevel,
            difficulty: mappedDifficulty,
            interviewType: mappedInterviewType,
            questionCount: existingGlobalTemplate.questionCount || targetQuestionCount,
            estimatedDuration: existingGlobalTemplate.estimatedDuration,
            blobUrl: existingGlobalTemplate.templateBlobUrl,
            status: InterviewStatus.READY,
            personalized: false,
            profileId: validatedRequest.profileId,
            resumeId: validatedRequest.resumeId,
            roadmapId: validatedRequest.roadmapId,
          },
        });

        try {
          await ModuleActivityService.recordActivity({
            userId: dbUser.id,
            module: ModuleType.INTERVIEW_PRACTICE,
            eventType: ModuleActivityEventType.INTERVIEW_STARTED,
            completionStatus: ModuleCompletionStatus.STARTED,
            entityId: session.id,
            metadata: {
              interviewId: session.id,
              role: validatedRequest.role,
              profileId: validatedRequest.profileId,
              resumeId: validatedRequest.resumeId,
              roadmapId: validatedRequest.roadmapId,
            },
          });
        } catch (err) {
          console.warn("[InterviewActions] Failed to record interview started activity:", err);
        }

        // Create completed tracking job
        const job = await prisma.job.create({
          data: {
            userId: dbUser.id,
            type: JobType.INTERVIEW,
            status: JobStatus.COMPLETED,
            progress: 100,
            step: "Ready",
            artifactId: session.id,
            artifactType: "GLOBAL_INTERVIEW_TEMPLATE",
            completedAt: new Date(),
          },
        });

        return {
          interviewId: session.id,
          jobId: job.id,
          isReused: true,
        };
      }

      // Check if there is an active job started recently (< 5 minutes ago)
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      const activeJob = await prisma.job.findFirst({
        where: {
          artifactId: existingGlobalTemplate.id,
          status: { in: [JobStatus.QUEUED, JobStatus.RUNNING] },
          updatedAt: { gte: fiveMinutesAgo },
        },
        orderBy: { createdAt: "desc" },
      });

      if (activeJob) {
        const userTemplate = await prisma.interviewTemplate.create({
          data: {
            userId: dbUser.id,
            role: validatedRequest.role,
            experienceLevel: mappedExpLevel,
            difficulty: mappedDifficulty,
            interviewType: mappedInterviewType,
            questionCount: existingGlobalTemplate.questionCount || targetQuestionCount,
            templateBlobUrl: "",
            status: InterviewTemplateStatus.ACTIVE,
            personalized: false,
          },
        });

        const session = await prisma.interviewSession.create({
          data: {
            userId: dbUser.id,
            globalInterviewTemplateId: existingGlobalTemplate.id,
            interviewTemplateId: userTemplate.id,
            templateSource: InterviewTemplateSource.GLOBAL,
            role: validatedRequest.role,
            experienceLevel: mappedExpLevel,
            difficulty: mappedDifficulty,
            interviewType: mappedInterviewType,
            questionCount: existingGlobalTemplate.questionCount || targetQuestionCount,
            status: InterviewStatus.GENERATING,
            personalized: false,
          },
        });

        return {
          interviewId: session.id,
          jobId: activeJob.id,
          isReused: true,
        };
      }

      // Previous generation failed or stalled: re-trigger on existing global template
      await prisma.globalInterviewTemplate.update({
        where: { id: existingGlobalTemplate.id },
        data: {
          status: InterviewTemplateStatus.ACTIVE,
          questionCount: targetQuestionCount,
        },
      });

      const userTemplate = await prisma.interviewTemplate.create({
        data: {
          userId: dbUser.id,
          role: validatedRequest.role,
          experienceLevel: mappedExpLevel,
          difficulty: mappedDifficulty,
          interviewType: mappedInterviewType,
          questionCount: targetQuestionCount,
          templateBlobUrl: "",
          status: InterviewTemplateStatus.ACTIVE,
          personalized: false,
        },
      });

      const session = await prisma.interviewSession.create({
        data: {
          userId: dbUser.id,
          globalInterviewTemplateId: existingGlobalTemplate.id,
          interviewTemplateId: userTemplate.id,
          templateSource: InterviewTemplateSource.GLOBAL,
          role: validatedRequest.role,
          experienceLevel: mappedExpLevel,
          difficulty: mappedDifficulty,
          interviewType: mappedInterviewType,
          questionCount: targetQuestionCount,
          status: InterviewStatus.GENERATING,
          personalized: false,
        },
      });

      const job = await prisma.job.create({
        data: {
          userId: dbUser.id,
          type: JobType.INTERVIEW,
          status: JobStatus.QUEUED,
          progress: 0,
          step: "Queued",
          artifactId: existingGlobalTemplate.id,
          artifactType: "GLOBAL_INTERVIEW_TEMPLATE",
        },
      });

      let triggerRunId: string | undefined;
      try {
        const handle = await tasks.trigger<typeof generateInterviewTask>(
          "generate-interview",
          {
            interviewId: session.id,
            jobId: job.id,
            userId: dbUser.id,
            templateSource: "GLOBAL",
            globalInterviewTemplateId: existingGlobalTemplate.id,
            interviewTemplateId: userTemplate.id,
            request: {
              ...validatedRequest,
              questionCount: targetQuestionCount,
            },
          }
        );
        triggerRunId = handle.id;

        await prisma.job.update({
          where: { id: job.id },
          data: { triggerRunId },
        });
      } catch (error) {
        console.error("Failed to trigger Trigger.dev generate-interview task:", error);
        const appError = normalizeError(error);
        await prisma.job.update({
          where: { id: job.id },
          data: {
            status: JobStatus.FAILED,
            error: appError.message,
          },
        });
        await prisma.interviewSession.update({
          where: { id: session.id },
          data: { status: InterviewStatus.FAILED },
        });
        await prisma.interviewTemplate.update({
          where: { id: userTemplate.id },
          data: { status: InterviewTemplateStatus.FAILED },
        }).catch(() => {});
        await prisma.globalInterviewTemplate.update({
          where: { id: existingGlobalTemplate.id },
          data: { status: InterviewTemplateStatus.FAILED },
        }).catch(() => {});
        throw new Error(appError.message);
      }

      return {
        interviewId: session.id,
        jobId: job.id,
        triggerRunId,
      };
    }

    // No existing global template found — create placeholder with race condition handling
    const normalizedRole = GlobalInterviewTemplateService.normalizeRole(validatedRequest.role);
    let globalTemplate;
    try {
      globalTemplate = await GlobalInterviewTemplateService.createTemplate({
        createdByUserId: dbUser.id,
        role: validatedRequest.role,
        normalizedRole,
        experienceLevel: mappedExpLevel,
        difficulty: mappedDifficulty,
        interviewType: mappedInterviewType,
        questionCount: targetQuestionCount,
        templateBlobUrl: "",
      });
    } catch (err: unknown) {
      if (typeof err === "object" && err !== null && "code" in err && (err as { code: string }).code === "P2002") {
        const raceTemplate = await GlobalInterviewTemplateService.findMatchingTemplate(
          validatedRequest.role,
          mappedExpLevel,
          mappedInterviewType,
          mappedDifficulty
        );
        if (raceTemplate) {
          if (raceTemplate.templateBlobUrl && raceTemplate.templateBlobUrl.trim() !== "") {
            const userTemplate = await prisma.interviewTemplate.create({
              data: {
                userId: dbUser.id,
                role: validatedRequest.role,
                experienceLevel: mappedExpLevel,
                difficulty: mappedDifficulty,
                interviewType: mappedInterviewType,
                questionCount: raceTemplate.questionCount || targetQuestionCount,
                estimatedDuration: raceTemplate.estimatedDuration,
                templateBlobUrl: raceTemplate.templateBlobUrl,
                status: InterviewTemplateStatus.ACTIVE,
                personalized: false,
              },
            });

            const session = await prisma.interviewSession.create({
              data: {
                userId: dbUser.id,
                globalInterviewTemplateId: raceTemplate.id,
                interviewTemplateId: userTemplate.id,
                templateSource: InterviewTemplateSource.GLOBAL,
                role: validatedRequest.role,
                experienceLevel: mappedExpLevel,
                difficulty: mappedDifficulty,
                interviewType: mappedInterviewType,
                questionCount: raceTemplate.questionCount || targetQuestionCount,
                estimatedDuration: raceTemplate.estimatedDuration,
                blobUrl: raceTemplate.templateBlobUrl,
                status: InterviewStatus.READY,
                personalized: false,
              },
            });
            const job = await prisma.job.create({
              data: {
                userId: dbUser.id,
                type: JobType.INTERVIEW,
                status: JobStatus.COMPLETED,
                progress: 100,
                step: "Ready",
                artifactId: session.id,
                artifactType: "GLOBAL_INTERVIEW_TEMPLATE",
                completedAt: new Date(),
              },
            });
            return {
              interviewId: session.id,
              jobId: job.id,
              isReused: true,
            };
          }
        }
      }
      throw err;
    }

    const userTemplate = await prisma.interviewTemplate.create({
      data: {
        userId: dbUser.id,
        role: validatedRequest.role,
        experienceLevel: mappedExpLevel,
        difficulty: mappedDifficulty,
        interviewType: mappedInterviewType,
        questionCount: targetQuestionCount,
        templateBlobUrl: "",
        status: InterviewTemplateStatus.ACTIVE,
        personalized: false,
      },
    });

    const session = await prisma.interviewSession.create({
      data: {
        userId: dbUser.id,
        globalInterviewTemplateId: globalTemplate.id,
        interviewTemplateId: userTemplate.id,
        templateSource: InterviewTemplateSource.GLOBAL,
        role: validatedRequest.role,
        experienceLevel: mappedExpLevel,
        difficulty: mappedDifficulty,
        interviewType: mappedInterviewType,
        questionCount: targetQuestionCount,
        status: InterviewStatus.GENERATING,
        personalized: false,
      },
    });

    const job = await prisma.job.create({
      data: {
        userId: dbUser.id,
        type: JobType.INTERVIEW,
        status: JobStatus.QUEUED,
        progress: 0,
        step: "Queued",
        artifactId: globalTemplate.id,
        artifactType: "GLOBAL_INTERVIEW_TEMPLATE",
      },
    });

    let triggerRunId: string | undefined;
    try {
      const handle = await tasks.trigger<typeof generateInterviewTask>(
        "generate-interview",
        {
          interviewId: session.id,
          jobId: job.id,
          userId: dbUser.id,
          templateSource: "GLOBAL",
          globalInterviewTemplateId: globalTemplate.id,
          interviewTemplateId: userTemplate.id,
          request: {
            ...validatedRequest,
            questionCount: targetQuestionCount,
          },
        }
      );
      triggerRunId = handle.id;

      await prisma.job.update({
        where: { id: job.id },
        data: { triggerRunId },
      });
    } catch (error) {
      console.error("Failed to trigger Trigger.dev generate-interview task:", error);
      const appError = normalizeError(error);
      await prisma.job.update({
        where: { id: job.id },
        data: {
          status: JobStatus.FAILED,
          error: appError.message,
        },
      });
      await prisma.interviewSession.update({
        where: { id: session.id },
        data: { status: InterviewStatus.FAILED },
      });
      await prisma.interviewTemplate.update({
        where: { id: userTemplate.id },
        data: { status: InterviewTemplateStatus.FAILED },
      }).catch(() => {});
      await prisma.globalInterviewTemplate.update({
        where: { id: globalTemplate.id },
        data: { status: InterviewTemplateStatus.FAILED },
      }).catch(() => {});
      await ModuleActivityService.recordActivity({
        userId: dbUser.id,
        module: ModuleType.INTERVIEW_PRACTICE,
        eventType: ModuleActivityEventType.INTERVIEW_FAILED,
        entityId: session.id,
        metadata: {
          source: "GENERATE_INTERVIEW_DISPATCH",
          interviewId: session.id,
          jobId: job.id,
          error: appError.message,
        },
      }).catch((activityError) =>
        console.warn("[InterviewActions] Failed to record interview failure activity:", activityError)
      );
      throw new Error(appError.message);
    }

    return {
      interviewId: session.id,
      jobId: job.id,
      triggerRunId,
    };
  }

  // ============================================================
  // CASE B: Personalized Interview (User-Owned Template)
  // ============================================================
  // Always fetch authoritative profile server-side
  const profile = await prisma.profile.findUnique({
    where: { userId: dbUser.id },
  });

  let profileSnapshot: Prisma.InputJsonValue | undefined = undefined;
  if (profile) {
    // Select ONLY the 7 approved profile attributes
    profileSnapshot = {
      currentStatus: profile.currentStatus,
      currentRole: profile.currentRole,
      yearsOfExperience: profile.yearsOfExperience,
      highestQualification: profile.highestQualification,
      fieldOfStudy: profile.fieldOfStudy,
      primaryGoal: profile.primaryGoal,
      targetCompanyType: profile.targetCompanyType,
    } as Prisma.InputJsonObject;
  }

  // 1. Create InterviewTemplate record (user-owned)
  const template = await prisma.interviewTemplate.create({
    data: {
      userId: dbUser.id,
      role: validatedRequest.role,
      experienceLevel: mappedExpLevel,
      difficulty: mappedDifficulty,
      interviewType: mappedInterviewType,
      questionCount: targetQuestionCount,
      templateBlobUrl: "",
      status: InterviewTemplateStatus.ACTIVE,
      personalized: true,
      profileSnapshot: profileSnapshot ?? undefined,
    },
  });

  // 2. Create InterviewSession record
  const session = await prisma.interviewSession.create({
    data: {
      userId: dbUser.id,
      interviewTemplateId: template.id,
      templateSource: InterviewTemplateSource.USER_CREATED,
      role: validatedRequest.role,
      experienceLevel: mappedExpLevel,
      difficulty: mappedDifficulty,
      interviewType: mappedInterviewType,
      questionCount: targetQuestionCount,
      status: InterviewStatus.GENERATING,
      personalized: true,
      profileSnapshot: profileSnapshot ?? undefined,
      profileId: validatedRequest.profileId,
      resumeId: validatedRequest.resumeId,
      roadmapId: validatedRequest.roadmapId,
    },
  });

  try {
    await ModuleActivityService.recordActivity({
      userId: dbUser.id,
      module: ModuleType.INTERVIEW_PRACTICE,
      eventType: ModuleActivityEventType.INTERVIEW_STARTED,
      completionStatus: ModuleCompletionStatus.STARTED,
      entityId: session.id,
      metadata: {
        interviewId: session.id,
        role: validatedRequest.role,
        experienceLevel: mappedExpLevel,
        profileId: validatedRequest.profileId,
        resumeId: validatedRequest.resumeId,
        roadmapId: validatedRequest.roadmapId,
      },
    });
  } catch (err) {
    console.warn("[InterviewActions] Failed to record interview started activity:", err);
  }

  // 3. Create Job System record
  const job = await prisma.job.create({
    data: {
      userId: dbUser.id,
      type: JobType.INTERVIEW,
      status: JobStatus.QUEUED,
      progress: 0,
      step: "Queued",
      artifactId: session.id,
      artifactType: "INTERVIEW_TEMPLATE",
    },
  });

  // 4. Trigger background generation task
  let triggerRunId: string | undefined;
  try {
    const handle = await tasks.trigger<typeof generateInterviewTask>(
      "generate-interview",
      {
        interviewId: session.id,
        jobId: job.id,
        userId: dbUser.id,
        templateSource: "USER_CREATED",
        interviewTemplateId: template.id,
        request: {
          ...validatedRequest,
          questionCount: targetQuestionCount,
          personalization: {
            skipped: false,
            profile: profileSnapshot,
          },
        },
      }
    );
    triggerRunId = handle.id;

    await prisma.job.update({
      where: { id: job.id },
      data: { triggerRunId },
    });
  } catch (error) {
    console.error("Failed to trigger Trigger.dev generate-interview task:", error);
    const appError = normalizeError(error);
    await prisma.job.update({
      where: { id: job.id },
      data: {
        status: JobStatus.FAILED,
        error: appError.message,
      },
    });
    await prisma.interviewSession.update({
      where: { id: session.id },
      data: { status: InterviewStatus.FAILED },
    });
    await prisma.interviewTemplate.update({
      where: { id: template.id },
      data: { status: InterviewTemplateStatus.FAILED },
    }).catch(() => {});
    await ModuleActivityService.recordActivity({
      userId: dbUser.id,
      module: ModuleType.INTERVIEW_PRACTICE,
      eventType: ModuleActivityEventType.INTERVIEW_FAILED,
      entityId: session.id,
      metadata: {
        source: "GENERATE_INTERVIEW_DISPATCH",
        interviewId: session.id,
        jobId: job.id,
        error: appError.message,
      },
    }).catch((activityError) =>
      console.warn("[InterviewActions] Failed to record interview failure activity:", activityError)
    );
    throw new Error(appError.message);
  }

  return {
    interviewId: session.id,
    jobId: job.id,
    triggerRunId,
  };
  });
}

export async function retryInterviewGenerationAction(interviewId: string) {
  return safeAction(async () => {
    if (!interviewId || typeof interviewId !== "string" || interviewId.trim().length === 0) {
      throw new Error("Invalid interview ID.");
    }
    const sanitizedId = interviewId.trim();

    const { userId: clerkId } = await auth();
    if (!clerkId) throw new Error("Unauthorized: You must be logged in.");

    const dbUser = await prisma.user.findUnique({ where: { clerkId } });
    if (!dbUser) throw new Error("User record not found.");

    const session = await prisma.interviewSession.findUnique({
      where: { id: sanitizedId, userId: dbUser.id },
    });

    if (!session) throw new Error("Interview session not found.");
    if (session.status !== InterviewStatus.FAILED) {
      throw new Error("Only failed interviews can be retried.");
    }

    // Creator authorization check for global templates
    if (session.globalInterviewTemplateId) {
      const globalTemplate = await prisma.globalInterviewTemplate.findUnique({
        where: { id: session.globalInterviewTemplateId },
      });
      if (globalTemplate?.createdByUserId && globalTemplate.createdByUserId !== dbUser.id) {
        throw new Error("Unauthorized: Only the creator of this template can retry generation.");
      }
    }

    const requestPayload: z.infer<typeof InterviewRequestSchema> = {
      role: session.role,
      experienceLevel: mapExpToStr(session.experienceLevel),
      difficulty: mapDiffToStr(session.difficulty),
      interviewType: "Standard Interview",
      questionCount: session.questionCount,
      personalization: session.personalized
        ? { skipped: false, profile: session.profileSnapshot as unknown as z.infer<typeof InterviewProfileContextSchema> }
        : { skipped: true },
      profileId: session.profileId || undefined,
      resumeId: session.resumeId || undefined,
      roadmapId: session.roadmapId || undefined,
    };

  // 1. Mark session as GENERATING again
  await prisma.interviewSession.update({
    where: { id: session.id },
    data: { status: InterviewStatus.GENERATING },
  });

  // 2. Reactivate the associated template if it was marked as FAILED
  if (session.templateSource === "GLOBAL" && session.globalInterviewTemplateId) {
    await prisma.globalInterviewTemplate.update({
      where: { id: session.globalInterviewTemplateId },
      data: { status: InterviewTemplateStatus.ACTIVE },
    }).catch(() => {});
  } else if (session.templateSource === "USER_CREATED" && session.interviewTemplateId) {
    await prisma.interviewTemplate.update({
      where: { id: session.interviewTemplateId },
      data: { status: InterviewTemplateStatus.ACTIVE },
    }).catch(() => {});
  }

  // 3. Create a new Job
  const artifactId = session.templateSource === "GLOBAL" 
    ? session.globalInterviewTemplateId! 
    : session.id;
  
  const artifactType = session.templateSource === "GLOBAL" 
    ? "GLOBAL_INTERVIEW_TEMPLATE" 
    : "INTERVIEW_TEMPLATE";

  const job = await prisma.job.create({
    data: {
      userId: dbUser.id,
      type: JobType.INTERVIEW,
      status: JobStatus.QUEUED,
      progress: 0,
      step: "Queued",
      artifactId,
      artifactType,
    },
  });

  // 4. Trigger background generation task
  try {
    const handle = await tasks.trigger<typeof generateInterviewTask>(
      "generate-interview",
      {
        interviewId: session.id,
        jobId: job.id,
        userId: dbUser.id,
        templateSource: session.templateSource,
        globalInterviewTemplateId: session.globalInterviewTemplateId || undefined,
        interviewTemplateId: session.interviewTemplateId || undefined,
        request: requestPayload,
      }
    );

    await prisma.job.update({
      where: { id: job.id },
      data: { triggerRunId: handle.id },
    });
  } catch (error) {
    console.error("Failed to trigger Trigger.dev generate-interview task on retry:", error);
    const appError = normalizeError(error);
    
    // Rollback statuses on dispatch failure
    await prisma.job.update({
      where: { id: job.id },
      data: { status: JobStatus.FAILED, error: appError.message },
    });
    await prisma.interviewSession.update({
      where: { id: session.id },
      data: { status: InterviewStatus.FAILED },
    });
    
    throw new Error(appError.message);
  }

  return { success: true };
  });
}

export async function retryGlobalInterviewAction(globalInterviewTemplateId: string) {
  return safeAction(async () => {
    if (!globalInterviewTemplateId || typeof globalInterviewTemplateId !== "string" || globalInterviewTemplateId.trim().length === 0) {
      throw new Error("Invalid global template ID.");
    }
    const sanitizedId = globalInterviewTemplateId.trim();

    const { userId: clerkId } = await auth();
    if (!clerkId) throw new Error("Unauthorized: You must be logged in.");

    const dbUser = await prisma.user.findUnique({ where: { clerkId } });
    if (!dbUser) throw new Error("User record not found.");

    const globalTemplate = await prisma.globalInterviewTemplate.findUnique({
      where: { id: sanitizedId },
    });

    if (!globalTemplate) throw new Error("Global interview template not found.");

    if (globalTemplate.createdByUserId && globalTemplate.createdByUserId !== dbUser.id) {
      throw new Error("Unauthorized: Only the creator can retry this global interview.");
    }

    const userTemplate = await prisma.interviewTemplate.create({
      data: {
        userId: dbUser.id,
        role: globalTemplate.role,
        experienceLevel: globalTemplate.experienceLevel,
        difficulty: globalTemplate.difficulty,
        interviewType: globalTemplate.interviewType,
        questionCount: globalTemplate.questionCount,
        templateBlobUrl: "",
        status: InterviewTemplateStatus.ACTIVE,
        personalized: false,
      },
    });

    const session = await prisma.interviewSession.create({
      data: {
        userId: dbUser.id,
        globalInterviewTemplateId: globalTemplate.id,
        interviewTemplateId: userTemplate.id,
        templateSource: InterviewTemplateSource.GLOBAL,
        role: globalTemplate.role,
        experienceLevel: globalTemplate.experienceLevel,
        difficulty: globalTemplate.difficulty,
        interviewType: globalTemplate.interviewType,
        questionCount: globalTemplate.questionCount,
        status: InterviewStatus.GENERATING,
        personalized: false,
      },
    });

    await prisma.globalInterviewTemplate.update({
      where: { id: globalTemplate.id },
      data: { status: InterviewTemplateStatus.ACTIVE },
    });

    const job = await prisma.job.create({
      data: {
        userId: dbUser.id,
        type: JobType.INTERVIEW,
        status: JobStatus.QUEUED,
        progress: 0,
        step: "Queued",
        artifactId: globalTemplate.id,
        artifactType: "GLOBAL_INTERVIEW_TEMPLATE",
      },
    });

    const requestPayload: z.infer<typeof InterviewRequestSchema> = {
      role: globalTemplate.role,
      experienceLevel: mapExpToStr(globalTemplate.experienceLevel),
      difficulty: mapDiffToStr(globalTemplate.difficulty),
      interviewType: "Standard Interview",
      questionCount: globalTemplate.questionCount,
      personalization: { skipped: true },
    };

    try {
      const handle = await tasks.trigger<typeof generateInterviewTask>(
        "generate-interview",
        {
          interviewId: session.id,
          jobId: job.id,
          userId: dbUser.id,
          templateSource: "GLOBAL",
          globalInterviewTemplateId: globalTemplate.id,
          interviewTemplateId: userTemplate.id,
          request: requestPayload,
        }
      );

      await prisma.job.update({
        where: { id: job.id },
        data: { triggerRunId: handle.id },
      });
    } catch (error) {
      const appError = normalizeError(error);
      await prisma.job.update({
        where: { id: job.id },
        data: { status: JobStatus.FAILED, error: appError.message },
      });
      await prisma.interviewSession.update({
        where: { id: session.id },
        data: { status: InterviewStatus.FAILED },
      });
      await prisma.interviewTemplate.update({
        where: { id: userTemplate.id },
        data: { status: InterviewTemplateStatus.FAILED },
      }).catch(() => {});
      await prisma.globalInterviewTemplate.update({
        where: { id: globalTemplate.id },
        data: { status: InterviewTemplateStatus.FAILED },
      }).catch(() => {});
      throw new Error(appError.message);
    }

    return { success: true, interviewId: session.id };
  });
}

export async function startPersonalizedSessionAction(interviewTemplateId: string) {
  return safeAction(async () => {
    if (!interviewTemplateId || typeof interviewTemplateId !== "string" || interviewTemplateId.trim().length === 0) {
      throw new Error("Invalid template ID.");
    }
    const sanitizedId = interviewTemplateId.trim();

    const { userId: clerkId } = await auth();
    if (!clerkId) throw new Error("Unauthorized: You must be logged in.");

    const dbUser = await prisma.user.findUnique({ where: { clerkId } });
    if (!dbUser) throw new Error("User record not found.");

    const template = await prisma.interviewTemplate.findUnique({
      where: { id: sanitizedId, userId: dbUser.id },
    });

    if (!template) throw new Error("Interview template not found.");
    if (template.status !== InterviewTemplateStatus.ACTIVE || !template.templateBlobUrl) {
      throw new Error("This template is not ready for practice.");
    }

    // Create session
    const session = await prisma.interviewSession.create({
      data: {
        userId: dbUser.id,
        interviewTemplateId: template.id,
        templateSource: InterviewTemplateSource.USER_CREATED,
        role: template.role,
        experienceLevel: template.experienceLevel,
        difficulty: template.difficulty,
        interviewType: template.interviewType,
        questionCount: template.questionCount,
        estimatedDuration: template.estimatedDuration,
        blobUrl: template.templateBlobUrl,
        status: InterviewStatus.READY,
        personalized: template.personalized ?? false,
        profileSnapshot: template.profileSnapshot ?? undefined,
      },
    });

    try {
      await ModuleActivityService.recordActivity({
        userId: dbUser.id,
        module: ModuleType.INTERVIEW_PRACTICE,
        eventType: ModuleActivityEventType.INTERVIEW_STARTED,
        completionStatus: ModuleCompletionStatus.STARTED,
        entityId: session.id,
        metadata: {
          source: "PERSONALIZED_TEMPLATE_REUSE",
          interviewId: session.id,
          role: template.role,
        },
      });
    } catch (err) {
      console.warn("[InterviewActions] Failed to record interview started activity:", err);
    }

    return { interviewId: session.id };
  });
}

export async function startGlobalInterviewSessionAction(globalInterviewTemplateId: string) {
  return safeAction(async () => {
    if (!globalInterviewTemplateId || typeof globalInterviewTemplateId !== "string" || globalInterviewTemplateId.trim().length === 0) {
      throw new Error("Invalid global template ID.");
    }
    const sanitizedId = globalInterviewTemplateId.trim();

    const { userId: clerkId } = await auth();
    if (!clerkId) throw new Error("Unauthorized: You must be logged in.");

    const dbUser = await prisma.user.findUnique({ where: { clerkId } });
    if (!dbUser) throw new Error("User record not found.");

    const globalTemplate = await prisma.globalInterviewTemplate.findUnique({
      where: { id: sanitizedId },
    });

    if (!globalTemplate) throw new Error("Global template not found.");
    if (globalTemplate.status !== InterviewTemplateStatus.ACTIVE || !globalTemplate.templateBlobUrl) {
      throw new Error("This template is not ready for practice.");
    }

    // Create user-scoped template copy
    const userTemplate = await prisma.interviewTemplate.create({
      data: {
        userId: dbUser.id,
        role: globalTemplate.role,
        experienceLevel: globalTemplate.experienceLevel,
        difficulty: globalTemplate.difficulty,
        interviewType: globalTemplate.interviewType,
        questionCount: globalTemplate.questionCount,
        estimatedDuration: globalTemplate.estimatedDuration,
        templateBlobUrl: globalTemplate.templateBlobUrl,
        status: InterviewTemplateStatus.ACTIVE,
        personalized: false,
      },
    });

    // Create session
    const session = await prisma.interviewSession.create({
      data: {
        userId: dbUser.id,
        globalInterviewTemplateId: globalTemplate.id,
        interviewTemplateId: userTemplate.id,
        templateSource: InterviewTemplateSource.GLOBAL,
        role: globalTemplate.role,
        experienceLevel: globalTemplate.experienceLevel,
        difficulty: globalTemplate.difficulty,
        interviewType: globalTemplate.interviewType,
        questionCount: globalTemplate.questionCount,
        estimatedDuration: globalTemplate.estimatedDuration,
        blobUrl: globalTemplate.templateBlobUrl,
        status: InterviewStatus.READY,
        personalized: false,
      },
    });

    return { interviewId: session.id };
  });
}

