"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface AssessmentNarrativeProps {
  narrative: string;
  className?: string;
}

export function AssessmentNarrative({
  narrative,
  className = "",
}: AssessmentNarrativeProps) {
  return (
    <div
      className={`rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 space-y-4 shadow-sm ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <div className="h-8 w-8 rounded-lg bg-dashboard-metricHighlight/20 text-black flex items-center justify-center">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <h3 className="font-display font-bold text-base text-text-primary">
            Executive Career Synthesis
          </h3>
          <p className="text-xs font-sans text-text-secondary">
            AI-driven contextual analysis of your career trajectory
          </p>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-surface-subtle border border-border-subtle/80">
        <p className="text-sm font-sans text-text-primary leading-relaxed whitespace-pre-line">
          {narrative}
        </p>
      </div>
    </div>
  );
}
