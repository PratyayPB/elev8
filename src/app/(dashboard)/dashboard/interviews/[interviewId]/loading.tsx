import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ChartSkeleton } from "@/components/skeletons";

export default function InterviewReportLoading() {
  return (
    <div aria-busy="true" className="space-y-8 max-w-7xl mx-auto pb-14">
      {/* 1. Overview Card Skeleton */}
      <div className="rounded-[var(--card-radius-lg,16px)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3">
          <Skeleton className="h-4 w-28 rounded-full" />
          <Skeleton className="h-8 w-64 md:w-80" />
          <Skeleton className="h-4 w-48" />
        </div>
        <Skeleton className="h-16 w-36 rounded-2xl shrink-0" />
      </div>

      {/* 2. Core Score Cards (6-col grid) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-dashboard-cardBorder bg-dashboard-card p-4 space-y-2 shadow-sm text-center"
          >
            <Skeleton className="h-3 w-16 mx-auto" />
            <Skeleton className="h-8 w-12 mx-auto" />
          </div>
        ))}
      </div>

      {/* 3. Visual Charts (2-col grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartSkeleton height="h-72" />
        <ChartSkeleton height="h-72" />
      </div>

      {/* 4. Pacing Comparison Chart Skeleton */}
      <ChartSkeleton height="h-64" />
    </div>
  );
}
