import type { Metadata } from "next";
import { Suspense } from "react";
import { RoadmapLibrary } from "@/features/roadmaps/components/roadmap-library";
import { RoadmapsWorkspaceSkeleton } from "./loading";

export const metadata: Metadata = {
  title: "Roadmap Library | Elev8",
  description: "Browse and manage your personalized AI learning roadmaps.",
};

export default function RoadmapsPage() {
  return (
    <div className="p-6">
      <Suspense fallback={<RoadmapsWorkspaceSkeleton />}>
        <RoadmapLibrary />
      </Suspense>
    </div>
  );
}
