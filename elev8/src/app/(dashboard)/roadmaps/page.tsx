import type { Metadata } from "next";
import { RoadmapLibrary } from "@/features/roadmaps/components/roadmap-library";

export const metadata: Metadata = {
  title: "Roadmap Library | Elev8",
  description: "Browse and manage your personalized AI learning roadmaps.",
};

export default function RoadmapsPage() {
  return (
    <div className="p-6">
      <RoadmapLibrary />
    </div>
  );
}
