"use client";

import { Interview } from "@prisma/client";
import { useInterviewWorkspace } from "../../hooks/use-interview-workspace";
import { QuickActions } from "./quick-actions";
import { PerformanceOverview } from "./performance-overview";
import { FiltersAndSearch } from "./filters-and-search";
import { InterviewCard } from "./interview-card";
import { TrendCharts } from "./trend-charts";
import { RecommendedActions } from "./recommended-actions";
import { PlusCircle, HelpCircle } from "lucide-react";
import Link from "next/link";

interface WorkspaceContainerProps {
  initialInterviews: Interview[];
  stats: {
    total: number;
    completedCount: number;
    inProgressCount: number;
    averageScore: number;
    highestScore: number;
  };
}

export function WorkspaceContainer({ initialInterviews, stats }: WorkspaceContainerProps) {
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header & Quick Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Interview Workspace
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Practice, track performance, and continuous technical growth.
            </p>
          </div>
          <QuickActions latestInProgress={latestInProgress} latestCompleted={latestCompleted} />
        </div>

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
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 text-center border border-gray-200 dark:border-gray-700 shadow-sm space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-full w-fit mx-auto">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">No Interviews Found</h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              You haven&apos;t generated any interviews matching your search or filters yet. Get started by practicing your first mock session.
            </p>
            <Link
              href="/interviews/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-sm transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              Generate First Interview
            </Link>
          </div>
        )}

        {/* In Progress Section (Always listed first) */}
        {inProgressList.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
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
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
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
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Other Sessions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherList.map((interview) => (
                <InterviewCard key={interview.id} interview={interview} />
              ))}
            </div>
          </div>
        )}

        {/* Recommended Actions */}
        <RecommendedActions />
      </div>
    </div>
  );
}
