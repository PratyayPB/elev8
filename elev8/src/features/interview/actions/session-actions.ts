"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { InterviewArtifact } from "../types";
import { InterviewStatus, JobType, JobStatus } from "@prisma/client";
import { tasks } from "@trigger.dev/sdk/v3";

/**
 * Fetches the interview metadata and its corresponding Blob artifact.
 */
export async function fetchSessionArtifact(interviewId: string) {
  const { userId: clerkId } = await auth();
  if (!clerkId) throw new Error("Unauthorized");

  const dbUser = await prisma.user.findUnique({ where: { clerkId } });
  if (!dbUser) throw new Error("User not found");

  const interview = await prisma.interviewSession.findUnique({
    where: { id: interviewId, userId: dbUser.id },
  });

  if (!interview) {
    throw new Error("Interview not found");
  }

  if (!interview.blobUrl) {
    throw new Error("Interview generation is still in progress or failed.");
  }

  const artifact = await BlobStorageService.fetchJson<InterviewArtifact>(interview.blobUrl);
  return { interview, artifact };
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
  const { userId: clerkId } = await auth();
  if (!clerkId) throw new Error("Unauthorized");

  const dbUser = await prisma.user.findUnique({ where: { clerkId } });
  if (!dbUser) throw new Error("User not found");

  // Verify ownership
  const interview = await prisma.interviewSession.findUnique({
    where: { id: interviewId, userId: dbUser.id },
  });

  if (!interview) throw new Error("Interview not found or unauthorized");

  const newBlobUrl = await BlobStorageService.replaceJson(
    currentBlobUrl,
    `interviews/${interviewId}.json`,
    artifact
  );

  await prisma.interviewSession.update({
    where: { id: interviewId },
    data: {
      blobUrl: newBlobUrl,
      updatedAt: new Date(),
      ...(durationSeconds !== undefined && { durationSeconds }),
    },
  });

  return newBlobUrl;
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
  const { userId: clerkId } = await auth();
  if (!clerkId) throw new Error("Unauthorized");

  const dbUser = await prisma.user.findUnique({ where: { clerkId } });
  if (!dbUser) throw new Error("User not found");

  const interview = await prisma.interviewSession.findUnique({
    where: { id: interviewId, userId: dbUser.id },
  });

  if (!interview) throw new Error("Interview not found or unauthorized");

  // Save the final version to Blob
  const newBlobUrl = await BlobStorageService.replaceJson(
    currentBlobUrl,
    `interviews/${interviewId}.json`,
    artifact
  );

  await prisma.interviewSession.update({
    where: { id: interviewId },
    data: {
      blobUrl: newBlobUrl,
      status: InterviewStatus.COMPLETED,
      updatedAt: new Date(),
      ...(durationSeconds !== undefined && { durationSeconds }),
    },
  });

  // Create Job for Assessment (Phase 3.4 will actually trigger this)
  const job = await prisma.job.create({
    data: {
      userId: dbUser.id,
      type: JobType.INTERVIEW, // We can reuse INTERVIEW or create a specific one
      status: JobStatus.QUEUED,
      progress: 0,
      step: "Queued for Assessment",
      artifactId: interviewId,
      artifactType: "INTERVIEW_ASSESSMENT",
    },
  });

  // Trigger background assessment task
  let triggerRunId: string | undefined;
  try {
    const handle = await tasks.trigger<typeof import("@/trigger/assess-interview").assessInterviewJob>(
      "assess-interview",
      {
        interviewId: interview.id,
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
    await prisma.job.update({
      where: { id: job.id },
      data: {
        status: JobStatus.FAILED,
        error: error instanceof Error ? error.message : "Trigger failed",
      },
    });
    // Do not fail the interview itself since it is COMPLETED, just the assessment job failed.
  }

  return { success: true, newBlobUrl, jobId: job.id, triggerRunId };
}
