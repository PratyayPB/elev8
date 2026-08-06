import { useState, useEffect } from "react";
import { Question } from "../../types";
import { clsx } from "clsx";
import { Check } from "lucide-react";

interface DynamicQuestionProps {
  question: Question;
  initialAnswers?: string[];
  onChange: (selectedOptions: string[]) => void;
}

export function DynamicQuestion({
  question,
  initialAnswers = [],
  onChange,
}: DynamicQuestionProps) {
  const [selected, setSelected] = useState<string[]>(initialAnswers);

  useEffect(() => {
    onChange(selected);
  }, [selected]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleOption = (option: string) => {
    if (question.type === "single") {
      setSelected([option]);
    } else {
      setSelected((prev) =>
        prev.includes(option)
          ? prev.filter((o) => o !== option)
          : [...prev, option]
      );
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
        {question.question}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {question.type === "multi" ? "Select all that apply." : "Select one option."}
      </p>

      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => toggleOption(option)}
              className={clsx(
                "w-full flex items-center p-4 rounded-xl border-2 transition-all text-left",
                isSelected
                  ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
              )}
            >
              <div
                className={clsx(
                  "w-5 h-5 flex items-center justify-center border-2 mr-3",
                  question.type === "single" ? "rounded-full" : "rounded-md",
                  isSelected
                    ? "border-blue-600 bg-blue-600"
                    : "border-gray-300 dark:border-gray-600"
                )}
              >
                {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
              </div>
              <span
                className={clsx(
                  "font-medium",
                  isSelected ? "text-blue-900 dark:text-blue-100" : "text-gray-700 dark:text-gray-300"
                )}
              >
                {option}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
