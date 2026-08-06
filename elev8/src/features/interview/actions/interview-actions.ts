"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { InterviewRequest } from "../types";
import { InterviewRequestSchema } from "../schemas/interview-request.schema";
import { JobType, JobStatus, InterviewStatus } from "@prisma/client";
import { tasks } from "@trigger.dev/sdk/v3";
import { generateInterviewTask } from "@/trigger/generate-interview";

export async function createInterviewJob(request: InterviewRequest) {
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

  // 1. Create Interview Metadata record
  const interview = await prisma.interview.create({
    data: {
      userId: dbUser.id,
      role: validatedRequest.role,
      difficulty: validatedRequest.difficulty,
      experienceLevel: validatedRequest.experienceLevel,
      interviewType: validatedRequest.interviewType,
      questionCount: validatedRequest.questionCount,
      status: InterviewStatus.GENERATING,
    },
  });

  // 2. Create Job System record
  const job = await prisma.job.create({
    data: {
      userId: dbUser.id,
      type: JobType.INTERVIEW,
      status: JobStatus.QUEUED,
      progress: 0,
      step: "Queued",
      artifactId: interview.id,
      artifactType: "INTERVIEW",
    },
  });

  // 3. Trigger background generation task
  let triggerRunId: string | undefined;
  try {
    const handle = await tasks.trigger<typeof generateInterviewTask>(
      "generate-interview",
      {
        interviewId: interview.id,
        jobId: job.id,
        userId: dbUser.id,
        request: validatedRequest,
      }
    );
    triggerRunId = handle.id;

    // Save triggerRunId to Job
    await prisma.job.update({
      where: { id: job.id },
      data: { triggerRunId },
    });
  } catch (error) {
    console.error("Failed to trigger Trigger.dev generate-interview task:", error);
    // Mark Job as failed if trigger fails immediately
    await prisma.job.update({
      where: { id: job.id },
      data: {
        status: JobStatus.FAILED,
        error: error instanceof Error ? error.message : "Trigger failed",
      },
    });
    await prisma.interview.update({
      where: { id: interview.id },
      data: { status: InterviewStatus.FAILED },
    });
    throw new Error("Failed to start background interview generation job.");
  }

  return {
    interviewId: interview.id,
    jobId: job.id,
    triggerRunId,
  };
}
