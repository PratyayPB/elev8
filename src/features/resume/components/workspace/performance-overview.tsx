"use client";

import React from "react";
import { ResumePerformanceSummary } from "../../types/workspace";
import { FileCheck, Award, Target, TrendingUp } from "lucide-react";

interface PerformanceOverviewProps {
  performance: ResumePerformanceSummary;
}

export function PerformanceOverview({ performance }: PerformanceOverviewProps) {
  return (
    <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-xl p-6 shadow-sm mb-8">
      <h2 className="text-lg font-display font-semibold text-text-primary mb-4">
        Performance Overview
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-surface-muted dark:bg-[#181818] border border-border-subtle rounded-xl">
          <div className="flex items-center space-x-2 text-text-secondary mb-1">
            <FileCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-medium uppercase tracking-wider">Total Uploads</span>
          </div>
          <p className="text-2xl font-display font-bold text-text-primary">{performance.totalUploads}</p>
          <p className="text-xs text-text-secondary mt-1">{performance.totalAssessments} scored</p>
        </div>

        <div className="p-4 bg-surface-muted dark:bg-[#181818] border border-border-subtle rounded-xl">
          <div className="flex items-center space-x-2 text-text-secondary mb-1">
            <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-medium uppercase tracking-wider">Average Score</span>
          </div>
          <p className="text-2xl font-display font-bold text-text-primary">{performance.averageScore} / 100</p>
          <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">Highest: {performance.highestScore}</p>
        </div>

        <div className="p-4 bg-surface-muted dark:bg-[#181818] border border-border-subtle rounded-xl">
          <div className="flex items-center space-x-2 text-text-secondary mb-1">
            <Target className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-xs font-medium uppercase tracking-wider">Average ATS</span>
          </div>
          <p className="text-2xl font-display font-bold text-text-primary">{performance.averageAtsScore}%</p>
          <p className="text-xs text-purple-600 dark:text-purple-400 font-medium mt-1">Highest: {performance.highestAtsScore}%</p>
        </div>

        <div className="p-4 bg-surface-muted dark:bg-[#181818] border border-border-subtle rounded-xl">
          <div className="flex items-center space-x-2 text-text-secondary mb-1">
            <TrendingUp className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-xs font-medium uppercase tracking-wider">Target Role</span>
          </div>
          <p className="text-base font-display font-bold text-text-primary truncate">
            {performance.mostFrequentRole || "N/A"}
          </p>
          <p className="text-xs text-text-secondary mt-1">Most evaluated</p>
        </div>
      </div>
    </div>
  );
}
