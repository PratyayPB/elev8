import { OverallAssessment } from "../../types";
import { BookOpen, CheckSquare, Compass } from "lucide-react";

interface ImprovementPlanProps {
  overallScores: OverallAssessment;
}

export function ImprovementPlan({ overallScores }: ImprovementPlanProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
        <Compass className="w-5 h-5 text-blue-600" />
        Actionable Improvement Plan
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recommended Learning */}
        <div className="p-5 bg-blue-50/40 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30">
          <h4 className="font-bold text-blue-900 dark:text-blue-300 text-base mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-600" />
            Recommended Topics
          </h4>
          <ul className="space-y-2.5">
            {overallScores.recommendedLearning.map((topic, i) => (
              <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                <span className="font-bold text-blue-500">•</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Suggested Next Steps */}
        <div className="p-5 bg-purple-50/40 dark:bg-purple-900/10 rounded-2xl border border-purple-100 dark:border-purple-900/30">
          <h4 className="font-bold text-purple-900 dark:text-purple-300 text-base mb-3 flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-purple-600" />
            Suggested Actions
          </h4>
          <ul className="space-y-2.5">
            {overallScores.nextSteps.map((step, i) => (
              <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                <span className="font-bold text-purple-500">•</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
