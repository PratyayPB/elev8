import { prisma } from "@/lib/prisma";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { ResumeArtifact, ResumeReport } from "../types";
import { KeywordAnalysisService } from "./keyword-analysis.service";
import { ResumeAnalyticsService } from "./analytics.service";
import { RecommendationService } from "./recommendation.service";

export class ResumeReportService {
  /**
   * Loads a Resume record from Prisma and fetches its associated ResumeArtifact from Blob Storage.
   */
  public static async getResumeReport(resumeId: string): Promise<ResumeReport | null> {
    const resume = await prisma.resumeScore.findUnique({
      where: { id: resumeId },
    });

    if (!resume || !resume.artifactBlobUrl) {
      return null;
    }

    try {
      const artifact = await BlobStorageService.fetchJson<ResumeArtifact>(resume.artifactBlobUrl);

      if (!artifact || !artifact.metadata || !artifact.overallAssessment) {
        throw new Error("Invalid or corrupted ResumeArtifact content.");
      }

      const health = ResumeAnalyticsService.computeHealth(artifact);
      const keywords = KeywordAnalysisService.analyze(artifact);
      const recommendations = RecommendationService.generateRecommendations(artifact);

      return {
        resumeId: resume.id,
        status: resume.status,
        artifact,
        health,
        keywords,
        recommendations,
      };
    } catch (error) {
      console.error(`Failed to load ResumeArtifact for resume ${resumeId}:`, error);
      throw new Error("Could not retrieve resume assessment report from Blob Storage.");
    }
  }
}
