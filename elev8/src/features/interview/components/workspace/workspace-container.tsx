"use client";

import { Interview } from "@prisma/client";
import { useInterviewWorkspace } from "../../hooks/use-interview-workspace";
import { QuickActions } from "./quick-actions";
import { PerformanceOverview } from "./performance-overview";
import { FiltersAndSearch } from "./filters-and-search";
import { InterviewCard } from "./interview-card";
import { TrendCharts } from "./trend-charts";
import { RecommendedActions } from "./recommended-actions";
import { PredefinedLibrary } from "./predefined-library";
import { PredefinedInterviewSummary } from "../../types/predefined-interview";
import { PlusCircle, HelpCircle } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/dashboard";

interface WorkspaceContainerProps {
  initialInterviews: Interview[];
  stats: {
    total: number;
    completedCount: number;
    inProgressCount: number;
    averageScore: number;
    highestScore: number;
  };
  predefinedCatalog: PredefinedInterviewSummary[];
}

export function WorkspaceContainer({ initialInterviews, stats, predefinedCatalog }: WorkspaceContainerProps) {
  const {
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    difficultyFilter,
    setDifficultyFilter,
    sortOption,
    setSortOption,
    inProgressList,
    completedList,
    otherList,
    filteredInterviews,
  } = useInterviewWorkspace(initialInterviews);

  const latestInProgress = initialInterviews.find((i) => i.status === "IN_PROGRESS");
  const latestCompleted = initialInterviews.find((i) => i.status === "COMPLETED");

  return (
    <div className="space-y-8 pb-10 text-text-primary">
      {/* Header & Quick Actions */}
      <PageHeader
        section="Mock Practice"
        title="Interview Workspace"
        description="Practice, track performance, and continuous technical growth."
        action={
          <QuickActions latestInProgress={latestInProgress} latestCompleted={latestCompleted} />
        }
      />

      {/* Performance Overview */}
      <PerformanceOverview stats={stats} />

      {/* Improvement Trends (if completed interviews exist) */}
      <TrendCharts completedInterviews={completedList} />

      {/* Search & Filters */}
      <FiltersAndSearch
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        difficultyFilter={difficultyFilter}
        setDifficultyFilter={setDifficultyFilter}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      {/* Empty State */}
      {filteredInterviews.length === 0 && (
        <div className="bg-dashboard-card rounded-[var(--card-radius)] p-12 text-center border border-dashboard-cardBorder shadow-sm space-y-4">
          <div className="p-4 bg-dashboard-metricHighlight/30 text-text-primary rounded-full w-fit mx-auto">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-display font-bold text-text-primary">No Interviews Found</h3>
          <p className="text-sm font-sans text-text-secondary max-w-md mx-auto leading-relaxed">
            You haven&apos;t generated any interviews matching your search or filters yet. Get started by practicing your first mock session.
          </p>
          <Link
            href="/dashboard/interviews/new"
            className="inline-flex items-center gap-2 px-6 py-3 bg-text-primary hover:bg-black/85 text-white font-display font-bold text-sm rounded-xl shadow-sm transition-all active:scale-[0.98]"
          >
            <PlusCircle className="w-4 h-4 text-dashboard-metricHighlight" />
            Generate First Interview
          </Link>
        </div>
      )}

      {/* In Progress Section (Always listed first) */}
      {inProgressList.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-display font-bold text-text-primary flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            In Progress Sessions ({inProgressList.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {inProgressList.map((interview) => (
              <InterviewCard key={interview.id} interview={interview} />
            ))}
          </div>
        </div>
      )}

      {/* Completed Library Section */}
      {completedList.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-display font-bold text-text-primary">
            Completed Interviews ({completedList.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {completedList.map((interview) => (
              <InterviewCard key={interview.id} interview={interview} />
            ))}
          </div>
        </div>
      )}

      {/* Other Statuses (Generating/Failed) */}
      {otherList.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-display font-bold text-text-primary">Other Sessions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherList.map((interview) => (
              <InterviewCard key={interview.id} interview={interview} />
            ))}
          </div>
        </div>
      )}

      {/* Predefined Practice Library */}
      <PredefinedLibrary catalog={predefinedCatalog} />

      {/* Recommended Actions */}
      <RecommendedActions />
    </div>
  );
}
