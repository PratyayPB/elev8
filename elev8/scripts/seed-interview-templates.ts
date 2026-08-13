import { PrismaClient } from "@prisma/client";
import { put } from "@vercel/blob";
import "dotenv/config";
import { PREDEFINED_INTERVIEWS } from "../src/features/interview/data/interviews";

const prisma = new PrismaClient();

async function seed() {
  console.log("🚀 Starting predefined interview templates seeding...");

  const roles = Object.values(PREDEFINED_INTERVIEWS);
  let totalSeeded = 0;
  let totalSkipped = 0;

  for (const roleDef of roles) {
    const difficulties = ["EASY", "MEDIUM", "HARD"] as const;

    for (const difficulty of difficulties) {
      const levelData = roleDef.levels[difficulty];
      if (!levelData || !levelData.questions) {
        console.warn(`⚠️ Missing level ${difficulty} for role ${roleDef.role}`);
        continue;
      }

      const templateId = `${roleDef.id}-${roleDef.type.toLowerCase().replace(/_/g, "-")}-${difficulty.toLowerCase()}`;
      const questionsCount = Object.keys(levelData.questions).length;

      // Check if template already exists in Prisma
      const existing = await prisma.interviewTemplate.findUnique({
        where: { id: templateId },
      });

      let templateBlobUrl = existing?.templateBlobUrl;

      if (!templateBlobUrl) {
        console.log(`📤 Uploading template Blob for: ${templateId}...`);

        const templateObject = {
          templateId,
          role: roleDef.role,
          type: roleDef.type,
          difficulty,
          questions: levelData.questions,
        };

        const blob = await put(`templates/${templateId}.json`, JSON.stringify(templateObject, null, 2), {
          access: "private",
          contentType: "application/json",
        });

        templateBlobUrl = blob.url;
      } else {
        console.log(`ℹ️ Template Blob already exists for: ${templateId}, skipping upload.`);
        totalSkipped++;
      }

      // Upsert record in Prisma
      await prisma.interviewTemplate.upsert({
        where: { id: templateId },
        update: {
          role: roleDef.role,
          type: roleDef.type,
          difficulty,
          questionCount: questionsCount,
          templateBlobUrl,
        },
        create: {
          id: templateId,
          role: roleDef.role,
          type: roleDef.type,
          difficulty,
          questionCount: questionsCount,
          templateBlobUrl,
        },
      });

      totalSeeded++;
      console.log(`✅ Seeded template: ${templateId} (${questionsCount} questions)`);
    }
  }

  console.log(`\n🎉 Predefined templates seed completed! Total: ${totalSeeded} seeded/updated, ${totalSkipped} blobs reused.`);
}

seed()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
