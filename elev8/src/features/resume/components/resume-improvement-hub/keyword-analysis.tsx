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
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">ATS & Keyword Audit</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Applicant Tracking System keyword match density for target role "{artifact.metadata.role}".
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700/50 px-4 py-2 rounded-2xl border border-gray-200 dark:border-gray-700">
          <div className="text-right">
            <p className="text-[10px] font-bold text-gray-400 uppercase">Coverage</p>
            <p className="text-lg font-black text-blue-600 dark:text-blue-400">{keywords.coveragePercentage}%</p>
          </div>
          <div className="w-px h-8 bg-gray-200 dark:bg-gray-600" />
          <div className="text-right">
            <p className="text-[10px] font-bold text-gray-400 uppercase">ATS Score</p>
            <p className="text-lg font-black text-emerald-600 dark:text-emerald-400">{atsScore}/100</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Present Keywords */}
        <div className="bg-emerald-50/40 dark:bg-emerald-950/20 p-5 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Present Keywords ({keywords.presentKeywords.length})
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {keywords.presentKeywords.map((kw, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-white dark:bg-gray-800 border border-emerald-200 dark:border-emerald-800/60 rounded-lg text-xs font-semibold text-emerald-800 dark:text-emerald-300"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Missing Keywords */}
        <div className="bg-rose-50/40 dark:bg-rose-950/20 p-5 rounded-2xl border border-rose-100 dark:border-rose-900/30 space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-rose-700 dark:text-rose-300 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-rose-600" /> Missing ATS Keywords ({keywords.missingKeywords.length})
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {keywords.missingKeywords.length === 0 ? (
              <p className="text-xs text-rose-600 font-medium">No critical missing keywords detected!</p>
            ) : (
              keywords.missingKeywords.map((kw, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-white dark:bg-gray-800 border border-rose-200 dark:border-rose-800/60 rounded-lg text-xs font-semibold text-rose-700 dark:text-rose-300"
                >
                  + {kw}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Recommended Skills */}
        <div className="bg-purple-50/40 dark:bg-purple-950/20 p-5 rounded-2xl border border-purple-100 dark:border-purple-900/30 space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-purple-700 dark:text-purple-300 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-purple-600" /> High-Impact Additions
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {keywords.recommendedKeywords.map((kw, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-white dark:bg-gray-800 border border-purple-200 dark:border-purple-800/60 rounded-lg text-xs font-semibold text-purple-800 dark:text-purple-300"
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
