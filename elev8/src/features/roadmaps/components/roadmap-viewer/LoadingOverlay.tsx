"use client";

import React from "react";
import { Loader2 } from "lucide-react";

interface LoadingOverlayProps {
  status: string;
  progress: number;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ status, progress }) => {
  return (
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius-lg)] p-8 max-w-md w-full shadow-xl space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface-muted text-text-primary border border-border-subtle">
          <Loader2 className="w-6 h-6 animate-spin text-text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-display font-bold text-text-primary">Generating Your Roadmap</h3>
          <p className="text-sm font-sans text-text-secondary mt-1">{status || "Processing..."}</p>
        </div>
        <div className="w-full bg-surface-muted rounded-full h-2.5 overflow-hidden border border-border-subtle">
          <div
            className="bg-text-primary h-full transition-all duration-300 ease-out rounded-full"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>
        <div className="text-xs font-sans text-text-muted">{progress}% complete</div>
      </div>
    </div>
  );
};
