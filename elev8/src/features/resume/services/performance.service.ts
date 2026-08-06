import { ResumeSummary, ResumePerformanceSummary } from "../types/workspace";

export class PerformanceService {
  static calculatePerformance(resumes: ResumeSummary[]): ResumePerformanceSummary {
    if (!resumes || resumes.length === 0) {
      return {
        totalAssessments: 0,
        averageScore: 0,
        highestScore: 0,
        averageAtsScore: 0,
        highestAtsScore: 0,
        totalUploads: 0,
        mostRecentAssessmentDate: null,
        mostFrequentRole: null,
      };
    }

    const completed = resumes.filter((r) => r.overallScore !== null);
    const totalAssessments = completed.length;
    const totalUploads = resumes.length;

    let totalOverall = 0;
    let totalAts = 0;
    let highestScore = 0;
    let highestAtsScore = 0;

    const roleCounts: Record<string, number> = {};

    completed.forEach((r) => {
      if (r.overallScore !== null) {
        totalOverall += r.overallScore;
        if (r.overallScore > highestScore) highestScore = r.overallScore;
      }
      if (r.atsScore !== null) {
        totalAts += r.atsScore;
        if (r.atsScore > highestAtsScore) highestAtsScore = r.atsScore;
      }

      if (r.role) {
        roleCounts[r.role] = (roleCounts[r.role] || 0) + 1;
      }
    });

    const averageScore = totalAssessments > 0 ? Math.round(totalOverall / totalAssessments) : 0;
    const averageAtsScore = totalAssessments > 0 ? Math.round(totalAts / totalAssessments) : 0;

    let mostFrequentRole: string | null = null;
    let maxCount = 0;
    Object.entries(roleCounts).forEach(([role, count]) => {
      if (count > maxCount) {
        maxCount = count;
        mostFrequentRole = role;
      }
    });

    const sortedDates = [...resumes].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    const mostRecentAssessmentDate = sortedDates.length > 0 ? new Date(sortedDates[0].createdAt).toLocaleDateString() : null;

    return {
      totalAssessments,
      averageScore,
      highestScore,
      averageAtsScore,
      highestAtsScore,
      totalUploads,
      mostRecentAssessmentDate,
      mostFrequentRole,
    };
  }
}
