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
        return "bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300 border-red-200 dark:border-red-800";
      case "Medium":
        return "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800";
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-sm space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 flex items-center justify-center">
          <ListTodo className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Actionable Improvement Plan</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Prioritized tasks to increase your resume score and land interviews.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="p-4 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gray-50/50 dark:bg-gray-700/30"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase border ${getPriorityBadge(rec.priority)}`}>
                  {rec.priority} Priority
                </span>
                <span className="text-xs font-semibold text-gray-400">Section: {rec.section}</span>
              </div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white">{rec.title}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">{rec.description}</p>
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-extrabold text-blue-600 dark:text-blue-400 shrink-0">
              Impact: {rec.expectedImpact}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
