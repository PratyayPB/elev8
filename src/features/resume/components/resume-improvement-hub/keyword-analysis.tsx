"use client";

import { ResumeReport } from "../../types";
import { Search, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

interface KeywordAnalysisProps {
  report: ResumeReport;
}

export function KeywordAnalysisComponent({ report }: KeywordAnalysisProps) {
  const { keywords, artifact } = report;
  const atsScore = artifact.overallAssessment.atsScore || 0;

  return (
    <div className="bg-dashboard-card rounded-3xl p-6 sm:p-8 border border-dashboard-cardBorder shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
            <Search className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-display font-black text-text-primary uppercase tracking-wide">ATS & Keyword Audit</h3>
            <p className="text-xs text-text-secondary">
              Applicant Tracking System keyword match density for target role &ldquo;{artifact.metadata.role}&rdquo;.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-surface-muted px-4 py-2 rounded-2xl border border-border-subtle">
          <div className="text-right">
            <p className="text-[10px] font-black text-text-muted uppercase tracking-wider">Coverage</p>
            <p className="text-lg font-display font-black text-text-primary">{keywords.coveragePercentage}%</p>
          </div>
          <div className="w-px h-8 bg-border-subtle" />
          <div className="text-right">
            <p className="text-[10px] font-black text-text-muted uppercase tracking-wider">ATS Score</p>
            <p className="text-lg font-display font-black text-text-primary">{atsScore}/100</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Present Keywords */}
        <div className="bg-surface-muted p-5 rounded-2xl border border-border-subtle space-y-3">
          <h4 className="text-[10px] font-black uppercase tracking-wider text-text-primary flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Present Keywords ({keywords.presentKeywords.length})
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {keywords.presentKeywords.map((kw, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-dashboard-card border border-dashboard-cardBorder rounded-lg text-xs font-semibold text-text-primary"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Missing Keywords */}
        <div className="bg-rose-500/10 p-5 rounded-2xl border border-rose-500/20 space-y-3">
          <h4 className="text-[10px] font-black uppercase tracking-wider text-text-primary flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-rose-500" /> Missing ATS Keywords ({keywords.missingKeywords.length})
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {keywords.missingKeywords.length === 0 ? (
              <p className="text-xs text-text-secondary font-medium">No critical missing keywords detected!</p>
            ) : (
              keywords.missingKeywords.map((kw, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-dashboard-card border border-dashboard-cardBorder rounded-lg text-xs font-semibold text-text-primary"
                >
                  + {kw}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Recommended Skills */}
        <div className="bg-amber-500/10 p-5 rounded-2xl border border-amber-500/20 space-y-3">
          <h4 className="text-[10px] font-black uppercase tracking-wider text-text-primary flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" /> High-Impact Additions
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {keywords.recommendedKeywords.map((kw, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-dashboard-card border border-dashboard-cardBorder rounded-lg text-xs font-semibold text-text-primary"
              >
                ★ {kw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
