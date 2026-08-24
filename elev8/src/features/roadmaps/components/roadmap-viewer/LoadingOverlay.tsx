"use client";

import React from "react";
import { CheckCircle2, Loader2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

export const ROADMAP_STAGES = [
  "Analyzing your career goals",
  "Building skill requirements",
  "Generating roadmap",
  "Preparing your roadmap",
] as const;

export function resolveRoadmapStage(progress: number): number {
  if (progress >= 80) return 3;
  if (progress >= 50) return 2;
  if (progress >= 25) return 1;
  return 0;
}

export interface LoadingOverlayProps {
  status?: string;
  progress?: number;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ progress = 0 }) => {
  const currentStageIndex = resolveRoadmapStage(progress);

  return (
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius-lg)] p-8 max-w-md w-full shadow-xl space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface-muted text-text-primary border border-border-subtle">
            <Loader2 className="w-6 h-6 animate-spin text-text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-text-primary">
              Crafting Your Custom Roadmap
            </h3>
            <p className="text-xs font-sans text-text-secondary mt-1">
              Our AI is personalizing your learning pathway
            </p>
          </div>
        </div>

        {/* Stage list */}
        <div className="space-y-3 text-left pt-2">
          {ROADMAP_STAGES.map((stage, idx) => {
            const isCompleted = idx < currentStageIndex;
            const isActive = idx === currentStageIndex;
            const isPending = idx > currentStageIndex;

            return (
              <div
                key={stage}
                className={cn(
                  "flex items-center gap-3 p-2.5 rounded-lg border transition-all duration-300",
                  isActive && "bg-surface-muted/80 border-border-subtle shadow-xs",
                  isCompleted && "bg-transparent border-transparent opacity-80",
                  isPending && "bg-transparent border-transparent opacity-40"
                )}
              >
                <div className="shrink-0 flex items-center justify-center">
                  {isCompleted && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  )}
                  {isActive && (
                    <Loader2 className="w-4 h-4 animate-spin text-text-primary" />
                  )}
                  {isPending && (
                    <Circle className="w-4 h-4 text-text-muted" />
                  )}
                </div>
                <span
                  className={cn(
                    "text-sm font-sans",
                    isActive && "font-semibold text-text-primary",
                    isCompleted && "text-text-secondary",
                    isPending && "text-text-muted"
                  )}
                >
                  {stage}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
