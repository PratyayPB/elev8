import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { PageHeaderSkeleton } from "@/components/skeletons";

export default function ProfileLoading() {
  return (
    <div aria-busy="true" className="max-w-5xl mx-auto space-y-8 pb-14">
      {/* Header skeleton */}
      <PageHeaderSkeleton hasSection={true} hasAction={true} />

      {/* Completeness card skeleton */}
      <div className="rounded-[var(--card-radius-lg,16px)] border border-dashboard-cardBorder bg-dashboard-card p-6 space-y-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="space-y-1.5">
            <Skeleton className="h-6 w-44" />
            <Skeleton className="h-4 w-64" />
          </div>
          <Skeleton className="h-8 w-20 rounded-full" />
        </div>
        <Skeleton className="h-3 w-full rounded-full" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="p-4 rounded-xl bg-surface-muted/50 border border-border-subtle space-y-2">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-5 w-28" />
            </div>
          ))}
        </div>
      </div>

      {/* Form sections skeleton */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-7 w-48" />
        </div>

        <div className="rounded-[var(--card-radius-lg,16px)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 space-y-8 shadow-sm">
          {/* Section 1: Basic Info */}
          <div className="space-y-4">
            <Skeleton className="h-5 w-32" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-full rounded-xl" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-full rounded-xl" />
              </div>
            </div>
          </div>

          {/* Section 2: Career details */}
          <div className="space-y-4 pt-4 border-t border-border-subtle">
            <Skeleton className="h-5 w-36" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-10 w-full rounded-xl" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-10 w-full rounded-xl" />
              </div>
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-24 w-full rounded-xl" />
            </div>
          </div>

          {/* Submit button */}
          <div className="pt-4 flex justify-end">
            <Skeleton className="h-11 w-36 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
