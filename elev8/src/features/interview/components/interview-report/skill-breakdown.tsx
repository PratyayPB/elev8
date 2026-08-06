import { OverallAssessment } from "../../types";
import { CheckCircle2, AlertTriangle } from "lucide-react";

interface SkillBreakdownProps {
  overallScores: OverallAssessment;
}

export function SkillBreakdown({ overallScores }: SkillBreakdownProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Key Strengths */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-5 h-5 text-green-500" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Key Strengths</h3>
        </div>
        <ul className="space-y-3">
          {overallScores.strengths.map((strength, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
              <span>{strength}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Areas for Improvement */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Areas for Improvement</h3>
        </div>
        <ul className="space-y-3">
          {overallScores.weaknesses.map((weakness, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
              <span>{weakness}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
