import { ResumeArtifact, ResumeHealth, ResumeHealthStatus } from "../types";

export class ResumeAnalyticsService {
  /**
   * Computes overall resume health and readiness metrics from a ResumeArtifact.
   */
  public static computeHealth(artifact: ResumeArtifact): ResumeHealth {
    const overallScore = artifact.overallAssessment.overallScore || 0;
    const atsScore = artifact.overallAssessment.atsScore || 0;

    let status: ResumeHealthStatus = "Needs Improvement";
    if (overallScore >= 85) {
      status = "Excellent";
    } else if (overallScore >= 70) {
      status = "Good";
    } else if (overallScore >= 50) {
      status = "Needs Improvement";
    } else {
      status = "Critical";
    }

    // Completeness based on presence of key sections
    let completenessCount = 0;
    const totalSections = 6;
    if (artifact.parsedResume.summary) completenessCount++;
    if (artifact.parsedResume.skills.length > 0) completenessCount++;
    if (artifact.parsedResume.experience.length > 0) completenessCount++;
    if (artifact.parsedResume.projects.length > 0) completenessCount++;
    if (artifact.parsedResume.education.length > 0) completenessCount++;
    if (artifact.parsedResume.certifications.length > 0) completenessCount++;

    const completeness = Math.round((completenessCount / totalSections) * 100);
    const recruiterReadiness = Math.round((overallScore + artifact.overallAssessment.technicalStrength) / 2);

    return {
      status,
      completeness,
      atsReadiness: atsScore,
      recruiterReadiness,
      topStrengths: artifact.overallAssessment.strengths || [],
      topWeaknesses: artifact.overallAssessment.weaknesses || [],
    };
  }
}
