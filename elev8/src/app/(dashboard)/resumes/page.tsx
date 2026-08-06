import React from "react";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { ResumeWorkspace } from "@/features/resume/components/workspace/resume-workspace";
import { ResumeSummary } from "@/features/resume/types/workspace";

export default async function ResumesPage() {
  const { userId: clerkId } = await auth();

  let initialResumes: ResumeSummary[] = [];

  if (clerkId) {
    const user = await prisma.user.findUnique({
      where: { clerkId },
      include: {
        resumes: {
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (user && user.resumes) {
      initialResumes = user.resumes.map((r) => ({
        id: r.id,
        role: r.role,
        experienceLevel: r.experienceLevel,
        overallScore: r.overallScore,
        atsScore: r.atsScore,
        artifactBlobUrl: r.artifactBlobUrl,
        originalPdfBlobUrl: r.originalPdfBlobUrl,
        status: r.status,
        createdAt: r.createdAt.toISOString(),
        updatedAt: r.updatedAt.toISOString(),
      }));
    }
  }

  return <ResumeWorkspace initialResumes={initialResumes} />;
}
