import { prisma } from "@/lib/prisma";
import { ProfileData } from "@/features/profile/types";
import { SkillGapService } from "@/features/skill-gap/services";
import {
  AssessmentInputSnapshot,
  CareerAssessmentResult,
  CareerAssessmentStatus,
  ModuleActivityContext,
} from "../types";
import { ASSESSMENT_PROMPT_VERSION } from "../constants";
import { CareerAssessmentLLMService } from "./career-assessment-llm.service";

export class CareerAssessmentService {
  /**
   * Deterministic check for staleness based on profile version comparison.
   */
  public static isAssessmentStale(
    assessmentProfileVersion: number,
    currentProfileVersion: number
  ): boolean {
    return assessmentProfileVersion !== currentProfileVersion;
  }

  /**
   * Helper to format DB record into full CareerAssessmentResult.
   */
  private static formatResult(
    record: any,
    currentProfileVersion?: number
  ): CareerAssessmentResult {
    const isStale =
      currentProfileVersion !== undefined
        ? this.isAssessmentStale(record.profileVersion, currentProfileVersion)
        : false;

    return {
      id: record.id,
      userId: record.userId,
      profileVersion: record.profileVersion,
      readinessScore: record.readinessScore,
      strengths: Array.isArray(record.strengths) ? record.strengths : [],
      gaps: Array.isArray(record.gaps) ? record.gaps : [],
      suggestedFocusAreas: Array.isArray(record.suggestedFocusArea)
        ? record.suggestedFocusArea
        : Array.isArray(record.suggestedFocusAreas)
        ? record.suggestedFocusAreas
        : [],
      narrative: record.narrative,
      inputSnapshot: record.inputSnapshot as AssessmentInputSnapshot,
      model: record.model,
      status: record.status as CareerAssessmentStatus,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
      isStale,
    };
  }

  /**
   * Creates a compact audit snapshot of the profile at the time of assessment.
   */
  public static createInputSnapshot(
    profile: ProfileData
  ): AssessmentInputSnapshot {
    return {
      profileVersion: profile.profileVersion,
      name: profile.name || "User",
      currentStatus: profile.currentStatus || "OTHER",
      currentRole: profile.currentRole || "Unspecified Role",
      yearsOfExperience: profile.yearsOfExperience || 0,
      highestQualification: profile.education?.highestQualification || "",
      fieldOfStudy: profile.education?.fieldOfStudy || "",
      primaryGoal: profile.careerGoals?.primaryGoal || "",
      targetRole: profile.careerGoals?.targetRole || "Unspecified Goal",
      targetCompanyType: profile.targetCompanyType || "OTHER",
      weeklyLearningHours: profile.weeklyLearningHours || 0,
      phoneNumber: profile.phoneNumber || "",
      skills: (profile.skills || []).map((s) => ({
        name: s.name,
        proficiency: s.proficiency,
      })),
      desiredSkills: [...(profile.desiredSkills || [])],
    };
  }

  /**
   * Creates a new immutable Career Assessment record.
   */
  public static async createAssessment(
    userId: string,
    profile: ProfileData,
    activity?: ModuleActivityContext
  ): Promise<CareerAssessmentResult> {
    const inputSnapshot = this.createInputSnapshot(profile);

    console.log(
      `[CareerAssessmentService] Generating career assessment for user=${userId}, profileVersion=${profile.profileVersion}`
    );

    // Compute deterministic skill gap context from Phase 6.4 engine
    let gapAnalysis;
    try {
      gapAnalysis = await SkillGapService.calculateForProfile(profile);
    } catch (err) {
      console.warn(
        "[CareerAssessmentService] Could not compute deterministic skill gap for assessment:",
        err
      );
    }

    const { output, model, processingDurationMs } =
      await CareerAssessmentLLMService.generateAssessment(
        profile,
        activity,
        gapAnalysis
      );

    const record = await prisma.careerAssessment.create({
      data: {
        userId,
        profileVersion: profile.profileVersion,
        readinessScore: output.readinessScore,
        strengths: output.strengths,
        gaps: output.gaps,
        suggestedFocusArea: output.suggestedFocusAreas,
        narrative: output.narrative,
        inputSnapshot: inputSnapshot as any,
        model,
        status: CareerAssessmentStatus.COMPLETED,
      },
    });

    console.log(
      `[CareerAssessmentService] Assessment created id=${record.id}, duration=${processingDurationMs}ms, score=${record.readinessScore}`
    );

    // Record ModuleActivity (non-blocking)
    try {
      await prisma.moduleActivity.create({
        data: {
          userId,
          module: "CAREER_ASSESSMENT",
          completionStatus: "COMPLETED",
        },
      });
    } catch (err) {
      console.warn("[CareerAssessmentService] Failed to record module activity:", err);
    }

    return this.formatResult(record, profile.profileVersion);
  }

  /**
   * Retrieves the most recent assessment for a user, checking staleness against currentProfileVersion if provided.
   */
  public static async getLatestAssessment(
    userId: string,
    currentProfileVersion?: number
  ): Promise<CareerAssessmentResult | null> {
    const record = await prisma.careerAssessment.findFirst({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    if (!record) return null;

    return this.formatResult(record, currentProfileVersion);
  }

  /**
   * Retrieves historical assessments for a user.
   */
  public static async getAssessmentHistory(
    userId: string
  ): Promise<CareerAssessmentResult[]> {
    const records = await prisma.careerAssessment.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    return records.map((r) => this.formatResult(r));
  }
}
