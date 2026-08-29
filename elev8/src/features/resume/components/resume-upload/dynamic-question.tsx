"use client";

import { Question } from "../../types";

interface DynamicQuestionProps {
  question: Question;
  initialAnswers: string[];
  onChange: (selected: string[]) => void;
}

export function DynamicQuestion({ question, initialAnswers, onChange }: DynamicQuestionProps) {
  const handleOptionClick = (option: string) => {
    if (question.type === "single") {
      onChange([option]);
    } else {
      if (initialAnswers.includes(option)) {
        onChange(initialAnswers.filter((item) => item !== option));
      } else {
        onChange([...initialAnswers, option]);
      }
    }
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-border-subtle shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-display font-bold text-text-primary text-base">
          {question.question}
        </h4>
        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-dashboard-metricHighlight/50 border border-dashboard-metricHighlight/60 text-text-primary font-display">
          {question.type === "single" ? "Single Choice" : "Multiple Choice"}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-2 pt-1">
        {question.options.map((option) => {
          const isSelected = initialAnswers.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => handleOptionClick(option)}
              className={`p-3.5 rounded-xl border text-left text-sm font-sans font-semibold transition-all flex items-center justify-between ${
                isSelected
                  ? "bg-dashboard-metricHighlight/15 border-text-primary text-text-primary"
                  : "bg-surface-muted/50 border-border-subtle text-text-secondary hover:bg-surface-muted"
              }`}
            >
              <span>{option}</span>
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                  isSelected
                    ? "border-text-primary bg-text-primary text-white dark:text-brand-primary-900"
                    : "border-border-subtle"
                }`}
              >
                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
