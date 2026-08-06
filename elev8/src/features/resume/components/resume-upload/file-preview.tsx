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
    <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
          <FileText className="w-6 h-6" />
        </div>
        <div className="overflow-hidden">
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-sm text-gray-900 dark:text-white truncate">
              {file.name}
            </h4>
            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {formatSize(file.size)} • PDF Document
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onRemove}
        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition-colors shrink-0"
        title="Remove file"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}
