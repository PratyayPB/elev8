import React from "react";
import { Question } from "../../types";
import { QuestionCard } from "./question-card";

interface DynamicQuestionsProps {
  questions: Question[];
  answers: Record<string, string[]>;
  onToggleOption: (questionId: string, option: string, isSingle: boolean) => void;
}

export function DynamicQuestions({ questions, answers, onToggleOption }: DynamicQuestionsProps) {
  if (!questions || questions.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 text-sm">
        No additional questions required for this selection. You can proceed to the summary.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {questions.map((q) => (
        <QuestionCard
          key={q.id}
          question={q}
          selectedOptions={answers[q.id] || []}
          onToggleOption={(option, isSingle) => onToggleOption(q.id, option, isSingle)}
        />
      ))}
    </div>
  );
}
