"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { tasks } from "@trigger.dev/sdk/v3";
import { RealtimeTokenService } from "@/services/jobs/realtime-token.service";
import { ProfileService, calculateProfileCompleteness } from "@/features/profile/services";
import { SkillGapService } from "@/features/skill-gap/services";
import { CareerAssessmentService } from "./career-assessment.service";
import { AssessmentQuotaService } from "./assessment-quota.service";
import { ModuleActivityContextService } from "./module-activity-context.service";
import { CareerAssessmentLLMService } from "./career-assessment-llm.service";
import { ModuleActivityService } from "@/features/progress/services";
import {
  ModuleActivityEventType,
  ModuleCompletionStatus,
  ModuleType,
} from "@/features/progress/types";
import { CareerAssessmentStatus } from "@prisma/client";
import { safeAction } from "@/lib/error-handler";
import { createNotification } from "@/lib/notify";
import type { generateAssessmentTask } from "@/trigger/generate-assessment";
import { CacheService, CacheKeys } from "@/services/cache";

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

    // Distributed anti-spam lock: prevent multiple submissions within 15 seconds
    const lockAcquired = await CacheService.acquireLock(
      CacheKeys.workflowLock("career-assessment", user.id),
      15
    );
    if (!lockAcquired) {
      throw new Error("An assessment was just initiated. Please wait a moment before trying again.");
    }

    // Weekly quota guard (Rolling 7-day window: max 3 per week)
    await AssessmentQuotaService.assertQuotaAvailable(user.id);
    await CacheService.del(CacheKeys.quota("assessment-weekly", user.id)).catch(() => {});

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

    // Initialize the pending Career Assessment in PROCESSING state
    const assessment = await CareerAssessmentService.initializeAssessment(user.id, profile);

    await ModuleActivityService.recordActivity({
      userId: user.id,
      module: ModuleType.CAREER_ASSESSMENT,
      eventType: ModuleActivityEventType.ASSESSMENT_SUBMITTED,
      completionStatus: ModuleCompletionStatus.STARTED,
      entityId: assessment.id,
      metadata: {
        source: "CREATE_ASSESSMENT_ACTION",
        assessmentId: assessment.id,
        profileVersion: profile.profileVersion,
      },
    }).catch((error) =>
      console.warn("[CareerAssessmentActions] Failed to record submit activity:", error)
    );

    // Trigger background execution on Trigger.dev
    let triggerRunId: string | undefined;
    let publicAccessToken: string | undefined;
    try {
      const handle = await tasks.trigger<typeof generateAssessmentTask>("generate-assessment", {
        assessmentId: assessment.id,
        userId: user.id,
        profileVersion: profile.profileVersion,
      });
      triggerRunId = handle?.id;

      if (handle?.id) {
        try {
          publicAccessToken = await RealtimeTokenService.mintRunToken({
            triggerRunId: handle.id,
          });
        } catch (tokenErr) {
          console.warn("[CareerAssessmentActions] Failed to mint public token:", tokenErr);
        }
      }
    } catch (triggerError) {
      console.warn(
        "[Trigger.dev] Direct trigger offline or skipped, running local background task:",
        triggerError
      );

      // Resilient local async execution
      (async () => {
        try {
          const activity = await ModuleActivityContextService.getRecentActivity(user.id);
          const gapAnalysis = await SkillGapService.calculateForProfile(profile).catch(() => undefined);
          const { output, model, processingDurationMs } =
            await CareerAssessmentLLMService.generateAssessment(profile, activity, gapAnalysis);

          await prisma.careerAssessment.update({
            where: { id: assessment.id },
            data: {
              readinessScore: output.readinessScore,
              strengths: output.strengths,
              gaps: output.gaps,
              suggestedFocusArea: output.suggestedFocusAreas,
              narrative: output.narrative,
              model,
              status: CareerAssessmentStatus.COMPLETED,
            },
          });

          await ModuleActivityService.recordActivity({
            userId: user.id,
            module: ModuleType.CAREER_ASSESSMENT,
            eventType: ModuleActivityEventType.ASSESSMENT_COMPLETED,
            completionStatus: ModuleCompletionStatus.COMPLETED,
            entityId: assessment.id,
            metadata: {
              assessmentId: assessment.id,
              readinessScore: output.readinessScore,
              durationMs: processingDurationMs,
            },
          });

          // Direct DB notification for resilience and realtime push
          try {
            await createNotification({
              userId: user.id,
              title: "Career Assessment Ready",
              message: "Your career assessment report has finished processing and is ready to review.",
              type: "CAREER_ASSESSMENT",
              actionUrl: "/dashboard/career-assessment",
              idempotencyKey: `assessment:${assessment.id}:completed`,
            });
          } catch (notifErr) {
            console.warn("[CareerAssessmentActions] Failed to record completion notification:", notifErr);
          }
        } catch (localBgErr) {
          console.error("[CareerAssessmentActions] Local async background generation failed:", localBgErr);
          await prisma.careerAssessment.update({
            where: { id: assessment.id },
            data: { status: CareerAssessmentStatus.FAILED },
          });

          try {
            await createNotification({
              userId: user.id,
              title: "Career Assessment Failed",
              message: "The career assessment generation encountered an error. Please try again.",
              type: "CAREER_ASSESSMENT",
              actionUrl: "/dashboard/career-assessment",
              idempotencyKey: `assessment:${assessment.id}:failed`,
            });
          } catch (notifErr) {
            console.warn("[CareerAssessmentActions] Failed to record failure notification:", notifErr);
          }
        }
      })();
    }

    revalidatePath("/dashboard/career-assessment");
    revalidatePath("/dashboard");

    return {
      assessment,
      triggerRunId,
      publicAccessToken,
    };
  });
}

export async function getAssessmentStatusAction(assessmentId: string) {
  return safeAction(async () => {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      throw new Error("Unauthorized");
    }

    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      throw new Error("User record not found.");
    }

    const assessment = await CareerAssessmentService.getAssessmentById(assessmentId, user.id);
    if (!assessment) {
      throw new Error("Assessment not found.");
    }

    return { assessment };
  });
}

export async function getLatestAssessmentAction() {
  return safeAction(async () => {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      throw new Error("Unauthorized");
    }

    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      throw new Error("User record not found.");
    }

    const profile = await ProfileService.getProfile(user.id);
    const assessment = await CareerAssessmentService.getLatestAssessment(
      user.id,
      profile?.profileVersion
    );

    return { assessment };
  });
}

export async function getWeeklyQuotaAction() {
  return safeAction(async () => {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      throw new Error("Unauthorized");
    }

    const user = await prisma.user.findUnique({
      where: { clerkId },
      select: { id: true },
    });

    if (!user) {
      throw new Error("User record not found.");
    }

    return await AssessmentQuotaService.getWeeklyQuota(user.id);
  });
}
