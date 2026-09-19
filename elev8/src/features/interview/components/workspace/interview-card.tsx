"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { InterviewSession, InterviewStatus } from "@prisma/client";
import { PlayCircle, Eye, RefreshCw, Trash2, Calendar, HelpCircle, Loader2 } from "lucide-react";
import { deleteInterview } from "../../actions/workspace-actions";
import { retryAssessmentAction } from "../../actions/session-actions";
import { retryInterviewGenerationAction } from "../../actions/interview-actions";
import { toast } from "sonner";

interface InterviewCardProps {
  interview: InterviewSession;
  onDeleted?: () => void;
}

export function InterviewCard({ interview, onDeleted }: InterviewCardProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetryAssessment = async () => {
    setIsRetrying(true);
    try {
      const res = await retryAssessmentAction(interview.id);
      if (res.success) {
        toast.success("Assessment generation restarted");
        router.refresh();
      } else {
        toast.error(res.error?.message || "Failed to restart assessment");
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast.error(e.message || "Failed to restart assessment");
      } else {
        toast.error("Failed to restart assessment");
      }
    } finally {
      setIsRetrying(false);
    }
  };

  const handleRetryGeneration = async () => {
    setIsRetrying(true);
    try {
      const res = await retryInterviewGenerationAction(interview.id);
      if (res.success) {
        toast.success("Interview generation restarted");
        router.refresh();
      } else {
        toast.error(res.error?.message || "Failed to restart generation");
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast.error(e.message || "Failed to restart generation");
      } else {
        toast.error("Failed to restart generation");
      }
    } finally {
      setIsRetrying(false);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const res = await deleteInterview(interview.id);
      if (res.success) {
        toast.success("Interview deleted successfully");
        if (onDeleted) onDeleted();
      } else {
        toast.error(res.error?.message || "Failed to delete interview");
      }
    } catch (e) {
      toast.error("Failed to delete interview");
    } finally {
      setIsDeleting(false);
    }
  };

  const getStatusBadge = () => {
    switch (interview.status) {
      case InterviewStatus.IN_PROGRESS:
        return <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-200 dark:border-blue-800 text-xs font-display font-semibold rounded-full">In Progress</span>;
      case InterviewStatus.COMPLETED:
        if (interview.overallScore === null || interview.overallScore === undefined) {
          return <span className="px-2.5 py-0.5 bg-amber-100 text-amber-800 border border-amber-200 text-xs font-display font-semibold rounded-full animate-pulse">Assessing...</span>;
        }
        return <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-display font-semibold rounded-full">Completed</span>;
      case "ASSESSMENT_FAILED" as any:
        return <span className="px-2.5 py-0.5 bg-rose-100 text-rose-800 border border-rose-200 text-xs font-display font-semibold rounded-full">Assessment Failed</span>;
      default:
        return <span className="px-2.5 py-0.5 bg-surface-muted text-text-secondary border border-border-subtle text-xs font-display font-semibold rounded-full">{interview.status.replace("_", " ")}</span>;
    }
  };

  return (
    <div className="bg-dashboard-card rounded-[var(--card-radius)] p-5 border border-dashboard-cardBorder shadow-sm flex flex-col justify-between hover:border-text-primary/30 transition-all">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          {getStatusBadge()}
          {interview.overallScore !== null && interview.overallScore !== undefined && (
            <span className="text-sm font-display font-bold text-text-primary bg-dashboard-metricHighlight px-2.5 py-0.5 rounded-full border border-dashboard-metricHighlight/50">
              {interview.overallScore} / 100
            </span>
          )}
        </div>

        <h3 className="text-lg font-display font-bold text-text-primary line-clamp-1 mb-1">
          {interview.role}
        </h3>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-sans text-text-secondary mb-4">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-display font-semibold bg-surface-muted border border-border-subtle text-text-secondary">
            {interview.personalized ? "Personalized" : "Global"}
          </span>
          <span>•</span>
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
        {interview.status === InterviewStatus.READY && (
          <Link
            href={`/dashboard/interviews/${interview.id}/session`}
            className="w-full py-2 bg-text-primary text-white dark:text-brand-primary-900 text-center font-display font-bold text-xs rounded-xl hover:bg-black/85 dark:hover:bg-brand-secondary-200 transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] mb-4"
          >
            <PlayCircle className="w-3.5 h-3.5 text-dashboard-metricHighlight" />
            Start Interview
          </Link>
        )}

        {interview.status === InterviewStatus.COMPLETED && (
          interview.overallScore === null || interview.overallScore === undefined ? (
            <div className="w-full py-2 bg-surface-muted text-text-secondary border border-border-subtle text-center font-display font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 mb-4">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-text-secondary" />
              Assessing...
            </div>
          ) : (
            <Link
              href={`/dashboard/interviews/${interview.id}`}
              className="w-full py-2 bg-text-primary text-white dark:text-brand-primary-900 text-center font-display font-bold text-xs rounded-xl hover:bg-black/85 dark:hover:bg-brand-secondary-200 transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] mb-4"
            >
              <Eye className="w-3.5 h-3.5 text-dashboard-metricHighlight" />
              View Assessment
            </Link>
          )
        )}

        {interview.status === InterviewStatus.IN_PROGRESS && (
          <Link
            href={`/dashboard/interviews/${interview.id}/session`}
            className="w-full py-2 bg-dashboard-metricHighlight text-black border border-dashboard-metricHighlight/40 text-center font-display font-bold text-xs rounded-xl hover:bg-dashboard-metricHighlight/80 transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] mb-4"
          >
            <PlayCircle className="w-3.5 h-3.5 text-black" />
            Continue Session
          </Link>
        )}

        {interview.status === InterviewStatus.GENERATING && (
          <div className="w-full py-2 bg-surface-muted text-text-secondary border border-border-subtle text-center font-display font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 mb-4">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-text-secondary" />
            Generating...
          </div>
        )}

        {(interview.status as string) === "ASSESSMENT_FAILED" && (
          <button
            onClick={handleRetryAssessment}
            disabled={isRetrying}
            className="w-full py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:hover:bg-rose-950/60 dark:text-rose-400 border border-rose-200 dark:border-rose-900 text-center font-display font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] mb-4 disabled:opacity-50"
          >
            {isRetrying ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <RefreshCw className="w-3.5 h-3.5" />
            )}
            {isRetrying ? "Restarting..." : "Assessment Failed — Try Again"}
          </button>
        )}

        {interview.status === InterviewStatus.FAILED && (
          <button
            onClick={handleRetryGeneration}
            disabled={isRetrying}
            className="w-full py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:hover:bg-rose-950/60 dark:text-rose-400 border border-rose-200 dark:border-rose-900 text-center font-display font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] mb-4 disabled:opacity-50"
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

      <div className="pt-4 border-t border-border-subtle flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-xs font-sans text-text-muted">
          <Calendar className="w-3.5 h-3.5" />
          {new Date(interview.createdAt).toLocaleDateString()}
        </div>

        <div className="flex items-center gap-1">
          {/* Generate Similar / Retake */}
          <Link
            href={`/dashboard/interviews/new?role=${encodeURIComponent(interview.role)}&experience=${interview.experienceLevel}&difficulty=${interview.difficulty || "MEDIUM"}&type=${interview.interviewType}`}
            className="p-2 text-text-secondary hover:bg-surface-muted rounded-xl transition-colors border border-border-subtle"
            title="Generate Similar Interview"
          >
            <RefreshCw className="w-4 h-4 text-text-secondary" />
          </Link>

          {/* Delete */}
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl transition-colors disabled:opacity-50 border border-rose-100"
            title="Delete Interview"
          >
            {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
