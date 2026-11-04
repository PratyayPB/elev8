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
    <div className="bg-dashboard-card rounded-3xl border border-dashboard-cardBorder shadow-sm overflow-hidden transition-all">
      <button
        type="button"
        onClick={onToggle}
        className="w-full p-5 flex items-center justify-between hover:bg-surface-muted transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <h4 className="text-base font-display font-black text-text-primary uppercase tracking-wide">{title}</h4>
          {scoreData && (
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-black border uppercase tracking-wider ${
                score >= 80
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                  : score >= 65
                  ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                  : "bg-surface-muted text-text-secondary border-border-subtle"
              }`}
            >
              Score: {score}/100
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 text-text-secondary">
          <span className="text-[10px] font-black uppercase tracking-wider text-text-muted">{isExpanded ? "Collapse" : "Expand"}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4 text-text-primary" /> : <ChevronDown className="w-4 h-4 text-text-primary" />}
        </div>
      </button>

      {isExpanded && (
        <div className="p-5 pt-0 border-t border-border-subtle/50 space-y-4">
          {scoreData && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {/* Strengths */}
              {scoreData.strengths.length > 0 && (
                <div className="bg-surface-muted p-3.5 rounded-2xl border border-border-subtle">
                  <h5 className="text-[10px] font-black text-text-primary flex items-center gap-1.5 mb-2 uppercase tracking-wider">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Section Strengths
                  </h5>
                  <ul className="space-y-1.5 text-xs text-text-secondary font-medium leading-relaxed">
                    {scoreData.strengths.map((s, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="shrink-0 font-bold">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Weaknesses */}
              {scoreData.weaknesses.length > 0 && (
                <div className="bg-rose-500/10 p-3.5 rounded-2xl border border-rose-500/20">
                  <h5 className="text-[10px] font-black text-text-primary flex items-center gap-1.5 mb-2 uppercase tracking-wider">
                    <AlertCircle className="w-3.5 h-3.5 text-rose-500" /> Needs Attention
                  </h5>
                  <ul className="space-y-1.5 text-xs text-text-secondary font-medium leading-relaxed">
                    {scoreData.weaknesses.map((w, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="shrink-0 font-bold text-text-primary">•</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Recommendations */}
          {scoreData?.recommendations && scoreData.recommendations.length > 0 && (
            <div className="bg-primary/5 p-3.5 rounded-2xl border border-primary/10">
              <h5 className="text-[10px] font-black text-text-primary flex items-center gap-1.5 mb-2 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-primary" /> Actionable Recommendations
              </h5>
              <ul className="space-y-1.5 text-xs text-text-secondary font-medium leading-relaxed">
                {scoreData.recommendations.map((r, i) => (
                  <li key={i} className="flex items-start gap-1">
                    <span className="shrink-0 font-bold text-text-primary">•</span>
                    <span>{r}</span>
                  </li>
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
