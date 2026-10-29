import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { PageHeaderSkeleton } from "@/components/skeletons";

export default function NewInterviewLoading() {
  return (
    <div aria-busy="true" className="space-y-8 pb-10">
      <PageHeaderSkeleton hasAction={false} hasSection={true} />

      <div className="w-full max-w-3xl mx-auto bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius-lg,16px)] p-6 sm:p-8 shadow-sm space-y-8">
        <div className="text-center space-y-2">
          <Skeleton className="h-8 w-64 mx-auto" />
          <Skeleton className="h-4 w-96 max-w-full mx-auto" />
        </div>

        {/* Step Indicator Skeleton */}
        <div className="flex items-center justify-center gap-6 py-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-4 w-20 hidden sm:block" />
          </div>
          <Skeleton className="h-1 w-12 rounded" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-4 w-24 hidden sm:block" />
          </div>
          <Skeleton className="h-1 w-12 rounded" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-4 w-16 hidden sm:block" />
          </div>
        </div>

        {/* Form fields skeleton */}
        <div className="space-y-6 pt-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-11 w-full rounded-xl" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-11 w-full rounded-xl" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-11 w-full rounded-xl" />
            </div>
          </div>
          <div className="pt-4 flex justify-end">
            <Skeleton className="h-11 w-32 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
