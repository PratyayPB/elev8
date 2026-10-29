import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.roleSkillRequirement.deleteMany();
  await prisma.roleSkillProfile.deleteMany();
  console.log("Cleared tables.");
}
main().finally(() => prisma.$disconnect());
