"use client";

import { useState } from "react";
import { GeneratedQuestion, QuestionFeedback } from "../../types";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertCircle,
  XCircle,
} from "lucide-react";

interface QuestionCardProps {
  question: GeneratedQuestion;
  index: number;
  answerText: string;
  feedback?: QuestionFeedback;
}

export function QuestionCard({
  question,
  index,
  answerText,
  feedback,
}: QuestionCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getScoreBadge = (score?: number) => {
    if (score === undefined) return null;
    let color = "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
    if (score >= 80)
      color =
        "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
    else if (score >= 60)
      color =
        "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300";
    else color = "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";

    return (
      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${color}`}>
        {score} / 100
      </span>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm flex items-center justify-center shrink-0">
            Q{index + 1}
          </span>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white text-base">
              {question.question}
            </h4>
            <span className="text-xs text-gray-400 font-medium">
              Category: {question.category}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {getScoreBadge(feedback?.score)}
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="p-5 border-t border-gray-100 dark:border-gray-700/60 bg-gray-50/50 dark:bg-gray-900/20 flex flex-col gap-5">
          {/* User Answer */}
          <div>
            <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Your Answer
            </h5>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap">
              {answerText.trim().length > 0 ? (
                answerText
              ) : (
                <em className="text-gray-400">No answer provided.</em>
              )}
            </div>
          </div>

          {/* AI Feedback */}
          {feedback && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                <h5 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                  AI Feedback
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {feedback.feedback}
                </p>
              </div>

              {/* Expected / Missed Topics */}
              <div className="p-4 bg-amber-50/50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-900/30">
                <h5 className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
                  Missed Concepts
                </h5>
                {feedback.missedTopics.length > 0 ? (
                  <ul className="space-y-1">
                    {feedback.missedTopics.map((topic, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1.5"
                      >
                        <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> Covered all expected
                    topics!
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
