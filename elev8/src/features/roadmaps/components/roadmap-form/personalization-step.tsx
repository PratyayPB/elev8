"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ProfileStatusResult } from "../../actions/profile-status.action";
import {
  Sparkles,
  Loader2,
  FastForward,
  UserCheck,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface PersonalizationStepProps {
  skipped: boolean;
  hasOptedIn: boolean | null;
  profileStatus: ProfileStatusResult | null;
  loading: boolean;
  error: string | null;
  onOptIn: () => void;
  onSkip: () => void;
  onUnskip: () => void;
}

export function PersonalizationStep({
  skipped,
  hasOptedIn,
  profileStatus,
  loading,
  error,
  onOptIn,
  onSkip,
  onUnskip,
}: PersonalizationStepProps) {
  const router = useRouter();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-3">
        <Loader2 className="w-8 h-8 animate-spin text-text-primary" />
        <h3 className="text-base font-display font-bold text-text-primary">
          Checking Profile Status
        </h3>
        <p className="text-xs font-sans text-text-secondary max-w-sm">
          Retrieving your career profile context for personalization...
        </p>
      </div>
    );
  }

  if (skipped) {
    return (
      <div className="bg-surface-muted/60 border border-border-subtle rounded-xl p-8 text-center space-y-4">
        <FastForward className="w-8 h-8 text-text-muted mx-auto" />
        <div>
          <h3 className="text-sm font-display font-bold text-text-primary">
            Personalization Skipped
          </h3>
          <p className="text-xs font-sans text-text-secondary max-w-md mx-auto mt-1">
            Your roadmap will be generated based purely on your core inputs
            without injecting profile details.
          </p>
        </div>
        <button
          type="button"
          onClick={onUnskip}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-text-primary text-white dark:text-brand-primary-900 text-xs font-display font-semibold hover:bg-black/90 dark:hover:bg-brand-secondary-200 transition-all shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-dashboard-metricHighlight" />
          Review Personalization Options
        </button>
      </div>
    );
  }

  if (hasOptedIn === true) {
    return (
      <div className="bg-surface-muted/60 border border-border-subtle rounded-[var(--card-radius)] p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-3 border-b border-border-subtle pb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-display font-bold text-text-primary">
              Profile Personalization Enabled
            </h3>
            <p className="text-xs font-sans text-text-secondary mt-0.5">
              The following profile attributes will be included in the AI
              prompt:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 bg-white dark:bg-surface-card rounded-xl border border-border-subtle">
            <span className="text-[11px] font-display font-semibold text-text-secondary uppercase tracking-wider block">
              Current Role
            </span>
            <span className="text-xs font-medium text-text-primary mt-1 block truncate">
              {profileStatus?.profileContext?.currentRole || "Not specified"}
            </span>
          </div>
          <div className="p-3 bg-white dark:bg-surface-card rounded-xl border border-border-subtle">
            <span className="text-[11px] font-display font-semibold text-text-secondary uppercase tracking-wider block">
              Overall Experience
            </span>
            <span className="text-xs font-medium text-text-primary mt-1 block">
              {profileStatus?.profileContext?.yearsOfExperience != null
                ? `${profileStatus.profileContext.yearsOfExperience} years`
                : "Not specified"}
            </span>
          </div>
          <div className="p-3 bg-white dark:bg-surface-card rounded-xl border border-border-subtle">
            <span className="text-[11px] font-display font-semibold text-text-secondary uppercase tracking-wider block">
              Existing Skills
            </span>
            <span className="text-xs font-medium text-text-primary mt-1 block truncate">
              {profileStatus?.profileContext?.existingSkills &&
              profileStatus.profileContext.existingSkills.length > 0
                ? `${profileStatus.profileContext.existingSkills.length} skills added`
                : "None"}
            </span>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={onSkip}
            className="text-xs font-display font-semibold text-text-secondary hover:text-text-primary underline underline-offset-2"
          >
            Disable Profile Personalization
          </button>
        </div>
      </div>
    );
  }

  // Awaiting decision: check if profile is completed
  const isProfileComplete = profileStatus?.isCompleted === true;

  if (isProfileComplete) {
    return (
      <div className="bg-surface-muted/60 border border-border-subtle rounded-[var(--card-radius)] p-8 text-center space-y-6 shadow-sm">
        <div className="w-12 h-12 rounded-2xl bg-dashboard-metricHighlight/30 text-text-primary border border-dashboard-metricHighlight flex items-center justify-center mx-auto shadow-inner">
          <UserCheck className="w-6 h-6" />
        </div>
        <div className="max-w-md mx-auto space-y-2">
          <h3 className="text-lg font-display font-bold text-text-primary">
            Personalize with Profile Data (Optional)
          </h3>
          <p className="text-xs font-sans text-text-secondary leading-relaxed">
            Your career profile is complete! Would you like us to personalize
            your learning roadmap using your current role, existing skills, and
            overall professional experience?
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={onOptIn}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary hover:bg-black/80 dark:hover:bg-brand-secondary-200 text-white dark:text-brand-primary-900 text-xs font-display font-semibold transition-all shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-dashboard-metricHighlight" />
            Yes, Personalize with Profile
          </button>
          <button
            type="button"
            onClick={onSkip}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-border-subtle hover:bg-border-subtle/50 text-text-primary text-xs font-display font-semibold transition-all"
          >
            <FastForward className="w-4 h-4 text-text-muted" />
            Skip & Proceed
          </button>
        </div>
      </div>
    );
  }

  // Profile is incomplete
  return (
    <div className="bg-surface-muted/60 border border-border-subtle rounded-[var(--card-radius)] p-8 text-center space-y-6 shadow-sm">
      <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 border border-amber-200 dark:border-amber-800 flex items-center justify-center mx-auto shadow-inner">
        <AlertCircle className="w-6 h-6" />
      </div>
      <div className="max-w-md mx-auto space-y-2">
        <h3 className="text-lg font-display font-bold text-text-primary">
          Complete Profile for Tailored Personalization
        </h3>
        <p className="text-xs font-sans text-text-secondary leading-relaxed">
          Your career profile is not yet fully completed. Completing your
          profile enables rich AI personalization based on your current role,
          skills, and professional experience.
        </p>
      </div>

      {error && (
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs font-sans text-amber-800 max-w-md mx-auto">
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          type="button"
          onClick={() => router.push("/dashboard/profile")}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary hover:bg-black/80 dark:hover:bg-brand-secondary-200 text-white dark:text-brand-primary-900 text-xs font-display font-semibold transition-all shadow-sm"
        >
          <span>Complete Profile</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={onSkip}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-border-subtle hover:bg-border-subtle/50 text-text-primary text-xs font-display font-semibold transition-all"
        >
          <FastForward className="w-4 h-4 text-text-muted" />
          Skip for now
        </button>
      </div>
    </div>
  );
}
