import { GeneratedQuestion } from "../../types";
import { Clock, Tag, Target } from "lucide-react";

interface QuestionViewProps {
  question: GeneratedQuestion;
  index: number;
}

function formatEstimatedTime(seconds?: number): string {
  if (!seconds || seconds <= 0) return "2-3 min";
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const remainingSecs = seconds % 60;
  return remainingSecs > 0 ? `${mins}m ${remainingSecs}s` : `${mins} min`;
}

function getDifficultyBadgeStyle(difficulty: string) {
  const d = (difficulty || "").toLowerCase();
  if (d.includes("easy")) {
    return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20";
  }
  if (d.includes("medium") || d.includes("intermediate")) {
    return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20";
  }
  if (d.includes("hard") || d.includes("expert") || d.includes("advanced")) {
    return "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20";
  }
  return "bg-surface-muted text-text-primary border border-border-subtle";
}

export function QuestionView({ question, index }: QuestionViewProps) {
  return (
    <div className="bg-dashboard-card rounded-[var(--card-radius)] p-6 border border-dashboard-cardBorder shadow-sm">
      <div className="flex flex-wrap gap-3 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-display font-semibold bg-text-primary text-white dark:bg-white dark:text-black shadow-xs">
          Question {index + 1}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-display font-semibold bg-surface-muted border border-border-subtle text-text-secondary">
          <Tag className="w-3 h-3 mr-1.5" />
          {question.category}
        </span>
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-display font-semibold ${getDifficultyBadgeStyle(question.difficulty)}`}>
          <Target className="w-3 h-3 mr-1.5" />
          {question.difficulty}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-display font-semibold bg-surface-muted border border-border-subtle text-text-secondary">
          <Clock className="w-3 h-3 mr-1.5" />
          Est. {formatEstimatedTime(question.estimatedTimeSeconds)}
        </span>
      </div>

      <h2 className="text-xl sm:text-2xl font-display font-bold text-text-primary leading-relaxed">
        {question.question}
      </h2>
    </div>
  );
}
