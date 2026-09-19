"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, LayoutDashboard } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function InterviewWorkspaceError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("[InterviewWorkspaceError] Error boundary caught error:", error);
  }, [error]);

  const isAuthError =
    error.message?.toLowerCase().includes("unauthorized") ||
    error.message?.toLowerCase().includes("access denied");

  const displayMessage = isAuthError
    ? "You don't have permission to view or manage these interviews."
    : error.message || "An unexpected error occurred while loading your interview workspace. Please try again.";

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] p-6 text-center">
      <div className="w-full max-w-md bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius-lg)] p-8 shadow-sm space-y-5">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900 mx-auto">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <div>
          <h2 className="text-xl font-display font-bold text-text-primary">
            {isAuthError ? "Access Denied" : "Something Went Wrong"}
          </h2>
          <p className="text-sm font-sans text-text-secondary mt-2 leading-relaxed">
            {displayMessage}
          </p>
        </div>

        <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-sans font-medium bg-text-primary text-white dark:text-brand-primary-900 rounded-xl hover:bg-black/80 dark:hover:bg-brand-secondary-200 transition-colors shadow-sm cursor-pointer active:scale-[0.98]"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-sans font-medium bg-surface-muted text-text-primary border border-border-subtle rounded-xl hover:bg-surface-subtle transition-colors cursor-pointer"
          >
            <LayoutDashboard className="w-4 h-4" />
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
