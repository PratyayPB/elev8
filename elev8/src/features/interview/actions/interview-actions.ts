"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { InterviewRequest } from "../types";
import { InterviewRequestSchema } from "../schemas/interview-request.schema";
import { JobType, JobStatus, InterviewStatus, InterviewType, InterviewTemplateType, InterviewTemplateStatus } from "@prisma/client";
import { tasks } from "@trigger.dev/sdk/v3";
import { generateInterviewTask } from "@/trigger/generate-interview";

function mapInterviewType(type: string): InterviewType {
  const norm = type.toUpperCase().replace(/[\s-]+/g, "_");
  if (norm.includes("BEHAVIORAL")) return InterviewType.BEHAVIORAL;
  if (norm.includes("SYSTEM_DESIGN")) return InterviewType.SYSTEM_DESIGN;
  if (norm.includes("ROLE_SPECIFIC")) return InterviewType.ROLE_SPECIFIC;
  if (norm.includes("GENERAL")) return InterviewType.GENERAL;
  return InterviewType.TECHNICAL;
}

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
  const mappedInterviewType = mapInterviewType(validatedRequest.interviewType);

  const profile = await prisma.profile.findUnique({
    where: { userId: dbUser.id },
    include: { skills: true, desiredSkills: true },
  });

  const isPersonalized = !validatedRequest.personalization.skipped;
  let profileSnapshot = null;
  if (isPersonalized && profile) {
    profileSnapshot = {
      name: profile.name,
      currentRole: profile.currentRole,
      yearsOfExperience: profile.yearsOfExperience,
      primaryGoal: profile.primaryGoal,
      skills: profile.skills.map(s => s.name),
    };
  }

  // 1. Create or get InterviewTemplate record
  const template = await prisma.interviewTemplate.create({
    data: {
      userId: dbUser.id,
      type: InterviewTemplateType.AI_GENERATED,
      role: validatedRequest.role,
      experienceLevel: (validatedRequest.experienceLevel.toUpperCase() === "BEGINNER" ? "ENTRY" : validatedRequest.experienceLevel.toUpperCase() === "ADVANCED" ? "SENIOR" : "MID") as any,
      interviewType: mappedInterviewType,
      questionCount: validatedRequest.questionCount,
      templateBlobUrl: "",
      status: InterviewTemplateStatus.ACTIVE,
      personalized: isPersonalized,
      profileSnapshot: profileSnapshot || undefined,
    },
  });

  // 2. Create InterviewSession Metadata record
  const interview = await prisma.interviewSession.create({
    data: {
      userId: dbUser.id,
      templateId: template.id,
      role: validatedRequest.role,
      experienceLevel: (validatedRequest.experienceLevel.toUpperCase() === "BEGINNER" ? "ENTRY" : validatedRequest.experienceLevel.toUpperCase() === "ADVANCED" ? "SENIOR" : "MID") as any,
      interviewType: mappedInterviewType,
      questionCount: validatedRequest.questionCount,
      status: InterviewStatus.GENERATING,
      personalized: isPersonalized,
      profileSnapshot: profileSnapshot || undefined,
    },
  });

  // 3. Create Job System record
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

  // 4. Trigger background generation task
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
    await prisma.interviewSession.update({
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
