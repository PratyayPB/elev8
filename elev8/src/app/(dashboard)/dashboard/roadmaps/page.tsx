import type { Metadata } from "next";
import { Suspense } from "react";
import { RoadmapLibrary } from "@/features/roadmaps/components/roadmap-library";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Roadmap Library | Elev8",
  description: "Browse and manage your personalized AI learning roadmaps.",
};

export default function RoadmapsPage() {
  return (
    <div className="p-6">
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center py-20 text-text-muted">
            <Loader2 className="w-8 h-8 animate-spin text-text-primary mb-3" />
            <p className="text-sm font-sans">Loading roadmap library...</p>
          </div>
        }
      >
        <RoadmapLibrary />
      </Suspense>
    </div>
  );
}
