"use client";

import React from "react";
import { ResumeSummary } from "../../types/workspace";
import { useResumeWorkspace } from "../../hooks/use-resume-workspace";
import { useResumePerformance } from "../../hooks/use-resume-performance";
import { useResumeTrends } from "../../hooks/use-resume-trends";
import { RecommendationService } from "../../services/recommendation.service";
import { QuickActions } from "./quick-actions";
import { PerformanceOverview } from "./performance-overview";
import { ResumeSearch } from "./resume-search";
import { ResumeFilters } from "./resume-filters";
import { ResumeLibrary } from "./resume-library";
import { TrendChart } from "./trend-chart";
import { AssessmentTimeline } from "./assessment-timeline";
import { RecommendedActions } from "./recommended-actions";
import { EmptyWorkspace } from "./empty-workspace";

interface ResumeWorkspaceProps {
  initialResumes: ResumeSummary[];
}

export function ResumeWorkspace({ initialResumes }: ResumeWorkspaceProps) {
  const {
    resumes,
    groupedResumes,
    deleteResume,
    filters,
    setSearchQuery,
    setStatus,
    setExperienceLevel,
    setSortBy,
    resetFilters,
  } = useResumeWorkspace(initialResumes);

  const performance = useResumePerformance(resumes);
  const trends = useResumeTrends(resumes);
  const recommendations = RecommendationService.generateWorkspaceRecommendations(resumes);

  const latestResumeId = resumes.length > 0 ? resumes[0].id : undefined;

  return (
    <div className="container mx-auto p-6 max-w-7xl text-text-primary">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold tracking-tight text-text-primary">Resume Workspace</h1>
        <p className="text-text-secondary text-sm mt-1">
          Track your resume evaluations, monitor ATS improvements, and jumpstart your career preparation.
        </p>
      </div>

      <QuickActions latestResumeId={latestResumeId} />

      {resumes.length === 0 ? (
        <EmptyWorkspace />
      ) : (
        <>
          <PerformanceOverview performance={performance} />

          <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-xl p-6 shadow-sm mb-8">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-4">
              <h2 className="text-lg font-display font-semibold text-text-primary">Resume Library</h2>
              <ResumeSearch value={filters.searchQuery} onChange={setSearchQuery} />
            </div>

            <ResumeFilters
              filters={filters}
              onStatusChange={setStatus}
              onExperienceChange={setExperienceLevel}
              onSortChange={setSortBy}
              onReset={resetFilters}
            />

            <ResumeLibrary
              groupedResumes={groupedResumes}
              onDelete={deleteResume}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TrendChart trends={trends} />
            <AssessmentTimeline resumes={resumes} />
          </div>

          <RecommendedActions recommendations={recommendations} />
        </>
      )}
    </div>
  );
}
