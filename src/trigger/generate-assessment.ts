import { schemaTask, metadata } from "@trigger.dev/sdk/v3";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { ProfileService } from "@/features/profile/services";
import { SkillGapService } from "@/features/skill-gap/services";
import { CareerAssessmentLLMService } from "@/features/career-assessment/services/career-assessment-llm.service";
import { ModuleActivityContextService } from "@/features/career-assessment/services/module-activity-context.service";
import { ModuleActivityService } from "@/features/progress/services";
import { createNotification } from "@/lib/notify";
import {
  ModuleType,
  ModuleActivityEventType,
  ModuleCompletionStatus,
} from "@/features/progress/types";
import { CareerAssessmentStatus } from "@prisma/client";

export const GenerateAssessmentTaskSchema = z.object({
  assessmentId: z.string(),
  userId: z.string(),
  profileVersion: z.number(),
});

export const generateAssessmentTask = schemaTask({
  id: "generate-assessment",
  schema: GenerateAssessmentTaskSchema,
  machine: {
    preset: "micro",
  },
  queue: {
    concurrencyLimit: 10,
  },
  retry: {
    maxAttempts: 3,
    factor: 2,
    minTimeoutInMs: 1000,
    maxTimeoutInMs: 10000,
  },
  run: async (payload, { ctx }) => {
    const { assessmentId, userId, profileVersion } = payload;
    console.log(
      `[generateAssessmentTask] Executing for assessmentId=${assessmentId}, userId=${userId}`
    );

    try {
      metadata.set("status", "Gathering profile and skill-gap signals");
      metadata.set("progress", 20);

      const profile = await ProfileService.getProfile(userId);
      if (!profile) {
        throw new Error(`Profile not found for userId: ${userId}`);
      }

      let gapAnalysis;
      try {
        gapAnalysis = await SkillGapService.calculateForProfile(profile);
      } catch (gapErr) {
        console.warn(
          "[generateAssessmentTask] Could not compute skill gap for assessment:",
          gapErr
        );
      }

      const activity = await ModuleActivityContextService.getRecentActivity(userId);

      metadata.set("status", "Analyzing profile with Gemini Intelligence");
      metadata.set("progress", 50);

      const { output, model, processingDurationMs } =
        await CareerAssessmentLLMService.generateAssessment(
          profile,
          activity,
          gapAnalysis
        );

      metadata.set("status", "Saving completed assessment");
      metadata.set("progress", 90);

      const record = await prisma.careerAssessment.update({
        where: { id: assessmentId },
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

      console.log(
        `[generateAssessmentTask] Assessment completed successfully id=${record.id}, duration=${processingDurationMs}ms, score=${record.readinessScore}`
      );

      // Record ModuleActivity
      try {
        await ModuleActivityService.recordActivity({
          userId,
          module: ModuleType.CAREER_ASSESSMENT,
          eventType: ModuleActivityEventType.ASSESSMENT_COMPLETED,
          completionStatus: ModuleCompletionStatus.COMPLETED,
          entityId: record.id,
          metadata: {
            assessmentId: record.id,
            readinessScore: record.readinessScore,
            strengthsCount: output.strengths.length,
            gapsCount: output.gaps.length,
            durationMs: processingDurationMs,
          },
        });
      } catch (activityErr) {
        console.warn(
          "[generateAssessmentTask] Failed to record completion activity:",
          activityErr
        );
      }

      metadata.set("status", "Completed");
      metadata.set("progress", 100);

      // Direct DB notification for resilience and realtime push
      try {
        await createNotification({
          userId,
          title: "Career Assessment Ready",
          message: "Your career assessment report has finished processing and is ready to review.",
          type: "CAREER_ASSESSMENT",
          actionUrl: "/dashboard/career-assessment",
          idempotencyKey: `assessment:${record.id}:completed`,
        });
      } catch (notifErr) {
        console.warn("[generateAssessmentTask] Failed to record completion notification:", notifErr);
      }

      return {
        success: true,
        assessmentId: record.id,
        readinessScore: record.readinessScore,
      };
    } catch (err: any) {
      console.error(
        `[generateAssessmentTask] Assessment generation failed id=${assessmentId}:`,
        err
      );

      try {
        await prisma.careerAssessment.update({
          where: { id: assessmentId },
          data: { status: CareerAssessmentStatus.FAILED },
        });

        await ModuleActivityService.recordActivity({
          userId,
          module: ModuleType.CAREER_ASSESSMENT,
          eventType: ModuleActivityEventType.ASSESSMENT_GENERATION_FAILED,
          entityId: assessmentId,
          metadata: {
            source: "GENERATE_ASSESSMENT_TASK",
            profileVersion,
            error: err instanceof Error ? err.message : String(err),
          },
        });

        try {
          await createNotification({
            userId,
            title: "Career Assessment Failed",
            message: err instanceof Error ? err.message : "The career assessment generation encountered an error.",
            type: "CAREER_ASSESSMENT",
            actionUrl: "/dashboard/career-assessment",
            idempotencyKey: `assessment:${assessmentId}:failed`,
          });
        } catch (notifErr) {
          console.warn("[generateAssessmentTask] Failed to record failure notification:", notifErr);
        }
      } catch (cleanupErr) {
        console.warn(
          "[generateAssessmentTask] Cleanup on failure failed:",
          cleanupErr
        );
      }

      throw err;
    }
  },
});
