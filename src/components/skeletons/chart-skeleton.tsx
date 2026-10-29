import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ChartSkeletonProps {
  height?: string;
  className?: string;
  hasLegend?: boolean;
}

export function ChartSkeleton({
  height = "h-72",
  className,
  hasLegend = true,
}: ChartSkeletonProps) {
  return (
    <div
      aria-busy="true"
      className={cn(
        "rounded-[var(--card-radius-lg,16px)] border border-dashboard-cardBorder bg-dashboard-card p-6 shadow-sm space-y-6",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1.5">
          <Skeleton className="h-5 w-36" />
          <Skeleton className="h-3 w-52" />
        </div>
        <Skeleton className="h-8 w-24 rounded-lg" />
      </div>

      <div className={cn("w-full rounded-xl bg-surface-muted/40 flex items-center justify-center p-6", height)}>
        <div className="w-full h-full flex items-end justify-around gap-2 px-4 py-6">
          <Skeleton className="w-8 h-1/3 rounded-t-sm" />
          <Skeleton className="w-8 h-2/3 rounded-t-sm" />
          <Skeleton className="w-8 h-1/2 rounded-t-sm" />
          <Skeleton className="w-8 h-4/5 rounded-t-sm" />
          <Skeleton className="w-8 h-3/5 rounded-t-sm" />
          <Skeleton className="w-8 h-1/2 rounded-t-sm" />
        </div>
      </div>

      {hasLegend && (
        <div className="flex items-center justify-center gap-6 pt-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-3 w-3 rounded-full" />
            <Skeleton className="h-3 w-16" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-3 w-3 rounded-full" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
      )}
    </div>
  );
}
