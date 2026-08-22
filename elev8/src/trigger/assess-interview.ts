import { task } from "@trigger.dev/sdk/v3";
import { prisma } from "@/lib/prisma";
import { JobStatus, JobType, InterviewStatus } from "@prisma/client";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { InterviewArtifact, AssessmentReport } from "@/features/interview/types";
import { QuestionAssessmentService } from "@/features/interview/services/question-assessment.service";
import { OverallAssessmentService } from "@/features/interview/services/overall-assessment.service";
import { AssessmentArtifactService } from "@/features/interview/services/assessment-artifact.service";

export const assessInterviewJob = task({
  id: "assess-interview",
  retry: {
    maxAttempts: 3,
  },
  run: async (payload: { jobId: string; interviewId: string }) => {
    const { jobId, interviewId } = payload;

    const updateJob = async (progress: number, step: string) => {
      await prisma.job.update({
        where: { id: jobId },
        data: { progress, step },
      });
    };

    try {
      await prisma.job.update({
        where: { id: jobId },
        data: { status: JobStatus.RUNNING, startedAt: new Date() },
      });

      await updateJob(10, "Loading Interview Artifact");

      const interview = await prisma.interviewSession.findUnique({
        where: { id: interviewId },
      });

      if (!interview || !interview.blobUrl) {
        throw new Error("Interview not found or blob URL missing.");
      }

      const currentBlobUrl = interview.blobUrl;
      const artifact = await BlobStorageService.fetchJson<InterviewArtifact>(currentBlobUrl);

      await updateJob(20, "Validating Artifact");
      
      // Basic validation: ensure questions and answers exist
      if (!artifact.questions || artifact.questions.length === 0) {
        throw new Error("Artifact has no questions.");
      }

      await updateJob(40, "Running Bulk Question Assessment (AI)");
      const questionAssessments = await QuestionAssessmentService.assessQuestions(artifact);

      await updateJob(70, "Generating Overall Assessment (AI)");
      const overallAssessment = await OverallAssessmentService.generateOverallAssessment(
        artifact,
        questionAssessments
      );

      await updateJob(85, "Generating Deterministic Analytics");
      const analytics = OverallAssessmentService.generateAnalytics(artifact);

      const assessmentReport: AssessmentReport = {
        overallScores: overallAssessment,
        questionAnalysis: questionAssessments,
        analytics,
        assessedAt: new Date().toISOString(),
      };

      await updateJob(90, "Updating Interview Artifact and Database");
      await AssessmentArtifactService.finalizeAssessment(
        interviewId,
        currentBlobUrl,
        artifact,
        assessmentReport
      );

      await prisma.job.update({
        where: { id: jobId },
        data: { 
          status: JobStatus.COMPLETED, 
          progress: 100, 
          step: "Assessment Complete", 
          completedAt: new Date() 
        },
      });

      return { success: true, interviewId };
    } catch (error: any) {
      console.error("Assessment Job Failed:", error);

      try {
        await prisma.job.update({
          where: { id: jobId },
          data: {
            status: JobStatus.FAILED,
            error: error.message,
            completedAt: new Date(),
          },
        });
      } catch (jobErr) {
        console.error("Failed to update job status on error:", jobErr);
      }

      try {
        await prisma.interviewSession.update({
          where: { id: interviewId },
          data: {
            status: InterviewStatus.FAILED,
          },
        });
      } catch (interviewErr) {
        console.error("Failed to update interview status on error:", interviewErr);
      }

      // Rethrow to trigger automatic retries in Trigger.dev
      throw error;
    }
  },
});
