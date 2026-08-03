"use client";

import React from "react";
import { Compass } from "lucide-react";

interface EmptyStateProps {
  onGenerateClick?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onGenerateClick }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-slate-900/50 border border-slate-800 rounded-2xl text-center">
      <div className="w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
        <Compass className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-slate-100">No Roadmap Loaded</h3>
      <p className="text-sm text-slate-400 max-w-sm mt-1 mb-6">
        Generate a personalized AI learning roadmap or select an existing one to view.
      </p>
      {onGenerateClick && (
        <button
          onClick={onGenerateClick}
          className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-cyan-500/20"
        >
          Generate Roadmap
        </button>
      )}
    </div>
  );
};
