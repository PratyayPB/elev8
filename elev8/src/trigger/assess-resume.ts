import { schemaTask, metadata } from "@trigger.dev/sdk/v3";
import { z } from "zod";
import { PdfParserService } from "@/features/resume/services/pdf-parser.service";
import { ResumeNormalizerService } from "@/features/resume/services/resume-normalizer.service";
import { SectionAssessmentService } from "@/features/resume/services/section-assessment.service";
import { OverallAssessmentService } from "@/features/resume/services/overall-assessment.service";
import { ResumeArtifactService } from "@/features/resume/services/resume-artifact.service";
import { JobService } from "@/services/jobs/job.service";
import { prisma } from "@/lib/prisma";
import { ModuleActivityService } from "@/features/recommendations/services";
import { ModuleType, ResumeScoreStatus } from "@prisma/client";

export const AssessResumeTaskSchema = z.object({
  resumeId: z.string(),
  jobId: z.string(),
  userId: z.string(),
  role: z.string(),
  roleDescription: z.string().optional(),
  experienceLevel: z.string(),
  originalPdfBlobUrl: z.string(),
  personalization: z.object({
    skipped: z.boolean(),
    answers: z.array(
      z.object({
        questionId: z.string(),
        selectedOptions: z.array(z.string()),
      })
    ),
  }),
});

export const assessResumeTask = schemaTask({
  id: "assess-resume",
  schema: AssessResumeTaskSchema,
  retry: {
    maxAttempts: 3,
    factor: 2,
    minTimeoutInMs: 1000,
    maxTimeoutInMs: 10000,
  },
  run: async (payload, { ctx }) => {
    const { resumeId, jobId, userId, role, roleDescription, experienceLevel, originalPdfBlobUrl, personalization } =
      payload;

    try {
      // Step 1: 10% - Downloading Resume
      metadata.set("status", "Downloading Resume");
      metadata.set("progress", 10);
      await JobService.updateProgress(jobId, 10, "Downloading Resume", ctx.run.id);

      // Step 2: 20% - Parsing PDF
      metadata.set("status", "Parsing PDF");
      metadata.set("progress", 20);
      await JobService.updateProgress(jobId, 20, "Parsing PDF");

      const rawText = await PdfParserService.parsePdfFromUrl(originalPdfBlobUrl);

      // Step 3: 35% - Normalizing Resume
      metadata.set("status", "Normalizing Resume");
      metadata.set("progress", 35);
      await JobService.updateProgress(jobId, 35, "Normalizing Resume");

      const parsedResume = await ResumeNormalizerService.normalize(rawText);

      // Step 4: 55% - Assessing Resume Sections
      metadata.set("status", "Assessing Resume Sections");
      metadata.set("progress", 55);
      await JobService.updateProgress(jobId, 55, "Assessing Resume Sections");

      const sectionAssessment = await SectionAssessmentService.assessSections(
        parsedResume,
        role,
        experienceLevel,
        personalization
      );

      // Step 5: 75% - Generating Overall Assessment
      metadata.set("status", "Generating Overall Assessment");
      metadata.set("progress", 75);
      await JobService.updateProgress(jobId, 75, "Generating Overall Assessment");

      const overallAssessment = await OverallAssessmentService.assessOverall(
        sectionAssessment,
        role,
        experienceLevel
      );

      // Step 6: 90% - Uploading Artifact
      metadata.set("status", "Uploading Artifact");
      metadata.set("progress", 90);
      await JobService.updateProgress(jobId, 90, "Uploading Artifact");

      const artifact = await ResumeArtifactService.buildAndPersistArtifact(
        resumeId,
        userId,
        role,
        experienceLevel,
        originalPdfBlobUrl,
        parsedResume,
        sectionAssessment,
        overallAssessment
      );

      // Step 7: 100% - Assessment Complete
      metadata.set("status", "Assessment Complete");
      metadata.set("progress", 100);
      await JobService.completeJob(jobId, resumeId, "RESUME");

      try {
        await ModuleActivityService.recordActivity(
          userId,
          ModuleType.RESUME_SCORE,
          "COMPLETED",
          {
            role,
            experienceLevel,
            atsScore: overallAssessment.atsScore,
          }
        );
      } catch (err) {
        console.error("[AssessResumeTask] Failed to record activity:", err);
      }

      return {
        success: true,
        resumeId,
        artifactVersion: artifact.version,
        overallScore: overallAssessment.overallScore,
        atsScore: overallAssessment.atsScore,
      };
    } catch (error: any) {
      console.error(`Assess Resume task failed for resume ${resumeId}:`, error);

      const errorMessage = error?.message || "Unknown error during resume assessment";
      await JobService.failJob(jobId, errorMessage);

      // Update ResumeScore record status to FAILED
      await prisma.resumeScore.update({
        where: { id: resumeId },
        data: { status: ResumeScoreStatus.FAILED },
      });

      throw error;
    }
  },
});
