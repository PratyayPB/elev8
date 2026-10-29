"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { InterviewArtifact } from "../types";
import { InterviewStatus, JobType, JobStatus } from "@prisma/client";
import { tasks } from "@trigger.dev/sdk/v3";
import { ModuleActivityService } from "@/features/progress/services";
import {
  ModuleType,
  ModuleCompletionStatus,
  ModuleActivityEventType,
} from "@/features/progress/types";
import { normalizeError, safeAction } from "@/lib/error-handler";

/**
 * Fetches the interview metadata and its corresponding Blob artifact.
 */
export async function fetchSessionArtifact(interviewId: string) {
  return safeAction(async () => {
    if (!interviewId || typeof interviewId !== "string" || interviewId.trim().length === 0) {
      throw new Error("Invalid interview ID.");
    }
    const sanitizedId = interviewId.trim();

    const { userId: clerkId } = await auth();
    if (!clerkId) throw new Error("Unauthorized");

    const dbUser = await prisma.user.findUnique({ where: { clerkId } });
    if (!dbUser) throw new Error("User not found");

    const interview = await prisma.interviewSession.findUnique({
      where: { id: sanitizedId, userId: dbUser.id },
    });

    if (!interview) {
      throw new Error("Interview not found");
    }

    if (!interview.blobUrl) {
      throw new Error("Interview generation is still in progress or failed.");
    }

    let artifact: InterviewArtifact;
    try {
      artifact = await BlobStorageService.fetchJson<InterviewArtifact>(interview.blobUrl);
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes("Not Found")) {
        await prisma.interviewSession.update({
          where: { id: sanitizedId },
          data: { status: InterviewStatus.FAILED },
        });
        throw new Error(
          "The storage artifact for this interview was not found. The interview session has been marked as failed."
        );
      }
      throw error;
    }

    await ModuleActivityService.recordActivity({
      userId: dbUser.id,
      module: ModuleType.INTERVIEW_PRACTICE,
      eventType: ModuleActivityEventType.INTERVIEW_VIEWED,
      entityId: sanitizedId,
      metadata: {
        source: "INTERVIEW_SESSION_FETCH",
        interviewId: sanitizedId,
        role: interview.role,
      },
    }).catch((error) =>
      console.warn("[SessionActions] Failed to record interview view activity:", error)
    );

    return { interview, artifact };
  });
}

/**
 * Replaces the old blob with a new one and updates the Interview record with the new URL.
 */
export async function saveSessionProgress(
  interviewId: string,
  currentBlobUrl: string,
  artifact: InterviewArtifact,
  durationSeconds?: number
) {
  return safeAction(async () => {
    if (!interviewId || typeof interviewId !== "string" || interviewId.trim().length === 0) {
      throw new Error("Invalid interview ID.");
    }
    const sanitizedId = interviewId.trim();

    const { userId: clerkId } = await auth();
    if (!clerkId) throw new Error("Unauthorized");

    const dbUser = await prisma.user.findUnique({ where: { clerkId } });
    if (!dbUser) throw new Error("User not found");

    // Verify ownership
    const interview = await prisma.interviewSession.findUnique({
      where: { id: sanitizedId, userId: dbUser.id },
      select: { id: true, role: true },
    });

    if (!interview) throw new Error("Interview not found or unauthorized");

    // We no longer manually delete the old blob because upsertJson safely overwrites in place
    const newBlobUrl = await BlobStorageService.upsertJson(
      `interviews/${sanitizedId}.json`,
      artifact
    );

    await prisma.interviewSession.update({
      where: { id: sanitizedId },
      data: {
        blobUrl: newBlobUrl,
        updatedAt: new Date(),
        ...(durationSeconds !== undefined && { durationSeconds }),
      },
    });

    // Track partial progress
    try {
      const answeredCount =
        artifact.answers?.filter((a) => a.answerText && a.answerText.trim().length > 0)
          .length ||
        artifact.answers?.length ||
        0;
      const totalCount = artifact.questions?.length || 10;
      const isAllAnswered = answeredCount >= totalCount && totalCount > 0;

      await ModuleActivityService.recordActivity({
        userId: dbUser.id,
        module: ModuleType.INTERVIEW_PRACTICE,
        eventType: isAllAnswered
          ? ModuleActivityEventType.INTERVIEW_ALL_QUESTIONS_ANSWERED
          : ModuleActivityEventType.INTERVIEW_QUESTION_ANSWERED,
        completionStatus: isAllAnswered
          ? ModuleCompletionStatus.COMPLETED
          : ModuleCompletionStatus.STARTED,
        entityId: sanitizedId,
        metadata: {
          interviewId: sanitizedId,
          role: interview.role,
          questionNumber: answeredCount,
          answeredQuestions: answeredCount,
          totalQuestions: totalCount,
        },
      });
    } catch (err) {
      console.warn("[SessionActions] Failed to record interview progress activity:", err);
    }

    return newBlobUrl;
  });
}

