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
      <div className="bg-gradient-to-br from-purple-50 via-white to-gray-50 border border-purple-100 rounded-2xl p-8 text-center space-y-6 shadow-sm">
        <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mx-auto shadow-inner">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="max-w-md mx-auto space-y-2">
          <h3 className="text-base font-bold text-gray-900">
            AI Personalization (Optional)
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Would you like Gemini AI to generate customized follow-up questions tailored to your experience level and goals for <span className="font-semibold text-gray-900">{role}</span>?
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={onOptIn}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold transition-all shadow-md hover:shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            Yes, Personalize My Roadmap
          </button>
          <button
            type="button"
            onClick={onSkip}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold transition-all"
          >
            <FastForward className="w-4 h-4 text-gray-400" />
            Skip & Proceed
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-3">
        <Loader2 className="w-8 h-8 animate-spin text-black" />
        <h3 className="text-base font-semibold text-gray-900">Personalizing Your Experience</h3>
        <p className="text-xs text-gray-500 max-w-sm">
          Gemini is generating tailored follow-up questions for <span className="font-semibold text-black">{role}</span>...
        </p>
      </div>
    );
  }

  if (skipped) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center space-y-4">
        <FastForward className="w-8 h-8 text-gray-400 mx-auto" />
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Personalization Skipped</h3>
          <p className="text-xs text-gray-500 max-w-md mx-auto mt-1">
            You opted to skip personalization questions. Your roadmap will be generated based purely on your core inputs.
          </p>
        </div>
        <button
          type="button"
          onClick={onUnskip}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-black text-white text-xs font-semibold hover:bg-black/90 transition-all shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Enable Personalization
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4 border-b border-gray-100 pb-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-purple-600" />
            Personalized Follow-up Questions
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Answer these optional questions to fine-tune your career roadmap recommendations.
          </p>
        </div>
        <button
          type="button"
          onClick={onSkip}
          className="text-xs font-medium text-gray-500 hover:text-black underline underline-offset-2 shrink-0"
        >
          Skip Personalization
        </button>
      </div>

      {error && (
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
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
