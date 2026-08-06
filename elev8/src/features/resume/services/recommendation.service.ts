import { ImprovementRecommendation, ResumeArtifact } from "../types";
import { ResumeSummary, ResumeRecommendation } from "../types/workspace";

export class RecommendationService {
  /**
   * Constructs prioritized, section-level actionable recommendations from a ResumeArtifact.
   */
  public static generateRecommendations(artifact: ResumeArtifact): ImprovementRecommendation[] {
    const list: ImprovementRecommendation[] = [];
    const sec = artifact.sectionAssessment.sections;

    if (sec.skills && sec.skills.score < 80) {
      list.push({
        id: "rec_skills",
        title: "Incorporate High-Demand Technical Keywords",
        description: `Your skills section score is ${sec.skills.score}%. Add missing target keywords: ${(artifact.overallAssessment.missingKeywords || []).slice(0, 3).join(", ") || "core frameworks"}.`,
        priority: "High",
        section: "Skills",
        expectedImpact: "+15% ATS Match Score",
      });
    }

    if (sec.projects && sec.projects.score < 80) {
      list.push({
        id: "rec_projects",
        title: "Quantify Impact in Project Highlights",
        description: "Add measurable metrics (e.g. latency reduction, user growth) to your project descriptions.",
        priority: "High",
        section: "Projects",
        expectedImpact: "+20% Recruiter Engagement",
      });
    }

    if (sec.experience && sec.experience.score < 80) {
      list.push({
        id: "rec_exp",
        title: "Strengthen Action-Oriented Bullet Points",
        description: "Begin each experience bullet point with strong action verbs (e.g., Architected, Scaled, Spearheaded).",
        priority: "Medium",
        section: "Work Experience",
        expectedImpact: "+10% Overall Readability",
      });
    }

    if (artifact.overallAssessment.recommendedProjects.length > 0) {
      list.push({
        id: "rec_portfolio",
        title: "Build a High-Impact Portfolio Project",
        description: `Consider building: "${artifact.overallAssessment.recommendedProjects[0]}".`,
        priority: "Medium",
        section: "Portfolio",
        expectedImpact: "Closes Technical Gap",
      });
    }

    if (list.length === 0) {
      list.push({
        id: "rec_general",
        title: "Fine-tune Formatting and ATS Readability",
        description: "Your resume is strong! Continue polishing action verbs and keeping metrics up to date.",
        priority: "Low",
        section: "General",
        expectedImpact: "Polished Professional Image",
      });
    }

    return list;
  }

  /**
   * Constructs high-level workspace recommendations based on resume history.
   */
  public static generateWorkspaceRecommendations(resumes: ResumeSummary[]): ResumeRecommendation[] {
    const recommendations: ResumeRecommendation[] = [];

    if (resumes.length === 0) {
      recommendations.push({
        id: "upload-first",
        title: "Upload Your First Resume",
        description: "Upload a PDF resume to get instant ATS feedback and AI scores.",
        type: "upload",
        actionUrl: "/resumes",
        actionText: "Upload Resume",
        priority: "high",
      });
      return recommendations;
    }

    const latest = [...resumes].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )[0];

    if (latest && latest.overallScore !== null && latest.overallScore < 70) {
      recommendations.push({
        id: "improve-score",
        title: "Improve Low Resume Score",
        description: `Your resume for ${latest.role} scored ${latest.overallScore}/100. Review recommendations in your report.`,
        type: "upload",
        actionUrl: `/resumes/${latest.id}`,
        actionText: "View Feedback",
        priority: "high",
      });
    }

    recommendations.push({
      id: "generate-roadmap",
      title: "Build a Custom Career Roadmap",
      description: "Match your resume skills against industry standards with a personalized learning path.",
      type: "roadmap",
      actionUrl: "/roadmaps",
      actionText: "Explore Roadmaps",
      priority: "medium",
    });

    recommendations.push({
      id: "practice-interview",
      title: "Practice Mock Interview",
      description: `Prepare for ${latest?.role || "your target role"} interviews with AI mock questions.`,
      type: "interview",
      actionUrl: "/interviews",
      actionText: "Start Mock Interview",
      priority: "medium",
    });

    recommendations.push({
      id: "resume-builder",
      title: "Build from Scratch",
      description: "Use our Resume Builder foundation to craft an ATS-optimized profile.",
      type: "builder",
      actionUrl: "/resume-builder",
      actionText: "Launch Builder",
      priority: "low",
    });

    return recommendations;
  }
}
