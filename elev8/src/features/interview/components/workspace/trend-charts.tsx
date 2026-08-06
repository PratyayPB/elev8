import { Interview } from "@prisma/client";
import { TrendingUp } from "lucide-react";

interface TrendChartsProps {
  completedInterviews: Interview[];
}

export function TrendCharts({ completedInterviews }: TrendChartsProps) {
  // Take last 5-7 completed interviews in chronological order
  const chartData = [...completedInterviews]
    .reverse()
    .filter((i) => i.overallScore !== null && i.overallScore !== undefined)
    .slice(-7);

  if (chartData.length === 0) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          Score Improvement Trends
        </h3>
        <span className="text-xs text-gray-400 font-medium">Last {chartData.length} Interviews</span>
      </div>

      <div className="h-44 flex items-end justify-between gap-2 sm:gap-4 pt-6 px-2">
        {chartData.map((item) => {
          const score = item.overallScore || 0;
          return (
            <div key={item.id} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
              <span className="text-xs font-bold text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                {score}%
              </span>
              <div className="w-full bg-gray-100 dark:bg-gray-700/50 rounded-t-xl h-full flex items-end overflow-hidden">
                <div
                  className={`w-full rounded-t-xl transition-all duration-500 ${
                    score >= 80 ? "bg-green-500" : score >= 60 ? "bg-blue-500" : "bg-amber-500"
                  }`}
                  style={{ height: `${score}%` }}
                />
              </div>
              <span className="text-[10px] text-gray-400 font-medium truncate w-full text-center">
                {item.role}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
