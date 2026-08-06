import { schemaTask, metadata } from "@trigger.dev/sdk/v3";
import { z } from "zod";
import { InterviewRequestSchema } from "@/features/interview/schemas/interview-request.schema";
import { InterviewPlannerService } from "@/features/interview/services/interview-planner.service";
import { InterviewGenerationService } from "@/features/interview/services/interview-generation.service";
import { InterviewArtifactService } from "@/features/interview/services/interview-artifact.service";
import { JobService } from "@/services/jobs/job.service";
import { InterviewRequest } from "@/features/interview/types";

export const GenerateInterviewTaskSchema = z.object({
  interviewId: z.string(),
  jobId: z.string(),
  userId: z.string(),
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
    const { interviewId, jobId, request } = payload;

    try {
      // Step 1: 10% - Preparing Prompt
      metadata.set("status", "Preparing Prompt");
      metadata.set("progress", 10);
      await JobService.updateProgress(jobId, 10, "Preparing Prompt", ctx.run.id);

      // Step 2: 25% - Generating Interview Plan
      metadata.set("status", "Generating Interview Plan");
      metadata.set("progress", 25);
      await JobService.updateProgress(jobId, 25, "Generating Interview Plan");

      const plan = await InterviewPlannerService.generatePlan(request as InterviewRequest);

      // Step 3: 50% - Generating Questions
      metadata.set("status", "Generating Questions");
      metadata.set("progress", 50);
      await JobService.updateProgress(jobId, 50, "Generating Questions");

      const questions = await InterviewGenerationService.generateQuestions(
        request as InterviewRequest,
        plan
      );

      // Step 4: 75% - Validating Artifact
      metadata.set("status", "Validating Artifact");
      metadata.set("progress", 75);
      await JobService.updateProgress(jobId, 75, "Validating Artifact");

      // Step 5: 90% - Uploading Artifact
      metadata.set("status", "Uploading Artifact");
      metadata.set("progress", 90);
      await JobService.updateProgress(jobId, 90, "Uploading Artifact");

      const blobUrl = await InterviewArtifactService.createAndStoreArtifact(
        interviewId,
        request as InterviewRequest,
        plan,
        questions
      );

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
      const errorMsg = err instanceof Error ? err.message : String(err);
      console.error(`[Trigger.dev] Interview generation error for interviewId=${interviewId}:`, errorMsg);
      await JobService.failJob(jobId, errorMsg);
      throw err;
    }
  },
});
