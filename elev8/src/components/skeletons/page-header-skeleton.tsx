import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface PageHeaderSkeletonProps {
  hasAction?: boolean;
  hasDescription?: boolean;
  hasSection?: boolean;
  className?: string;
}

export function PageHeaderSkeleton({
  hasAction = true,
  hasDescription = true,
  hasSection = false,
  className,
}: PageHeaderSkeletonProps) {
  return (
    <div
      aria-busy="true"
      className={cn(
        "flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8",
        className
      )}
    >
      <div className="flex-1 space-y-3">
        {hasSection && <Skeleton className="h-6 w-24 rounded-full" />}
        <Skeleton className="h-9 w-64 md:w-80" />
        {hasDescription && <Skeleton className="h-4 w-full max-w-md" />}
      </div>
      {hasAction && (
        <div className="flex-shrink-0 pt-1">
          <Skeleton className="h-10 w-32 rounded-xl" />
        </div>
      )}
    </div>
  );
}
