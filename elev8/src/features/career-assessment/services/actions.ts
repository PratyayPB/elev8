"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { ProfileService, calculateProfileCompleteness } from "@/features/profile/services";
import { CareerAssessmentService } from "./career-assessment.service";
import { ModuleActivityContextService } from "./module-activity-context.service";
import { CareerAssessmentResult } from "../types";

export async function getLatestAssessmentAction(): Promise<{
  assessment: CareerAssessmentResult | null;
  isStale: boolean;
  profileComplete: boolean;
}> {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return { assessment: null, isStale: false, profileComplete: false };
  }

  const user = await prisma.user.findUnique({
    where: { clerkId },
  });

  if (!user) {
    return { assessment: null, isStale: false, profileComplete: false };
  }

  const profile = await ProfileService.getProfile(user.id);
  const completeness = calculateProfileCompleteness(profile);
  const profileComplete = completeness.state === "COMPLETED";

  if (!profile) {
    return { assessment: null, isStale: false, profileComplete: false };
  }

  const assessment = await CareerAssessmentService.getLatestAssessment(
    user.id,
    profile.profileVersion
  );

  return {
    assessment,
    isStale: assessment?.isStale || false,
    profileComplete,
  };
}

export async function createAssessmentAction(): Promise<{
  success: boolean;
  assessment?: CareerAssessmentResult;
  error?: string;
}> {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return { success: false, error: "Unauthorized" };
    }

    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      return { success: false, error: "User not found" };
    }

    const profile = await ProfileService.getProfile(user.id);
    if (!profile) {
      return {
        success: false,
        error: "You must create your profile before taking an assessment.",
      };
    }

    const completeness = calculateProfileCompleteness(profile);
    if (completeness.state !== "COMPLETED") {
      return {
        success: false,
        error: "Your profile must be 100% complete before taking a Career Assessment.",
      };
    }

    const activity = await ModuleActivityContextService.getRecentActivity(user.id);
    const assessment = await CareerAssessmentService.createAssessment(
      user.id,
      profile,
      activity
    );

    revalidatePath("/dashboard/career-assessment");
    revalidatePath("/dashboard");

    return { success: true, assessment };
  } catch (error: any) {
    console.error("[createAssessmentAction] Error:", error);
    return {
      success: false,
      error: error?.message || "Failed to generate Career Assessment.",
    };
  }
}
