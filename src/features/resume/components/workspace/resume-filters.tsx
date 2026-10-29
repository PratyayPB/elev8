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
        <Filter className="w-4 h-4 text-gray-500" />
        <span className="text-xs font-medium text-gray-600">Filters:</span>
      </div>

      <select
        value={filters.status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
      >
        <option value="all">All Statuses</option>
        <option value="draft">Processing (Draft)</option>
        <option value="completed">Completed</option>
        <option value="archived">Archived</option>
      </select>

      <select
        value={filters.experienceLevel}
        onChange={(e) => onExperienceChange(e.target.value)}
        className="text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
      >
        <option value="all">All Experience Levels</option>
        <option value="Beginner">Beginner</option>
        <option value="Basic">Basic</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <select
        value={filters.sortBy}
        onChange={(e) => onSortChange(e.target.value as ResumeWorkspaceFilters["sortBy"])}
        className="text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-black ml-auto"
      >
        <option value="newest">Sort: Newest First</option>
        <option value="oldest">Sort: Oldest First</option>
        <option value="highestScore">Sort: Highest Score</option>
        <option value="lowestScore">Sort: Lowest Score</option>
        <option value="highestAtsScore">Sort: Highest ATS</option>
        <option value="recentlyUpdated">Sort: Recently Updated</option>
        <option value="alphabetical">Sort: Alphabetical</option>
      </select>

      <button
        onClick={onReset}
        className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
        title="Reset filters"
      >
        <RotateCcw className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
