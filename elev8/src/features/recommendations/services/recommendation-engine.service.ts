import { prisma } from "@/lib/prisma";
import { ProfileData } from "@/features/profile/types";
import {
  RecommendationCandidate,
  RecommendationContext,
  RecommendationData,
} from "../types";
import { RECOMMENDATION_CONFIG } from "../config/recommendation.config";
import { RecommendationContextService } from "./recommendation-context.service";
import { CandidateGeneratorService } from "./candidate-generator.service";
import { CandidateScorerService } from "./candidate-scorer.service";

export class RecommendationEngineService {
  /**
   * Executes the full 7-stage deterministic recommendation engine pipeline.
   */
  public static async execute(
    userId: string,
    profile: ProfileData,
    trigger: string = "MANUAL_REFRESH"
  ): Promise<RecommendationData[]> {
    // Stage 1: Build Context
    const ctx = await RecommendationContextService.buildContext(userId, profile);

    // Stage 2: Generate Candidates
    const rawCandidates = CandidateGeneratorService.generateCandidates(ctx);

    // Stage 3: Filter Candidates (Eligibility, Cooldowns, Suppression)
    const eligibleCandidates = this.filterCandidates(rawCandidates, ctx);

    // Stage 4: Score Candidates
    const scoredCandidates = CandidateScorerService.scoreCandidates(
      eligibleCandidates,
      ctx
    );

    // Stage 5: Apply Diversity Rules
    const diversifiedCandidates = this.applyDiversity(scoredCandidates);

    // Stage 6: Rank Candidates (Top 3 with Priorities)
    const rankedCandidates = this.rankCandidates(diversifiedCandidates);

    // Stage 7: Persist Recommendations
    return this.persistRecommendations(userId, ctx, rankedCandidates, trigger);
  }

  /**
   * Stage 3: Filters out candidates based on eligibility, recent dismissal cooldowns, and completion suppression.
   */
  public static filterCandidates(
    candidates: RecommendationCandidate[],
    ctx: RecommendationContext
  ): RecommendationCandidate[] {
    const sevenDaysAgo = Date.now() - RECOMMENDATION_CONFIG.DISMISSAL_COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
    const thirtyDaysAgo = Date.now() - RECOMMENDATION_CONFIG.COMPLETED_SUPPRESSION_DAYS * 24 * 60 * 60 * 1000;

    return candidates.filter((candidate) => {
      if (!candidate.eligible) return false;

      // Behavioral Dismissal Cooldown: 3+ dismissals with at least one in the last 7 days (spec §52-53)
      const dismissals = ctx.recommendationHistory.filter(
        (h) => h.refId === candidate.refId && h.status === "DISMISSED"
      );

      const recentDismissal = dismissals.some(
        (d) => new Date(d.createdAt).getTime() >= sevenDaysAgo
      );

      if (
        dismissals.length >= RECOMMENDATION_CONFIG.DISMISSAL_THRESHOLD_COUNT &&
        recentDismissal
      ) {
        return false;
      }

      // Completed Suppression: Suppress if completed within 30 days unless in maintenance mode (spec §51)
      if (ctx.mode !== "MAINTENANCE") {
        const recentlyCompleted = ctx.recommendationHistory.some(
          (h) =>
            h.refId === candidate.refId &&
            h.status === "COMPLETED" &&
            new Date(h.createdAt).getTime() >= thirtyDaysAgo
        );

        if (recentlyCompleted) {
          return false;
        }
      }

      return true;
    });
  }

  /**
   * Stage 5: Applies diversity filtering to avoid repeated or monopolized module recommendations (spec §56).
   */
  public static applyDiversity(
    candidates: RecommendationCandidate[]
  ): RecommendationCandidate[] {
    // Sort primarily by score descending
    const sorted = [...candidates].sort((a, b) => b.score - a.score);

    // Deduplicate by refId
    const seenRefIds = new Set<string>();
    const uniqueCandidates: RecommendationCandidate[] = [];

    for (const c of sorted) {
      if (!seenRefIds.has(c.refId)) {
        seenRefIds.add(c.refId);
        uniqueCandidates.push(c);
      }
    }

    return uniqueCandidates;
  }

  /**
   * Stage 6: Ranks the top candidates and assigns priority (1, 2, 3).
   */
  public static rankCandidates(
    candidates: RecommendationCandidate[]
  ): Array<RecommendationCandidate & { priority: number }> {
    // Filter candidates below minimum threshold, unless we have very few
    let qualified = candidates.filter(
      (c) => c.score >= RECOMMENDATION_CONFIG.MINIMUM_CANDIDATE_SCORE
    );

    if (qualified.length === 0) {
      qualified = candidates; // Fallback so user is not left with an empty screen
    }

    // Take top 3
    const top = qualified.slice(0, RECOMMENDATION_CONFIG.MAX_RECOMMENDATIONS);

    return top.map((candidate, index) => ({
      ...candidate,
      priority: index + 1,
    }));
  }

  /**
   * Stage 7: Persists the new RecommendationSet and its associated Recommendation records in Prisma.
   */
  public static async persistRecommendations(
    userId: string,
    ctx: RecommendationContext,
    rankedCandidates: Array<RecommendationCandidate & { priority: number }>,
    trigger: string
  ): Promise<RecommendationData[]> {
    return prisma.$transaction(async (tx) => {
      // 1. Create RecommendationSet
      const set = await tx.recommendationSet.create({
        data: {
          userId,
          profileVersion: ctx.profile.profileVersion,
          trigger,
        },
      });

      // 2. Create Recommendation records
      const createdRecommendations: RecommendationData[] = [];

      for (const item of rankedCandidates) {
        const record = await tx.recommendation.create({
          data: {
            recommendationSetId: set.id,
            userId,
            source: item.source,
            type: item.type,
            refId: item.refId,
            priority: item.priority,
            score: item.score,
            scoreBreakdown: item.signals as any,
            reason: item.reason,
            context: item.context ? (item.context as any) : undefined,
            status: "PENDING",
          },
        });

        createdRecommendations.push({
          id: record.id,
          recommendationSetId: record.recommendationSetId,
          userId: record.userId,
          source: record.source,
          type: record.type,
          refId: record.refId,
          priority: record.priority,
          score: record.score,
          scoreBreakdown: record.scoreBreakdown as any,
          reason: record.reason,
          context: record.context as any,
          status: record.status,
          createdAt: record.createdAt,
          updatedAt: record.updatedAt,
        });
      }

      return createdRecommendations;
    });
  }
}
