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
    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-gray-900 dark:text-white text-base">
          {question.question}
        </h4>
        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
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
              className={`p-3.5 rounded-xl border text-left text-sm font-semibold transition-all flex items-center justify-between ${
                isSelected
                  ? "bg-blue-50 dark:bg-blue-950/40 border-blue-500 text-blue-900 dark:text-blue-200"
                  : "bg-gray-50/50 dark:bg-gray-700/30 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <span>{option}</span>
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                  isSelected
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              >
                {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
