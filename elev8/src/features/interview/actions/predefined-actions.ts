"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { PredefinedInterviewService } from "../services/predefined-interview.service";
import { PredefinedDifficulty, PredefinedInterviewSummary } from "../types/predefined-interview";

/**
 * Fetches the summary catalog of all predefined interviews.
 */
export async function fetchPredefinedCatalog(): Promise<PredefinedInterviewSummary[]> {
  return PredefinedInterviewService.getAllInterviews();
}

/**
 * Initiates a predefined interview session for the user.
 */
export async function startPredefinedInterview(
  templateIdOrRoleSlug: string,
  difficulty: string
): Promise<{ interviewId: string }> {
  const { userId: clerkId } = await auth();
  if (!clerkId) throw new Error("Unauthorized: Please sign in.");

  const dbUser = await prisma.user.findUnique({ where: { clerkId } });
  if (!dbUser) throw new Error("User record not found.");

  // Validate Selection
  const isValid = await PredefinedInterviewService.validateInterviewSelection(templateIdOrRoleSlug, difficulty);
  if (!isValid) {
    throw new Error("Invalid interview selection or difficulty.");
  }

  // Deep-clone template & create session
  const result = await PredefinedInterviewService.createSessionFromTemplate(
    dbUser.id,
    templateIdOrRoleSlug,
    difficulty as PredefinedDifficulty
  );

  return { interviewId: result.interviewId };
}
