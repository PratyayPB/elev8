import { PrismaClient } from "@prisma/client";
import { GENERATED_CANONICAL_ROLES } from "./generated-canonical-roles";
import { normalizeSkillForLookup } from "../../../src/features/skill-gap/utils/skill-normalizer";

export async function seedRoleSkillMaps(prisma: PrismaClient) {
  console.log(`[Seed] Wiping existing RoleSkillProfile and RoleSkillRequirement records...`);
  
  await prisma.roleSkillRequirement.deleteMany({});
  await prisma.roleSkillProfile.deleteMany({});

  console.log(`[Seed] Seeding ${GENERATED_CANONICAL_ROLES.length} canonical RoleSkillProfiles...`);

  let profilesCreated = 0;
  let requirementsCreated = 0;

  for (const entry of GENERATED_CANONICAL_ROLES) {
    const profile = await prisma.roleSkillProfile.upsert({
      where: {
        normalizedRole: entry.normalizedRole,
      },
      update: {
        role: entry.role,
      },
      create: {
        role: entry.role,
        normalizedRole: entry.normalizedRole,
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
          minimumProficiency: skill.minimumProficiency as any,
          importance: skill.importance as any,
          estimatedHours: skill.estimatedHours,
        },
        create: {
          roleSkillProfileId: profile.id,
          name: skill.name,
          normalizedName,
          minimumProficiency: skill.minimumProficiency as any,
          importance: skill.importance as any,
          estimatedHours: skill.estimatedHours,
        },
      });

      requirementsCreated++;
    }
  }

  console.log(
    `[Seed] Successfully seeded ${profilesCreated} canonical RoleSkillProfiles with ${requirementsCreated} RoleSkillRequirements.`
  );
}
