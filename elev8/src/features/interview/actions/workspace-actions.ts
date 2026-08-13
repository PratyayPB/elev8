"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { InterviewStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function getWorkspaceInterviews() {
  const { userId: clerkId } = await auth();
  if (!clerkId) throw new Error("Unauthorized");

  const dbUser = await prisma.user.findUnique({ where: { clerkId } });
  if (!dbUser) throw new Error("User not found");

  const interviews = await prisma.interview.findMany({
    where: { userId: dbUser.id },
    orderBy: { updatedAt: "desc" },
  });

  return interviews;
}

export async function deleteInterview(interviewId: string) {
  const { userId: clerkId } = await auth();
  if (!clerkId) throw new Error("Unauthorized");

  const dbUser = await prisma.user.findUnique({ where: { clerkId } });
  if (!dbUser) throw new Error("User not found");

  // Verify ownership before deleting
  const interview = await prisma.interview.findUnique({
    where: { id: interviewId, userId: dbUser.id },
  });

  if (!interview) {
    throw new Error("Interview not found or unauthorized");
  }

  await prisma.interview.delete({
    where: { id: interviewId },
  });

  revalidatePath("/dashboard/interviews");
  return { success: true };
}

export async function getPerformanceStats() {
  const { userId: clerkId } = await auth();
  if (!clerkId) throw new Error("Unauthorized");

  const dbUser = await prisma.user.findUnique({ where: { clerkId } });
  if (!dbUser) throw new Error("User not found");

  const interviews = await prisma.interview.findMany({
    where: { userId: dbUser.id },
  });

  const total = interviews.length;
  const completed = interviews.filter((i) => i.status === InterviewStatus.COMPLETED);
  const inProgress = interviews.filter((i) => i.status === InterviewStatus.IN_PROGRESS);

  const scores = completed
    .map((i) => i.overallScore)
    .filter((s): s is number => s !== null && s !== undefined);

  const averageScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  const highestScore = scores.length > 0 ? Math.max(...scores) : 0;

  return {
    total,
    completedCount: completed.length,
    inProgressCount: inProgress.length,
    averageScore,
    highestScore,
  };
}
