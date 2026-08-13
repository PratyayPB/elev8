"use client";

import React from "react";
import { RefreshCw, Lock, FileText } from "lucide-react";

interface ReadOnlyToolbarProps {
  title: string;
  role: string;
  onDownloadPdf?: () => void;
  onRegenerate?: () => void;
}

export const ReadOnlyToolbar: React.FC<ReadOnlyToolbarProps> = ({
  title,
  role,
  onDownloadPdf,
  onRegenerate,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius)] p-4 mb-4 text-text-primary shadow-sm">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-display font-bold text-text-primary tracking-tight">{title}</h2>
          <span className="inline-flex items-center gap-1 text-[11px] font-display font-semibold bg-surface-muted text-text-secondary px-2.5 py-0.5 rounded-full border border-border-subtle">
            <Lock className="w-3 h-3 text-text-muted" /> Read Only
          </span>
        </div>
        <p className="text-xs font-sans text-text-secondary mt-1">Target Role: {role}</p>
      </div>

      <div className="flex items-center gap-2">
        {onDownloadPdf && (
          <button
            onClick={onDownloadPdf}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-display font-semibold bg-surface-muted hover:bg-border-subtle text-text-primary rounded-xl transition-colors border border-border-subtle"
          >
            <FileText className="w-3.5 h-3.5 text-text-secondary" /> Export PDF
          </button>
        )}

        {onRegenerate && (
          <button
            onClick={onRegenerate}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-display font-semibold bg-text-primary hover:bg-black/80 text-white rounded-xl transition-all shadow-sm"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Regenerate
          </button>
        )}
      </div>
    </div>
  );
};
