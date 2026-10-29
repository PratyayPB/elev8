"use client";

import React from "react";
import Link from "next/link";
import { FileUp, Sparkles, LayoutTemplate } from "lucide-react";

export function EmptyWorkspace() {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-dashboard-card border border-dashboard-cardBorder border-dashed rounded-2xl text-center my-8 shadow-sm">
      <div className="p-4 bg-surface-muted rounded-full mb-4 text-text-primary">
        <FileUp className="w-8 h-8 text-text-primary" />
      </div>
      <h3 className="text-xl font-display font-bold text-text-primary mb-2">No Resume Assessments Yet</h3>
      <p className="text-sm font-sans text-text-secondary max-w-md mb-6">
        Upload your first resume PDF to receive instant AI scoring, ATS keyword density audits, and section-by-section improvements.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/dashboard/resumes/new"
          className="px-5 py-2.5 bg-text-primary text-white dark:text-brand-primary-900 font-display font-bold text-sm rounded-xl hover:bg-black/85 dark:hover:bg-brand-secondary-200 transition-all inline-flex items-center space-x-2 shadow-sm active:scale-[0.98]"
        >
          <Sparkles className="w-4 h-4 text-dashboard-metricHighlight" />
          <span>Upload First Resume</span>
        </Link>
        <Link
          href="/dashboard/resumes/builder"
          className="px-5 py-2.5 border border-border-subtle bg-surface-muted font-display font-bold text-sm rounded-xl hover:bg-surface-elevated transition-all inline-flex items-center space-x-2 text-text-primary active:scale-[0.98]"
        >
          <LayoutTemplate className="w-4 h-4" />
          <span>Explore Resume Builder</span>
        </Link>
      </div>
    </div>
  );
}
