import {
  CandidateSignals,
  RecommendationCandidate,
  RecommendationContext,
} from "../types";
import {
  GOAL_ALIGNMENT_MATRIX,
  SCORING_WEIGHTS,
} from "../config/recommendation.config";

export class CandidateScorerService {
  /**
   * Scores a list of recommendation candidates using the normalized 7-signal composite formula.
   */
  public static scoreCandidates(
    candidates: RecommendationCandidate[],
    ctx: RecommendationContext
  ): RecommendationCandidate[] {
    return candidates.map((candidate) => {
      const signals = this.computeSignals(candidate, ctx);
      const score = this.computeCompositeScore(signals);

      return {
        ...candidate,
        signals,
        score,
      };
    });
  }

  private static computeSignals(
    candidate: RecommendationCandidate,
    ctx: RecommendationContext
  ): CandidateSignals {
    const goalAlignment = this.computeGoalAlignment(candidate, ctx);
    const gapSignal = this.computeGapSignal(candidate, ctx);
    const moduleResultSignal = this.computeModuleResultSignal(candidate, ctx);
    const recencySignal = this.computeRecencySignal(candidate, ctx);
    const assessmentSignal = this.computeAssessmentSignal(candidate, ctx);
    const profileSignal = this.computeProfileSignal(candidate, ctx);
    const behavioralSignal = this.computeBehavioralSignal(candidate, ctx);

    return {
      goalAlignment,
      gapSignal,
      moduleResultSignal,
      recencySignal,
      assessmentSignal,
      profileSignal,
      behavioralSignal,
    };
  }

  private static computeGoalAlignment(
    candidate: RecommendationCandidate,
    ctx: RecommendationContext
  ): number {
    const primaryGoal = ctx.profile.careerGoals?.primaryGoal || "OTHER";
    const matrix = GOAL_ALIGNMENT_MATRIX[primaryGoal];

    if (matrix && matrix[candidate.refId] !== undefined) {
      return matrix[candidate.refId];
    }

    if (candidate.type === "SKILL") {
      return ["LEARN_NEW_SKILLS", "SWITCH_CAREER", "BECOME_JOB_READY"].includes(primaryGoal)
        ? 0.8
        : 0.5;
    }

    return 0.5;
  }

  private static computeGapSignal(
    candidate: RecommendationCandidate,
    ctx: RecommendationContext
  ): number {
    const severity = ctx.skillGap?.severity ?? 0.5;

    if (candidate.refId === "ROADMAP") {
      return severity; // Higher gap -> stronger roadmap signal
    }

    if (candidate.type === "SKILL") {
      const importance = candidate.context?.importance;
      if (importance === "CORE") return 0.9;
      if (importance === "IMPORTANT") return 0.7;
      return 0.4;
    }

    if (candidate.refId === "INTERVIEW_PRACTICE") {
      // Lower gap -> user is more ready for interview practice
      return Math.max(0.2, 1.0 - severity);
    }

    if (candidate.refId === "RESUME_SCORE" || candidate.refId === "RESUME_BUILD") {
      return 0.5;
    }

    return 0.4;
  }

  private static computeModuleResultSignal(
    candidate: RecommendationCandidate,
    ctx: RecommendationContext
  ): number {
    const { moduleActivity } = ctx;

    if (candidate.refId === "RESUME_BUILD") {
      const latestScore = moduleActivity.find((a) => a.module === "RESUME_SCORE");
      const scoreVal = (latestScore?.metadata as any)?.score;
      if (scoreVal !== null && scoreVal !== undefined) {
        if (scoreVal < 50) return 0.95;
        if (scoreVal < 70) return 0.75;
        return 0.3;
      }
      return 0.5;
    }

    if (candidate.refId === "INTERVIEW_PRACTICE") {
      if (candidate.context?.source === "ROADMAP_PHASE_COMPLETION") {
        return 0.9;
      }
      const latestInterview = moduleActivity.find((a) => a.module === "INTERVIEW_PRACTICE");
      const scoreVal = (latestInterview?.metadata as any)?.score;
      if (scoreVal !== null && scoreVal !== undefined) {
        if (scoreVal < 50) return 0.85;
        if (scoreVal >= 80 && candidate.context?.difficulty === "HARD") return 0.85;
        return 0.4;
      }
      return 0.5;
    }

    if (candidate.refId === "ROADMAP") {
      const latestInterview = moduleActivity.find((a) => a.module === "INTERVIEW_PRACTICE");
      const scoreVal = (latestInterview?.metadata as any)?.score;
      if (scoreVal !== null && scoreVal !== undefined && scoreVal < 50) {
        return 0.85;
      }
      return 0.4;
    }

    return 0.5;
  }

