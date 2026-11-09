"use client";

import React from "react";
import { ResumeWorkspaceFilters } from "../../types/workspace";
import { Filter, RotateCcw } from "lucide-react";

interface ResumeFiltersProps {
  filters: ResumeWorkspaceFilters;
  onStatusChange: (status: string) => void;
  onExperienceChange: (level: string) => void;
  onSortChange: (sortBy: ResumeWorkspaceFilters["sortBy"]) => void;
  onReset: () => void;
}

export function ResumeFilters({
  filters,
  onStatusChange,
  onExperienceChange,
  onSortChange,
  onReset,
}: ResumeFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center space-x-2">
        <Filter className="w-4 h-4 text-gray-500 dark:text-zinc-300" />
        <span className="text-xs font-semibold text-gray-600 dark:text-zinc-200">Filters:</span>
      </div>

      <select
        value={filters.status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="text-xs border border-gray-200 dark:border-white/15 rounded-lg px-2.5 py-1.5 bg-white dark:bg-[#242424] text-gray-700 dark:text-zinc-100 font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white/20 transition-colors cursor-pointer"
      >
        <option value="all" className="bg-white dark:bg-[#242424] text-gray-900 dark:text-zinc-100">All Statuses</option>
        <option value="draft" className="bg-white dark:bg-[#242424] text-gray-900 dark:text-zinc-100">Processing (Draft)</option>
        <option value="completed" className="bg-white dark:bg-[#242424] text-gray-900 dark:text-zinc-100">Completed</option>
        <option value="archived" className="bg-white dark:bg-[#242424] text-gray-900 dark:text-zinc-100">Archived</option>
      </select>

      <select
        value={filters.experienceLevel}
        onChange={(e) => onExperienceChange(e.target.value)}
        className="text-xs border border-gray-200 dark:border-white/15 rounded-lg px-2.5 py-1.5 bg-white dark:bg-[#242424] text-gray-700 dark:text-zinc-100 font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white/20 transition-colors cursor-pointer"
      >
        <option value="all" className="bg-white dark:bg-[#242424] text-gray-900 dark:text-zinc-100">All Experience Levels</option>
        <option value="Beginner" className="bg-white dark:bg-[#242424] text-gray-900 dark:text-zinc-100">Beginner</option>
        <option value="Basic" className="bg-white dark:bg-[#242424] text-gray-900 dark:text-zinc-100">Basic</option>
        <option value="Intermediate" className="bg-white dark:bg-[#242424] text-gray-900 dark:text-zinc-100">Intermediate</option>
        <option value="Advanced" className="bg-white dark:bg-[#242424] text-gray-900 dark:text-zinc-100">Advanced</option>
      </select>

      <select
        value={filters.sortBy}
        onChange={(e) => onSortChange(e.target.value as ResumeWorkspaceFilters["sortBy"])}
        className="text-xs border border-gray-200 dark:border-white/15 rounded-lg px-2.5 py-1.5 bg-white dark:bg-[#242424] text-gray-700 dark:text-zinc-100 font-medium focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white/20 transition-colors cursor-pointer ml-auto"
      >
        <option value="newest" className="bg-white dark:bg-[#242424] text-gray-900 dark:text-zinc-100">Sort: Newest First</option>
        <option value="oldest" className="bg-white dark:bg-[#242424] text-gray-900 dark:text-zinc-100">Sort: Oldest First</option>
        <option value="highestScore" className="bg-white dark:bg-[#242424] text-gray-900 dark:text-zinc-100">Sort: Highest Score</option>
        <option value="lowestScore" className="bg-white dark:bg-[#242424] text-gray-900 dark:text-zinc-100">Sort: Lowest Score</option>
        <option value="highestAtsScore" className="bg-white dark:bg-[#242424] text-gray-900 dark:text-zinc-100">Sort: Highest ATS</option>
        <option value="recentlyUpdated" className="bg-white dark:bg-[#242424] text-gray-900 dark:text-zinc-100">Sort: Recently Updated</option>
        <option value="alphabetical" className="bg-white dark:bg-[#242424] text-gray-900 dark:text-zinc-100">Sort: Alphabetical</option>
      </select>

      <button
        onClick={onReset}
        className="p-1.5 text-gray-400 hover:text-gray-600 dark:text-zinc-300 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
        title="Reset filters"
      >
        <RotateCcw className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
