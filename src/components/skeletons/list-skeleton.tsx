import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ListSkeletonProps {
  items?: number;
  className?: string;
  hasBadge?: boolean;
}

export function ListSkeleton({
  items = 4,
  className,
  hasBadge = false,
}: ListSkeletonProps) {
  return (
    <div aria-busy="true" className={cn("space-y-3", className)}>
      {Array.from({ length: items }).map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 bg-surface-muted/50 rounded-xl border border-border-subtle"
        >
          <div className="flex items-center gap-3.5">
            <Skeleton className="h-9 w-9 rounded-lg shrink-0" />
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-40 sm:w-56" />
              <Skeleton className="h-3 w-24 sm:w-32" />
            </div>
          </div>
          {hasBadge && <Skeleton className="h-6 w-16 rounded-full" />}
        </div>
      ))}
    </div>
  );
}
