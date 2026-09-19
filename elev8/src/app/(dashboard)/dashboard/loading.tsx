import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { StatsCardSkeleton, ListSkeleton } from "@/components/skeletons";

export default function DashboardLoading() {
  return (
    <div aria-busy="true" className="space-y-10 max-w-7xl mx-auto pb-10">
      {/* 1. Profiling Banner Skeleton */}
      <Skeleton className="h-12 w-full rounded-xl" />

      {/* Hero Welcome Skeleton */}
      <div className="rounded-[var(--card-radius-lg,16px)] border border-dashboard-cardBorder bg-dashboard-card p-8 md:p-10 shadow-sm space-y-4">
        <Skeleton className="h-9 w-64 md:w-96" />
        <Skeleton className="h-5 w-full max-w-lg" />
      </div>

      {/* 2. Career Assessment CTA Skeleton */}
      <div className="rounded-[var(--card-radius-lg,16px)] border border-dashboard-cardBorder bg-dashboard-card p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4 w-full sm:w-auto">
          <Skeleton className="w-12 h-12 rounded-full shrink-0" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-5 w-44" />
            <Skeleton className="h-4 w-64 max-w-full" />
          </div>
        </div>
        <Skeleton className="h-10 w-36 rounded-xl shrink-0" />
      </div>

      {/* Metrics Row Skeleton */}
      <section className="space-y-6">
        <Skeleton className="h-6 w-36" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <StatsCardSkeleton />
          <StatsCardSkeleton />
          <StatsCardSkeleton />
        </div>
      </section>

      {/* 3. Recent Module Activity Skeleton */}
      <section className="space-y-6">
        <Skeleton className="h-6 w-40" />
        <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius-lg,16px)] p-6 shadow-sm">
          <ListSkeleton items={4} />
        </div>
      </section>

      {/* Profile Overview Skeleton */}
      <section className="space-y-6">
        <Skeleton className="h-6 w-48" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-[var(--card-radius-lg,16px)] border border-dashboard-cardBorder bg-dashboard-card p-6 space-y-4">
            <Skeleton className="h-6 w-32" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
          <div className="rounded-[var(--card-radius-lg,16px)] border border-dashboard-cardBorder bg-dashboard-card p-6 space-y-4">
            <Skeleton className="h-6 w-36" />
            <Skeleton className="h-24 w-24 rounded-full mx-auto" />
            <Skeleton className="h-4 w-28 mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
