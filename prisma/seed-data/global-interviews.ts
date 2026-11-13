import {
  PrismaClient,
  CareerExperienceLevel,
  InterviewDifficulty,
  InterviewType,
  InterviewTemplateStatus,
} from "@prisma/client";

export async function seedGlobalInterviews(prisma: PrismaClient) {
  console.log("Seeding canonical Global Interview Templates...");

  const canonicalTemplates = [
    {
      role: "Frontend Developer",
      normalizedRole: "frontend-developer",
      experienceLevel: CareerExperienceLevel.MID,
      difficulty: InterviewDifficulty.MEDIUM,
      interviewType: InterviewType.TECHNICAL,
      questionCount: 6,
      estimatedDuration: "45 mins",
      templateBlobUrl: "system-seeded-frontend-mid",
      status: InterviewTemplateStatus.ACTIVE,
    },
    {
      role: "Backend Developer",
      normalizedRole: "backend-developer",
      experienceLevel: CareerExperienceLevel.MID,
      difficulty: InterviewDifficulty.MEDIUM,
      interviewType: InterviewType.TECHNICAL,
      questionCount: 6,
      estimatedDuration: "45 mins",
      templateBlobUrl: "system-seeded-backend-mid",
      status: InterviewTemplateStatus.ACTIVE,
    },
    {
      role: "Full Stack Developer",
      normalizedRole: "full-stack-developer",
      experienceLevel: CareerExperienceLevel.MID,
      difficulty: InterviewDifficulty.MEDIUM,
      interviewType: InterviewType.TECHNICAL,
      questionCount: 6,
      estimatedDuration: "45 mins",
      templateBlobUrl: "system-seeded-fullstack-mid",
      status: InterviewTemplateStatus.ACTIVE,
    },
    {
      role: "DevOps Engineer",
      normalizedRole: "devops-engineer",
      experienceLevel: CareerExperienceLevel.MID,
      difficulty: InterviewDifficulty.MEDIUM,
      interviewType: InterviewType.TECHNICAL,
      questionCount: 6,
      estimatedDuration: "45 mins",
      templateBlobUrl: "system-seeded-devops-mid",
      status: InterviewTemplateStatus.ACTIVE,
    },
    {
      role: "Software Engineer",
      normalizedRole: "software-engineer",
      experienceLevel: CareerExperienceLevel.ENTRY,
      difficulty: InterviewDifficulty.EASY,
      interviewType: InterviewType.BEHAVIORAL,
      questionCount: 5,
      estimatedDuration: "30 mins",
      templateBlobUrl: "system-seeded-swe-entry-behavioral",
      status: InterviewTemplateStatus.ACTIVE,
    },
  ];

  for (const template of canonicalTemplates) {
    await prisma.globalInterviewTemplate.upsert({
      where: {
        normalizedRole_experienceLevel_interviewType_difficulty: {
          normalizedRole: template.normalizedRole,
          experienceLevel: template.experienceLevel,
          interviewType: template.interviewType,
          difficulty: template.difficulty,
        },
      },
      create: template,
      update: {
        role: template.role,
        questionCount: template.questionCount,
        estimatedDuration: template.estimatedDuration,
        templateBlobUrl: template.templateBlobUrl,
        status: template.status,
      },
    });
  }

  console.log(`Seeded ${canonicalTemplates.length} global interview templates.`);
}
