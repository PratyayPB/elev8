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
  error: string | null;
  loadQuestions: (role: string, experienceLevel: ExperienceLevel, hoursPerWeek: number | "Flexible") => void;
  onToggleOption: (questionId: string, option: string, isSingle: boolean) => void;
  onSkip: () => void;
}

export function PersonalizationStep({
  role,
  experienceLevel,
  hoursPerWeek,
  questions,
  answers,
  loading,
  skipped,
  error,
  loadQuestions,
  onToggleOption,
  onSkip,
}: PersonalizationStepProps) {
  useEffect(() => {
    if (questions.length === 0 && !loading && !skipped && !error) {
      loadQuestions(role, experienceLevel, hoursPerWeek);
    }
  }, [role, experienceLevel, hoursPerWeek, questions.length, loading, skipped, error, loadQuestions]);

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
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center space-y-3">
        <FastForward className="w-8 h-8 text-gray-400 mx-auto" />
        <h3 className="text-sm font-semibold text-gray-900">Personalization Skipped</h3>
        <p className="text-xs text-gray-500 max-w-md mx-auto">
          You opted to skip personalization questions. Your roadmap will be generated based purely on your core inputs.
        </p>
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
