import React from "react";
import { RoadmapRequest } from "../../types";
import {
  CheckCircle,
  Code,
  ShieldCheck,
  Sparkles,
  FastForward,
} from "lucide-react";

interface SummaryProps {
  request: RoadmapRequest | null;
  error: string | null;
}

export function Summary({ request, error }: SummaryProps) {
  if (error || !request) {
    return (
      <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-sans">
        Failed to build valid RoadmapRequest: {error || "Invalid form state."}
      </div>
    );
  }

  const isProfilePersonalized =
    !request.personalization.skipped &&
    Boolean(request.personalization.profileContext);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-border-subtle pb-4">
        <div>
          <h3 className="text-base font-display font-bold text-text-primary flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Roadmap Request Ready
          </h3>
          <p className="text-xs font-sans text-text-secondary mt-0.5">
            Input parameters ready. Validated payload compiled successfully.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {isProfilePersonalized ? (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-display font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Personalized with Profile
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-display font-semibold bg-surface-muted text-text-secondary border border-border-subtle">
              <FastForward className="w-3.5 h-3.5 text-text-muted" />
              Personalization Skipped
            </span>
          )}
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-display font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            Validated
          </span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-surface-muted p-4 rounded-xl border border-border-subtle">
          <span className="text-[11px] font-display font-semibold text-text-secondary uppercase tracking-wider block">
            Target Role
          </span>
          <span className="text-sm font-display font-bold text-text-primary mt-1 block truncate">
            {request.role}
          </span>
        </div>

        <div className="bg-surface-muted p-4 rounded-xl border border-border-subtle">
          <span className="text-[11px] font-display font-semibold text-text-secondary uppercase tracking-wider block">
            Experience Level
          </span>
          <span className="text-sm font-display font-bold text-text-primary mt-1 block">
            {request.experienceLevel}
          </span>
        </div>
      </div>

      {/* Payload Inspection */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-display font-semibold text-text-primary flex items-center gap-1">
            <Code className="w-3.5 h-3.5" />
            Compiled RoadmapRequest Payload (JSON)
          </span>
          <span className="text-[11px] font-sans text-text-muted">
            Ready for Roadmap Generator
          </span>
        </div>
        <pre className="bg-dashboard-card border border-border-subtle text-text-primary font-mono text-xs p-4 rounded-xl overflow-x-auto max-h-60 shadow-inner">
          {JSON.stringify(request, null, 2)}
        </pre>
      </div>
    </div>
  );
}