/**
 * Submits the interview and queues the assessment job.
 */
export async function submitInterview(
  interviewId: string,
  currentBlobUrl: string,
  artifact: InterviewArtifact,
  durationSeconds?: number
) {
  return safeAction(async () => {
    if (!interviewId || typeof interviewId !== "string" || interviewId.trim().length === 0) {
      throw new Error("Invalid interview ID.");
    }
    const sanitizedId = interviewId.trim();

    const { userId: clerkId } = await auth();
    if (!clerkId) throw new Error("Unauthorized");

    const dbUser = await prisma.user.findUnique({ where: { clerkId } });
    if (!dbUser) throw new Error("User not found");

    const interview = await prisma.interviewSession.findUnique({
      where: { id: sanitizedId, userId: dbUser.id },
      select: { id: true, role: true },
    });

    if (!interview) throw new Error("Interview not found or unauthorized");

    const isTemplateBlob = currentBlobUrl.includes("interview-templates/");
    const oldBlobToDelete = isTemplateBlob ? "" : currentBlobUrl;

    // Save the final version to Blob
    const newBlobUrl = await BlobStorageService.replaceJson(
      oldBlobToDelete,
      `interviews/${sanitizedId}.json`,
      artifact
    );

    await prisma.interviewSession.update({
      where: { id: sanitizedId },
      data: {
        blobUrl: newBlobUrl,
        status: InterviewStatus.COMPLETED,
        updatedAt: new Date(),
        ...(durationSeconds !== undefined && { durationSeconds }),
      },
    });

    try {
      await ModuleActivityService.recordActivity({
        userId: dbUser.id,
        module: ModuleType.INTERVIEW_PRACTICE,
        eventType: ModuleActivityEventType.INTERVIEW_SUBMITTED,
        completionStatus: ModuleCompletionStatus.COMPLETED,
        entityId: sanitizedId,
        metadata: {
          interviewId: sanitizedId,
          role: interview.role,
          assessmentSubmitted: true,
        },
      });
    } catch (err) {
      console.warn("[SessionActions] Failed to record interview submission activity:", err);
    }

    // Create Job for Assessment
    const job = await prisma.job.create({
      data: {
        userId: dbUser.id,
        type: JobType.INTERVIEW,
        status: JobStatus.QUEUED,
        progress: 0,
        step: "Queued for Assessment",
        artifactId: sanitizedId,
        artifactType: "INTERVIEW_ASSESSMENT",
      },
    });

    try {
      await ModuleActivityService.recordActivity({
        userId: dbUser.id,
        module: ModuleType.INTERVIEW_PRACTICE,
        eventType: ModuleActivityEventType.INTERVIEW_EVALUATION_STARTED,
        completionStatus: ModuleCompletionStatus.STARTED,
        entityId: sanitizedId,
        metadata: {
          source: "SUBMIT_INTERVIEW",
          interviewId: sanitizedId,
          jobId: job.id,
          role: interview.role,
        },
      });
    } catch (err) {
      console.warn("[SessionActions] Failed to record evaluation start activity:", err);
    }

    // Trigger background assessment task
    let triggerRunId: string | undefined;
    try {
      const handle = await tasks.trigger<typeof import("@/trigger/assess-interview").assessInterviewJob>(
        "assess-interview",
        {
          interviewId: sanitizedId,
          jobId: job.id,
        }
      );
      triggerRunId = handle.id;

      await prisma.job.update({
        where: { id: job.id },
        data: { triggerRunId },
      });
    } catch (error) {
      console.error("Failed to trigger Trigger.dev assess-interview task:", error);
      const appError = normalizeError(error);
      await prisma.job.update({
        where: { id: job.id },
        data: {
          status: JobStatus.FAILED,
          error: appError.message,
        },
      });

      // Update interview status to reflect assessment failure
      await prisma.interviewSession.update({
        where: { id: sanitizedId },
        data: { status: InterviewStatus.ASSESSMENT_FAILED },
      });

      await ModuleActivityService.recordActivity({
        userId: dbUser.id,
        module: ModuleType.INTERVIEW_PRACTICE,
        eventType: ModuleActivityEventType.INTERVIEW_FAILED,
        entityId: sanitizedId,
        metadata: {
          source: "ASSESS_INTERVIEW_DISPATCH",
          interviewId: sanitizedId,
          jobId: job.id,
          error: appError.message,
        },
      }).catch((activityError) =>
        console.warn("[SessionActions] Failed to record interview failure activity:", activityError)
      );
      throw new Error(appError.message);
    }

    return { newBlobUrl, jobId: job.id, triggerRunId };
  });
}

