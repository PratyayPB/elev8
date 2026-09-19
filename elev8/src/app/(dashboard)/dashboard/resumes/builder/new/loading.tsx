import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function NewResumeLoading() {
  return (
    <div aria-busy="true" className="max-w-3xl mx-auto space-y-6 pb-10">
      <div className="space-y-2">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-8 w-60" />
        <Skeleton className="h-4 w-full max-w-lg" />
      </div>

      <div className="rounded-[var(--card-radius-lg,16px)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 space-y-6 shadow-sm">
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>
        <div className="pt-4 flex justify-end">
          <Skeleton className="h-10 w-32 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
