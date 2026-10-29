import { prisma } from "@/lib/prisma";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { ResumeArtifact, ResumeReport } from "../types";
import { KeywordAnalysisService } from "./keyword-analysis.service";
import { ResumeAnalyticsService } from "./analytics.service";
import { ModuleActivityService } from "@/features/progress/services";
import { ModuleActivityEventType, ModuleType } from "@/features/progress/types";

export class ResumeReportService {
  /**
   * Loads a Resume record from Prisma and fetches its associated ResumeArtifact from Blob Storage.
   */
  public static async getResumeReport(
    resumeId: string
  ): Promise<ResumeReport | null> {
    const resume = await prisma.resumeScore.findUnique({
      where: { id: resumeId },
    });

    if (!resume || !resume.artifactBlobUrl) {
      return null;
    }

    try {
      const artifact = await BlobStorageService.fetchJson<ResumeArtifact>(
        resume.artifactBlobUrl
      );

      if (!artifact || !artifact.metadata || !artifact.overallAssessment) {
        throw new Error("Invalid or corrupted ResumeArtifact content.");
      }

      const health = ResumeAnalyticsService.computeHealth(artifact);
      const keywords = KeywordAnalysisService.analyze(artifact);

      const recommendations = (artifact.overallAssessment.weaknesses || []).map(
        (weakness, idx) => ({
          id: `rec-${idx + 1}`,
          title: weakness.split(":")[0] || "Area for Improvement",
          description: weakness,
          priority: (idx < 2 ? "High" : idx < 4 ? "Medium" : "Low") as "High" | "Medium" | "Low",
          section: "General",
          expectedImpact: idx < 2 ? "+10-15 ATS points" : "+5-10 ATS points",
        })
      );

      await ModuleActivityService.recordActivity({
        userId: resume.userId,
        module: ModuleType.RESUME_SCORE,
        eventType: ModuleActivityEventType.RESUME_SCORE_VIEWED,
        entityId: resume.id,
        metadata: {
          source: "RESUME_REPORT_SERVICE",
          scoreId: resume.id,
          overallScore: resume.ovrScore,
          atsScore: resume.atsScore,
        },
      }).catch((activityError) =>
        console.warn(
          "[ResumeReportService] Failed to record resume score view activity:",
          activityError
        )
      );

      return {
        resumeId: resume.id,
        status: resume.status,
        artifact,
        health,
        keywords,
        recommendations,
      };
    } catch (error) {
      console.error(
        `Failed to load ResumeArtifact for resume ${resumeId}:`,
        error
      );
      throw new Error(
        "Could not retrieve resume assessment report from Blob Storage."
      );
    }
  }
}
