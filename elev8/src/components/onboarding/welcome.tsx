"use client";

import React from "react";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

interface WelcomeProps {
  userName?: string | null;
  onStart: () => void;
  onSkip: () => void;
}

export function WelcomeStep({ userName, onStart, onSkip }: WelcomeProps) {
  return (
    <div className="text-center space-y-6 max-w-xl mx-auto py-8">
      <div className="w-16 h-16 bg-accent-cyan/10 border border-accent-cyan/20 rounded-2xl flex items-center justify-center mx-auto text-accent-cyan shadow-sm">
        <Sparkles className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">
          Welcome to Elev8{userName ? `, ${userName}` : ""}!
        </h2>
        <p className="text-sm text-text-secondary leading-relaxed">
          Elev8 is your AI-powered career assistant. Completing your professional profile helps us deliver tailored roadmaps, targeted interview prep, and AI guidance.
        </p>
      </div>

      <div className="bg-surface border border-border p-4 rounded-2xl text-left space-y-3 text-xs text-text-secondary">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-text-primary">Onboarding is 100% Optional.</span> You can skip right now and jump straight to the Dashboard. You can complete your profile anytime from Settings.
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
        <button
          type="button"
          onClick={onStart}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-accent-cyan text-black font-semibold text-sm hover:brightness-105 transition-all shadow-sm"
        >
          Complete Profile
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={onSkip}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-border bg-surface text-text-secondary font-medium text-sm hover:text-text-primary hover:bg-surface-muted transition-all"
        >
          Skip for Now
        </button>
      </div>
    </div>
  );
}
