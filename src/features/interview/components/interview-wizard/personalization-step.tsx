"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useInterviewPersonalization } from "../../hooks/use-interview-personalization";
import {
  Sparkles,
  Loader2,
  FastForward,
  UserCheck,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

export function PersonalizationStep() {
  const router = useRouter();
  const {
    profileStatus,
    isLoading,
    error,
    hasOptedIn,
    skipped,
    optIn,
    handleSkip,
    handleUnskip,
    handleContinue,
    prevStep,
  } = useInterviewPersonalization();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-3">
        <Loader2 className="w-8 h-8 animate-spin text-text-primary" />
        <h3 className="text-base font-display font-bold text-text-primary">
          Checking Profile Status
        </h3>
        <p className="text-xs font-sans text-text-secondary max-w-sm">
          Retrieving your career profile context for interview personalization...
        </p>
      </div>
    );
  }

  if (skipped) {
    return (
      <div className="space-y-6 animate-in fade-in duration-200">
        <div className="bg-surface-muted dark:bg-[#161616] border border-border-subtle dark:border-white/5 rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-sm">
          <FastForward className="w-8 h-8 text-text-muted dark:text-text-secondary mx-auto" />
          <div>
            <h3 className="text-sm font-display font-bold text-text-primary">
              Personalization Skipped
            </h3>
            <p className="text-xs font-sans text-text-secondary max-w-md mx-auto mt-1">
              Your interview will be generated based purely on your core inputs
              without injecting profile background details.
            </p>
          </div>
          <button
            type="button"
            onClick={handleUnskip}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-text-primary text-white dark:bg-white dark:text-black dark:hover:bg-neutral-100 text-xs font-display font-semibold hover:bg-black/90 transition-all shadow-sm cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-500" />
            Review Personalization Options
          </button>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-border-subtle mt-8">
          <button
            type="button"
            onClick={prevStep}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border-subtle text-xs font-display font-semibold text-text-primary bg-surface-muted hover:bg-border-subtle transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </button>
          <button
            type="button"
            onClick={handleContinue}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-display font-bold shadow-sm transition-all bg-text-primary text-white dark:bg-white dark:text-black dark:hover:bg-neutral-100 hover:bg-black/80 cursor-pointer active:scale-[0.98]"
          >
            Continue <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  if (hasOptedIn === true) {
    const ctx = profileStatus?.profileContext;
    return (
      <div className="space-y-6 animate-in fade-in duration-200">
        <div className="bg-surface-muted dark:bg-[#161616] border border-border-subtle dark:border-white/5 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center gap-3 border-b border-border-subtle dark:border-white/10 pb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-display font-bold text-text-primary">
                Profile Personalization Enabled
              </h3>
              <p className="text-xs font-sans text-text-secondary mt-0.5">
                The following profile attributes will be used to tailor your questions:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-white dark:bg-[#202020] rounded-xl border border-border-subtle dark:border-white/10 shadow-sm">
              <span className="text-[11px] font-display font-semibold text-text-secondary uppercase tracking-wider block">
                Current Role
              </span>
              <span className="text-xs font-medium text-text-primary mt-1 block truncate">
                {ctx?.currentRole || "Not specified"}
              </span>
            </div>
            <div className="p-3 bg-white dark:bg-[#202020] rounded-xl border border-border-subtle dark:border-white/10 shadow-sm">
              <span className="text-[11px] font-display font-semibold text-text-secondary uppercase tracking-wider block">
                Experience
              </span>
              <span className="text-xs font-medium text-text-primary mt-1 block">
                {ctx?.yearsOfExperience != null
                  ? `${ctx.yearsOfExperience} yrs`
                  : "Not specified"}
              </span>
            </div>
            <div className="p-3 bg-white dark:bg-[#202020] rounded-xl border border-border-subtle dark:border-white/10 shadow-sm">
              <span className="text-[11px] font-display font-semibold text-text-secondary uppercase tracking-wider block">
                Primary Goal
              </span>
              <span className="text-xs font-medium text-text-primary mt-1 block truncate">
                {ctx?.primaryGoal || "Not specified"}
              </span>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={handleSkip}
              className="text-xs font-display font-semibold text-text-secondary hover:text-text-primary underline underline-offset-2 cursor-pointer transition-colors"
            >
              Disable Profile Personalization
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-border-subtle mt-8">
          <button
            type="button"
            onClick={prevStep}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border-subtle text-xs font-display font-semibold text-text-primary bg-surface-muted hover:bg-border-subtle transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </button>
          <button
            type="button"
            onClick={handleContinue}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-display font-bold shadow-sm transition-all bg-text-primary text-white dark:bg-white dark:text-black dark:hover:bg-neutral-100 hover:bg-black/80 cursor-pointer active:scale-[0.98]"
          >
            Continue <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  // Awaiting decision: check if profile is completed
  const isProfileComplete = profileStatus?.isCompleted === true;

  if (isProfileComplete) {
    return (
      <div className="space-y-6 animate-in fade-in duration-200">
        <div className="bg-surface-muted dark:bg-[#161616] border border-border-subtle dark:border-white/5 rounded-2xl p-6 sm:p-8 text-center space-y-6 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-brand-secondary-200 dark:bg-[#242424] text-text-primary border border-border-subtle dark:border-white/10 flex items-center justify-center mx-auto shadow-sm">
            <UserCheck className="w-6 h-6" />
          </div>
          <div className="max-w-md mx-auto space-y-2">
            <h3 className="text-lg font-display font-bold text-text-primary">
              Personalize with Profile Data (Optional)
            </h3>
            <p className="text-xs font-sans text-text-secondary leading-relaxed">
              Your career profile is complete! Would you like us to personalize
              your interview questions based on your career background, current role,
              and experience?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={optIn}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-neutral-100 text-white text-xs font-display font-semibold transition-all shadow-sm cursor-pointer active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-500" />
              Yes, Use Profile Data
            </button>
            <button
              type="button"
              onClick={handleSkip}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-[#242424] border border-border-subtle dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-[#2c2c2c] text-text-primary text-xs font-display font-semibold transition-all shadow-sm cursor-pointer active:scale-[0.98]"
            >
              <FastForward className="w-4 h-4 text-text-muted dark:text-text-secondary" />
              Skip & Proceed
            </button>
          </div>
        </div>

        <div className="flex justify-start pt-6 border-t border-border-subtle mt-8">
          <button
            type="button"
            onClick={prevStep}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border-subtle text-xs font-display font-semibold text-text-primary bg-surface-muted hover:bg-border-subtle transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </button>
        </div>
      </div>
    );
  }

  // Profile is incomplete
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="bg-surface-muted dark:bg-[#161616] border border-border-subtle dark:border-white/5 rounded-2xl p-6 sm:p-8 text-center space-y-6 shadow-sm">
        <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center mx-auto shadow-sm">
          <AlertCircle className="w-6 h-6" />
        </div>
        <div className="max-w-md mx-auto space-y-2">
          <h3 className="text-lg font-display font-bold text-text-primary">
            Complete Profile for Tailored Personalization
          </h3>
          <p className="text-xs font-sans text-text-secondary leading-relaxed">
            Your career profile is not yet fully completed. Completing your
            profile enables rich AI personalization based on your current role,
            career transition goals, and background.
          </p>
        </div>

        {error && (
          <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-xl text-xs font-sans text-amber-800 dark:text-amber-300 max-w-md mx-auto">
            {error}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => router.push("/dashboard/profile")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-neutral-100 text-white text-xs font-display font-semibold transition-all shadow-sm cursor-pointer active:scale-[0.98]"
          >
            <span>Complete Profile</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleSkip}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-[#242424] border border-border-subtle dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-[#2c2c2c] text-text-primary text-xs font-display font-semibold transition-all shadow-sm cursor-pointer active:scale-[0.98]"
          >
            <FastForward className="w-4 h-4 text-text-muted dark:text-text-secondary" />
            Skip for now
          </button>
        </div>
      </div>

      <div className="flex justify-start pt-6 border-t border-border-subtle mt-8">
        <button
          type="button"
          onClick={prevStep}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border-subtle text-xs font-display font-semibold text-text-primary bg-surface-muted hover:bg-border-subtle transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back
        </button>
      </div>
    </div>
  );
}
