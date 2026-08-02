"use client";

import React from "react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps?: number;
}

export function ProgressBar({ currentStep, totalSteps = 8 }: ProgressBarProps) {
  // Step 1 is welcome (0%), Step 9 is complete (100%), Step 2-8 is 14%-86%
  const effectiveStep = Math.max(0, currentStep - 1);
  const percentage = Math.min(100, Math.round((effectiveStep / totalSteps) * 100));

  return (
    <div className="w-full space-y-1">
      <div className="flex justify-between items-center text-xs text-text-muted">
        <span>Step {currentStep} of 9</span>
        <span className="font-mono">{percentage}%</span>
      </div>
      <div className="w-full h-1.5 bg-surface-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-accent-cyan transition-all duration-300 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
