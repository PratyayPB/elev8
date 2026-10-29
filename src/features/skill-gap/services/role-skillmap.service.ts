import { prisma } from "@/lib/prisma";
import { CareerExperienceLevel } from "@prisma/client";
import { GENERATED_CANONICAL_ROLES } from "@/../prisma/seed-data/role-skill-maps/generated-canonical-roles";
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
   * Falls back to the bundled canonical seed data when database seeding hasn't been applied yet.
   */
  public static async getRoleSkillProfile(normalizedRole: string) {
    const fromDb = await prisma.roleSkillProfile.findUnique({
      where: {
        normalizedRole,
      },
      include: {
        skills: true,
      },
    });

    if (fromDb) {
      return fromDb;
    }

    const seedEntry = GENERATED_CANONICAL_ROLES.find(
      (entry) => entry.normalizedRole === normalizedRole
    );

    if (!seedEntry) {
      return null;
    }

    return {
      id: `seed-${seedEntry.normalizedRole}`,
      role: seedEntry.role,
      normalizedRole: seedEntry.normalizedRole,
      createdAt: new Date(),
      updatedAt: new Date(),
      skills: seedEntry.skills.map((skill) => ({
        id: `seed-${seedEntry.normalizedRole}-${skill.name}`,
        roleSkillProfileId: `seed-${seedEntry.normalizedRole}`,
        name: skill.name,
        normalizedName: skill.name.toLowerCase().replace(/\s+/g, "-"),
        minimumProficiency: skill.minimumProficiency,
        importance: skill.importance,
        estimatedHours: skill.estimatedHours ?? null,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    };
  }

  /**
   * Checks if a role is supported across any experience level.
   */
  public static async isRoleSupported(
    normalizedRole: string
  ): Promise<boolean> {
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
