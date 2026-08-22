import { prisma } from "@/lib/prisma";
import { ProfileService } from "@/features/profile/services";
import { RecommendationData, RecommendationStatus } from "../types";
import { RECOMMENDATION_CONFIG } from "../config/recommendation.config";
import { RecommendationEngineService } from "./recommendation-engine.service";

export class RecommendationService {
  /**
   * Generates and persists a fresh recommendation set for the user.
   */
  public static async generateForUser(
    userId: string,
    trigger: string = "MANUAL_REFRESH"
  ): Promise<RecommendationData[]> {
    const profile = await ProfileService.getProfile(userId);
    if (!profile) {
      return [];
    }

    return RecommendationEngineService.execute(userId, profile, trigger);
  }

  /**
   * Retrieves the current recommendations for a user.
   * If recommendations are stale (older than 30 days or profileVersion changed), automatically regenerates them.
   */
  public static async getCurrentRecommendations(
    userId: string
  ): Promise<RecommendationData[]> {
    const profile = await ProfileService.getProfile(userId);
    if (!profile) {
      return [];
    }

    const latestSet = await prisma.recommendationSet.findFirst({
      where: { userId },
      orderBy: { createdAt: "desc" },
      include: {
        recommendations: {
          orderBy: { priority: "asc" },
        },
      },
    });

    const freshnessWindowMs =
      RECOMMENDATION_CONFIG.FRESHNESS_THRESHOLD_DAYS * 24 * 60 * 60 * 1000;

    const isStale =
      !latestSet ||
      latestSet.profileVersion !== profile.profileVersion ||
      Date.now() - new Date(latestSet.createdAt).getTime() > freshnessWindowMs;

    if (isStale) {
      console.log(
        `[RecommendationService] Recommendations stale or missing for user=${userId}. Regenerating...`
      );
      return this.generateForUser(userId, "SCHEDULED_REFRESH");
    }

    return latestSet.recommendations.map((r) => ({
      id: r.id,
      recommendationSetId: r.recommendationSetId,
      userId: r.userId,
      source: r.source,
      type: r.type,
      refId: r.refId,
      priority: r.priority,
      score: r.score,
      scoreBreakdown: r.scoreBreakdown as any,
      reason: r.reason,
      context: r.context as any,
      status: r.status,
      createdAt: r.createdAt,
      updatedAt: r.updatedAt,
    }));
  }

  /**
   * Updates a recommendation status (ACCEPTED, DISMISSED, COMPLETED).
   */
  public static async updateStatus(
    userId: string,
    id: string,
    status: RecommendationStatus
  ): Promise<RecommendationData> {
    const record = await prisma.recommendation.update({
      where: {
        id,
        userId, // Enforce security ownership
      },
      data: {
        status,
      },
    });

    return {
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
    };
  }

  public static async acceptRecommendation(userId: string, id: string) {
    return this.updateStatus(userId, id, "ACCEPTED");
  }

  public static async dismissRecommendation(userId: string, id: string) {
    return this.updateStatus(userId, id, "DISMISSED");
  }

  public static async completeRecommendation(userId: string, id: string) {
    return this.updateStatus(userId, id, "COMPLETED");
  }
}
