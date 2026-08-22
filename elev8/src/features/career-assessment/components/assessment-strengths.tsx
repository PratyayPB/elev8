"use client";

import React from "react";
import { CheckCircle2, Award } from "lucide-react";

interface AssessmentStrengthsProps {
  strengths: string[];
  className?: string;
}

export function AssessmentStrengths({
  strengths,
  className = "",
}: AssessmentStrengthsProps) {
  return (
    <div
      className={`rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 space-y-4 shadow-sm ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
          <Award className="h-4 w-4" />
        </div>
        <div>
          <h3 className="font-display font-bold text-base text-text-primary">
            Key Career Strengths
          </h3>
          <p className="text-xs font-sans text-text-secondary">
            Verified proficiencies and foundational advantages in your profile
          </p>
        </div>
      </div>

      <ul className="space-y-3 pt-2">
        {strengths.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-subtle border border-border-subtle/80"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <span className="text-xs font-sans text-text-primary font-medium leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
