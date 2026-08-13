import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getOrCreateDbUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { RoadmapViewerService } from "@/services/roadmaps/roadmap-viewer.service";
import { RoadmapViewer } from "@/features/roadmaps/components/roadmap-viewer";

interface RoadmapViewerPageProps {
  params: Promise<{
    roadmapId: string;
  }>;
}

export async function generateMetadata({ params }: RoadmapViewerPageProps): Promise<Metadata> {
  const { roadmapId } = await params;
  const roadmap = await prisma.roadmap.findUnique({
    where: { id: roadmapId },
    select: { title: true },
  });

  return {
    title: roadmap ? `${roadmap.title} | Elev8 Roadmap` : "Roadmap Viewer | Elev8",
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

  const res = await RoadmapViewerService.getRoadmapForViewer(roadmapId, user.id);

  if (!res) {
    notFound();
  }

  return (
    <div className="p-6">
      <RoadmapViewer
        artifact={res.artifact}
        isLoading={res.roadmap.status === "IN_PROGRESS"}
        jobStatus={res.job?.step || "Generating..."}
        jobProgress={res.job?.progress || 0}
      />
    </div>
  );
}
