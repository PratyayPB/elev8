"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface ResumeSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ResumeSearch({ value, onChange }: ResumeSearchProps) {
  return (
    <div className="relative flex-1">
      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-300" />
      <input
        type="text"
        placeholder="Search by role or filename..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-9 pr-8 py-2 text-sm bg-white dark:bg-[#181818] text-text-primary dark:text-zinc-100 placeholder:text-gray-400 dark:placeholder:text-zinc-400 border border-gray-200 dark:border-white/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white/20 transition-colors"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
