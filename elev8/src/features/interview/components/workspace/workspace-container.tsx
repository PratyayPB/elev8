"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { InterviewSession } from "@prisma/client";
import { useInterviewWorkspace } from "../../hooks/use-interview-workspace";
import { QuickActions } from "./quick-actions";
import { PerformanceOverview } from "./performance-overview";
import { FiltersAndSearch } from "./filters-and-search";
import { InterviewCard } from "./interview-card";
import { GlobalInterviewCard } from "./global-interview-card";
import { PersonalTemplateCard } from "./personal-template-card";
import { TrendCharts } from "./trend-charts";
import { RecommendedActions } from "./recommended-actions";
import { PlusCircle, HelpCircle, User, Globe, Loader2 } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/dashboard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LibraryGlobalInterview } from "../../types";
import { getGlobalInterviews } from "../../actions/workspace-actions";
import { toast } from "sonner";

interface WorkspaceContainerProps {
  initialInterviews: {
    sessions: InterviewSession[];
    templates: import("@prisma/client").InterviewTemplate[];
  };
  stats: {
    total: number;
    completedCount: number;
    inProgressCount: number;
    averageScore: number;
    highestScore: number;
  };
}

export function WorkspaceContainer({ initialInterviews, stats }: WorkspaceContainerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabParam = searchParams?.get("tab");
  const initialSection = tabParam === "global" ? "global" : "mine";

  const [section, setSection] = useState<"mine" | "global">(initialSection);

  // Global interviews state
  const [globalSearch, setGlobalSearch] = useState("");
  const [globalDifficulty, setGlobalDifficulty] = useState("ALL");
  const [globalSort, setGlobalSort] = useState("NEWEST");
  const [globalPage, setGlobalPage] = useState(1);
  const [globalInterviews, setGlobalInterviews] = useState<LibraryGlobalInterview[]>([]);
  const [globalPagination, setGlobalPagination] = useState({
    total: 0,
    page: 1,
    limit: 9,
    totalPages: 1,
  });
  const [loadingGlobals, setLoadingGlobals] = useState(false);

  // Sync state if URL search param changes
  useEffect(() => {
    if (tabParam === "global" && section !== "global") {
      setSection("global");
    } else if (tabParam !== "global" && section !== "mine") {
      setSection("mine");
    }
  }, [tabParam]);

  const loadGlobalData = useCallback(async () => {
    setLoadingGlobals(true);
    try {
      const res = await getGlobalInterviews({
        search: globalSearch,
        difficulty: globalDifficulty,
        sort: globalSort,
        page: globalPage,
        limit: 9,
      });
      if (res.success) {
        setGlobalInterviews(res.data.interviews);
        setGlobalPagination(res.data.pagination);
      } else {
        toast.error(res.error?.message || "Failed to load global interviews.");
      }
    } catch (err) {
      console.error("Failed to load global interviews:", err);
      toast.error("Failed to load global interviews.");
    } finally {
      setLoadingGlobals(false);
    }
  }, [globalSearch, globalDifficulty, globalSort, globalPage]);

  useEffect(() => {
    if (section === "global") {
      loadGlobalData();
    }
  }, [section, loadGlobalData]);

  const handleTabChange = (newTab: string) => {
    const nextSection = newTab as "mine" | "global";
    setSection(nextSection);
    const params = new URLSearchParams(searchParams?.toString() || "");
    if (nextSection === "global") {
      params.set("tab", "global");
    } else {
      params.delete("tab");
    }
    router.replace(
      `/dashboard/interviews${params.toString() ? `?${params.toString()}` : ""}`,
      { scroll: false }
    );
  };

  // My interviews state via hook
  const {
    search,
    setSearch,
    difficultyFilter,
    setDifficultyFilter,
    sortOption,
    setSortOption,
    filteredSessions,
    filteredTemplates,
    inProgressList,
    completedList,
    otherList,
  } = useInterviewWorkspace(initialInterviews);

  const latestInProgress = initialInterviews.sessions.find((i) => i.status === "IN_PROGRESS");
  const latestCompleted = initialInterviews.sessions.find((i) => i.status === "COMPLETED");

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

      {/* Tabs Navigation (Roadmap Module Design System Pattern) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-4">
        <Tabs
          value={section}
          onValueChange={handleTabChange}
          className="w-full sm:w-auto"
        >
          <TabsList className="grid grid-cols-2 w-full sm:w-[360px] bg-surface-muted rounded-xl p-1 h-auto">
            <TabsTrigger
              value="mine"
              className="flex items-center justify-center gap-2 py-2 text-xs font-display font-bold rounded-lg data-[state=active]:bg-dashboard-card data-[state=active]:text-text-primary data-[state=active]:shadow-sm transition-all cursor-pointer"
            >
              <User className="w-3.5 h-3.5" /> My Interviews
            </TabsTrigger>
            <TabsTrigger
              value="global"
              className="flex items-center justify-center gap-2 py-2 text-xs font-display font-bold rounded-lg data-[state=active]:bg-dashboard-card data-[state=active]:text-text-primary data-[state=active]:shadow-sm transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" /> Global Interviews
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <p className="text-xs font-sans text-text-secondary">
          {section === "mine"
            ? "Personalized mock sessions tailored to your profile & your generated interviews."
            : "Pre-generated community interview templates available for instant practice."}
        </p>
      </div>

      {/* ========================================================= */}
      {/* SECTION A: MY INTERVIEWS                                  */}
      {/* ========================================================= */}
      {section === "mine" && (
        <>
          {/* Search & Filters */}
          <FiltersAndSearch
            search={search}
            setSearch={setSearch}
            difficultyFilter={difficultyFilter}
            setDifficultyFilter={setDifficultyFilter}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />

          {/* Empty State */}
          {filteredTemplates.length === 0 && filteredSessions.length === 0 && (
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-text-primary hover:bg-black/85 dark:hover:bg-brand-secondary-200 text-white font-display font-bold text-sm rounded-xl shadow-sm transition-all active:scale-[0.98]"
              >
                <PlusCircle className="w-4 h-4 text-dashboard-metricHighlight" />
                Generate First Interview
              </Link>
            </div>
          )}

          {/* Templates Section */}
          {filteredTemplates.length > 0 && (
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-display font-bold text-text-primary">
                My Interview Templates ({filteredTemplates.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTemplates.map((template) => (
                  <PersonalTemplateCard key={template.id} template={template} />
                ))}
              </div>
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
            <div className="space-y-4 mt-6">
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
            <div className="space-y-4 mt-6">
              <h3 className="text-lg font-display font-bold text-text-primary">Other Sessions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherList.map((interview) => (
                  <InterviewCard key={interview.id} interview={interview} />
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* ========================================================= */}
      {/* SECTION B: GLOBAL INTERVIEWS                              */}
      {/* ========================================================= */}
      {section === "global" && (
        <>
          {/* Global Search & Filters */}
          <FiltersAndSearch
            search={globalSearch}
            setSearch={(v) => {
              setGlobalSearch(v);
              setGlobalPage(1);
            }}
            difficultyFilter={globalDifficulty}
            setDifficultyFilter={(v) => {
              setGlobalDifficulty(v);
              setGlobalPage(1);
            }}
            sortOption={globalSort}
            setSortOption={(v) => {
              setGlobalSort(v);
              setGlobalPage(1);
            }}
          />

          {loadingGlobals ? (
            <div className="flex flex-col items-center justify-center min-h-[300px] py-20 text-text-muted">
              <Loader2 className="w-8 h-8 animate-spin text-text-primary mb-3" />
              <p className="text-sm font-sans">Loading global interview templates...</p>
            </div>
          ) : globalInterviews.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius-lg)] text-center p-8">
              <div className="w-16 h-16 rounded-full bg-surface-muted text-text-primary flex items-center justify-center mb-4 shadow-sm">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold text-text-primary">
                No Global Interviews Found
              </h3>
              <p className="text-sm font-sans text-text-secondary max-w-sm mt-2 mb-6">
                {globalSearch
                  ? "No global interview templates matched your search query. Try adjusting your filters."
                  : "No pre-generated global templates are available yet. Generate an interview without personalization to start populating the catalog!"}
              </p>
              <Link
                href="/dashboard/interviews/new"
                className="px-6 py-2.5 bg-text-primary hover:bg-black/80 dark:hover:bg-brand-secondary-200 text-white text-sm font-display font-semibold rounded-xl transition-all shadow-sm"
              >
                Generate Global Interview
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {globalInterviews.map((item) => (
                <GlobalInterviewCard
                  key={item.id}
                  interview={item}
                  onRetried={loadGlobalData}
                />
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {globalPagination.totalPages > 1 && (
            <div className="flex items-center justify-between pt-4 border-t border-border-subtle text-xs font-sans text-text-secondary">
              <div>
                Showing Page {globalPagination.page} of {globalPagination.totalPages} (
                {globalPagination.total} total)
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setGlobalPage((p) => Math.max(1, p - 1))}
                  disabled={globalPage === 1}
                  className="px-3.5 py-2 bg-surface-muted border border-border-subtle rounded-xl hover:bg-border-subtle text-text-primary font-display font-medium disabled:opacity-40 transition-colors cursor-pointer"
                >
                  Previous
                </button>
                <button
                  onClick={() =>
                    setGlobalPage((p) => Math.min(globalPagination.totalPages, p + 1))
                  }
                  disabled={globalPage === globalPagination.totalPages}
                  className="px-3.5 py-2 bg-surface-muted border border-border-subtle rounded-xl hover:bg-border-subtle text-text-primary font-display font-medium disabled:opacity-40 transition-colors cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Recommended Actions */}
      <RecommendedActions />
    </div>
  );
}


