import { schemaTask, metadata } from "@trigger.dev/sdk/v3";
import { z } from "zod";
import { InterviewRequestSchema } from "@/features/interview/schemas/interview-request.schema";
import { InterviewPlannerService } from "@/features/interview/services/interview-planner.service";
import { InterviewGenerationService } from "@/features/interview/services/interview-generation.service";
import { InterviewArtifactService } from "@/features/interview/services/interview-artifact.service";
import { GlobalInterviewTemplateService } from "@/features/interview/services/global-interview-template.service";
import { JobService } from "@/services/jobs/job.service";
import { prisma } from "@/lib/prisma";
import { InterviewRequest } from "@/features/interview/types";
import {
  CareerExperienceLevel,
  InterviewType,
  InterviewDifficulty,
  InterviewTemplateSource,
  InterviewStatus,
} from "@prisma/client";
import { ModuleActivityService } from "@/features/progress/services";
import {
  ModuleActivityEventType,
  ModuleType,
} from "@/features/progress/types";
import { normalizeError } from "@/lib/error-handler";

export const GenerateInterviewTaskSchema = z.object({
  interviewId: z.string(),
  jobId: z.string(),
  userId: z.string(),
  templateSource: z.enum(["USER_CREATED", "GLOBAL"]).default("GLOBAL"),
  interviewTemplateId: z.string().optional(),
  globalInterviewTemplateId: z.string().optional(),
  request: InterviewRequestSchema,
});

