"use client";

import React, { useEffect } from "react";
import { Question, ExperienceLevel } from "../../types";
import { DynamicQuestions } from "./dynamic-question";
import { Sparkles, Loader2, FastForward } from "lucide-react";

interface PersonalizationStepProps {
  role: string;
  experienceLevel: ExperienceLevel;
  hoursPerWeek: number | "Flexible";
  questions: Question[];
  answers: Record<string, string[]>;
  loading: boolean;
  skipped: boolean;
  hasOptedIn: boolean | null;
  error: string | null;
  onOptIn: () => void;
  loadQuestions: (role: string, experienceLevel: ExperienceLevel, hoursPerWeek: number | "Flexible") => void;
  onToggleOption: (questionId: string, option: string, isSingle: boolean) => void;
  onSkip: () => void;
  onUnskip: () => void;
}

export function PersonalizationStep({
  role,
  experienceLevel,
  hoursPerWeek,
  questions,
  answers,
  loading,
  skipped,
  hasOptedIn,
  error,
  onOptIn,
  loadQuestions,
  onToggleOption,
  onSkip,
  onUnskip,
}: PersonalizationStepProps) {
  useEffect(() => {
    if (hasOptedIn === true && !loading && !skipped && !error) {
      loadQuestions(role, experienceLevel, hoursPerWeek);
    }
  }, [hasOptedIn, role, experienceLevel, hoursPerWeek, loading, skipped, error, loadQuestions]);

  if (hasOptedIn === null && !skipped) {
    return (
      <div className="bg-surface-muted/60 border border-border-subtle rounded-[var(--card-radius)] p-8 text-center space-y-6 shadow-sm">
        <div className="w-12 h-12 rounded-2xl bg-dashboard-metricHighlight/30 text-text-primary border border-dashboard-metricHighlight flex items-center justify-center mx-auto shadow-inner">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="max-w-md mx-auto space-y-2">
          <h3 className="text-lg font-display font-bold text-text-primary">
            AI Personalization (Optional)
          </h3>
          <p className="text-xs font-sans text-text-secondary leading-relaxed">
            Would you like Gemini AI to generate customized follow-up questions tailored to your experience level and goals for <span className="font-semibold text-text-primary">{role}</span>?
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={onOptIn}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary hover:bg-black/80 dark:hover:bg-brand-secondary-200 text-white text-xs font-display font-semibold transition-all shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-dashboard-metricHighlight" />
            Yes, Personalize My Roadmap
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

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-3">
        <Loader2 className="w-8 h-8 animate-spin text-text-primary" />
        <h3 className="text-base font-display font-bold text-text-primary">Personalizing Your Experience</h3>
        <p className="text-xs font-sans text-text-secondary max-w-sm">
          Gemini is generating tailored follow-up questions for <span className="font-semibold text-text-primary">{role}</span>...
        </p>
      </div>
    );
  }

  if (skipped) {
    return (
      <div className="bg-surface-muted/60 border border-border-subtle rounded-xl p-8 text-center space-y-4">
        <FastForward className="w-8 h-8 text-text-muted mx-auto" />
        <div>
          <h3 className="text-sm font-display font-bold text-text-primary">Personalization Skipped</h3>
          <p className="text-xs font-sans text-text-secondary max-w-md mx-auto mt-1">
            You opted to skip personalization questions. Your roadmap will be generated based purely on your core inputs.
          </p>
        </div>
        <button
          type="button"
          onClick={onUnskip}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-text-primary text-white dark:text-brand-primary-900 text-xs font-display font-semibold hover:bg-black/90 dark:hover:bg-brand-secondary-200 transition-all shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-dashboard-metricHighlight" />
          Enable Personalization
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4 border-b border-border-subtle pb-4">
        <div>
          <h3 className="text-base font-display font-bold text-text-primary flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-text-primary" />
            Personalized Follow-up Questions
          </h3>
          <p className="text-xs font-sans text-text-secondary mt-0.5">
            Answer these optional questions to fine-tune your career roadmap recommendations.
          </p>
        </div>
        <button
          type="button"
          onClick={onSkip}
          className="text-xs font-display font-semibold text-text-secondary hover:text-text-primary underline underline-offset-2 shrink-0"
        >
          Skip Personalization
        </button>
      </div>

      {error && (
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs font-sans text-amber-800">
          {error}
        </div>
      )}

      <DynamicQuestions
        questions={questions}
        answers={answers}
        onToggleOption={onToggleOption}
      />
    </div>
  );
}
