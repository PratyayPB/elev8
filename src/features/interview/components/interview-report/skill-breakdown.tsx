import { OverallAssessment } from "../../types";
import { CheckCircle2, AlertTriangle } from "lucide-react";

interface SkillBreakdownProps {
  overallScores: OverallAssessment;
}

export function SkillBreakdown({ overallScores }: SkillBreakdownProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Key Strengths */}
      <div className="bg-dashboard-card p-6 rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <h3 className="text-lg font-display font-bold text-text-primary">Key Strengths</h3>
        </div>
        <ul className="space-y-3">
          {overallScores.strengths.map((strength, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm font-sans text-text-secondary leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
              <span>{strength}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Areas for Improvement */}
      <div className="bg-dashboard-card p-6 rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-text-primary" />
          <h3 className="text-lg font-display font-bold text-text-primary">Areas for Improvement</h3>
        </div>
        <ul className="space-y-3">
          {overallScores.weaknesses.map((weakness, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm font-sans text-text-secondary leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-text-primary mt-2 shrink-0" />
              <span>{weakness}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
