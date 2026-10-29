"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ResumeSummary } from "../../types/workspace";
import { FileText, MoreVertical, Eye, RefreshCw, Trash2, Copy, Loader2 } from "lucide-react";

interface ResumeCardProps {
  resume: ResumeSummary;
  onDelete?: (id: string) => void;
  onRescore?: (resume: ResumeSummary) => void;
}

export function ResumeCard({ resume, onDelete, onRescore }: ResumeCardProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isProcessing = resume.status === "PROCESSING";

  const getScoreBadgeColor = (score: number | null) => {
    if (score === null || isProcessing) return "bg-surface-muted text-text-muted border-border-subtle";
    if (score >= 80) return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
    if (score >= 60) return "bg-dashboard-metricHighlight/20 text-text-primary border-dashboard-metricHighlight/30";
    return "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20";
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "PROCESSING":
      case "DRAFT":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            Processing
          </span>
        );
      case "COMPLETED":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            Completed
          </span>
        );
      case "FAILED":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
            Failed
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-surface-muted text-text-muted border border-border-subtle">
            Archived
          </span>
        );
    }
  };

  return (
    <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius)] p-5 shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-surface-muted rounded-xl text-text-primary border border-border-subtle">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold font-display text-text-primary line-clamp-1">{resume.role}</h3>
              <p className="text-xs text-text-secondary">{resume.experienceLevel} Level</p>
            </div>
          </div>
          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1 rounded-lg hover:bg-surface-muted text-text-muted transition-colors"
            >
              <MoreVertical className="w-4 h-4" />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-1 w-44 bg-dashboard-card border border-dashboard-cardBorder rounded-xl shadow-lg py-1 z-20 text-xs text-text-primary">
                <Link
                  href={`/dashboard/resumes/${resume.id}`}
                  className="flex items-center px-3 py-2 hover:bg-surface-muted transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <Eye className="w-3.5 h-3.5 mr-2" /> View Report
                </Link>
                {onRescore && (
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      onRescore(resume);
                    }}
                    className="w-full text-left flex items-center px-3 py-2 hover:bg-surface-muted transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5 mr-2" /> Re-score Resume
                  </button>
                )}
                <Link
                  href={`/dashboard/resumes?role=${encodeURIComponent(resume.role)}`}
                  className="flex items-center px-3 py-2 hover:bg-surface-muted transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <Copy className="w-3.5 h-3.5 mr-2" /> Upload Similar
                </Link>
                {onDelete && (
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      onDelete(resume.id);
                    }}
                    className="w-full text-left flex items-center px-3 py-2 text-rose-600 hover:bg-rose-500/10 border-t border-border-subtle transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5 mr-2" /> Delete
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          {getStatusBadge(resume.status)}
          <span className="text-xs text-text-muted font-sans">
            {new Date(resume.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="pt-3 border-t border-border-subtle flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase text-text-muted block">Overall</span>
          <span className={`inline-block px-2 py-0.5 text-xs font-bold rounded-lg border ${getScoreBadgeColor(resume.overallScore)}`}>
            {isProcessing ? (
              <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                <Loader2 className="w-3 h-3 animate-spin" /> Scoring...
              </span>
            ) : resume.overallScore !== null ? (
              `${resume.overallScore}/100`
            ) : (
              "N/A"
            )}
          </span>
        </div>

        <div>
          <span className="text-[10px] font-bold uppercase text-text-muted block text-right">ATS Match</span>
          <span className={`inline-block px-2 py-0.5 text-xs font-bold rounded-lg border ${getScoreBadgeColor(resume.atsScore)}`}>
            {isProcessing ? (
              <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                <Loader2 className="w-3 h-3 animate-spin" /> Analyzing...
              </span>
            ) : resume.atsScore !== null ? (
              `${resume.atsScore}%`
            ) : (
              "N/A"
            )}
          </span>
        </div>

        <Link
          href={`/dashboard/resumes/${resume.id}`}
          className="px-3.5 py-1.5 text-xs font-semibold text-text-primary bg-surface-muted hover:bg-border-subtle border border-border-subtle rounded-xl transition-colors"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
