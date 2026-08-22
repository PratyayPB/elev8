import {
  RecommendationCandidate,
  RecommendationContext,
} from "../types";
import {
  GOAL_DEFAULT_PRIORITIES,
  RECOMMENDATION_CONFIG,
} from "../config/recommendation.config";
import { generateRecommendationReason } from "../utils/reason-templates";

export class CandidateGeneratorService {
  /**
   * Generates candidate recommendations across modules, skills, actions, and profile clarifications.
   */
  public static generateCandidates(
    ctx: RecommendationContext
  ): RecommendationCandidate[] {
    const candidates: RecommendationCandidate[] = [];
    const { profile, skillGap, assessment, moduleActivity, mode } = ctx;
    const primaryGoal = profile.careerGoals?.primaryGoal || "OTHER";
    const targetRole = profile.careerGoals?.targetRole;

    // 1. Cold-start Branch (spec §14)
    if (mode === "COLD_START") {
      candidates.push({
        type: "ACTION",
        source: "RULE_ENGINE",
        refId: "COMPLETE_PROFILE",
        signals: this.createEmptySignals(),
        score: 0,
        reason: generateRecommendationReason({
          type: "ACTION",
          refId: "COMPLETE_PROFILE",
        }),
        eligible: true,
      });

      candidates.push({
        type: "MODULE",
        source: "RULE_ENGINE",
        refId: "RESUME_SCORE",
        signals: this.createEmptySignals(),
        score: 0,
        reason: generateRecommendationReason({
          type: "MODULE",
          refId: "RESUME_SCORE",
        }),
        eligible: true,
      });

      return candidates;
    }

    // 2. Partial Profile Branch (spec §15-16)
    if (mode === "PARTIAL_PROFILE") {
      if (!targetRole || targetRole.trim() === "") {
        candidates.push({
          type: "PROFILE_CLARIFICATION",
          source: "PROFILE_SIGNAL",
          refId: "TARGET_ROLE",
          signals: this.createEmptySignals(),
          score: 0,
          reason: generateRecommendationReason({
            type: "PROFILE_CLARIFICATION",
            refId: "TARGET_ROLE",
          }),
          eligible: true,
        });
      }

      // Add lowest friction module aligned with goal
      const defaultModules = GOAL_DEFAULT_PRIORITIES[primaryGoal] || ["ROADMAP"];
      const primaryModule = defaultModules[0] || "ROADMAP";

      candidates.push({
        type: "MODULE",
        source: "RULE_ENGINE",
        refId: primaryModule,
        signals: this.createEmptySignals(),
        score: 0,
        reason: generateRecommendationReason({
          type: "MODULE",
          refId: primaryModule,
          targetRole,
        }),
        eligible: true,
      });

      return candidates;
    }

    // 3. Standard / Full Hybrid / Maintenance Modes
    // A. Goal-aligned module candidates
    const modulesToConsider = ["ROADMAP", "RESUME_SCORE", "RESUME_BUILD", "INTERVIEW_PRACTICE"];

    for (const mod of modulesToConsider) {
      candidates.push({
        type: "MODULE",
        source: assessment && !assessment.isStale ? "HYBRID" : "RULE_ENGINE",
        refId: mod,
        signals: this.createEmptySignals(),
        score: 0,
        reason: generateRecommendationReason({
          type: "MODULE",
          refId: mod,
          targetRole,
          gapSeverity: skillGap?.severity,
          assessment,
        }),
        context: targetRole ? { targetRole } : undefined,
        eligible: true,
      });
    }

    // B. Inter-Module Feedback: Roadmap -> Interview (spec §29-30)
    const latestRoadmapActivity = moduleActivity.find(
      (a) => a.module === "ROADMAP" && a.completionStatus === "COMPLETED"
    );

    if (latestRoadmapActivity?.metadata?.topics) {
      candidates.push({
        type: "MODULE",
        source: "MODULE_RESULT",
        refId: "INTERVIEW_PRACTICE",
        signals: this.createEmptySignals(),
        score: 0,
        reason: generateRecommendationReason({
          type: "MODULE",
          refId: "INTERVIEW_PRACTICE",
          context: {
            source: "ROADMAP_PHASE_COMPLETION",
            topics: latestRoadmapActivity.metadata.topics,
          },
        }),
        context: {
          source: "ROADMAP_PHASE_COMPLETION",
          roadmapId: latestRoadmapActivity.metadata.roadmapId,
          phaseId: latestRoadmapActivity.metadata.phaseId,
          topics: latestRoadmapActivity.metadata.topics,
        },
        eligible: true,
      });
    }

    // C. Inter-Module Feedback: Resume Score -> Resume Build (spec §26, §38)
    const latestResumeScoreActivity = moduleActivity.find(
      (a) => a.module === "RESUME_SCORE" && a.completionStatus === "COMPLETED"
    );

    const resumeScoreVal = (latestResumeScoreActivity?.metadata as any)?.score;
    if (
      latestResumeScoreActivity &&
      resumeScoreVal !== null &&
      resumeScoreVal !== undefined &&
      resumeScoreVal < 60
    ) {
      candidates.push({
        type: "MODULE",
        source: "MODULE_RESULT",
        refId: "RESUME_BUILD",
        signals: this.createEmptySignals(),
        score: 0,
        reason: generateRecommendationReason({
          type: "MODULE",
          refId: "RESUME_BUILD",
          moduleScore: resumeScoreVal,
        }),
        context: {
          priorScore: resumeScoreVal,
        },
        eligible: true,
      });
    }

    // D. High Interview Performance -> Harder Interview (spec §79)
    const recentInterviews = moduleActivity.filter(
      (a) => a.module === "INTERVIEW_PRACTICE" && a.completionStatus === "COMPLETED"
    );

    if (recentInterviews.length >= 2) {
      const interviewScores = recentInterviews
        .map((i) => (i.metadata as any)?.score)
        .filter((s) => typeof s === "number");

      const avgScore = interviewScores.length > 0
        ? interviewScores.reduce((sum, s) => sum + s, 0) / interviewScores.length
        : 0;

      if (avgScore >= 80) {
        candidates.push({
          type: "MODULE",
          source: "MODULE_RESULT",
          refId: "INTERVIEW_PRACTICE",
          signals: this.createEmptySignals(),
          score: 0,
          reason: generateRecommendationReason({
            type: "MODULE",
            refId: "INTERVIEW_PRACTICE",
            context: { difficulty: "HARD" },
          }),
          context: { difficulty: "HARD" },
          eligible: true,
        });
      }
    }

    // E. Skill Candidates from Gap Analysis (spec §41-42)
    if (skillGap && skillGap.status === "SUCCESS") {
      const topGaps = [
        ...skillGap.missingSkills.map((m) => ({
          name: m.name,
          requiredProficiency: m.requiredProficiency,
          importance: m.importance,
          estimatedHours: m.estimatedHours || 20,
        })),
        ...skillGap.underqualifiedSkills.map((u) => ({
          name: u.name,
          requiredProficiency: u.requiredProficiency,
          importance: u.importance,
          estimatedHours: u.estimatedHours || 15,
        })),
      ].slice(0, RECOMMENDATION_CONFIG.MAX_SKILL_CANDIDATES);

      for (const gap of topGaps) {
        candidates.push({
          type: "SKILL",
          source: "RULE_ENGINE",
          refId: gap.name,
          signals: this.createEmptySignals(),
          score: 0,
          reason: generateRecommendationReason({
            type: "SKILL",
            refId: gap.name,
            context: { requiredProficiency: gap.requiredProficiency },
          }),
          context: {
            requiredProficiency: gap.requiredProficiency,
            importance: gap.importance,
          },
          estimatedHours: gap.estimatedHours,
          eligible: true,
        });
      }
    }

    // F. Assessment Action Candidate (spec §17, §74)
    if (!assessment || assessment.isStale) {
      candidates.push({
        type: "ACTION",
        source: "RULE_ENGINE",
        refId: "TAKE_CAREER_ASSESSMENT",
        signals: this.createEmptySignals(),
        score: 0,
        reason: generateRecommendationReason({
          type: "ACTION",
          refId: "TAKE_CAREER_ASSESSMENT",
        }),
        eligible: true,
      });
    }

    return candidates;
  }

  private static createEmptySignals() {
    return {
      goalAlignment: 0,
      gapSignal: 0,
      moduleResultSignal: 0,
      recencySignal: 0,
      assessmentSignal: 0,
      profileSignal: 0,
      behavioralSignal: 0,
    };
  }
}
