"use client";

import React from "react";
import { ProfileData } from "@/features/profile/types";
import { calculateProfileCompleteness } from "@/features/profile/services/profile-completeness.service";
import { Sparkles, CheckCircle2 } from "lucide-react";

interface ProfileProgressProps {
  profile: ProfileData | null;
  showDetails?: boolean;
}

export function ProfileProgress({
  profile,
  showDetails = true,
}: ProfileProgressProps) {
  const { score, state, missingFields } = calculateProfileCompleteness(profile);

  if (!profile) {
    return (
      <div className="w-full bg-dashboard-card p-5 rounded-[var(--card-radius)] border border-dashboard-cardBorder space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-display font-semibold text-text-secondary uppercase tracking-wider">
              Profile Setup
            </span>
            <h4 className="text-sm font-display font-medium text-text-primary">
              Not Started
            </h4>
          </div>
          <span className="text-sm font-display font-bold text-text-secondary">
            0%
          </span>
        </div>
        <div className="w-full h-2 bg-surface-muted rounded-full overflow-hidden">
          <div className="h-full bg-border-subtle w-0" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-dashboard-card p-5 rounded-[var(--card-radius)] border border-dashboard-cardBorder space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-display font-semibold text-text-secondary uppercase tracking-wider">
            Profile Status
          </span>
          <h4 className="text-sm font-display font-medium text-text-primary flex items-center gap-1.5 mt-0.5">
            <Sparkles className="h-3.5 w-3.5 text-dashboard-metricHighlight" />
            {state === "COMPLETED" ? "Profile Complete" : `Version ${profile.profileVersion} Active`}
          </h4>
        </div>
        <span className="text-base font-display font-bold text-text-primary">
          {score}%
        </span>
      </div>

      <div className="w-full h-2 bg-surface-muted rounded-full overflow-hidden border border-border-subtle">
        <div
          className={`h-full transition-all duration-500 rounded-full ${
            state === "COMPLETED"
              ? "bg-emerald-500"
              : "bg-dashboard-metricHighlight"
          }`}
          style={{ width: `${score}%` }}
        />
      </div>

      {showDetails && (
        <div className="text-xs font-sans text-text-secondary pt-1 flex items-center justify-between">
          {missingFields.length > 0 ? (
            <span className="text-text-muted">
              Next: Add {missingFields[0].label} (+{missingFields[0].weight}%)
            </span>
          ) : (
            <span className="flex items-center gap-1 text-emerald-600 font-medium">
              <CheckCircle2 className="h-3.5 w-3.5" />
              All fields complete
            </span>
          )}
          <span>{profile.weeklyLearningHours}h/week goal</span>
        </div>
      )}
    </div>
  );
}
