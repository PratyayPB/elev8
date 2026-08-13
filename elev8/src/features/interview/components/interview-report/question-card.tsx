"use client";

import { useState } from "react";
import { GeneratedQuestion, QuestionFeedback } from "../../types";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle,
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
    let color = "bg-surface-muted text-text-secondary border border-border-subtle";
    if (score >= 80)
      color = "bg-emerald-50 text-emerald-700 border border-emerald-200";
    else if (score >= 60)
      color = "bg-dashboard-metricHighlight text-black border border-dashboard-metricHighlight/50";
    else 
      color = "bg-rose-50 text-rose-800 border border-rose-200";

    return (
      <span className={`px-2.5 py-1 rounded-full text-xs font-display font-bold ${color}`}>
        {score} / 100
      </span>
    );
  };

  return (
    <div className="bg-dashboard-card rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-surface-muted transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-surface-muted border border-border-subtle text-text-secondary font-display font-bold text-sm flex items-center justify-center shrink-0">
            Q{index + 1}
          </span>
          <div>
            <h4 className="font-display font-bold text-text-primary text-base">
              {question.question}
            </h4>
            <span className="text-xs font-sans text-text-muted">
              Category: {question.category}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {getScoreBadge(feedback?.score)}
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-text-muted" />
          ) : (
            <ChevronDown className="w-5 h-5 text-text-muted" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="p-5 border-t border-border-subtle bg-surface-muted/30 flex flex-col gap-5">
          {/* User Answer */}
          <div>
            <h5 className="text-xs font-display font-bold text-text-muted uppercase tracking-wider mb-2">
              Your Answer
            </h5>
            <div className="p-4 bg-dashboard-card rounded-xl border border-border-subtle text-sm font-sans text-text-secondary leading-relaxed whitespace-pre-wrap">
              {answerText.trim().length > 0 ? (
                answerText
              ) : (
                <em className="text-text-muted">No answer provided.</em>
              )}
            </div>
          </div>

          {/* AI Feedback */}
          {feedback && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-dashboard-metricHighlight/10 rounded-xl border border-dashboard-metricHighlight/30">
                <h5 className="text-xs font-display font-bold text-text-primary uppercase tracking-wider mb-2">
                  AI Feedback
                </h5>
                <p className="text-sm font-sans text-text-secondary leading-relaxed">
                  {feedback.feedback}
                </p>
              </div>

              {/* Expected / Missed Topics */}
              <div className="p-4 bg-surface-muted rounded-xl border border-border-subtle">
                <h5 className="text-xs font-display font-bold text-text-primary uppercase tracking-wider mb-2">
                  Missed Concepts
                </h5>
                {feedback.missedTopics.length > 0 ? (
                  <ul className="space-y-1">
                    {feedback.missedTopics.map((topic, i) => (
                      <li
                        key={i}
                        className="text-sm font-sans text-text-secondary flex items-center gap-1.5"
                      >
                        <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-emerald-700 font-display font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" /> Covered all expected
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
