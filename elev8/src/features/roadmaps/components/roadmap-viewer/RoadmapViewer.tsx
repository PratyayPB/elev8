"use client";

import React, { useState, useRef } from "react";
import { RoadmapArtifact } from "@/services/roadmaps/roadmap-artifact.service";
import { ReactFlowCanvas } from "./ReactFlowCanvas";
import { ReadOnlyToolbar } from "./ReadOnlyToolbar";
import { LoadingOverlay } from "./LoadingOverlay";
import { EmptyState } from "./EmptyState";
import { RoadmapExportUtility } from "@/services/roadmaps/roadmap-export.utility";
import { useRoadmapPolling } from "../../hooks/use-roadmap-polling";
import { completeRoadmapPhaseAction } from "../../actions/roadmap-activity.actions";
import { X, BookOpen, Rocket, AlertTriangle, CheckCircle, RefreshCw } from "lucide-react";
import { useState as useMilestoneState, useTransition } from "react";
import { JobStatus } from "@prisma/client";

export interface RoadmapViewerProps {
  roadmapId?: string;
  artifact?: RoadmapArtifact | null;
  isLoading?: boolean;
  jobStatus?: string;
  jobProgress?: number;
  jobState?: JobStatus | string | null;
  error?: string;
  onRegenerate?: () => void;
}

