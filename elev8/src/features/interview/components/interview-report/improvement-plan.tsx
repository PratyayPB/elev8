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
            Recommended Topics
          </h4>
          <ul className="space-y-2.5">
            {overallScores.recommendedLearning.map((topic, i) => (
              <li key={i} className="text-sm font-sans text-text-secondary flex items-start gap-2 leading-relaxed">
                <span className="font-bold text-text-primary">•</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
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
