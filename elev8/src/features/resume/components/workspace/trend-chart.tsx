"use client";

import React from "react";
import { ResumeTrendPoint } from "../../types/workspace";

interface TrendChartProps {
  trends: ResumeTrendPoint[];
}

export function TrendChart({ trends }: TrendChartProps) {
  if (!trends || trends.length === 0) {
    return (
      <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-xl p-6 shadow-sm mb-8 text-center text-text-secondary text-sm">
        No assessment trends available yet. Upload resumes over time to see improvement charts!
      </div>
    );
  }

  const maxScore = 100;

  return (
    <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-xl p-6 shadow-sm mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-display font-semibold text-text-primary">Score Improvement Trends</h2>
          <p className="text-xs text-text-secondary mt-0.5">Overall vs ATS score across your assessments</p>
        </div>
        <div className="flex items-center space-x-4 text-xs font-medium text-text-secondary">
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-black dark:bg-zinc-200" />
            <span>Overall Score</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-purple-600 dark:bg-purple-500" />
            <span>ATS Score</span>
          </div>
        </div>
      </div>

      <div className="h-48 flex items-end space-x-6 overflow-x-auto pt-6 pb-2 px-4 border-b border-border-subtle">
        {trends.map((point, i) => {
          const overallHeight = (point.overallScore / maxScore) * 100;
          const atsHeight = (point.atsScore / maxScore) * 100;

          return (
            <div key={i} className="flex flex-col items-center min-w-[60px] space-y-2 h-full justify-end group">
              <div className="flex items-end space-x-1.5 h-full w-full justify-center">
                {/* Overall score bar */}
                <div
                  style={{ height: `${overallHeight}%` }}
                  className="w-3.5 bg-black dark:bg-zinc-200 rounded-t transition-all group-hover:bg-gray-800 dark:group-hover:bg-white relative"
                >
                  <span className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 bg-black dark:bg-zinc-800 text-white text-[10px] py-0.5 px-1 rounded whitespace-nowrap z-10">
                    {point.overallScore}
                  </span>
                </div>
                {/* ATS score bar */}
                <div
                  style={{ height: `${atsHeight}%` }}
                  className="w-3.5 bg-purple-600 dark:bg-purple-500 rounded-t transition-all group-hover:bg-purple-700 dark:group-hover:bg-purple-400 relative"
                >
                  <span className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 bg-purple-600 dark:bg-purple-500 text-white text-[10px] py-0.5 px-1 rounded whitespace-nowrap z-10">
                    {point.atsScore}%
                  </span>
                </div>
              </div>
              <span className="text-[10px] text-text-secondary font-medium truncate max-w-[60px]">
                {point.date}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
