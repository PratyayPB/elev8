"use client";

import React from "react";
import { Compass } from "lucide-react";

interface EmptyStateProps {
  onGenerateClick?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onGenerateClick }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius-lg)] text-center shadow-sm">
      <div className="w-16 h-16 rounded-full bg-surface-muted text-text-primary flex items-center justify-center mb-4 border border-border-subtle">
        <Compass className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-display font-bold text-text-primary">No Roadmap Loaded</h3>
      <p className="text-sm font-sans text-text-secondary max-w-sm mt-1 mb-6">
        Generate a personalized AI learning roadmap or select an existing one to view.
      </p>
      {onGenerateClick && (
        <button
          onClick={onGenerateClick}
          className="px-6 py-2.5 bg-text-primary hover:bg-black/80 dark:hover:bg-brand-secondary-200 text-white text-sm font-display font-semibold rounded-xl transition-all shadow-sm"
        >
          Generate Roadmap
        </button>
      )}
    </div>
  );
};
