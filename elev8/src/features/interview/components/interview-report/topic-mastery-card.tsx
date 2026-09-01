import { TopicMasteryItem } from "../../types";
import { BookMarked, CheckCircle, AlertCircle, HelpCircle } from "lucide-react";

interface TopicMasteryCardProps {
  topicMastery?: TopicMasteryItem[];
}

export function TopicMasteryCard({ topicMastery }: TopicMasteryCardProps) {
  if (!topicMastery || topicMastery.length === 0) {
    return (
      <div className="bg-dashboard-card p-6 sm:p-8 rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm space-y-4">
        <h3 className="text-xl font-display font-bold text-text-primary flex items-center gap-2">
          <BookMarked className="w-5 h-5 text-text-primary" />
          Technical Topic Mastery
        </h3>
        <p className="text-sm text-text-secondary">
          No structured topic breakdown is available for this session.
        </p>
      </div>
    );
  }

  const getStatusBadge = (status: TopicMasteryItem["status"], score: number) => {
    switch (status) {
      case "STRONG":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-display font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
            <CheckCircle className="w-3.5 h-3.5" />
            Mastered ({score}%)
          </span>
        );
      case "SATISFACTORY":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-display font-bold bg-dashboard-metricHighlight/10 text-text-primary border border-dashboard-metricHighlight/30">
            <HelpCircle className="w-3.5 h-3.5 text-dashboard-metricHighlight" />
            Competent ({score}%)
          </span>
        );
      case "NEEDS_IMPROVEMENT":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-display font-bold bg-rose-500/10 text-rose-600 border border-rose-500/20">
            <AlertCircle className="w-3.5 h-3.5" />
            Needs Focus ({score}%)
          </span>
        );
    }
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-emerald-600";
    if (score >= 60) return "bg-dashboard-metricHighlight";
    return "bg-rose-500";
  };

  return (
    <div className="bg-dashboard-card p-6 sm:p-8 rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-xl font-display font-bold text-text-primary flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-text-primary" />
            Technical Topic Mastery & Coverage
          </h3>
          <p className="text-xs font-sans text-text-secondary mt-1">
            Proficiency assessment across individual technical competencies evaluated in this interview
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topicMastery.map((item, idx) => (
          <div
            key={idx}
            className="p-4 bg-surface-muted/50 border border-border-subtle rounded-xl flex flex-col justify-between gap-3"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-display font-bold text-sm text-text-primary">
                {item.topic}
              </span>
              {getStatusBadge(item.status, item.score)}
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-surface-muted rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${getProgressColor(
                  item.score
                )}`}
                style={{ width: `${Math.min(100, Math.max(0, item.score))}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
