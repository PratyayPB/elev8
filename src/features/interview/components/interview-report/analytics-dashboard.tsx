import { Analytics } from "../../types";
import { BarChart3, FileText, CheckCircle, Percent, Clock, Zap } from "lucide-react";

interface AnalyticsDashboardProps {
  analytics: Analytics;
}

export function AnalyticsDashboard({ analytics }: AnalyticsDashboardProps) {
  const formatTotalTime = (seconds: number) => {
    if (!seconds || seconds <= 0) return "0s";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins === 0) return `${secs}s`;
    return `${mins}m ${secs}s`;
  };

  const getPacingBadge = (rating?: Analytics["pacingEfficiencyRating"]) => {
    switch (rating) {
      case "OPTIMAL":
        return { label: "Optimal Pacing", color: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20" };
      case "FAST":
        return { label: "Fast Pacing", color: "text-dashboard-metricHighlight bg-dashboard-metricHighlight/10 border-dashboard-metricHighlight/30" };
      case "DELIBERATE":
        return { label: "Deliberate Pacing", color: "text-blue-500 bg-blue-500/10 border-blue-500/20" };
      case "VARIABLE":
        return { label: "Variable Pacing", color: "text-amber-600 bg-amber-500/10 border-amber-500/20" };
      default:
        return { label: "Optimal", color: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20" };
    }
  };

  const pacingInfo = getPacingBadge(analytics.pacingEfficiencyRating);

  return (
    <div className="bg-dashboard-card p-6 sm:p-8 rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm space-y-4 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-display font-bold text-text-primary flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-text-primary" />
          Interview Session Analytics
        </h3>
        <p className="text-xs font-sans text-text-secondary mt-1">
          Detailed telemetry on answer duration, pacing, and overall completion
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
        <div className="p-3.5 bg-surface-muted border border-border-subtle rounded-xl">
          <span className="text-[10px] uppercase font-display font-bold text-text-muted tracking-wider">Completion Rate</span>
          <p className="text-lg font-display font-bold text-text-primary flex items-center gap-1 mt-1">
            <Percent className="w-4 h-4 text-emerald-600" />
            {analytics.completionPercentage}%
          </p>
        </div>

        <div className="p-3.5 bg-surface-muted border border-border-subtle rounded-xl">
          <span className="text-[10px] uppercase font-display font-bold text-text-muted tracking-wider">Attempted</span>
          <p className="text-lg font-display font-bold text-text-primary flex items-center gap-1 mt-1">
            <CheckCircle className="w-4 h-4 text-text-secondary" />
            {analytics.questionsAttempted} Qs
          </p>
        </div>

        <div className="p-3.5 bg-surface-muted border border-border-subtle rounded-xl">
          <span className="text-[10px] uppercase font-display font-bold text-text-muted tracking-wider">Total Time</span>
          <p className="text-lg font-display font-bold text-text-primary flex items-center gap-1 mt-1">
            <Clock className="w-4 h-4 text-text-secondary" />
            {formatTotalTime(analytics.totalInterviewTimeSeconds)}
          </p>
        </div>

        <div className="p-3.5 bg-surface-muted border border-border-subtle rounded-xl">
          <span className="text-[10px] uppercase font-display font-bold text-text-muted tracking-wider">Avg Answer Time</span>
          <p className="text-lg font-display font-bold text-text-primary flex items-center gap-1 mt-1">
            {analytics.averageAnswerTimeMs ? `${Math.round(analytics.averageAnswerTimeMs / 1000)}s` : "N/A"}
          </p>
        </div>

        <div className="p-3.5 bg-surface-muted border border-border-subtle rounded-xl">
          <span className="text-[10px] uppercase font-display font-bold text-text-muted tracking-wider">Avg Words / Answer</span>
          <p className="text-lg font-display font-bold text-text-primary flex items-center gap-1 mt-1">
            <FileText className="w-4 h-4 text-text-secondary" />
            {analytics.averageWordsPerAnswer}
          </p>
        </div>

        <div className="p-3.5 bg-surface-muted border border-border-subtle rounded-xl flex flex-col justify-between">
          <span className="text-[10px] uppercase font-display font-bold text-text-muted tracking-wider">Pacing Rating</span>
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-display font-bold border mt-1 w-fit ${pacingInfo.color}`}>
            <Zap className="w-3 h-3" />
            {pacingInfo.label}
          </span>
        </div>
      </div>
    </div>
  );
}
