import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { PageHeaderSkeleton, StatsCardSkeleton, CardSkeleton } from "@/components/skeletons";

export function InterviewsWorkspaceSkeleton() {
  return (
    <div aria-busy="true" className="space-y-8 max-w-7xl mx-auto pb-14">
      {/* Page Header Skeleton */}
      <PageHeaderSkeleton hasSection={true} hasAction={true} />

      {/* Performance Overview (Stats Cards) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCardSkeleton />
        <StatsCardSkeleton />
        <StatsCardSkeleton />
        <StatsCardSkeleton />
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-4">
        <Skeleton className="h-10 w-full sm:w-[360px] rounded-xl" />
        <Skeleton className="h-4 w-64" />
      </div>

      {/* Filters and Search Bar Skeleton */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Skeleton className="h-10 w-full sm:w-72 rounded-xl" />
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Skeleton className="h-10 w-32 rounded-xl" />
          <Skeleton className="h-10 w-32 rounded-xl" />
        </div>
      </div>

      {/* Cards Grid Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-48" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </div>
  );
}

export default function InterviewsLoading() {
  return <InterviewsWorkspaceSkeleton />;
}
