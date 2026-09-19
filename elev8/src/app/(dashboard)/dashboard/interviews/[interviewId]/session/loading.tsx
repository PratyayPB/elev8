import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function InterviewSessionLoading() {
  return (
    <div aria-busy="true" className="max-w-4xl mx-auto space-y-8 py-6 px-4">
      {/* Session Toolbar Skeleton */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="space-y-1">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-32" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="h-9 w-24 rounded-full" />
          <Skeleton className="h-9 w-20 rounded-xl" />
        </div>
      </div>

      {/* Progress Bar (Question Dots) Skeleton */}
      <div className="flex items-center justify-between gap-2 py-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-2.5 flex-1 rounded-full" />
        ))}
      </div>

      {/* Question Box Skeleton */}
      <div className="rounded-[var(--card-radius-lg,16px)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 space-y-4 shadow-sm">
        <Skeleton className="h-4 w-28 uppercase" />
        <Skeleton className="h-7 w-full max-w-xl" />
        <Skeleton className="h-5 w-3/4" />
      </div>

      {/* Answer Editor Skeleton */}
      <div className="rounded-[var(--card-radius-lg,16px)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-8 w-24 rounded-lg" />
        </div>
        <Skeleton className="h-48 w-full rounded-xl" />
      </div>

      {/* Footer Navigation Buttons Skeleton */}
      <div className="flex items-center justify-between pt-4">
        <Skeleton className="h-10 w-28 rounded-xl" />
        <Skeleton className="h-10 w-32 rounded-xl" />
      </div>
    </div>
  );
}
