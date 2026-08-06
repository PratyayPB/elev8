"use client";

import React from "react";
import { ResumeTrendPoint } from "../../types/workspace";

interface TrendChartProps {
  trends: ResumeTrendPoint[];
}

export function TrendChart({ trends }: TrendChartProps) {
  if (!trends || trends.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8 text-center text-gray-500 text-sm">
        No assessment trends available yet. Upload resumes over time to see improvement charts!
      </div>
    );
  }

  const maxScore = 100;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Score Improvement Trends</h2>
          <p className="text-xs text-gray-500 mt-0.5">Overall vs ATS score across your assessments</p>
        </div>
        <div className="flex items-center space-x-4 text-xs font-medium">
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-black" />
            <span>Overall Score</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-purple-600" />
            <span>ATS Score</span>
          </div>
        </div>
      </div>

      <div className="h-48 flex items-end space-x-6 overflow-x-auto pt-6 pb-2 px-4 border-b border-gray-100">
        {trends.map((point, i) => {
          const overallHeight = (point.overallScore / maxScore) * 100;
          const atsHeight = (point.atsScore / maxScore) * 100;

          return (
            <div key={i} className="flex flex-col items-center min-w-[60px] space-y-2 h-full justify-end group">
              <div className="flex items-end space-x-1.5 h-full w-full justify-center">
                {/* Overall score bar */}
                <div
                  style={{ height: `${overallHeight}%` }}
                  className="w-3.5 bg-black rounded-t transition-all group-hover:bg-gray-800 relative"
                >
                  <span className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-0.5 px-1 rounded whitespace-nowrap z-10">
                    {point.overallScore}
                  </span>
                </div>
                {/* ATS score bar */}
                <div
                  style={{ height: `${atsHeight}%` }}
                  className="w-3.5 bg-purple-600 rounded-t transition-all group-hover:bg-purple-700 relative"
                >
                  <span className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[10px] py-0.5 px-1 rounded whitespace-nowrap z-10">
                    {point.atsScore}%
                  </span>
                </div>
              </div>
              <span className="text-[10px] text-gray-500 font-medium truncate max-w-[60px]">
                {point.date}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
