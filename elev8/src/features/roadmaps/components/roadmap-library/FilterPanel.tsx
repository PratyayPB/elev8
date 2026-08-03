"use client";

import React from "react";
import { Filter, ArrowUpDown } from "lucide-react";

interface FilterPanelProps {
  experienceLevel: string;
  status: string;
  sort: string;
  onExperienceChange: (val: string) => void;
  onStatusChange: (val: string) => void;
  onSortChange: (val: any) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  experienceLevel,
  status,
  sort,
  onExperienceChange,
  onStatusChange,
  onSortChange,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Experience Level Filter */}
      <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300">
        <Filter className="w-3.5 h-3.5 text-slate-400" />
        <span>Level:</span>
        <select
          value={experienceLevel}
          onChange={(e) => onExperienceChange(e.target.value)}
          className="bg-transparent text-slate-100 font-medium outline-none cursor-pointer"
        >
          <option value="ALL" className="bg-slate-900">All Levels</option>
          <option value="BEGINNER" className="bg-slate-900">Beginner</option>
          <option value="INTERMEDIATE" className="bg-slate-900">Intermediate</option>
          <option value="ADVANCED" className="bg-slate-900">Advanced</option>
        </select>
      </div>

      {/* Status Filter */}
      <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300">
        <span>Status:</span>
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="bg-transparent text-slate-100 font-medium outline-none cursor-pointer"
        >
          <option value="ALL" className="bg-slate-900">All Statuses</option>
          <option value="COMPLETED" className="bg-slate-900">Completed</option>
          <option value="IN_PROGRESS" className="bg-slate-900">Generating</option>
          <option value="NOT_STARTED" className="bg-slate-900">Not Started</option>
        </select>
      </div>

      {/* Sort By */}
      <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300">
        <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
        <span>Sort:</span>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-transparent text-slate-100 font-medium outline-none cursor-pointer"
        >
          <option value="newest" className="bg-slate-900">Newest First</option>
          <option value="oldest" className="bg-slate-900">Oldest First</option>
          <option value="updated" className="bg-slate-900">Recently Updated</option>
          <option value="alphabetical" className="bg-slate-900">Alphabetical</option>
        </select>
      </div>
    </div>
  );
};
