import React from "react";
import { cn } from "@/lib/utils";

interface LoadingSkeletonProps {
  variant?: "card" | "metric" | "list-item" | "text" | "avatar";
  className?: string;
}

export function LoadingSkeleton({
  variant = "text",
  className,
}: LoadingSkeletonProps) {
  if (variant === "card") {
    return (
      <div className={cn("rounded-[var(--card-radius)] border border-border-subtle bg-dashboard-card p-6", className)}>
        <div className="h-6 w-1/3 bg-surface-muted rounded animate-pulse mb-4" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-surface-muted rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-surface-muted rounded animate-pulse" />
          <div className="h-4 w-4/6 bg-surface-muted rounded animate-pulse" />
        </div>
        <div className="mt-6 h-10 w-28 bg-surface-muted rounded-xl animate-pulse" />
      </div>
    );
  }

  if (variant === "metric") {
    return (
      <div className={cn("rounded-[var(--card-radius)] border border-border-subtle bg-dashboard-card p-6", className)}>
        <div className="h-4 w-24 bg-surface-muted rounded animate-pulse mb-4" />
        <div className="h-10 w-16 bg-surface-muted rounded animate-pulse mb-2" />
        <div className="h-4 w-32 bg-surface-muted rounded animate-pulse" />
      </div>
    );
  }

  if (variant === "list-item") {
    return (
      <div className={cn("flex items-center gap-4 p-4 border border-border-subtle rounded-[var(--card-radius)] bg-dashboard-card", className)}>
        <div className="h-10 w-10 bg-surface-muted rounded-lg animate-pulse shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-5 w-1/3 bg-surface-muted rounded animate-pulse" />
          <div className="h-4 w-1/2 bg-surface-muted rounded animate-pulse" />
        </div>
      </div>
    );
  }
  
  if (variant === "avatar") {
    return (
      <div className={cn("h-10 w-10 bg-surface-muted rounded-full animate-pulse", className)} />
    );
  }

  // default text
  return (
    <div className={cn("h-4 w-full bg-surface-muted rounded animate-pulse", className)} />
  );
}
