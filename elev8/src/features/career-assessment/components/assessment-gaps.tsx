"use client";

import React from "react";
import { AlertCircle, TrendingUp } from "lucide-react";

interface AssessmentGapsProps {
  gaps: string[];
  className?: string;
}

export function AssessmentGaps({
  gaps,
  className = "",
}: AssessmentGapsProps) {
  return (
    <div
      className={`rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 space-y-4 shadow-sm ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <div className="h-8 w-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
          <TrendingUp className="h-4 w-4" />
        </div>
        <div>
          <h3 className="font-display font-bold text-base text-text-primary">
            Priority Growth Opportunities
          </h3>
          <p className="text-xs font-sans text-text-secondary">
            Constructive development areas to elevate your career profile
          </p>
        </div>
      </div>

      <ul className="space-y-3 pt-2">
        {gaps.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-subtle border border-border-subtle/80"
          >
            <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <span className="text-xs font-sans text-text-primary font-medium leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
