import * as React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: "shimmer" | "pulse" | "none";
}

function Skeleton({
  className,
  animation = "shimmer",
  ...props
}: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "relative overflow-hidden rounded-md bg-muted",
        animation === "shimmer" && [
          "after:absolute after:inset-0 after:-translate-x-full",
          "motion-safe:after:animate-shimmer",
          "after:bg-gradient-to-r after:from-transparent after:via-white/60 dark:after:via-white/10 after:to-transparent",
          "motion-reduce:after:hidden",
        ],
        animation === "pulse" && "motion-safe:animate-pulse",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
export type { SkeletonProps };

