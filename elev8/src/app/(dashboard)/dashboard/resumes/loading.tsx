import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { PageHeaderSkeleton, StatsCardSkeleton, CardSkeleton } from "@/components/skeletons";

export default function ResumesLoading() {
  return (
    <div aria-busy="true" className="container mx-auto p-6 max-w-7xl space-y-8">
      {/* Header skeleton */}
      <PageHeaderSkeleton hasAction={false} hasSection={false} />

      {/* Quick Action Upload Area Skeleton */}
      <div className="rounded-[var(--card-radius-lg,16px)] border border-dashboard-cardBorder bg-dashboard-card p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-2">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-4 w-72" />
        </div>
        <Skeleton className="h-10 w-36 rounded-xl shrink-0" />
      </div>

      {/* Performance Overview (Metric Cards) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCardSkeleton />
        <StatsCardSkeleton />
        <StatsCardSkeleton />
        <StatsCardSkeleton />
      </div>

      {/* Search & Filter Bar */}
      <div className="rounded-xl border border-dashboard-cardBorder bg-dashboard-card p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Skeleton className="h-10 w-full sm:w-72 rounded-xl" />
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Skeleton className="h-10 w-32 rounded-xl" />
            <Skeleton className="h-10 w-32 rounded-xl" />
          </div>
        </div>
      </div>

      {/* Resumes Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}
