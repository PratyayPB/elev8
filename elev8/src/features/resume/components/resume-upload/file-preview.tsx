"use client";

import { FileText, Trash2, CheckCircle2 } from "lucide-react";

interface FilePreviewProps {
  file: File;
  onRemove: () => void;
}

export function FilePreview({ file, onRemove }: FilePreviewProps) {
  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="p-4 bg-surface-muted rounded-2xl border border-border-subtle shadow-sm flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="w-12 h-12 rounded-xl bg-white border border-border-subtle text-rose-600 flex items-center justify-center shrink-0">
          <FileText className="w-6 h-6" />
        </div>
        <div className="overflow-hidden">
          <div className="flex items-center gap-2">
            <h4 className="font-display font-bold text-sm text-text-primary truncate">
              {file.name}
            </h4>
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          </div>
          <p className="text-xs font-sans text-text-secondary mt-0.5">
            {formatSize(file.size)} • PDF Document
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onRemove}
        className="p-2 text-text-muted hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors shrink-0 border border-transparent hover:border-rose-100"
        title="Remove file"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}
