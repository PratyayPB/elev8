import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function ResumeEditorLoading() {
  return (
    <div aria-busy="true" className="flex flex-col min-h-full bg-surface pb-12">
      {/* Editor Header Skeleton */}
      <div className="border-b border-border bg-dashboard-card px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-8 rounded-lg" />
          <div className="space-y-1">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-3 w-28" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="h-9 w-32 rounded-xl" />
          <Skeleton className="h-9 w-28 rounded-xl" />
          <Skeleton className="h-9 w-28 rounded-xl" />
        </div>
      </div>

      {/* Editor Body Skeleton (Split Left Form & Right Preview) */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-6 py-6 flex flex-col xl:flex-row gap-6">
        {/* Left Side: Form */}
        <div className="w-full xl:w-1/2 space-y-6">
          {/* Navigation Pill Skeleton */}
          <Skeleton className="h-12 w-full rounded-xl" />

          {/* Active Section Form Box */}
          <div className="rounded-[var(--card-radius-lg,16px)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 space-y-6 shadow-sm">
            <Skeleton className="h-6 w-44" />
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
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-24 w-full rounded-xl" />
            </div>
          </div>
        </div>

        {/* Right Side: Live Preview Panel Skeleton */}
        <div className="hidden xl:block w-1/2">
          <div className="h-[750px] rounded-[var(--card-radius-lg,16px)] border border-dashboard-cardBorder bg-dashboard-card p-8 shadow-sm flex flex-col space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-border/40">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-8 w-24 rounded-lg" />
            </div>
            <div className="flex-1 rounded-xl bg-surface-muted/50 p-6 space-y-4">
              <Skeleton className="h-8 w-1/2 mx-auto" />
              <Skeleton className="h-4 w-3/4 mx-auto" />
              <div className="pt-6 space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
