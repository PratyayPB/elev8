"use client";

import React from "react";
import Link from "next/link";
import { ProfileData } from "../types";
import { useProfileCompleteness } from "../hooks/use-profile-completeness";
import { Sparkles, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

interface ProfileCompletenessCardProps {
  profile: ProfileData | null;
  className?: string;
  showMissingList?: boolean;
}

export function ProfileCompletenessCard({
  profile,
  className = "",
  showMissingList = true,
}: ProfileCompletenessCardProps) {
  const { score, state, missingFields } = useProfileCompleteness(profile);

  const getStateDescription = () => {
    if (state === "COMPLETED") {
      return "Your profile is 100% complete and fully optimized for personalized career guidance.";
    }
    if (score >= 70) {
      return "Profile almost complete. Complete these remaining details to refine recommendations.";
    }
    if (score > 0) {
      return "Add key career details to unlock more personalized roadmaps, resume feedback, and interview prep.";
    }
    return "Set up your career profile to unlock custom roadmaps, resume analysis, and interview simulations.";
  };

  return (
    <div
      className={`rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-6 md:p-8 space-y-5 shadow-sm ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-display font-semibold text-text-secondary uppercase tracking-wider">
              Profile Completeness
            </span>
            <span
              className={`text-[11px] px-2.5 py-0.5 rounded-full font-display font-semibold ${
                state === "COMPLETED"
                  ? "bg-emerald-100 text-emerald-800"
                  : state === "IN_PROGRESS"
                  ? "bg-dashboard-metricHighlight text-black"
                  : "bg-surface-muted text-text-secondary"
              }`}
            >
              {state.replace("_", " ")}
            </span>
          </div>
          <p className="text-xs font-sans text-text-secondary max-w-xl">
            {getStateDescription()}
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto">
          <span className="text-3xl font-display font-bold text-text-primary tracking-tight">
            {score}%
          </span>
          <Link
            href="/dashboard/profile"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-text-primary text-white font-display font-semibold text-xs transition-all hover:bg-black/80 shrink-0"
          >
            {state === "COMPLETED" ? "View Profile" : "Edit Profile"}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2.5 bg-surface-muted rounded-full overflow-hidden border border-border-subtle">
        <div
          className={`h-full transition-all duration-500 rounded-full ${
            state === "COMPLETED"
              ? "bg-emerald-500"
              : "bg-dashboard-metricHighlight"
          }`}
          style={{ width: `${score}%` }}
        />
      </div>

      {/* Missing Fields List */}
      {showMissingList && missingFields.length > 0 && state !== "COMPLETED" && (
        <div className="pt-2 border-t border-border-subtle space-y-2.5">
          <span className="text-xs font-display font-semibold text-text-primary flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-dashboard-metricHighlight" />
            Complete these next for maximum personalization:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {missingFields.slice(0, 3).map((item) => (
              <Link
                key={item.field}
                href="/dashboard/profile"
                className="group p-3 rounded-xl border border-border-subtle bg-surface-subtle hover:border-text-primary/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-display font-semibold text-text-primary mb-1">
                    <span>{item.label}</span>
                    <span className="text-[10px] text-text-secondary font-normal font-sans">
                      +{item.weight} pts
                    </span>
                  </div>
                  <p className="text-[11px] font-sans text-text-secondary line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-1 text-[11px] font-display font-semibold text-text-primary group-hover:underline">
                  <span>Add now</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {state === "COMPLETED" && (
        <div className="flex items-center gap-2 text-xs font-sans text-emerald-700 bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
          <span>All high-value career context fields are completed. You're ready for full AI guidance.</span>
        </div>
      )}
    </div>
  );
}
