import { KeywordAnalysis, ResumeArtifact } from "../types";

export class KeywordAnalysisService {
  /**
   * Generates keyword datasets and coverage statistics from a ResumeArtifact.
   */
  public static analyze(artifact: ResumeArtifact): KeywordAnalysis {
    const presentKeywords = Array.from(
      new Set(artifact.parsedResume.skills.map((s) => s.trim()))
    ).filter((s) => s.length > 0);

    const missingKeywords = Array.from(
      new Set((artifact.overallAssessment.missingKeywords || []).map((k) => k.trim()))
    ).filter((k) => k.length > 0);

    const recommendedKeywords = Array.from(
      new Set((artifact.overallAssessment.recommendedSkills || []).map((r) => r.trim()))
    ).filter((r) => r.length > 0);

    const totalKeywords = presentKeywords.length + missingKeywords.length;
    const coveragePercentage =
      totalKeywords > 0
        ? Math.round((presentKeywords.length / totalKeywords) * 100)
        : 80;

    return {
      presentKeywords,
      missingKeywords,
      recommendedKeywords,
      coveragePercentage,
    };
  }
}
