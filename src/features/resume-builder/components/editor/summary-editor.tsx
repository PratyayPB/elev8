import React from "react";

interface SummaryEditorProps {
  data: string;
  onChange: (text: string) => void;
}

export function SummaryEditor({ data, onChange }: SummaryEditorProps) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold text-text-primary">
        Professional Summary
      </label>
      <textarea
        value={data || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write a brief professional summary highlighting your career goals, key accomplishments, and areas of expertise..."
        rows={6}
        className="w-full px-4 py-3 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors resize-y min-h-[120px]"
      />
      <div className="text-right text-[10px] text-text-secondary">
        {(data || "").length} characters
      </div>
    </div>
  );
}
