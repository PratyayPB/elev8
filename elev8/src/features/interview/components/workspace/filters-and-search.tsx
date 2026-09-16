"use client";

import React from "react";
import { Search, ArrowUpDown, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FiltersAndSearchProps {
  search: string;
  setSearch: (v: string) => void;
  difficultyFilter: string;
  setDifficultyFilter: (v: string) => void;
  sortOption: string;
  setSortOption: (v: string) => void;
}

export function FiltersAndSearch({
  search,
  setSearch,
  difficultyFilter,
  setDifficultyFilter,
  sortOption,
  setSortOption,
}: FiltersAndSearchProps) {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-dashboard-card p-4 rounded-xl border border-dashboard-cardBorder shadow-sm">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search by role or type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 bg-surface-muted border border-border-subtle rounded-xl text-sm font-sans text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-text-primary/10 focus:border-text-primary transition-all"
        />
      </div>

      {/* Filters & Sorting Controls */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Difficulty Filter */}
        <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
          <SelectTrigger className="w-[185px] h-9 bg-surface-muted hover:bg-surface-subtle border-border-subtle rounded-xl px-3 text-xs font-display font-medium text-text-primary dark:text-foreground focus:ring-1 focus:ring-text-primary focus:border-text-primary transition-all">
            <div className="flex items-center gap-1.5 text-text-secondary dark:text-text-muted truncate">
              <SlidersHorizontal className="w-3.5 h-3.5 text-text-muted shrink-0" />
              <span className="text-text-muted shrink-0">Difficulty:</span>
              <SelectValue placeholder="All Difficulties" />
            </div>
          </SelectTrigger>
          <SelectContent className="bg-surface dark:bg-surface-subtle border-border-subtle shadow-md rounded-xl p-1 z-50">
            <SelectItem value="ALL">All Difficulties</SelectItem>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Hard">Hard</SelectItem>
          </SelectContent>
        </Select>

        {/* Sorting */}
        <Select value={sortOption} onValueChange={setSortOption}>
          <SelectTrigger className="w-[185px] h-9 bg-surface-muted hover:bg-surface-subtle border-border-subtle rounded-xl px-3 text-xs font-display font-medium text-text-primary dark:text-foreground focus:ring-1 focus:ring-text-primary focus:border-text-primary transition-all">
            <div className="flex items-center gap-1.5 text-text-secondary dark:text-text-muted truncate">
              <ArrowUpDown className="w-3.5 h-3.5 text-text-muted shrink-0" />
              <span className="text-text-muted shrink-0">Sort:</span>
              <SelectValue placeholder="Sort by" />
            </div>
          </SelectTrigger>
          <SelectContent className="bg-surface dark:bg-surface-subtle border-border-subtle shadow-md rounded-xl p-1 z-50">
            <SelectItem value="NEWEST">Newest First</SelectItem>
            <SelectItem value="OLDEST">Oldest First</SelectItem>
            <SelectItem value="HIGHEST_SCORE">Highest Score</SelectItem>
            <SelectItem value="LOWEST_SCORE">Lowest Score</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
