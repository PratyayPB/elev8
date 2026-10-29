import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { PageHeaderSkeleton, CardSkeleton } from "@/components/skeletons";

export function RoadmapsWorkspaceSkeleton() {
  return (
    <div aria-busy="true" className="space-y-8 max-w-7xl mx-auto pb-14">
      {/* Page Header Skeleton */}
      <PageHeaderSkeleton hasSection={true} hasAction={true} />

      {/* Tabs Navigation Skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-4">
        <Skeleton className="h-10 w-full sm:w-[320px] rounded-xl" />
        <Skeleton className="h-4 w-60" />
      </div>

      {/* Search & Sort Controls Skeleton */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Skeleton className="h-10 w-full sm:w-80 rounded-xl" />
        <Skeleton className="h-10 w-44 rounded-xl" />
      </div>

      {/* Roadmaps Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}

export default function RoadmapsLoading() {
  return (
    <div className="p-6">
      <RoadmapsWorkspaceSkeleton />
    </div>
  );
}
