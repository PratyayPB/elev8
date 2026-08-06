"use client";

import { LucideIcon } from "lucide-react";

interface ScoreCardProps {
  title: string;
  score: number;
  icon: LucideIcon;
  subtitle?: string;
  accentColor?: string;
}

export function ScoreCard({ title, score, icon: Icon, subtitle, accentColor = "text-blue-600" }: ScoreCardProps) {
  const getScoreBg = (val: number) => {
    if (val >= 85) return "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800";
    if (val >= 70) return "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border-blue-200 dark:border-blue-800";
    if (val >= 50) return "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border-amber-200 dark:border-amber-800";
    return "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border-rose-200 dark:border-rose-800";
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-between">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <Icon className={`w-4 h-4 ${accentColor}`} />
          <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            {title}
          </h4>
        </div>
        <p className="text-2xl font-black text-gray-900 dark:text-white">{score}<span className="text-sm font-semibold text-gray-400">/100</span></p>
        {subtitle && <p className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>}
      </div>

      <div className={`px-3 py-1.5 rounded-xl text-xs font-extrabold border ${getScoreBg(score)}`}>
        {score >= 85 ? "Excellent" : score >= 70 ? "Good" : score >= 50 ? "Average" : "Needs Work"}
      </div>
    </div>
  );
}
