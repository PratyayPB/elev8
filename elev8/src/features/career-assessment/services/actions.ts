"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { ProfileService, calculateProfileCompleteness } from "@/features/profile/services";
import { CareerAssessmentService } from "./career-assessment.service";
import { ModuleActivityContextService } from "./module-activity-context.service";
import { CareerAssessmentResult } from "../types";
import { ModuleActivityService } from "@/features/progress/services";
import {
  ModuleActivityEventType,
  ModuleCompletionStatus,
  ModuleType,
} from "@/features/progress/types";

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

  if (assessment) {
    await ModuleActivityService.recordActivity({
      userId: user.id,
      module: ModuleType.CAREER_ASSESSMENT,
      eventType: ModuleActivityEventType.ASSESSMENT_VIEWED,
      entityId: assessment.id,
      metadata: {
        source: "CAREER_ASSESSMENT_PAGE",
        assessmentId: assessment.id,
        readinessScore: assessment.readinessScore,
      },
    }).catch((error) =>
      console.warn("[CareerAssessmentActions] Failed to record view activity:", error)
    );
  }

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

    await ModuleActivityService.recordActivity({
      userId: user.id,
      module: ModuleType.CAREER_ASSESSMENT,
      eventType: ModuleActivityEventType.ASSESSMENT_STARTED,
      completionStatus: ModuleCompletionStatus.STARTED,
      entityId: user.id,
      metadata: { source: "CREATE_ASSESSMENT_ACTION" },
    }).catch((error) =>
      console.warn("[CareerAssessmentActions] Failed to record start activity:", error)
    );

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

    await ModuleActivityService.recordActivity({
      userId: user.id,
      module: ModuleType.CAREER_ASSESSMENT,
      eventType: ModuleActivityEventType.ASSESSMENT_SUBMITTED,
      completionStatus: ModuleCompletionStatus.STARTED,
      entityId: user.id,
      metadata: {
        source: "CREATE_ASSESSMENT_ACTION",
        profileVersion: profile.profileVersion,
      },
    }).catch((error) =>
      console.warn("[CareerAssessmentActions] Failed to record submit activity:", error)
    );

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
