"use client";

import { AlignLeft } from "lucide-react";

interface RoleDescriptionProps {
  value: string;
  onChange: (description: string) => void;
}

export function RoleDescription({ value, onChange }: RoleDescriptionProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-display font-bold text-text-primary flex items-center gap-2">
          <AlignLeft className="w-4 h-4 text-text-primary" />
          Job Description <span className="text-xs font-normal text-text-secondary">(Optional)</span>
        </label>
      </div>
      <div className="relative">
        <textarea
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Paste key job requirements, responsibilities, or target description here to optimize ATS keyword scoring..."
          className="w-full px-4 py-2.5 bg-white border border-border-subtle rounded-xl text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-text-primary/20 focus:border-text-primary transition-all shadow-sm font-sans resize-none"
        />
      </div>
      <p className="text-xs font-sans text-text-secondary">
        Adding job details helps our AI pinpoint specific skills and missing keywords.
      </p>
    </div>
  );
}
