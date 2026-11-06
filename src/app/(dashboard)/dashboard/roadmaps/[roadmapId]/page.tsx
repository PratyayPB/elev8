import { cache } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getOrCreateDbUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { RoadmapViewerService } from "@/services/roadmaps/roadmap-viewer.service";
import { RoadmapViewer } from "@/features/roadmaps/components/roadmap-viewer";
import { RealtimeTokenService } from "@/services/jobs/realtime-token.service";

interface RoadmapViewerPageProps {
  params: Promise<{
    roadmapId: string;
  }>;
}

const getCachedRoadmapTitle = cache(async (roadmapId: string) => {
  const roadmap =
    (await prisma.roadmap.findUnique({
      where: { id: roadmapId },
      select: { title: true },
    })) ||
    (await prisma.globalRoadmap.findUnique({
      where: { id: roadmapId },
      select: { title: true },
    }));
  return roadmap?.title ?? null;
});

const getCachedRoadmapForViewer = cache(async (roadmapId: string, userId: string) => {
  return await RoadmapViewerService.getRoadmapForViewer(roadmapId, userId);
});

export async function generateMetadata({ params }: RoadmapViewerPageProps): Promise<Metadata> {
  const { roadmapId } = await params;
  const title = await getCachedRoadmapTitle(roadmapId);

  return {
    title: title ? `${title} | Elev8 Roadmap` : "Roadmap Viewer | Elev8",
  };
}

export default async function RoadmapViewerPage({ params }: RoadmapViewerPageProps) {
  const { roadmapId } = await params;
  
  let user;
  try {
    user = await getOrCreateDbUser();
  } catch {
    notFound();
  }

  const res = await getCachedRoadmapForViewer(roadmapId, user.id);

  if (!res) {
    notFound();
  }

  const isJobFailed = res.job?.status === "FAILED";
  const isJobRunning = res.roadmap.status === "IN_PROGRESS" && !isJobFailed;
  const displayError = isJobFailed
    ? res.job?.error || res.error || "The AI model encountered an error while generating your roadmap. Please try again."
    : res.error;

  let publicAccessToken: string | undefined;
  if (isJobRunning && res.job?.triggerRunId) {
    try {
      publicAccessToken = await RealtimeTokenService.mintRunToken({
        triggerRunId: res.job.triggerRunId,
      });
    } catch (err) {
      console.warn("[RoadmapViewerPage] Failed to mint public token for run:", err);
    }
  }

  return (
    <div className="p-6">
      <RoadmapViewer
        roadmapId={roadmapId}
        artifact={res.artifact}
        isLoading={isJobRunning}
        jobProgress={res.job?.progress || 0}
        jobState={res.job?.status ?? null}
        error={displayError}
        canRegenerate={Boolean(res.roadmap.canRegenerate)}
        triggerRunId={res.job?.triggerRunId || undefined}
        publicAccessToken={publicAccessToken}
      />
    </div>
  );
}