export async function retryAssessmentAction(interviewId: string) {
  return safeAction(async () => {
    if (!interviewId || typeof interviewId !== "string" || interviewId.trim().length === 0) {
      throw new Error("Invalid interview ID.");
    }
    const sanitizedId = interviewId.trim();

    const { userId: clerkId } = await auth();
    if (!clerkId) throw new Error("Unauthorized");

    const dbUser = await prisma.user.findUnique({ where: { clerkId } });
    if (!dbUser) throw new Error("User not found");

    const interview = await prisma.interviewSession.findUnique({
      where: { id: sanitizedId, userId: dbUser.id },
      select: { id: true, status: true },
    });

    if (!interview) throw new Error("Interview not found or unauthorized");
    if (interview.status !== InterviewStatus.ASSESSMENT_FAILED) {
      throw new Error("Only failed assessments can be retried.");
    }

    // Create new Job for Assessment
    const job = await prisma.job.create({
      data: {
        userId: dbUser.id,
        type: JobType.INTERVIEW,
        status: JobStatus.QUEUED,
        progress: 0,
        step: "Queued for Assessment",
        artifactId: sanitizedId,
        artifactType: "INTERVIEW_ASSESSMENT",
      },
    });

    try {
      const handle = await tasks.trigger<typeof import("@/trigger/assess-interview").assessInterviewJob>(
        "assess-interview",
        {
          interviewId: sanitizedId,
          jobId: job.id,
        }
      );

      await prisma.$transaction([
        prisma.job.update({
          where: { id: job.id },
          data: { triggerRunId: handle.id },
        }),
        prisma.interviewSession.update({
          where: { id: sanitizedId },
          data: { status: InterviewStatus.COMPLETED },
        }),
      ]);
    } catch (error) {
      console.error("Failed to re-trigger Trigger.dev assess-interview task:", error);
      const appError = normalizeError(error);
      await prisma.job.update({
        where: { id: job.id },
        data: {
          status: JobStatus.FAILED,
          error: appError.message,
        },
      });
      throw new Error(appError.message);
    }

    return { jobId: job.id };
  });
}
