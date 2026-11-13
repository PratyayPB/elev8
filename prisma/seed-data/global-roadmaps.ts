import { PrismaClient, CareerLevel, RoadmapStatus } from "@prisma/client";

export async function seedGlobalRoadmaps(prisma: PrismaClient) {
  console.log("Seeding canonical Global Roadmaps...");

  const canonicalRoadmaps = [
    {
      normalizedRole: "frontend-developer",
      targetRole: "Frontend Developer",
      title: "Frontend Developer Roadmap",
      description: "Comprehensive step-by-step learning path covering modern HTML, CSS, JavaScript, TypeScript, React, Next.js, performance optimization, and testing.",
      experienceLevel: CareerLevel.INTERMEDIATE,
      estimatedDuration: "6 Months",
      status: RoadmapStatus.COMPLETED,
    },
    {
      normalizedRole: "backend-developer",
      targetRole: "Backend Developer",
      title: "Backend Developer Roadmap",
      description: "Foundational to advanced guide for backend engineering: Node.js, databases (PostgreSQL, Redis), API design, containerization, and system architecture.",
      experienceLevel: CareerLevel.INTERMEDIATE,
      estimatedDuration: "6 Months",
      status: RoadmapStatus.COMPLETED,
    },
    {
      normalizedRole: "full-stack-developer",
      targetRole: "Full Stack Developer",
      title: "Full Stack Developer Roadmap",
      description: "End-to-end curriculum integrating frontend development, scalable backend services, cloud deployment, and database administration.",
      experienceLevel: CareerLevel.INTERMEDIATE,
      estimatedDuration: "8 Months",
      status: RoadmapStatus.COMPLETED,
    },
    {
      normalizedRole: "devops-engineer",
      targetRole: "DevOps Engineer",
      title: "DevOps & Cloud Engineer Roadmap",
      description: "Master CI/CD pipelines, Docker, Kubernetes, Infrastructure as Code (Terraform), and cloud monitoring on AWS / GCP.",
      experienceLevel: CareerLevel.INTERMEDIATE,
      estimatedDuration: "6 Months",
      status: RoadmapStatus.COMPLETED,
    },
  ];

  for (const roadmap of canonicalRoadmaps) {
    await prisma.globalRoadmap.upsert({
      where: {
        normalizedRole_experienceLevel: {
          normalizedRole: roadmap.normalizedRole,
          experienceLevel: roadmap.experienceLevel,
        },
      },
      create: roadmap,
      update: {
        title: roadmap.title,
        description: roadmap.description,
        targetRole: roadmap.targetRole,
        estimatedDuration: roadmap.estimatedDuration,
        status: roadmap.status,
      },
    });
  }

  console.log(`Seeded ${canonicalRoadmaps.length} global roadmaps.`);
}
