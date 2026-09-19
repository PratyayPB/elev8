import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface StatsCardSkeletonProps {
  className?: string;
}

export function StatsCardSkeleton({ className }: StatsCardSkeletonProps) {
  return (
    <div
      aria-busy="true"
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-card dark:bg-[#1F1F1F] p-6 shadow-sm",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <Skeleton className="h-3 w-28 uppercase" />
        <Skeleton className="h-5 w-5 rounded-md" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-9 w-20" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  );
}
