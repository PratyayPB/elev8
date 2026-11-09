"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useResumePersonalization } from "../../hooks/use-resume-personalization";
import {
  Sparkles,
  Loader2,
  FastForward,
  UserCheck,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
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
  } = useResumePersonalization();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-3">
        <Loader2 className="w-8 h-8 animate-spin text-text-primary" />
        <h3 className="text-base font-display font-bold text-text-primary">
          Checking Profile Status
        </h3>
        <p className="text-xs font-sans text-text-secondary max-w-sm">
          Retrieving your career profile context for resume personalization...
        </p>
      </div>
    );
  }

  if (skipped) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-surface-muted dark:bg-[#161616] border border-border-subtle dark:border-white/10 rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-brand-secondary-200 dark:bg-[#242424] text-text-muted dark:text-zinc-400 border border-border-subtle dark:border-white/10 flex items-center justify-center mx-auto shadow-sm">
            <FastForward className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-display font-bold text-text-primary">
              Personalization Skipped
            </h3>
            <p className="text-xs font-sans text-text-secondary dark:text-zinc-300 max-w-md mx-auto mt-1 leading-relaxed">
              Your resume will be scored based purely on your target role and core inputs
              without injecting profile background details.
            </p>
          </div>
          <button
            type="button"
            onClick={handleUnskip}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-text-primary text-white dark:text-brand-primary-900 text-xs font-display font-semibold hover:bg-black/90 dark:hover:bg-brand-secondary-200 transition-all shadow-sm cursor-pointer active:scale-[0.98]"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            Review Personalization Options
          </button>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-border-subtle dark:border-white/10">
          <button
            type="button"
            onClick={prevStep}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold text-text-primary dark:text-zinc-100 bg-surface-muted dark:bg-[#242424] hover:bg-border-subtle dark:hover:bg-[#2e2e2e] border border-border-subtle dark:border-white/10 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
          <button
            type="button"
            onClick={handleContinue}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white dark:text-brand-primary-900 bg-text-primary hover:bg-black/90 dark:hover:bg-brand-secondary-200 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  if (hasOptedIn === true) {
    const ctx = profileStatus?.profileContext;
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-surface-muted dark:bg-[#161616] border border-border-subtle dark:border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center gap-3 border-b border-border-subtle dark:border-white/10 pb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-display font-bold text-text-primary">
                Profile Personalization Enabled
              </h3>
              <p className="text-xs font-sans text-text-secondary dark:text-zinc-300 mt-0.5">
                The following profile attributes will be used to enhance your resume assessment:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-white dark:bg-[#202020] rounded-xl border border-border-subtle dark:border-white/10 shadow-sm">
              <span className="text-[11px] font-display font-semibold text-text-secondary dark:text-zinc-400 uppercase tracking-wider block">
                Current Role
              </span>
              <span className="text-xs font-medium text-text-primary dark:text-zinc-100 mt-1 block truncate">
                {ctx?.currentRole || "Not specified"}
              </span>
            </div>
            <div className="p-3 bg-white dark:bg-[#202020] rounded-xl border border-border-subtle dark:border-white/10 shadow-sm">
              <span className="text-[11px] font-display font-semibold text-text-secondary dark:text-zinc-400 uppercase tracking-wider block">
                Overall Experience
              </span>
              <span className="text-xs font-medium text-text-primary dark:text-zinc-100 mt-1 block">
                {ctx?.yearsOfExperience != null
                  ? `${ctx.yearsOfExperience} yrs`
                  : "Not specified"}
              </span>
            </div>
            <div className="p-3 bg-white dark:bg-[#202020] rounded-xl border border-border-subtle dark:border-white/10 shadow-sm">
              <span className="text-[11px] font-display font-semibold text-text-secondary dark:text-zinc-400 uppercase tracking-wider block">
                Skills
              </span>
              <span className="text-xs font-medium text-text-primary dark:text-zinc-100 mt-1 block truncate">
                {ctx?.skills && ctx.skills.length > 0
                  ? `${ctx.skills.length} skills added`
                  : "None specified"}
              </span>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={handleSkip}
              className="text-xs font-display font-semibold text-text-secondary dark:text-zinc-400 hover:text-text-primary dark:hover:text-zinc-100 underline underline-offset-2 transition-colors cursor-pointer"
            >
              Disable Profile Personalization
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-border-subtle dark:border-white/10">
          <button
            type="button"
            onClick={prevStep}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold text-text-primary dark:text-zinc-100 bg-surface-muted dark:bg-[#242424] hover:bg-border-subtle dark:hover:bg-[#2e2e2e] border border-border-subtle dark:border-white/10 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
          <button
            type="button"
            onClick={handleContinue}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white dark:text-brand-primary-900 bg-text-primary hover:bg-black/90 dark:hover:bg-brand-secondary-200 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  // Awaiting decision: check if profile is completed
  const isProfileComplete = profileStatus?.isCompleted === true;

  if (isProfileComplete) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-surface-muted dark:bg-[#161616] border border-border-subtle dark:border-white/10 rounded-2xl p-6 sm:p-8 text-center space-y-6 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-brand-secondary-200 dark:bg-[#242424] text-text-primary dark:text-zinc-100 border border-border-subtle dark:border-white/10 flex items-center justify-center mx-auto shadow-sm">
            <UserCheck className="w-6 h-6" />
          </div>
          <div className="max-w-md mx-auto space-y-2">
            <h3 className="text-lg font-display font-bold text-text-primary">
              Personalize with Profile Data (Optional)
            </h3>
            <p className="text-xs font-sans text-text-secondary dark:text-zinc-300 leading-relaxed">
              Your career profile is complete! Would you like us to personalize
              your resume scoring based on your career background, current role,
              and skills?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={optIn}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary hover:bg-black/80 dark:hover:bg-brand-secondary-200 text-white dark:text-brand-primary-900 text-xs font-display font-semibold transition-all shadow-sm cursor-pointer active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
              Yes, Use Profile Data
            </button>
            <button
              type="button"
              onClick={handleSkip}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-[#242424] border border-border-subtle dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-[#2c2c2c] text-text-primary dark:text-zinc-100 text-xs font-display font-semibold transition-all shadow-sm cursor-pointer active:scale-[0.98]"
            >
              <FastForward className="w-4 h-4 text-text-muted dark:text-zinc-400 shrink-0" />
              Skip & Proceed
            </button>
          </div>
        </div>

        <div className="flex justify-start pt-4 border-t border-border-subtle dark:border-white/10">
          <button
            type="button"
            onClick={prevStep}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold text-text-primary dark:text-zinc-100 bg-surface-muted dark:bg-[#242424] hover:bg-border-subtle dark:hover:bg-[#2e2e2e] border border-border-subtle dark:border-white/10 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </div>
    );
  }

  // Profile is incomplete
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-surface-muted dark:bg-[#161616] border border-border-subtle dark:border-white/10 rounded-2xl p-6 sm:p-8 text-center space-y-6 shadow-sm">
        <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center mx-auto shadow-sm">
          <AlertCircle className="w-6 h-6" />
        </div>
        <div className="max-w-md mx-auto space-y-2">
          <h3 className="text-lg font-display font-bold text-text-primary">
            Complete Profile for Tailored Personalization
          </h3>
          <p className="text-xs font-sans text-text-secondary dark:text-zinc-300 leading-relaxed">
            Your career profile is not yet fully completed. Completing your
            profile enables rich AI personalization based on your current role,
            career transition goals, and background.
          </p>
        </div>

        {error && (
          <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs font-sans text-amber-800 dark:text-amber-300 max-w-md mx-auto rounded-xl">
            {error}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => router.push("/dashboard/profile")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary hover:bg-black/80 dark:hover:bg-brand-secondary-200 text-white dark:text-brand-primary-900 text-xs font-display font-semibold transition-all shadow-sm cursor-pointer active:scale-[0.98]"
          >
            <span>Complete Profile</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleSkip}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-[#242424] border border-border-subtle dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-[#2c2c2c] text-text-primary dark:text-zinc-100 text-xs font-display font-semibold transition-all shadow-sm cursor-pointer active:scale-[0.98]"
          >
            <FastForward className="w-4 h-4 text-text-muted dark:text-zinc-400 shrink-0" />
            Skip for now
          </button>
        </div>
      </div>

      <div className="flex justify-start pt-4 border-t border-border-subtle dark:border-white/10">
        <button
          type="button"
          onClick={prevStep}
          className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold text-text-primary dark:text-zinc-100 bg-surface-muted dark:bg-[#242424] hover:bg-border-subtle dark:hover:bg-[#2e2e2e] border border-border-subtle dark:border-white/10 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
      </div>
    </div>
  );
}
