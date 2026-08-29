"use client";

import { PredefinedInterviewSummary, PredefinedDifficulty } from "../../types/predefined-interview";
import { INTERVIEW_CATALOG_TYPES } from "../../data/interview-catalog-types";
import { INTERVIEW_CATALOG_DIFFICULTIES } from "../../data/interview-catalog-difficulties";
import { Loader2, Briefcase, BarChart, Clock, Layers } from "lucide-react";

interface InterviewPreviewProps {
  interview: PredefinedInterviewSummary;
  difficulty: PredefinedDifficulty;
  isStarting: boolean;
  onStart: () => void;
}

export function InterviewPreview({ interview, difficulty, isStarting, onStart }: InterviewPreviewProps) {
  const typeInfo = INTERVIEW_CATALOG_TYPES[interview.type];
  const difficultyInfo = INTERVIEW_CATALOG_DIFFICULTIES[difficulty];

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius-lg)] overflow-hidden shadow-sm">
        {/* Header */}
        <div className="bg-surface-muted p-8 border-b border-border-subtle relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-display font-semibold bg-text-primary text-white dark:text-brand-primary-900">
                {typeInfo?.label || interview.type}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-display font-semibold bg-dashboard-metricHighlight text-black border border-dashboard-metricHighlight/50">
                {difficultyInfo?.label || difficulty}
              </span>
            </div>
            
            <h2 className="text-3xl font-display font-bold text-text-primary mb-2">{interview.role}</h2>
            <p className="text-text-secondary text-base font-sans leading-relaxed">{interview.description}</p>
          </div>
        </div>

        {/* Body Stats */}
        <div className="p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-text-muted mb-1">
                <Briefcase size={16} />
                <span className="text-[10px] uppercase tracking-wider font-display font-semibold">Role</span>
              </div>
              <span className="text-text-primary font-display font-bold text-sm">{interview.role}</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-text-muted mb-1">
                <Layers size={16} />
                <span className="text-[10px] uppercase tracking-wider font-display font-semibold">Type</span>
              </div>
              <span className="text-text-primary font-display font-bold text-sm">{typeInfo?.label || interview.type}</span>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-text-muted mb-1">
                <BarChart size={16} />
                <span className="text-[10px] uppercase tracking-wider font-display font-semibold">Difficulty</span>
              </div>
              <span className="text-text-primary font-display font-bold text-sm">{difficultyInfo?.label || difficulty}</span>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-text-muted mb-1">
                <Clock size={16} />
                <span className="text-[10px] uppercase tracking-wider font-display font-semibold">Scope</span>
              </div>
              <span className="text-text-primary font-display font-bold text-sm">{difficultyInfo?.questionCount} Questions</span>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onStart}
              disabled={isStarting}
              className="px-8 py-3 rounded-xl bg-text-primary hover:bg-black/85 dark:hover:bg-brand-secondary-200 text-white font-display font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[180px] active:scale-[0.98] shadow-sm"
            >
              {isStarting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin text-dashboard-metricHighlight" />
                  Creating Session...
                </>
              ) : (
                "Start Interview"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
