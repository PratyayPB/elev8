import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { CardSkeleton } from "@/components/skeletons";

export default function SettingsLoading() {
  return (
    <div aria-busy="true" className="max-w-4xl mx-auto space-y-6 pb-16 px-4 sm:px-6 pt-2">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-40 rounded-lg" />
        <Skeleton className="h-4 w-96 max-w-full rounded" />
      </div>

      {/* Settings Sections Skeletons */}
      <div className="space-y-6">
        {/* 1. Account */}
        <div className="rounded-xl border border-border/80 bg-card p-6 space-y-4">
          <div className="space-y-1.5">
            <Skeleton className="h-6 w-32 rounded" />
            <Skeleton className="h-4 w-72 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <Skeleton className="h-20 rounded-xl" />
            <Skeleton className="h-20 rounded-xl" />
            <Skeleton className="h-20 rounded-xl" />
          </div>
        </div>

        {/* 2. AI Preferences */}
        <div className="rounded-xl border border-border/80 bg-card p-6 space-y-4">
          <div className="space-y-1.5">
            <Skeleton className="h-6 w-36 rounded" />
            <Skeleton className="h-4 w-80 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <Skeleton className="h-28 rounded-xl" />
            <Skeleton className="h-28 rounded-xl" />
            <Skeleton className="h-28 rounded-xl" />
          </div>
        </div>

        {/* 3. Notifications */}
        <CardSkeleton className="p-6" lines={4} hasHeader hasFooter={false} />

        {/* 4. Security */}
        <CardSkeleton className="p-6" lines={2} hasHeader hasFooter={false} />

        {/* 5. Billing */}
        <CardSkeleton className="p-6" lines={2} hasHeader hasFooter={false} />

        {/* 6. Danger Zone */}
        <div className="rounded-xl border border-destructive/20 bg-destructive/[0.02] p-6 space-y-4">
          <div className="space-y-1.5">
            <Skeleton className="h-6 w-36 rounded bg-destructive/20" />
            <Skeleton className="h-4 w-80 rounded" />
          </div>
          <Skeleton className="h-16 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
