"use client";

import React from "react";
import { useProfileCompletion } from "@/features/profile/hooks/use-profile-completion";
import { UserProfileData } from "@/features/profile/types";

interface ProfileProgressProps {
  profile: Partial<UserProfileData> | null;
  showDetails?: boolean;
}

export function ProfileProgress({
  profile,
  showDetails = true,
}: ProfileProgressProps) {
  const { percentage, completionLabel, missingFields } =
    useProfileCompletion(profile);

  return (
    <div className="w-full bg-surface p-4 rounded-2xl border border-border space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
            {completionLabel}
          </span>
          <h4 className="text-sm font-medium text-text-primary">
            Profile Strength
          </h4>
        </div>
        <span className="text-lg font-bold text-text-primary font-mono">
          {percentage}%
        </span>
      </div>

      <div className="w-full h-2.5 bg-surface-muted rounded-full overflow-hidden border border-border-subtle">
        <div
          className="h-full bg-dashboard-metricHighlight transition-all duration-500 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {showDetails && missingFields.length > 0 && percentage < 100 && (
        <div className="text-xs text-text-secondary pt-1">
          <span className="text-text-muted">Suggestions to improve: </span>
          {missingFields.slice(0, 3).join(", ")}
        </div>
      )}
    </div>
  );
}
