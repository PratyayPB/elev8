"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserProfileData } from "../types";
import { useProfileCompletion } from "../hooks/use-profile-completion";
import { Sparkles, ArrowRight, X } from "lucide-react";
import { ROUTES } from "@/constants/routes";

interface OnboardingPromptProps {
  profile: Partial<UserProfileData> | null;
}

export function OnboardingPrompt({ profile }: OnboardingPromptProps) {
  const [isDismissed, setIsDismissed] = useState(true);
  const { percentage } = useProfileCompletion(profile);

  useEffect(() => {
    const dismissed = localStorage.getItem("elev8_onboarding_prompt_dismissed");
    if (!dismissed) {
      setIsDismissed(false);
    }
  }, []);

  if (profile?.onboardingStatus === "COMPLETED" || percentage >= 100 || isDismissed) {
    return null;
  }

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem("elev8_onboarding_prompt_dismissed", "true");
  };

  const isResuming = profile?.onboardingStatus === "IN_PROGRESS";

  return (
    <div className="relative bg-gradient-to-r from-accent-cyan/10 via-surface to-accent-gold/10 border border-accent-cyan/30 rounded-2xl p-5 shadow-sm space-y-3">
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute top-3.5 right-3.5 text-text-muted hover:text-text-primary p-1"
        title="Dismiss reminder"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-accent-cyan/20 flex items-center justify-center text-accent-cyan flex-shrink-0">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-text-primary">
            {isResuming ? "Resume Profile Setup" : "Personalize Your Career Journey"}
          </h4>
          <p className="text-xs text-text-secondary">
            Your profile is {percentage}% complete. Complete it to unlock personalized recommendations.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1">
        <div className="w-1/2 h-2 bg-surface-muted rounded-full overflow-hidden border border-border">
          <div
            className="h-full bg-accent-cyan transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <Link
          href={ROUTES.ONBOARDING}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-accent-cyan text-black text-xs font-semibold hover:brightness-105 transition-all shadow-sm"
        >
          {isResuming ? "Resume Onboarding" : "Complete Profile"}
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
