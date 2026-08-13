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
    <div className="bg-dashboard-card p-6 rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-display font-bold text-text-primary flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-text-primary" />
          Score Improvement Trends
        </h3>
        <span className="text-xs font-sans text-text-muted">Last {chartData.length} Interviews</span>
      </div>

      <div className="h-44 flex items-end justify-between gap-2 sm:gap-4 pt-6 px-2">
        {chartData.map((item) => {
          const score = item.overallScore || 0;
          return (
            <div key={item.id} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
              <span className="text-xs font-display font-bold text-text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                {score}%
              </span>
              <div className="w-full bg-surface-muted rounded-t-xl h-full flex items-end overflow-hidden">
                <div
                  className={`w-full rounded-t-xl transition-all duration-500 ${
                    score >= 80 ? "bg-emerald-600" : score >= 60 ? "bg-text-primary" : "bg-rose-500"
                  }`}
                  style={{ height: `${score}%` }}
                />
              </div>
              <span className="text-[10px] font-sans text-text-secondary truncate w-full text-center">
                {item.role}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
