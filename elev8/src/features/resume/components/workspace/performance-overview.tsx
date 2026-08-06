"use client";

import React from "react";
import { ResumePerformanceSummary } from "../../types/workspace";
import { FileCheck, Award, Target, TrendingUp } from "lucide-react";

interface PerformanceOverviewProps {
  performance: ResumePerformanceSummary;
}

export function PerformanceOverview({ performance }: PerformanceOverviewProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Performance Overview</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 text-gray-500 mb-1">
            <FileCheck className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-medium uppercase tracking-wider">Total Uploads</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{performance.totalUploads}</p>
          <p className="text-xs text-gray-500 mt-1">{performance.totalAssessments} scored</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 text-gray-500 mb-1">
            <Award className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-medium uppercase tracking-wider">Average Score</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{performance.averageScore} / 100</p>
          <p className="text-xs text-emerald-600 font-medium mt-1">Highest: {performance.highestScore}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 text-gray-500 mb-1">
            <Target className="w-4 h-4 text-purple-600" />
            <span className="text-xs font-medium uppercase tracking-wider">Average ATS</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{performance.averageAtsScore}%</p>
          <p className="text-xs text-purple-600 font-medium mt-1">Highest: {performance.highestAtsScore}%</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 text-gray-500 mb-1">
            <TrendingUp className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-medium uppercase tracking-wider">Target Role</span>
          </div>
          <p className="text-base font-bold text-gray-900 truncate">
            {performance.mostFrequentRole || "N/A"}
          </p>
          <p className="text-xs text-gray-500 mt-1">Most evaluated</p>
        </div>
      </div>
    </div>
  );
}
