import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { prisma } from "@/lib/prisma";
import { ResumeScoreStatus } from "@prisma/client";
import {
  ParsedResume,
  ResumeSectionAssessment,
  ResumeOverallAssessment,
  ResumeAnalytics,
  ResumeArtifact,
  ResumeMetadata,
} from "../types";

export class ResumeArtifactService {
  /**
   * Generates non-AI deterministic analytics from parsed resume and overall assessment data.
   */
  public static generateAnalytics(
    parsedResume: ParsedResume,
    overallAssessment: ResumeOverallAssessment
  ): ResumeAnalytics {
    const totalWords = [
      parsedResume.summary || "",
      ...parsedResume.skills,
      ...parsedResume.projects.map((p) => `${p.title} ${p.description}`),
      ...parsedResume.experience.map((e) => `${e.company} ${e.role} ${e.highlights.join(" ")}`),
      ...parsedResume.education.map((ed) => `${ed.institution} ${ed.degree}`),
      ...parsedResume.certifications,
      ...parsedResume.achievements,
    ]
      .join(" ")
      .split(/\s+/)
      .filter((w) => w.length > 0).length;

    // Estimate ATS Keyword density ratio based on missingKeywords vs overall skills
    const missingKeywordsCount = overallAssessment.missingKeywords.length;
    const totalKeywordsCount = parsedResume.skills.length + missingKeywordsCount;
    const estimatedDensity =
      totalKeywordsCount > 0
        ? Math.round((parsedResume.skills.length / totalKeywordsCount) * 100)
        : 75;

    return {
      skillCount: parsedResume.skills.length,
      projectCount: parsedResume.projects.length,
      experienceCount: parsedResume.experience.length,
      certificationCount: parsedResume.certifications.length,
      educationCount: parsedResume.education.length,
      wordCount: totalWords,
      estimatedAtsKeywordDensity: estimatedDensity,
    };
  }

  /**
   * Assembles the ResumeArtifact, uploads to Blob Storage, and updates Prisma Resume entry.
   */
  public static async buildAndPersistArtifact(
    resumeId: string,
    userId: string,
    role: string,
    experienceLevel: string,
    originalPdfBlobUrl: string,
    parsedResume: ParsedResume,
    sectionAssessment: ResumeSectionAssessment,
    overallAssessment: ResumeOverallAssessment
  ): Promise<ResumeArtifact> {
    const analytics = this.generateAnalytics(parsedResume, overallAssessment);

    const metadata: ResumeMetadata = {
      resumeId,
      userId,
      role,
      experienceLevel,
      assessmentDate: new Date().toISOString(),
      generatorVersion: "1.0.0",
      artifactVersion: "1.0.0",
      originalPdfBlobUrl,
    };

    const artifact: ResumeArtifact = {
      version: "1.0.0",
      metadata,
      parsedResume,
      sectionAssessment,
      overallAssessment,
      analytics,
    };

    // 1. Upload artifact to Blob Storage
    const artifactBlobUrl = await BlobStorageService.uploadJson(
      `resumes/${resumeId}.json`,
      artifact
    );

    // 2. Update Prisma ResumeScore metadata
    await prisma.resumeScore.update({
      where: { id: resumeId },
      data: {
        artifactBlobUrl,
        ovrScore: overallAssessment.overallScore,
        atsScore: overallAssessment.atsScore,
        status: ResumeScoreStatus.COMPLETED,
      },
    });

    return artifact;
  }
}
