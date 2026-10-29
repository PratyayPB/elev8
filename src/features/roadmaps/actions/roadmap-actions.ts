"use server";

import { getOrCreateDbUser } from "@/lib/auth";
import {
  RoadmapLibraryService,
  GetRoadmapsOptions,
} from "@/services/roadmaps/roadmap-library.service";
import { RoadmapActionsService } from "@/services/roadmaps/roadmap-actions.service";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { JobStatus, JobType, RoadmapStatus } from "@prisma/client";
import { RoadmapRequest, RoadmapRequestSchema } from "@/features/roadmaps/types";
import { generateRoadmapTask } from "@/trigger/generate-roadmap";
import { tasks } from "@trigger.dev/sdk/v3";
import { ModuleActivityService } from "@/features/progress/services";
import { ModuleActivityEventType, ModuleType, ModuleCompletionStatus } from "@/features/progress/types";
import { RoadmapArtifactService } from "@/services/roadmaps/roadmap-artifact.service";
import { RoadmapGenerationService } from "@/services/roadmaps/roadmap-generation.service";
import { JobService } from "@/services/jobs/job.service";
import { parseCareerLevel, normalizeRole, formatCareerLevelToExperience } from "../utils";
import { normalizeError, safeAction } from "@/lib/error-handler";

async function recordRoadmapActivity(input: {
  userId: string;
  eventType: ModuleActivityEventType;
  entityId: string;
  completionStatus?: ModuleCompletionStatus;
  metadata?: Record<string, unknown>;
}) {
  try {
    await ModuleActivityService.recordActivity({
      userId: input.userId,
      module: ModuleType.ROADMAP,
      eventType: input.eventType,
      completionStatus: input.completionStatus,
      entityId: input.entityId,
      metadata: input.metadata,
    });
  } catch (error) {
    console.warn("[RoadmapActivity] Failed to record activity:", error);
  }
}

export async function fetchUserRoadmaps(
  options: Omit<GetRoadmapsOptions, "userId">
) {
  return safeAction(async () => {
    const user = await getOrCreateDbUser();
    return RoadmapLibraryService.getRoadmaps({ ...options, userId: user.id });
  });
}

export async function duplicateRoadmapAction(roadmapId: string) {
  return safeAction(async () => {
    if (!roadmapId || typeof roadmapId !== "string" || roadmapId.trim().length === 0) {
      throw new Error("Invalid roadmap ID.");
    }
    const user = await getOrCreateDbUser();
    const result = await RoadmapActionsService.duplicateRoadmap(
      roadmapId.trim(),
      user.id
    );
    revalidatePath("/dashboard/roadmaps");
    return result;
  });
}

export async function deleteRoadmapAction(roadmapId: string) {
  return safeAction(async () => {
    if (!roadmapId || typeof roadmapId !== "string" || roadmapId.trim().length === 0) {
      throw new Error("Invalid roadmap ID.");
    }
    const user = await getOrCreateDbUser();
    const result = await RoadmapActionsService.deleteRoadmap(roadmapId.trim(), user.id);
    revalidatePath("/dashboard/roadmaps");
    return result;
  });
}

