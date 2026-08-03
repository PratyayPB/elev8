"use client";

import React, { useState } from "react";
import { Download, RefreshCw, Lock, FileText, Image as ImageIcon } from "lucide-react";

interface ReadOnlyToolbarProps {
  title: string;
  role: string;
  onDownloadSvg?: () => void;
  onDownloadPdf?: () => void;
  onRegenerate?: () => void;
}

export const ReadOnlyToolbar: React.FC<ReadOnlyToolbarProps> = ({
  title,
  role,
  onDownloadSvg,
  onDownloadPdf,
  onRegenerate,
}) => {
  const [downloadOpen, setDownloadOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4 mb-4 text-slate-100">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-slate-100">{title}</h2>
          <span className="inline-flex items-center gap-1 text-[11px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md border border-slate-700">
            <Lock className="w-3 h-3" /> Read Only
          </span>
        </div>
        <p className="text-xs text-slate-400">Target Role: {role}</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          <button
            onClick={() => setDownloadOpen(!downloadOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors border border-slate-700"
          >
            <Download className="w-3.5 h-3.5" /> Download / Export
          </button>

          {downloadOpen && (
            <div
              className="absolute right-0 top-9 w-40 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl z-50 py-1 text-xs text-slate-300 backdrop-blur-md"
              onMouseLeave={() => setDownloadOpen(false)}
            >
              {onDownloadSvg && (
                <button
                  onClick={() => {
                    setDownloadOpen(false);
                    onDownloadSvg();
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 hover:bg-slate-800 text-slate-200 text-left"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-cyan-400" /> Export SVG
                </button>
              )}
              {onDownloadPdf && (
                <button
                  onClick={() => {
                    setDownloadOpen(false);
                    onDownloadPdf();
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 hover:bg-slate-800 text-slate-200 text-left"
                >
                  <FileText className="w-3.5 h-3.5 text-rose-400" /> Export PDF
                </button>
              )}
            </div>
          )}
        </div>

        {onRegenerate && (
          <button
            onClick={onRegenerate}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors shadow-sm"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Regenerate
          </button>
        )}
      </div>
    </div>
  );
};
