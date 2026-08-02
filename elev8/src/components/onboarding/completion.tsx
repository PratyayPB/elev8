"use client";

import React from "react";
import { UserProfileData } from "@/features/profile/types";
import { ProfileSummary } from "@/components/profile/profile-summary";
import { ProfileProgress } from "@/components/profile/profile-progress";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";

interface CompletionStepProps {
  profile: Partial<UserProfileData>;
  isSubmitting: boolean;
  onFinish: () => void;
}

export function CompletionStep({ profile, isSubmitting, onFinish }: CompletionStepProps) {
  return (
    <div className="space-y-6 max-w-2xl mx-auto text-center py-4">
      <div className="w-16 h-16 bg-accent-cyan/10 border border-accent-cyan/20 rounded-2xl flex items-center justify-center mx-auto text-accent-cyan shadow-sm">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-extrabold text-text-primary">
          Profile Setup Complete!
        </h2>
        <p className="text-xs text-text-secondary">
          Your profile has been saved. Elev8 is now customized for your career path.
        </p>
      </div>

      <ProfileProgress profile={profile} />

      <div className="text-left">
        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
          Profile Snapshot
        </h4>
        <ProfileSummary profile={profile} />
      </div>

      <div className="pt-4">
        <button
          type="button"
          onClick={onFinish}
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-accent-cyan text-black font-semibold text-sm hover:brightness-105 transition-all shadow-sm disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Finalizing...
            </>
          ) : (
            <>
              Go to Dashboard
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
