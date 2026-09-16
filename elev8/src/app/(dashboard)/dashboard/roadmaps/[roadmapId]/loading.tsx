import React from "react";
import { LoadingOverlay } from "@/features/roadmaps/components/roadmap-viewer/LoadingOverlay";

export default function RoadmapDetailLoading() {
  return <LoadingOverlay progress={15} />;
}
