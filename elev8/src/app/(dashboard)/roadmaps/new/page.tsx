import type { Metadata } from "next";
import { RoadmapWizard } from "@/features/roadmaps";

export const metadata: Metadata = {
  title: "New Roadmap | Elev8",
  description: "Configure your roadmap request parameters to generate an AI career roadmap.",
};

export default function NewRoadmapPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <RoadmapWizard />
    </div>
  );
}
