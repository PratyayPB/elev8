import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ChartSkeleton } from "@/components/skeletons";

export default function ResumeDetailLoading() {
  return (
    <div aria-busy="true" className="min-h-screen bg-background text-text-primary py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Navigation Tab Bar Skeleton */}
        <div className="bg-dashboard-card p-2 rounded-3xl border border-dashboard-cardBorder shadow-sm flex items-center gap-2 overflow-x-auto">
          {Array.from({ length: 7 }).map((_, i) => (
            <Skeleton key={i} className="h-9 w-24 rounded-2xl shrink-0" />
          ))}
        </div>

        {/* Overview Header Skeleton */}
        <div className="rounded-[var(--card-radius-lg,16px)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <Skeleton className="h-4 w-32 rounded-full" />
            <Skeleton className="h-8 w-64 md:w-80" />
            <Skeleton className="h-4 w-48" />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-16 w-24 rounded-2xl" />
            <Skeleton className="h-16 w-24 rounded-2xl" />
          </div>
        </div>

        {/* Charts 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartSkeleton height="h-72" />
          <ChartSkeleton height="h-72" />
        </div>
      </div>
    </div>
  );
}
