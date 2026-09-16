import { prisma } from "@/lib/prisma";
import {
  CareerExperienceLevel,
  InterviewType,
  InterviewDifficulty,
  InterviewTemplateStatus,
  GlobalInterviewTemplate,
} from "@prisma/client";
import { resolveRoleAlias } from "@/features/skill-gap/utils/role-normalizer";

export class GlobalInterviewTemplateService {
  /**
   * Normalizes a role name into a canonical slug for deduplication and lookup.
   */
  public static normalizeRole(role: string): string {
    return resolveRoleAlias(role);
  }

  /**
   * Looks up an existing GlobalInterviewTemplate matching the normalized role, experience level, interview type, and difficulty.
   */
  public static async findMatchingTemplate(
    role: string,
    experienceLevel: CareerExperienceLevel,
    interviewType: InterviewType,
    difficulty: InterviewDifficulty = "MEDIUM"
  ): Promise<GlobalInterviewTemplate | null> {
    const normalizedRole = this.normalizeRole(role);
    if (!normalizedRole) return null;

    return prisma.globalInterviewTemplate.findUnique({
      where: {
        normalizedRole_experienceLevel_interviewType_difficulty: {
          normalizedRole,
          experienceLevel,
          interviewType,
          difficulty,
        },
      },
    });
  }

  /**
   * Creates and stores a new GlobalInterviewTemplate record.
   */
  public static async createTemplate(data: {
    createdByUserId?: string | null;
    role: string;
    normalizedRole: string;
    experienceLevel: CareerExperienceLevel;
    difficulty?: InterviewDifficulty;
    interviewType: InterviewType;
    questionCount: number;
    estimatedDuration?: string | null;
    templateBlobUrl: string;
  }): Promise<GlobalInterviewTemplate> {
    return prisma.globalInterviewTemplate.create({
      data: {
        createdByUserId: data.createdByUserId || undefined,
        role: data.role,
        normalizedRole: data.normalizedRole,
        experienceLevel: data.experienceLevel,
        difficulty: data.difficulty || "MEDIUM",
        interviewType: data.interviewType,
        questionCount: data.questionCount,
        estimatedDuration: data.estimatedDuration,
        templateBlobUrl: data.templateBlobUrl,
        status: InterviewTemplateStatus.ACTIVE,
      },
    });
  }

  /**
   * Lists all active global interview templates.
   */
  public static async listTemplates(): Promise<GlobalInterviewTemplate[]> {
    return prisma.globalInterviewTemplate.findMany({
      where: { status: InterviewTemplateStatus.ACTIVE },
      orderBy: [{ role: "asc" }, { interviewType: "asc" }],
    });
  }
}
