"use client";

import { ResumeReport } from "../../types";
import { ShieldCheck, CheckCircle2, XCircle, HeartPulse } from "lucide-react";

interface ResumeHealthProps {
  report: ResumeReport;
}

export function ResumeHealthComponent({ report }: ResumeHealthProps) {
  const { health } = report;

  const getHealthBadge = (status: string) => {
    switch (status) {
      case "Excellent":
        return "bg-dashboard-metricHighlight text-text-primary border-border-strong";
      case "Good":
        return "bg-accent-cream text-text-primary border-border-subtle";
      case "Needs Improvement":
        return "bg-surface-muted text-text-secondary border-border-subtle";
      default:
        return "bg-accent-coral/20 text-text-primary border-accent-coral";
    }
  };

  return (
    <div className="bg-dashboard-card rounded-3xl p-6 sm:p-8 border border-dashboard-cardBorder shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-dashboard-metricHighlight/20 text-text-primary border border-dashboard-metricHighlight/30 flex items-center justify-center">
            <HeartPulse className="w-5 h-5 text-text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-display font-black text-text-primary uppercase tracking-wide">Resume Health Summary</h3>
            <p className="text-xs text-text-secondary">
              Evaluated across section completeness, ATS parsing readability, and recruiter impact.
            </p>
          </div>
        </div>

        <span
          className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${getHealthBadge(
            health.status
          )}`}
        >
          {health.status}
        </span>
      </div>

      {/* Progress Bars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-black uppercase tracking-wider">
            <span className="text-text-secondary">Completeness</span>
            <span className="text-text-primary">{health.completeness}%</span>
          </div>
          <div className="w-full bg-surface-muted border border-border-subtle h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-text-primary h-full rounded-full transition-all duration-500"
              style={{ width: `${health.completeness}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-black uppercase tracking-wider">
            <span className="text-text-secondary">ATS Readiness</span>
            <span className="text-text-primary">{health.atsReadiness}%</span>
          </div>
          <div className="w-full bg-surface-muted border border-border-subtle h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-text-primary h-full rounded-full transition-all duration-500"
              style={{ width: `${health.atsReadiness}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-black uppercase tracking-wider">
            <span className="text-text-secondary">Recruiter Readiness</span>
            <span className="text-text-primary">{health.recruiterReadiness}%</span>
          </div>
          <div className="w-full bg-surface-muted border border-border-subtle h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-text-primary h-full rounded-full transition-all duration-500"
              style={{ width: `${health.recruiterReadiness}%` }}
            />
          </div>
        </div>
      </div>

      {/* Strengths & Weaknesses Detailed List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5 border-t border-border-subtle">
        <div className="space-y-3">
          <h4 className="text-[10px] font-black uppercase tracking-wider text-text-primary flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-text-primary" /> Core Strengths
          </h4>
          <ul className="space-y-2">
            {health.topStrengths.map((str, idx) => (
              <li key={idx} className="text-xs font-semibold text-text-secondary flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-dashboard-metricHighlight border border-border-strong mt-1 shrink-0" />
                {str}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-[10px] font-black uppercase tracking-wider text-text-primary flex items-center gap-2">
            <XCircle className="w-4 h-4 text-text-primary" /> Key Weaknesses
          </h4>
          <ul className="space-y-2">
            {health.topWeaknesses.map((wk, idx) => (
              <li key={idx} className="text-xs font-semibold text-text-secondary flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-accent-coral border border-border-strong mt-1 shrink-0" />
                {wk}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