export const generateInterviewTask = schemaTask({
  id: "generate-interview",
  schema: GenerateInterviewTaskSchema,
  retry: {
    maxAttempts: 3,
    factor: 2,
    minTimeoutInMs: 1000,
    maxTimeoutInMs: 10000,
  },
  run: async (payload, { ctx }) => {
    const {
      interviewId,
      jobId,
      userId,
      templateSource,
      interviewTemplateId,
      globalInterviewTemplateId,
      request,
    } = payload;

    try {
      // Step 1: 10% - Preparing Prompt
      metadata.set("status", "Preparing Prompt");
      metadata.set("progress", 10);
      await JobService.updateProgress(jobId, 10, "Preparing Prompt", ctx.run.id);

      const targetQuestionCount = request.questionCount || 10;

      // Step 2: 25% - Generating Interview Plan
      metadata.set("status", "Generating Interview Plan");
      metadata.set("progress", 25);
      await JobService.updateProgress(jobId, 25, "Generating Interview Plan");

      const plan = await InterviewPlannerService.generatePlan(
        request as InterviewRequest,
        targetQuestionCount
      );

      // Step 3: 50% - Generating Questions
      metadata.set("status", "Generating Questions");
      metadata.set("progress", 50);
      await JobService.updateProgress(jobId, 50, "Generating Questions");

      const questions = await InterviewGenerationService.generateQuestions(
        request as InterviewRequest,
        plan,
        targetQuestionCount
      );

      // Step 4: 75% - Validating Artifact & Creating Templates
      metadata.set("status", "Validating Artifact");
      metadata.set("progress", 75);
      await JobService.updateProgress(jobId, 75, "Validating Artifact");

      const expLevel: CareerExperienceLevel =
        request.experienceLevel.toUpperCase() === "BEGINNER"
          ? "ENTRY"
          : request.experienceLevel.toUpperCase() === "ADVANCED"
          ? "SENIOR"
          : "MID";

      const interviewType: InterviewType =
        request.interviewType.toUpperCase().includes("BEHAVIORAL")
          ? "BEHAVIORAL"
          : request.interviewType.toUpperCase().includes("SYSTEM_DESIGN")
          ? "SYSTEM_DESIGN"
          : request.interviewType.toUpperCase().includes("ROLE_SPECIFIC")
          ? "ROLE_SPECIFIC"
          : request.interviewType.toUpperCase().includes("GENERAL")
          ? "GENERAL"
          : "TECHNICAL";

      const difficulty: InterviewDifficulty =
        request.difficulty?.toUpperCase() === "EASY"
          ? "EASY"
          : request.difficulty?.toUpperCase() === "HARD"
          ? "HARD"
          : "MEDIUM";

      let blobUrl: string;

      if (templateSource === "USER_CREATED" && interviewTemplateId) {
        // Upload template blob for user template
        const templateBlobUrl = await InterviewArtifactService.createAndStoreTemplateBlob(
          interviewTemplateId,
          request as InterviewRequest,
          plan,
          questions
        );

        await prisma.interviewTemplate.update({
          where: { id: interviewTemplateId },
          data: {
            templateBlobUrl,
            estimatedDuration: plan.estimatedDuration,
          },
        });

        // Step 5: 90% - Uploading Session Artifact for Personalized
        metadata.set("status", "Uploading Artifact");
        metadata.set("progress", 90);
        await JobService.updateProgress(jobId, 90, "Uploading Artifact");

        blobUrl = await InterviewArtifactService.createAndStoreArtifact(
          interviewId,
          request as InterviewRequest,
          plan,
          questions,
          templateSource as InterviewTemplateSource,
          interviewTemplateId
        );
      } else {
        // GLOBAL template: Upload canonical template blob
        const targetGlobalTemplateId = globalInterviewTemplateId || `gt_${Date.now()}`;
        blobUrl = await InterviewArtifactService.createAndStoreTemplateBlob(
          targetGlobalTemplateId,
          request as InterviewRequest,
          plan,
          questions
        );

        if (globalInterviewTemplateId) {
          await prisma.globalInterviewTemplate.update({
            where: { id: globalInterviewTemplateId },
            data: {
              templateBlobUrl: blobUrl,
              estimatedDuration: plan.estimatedDuration,
            },
          });
        } else {
          const normalizedRole = GlobalInterviewTemplateService.normalizeRole(request.role);
          await GlobalInterviewTemplateService.createTemplate({
            createdByUserId: userId,
            role: request.role,
            normalizedRole,
            experienceLevel: expLevel,
            difficulty,
            interviewType,
            questionCount: targetQuestionCount,
            estimatedDuration: plan.estimatedDuration,
            templateBlobUrl: blobUrl,
          });
        }
      }

      // Point InterviewSession to the generated artifact/template blob and mark as READY
      await prisma.interviewSession.update({
        where: { id: interviewId },
        data: {
          blobUrl,
          status: InterviewStatus.READY,
          estimatedDuration: plan.estimatedDuration,
        },
      });

      // If global template, update any other pending sessions waiting on this template
      if (globalInterviewTemplateId) {
        await prisma.interviewSession.updateMany({
          where: {
            globalInterviewTemplateId,
            status: InterviewStatus.GENERATING,
          },
          data: {
            blobUrl,
            status: InterviewStatus.READY,
            estimatedDuration: plan.estimatedDuration,
          },
        });
      }

      // Step 6: 100% - Interview Ready
      metadata.set("status", "Interview Ready");
      metadata.set("progress", 100);
      await JobService.completeJob(jobId, interviewId, "INTERVIEW");

      console.log(`[Trigger.dev] Interview generation pipeline completed for interviewId=${interviewId}`);

      return {
        success: true,
        interviewId,
        blobUrl,
      };
    } catch (err: unknown) {
      const appError = normalizeError(err);
      console.error(`[Trigger.dev] Interview generation error for interviewId=${interviewId}:`, appError.message, err);
      await JobService.failJob(jobId, appError.message);
      await prisma.interviewSession.update({
        where: { id: interviewId },
        data: { status: InterviewStatus.FAILED },
      }).catch((updateError) =>
        console.warn("[generateInterviewTask] Failed to mark interview failed:", updateError)
      );
      await ModuleActivityService.recordActivity({
        userId,
        module: ModuleType.INTERVIEW_PRACTICE,
        eventType: ModuleActivityEventType.INTERVIEW_FAILED,
        entityId: interviewId,
        metadata: {
          source: "GENERATE_INTERVIEW_TASK",
          interviewId,
          jobId,
          error: appError.message,
        },
      }).catch((activityError) =>
        console.warn("[generateInterviewTask] Failed to record failure activity:", activityError)
      );
      throw err;
    }
  },
});
