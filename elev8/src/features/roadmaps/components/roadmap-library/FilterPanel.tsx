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
      <div className="flex items-center gap-1.5 bg-surface-muted border border-border-subtle rounded-xl px-3 py-2 text-xs font-display font-medium text-text-secondary">
        <Filter className="w-3.5 h-3.5 text-text-muted" />
        <span>Level:</span>
        <select
          value={experienceLevel}
          onChange={(e) => onExperienceChange(e.target.value)}
          className="bg-transparent text-text-primary font-semibold outline-none cursor-pointer"
        >
          <option value="ALL" className="bg-white text-text-primary">All Levels</option>
          <option value="BEGINNER" className="bg-white text-text-primary">Beginner</option>
          <option value="INTERMEDIATE" className="bg-white text-text-primary">Intermediate</option>
          <option value="ADVANCED" className="bg-white text-text-primary">Advanced</option>
        </select>
      </div>

      {/* Status Filter */}
      <div className="flex items-center gap-1.5 bg-surface-muted border border-border-subtle rounded-xl px-3 py-2 text-xs font-display font-medium text-text-secondary">
        <span>Status:</span>
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="bg-transparent text-text-primary font-semibold outline-none cursor-pointer"
        >
          <option value="ALL" className="bg-white text-text-primary">All Statuses</option>
          <option value="COMPLETED" className="bg-white text-text-primary">Completed</option>
          <option value="IN_PROGRESS" className="bg-white text-text-primary">Generating</option>
          <option value="NOT_STARTED" className="bg-white text-text-primary">Not Started</option>
        </select>
      </div>

      {/* Sort By */}
      <div className="flex items-center gap-1.5 bg-surface-muted border border-border-subtle rounded-xl px-3 py-2 text-xs font-display font-medium text-text-secondary">
        <ArrowUpDown className="w-3.5 h-3.5 text-text-muted" />
        <span>Sort:</span>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-transparent text-text-primary font-semibold outline-none cursor-pointer"
        >
          <option value="newest" className="bg-white text-text-primary">Newest First</option>
          <option value="oldest" className="bg-white text-text-primary">Oldest First</option>
          <option value="updated" className="bg-white text-text-primary">Recently Updated</option>
          <option value="alphabetical" className="bg-white text-text-primary">Alphabetical</option>
        </select>
      </div>
    </div>
  );
};
