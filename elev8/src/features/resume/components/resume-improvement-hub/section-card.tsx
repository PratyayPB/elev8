"use client";

import { ChevronDown, ChevronUp, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
import { SectionScore } from "../../types";

interface SectionCardProps {
  title: string;
  scoreData?: SectionScore;
  isExpanded: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
}

export function SectionCard({ title, scoreData, isExpanded, onToggle, children }: SectionCardProps) {
  const score = scoreData?.score || 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden transition-all">
      <button
        type="button"
        onClick={onToggle}
        className="w-full p-5 flex items-center justify-between hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <h4 className="text-base font-bold text-gray-900 dark:text-white">{title}</h4>
          {scoreData && (
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold ${
                score >= 80
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                  : score >= 65
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
                  : "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
              }`}
            >
              Score: {score}/100
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-xs font-semibold text-gray-400">{isExpanded ? "Collapse" : "Expand"}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {isExpanded && (
        <div className="p-5 pt-0 border-t border-gray-100 dark:border-gray-700/50 space-y-4">
          {scoreData && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {/* Strengths */}
              {scoreData.strengths.length > 0 && (
                <div className="bg-emerald-50/50 dark:bg-emerald-950/20 p-3.5 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                  <h5 className="text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 mb-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Section Strengths
                  </h5>
                  <ul className="space-y-1 text-xs text-emerald-700 dark:text-emerald-400">
                    {scoreData.strengths.map((s, i) => (
                      <li key={i}>• {s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Weaknesses */}
              {scoreData.weaknesses.length > 0 && (
                <div className="bg-amber-50/50 dark:bg-amber-950/20 p-3.5 rounded-xl border border-amber-100 dark:border-amber-900/30">
                  <h5 className="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5 mb-2">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" /> Needs Attention
                  </h5>
                  <ul className="space-y-1 text-xs text-amber-700 dark:text-amber-400">
                    {scoreData.weaknesses.map((w, i) => (
                      <li key={i}>• {w}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Recommendations */}
          {scoreData?.recommendations && scoreData.recommendations.length > 0 && (
            <div className="bg-blue-50/50 dark:bg-blue-950/20 p-3.5 rounded-xl border border-blue-100 dark:border-blue-900/30">
              <h5 className="text-xs font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Actionable Recommendations
              </h5>
              <ul className="space-y-1 text-xs text-blue-700 dark:text-blue-400">
                {scoreData.recommendations.map((r, i) => (
                  <li key={i}>• {r}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Render Parsed Content Preview if passed */}
          {children && <div className="pt-2">{children}</div>}
        </div>
      )}
    </div>
  );
}
