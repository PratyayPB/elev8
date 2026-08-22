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
        resumeScores: {
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (user && user.resumeScores) {
      initialResumes = user.resumeScores.map((r) => ({
        id: r.id,
        role: r.role,
        experienceLevel: r.expLevel,
        overallScore: r.ovrScore,
        atsScore: r.atsScore,
        artifactBlobUrl: r.artifactBlobUrl,
        originalPdfBlobUrl: null,
        status: r.status,
        createdAt: r.createdAt.toISOString(),
        updatedAt: r.createdAt.toISOString(),
      }));
    }
  }

  return <ResumeWorkspace initialResumes={initialResumes} />;
}
