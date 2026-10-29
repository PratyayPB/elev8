"use client";

import React from "react";
import { ArrowUpDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterPanelProps {
  sort: string;
  onSortChange: (val: any) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  sort,
  onSortChange,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Select value={sort} onValueChange={onSortChange}>
        <SelectTrigger className="w-[180px] h-9 bg-surface-muted hover:bg-surface-subtle border-border-subtle rounded-xl px-3 text-xs font-display font-medium text-text-primary dark:text-foreground focus:ring-1 focus:ring-text-primary focus:border-text-primary transition-all">
          <div className="flex items-center gap-1.5 text-text-secondary dark:text-text-muted">
            <ArrowUpDown className="w-3.5 h-3.5 text-text-muted" />
            <span className="text-text-muted">Sort:</span>
            <SelectValue placeholder="Sort by" />
          </div>
        </SelectTrigger>
        <SelectContent className="bg-surface dark:bg-surface-subtle border-border-subtle shadow-md rounded-xl p-1 z-50">
          <SelectItem value="newest">
            Newest First
          </SelectItem>
          <SelectItem value="oldest">
            Oldest First
          </SelectItem>
          <SelectItem value="updated">
            Recently Updated
          </SelectItem>
          <SelectItem value="alphabetical">
            Alphabetical
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