export const RoadmapViewer: React.FC<RoadmapViewerProps> = ({
  roadmapId,
  artifact,
  isLoading = false,
  jobProgress = 0,
  jobState,
  error,
  onRegenerate,
}) => {
  const [selectedNodeData, setSelectedNodeData] = useState<any | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Hook handles short polling while job is in active state (e.g. IN_PROGRESS / RUNNING / QUEUED)
  useRoadmapPolling(isLoading);

  const handleDownloadPdf = () => {
    if (canvasRef.current && artifact) {
      RoadmapExportUtility.downloadPdf(
        canvasRef.current,
        artifact.reactFlow.nodes,
        `${artifact.metadata.title || "roadmap"}.pdf`
      );
    }
  };

  // 1. Loading State (active background job)
  if (isLoading) {
    return <LoadingOverlay progress={jobProgress} />;
  }

  // 2. Failed or Cancelled State
  if (jobState === JobStatus.FAILED || jobState === "FAILED" || error) {
    return (
      <div className="w-full max-w-xl mx-auto my-12 bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius-lg)] p-8 text-center shadow-sm space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-display font-bold text-text-primary">
            Generation Failed
          </h3>
          <p className="text-sm font-sans text-text-secondary mt-1 max-w-md mx-auto">
            We couldn&apos;t generate your roadmap. Please try again.
          </p>
        </div>
        {onRegenerate && (
          <div className="pt-2">
            <button
              onClick={onRegenerate}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-sans font-medium bg-text-primary text-white dark:text-brand-primary-900 rounded-lg hover:bg-black/80 dark:hover:bg-brand-secondary-200 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
          </div>
        )}
      </div>
    );
  }

  if (jobState === JobStatus.CANCELLED || jobState === "CANCELLED") {
    return (
      <div className="w-full max-w-xl mx-auto my-12 bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius-lg)] p-8 text-center shadow-sm space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface-muted text-text-muted border border-border-subtle">
          <X className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-display font-bold text-text-primary">
            Generation Cancelled
          </h3>
          <p className="text-sm font-sans text-text-secondary mt-1 max-w-md mx-auto">
            Roadmap generation was cancelled before completion.
          </p>
        </div>
        {onRegenerate && (
          <div className="pt-2">
            <button
              onClick={onRegenerate}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-sans font-medium bg-text-primary text-white dark:text-brand-primary-900 rounded-lg hover:bg-black/80 dark:hover:bg-brand-secondary-200 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Generate Roadmap
            </button>
          </div>
        )}
      </div>
    );
  }

  // 3. Empty State (no artifact available)
  if (!artifact) {
    return <EmptyState onGenerateClick={onRegenerate} />;
  }

  // 4. Completed State
  return (
    <div className="relative w-full max-w-7xl mx-auto space-y-6 pb-10">
      <ReadOnlyToolbar
        title={artifact.metadata.title}
        role={artifact.metadata.role}
        onDownloadPdf={handleDownloadPdf}
        onRegenerate={onRegenerate}
      />

      <div className="relative" ref={canvasRef}>
        <ReactFlowCanvas
          graph={artifact.reactFlow}
          onNodeClick={(_, data) => setSelectedNodeData(data)}
        />

        {/* Selected Node Details Drawer */}
        {selectedNodeData && (
          <div className="absolute top-4 right-4 bottom-4 w-96 bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius)] p-6 shadow-xl z-40 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-display font-semibold uppercase tracking-wider text-text-secondary">
                  {selectedNodeData.nodeType || "Node Details"}
                </span>
                <button
                  onClick={() => setSelectedNodeData(null)}
                  aria-label="Close details"
                  className="p-1 hover:bg-surface-muted rounded-lg text-text-muted hover:text-text-primary transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h3 className="text-lg font-display font-bold text-text-primary mb-2">
                {selectedNodeData.title || selectedNodeData.label}
              </h3>
              <p className="text-xs font-sans text-text-secondary mb-4 leading-relaxed">
                {selectedNodeData.description}
              </p>

              {selectedNodeData.estimatedHours && (
                <div className="mb-4 text-xs font-sans text-text-muted">
                  Estimated Time:{" "}
                  <span className="text-text-primary font-semibold">
                    {selectedNodeData.estimatedHours} hours
                  </span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-border-subtle text-xs font-sans text-text-muted">
              Select any node on the roadmap to inspect its details and learning topics.
            </div>
          </div>
        )}
      </div>

      {/* Summary and Key Resources Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Milestones Overview */}
        <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius)] p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4 text-text-primary font-display font-bold text-base">
            <BookOpen className="w-5 h-5 text-text-primary" />
            <h3>Learning Milestones ({artifact.milestones.length})</h3>
          </div>
          <div className="space-y-3">
            {artifact.milestones.map((m) => (
              <MilestoneCard
                key={m.id}
                milestone={m}
                roadmapId={roadmapId}
              />
            ))}
          </div>
        </div>

        {/* Recommended Projects */}
        <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius)] p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4 text-text-primary font-display font-bold text-base">
            <Rocket className="w-5 h-5 text-text-primary" />
            <h3>Portfolio Projects ({artifact.projects.length})</h3>
          </div>
          <div className="space-y-3">
            {artifact.projects.map((p) => (
              <div
                key={p.id}
                className="p-4 bg-surface-muted/50 rounded-xl border border-border-subtle"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-display font-semibold text-text-primary">
                    {p.title}
                  </span>
                  <span className="text-[11px] font-display font-semibold bg-dashboard-metricHighlight/30 text-black px-2.5 py-0.5 rounded-full border border-dashboard-metricHighlight">
                    {p.difficulty}
                  </span>
                </div>
                <p className="text-xs font-sans text-text-secondary mt-1">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function MilestoneCard({
  milestone,
  roadmapId,
}: {
  milestone: any;
  roadmapId?: string;
}) {
  const [isCompleted, setIsCompleted] = useMilestoneState(false);
  const [isPending, startTransition] = useTransition();

  const handleComplete = () => {
    startTransition(async () => {
      const resolvedRoadmapId =
        roadmapId ||
        (typeof window !== "undefined"
          ? window.location.pathname.match(/\/roadmaps\/([a-zA-Z0-9_-]+)/)?.[1]
          : null);

      if (!resolvedRoadmapId) {
        console.warn("Could not determine roadmapId to complete phase");
        return;
      }

      const res = await completeRoadmapPhaseAction({
        roadmapId: resolvedRoadmapId,
        phaseId: milestone.id,
        phaseTitle: milestone.title,
        topics: milestone.skillsCovered || [],
      });
      if (res.success) {
        setIsCompleted(true);
      }
    });
  };

  return (
    <div className="p-4 bg-surface-muted/50 rounded-xl border border-border-subtle">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-display font-semibold text-text-primary">
          Phase {milestone.order}: {milestone.title}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-xs font-sans text-text-muted">
            {milestone.estimatedWeeks} wks
          </span>
          {isCompleted ? (
            <span className="inline-flex items-center gap-1 text-xs text-emerald-500 font-medium">
              <CheckCircle className="w-4 h-4" />
              Done
            </span>
          ) : (
            <button
              onClick={handleComplete}
              disabled={isPending}
              className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold bg-text-primary text-white dark:text-brand-primary-900 rounded hover:bg-black/80 dark:hover:bg-brand-secondary-200 transition-colors disabled:opacity-50"
            >
              {isPending ? "Saving..." : "Mark Complete"}
            </button>
          )}
        </div>
      </div>
      <p className="text-xs font-sans text-text-secondary">
        {milestone.description}
      </p>
    </div>
  );
}
