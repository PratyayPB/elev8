import React from "react";
import { Question } from "../../types";
import { CheckCircle2, Circle } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  selectedOptions: string[];
  onToggleOption: (option: string, isSingle: boolean) => void;
}

export function QuestionCard({ question, selectedOptions = [], onToggleOption }: QuestionCardProps) {
  const isSingle = question.type === "single";

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-3">
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-sm font-semibold text-gray-900 leading-snug">
          {question.question}
        </h4>
        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-gray-100 text-gray-500 shrink-0">
          {isSingle ? "Single Choice" : "Multiple Choice"}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
        {question.options.map((option) => {
          const isSelected = selectedOptions.includes(option);

          return (
            <button
              key={option}
              type="button"
              onClick={() => onToggleOption(option, isSingle)}
              className={`flex items-center gap-2.5 p-3 rounded-lg border text-xs font-medium text-left transition-all ${
                isSelected
                  ? "bg-black text-white border-black shadow-xs"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {isSelected ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-gray-300 shrink-0" />
              )}
              <span className="truncate">{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
