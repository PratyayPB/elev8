"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { ProfileService, calculateProfileCompleteness } from "@/features/profile/services";
import { CareerAssessmentService } from "./career-assessment.service";
import { ModuleActivityContextService } from "./module-activity-context.service";
import { ModuleActivityService } from "@/features/progress/services";
import {
  ModuleActivityEventType,
  ModuleCompletionStatus,
  ModuleType,
} from "@/features/progress/types";
import { safeAction } from "@/lib/error-handler";

export async function createAssessmentAction() {
  return safeAction(async () => {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      throw new Error("Unauthorized: You must be logged in to generate a Career Assessment.");
    }

    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      throw new Error("User record not found.");
    }

    // Rate-limiting / anti-spam guard: prevent multiple submissions within 10 seconds
    const tenSecondsAgo = new Date(Date.now() - 10 * 1000);
    const recentDuplicate = await prisma.careerAssessment.findFirst({
      where: {
        userId: user.id,
        createdAt: { gte: tenSecondsAgo },
      },
    });

    if (recentDuplicate) {
      throw new Error("An assessment was just generated. Please wait a moment before trying again.");
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
      throw new Error("You must create your profile before taking an assessment.");
    }

    const completeness = calculateProfileCompleteness(profile);
    if (completeness.state !== "COMPLETED") {
      throw new Error("Your profile must be 100% complete before taking a Career Assessment.");
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

    return { assessment };
  });
}
