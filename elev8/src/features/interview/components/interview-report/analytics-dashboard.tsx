import { Analytics } from "../../types";
import { BarChart3, FileText, CheckCircle, Percent } from "lucide-react";

interface AnalyticsDashboardProps {
  analytics: Analytics;
}

export function AnalyticsDashboard({ analytics }: AnalyticsDashboardProps) {
  return (
    <div className="bg-dashboard-card p-6 sm:p-8 rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm space-y-4">
      <h3 className="text-xl font-display font-bold text-text-primary flex items-center gap-2">
        <BarChart3 className="w-5 h-5 text-text-primary" />
        Interview Performance Analytics
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
        <div className="p-4 bg-surface-muted border border-border-subtle rounded-xl">
          <span className="text-[10px] uppercase font-display font-bold text-text-muted tracking-wider">Completion Rate</span>
          <p className="text-xl font-display font-bold text-text-primary flex items-center gap-1 mt-1">
            <Percent className="w-4 h-4 text-emerald-600" />
            {analytics.completionPercentage}%
          </p>
        </div>

        <div className="p-4 bg-surface-muted border border-border-subtle rounded-xl">
          <span className="text-[10px] uppercase font-display font-bold text-text-muted tracking-wider">Questions Attempted</span>
          <p className="text-xl font-display font-bold text-text-primary flex items-center gap-1 mt-1">
            <CheckCircle className="w-4 h-4 text-text-secondary" />
            {analytics.questionsAttempted}
          </p>
        </div>

        <div className="p-4 bg-surface-muted border border-border-subtle rounded-xl">
          <span className="text-[10px] uppercase font-display font-bold text-text-muted tracking-wider">Total Words</span>
          <p className="text-xl font-display font-bold text-text-primary flex items-center gap-1 mt-1">
            <FileText className="w-4 h-4 text-text-secondary" />
            {analytics.totalWords}
          </p>
        </div>

        <div className="p-4 bg-surface-muted border border-border-subtle rounded-xl">
          <span className="text-[10px] uppercase font-display font-bold text-text-muted tracking-wider">Avg Words / Answer</span>
          <p className="text-xl font-display font-bold text-text-primary flex items-center gap-1 mt-1">
            {analytics.averageWordsPerAnswer}
          </p>
        </div>
      </div>
    </div>
  );
}