  private static computeRecencySignal(
    candidate: RecommendationCandidate,
    ctx: RecommendationContext
  ): number {
    if (candidate.type !== "MODULE") return 0.8;

    const latest = ctx.moduleActivity.find((a) => a.module === (candidate.refId as any));
    if (!latest) return 1.0; // Never used -> highest recency score

    const daysSince =
      (Date.now() - new Date(latest.createdAt).getTime()) / (1000 * 60 * 60 * 24);

    if (daysSince >= 30) return 1.0;

    // Gradual decay from 0.2 (today) to 1.0 (30 days)
    const decay = 0.2 + 0.8 * (daysSince / 30);
    return Math.max(0.2, Math.min(1.0, decay));
  }

  private static computeAssessmentSignal(
    candidate: RecommendationCandidate,
    ctx: RecommendationContext
  ): number {
    const { assessment } = ctx;
    if (!assessment || assessment.isStale) return 0.0;

    // Check if candidate matches assessment gaps or focus areas
    const refLower = candidate.refId.toLowerCase();
    const hasGapMatch = assessment.gaps.some((g) => g.toLowerCase().includes(refLower));
    const hasFocusMatch = assessment.suggestedFocusAreas.some((f) =>
      f.toLowerCase().includes(refLower)
    );

    if (hasGapMatch || hasFocusMatch) return 0.95;

    if (candidate.refId === "ROADMAP") {
      return assessment.readinessScore < 60 ? 0.8 : 0.4;
    }

    if (candidate.refId === "INTERVIEW_PRACTICE") {
      return assessment.readinessScore >= 70 ? 0.85 : 0.3;
    }

    return 0.5;
  }

  private static computeProfileSignal(
    candidate: RecommendationCandidate,
    ctx: RecommendationContext
  ): number {
    const { completeness, profile } = ctx;

    if (candidate.type === "PROFILE_CLARIFICATION") return 1.0;
    if (candidate.refId === "COMPLETE_PROFILE") return 1.0;

    // If candidate requires a target role but none is set
    if (
      (candidate.refId === "ROADMAP" || candidate.type === "SKILL") &&
      (!profile.careerGoals?.targetRole || profile.careerGoals.targetRole.trim() === "")
    ) {
      return 0.2;
    }

    if (completeness.state === "COMPLETED") return 1.0;
    if (completeness.state === "IN_PROGRESS") return 0.7;
    return 0.3;
  }

  private static computeBehavioralSignal(
    candidate: RecommendationCandidate,
    ctx: RecommendationContext
  ): number {
    const history = ctx.recommendationHistory.filter((h) => h.refId === candidate.refId);

    const dismissalCount = history.filter((h) => h.status === "DISMISSED").length;
    if (dismissalCount >= 3) return 0.1;
    if (dismissalCount === 2) return 0.3;
    if (dismissalCount === 1) return 0.5;

    const hasCompleted = history.some((h) => h.status === "COMPLETED");
    if (hasCompleted) return 0.7;

    return 0.8;
  }

  private static computeCompositeScore(signals: CandidateSignals): number {
    const rawScore =
      SCORING_WEIGHTS.goalAlignment * signals.goalAlignment +
      SCORING_WEIGHTS.gapSignal * signals.gapSignal +
      SCORING_WEIGHTS.moduleResultSignal * signals.moduleResultSignal +
      SCORING_WEIGHTS.recencySignal * signals.recencySignal +
      SCORING_WEIGHTS.assessmentSignal * signals.assessmentSignal +
      SCORING_WEIGHTS.profileSignal * signals.profileSignal +
      SCORING_WEIGHTS.behavioralSignal * signals.behavioralSignal;

    return Math.max(0, Math.min(1, Math.round(rawScore * 1000) / 1000));
  }
}
