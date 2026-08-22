import { prisma } from "@/lib/prisma";
import { ProfileData } from "@/features/profile/types";
import { calculateProfileCompleteness } from "@/features/profile/services";
import { SkillGapService } from "@/features/skill-gap/services";
import { CareerAssessmentService } from "@/features/career-assessment/services";
import {
  CareerAssessmentSignal,
  RecommendationContext,
  RecommendationMode,
} from "../types";
import { ModuleActivityService } from "./module-activity.service";

export class RecommendationContextService {
  /**
   * Builds the comprehensive context object required for recommendation candidate generation and scoring.
   */
  public static async buildContext(
    userId: string,
    profile: ProfileData
  ): Promise<RecommendationContext> {
    // 1. Completeness
    const completeness = calculateProfileCompleteness(profile);

    // 2. Skill Gap
    let skillGap;
    try {
      skillGap = await SkillGapService.calculateForProfile(profile);
    } catch (err) {
      console.warn("[RecommendationContextService] Skill gap calculation error:", err);
    }

    // 3. Career Assessment
    let assessmentSignal: CareerAssessmentSignal | null = null;
    const latestAssessment = await CareerAssessmentService.getLatestAssessment(
      userId,
      profile.profileVersion
    );

    if (latestAssessment) {
      assessmentSignal = {
        id: latestAssessment.id,
        readinessScore: latestAssessment.readinessScore,
        strengths: latestAssessment.strengths,
        gaps: latestAssessment.gaps,
        suggestedFocusAreas: latestAssessment.suggestedFocusAreas,
        narrative: latestAssessment.narrative,
        isStale: latestAssessment.isStale || false,
        profileVersion: latestAssessment.profileVersion,
        createdAt: latestAssessment.createdAt,
      };
    }

    // 4. Module Activity (last 90 days)
    const moduleActivity = await ModuleActivityService.getRecentActivity(userId, 90);

    // 5. Recommendation History (last 30 recommendations for behavioral tracking)
    const rawHistory = await prisma.recommendation.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 30,
      select: {
        refId: true,
        type: true,
        status: true,
        createdAt: true,
      },
    });

    const recommendationHistory = rawHistory.map((r) => ({
      refId: r.refId,
      type: r.type,
      status: r.status,
      createdAt: r.createdAt,
    }));

    // 6. Determine Mode
    let mode: RecommendationMode = "STANDARD";

    if (completeness.score === 0 && moduleActivity.length === 0) {
      mode = "COLD_START";
    } else if (
      completeness.state !== "COMPLETED" &&
      (!profile.careerGoals?.targetRole || profile.careerGoals.targetRole.trim() === "")
    ) {
      mode = "PARTIAL_PROFILE";
    } else if (assessmentSignal && !assessmentSignal.isStale) {
      mode = "FULL_HYBRID";
    } else {
      // Check for maintenance mode: completed all modules and minimal gap
      const completedModules = new Set(
        moduleActivity
          .filter((a) => a.completionStatus === "COMPLETED")
          .map((a) => a.module)
      );

      const hasAllModules =
        completedModules.has("ROADMAP") &&
        (completedModules.has("RESUME_SCORE") || completedModules.has("RESUME_BUILD")) &&
        completedModules.has("INTERVIEW_PRACTICE");

      if (hasAllModules && skillGap && skillGap.severity < 0.2) {
        mode = "MAINTENANCE";
      }
    }

    return {
      userId,
      profile,
      completeness,
      skillGap,
      assessment: assessmentSignal,
      moduleActivity,
      recommendationHistory,
      mode,
    };
  }
}
