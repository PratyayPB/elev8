import Link from "next/link";
import { PlusCircle, PlayCircle, Award } from "lucide-react";
import { InterviewSession } from "@prisma/client";

interface QuickActionsProps {
  latestInProgress?: InterviewSession;
  latestCompleted?: InterviewSession;
}

export function QuickActions({ latestInProgress, latestCompleted }: QuickActionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* 1. Generate New Interview */}
      <Link
        href="/dashboard/interviews/new"
        className="px-5 py-2.5 bg-text-primary hover:bg-black/85 dark:hover:bg-brand-secondary-200 text-white font-display font-bold text-sm rounded-xl shadow-sm transition-all active:scale-[0.98] flex items-center gap-2"
      >
        <PlusCircle className="w-4 h-4 text-dashboard-metricHighlight" />
        Generate New Interview
      </Link>

      {/* 2. Continue Active Session if available */}
      {latestInProgress && (
        <Link
          href={`/dashboard/interviews/${latestInProgress.id}/session`}
          className="px-5 py-2.5 bg-dashboard-metricHighlight hover:bg-dashboard-metricHighlight/80 text-black border border-dashboard-metricHighlight/40 font-display font-bold text-sm rounded-xl shadow-sm transition-all active:scale-[0.98] flex items-center gap-2"
        >
          <PlayCircle className="w-4 h-4 text-black" />
          Continue Interview ({latestInProgress.role})
        </Link>
      )}

      {/* 3. Latest Report if available */}
      {latestCompleted && (
        <Link
          href={`/dashboard/interviews/${latestCompleted.id}`}
          className="px-5 py-2.5 bg-surface-muted hover:bg-border-subtle text-text-primary font-display font-bold text-sm rounded-xl border border-border-subtle transition-all active:scale-[0.98] flex items-center gap-2"
        >
          <Award className="w-4 h-4 text-text-primary" />
          View Latest Report
        </Link>
      )}
    </div>
  );
}
