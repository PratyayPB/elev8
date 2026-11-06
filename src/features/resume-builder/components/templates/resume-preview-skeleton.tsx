import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

export function ResumePreviewSkeleton() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading resume template preview"
      className="w-full min-h-[500px] bg-white dark:bg-zinc-950 shadow-xl rounded-sm p-8 sm:p-12 flex flex-col space-y-6 relative overflow-hidden"
    >
      {/* Header Info */}
      <div className="space-y-2.5 text-center">
        <Skeleton className="h-7 w-56 mx-auto rounded" />
        <Skeleton className="h-3 w-80 mx-auto rounded" />
        <Skeleton className="h-3 w-64 mx-auto rounded" />
      </div>

      {/* Section 1 */}
      <div className="space-y-3 pt-4">
        <Skeleton className="h-4 w-28 rounded border-b pb-1" />
        <Skeleton className="h-3.5 w-full rounded" />
        <Skeleton className="h-3.5 w-11/12 rounded" />
        <Skeleton className="h-3.5 w-4/5 rounded" />
      </div>

      {/* Section 2 */}
      <div className="space-y-3 pt-2">
        <Skeleton className="h-4 w-32 rounded border-b pb-1" />
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Skeleton className="h-3.5 w-48 rounded" />
            <Skeleton className="h-3 w-24 rounded" />
          </div>
          <Skeleton className="h-3 w-full rounded" />
          <Skeleton className="h-3 w-5/6 rounded" />
        </div>
      </div>

      {/* Centered subtle loader */}
      <div className="absolute inset-0 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-[1px] flex flex-col items-center justify-center gap-2 pointer-events-none">
        <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
        <span className="text-xs font-display font-medium text-muted-foreground">
          Rendering Template Preview...
        </span>
      </div>
    </div>
  );
}
