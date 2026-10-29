"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Globe, PlayCircle, RefreshCw, Calendar, HelpCircle, Loader2, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { LibraryGlobalInterview } from "../../types";
import { startGlobalInterviewSessionAction, retryGlobalInterviewAction } from "../../actions/interview-actions";
import { toast } from "sonner";

interface GlobalInterviewCardProps {
  interview: LibraryGlobalInterview;
  onRetried?: () => void;
}

export function GlobalInterviewCard({ interview, onRetried }: GlobalInterviewCardProps) {
  const router = useRouter();
  const [isStarting, setIsStarting] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  const handleStart = async () => {
    setIsStarting(true);
    try {
      const res = await startGlobalInterviewSessionAction(interview.id);
      if (res.success) {
        toast.success("Practice session started");
        router.push(`/dashboard/interviews/${res.data.interviewId}/session`);
      } else {
        toast.error(res.error?.message || "Failed to start interview session");
        setIsStarting(false);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message || "Failed to start interview session");
      } else {
        toast.error("Failed to start interview session");
      }
      setIsStarting(false);
    }
  };

  const handleRetry = async () => {
    setIsRetrying(true);
    try {
      const res = await retryGlobalInterviewAction(interview.id);
      if (res.success) {
        toast.success("Interview generation restarted");
        if (onRetried) onRetried();
        router.refresh();
      } else {
        toast.error(res.error?.message || "Failed to restart generation");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message || "Failed to restart generation");
      } else {
        toast.error("Failed to restart generation");
      }
    } finally {
      setIsRetrying(false);
    }
  };

  const getStatusBadge = () => {
    switch (interview.status) {
      case "ACTIVE":
        return (
          <span className="inline-flex items-center gap-1 text-xs font-display font-semibold bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 rounded-full whitespace-nowrap">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Ready
          </span>
        );
      case "FAILED":
        return (
          <span className="inline-flex items-center gap-1 text-xs font-display font-semibold bg-rose-100 dark:bg-rose-950/40 text-rose-800 dark:text-rose-400 border border-rose-200 dark:border-rose-800 px-2.5 py-0.5 rounded-full whitespace-nowrap">
            <AlertCircle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" /> Failed
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-xs font-display font-medium bg-surface-muted text-text-secondary border border-border-subtle px-2.5 py-0.5 rounded-full whitespace-nowrap">
            {interview.status}
          </span>
        );
    }
  };

  return (
    <div className="bg-dashboard-card rounded-[var(--card-radius)] p-5 border border-dashboard-cardBorder shadow-sm flex flex-col justify-between hover:border-text-primary/30 transition-all">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            {getStatusBadge()}
            <span className="inline-flex items-center gap-1 text-[10px] font-display font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60 px-2 py-0.5 rounded-full whitespace-nowrap">
              <Globe className="w-2.5 h-2.5" /> Global
            </span>
          </div>
        </div>

        <h3 className="text-lg font-display font-bold text-text-primary line-clamp-1 mb-1">
          {interview.role}
        </h3>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-sans text-text-secondary mb-4">
          <span>{interview.experienceLevel}</span>
          {interview.difficulty && (
            <>
              <span>•</span>
              <span className="capitalize">{interview.difficulty.toLowerCase()}</span>
            </>
          )}
          <span>•</span>
          <span>{interview.interviewType}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <HelpCircle className="w-3 h-3 text-text-muted" />
            {interview.questionCount} Qs
          </span>
        </div>

        {/* Primary Action Button */}
        {interview.status === "ACTIVE" && (
          <button
            onClick={handleStart}
            disabled={isStarting}
            className="w-full py-2 bg-text-primary text-white dark:text-brand-primary-900 text-center font-display font-bold text-xs rounded-xl hover:bg-black/85 dark:hover:bg-brand-secondary-200 transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] mb-4 disabled:opacity-50 cursor-pointer"
          >
            {isStarting ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <PlayCircle className="w-3.5 h-3.5 text-dashboard-metricHighlight" />
            )}
            {isStarting ? "Starting Session..." : "Start Interview"}
          </button>
        )}

        {/* Try Again: ONLY shown if user is the creator of this template; hidden entirely for others */}
        {interview.status === "FAILED" && interview.isOwner && (
          <button
            onClick={handleRetry}
            disabled={isRetrying}
            className="w-full py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:hover:bg-rose-950/60 dark:text-rose-400 border border-rose-200 dark:border-rose-900 text-center font-display font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] mb-4 disabled:opacity-50 cursor-pointer"
          >
            {isRetrying ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <RefreshCw className="w-3.5 h-3.5" />
            )}
            {isRetrying ? "Restarting..." : "Generation Failed — Try Again"}
          </button>
        )}
      </div>

      <div className="pt-4 border-t border-border-subtle flex items-center justify-between gap-2 text-xs font-sans text-text-muted">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          {new Date(interview.createdAt).toLocaleDateString()}
        </div>

        {interview.estimatedDuration && (
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{interview.estimatedDuration}</span>
          </div>
        )}
      </div>
    </div>
  );
}
