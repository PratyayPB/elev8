"use client";

import React from "react";
import { Compass, ArrowRight } from "lucide-react";

interface AssessmentFocusAreasProps {
  focusAreas: string[];
  className?: string;
}

export function AssessmentFocusAreas({
  focusAreas,
  className = "",
}: AssessmentFocusAreasProps) {
  return (
    <div
      className={`rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 space-y-4 shadow-sm ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <div className="h-8 w-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
          <Compass className="h-4 w-4" />
        </div>
        <div>
          <h3 className="font-display font-bold text-base text-text-primary">
            Suggested Focus Areas
          </h3>
          <p className="text-xs font-sans text-text-secondary">
            Strategic learning domains recommended to accelerate your progress
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
        {focusAreas.map((area, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-4 rounded-xl border border-border-subtle bg-surface-subtle"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-text-primary text-white dark:text-brand-primary-900 font-display font-bold text-xs shrink-0">
              {index + 1}
            </span>
            <span className="text-xs font-display font-semibold text-text-primary">
              {area}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
