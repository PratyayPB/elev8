"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, ArrowLeft } from "lucide-react";
import { BUILDER_ROUTES } from "@/features/resume-builder/constants/builder-routes";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ResumeEditorError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("[ResumeEditorError] Error boundary caught error:", error);
  }, [error]);

  const isAuthError =
    error.message?.toLowerCase().includes("unauthorized") ||
    error.message?.toLowerCase().includes("permission") ||
    error.message?.toLowerCase().includes("access denied");

  const isNotFoundError = error.message?.toLowerCase().includes("not found");

  const title = isNotFoundError
    ? "Resume Not Found"
    : isAuthError
    ? "Access Denied"
    : "Unable to Load Resume";

  const displayMessage = isNotFoundError
    ? "The resume you are trying to edit does not exist or has been deleted."
    : isAuthError
    ? "You do not have permission to view or edit this resume."
    : error.message || "An unexpected error occurred while loading your resume editor.";

  return (
    <div className="max-w-md mx-auto my-20 p-8 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card text-center shadow-sm">
      <div className="h-12 w-12 rounded-full bg-red-50 dark:bg-red-950/40 flex items-center justify-center text-red-600 dark:text-red-400 mx-auto mb-4 border border-red-200 dark:border-red-900">
        <AlertCircle className="h-6 w-6" />
      </div>
      <h2 className="text-lg font-display font-bold text-text-primary">
        {title}
      </h2>
      <p className="text-sm font-sans text-text-secondary mt-2">
        {displayMessage}
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {!isNotFoundError && !isAuthError && (
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-text-primary text-white dark:text-brand-primary-900 text-xs font-semibold hover:bg-black/80 dark:hover:bg-brand-secondary-200 transition-all cursor-pointer"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Try Again
          </button>
        )}
        <Link
          href={BUILDER_ROUTES.HOME}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-muted hover:bg-border-subtle text-text-primary text-xs font-semibold border border-border transition-all cursor-pointer"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Resumes
        </Link>
      </div>
    </div>
  );
}
