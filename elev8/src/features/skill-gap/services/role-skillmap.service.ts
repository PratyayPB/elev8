import { prisma } from "@/lib/prisma";
import { CareerExperienceLevel } from "@prisma/client";
import { resolveRoleAlias } from "../utils/role-normalizer";

export class RoleSkillMapService {
  /**
   * Resolves an arbitrary user target role string to its canonical normalized slug.
   */
  public static resolveRole(targetRole: string): string {
    return resolveRoleAlias(targetRole);
  }

  /**
   * Fetches a RoleSkillProfile with its associated RoleSkillRequirements from the database.
   */
  public static async getRoleSkillProfile(
    normalizedRole: string
  ) {
    return prisma.roleSkillProfile.findUnique({
      where: {
        normalizedRole,
      },
      include: {
        skills: true,
      },
    });
  }

  /**
   * Checks if a role is supported across any experience level.
   */
  public static async isRoleSupported(normalizedRole: string): Promise<boolean> {
    const count = await prisma.roleSkillProfile.count({
      where: { normalizedRole },
    });
    return count > 0;
  }

  /**
   * Retrieves a list of all distinct canonical supported role names.
   */
  public static async getSupportedRoles(): Promise<string[]> {
    const profiles = await prisma.roleSkillProfile.findMany({
      select: { role: true },
      distinct: ["role"],
      orderBy: { role: "asc" },
    });

    return profiles.map((p) => p.role);
  }
}
