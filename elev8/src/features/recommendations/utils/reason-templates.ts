import { CareerAssessmentSignal, RecommendationType } from "../types";

export function generateRecommendationReason(params: {
  type: RecommendationType;
  refId: string;
  targetRole?: string | null;
  moduleScore?: number | null;
  gapSeverity?: number;
  assessment?: CareerAssessmentSignal | null;
  context?: Record<string, any>;
}): string {
  const { type, refId, targetRole, moduleScore, gapSeverity, assessment, context } = params;

  // 1. Module Recommendations
  if (type === "MODULE") {
    switch (refId) {
      case "ROADMAP": {
        if (assessment && !assessment.isStale && assessment.gaps.length > 0) {
          return `Your assessment highlighted development in ${assessment.gaps[0]}. A structured roadmap will guide your upskilling systematically.`;
        }
        if (gapSeverity && gapSeverity >= 0.5 && targetRole) {
          return `Your target role (${targetRole}) has notable skill gaps. A structured roadmap will help you close them step by step.`;
        }
        return "A personalized learning roadmap will establish clear milestones to advance your career goals.";
      }

      case "RESUME_SCORE": {
        if (targetRole) {
          return `Benchmark your resume against target ${targetRole} requirements to identify formatting and ATS improvements.`;
        }
        return "Score your resume to get instant actionable feedback on keyword match and industry competitiveness.";
      }

      case "RESUME_BUILD": {
        if (moduleScore !== undefined && moduleScore !== null && moduleScore < 60) {
          return `Your recent resume score (${moduleScore}/100) indicates key areas to rebuild for stronger recruiter impact.`;
        }
        return "Craft an ATS-optimized, high-impact resume tailored to your target career level.";
      }

      case "INTERVIEW_PRACTICE": {
        if (context?.source === "ROADMAP_PHASE_COMPLETION" && context?.topics?.length > 0) {
          return `You've completed milestones covering ${context.topics.slice(0, 2).join(" & ")}. Validate your mastery in a live practice interview.`;
        }
        if (context?.difficulty === "HARD") {
          return "You've demonstrated strong interview performance. Challenge yourself with advanced technical and behavioral scenarios.";
        }
        return "Sharpen your real-time interview communication with targeted AI-powered practice sessions.";
      }
    }
  }

  // 2. Action Recommendations
  if (type === "ACTION") {
    if (refId === "TAKE_CAREER_ASSESSMENT") {
      return "Complete a comprehensive AI Career Assessment to evaluate your market readiness and discover high-priority growth areas.";
    }
    if (refId === "COMPLETE_PROFILE") {
      return "Complete your career profile to unlock personalized roadmap milestones and high-precision skill guidance.";
    }
  }

  // 3. Skill Recommendations
  if (type === "SKILL") {
    const requiredLevel = context?.requiredProficiency || "standard proficiency";
    return `Developing proficiency in ${refId} (${requiredLevel}) will directly address a core requirement for your target role.`;
  }

  // 4. Profile Clarification
  if (type === "PROFILE_CLARIFICATION") {
    if (refId === "TARGET_ROLE") {
      return "Specify a target role to allow Elev8 to calculate role-specific skill benchmarks and recommendations.";
    }
    return "Clarify your current career situation to ensure recommendations align precisely with your objectives.";
  }

  return "Recommended next action to accelerate your career progression.";
}
