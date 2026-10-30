import { prisma } from "@/lib/prisma";
import {
  ASSESSMENT_WEEKLY_QUOTA,
  ASSESSMENT_QUOTA_WINDOW_MS,
} from "../constants";
import { WeeklyQuotaInfo } from "../types";

export function formatTimeUntilReset(resetDate: Date, now: Date = new Date()): string {
  const diffMs = resetDate.getTime() - now.getTime();
  if (diffMs <= 0) return "momentarily";

  const diffHours = Math.ceil(diffMs / (1000 * 60 * 60));
  if (diffHours < 24) {
    return `in ${diffHours} ${diffHours === 1 ? "hour" : "hours"}`;
  }

  const diffDays = Math.ceil(diffHours / 24);
  return `in ${diffDays} ${diffDays === 1 ? "day" : "days"}`;
}

export class AssessmentQuotaService {
  /**
   * Calculates the weekly rolling 7-day assessment quota for a user.
   */
  public static async getWeeklyQuota(
    userId: string,
    now: Date = new Date()
  ): Promise<WeeklyQuotaInfo> {
    const windowStart = new Date(now.getTime() - ASSESSMENT_QUOTA_WINDOW_MS);

    // Fetch non-failed assessments within the rolling 7-day window
    const recentAssessments = await prisma.careerAssessment.findMany({
      where: {
        userId,
        createdAt: { gte: windowStart },
        status: { not: "FAILED" },
      },
      select: {
        id: true,
        createdAt: true,
        status: true,
      },
      orderBy: { createdAt: "asc" },
    });

    const usedThisWeek = recentAssessments.length;
    const remaining = Math.max(0, ASSESSMENT_WEEKLY_QUOTA - usedThisWeek);
    const canGenerate = remaining > 0;

    let earliestExpiringAt: string | null = null;
    let resetFormatted: string | null = null;

    if (!canGenerate && recentAssessments.length > 0) {
      // The oldest assessment in this active window will roll off after 7 days from its createdAt
      const oldestActive = recentAssessments[0];
      const expiryDate = new Date(
        oldestActive.createdAt.getTime() + ASSESSMENT_QUOTA_WINDOW_MS
      );
      earliestExpiringAt = expiryDate.toISOString();
      resetFormatted = formatTimeUntilReset(expiryDate, now);
    }

    return {
      totalAllowed: ASSESSMENT_WEEKLY_QUOTA,
      usedThisWeek,
      remaining,
      canGenerate,
      earliestExpiringAt,
      resetFormatted,
    };
  }

  /**
   * Asserts that a user has quota available, or throws an error with reset time.
   */
  public static async assertQuotaAvailable(userId: string): Promise<WeeklyQuotaInfo> {
    const quota = await this.getWeeklyQuota(userId);
    if (!quota.canGenerate) {
      const resetMsg = quota.resetFormatted ? ` ${quota.resetFormatted}` : " soon";
      throw new Error(
        `Weekly limit reached (3/3 used). Your next Career Assessment becomes available${resetMsg}.`
      );
    }
    return quota;
  }
}
