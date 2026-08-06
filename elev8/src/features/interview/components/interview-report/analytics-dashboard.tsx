import { Analytics } from "../../types";
import { BarChart3, FileText, CheckCircle, Percent } from "lucide-react";

interface AnalyticsDashboardProps {
  analytics: Analytics;
}

export function AnalyticsDashboard({ analytics }: AnalyticsDashboardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-4">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
        <BarChart3 className="w-5 h-5 text-indigo-600" />
        Interview Performance Analytics
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
          <span className="text-xs text-gray-400 font-medium">Completion Rate</span>
          <p className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-1 mt-1">
            <Percent className="w-4 h-4 text-green-500" />
            {analytics.completionPercentage}%
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
          <span className="text-xs text-gray-400 font-medium">Questions Attempted</span>
          <p className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-1 mt-1">
            <CheckCircle className="w-4 h-4 text-blue-500" />
            {analytics.questionsAttempted}
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
          <span className="text-xs text-gray-400 font-medium">Total Words</span>
          <p className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-1 mt-1">
            <FileText className="w-4 h-4 text-purple-500" />
            {analytics.totalWords}
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
          <span className="text-xs text-gray-400 font-medium">Avg Words / Answer</span>
          <p className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-1 mt-1">
            {analytics.averageWordsPerAnswer}
          </p>
        </div>
      </div>
    </div>
  );
}
