import React from "react";
import { getOrCreateDbUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ResumeWorkspace } from "@/features/resume/components/workspace/resume-workspace";
import { ResumeSummary } from "@/features/resume/types/workspace";
import { RecommendedActions } from "@/components/dashboard";

export default async function ResumesPage() {
  const dbUser = await getOrCreateDbUser().catch(() => null);

  let initialResumes: ResumeSummary[] = [];

  if (dbUser) {
    const resumeScores = await prisma.resumeScore.findMany({
      where: { userId: dbUser.id },
      orderBy: { createdAt: "desc" },
      take: 50,
      select: {
        id: true,
        role: true,
        expLevel: true,
        ovrScore: true,
        atsScore: true,
        artifactBlobUrl: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    initialResumes = resumeScores.map((r) => ({
      id: r.id,
      role: r.role,
      experienceLevel: r.expLevel,
      overallScore: r.ovrScore,
      atsScore: r.atsScore,
      artifactBlobUrl: r.artifactBlobUrl,
      originalPdfBlobUrl: null,
      status: r.status,
      createdAt: r.createdAt.toISOString(),
      updatedAt: r.updatedAt.toISOString(),
    }));
  }

  return (
    <div className="space-y-8 pb-12">
      <ResumeWorkspace initialResumes={initialResumes} />
      <div className="container mx-auto px-6 max-w-7xl">
        <RecommendedActions currentModule="resumes" />
      </div>
    </div>
  );
}
