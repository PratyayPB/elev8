import type { Metadata } from "next";
import { Suspense } from "react";
import { RoadmapLibrary } from "@/features/roadmaps/components/roadmap-library";
import { RoadmapsWorkspaceSkeleton } from "./loading";
import { RecommendedActions } from "@/components/dashboard";
import { fetchUserRoadmaps } from "@/features/roadmaps/actions/roadmap-actions";

export const metadata: Metadata = {
  title: "Roadmap Library | Elev8",
  description: "Browse and manage your personalized AI learning roadmaps.",
};

interface RoadmapsPageProps {
  searchParams?: Promise<{
    tab?: string;
  }>;
}

export default async function RoadmapsPage({ searchParams }: RoadmapsPageProps) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const section = resolvedParams?.tab === "global" ? "global" : "mine";

  // Pre-fetch initial roadmaps on server to eliminate client loading spinner waterfall
  let initialRoadmaps = undefined;
  let initialPagination = undefined;

  try {
    const res = await fetchUserRoadmaps({
      section,
      page: 1,
      limit: 9,
      sort: "newest",
    });
    if (res.success && res.data) {
      initialRoadmaps = res.data.roadmaps;
      initialPagination = res.data.pagination;
    }
  } catch (err) {
    console.warn("[RoadmapsPage] Server prefetch failed, will fallback to client fetch:", err);
  }

  return (
    <div className="p-6 space-y-8 pb-12">
      <Suspense fallback={<RoadmapsWorkspaceSkeleton />}>
        <RoadmapLibrary
          initialRoadmaps={initialRoadmaps}
          initialPagination={initialPagination}
        />
      </Suspense>
      <RecommendedActions currentModule="roadmaps" />
    </div>
  );
}
