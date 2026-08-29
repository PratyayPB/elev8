import { GeneratedQuestion } from "../../types";
import { Clock, Tag, Target } from "lucide-react";

interface QuestionViewProps {
  question: GeneratedQuestion;
  index: number;
}

export function QuestionView({ question, index }: QuestionViewProps) {
  return (
    <div className="bg-dashboard-card rounded-[var(--card-radius)] p-6 border border-dashboard-cardBorder shadow-sm">
      <div className="flex flex-wrap gap-3 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-display font-semibold bg-text-primary text-white dark:text-brand-primary-900">
          Question {index + 1}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-display font-semibold bg-surface-muted border border-border-subtle text-text-secondary">
          <Tag className="w-3 h-3 mr-1.5" />
          {question.category}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-display font-semibold bg-dashboard-metricHighlight text-black border border-dashboard-metricHighlight/50">
          <Target className="w-3 h-3 mr-1.5" />
          {question.difficulty}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-display font-semibold bg-surface-muted border border-border-subtle text-text-secondary">
          <Clock className="w-3 h-3 mr-1.5" />
          Est. {question.estimatedAnswerTime}
        </span>
      </div>

      <h2 className="text-xl sm:text-2xl font-display font-bold text-text-primary leading-relaxed">
        {question.question}
      </h2>
    </div>
  );
}
