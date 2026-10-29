import { PrismaClient } from "@prisma/client";
import { seedRoleSkillMaps } from "./seed-data/role-skill-maps";
import { seedResumeTemplates } from "./seed-data/resume-templates";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting Elev8 database seed process...");

  await seedRoleSkillMaps(prisma);
  await seedResumeTemplates(prisma);

  console.log("Elev8 database seeding completed successfully.");
}

main()
  .catch((e) => {
    console.error("Database seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
