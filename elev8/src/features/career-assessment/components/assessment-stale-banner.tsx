"use client";

import React from "react";
import { RefreshCw, AlertTriangle } from "lucide-react";

interface AssessmentStaleBannerProps {
  assessmentVersion: number;
  currentProfileVersion: number;
  onRetake: () => void;
  isLoading: boolean;
  className?: string;
}

export function AssessmentStaleBanner({
  assessmentVersion,
  currentProfileVersion,
  onRetake,
  isLoading,
  className = "",
}: AssessmentStaleBannerProps) {
  return (
    <div
      className={`p-5 rounded-[var(--card-radius)] border border-amber-300/80 bg-amber-50/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="h-9 w-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
          <AlertTriangle className="h-4 w-4" />
        </div>
        <div>
          <h4 className="font-display font-semibold text-amber-950 text-sm">
            Profile Updated Since Last Assessment
          </h4>
          <p className="text-xs font-sans text-amber-800 mt-0.5">
            This snapshot was generated for Profile Version {assessmentVersion}, but your active profile is Version {currentProfileVersion}. Retake your assessment to refresh your signals.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onRetake}
        disabled={isLoading}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-900 text-white font-display font-semibold text-xs transition-all hover:bg-amber-950 disabled:opacity-50 shrink-0 self-end sm:self-center"
      >
        <RefreshCw className={`h-3.5 w-3.5 ${isLoading ? "animate-spin" : ""}`} />
        {isLoading ? "Generating..." : "Retake Assessment"}
      </button>
    </div>
  );
}
