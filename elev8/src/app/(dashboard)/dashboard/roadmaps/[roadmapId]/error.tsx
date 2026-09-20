"use client";

import React from "react";
import { HttpErrorView } from "@/components/errors";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RoadmapViewerError({ error, reset }: ErrorProps) {
  return (
    <HttpErrorView
      error={error}
      reset={reset}
      fallbackRoute="/dashboard/roadmaps"
      logPrefix="[RoadmapViewerError]"
    />
  );
}
