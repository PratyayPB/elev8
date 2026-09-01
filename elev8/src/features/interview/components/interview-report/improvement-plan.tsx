import { OverallAssessment } from "../../types";
import { BookOpen, CheckSquare, Compass } from "lucide-react";

interface ImprovementPlanProps {
  overallScores: OverallAssessment;
}

export function ImprovementPlan({ overallScores }: ImprovementPlanProps) {
  return (
    <div className="bg-dashboard-card p-6 sm:p-8 rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm space-y-6">
      <h3 className="text-xl font-display font-bold text-text-primary flex items-center gap-2">
        <Compass className="w-5 h-5 text-text-primary" />
        Actionable Improvement Plan
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recommended Learning */}
        <div className="p-5 bg-dashboard-metricHighlight/10 rounded-2xl border border-dashboard-metricHighlight/30">
          <h4 className="font-display font-bold text-text-primary text-base mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-text-primary" />
            Recommended Learning & Focus Areas
          </h4>
          <div className="space-y-3">
            {overallScores.recommendedLearning.map((item, i) => {
              const isStructured = typeof item === "object" && item !== null && "title" in item;
              const title = isStructured ? item.title : (item as string);
              const description = isStructured ? item.description : "";
              const priority = isStructured ? item.priority : "MEDIUM";

              const getPriorityBadge = (p: "HIGH" | "MEDIUM" | "LOW") => {
                switch (p) {
                  case "HIGH":
                    return <span className="px-2 py-0.5 rounded-full text-[10px] font-display font-bold bg-rose-500/15 text-rose-600 border border-rose-500/20">High Priority</span>;
                  case "MEDIUM":
                    return <span className="px-2 py-0.5 rounded-full text-[10px] font-display font-bold bg-dashboard-metricHighlight/20 text-text-primary border border-dashboard-metricHighlight/30">Medium</span>;
                  case "LOW":
                    return <span className="px-2 py-0.5 rounded-full text-[10px] font-display font-bold bg-surface-muted text-text-secondary border border-border-subtle">Low</span>;
                }
              };

              return (
                <div key={i} className="p-3 bg-surface-elevated/70 border border-border-subtle rounded-xl space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display font-bold text-sm text-text-primary">{title}</span>
                    {getPriorityBadge(priority)}
                  </div>
                  {description && (
                    <p className="text-xs font-sans text-text-secondary leading-relaxed">{description}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Suggested Next Steps */}
        <div className="p-5 bg-surface-muted rounded-2xl border border-border-subtle">
          <h4 className="font-display font-bold text-text-primary text-base mb-3 flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-text-primary" />
            Suggested Actions
          </h4>
          <ul className="space-y-2.5">
            {overallScores.nextSteps.map((step, i) => (
              <li key={i} className="text-sm font-sans text-text-secondary flex items-start gap-2 leading-relaxed">
                <span className="font-bold text-text-primary">•</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
