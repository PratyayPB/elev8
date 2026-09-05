import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const profileCount = await prisma.roleSkillProfile.count();
  const reqCount = await prisma.roleSkillRequirement.count();
  console.log(`Validation results:`);
  console.log(`Profiles: ${profileCount}`);
  console.log(`Requirements: ${reqCount}`);

  if (profileCount !== 50) {
    throw new Error(`Expected 50 profiles, got ${profileCount}`);
  }
  
  if (reqCount < 250) {
    throw new Error(`Expected at least 250 requirements, got ${reqCount}`);
  }

  const profiles = await prisma.roleSkillProfile.findMany({ include: { skills: true }});
  for (const p of profiles) {
    if (p.skills.length < 5) {
      console.warn(`Profile ${p.role} has less than 5 skills (${p.skills.length})`);
    }
  }

  console.log("Validation passed successfully!");
}

main().finally(() => prisma.$disconnect());
