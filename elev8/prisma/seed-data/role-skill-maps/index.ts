import { PrismaClient } from "@prisma/client";
import { ENGINEERING_ROLE_PROFILES } from "./engineering-roles";
import { DATA_AI_ROLE_PROFILES } from "./data-ai-roles";
import { CLOUD_DEVOPS_ROLE_PROFILES } from "./cloud-devops-roles";
import { PRODUCT_DESIGN_BUSINESS_ROLE_PROFILES } from "./product-design-business-roles";
import { RoleProfileSeedEntry } from "./types";
import { normalizeSkillForLookup } from "../../../src/features/skill-gap/utils/skill-normalizer";

export const ALL_ROLE_PROFILES: RoleProfileSeedEntry[] = [
  ...ENGINEERING_ROLE_PROFILES,
  ...DATA_AI_ROLE_PROFILES,
  ...CLOUD_DEVOPS_ROLE_PROFILES,
  ...PRODUCT_DESIGN_BUSINESS_ROLE_PROFILES,
];

export async function seedRoleSkillMaps(prisma: PrismaClient) {
  console.log(`[Seed] Seeding ${ALL_ROLE_PROFILES.length} RoleSkillProfiles across 20 canonical roles...`);

  let profilesCreated = 0;
  let requirementsCreated = 0;

  for (const entry of ALL_ROLE_PROFILES) {
    const profile = await prisma.roleSkillProfile.upsert({
      where: {
        normalizedRole_experienceLevel: {
          normalizedRole: entry.normalizedRole,
          experienceLevel: entry.experienceLevel,
        },
      },
      update: {
        role: entry.role,
      },
      create: {
        role: entry.role,
        normalizedRole: entry.normalizedRole,
        experienceLevel: entry.experienceLevel,
      },
    });

    profilesCreated++;

    for (const skill of entry.skills) {
      const normalizedName = normalizeSkillForLookup(skill.name);

      await prisma.roleSkillRequirement.upsert({
        where: {
          roleSkillProfileId_normalizedName: {
            roleSkillProfileId: profile.id,
            normalizedName,
          },
        },
        update: {
          name: skill.name,
          minimumProficiency: skill.minimumProficiency,
          importance: skill.importance,
          estimatedHours: skill.estimatedHours,
        },
        create: {
          roleSkillProfileId: profile.id,
          name: skill.name,
          normalizedName,
          minimumProficiency: skill.minimumProficiency,
          importance: skill.importance,
          estimatedHours: skill.estimatedHours,
        },
      });

      requirementsCreated++;
    }
  }

  console.log(
    `[Seed] Successfully seeded ${profilesCreated} RoleSkillProfiles with ${requirementsCreated} RoleSkillRequirements.`
  );
}
