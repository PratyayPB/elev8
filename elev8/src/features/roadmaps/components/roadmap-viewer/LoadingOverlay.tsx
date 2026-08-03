"use client";

import React from "react";
import { Loader2 } from "lucide-react";

interface LoadingOverlayProps {
  status: string;
  progress: number;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ status, progress }) => {
  return (
    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-md w-full shadow-2xl space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-400">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-100">Generating Your Roadmap</h3>
          <p className="text-sm text-slate-400 mt-1">{status || "Processing..."}</p>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>
        <div className="text-xs text-slate-500">{progress}% complete</div>
      </div>
    </div>
  );
};
