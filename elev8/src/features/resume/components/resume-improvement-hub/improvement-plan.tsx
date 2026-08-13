"use client";

import { ResumeReport } from "../../types";
import { ListTodo, CheckSquare, ArrowUpRight } from "lucide-react";

interface ImprovementPlanProps {
  report: ResumeReport;
}

export function ImprovementPlanComponent({ report }: ImprovementPlanProps) {
  const { recommendations } = report;

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-accent-coral/20 text-text-primary border-accent-coral";
      case "Medium":
        return "bg-accent-cream text-text-primary border-border-subtle";
      default:
        return "bg-surface-muted text-text-secondary border-border-subtle";
    }
  };

  return (
    <div className="bg-dashboard-card rounded-3xl p-6 sm:p-8 border border-dashboard-cardBorder shadow-sm space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-dashboard-metricHighlight/20 border border-dashboard-metricHighlight/30 text-text-primary flex items-center justify-center">
          <ListTodo className="w-5 h-5 text-text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-display font-black text-text-primary uppercase tracking-wide">Actionable Improvement Plan</h3>
          <p className="text-xs text-text-secondary">
            Prioritized tasks to increase your resume score and land interviews.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="p-4 rounded-2xl border border-dashboard-cardBorder hover:border-border-strong transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-muted"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-lg text-[9px] font-black uppercase border tracking-wider ${getPriorityBadge(rec.priority)}`}>
                  {rec.priority} Priority
                </span>
                <span className="text-[10px] font-black text-text-muted uppercase tracking-wider">Section: {rec.section}</span>
              </div>
              <h4 className="text-sm font-display font-black text-text-primary uppercase tracking-wide">{rec.title}</h4>
              <p className="text-xs text-text-secondary font-medium leading-relaxed">{rec.description}</p>
            </div>

            <div className="px-3 py-1.5 rounded-2xl bg-dashboard-card border border-dashboard-cardBorder text-[10px] font-black uppercase tracking-wider text-text-primary shrink-0">
              Impact: {rec.expectedImpact}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
