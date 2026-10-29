import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface LandingSkeletonProps {
  /**
   * If true, renders the floating navigation pill header skeleton.
   * Useful when rendering at root loading where PublicLayout is not yet mounted.
   * Defaults to false.
   */
  includeHeader?: boolean;
  className?: string;
}

export function LandingSkeleton({
  includeHeader = false,
  className,
}: LandingSkeletonProps) {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-label="Loading landing page"
      className={cn(
        "min-h-screen w-full bg-background text-foreground flex flex-col overflow-x-hidden",
        className
      )}
    >
      {/* 1. Floating Pill Navigation Header Skeleton */}
      {includeHeader && (
        <header className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 flex justify-center items-center pointer-events-none">
          <div className="w-full max-w-[700px] h-[52px] bg-white/90 backdrop-blur-md rounded-full px-5 py-2.5 flex items-center justify-between shadow-sm border border-border/40">
            {/* Logo */}
            <div className="flex items-center gap-2 pl-1">
              <Skeleton className="h-6 w-24 rounded-lg" />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8 ml-8">
              <Skeleton className="h-4 w-12 rounded" />
              <Skeleton className="h-4 w-16 rounded" />
              <Skeleton className="h-4 w-14 rounded" />
              <Skeleton className="h-4 w-20 rounded" />
            </div>

            {/* Right Action Button */}
            <div className="flex items-center gap-3">
              <Skeleton className="h-9 w-28 rounded-full" />
            </div>
          </div>
        </header>
      )}

      <main className="flex-grow">
        {/* 2. Hero Section Skeleton */}
        <section className="relative min-h-[calc(100vh-6rem)] pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden flex items-center">
          <div className="max-w-container-max w-full mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column: Headline, Subtitle, CTA buttons */}
              <div className="flex flex-col items-start w-full">
                {/* Headline: "Elevate Your / Career with / Precision." */}
                <div className="space-y-3.5 mb-6 w-full max-w-lg">
                  <Skeleton className="h-10 sm:h-12 md:h-14 lg:h-16 w-11/12 rounded-2xl" />
                  <Skeleton className="h-10 sm:h-12 md:h-14 lg:h-16 w-4/5 rounded-2xl" />
                  <Skeleton className="h-10 sm:h-12 md:h-14 lg:h-16 w-3/5 rounded-2xl" />
                </div>

                {/* Subtitle paragraph */}
                <div className="space-y-2.5 max-w-lg mb-8 w-full">
                  <Skeleton className="h-4 md:h-5 w-full rounded-md" />
                  <Skeleton className="h-4 md:h-5 w-11/12 rounded-md" />
                  <Skeleton className="h-4 md:h-5 w-3/4 rounded-md" />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-row items-center gap-4 w-full sm:w-auto">
                  <Skeleton className="h-11 w-36 rounded-full" />
                  <Skeleton className="h-11 w-32 rounded-full" />
                </div>
              </div>

              {/* Right Column: Overlapping Rotated Card Mockups */}
              <div className="relative w-full aspect-[4/3] md:aspect-square flex items-center justify-center">
                {/* Back Rotated Card */}
                <div className="absolute top-0 -left-4 w-[75%] h-[75%] rounded-3xl overflow-hidden shadow-xl rotate-[3deg] border border-border/40 bg-surface-muted/90 p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-border/30 pb-3">
                    <Skeleton className="h-4 w-28 rounded-md" />
                    <Skeleton className="h-7 w-7 rounded-full" />
                  </div>
                  <div className="space-y-3 py-4">
                    <Skeleton className="h-3.5 w-full rounded" />
                    <Skeleton className="h-3.5 w-4/5 rounded" />
                    <Skeleton className="h-20 w-full rounded-xl" />
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <Skeleton className="h-3 w-16 rounded" />
                    <Skeleton className="h-3 w-20 rounded" />
                  </div>
                </div>

                {/* Front Rotated Card */}
                <div className="absolute bottom-8 -right-4 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border border-white/60 -rotate-[6deg] scale-[0.8] bg-card p-5 flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-xl" />
                    <div className="space-y-1.5 flex-1">
                      <Skeleton className="h-4 w-3/4 rounded" />
                      <Skeleton className="h-3 w-1/2 rounded" />
                    </div>
                  </div>
                  <div className="space-y-2 py-2">
                    <Skeleton className="h-3 w-full rounded" />
                    <Skeleton className="h-3 w-5/6 rounded" />
                  </div>
                  <Skeleton className="h-8 w-full rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Dashboard Preview Skeleton */}
        <section className="relative pt-4 pb-20 md:pt-16 md:pb-28 overflow-hidden">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 flex justify-center">
            <div className="relative w-full max-w-5xl rounded-xl md:rounded-2xl overflow-hidden border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-surface-muted aspect-[16/10.6] p-6 sm:p-8 flex flex-col justify-between">
              {/* Header inside preview */}
              <div className="flex items-center justify-between border-b border-border/40 pb-4">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-8 w-8 rounded-lg" />
                  <Skeleton className="h-5 w-36 rounded-md" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-8 w-24 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </div>

              {/* 3 Cards inside preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1 pt-6">
                <div className="rounded-xl border border-border/40 bg-card/60 p-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24 rounded" />
                    <Skeleton className="h-8 w-16 rounded-md" />
                  </div>
                  <Skeleton className="h-2 w-full rounded" />
                </div>
                <div className="rounded-xl border border-border/40 bg-card/60 p-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-28 rounded" />
                    <Skeleton className="h-8 w-20 rounded-md" />
                  </div>
                  <Skeleton className="h-2 w-full rounded" />
                </div>
                <div className="rounded-xl border border-border/40 bg-card/60 p-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-20 rounded" />
                    <Skeleton className="h-8 w-14 rounded-md" />
                  </div>
                  <Skeleton className="h-2 w-full rounded" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