export async function generateRoadmapAction(rawPayload: RoadmapRequest) {
  return safeAction(async () => {
    const requestPayload = RoadmapRequestSchema.parse(rawPayload);
    const user = await getOrCreateDbUser();
    const isPersonalized = !requestPayload.personalization.skipped;

    // 1. Generic Roadmap: Check cache in GlobalRoadmap table for instant reuse
    if (!isPersonalized) {
      const normalizedRole = normalizeRole(requestPayload.role);
      const experienceLevel = parseCareerLevel(requestPayload.experienceLevel);

      const existingGlobal = await prisma.globalRoadmap.findUnique({
        where: {
          normalizedRole_experienceLevel: {
            normalizedRole,
            experienceLevel,
          },
        },
      });

      let globalRoadmap: any = null;

      if (existingGlobal) {
        if (existingGlobal.status === RoadmapStatus.COMPLETED) {
          console.log(
            `[GlobalRoadmap] Cache hit for "${normalizedRole}" (${experienceLevel}). Reusing ${existingGlobal.id}.`
          );
          await recordRoadmapActivity({
            userId: user.id,
            eventType: ModuleActivityEventType.ROADMAP_GENERATED,
            entityId: existingGlobal.id,
            completionStatus: ModuleCompletionStatus.COMPLETED,
            metadata: {
              source: "GLOBAL_ROADMAP_CACHE_HIT",
              roadmapId: existingGlobal.id,
              targetRole: existingGlobal.targetRole,
              experienceLevel: existingGlobal.experienceLevel,
            },
          });
          return {
            roadmapId: existingGlobal.id,
            jobId: null,
            isExisting: true,
          };
        }

        if (existingGlobal.status === RoadmapStatus.IN_PROGRESS) {
          const activeJob = await prisma.job.findFirst({
            where: {
              artifactId: existingGlobal.id,
              status: JobStatus.RUNNING,
            },
            orderBy: { createdAt: "desc" },
          });

          return {
            roadmapId: existingGlobal.id,
            jobId: activeJob?.id || null,
            isExisting: true,
          };
        }

        if (existingGlobal.status === RoadmapStatus.FAILED) {
          globalRoadmap = await prisma.globalRoadmap.update({
            where: { id: existingGlobal.id },
            data: {
              status: RoadmapStatus.IN_PROGRESS,
              createdByUserId: existingGlobal.createdByUserId || user.id,
              title: `${requestPayload.role} Roadmap`,
              description: `Generic career roadmap for ${requestPayload.role} (${requestPayload.experienceLevel} level).`,
            },
          });
          await recordRoadmapActivity({
            userId: user.id,
            eventType: ModuleActivityEventType.ROADMAP_GENERATION_STARTED,
            entityId: globalRoadmap.id,
            metadata: { source: "GLOBAL_ROADMAP_RETRY", roadmapId: globalRoadmap.id },
          });
        }
      }

      // Cache miss: Create GlobalRoadmap placeholder
      if (!globalRoadmap) {
        try {
          const targetId = `rm_global_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
          globalRoadmap = await prisma.globalRoadmap.create({
            data: {
              id: targetId,
              createdByUserId: user.id,
              title: `${requestPayload.role} Roadmap`,
              description: `Generic career roadmap for ${requestPayload.role} (${requestPayload.experienceLevel} level).`,
              targetRole: requestPayload.role,
              normalizedRole,
              experienceLevel,
              status: RoadmapStatus.IN_PROGRESS,
            },
          });
          await recordRoadmapActivity({
            userId: user.id,
            eventType: ModuleActivityEventType.ROADMAP_GENERATION_STARTED,
            entityId: globalRoadmap.id,
            metadata: { source: "GLOBAL_ROADMAP_CREATION", roadmapId: globalRoadmap.id },
          });
        } catch (err: any) {
          if (err?.code === "P2002") {
            const raceGlobal = await prisma.globalRoadmap.findUnique({
              where: {
                normalizedRole_experienceLevel: {
                  normalizedRole,
                  experienceLevel,
                },
              },
            });
            if (raceGlobal) {
              if (raceGlobal.status === RoadmapStatus.COMPLETED) {
                await recordRoadmapActivity({
                  userId: user.id,
                  eventType: ModuleActivityEventType.ROADMAP_GENERATED,
                  entityId: raceGlobal.id,
                  completionStatus: ModuleCompletionStatus.COMPLETED,
                  metadata: {
                    source: "GLOBAL_ROADMAP_RACE_CACHE_HIT",
                    roadmapId: raceGlobal.id,
                  },
                });
                return {
                  roadmapId: raceGlobal.id,
                  jobId: null,
                  isExisting: true,
                };
              }
              const activeJob = await prisma.job.findFirst({
                where: {
                  artifactId: raceGlobal.id,
                  status: JobStatus.RUNNING,
                },
                orderBy: { createdAt: "desc" },
              });
              return {
                roadmapId: raceGlobal.id,
                jobId: activeJob?.id || null,
                isExisting: true,
              };
            }
          }
          throw err;
        }
      }

      const job = await prisma.job.create({
        data: {
          userId: user.id,
          type: JobType.ROADMAP,
          status: JobStatus.RUNNING,
          progress: 5,
          step: "Queued for AI Generation",
          artifactId: globalRoadmap.id,
          artifactType: "GLOBAL_ROADMAP",
        },
      });

      try {
        const handle = await tasks.trigger<typeof generateRoadmapTask>(
          "generate-roadmap",
          {
            ...requestPayload,
            jobId: job.id,
            userId: user.id,
            roadmapId: globalRoadmap.id,
            isGlobal: true,
            normalizedRole,
          }
        );

        if (handle?.id) {
          await prisma.job.update({
            where: { id: job.id },
            data: { triggerRunId: handle.id },
          });
        }
      } catch (triggerError) {
        console.warn(
          "[Trigger.dev] Direct cloud trigger skipped, running local background task...",
          triggerError
        );

        (async () => {
          try {
            await JobService.updateProgress(job.id, 25, "Generating Roadmap");
            const generatedRoadmap =
              await RoadmapGenerationService.generate(requestPayload);

            await JobService.updateProgress(job.id, 65, "Computing Layout");
            const artifact = RoadmapArtifactService.buildArtifact(generatedRoadmap);

            await JobService.updateProgress(job.id, 80, "Uploading Artifact");
            const blobUrl = await RoadmapArtifactService.uploadArtifact(
              globalRoadmap.id,
              artifact
            );

            await JobService.updateProgress(job.id, 95, "Saving Metadata");
            await prisma.globalRoadmap.update({
              where: { id: globalRoadmap.id },
              data: {
                title: generatedRoadmap.metadata.title,
                description: generatedRoadmap.summary,
                estimatedDuration: generatedRoadmap.metadata.estimatedDuration,
                status: RoadmapStatus.COMPLETED,
                blobUrl,
              },
            });
            await JobService.completeJob(job.id, globalRoadmap.id, "GLOBAL_ROADMAP");
            await recordRoadmapActivity({
              userId: user.id,
              eventType: ModuleActivityEventType.ROADMAP_GENERATED,
              entityId: globalRoadmap.id,
              completionStatus: ModuleCompletionStatus.COMPLETED,
              metadata: { source: "LOCAL_GLOBAL_ROADMAP_FALLBACK", roadmapId: globalRoadmap.id },
            });
          } catch (err: any) {
            console.error("[Local Background Job Error]:", err);
            const appError = normalizeError(err);
            await JobService.failJob(job.id, appError.message);
            await prisma.globalRoadmap.update({
              where: { id: globalRoadmap.id },
              data: { status: RoadmapStatus.FAILED },
            }).catch((dbErr) => console.warn("[Local Background Job] Failed to mark GlobalRoadmap as FAILED:", dbErr));
            await recordRoadmapActivity({
              userId: user.id,
              eventType: ModuleActivityEventType.ROADMAP_GENERATION_FAILED,
              entityId: globalRoadmap.id,
              metadata: { source: "LOCAL_GLOBAL_ROADMAP_FALLBACK", error: appError.message },
            });
          }
        })();
      }

      revalidatePath("/dashboard/roadmaps");
      return {
        roadmapId: globalRoadmap.id,
        jobId: job.id,
      };
    }

    // 2. Personalized Roadmap: Create user-specific Roadmap
    const targetId = `rm_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const profileSnapshot = requestPayload.personalization.profileContext ?? null;

    const roadmap = await prisma.roadmap.create({
      data: {
        id: targetId,
        userId: user.id,
        title: `${requestPayload.role} Roadmap`,
        description: `Personalized career roadmap for ${requestPayload.role} (${requestPayload.experienceLevel} level).`,
        targetRole: requestPayload.role,
        experienceLevel: parseCareerLevel(requestPayload.experienceLevel),
        status: RoadmapStatus.IN_PROGRESS,
        personalized: true,
        profileSnapshot: profileSnapshot ? JSON.parse(JSON.stringify(profileSnapshot)) : undefined,
      },
    });

    const job = await prisma.job.create({
      data: {
        userId: user.id,
        type: JobType.ROADMAP,
        status: JobStatus.RUNNING,
        progress: 5,
        step: "Queued for AI Generation",
        artifactId: roadmap.id,
        artifactType: "ROADMAP",
      },
    });

    await recordRoadmapActivity({
      userId: user.id,
      eventType: ModuleActivityEventType.ROADMAP_GENERATION_STARTED,
      entityId: roadmap.id,
      metadata: { source: "PERSONALIZED_ROADMAP_CREATION", roadmapId: roadmap.id },
    });

    try {
      const handle = await tasks.trigger<typeof generateRoadmapTask>(
        "generate-roadmap",
        {
          ...requestPayload,
          jobId: job.id,
          userId: user.id,
          roadmapId: roadmap.id,
          isGlobal: false,
        }
      );

      if (handle?.id) {
        await prisma.job.update({
          where: { id: job.id },
          data: { triggerRunId: handle.id },
        });
      }
    } catch (triggerError) {
      console.warn(
        "[Trigger.dev] Direct cloud trigger skipped, running local background task...",
        triggerError
      );

      (async () => {
        try {
          await JobService.updateProgress(job.id, 25, "Generating Roadmap");
          const generatedRoadmap =
            await RoadmapGenerationService.generate(requestPayload);

          await JobService.updateProgress(job.id, 65, "Computing Layout");
          const artifact = RoadmapArtifactService.buildArtifact(generatedRoadmap);

          await JobService.updateProgress(job.id, 80, "Uploading Artifact");
          const blobUrl = await RoadmapArtifactService.uploadArtifact(
            roadmap.id,
            artifact
          );

          await JobService.updateProgress(job.id, 95, "Saving Metadata");
          await prisma.roadmap.update({
            where: { id: roadmap.id },
            data: {
              title: generatedRoadmap.metadata.title,
              description: generatedRoadmap.summary,
              estimatedDuration: generatedRoadmap.metadata.estimatedDuration,
              status: RoadmapStatus.COMPLETED,
              blobUrl,
            },
          });
          await JobService.completeJob(job.id, roadmap.id, "ROADMAP");
          await recordRoadmapActivity({
            userId: user.id,
            eventType: ModuleActivityEventType.ROADMAP_GENERATED,
            entityId: roadmap.id,
            completionStatus: ModuleCompletionStatus.COMPLETED,
            metadata: { source: "LOCAL_PERSONALIZED_ROADMAP_FALLBACK", roadmapId: roadmap.id },
          });
        } catch (err: any) {
          console.error("[Local Background Job Error]:", err);
          const appError = normalizeError(err);
          await JobService.failJob(job.id, appError.message);
          await prisma.roadmap.update({
            where: { id: roadmap.id },
            data: { status: RoadmapStatus.FAILED },
          }).catch((dbErr) => console.warn("[Local Background Job] Failed to mark Roadmap as FAILED:", dbErr));
          await recordRoadmapActivity({
            userId: user.id,
            eventType: ModuleActivityEventType.ROADMAP_GENERATION_FAILED,
            entityId: roadmap.id,
            metadata: { source: "LOCAL_PERSONALIZED_ROADMAP_FALLBACK", error: appError.message },
          });
        }
      })();
    }

    revalidatePath("/dashboard/roadmaps");
    return {
      roadmapId: roadmap.id,
      jobId: job.id,
    };
  });
}

export async function retryRoadmapGenerationAction(roadmapId: string) {
  return safeAction(async () => {
    if (!roadmapId || typeof roadmapId !== "string" || roadmapId.trim().length === 0) {
      throw new Error("Invalid roadmap ID.");
    }
    const sanitizedId = roadmapId.trim();
    const user = await getOrCreateDbUser();

    // 1. Block GlobalRoadmap retries
    const globalRoadmap = await prisma.globalRoadmap.findUnique({
      where: { id: sanitizedId },
      select: { id: true },
    });

    if (globalRoadmap) {
      throw new Error("Regeneration and Try Again are not available for global roadmaps.");
    }

    // 2. Check personal Roadmap
    const personalRoadmap = await prisma.roadmap.findUnique({
      where: { id: sanitizedId },
    });

    if (!personalRoadmap) {
      throw new Error("Roadmap not found.");
    }

    if (personalRoadmap.userId !== user.id) {
      throw new Error("Unauthorized: You can only regenerate your own roadmaps.");
    }

    const role = personalRoadmap.targetRole || personalRoadmap.title || "Software Engineer";
    const experienceLevel = formatCareerLevelToExperience(personalRoadmap.experienceLevel);
    const profileContext = (personalRoadmap.profileSnapshot as any) || undefined;
    const isPersonalized = Boolean(personalRoadmap.personalized);

    const requestPayload: RoadmapRequest = {
      role,
      experienceLevel,
      personalization: {
        skipped: !isPersonalized,
        profileContext,
      },
    };

    // Update status to IN_PROGRESS
    await prisma.roadmap.update({
      where: { id: personalRoadmap.id },
      data: { status: RoadmapStatus.IN_PROGRESS },
    });

    const job = await prisma.job.create({
      data: {
        userId: user.id,
        type: JobType.ROADMAP,
        status: JobStatus.RUNNING,
        progress: 5,
        step: "Queued for AI Generation",
        artifactId: personalRoadmap.id,
        artifactType: "ROADMAP",
      },
    });

    await recordRoadmapActivity({
      userId: user.id,
      eventType: ModuleActivityEventType.ROADMAP_GENERATION_STARTED,
      entityId: personalRoadmap.id,
      metadata: { source: "PERSONALIZED_ROADMAP_RETRY", roadmapId: personalRoadmap.id },
    });

    try {
      const handle = await tasks.trigger<typeof generateRoadmapTask>(
        "generate-roadmap",
        {
          ...requestPayload,
          jobId: job.id,
          userId: user.id,
          roadmapId: personalRoadmap.id,
          isGlobal: false,
        }
      );

      if (handle?.id) {
        await prisma.job.update({
          where: { id: job.id },
          data: { triggerRunId: handle.id },
        });
      }
    } catch (triggerError) {
      console.warn(
        "[Trigger.dev] Direct cloud trigger skipped, running local background task...",
        triggerError
      );

      (async () => {
        try {
          await JobService.updateProgress(job.id, 25, "Generating Roadmap");
          const generatedRoadmap =
            await RoadmapGenerationService.generate(requestPayload);

          await JobService.updateProgress(job.id, 65, "Computing Layout");
          const artifact = RoadmapArtifactService.buildArtifact(generatedRoadmap);

          await JobService.updateProgress(job.id, 80, "Uploading Artifact");
          const blobUrl = await RoadmapArtifactService.uploadArtifact(
            personalRoadmap.id,
            artifact
          );

          await JobService.updateProgress(job.id, 95, "Saving Metadata");
          await prisma.roadmap.update({
            where: { id: personalRoadmap.id },
            data: {
              title: generatedRoadmap.metadata.title,
              description: generatedRoadmap.summary,
              estimatedDuration: generatedRoadmap.metadata.estimatedDuration,
              status: RoadmapStatus.COMPLETED,
              blobUrl,
            },
          });
          await JobService.completeJob(job.id, personalRoadmap.id, "ROADMAP");
          await recordRoadmapActivity({
            userId: user.id,
            eventType: ModuleActivityEventType.ROADMAP_GENERATED,
            entityId: personalRoadmap.id,
            completionStatus: ModuleCompletionStatus.COMPLETED,
            metadata: { source: "LOCAL_PERSONALIZED_ROADMAP_FALLBACK", roadmapId: personalRoadmap.id },
          });
        } catch (err: any) {
          console.error("[Local Background Job Error]:", err);
          const appError = normalizeError(err);
          await JobService.failJob(job.id, appError.message);
          await prisma.roadmap.update({
            where: { id: personalRoadmap.id },
            data: { status: RoadmapStatus.FAILED },
          }).catch((dbErr) => console.warn("[Local Background Job] Failed to mark Roadmap as FAILED:", dbErr));
          await recordRoadmapActivity({
            userId: user.id,
            eventType: ModuleActivityEventType.ROADMAP_GENERATION_FAILED,
            entityId: personalRoadmap.id,
            metadata: { source: "LOCAL_PERSONALIZED_ROADMAP_FALLBACK", error: appError.message },
          });
        }
      })();
    }

    revalidatePath("/dashboard/roadmaps");
    revalidatePath(`/dashboard/roadmaps/${personalRoadmap.id}`);
    return {
      roadmapId: personalRoadmap.id,
      jobId: job.id,
    };
  });
}

