"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Brain, AlertCircle } from "lucide-react";
import { AssessmentState } from "../types";

interface AssessmentCtaCardProps {
  state: AssessmentState;
  onStart: () => void;
  isLoading: boolean;
  className?: string;
}

export function AssessmentCtaCard({
  state,
  onStart,
  isLoading,
  className = "",
}: AssessmentCtaCardProps) {
  if (state === "PROFILE_INCOMPLETE") {
    return (
      <div
        className={`rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-8 md:p-12 text-center space-y-6 shadow-sm ${className}`}
      >
        <div className="mx-auto w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
          <AlertCircle className="h-7 w-7" />
        </div>
        <div className="max-w-md mx-auto space-y-2">
          <h3 className="text-xl font-display font-bold text-text-primary">
            Complete Your Profile First
          </h3>
          <p className="text-xs font-sans text-text-secondary">
            Career Assessment requires a 100% completed profile so that the AI can accurately analyze your skills, education, experience, and goals.
          </p>
        </div>
        <div>
          <Link
            href="/dashboard/profile"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-text-primary text-white font-display font-semibold text-xs transition-all hover:bg-black/80 shadow-sm"
          >
            Complete Profile
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-8 md:p-12 text-center space-y-6 shadow-sm relative overflow-hidden ${className}`}
    >
      <div className="mx-auto w-16 h-16 rounded-2xl bg-dashboard-metricHighlight/20 text-black flex items-center justify-center">
        <Brain className="h-8 w-8" />
      </div>
      <div className="max-w-xl mx-auto space-y-2 relative z-10">
        <span className="text-xs font-display font-semibold text-text-secondary uppercase tracking-wider">
          AI Career Intelligence
        </span>
        <h3 className="text-2xl font-display font-bold text-text-primary">
          Generate Your Comprehensive Career Assessment
        </h3>
        <p className="text-xs font-sans text-text-secondary">
          Analyze your complete background against industry standards. Receive an executive synthesis, readiness score, verified strengths, priority growth opportunities, and suggested focus areas.
        </p>
      </div>

      <div className="pt-2 relative z-10">
        <button
          type="button"
          onClick={onStart}
          disabled={isLoading}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-text-primary text-white font-display font-semibold text-sm transition-all hover:bg-black/80 hover:scale-[0.98] disabled:opacity-50 shadow-md"
        >
          <Sparkles className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
          {isLoading ? "Analyzing Career Profile..." : "Start Career Assessment"}
        </button>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-dashboard-metricHighlight/5 to-transparent pointer-events-none" />
    </div>
  );
}
