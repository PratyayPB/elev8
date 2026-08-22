"use client";

import React from "react";
import { Target, Info } from "lucide-react";

interface AssessmentReadinessScoreProps {
  score: number;
  className?: string;
}

export function AssessmentReadinessScore({
  score,
  className = "",
}: AssessmentReadinessScoreProps) {
  const getScoreBand = (val: number) => {
    if (val >= 80) return { label: "High Preparedness", color: "text-emerald-700 bg-emerald-100" };
    if (val >= 60) return { label: "Moderate Readiness", color: "text-amber-700 bg-amber-100" };
    return { label: "Foundational Phase", color: "text-blue-700 bg-blue-100" };
  };

  const band = getScoreBand(score);

  return (
    <div
      className={`rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm relative overflow-hidden ${className}`}
    >
      <div className="space-y-2 relative z-10 max-w-lg">
        <div className="flex items-center gap-2">
          <span className="text-xs font-display font-semibold text-text-secondary uppercase tracking-wider">
            Overall Readiness Signal
          </span>
          <span
            className={`text-[11px] px-2.5 py-0.5 rounded-full font-display font-semibold ${band.color}`}
          >
            {band.label}
          </span>
        </div>
        <h3 className="text-2xl font-display font-bold text-text-primary">
          Career Direction Alignment
        </h3>
        <p className="text-xs font-sans text-text-secondary flex items-start gap-1.5 pt-1">
          <Info className="h-3.5 w-3.5 shrink-0 text-text-muted mt-0.5" />
          <span>
            This score reflects the alignment between your current skills, experience, and target career direction. It serves as an analytical guidance signal.
          </span>
        </p>
      </div>

      <div className="flex items-center gap-6 relative z-10 shrink-0">
        <div className="flex flex-col items-end">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-display font-black text-text-primary tracking-tight">
              {score}
            </span>
            <span className="text-xl font-display font-medium text-text-secondary">
              / 100
            </span>
          </div>
          <span className="text-[11px] font-sans text-text-muted">
            Readiness Index
          </span>
        </div>

        {/* Circular / Progress Indicator */}
        <div className="w-16 h-16 rounded-full bg-surface-muted border-4 border-dashboard-metricHighlight flex items-center justify-center text-text-primary">
          <Target className="h-7 w-7" />
        </div>
      </div>

      <div className="absolute right-0 bottom-0 h-48 w-48 bg-dashboard-metricHighlight/15 rounded-full blur-3xl -mr-16 -mb-16 pointer-events-none" />
    </div>
  );
}
