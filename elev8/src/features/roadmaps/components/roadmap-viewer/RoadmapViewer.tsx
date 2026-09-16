"use client";

import React, { useState, useRef, useMemo } from "react";
import { RoadmapArtifact } from "@/services/roadmaps/roadmap-artifact.service";
import { RoadmapRenderService } from "@/services/roadmaps/roadmap-render.service";
import { ReactFlowCanvas } from "./ReactFlowCanvas";
import { ReadOnlyToolbar } from "./ReadOnlyToolbar";
import { LoadingOverlay } from "./LoadingOverlay";
import { EmptyState } from "./EmptyState";
import { RoadmapExportUtility } from "@/services/roadmaps/roadmap-export.utility";
import { useRoadmapPolling } from "../../hooks/use-roadmap-polling";
import { retryRoadmapGenerationAction } from "@/features/roadmaps/actions/roadmap-actions";
import { useRouter } from "next/navigation";
import { X, Rocket, AlertTriangle, RefreshCw } from "lucide-react";
import { JobStatus } from "@prisma/client";
import Link from "next/link";
import { toast } from "sonner";

export interface RoadmapViewerProps {
  roadmapId?: string;
  artifact?: RoadmapArtifact | null;
  isLoading?: boolean;
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
  const router = useRouter();
  const [selectedNodeData, setSelectedNodeData] = useState<any | null>(null);
  const [isRetrying, setIsRetrying] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Compute graph dynamically to ensure layout reflects current sizing and spacing rules
  const graph = useMemo(() => {
    if (artifact?.logicalGraph?.nodes && artifact?.logicalGraph?.edges) {
      return RoadmapRenderService.convertToReactFlow(
        artifact.logicalGraph.nodes,
        artifact.logicalGraph.edges
      );
    }
    return artifact?.reactFlow || { nodes: [], edges: [] };
  }, [artifact]);

  // Clear the local retry state once the server reflects the loading status, completion, or provides an artifact
  React.useEffect(() => {
    if (isLoading || jobState === "COMPLETED" || artifact) {
      setIsRetrying(false);
    }
  }, [isLoading, jobState, artifact]);

  // Hook handles short polling while job is in active state (e.g. IN_PROGRESS / RUNNING / QUEUED)
  useRoadmapPolling(isLoading || isRetrying);

  const handleDownloadPdf = () => {
    if (canvasRef.current && artifact) {
      RoadmapExportUtility.downloadPdf(
        canvasRef.current,
        artifact.reactFlow.nodes,
        `${artifact.metadata.title || "roadmap"}.pdf`
      );
    }
  };

  const handleRetry = async () => {
    if (onRegenerate) {
      onRegenerate();
      return;
    }
    if (!roadmapId) return;
    try {
      setIsRetrying(true);
      const res = await retryRoadmapGenerationAction(roadmapId);
      if (!res.success) {
        toast.error(res.error?.message || "Failed to retry roadmap generation. Please try again.");
        setIsRetrying(false);
        return;
      }
      router.refresh();
    } catch (err: any) {
      console.error("Failed to retry roadmap generation:", err);
      toast.error(err?.message || "Failed to retry roadmap generation. Please try again.");
      setIsRetrying(false);
    }
  };

  // 1. Loading State (active background job or retrying)
  if (isLoading || isRetrying) {
    return <LoadingOverlay progress={isRetrying && !isLoading ? 5 : jobProgress} />;
  }

  // 2. Failed State (AI error, high demand 503, rate limit 429, or pipeline failure)
  if (jobState === JobStatus.FAILED || jobState === "FAILED" || error) {
    return (
      <div className="w-full max-w-xl mx-auto my-12 bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius-lg)] p-8 text-center shadow-sm space-y-5">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-display font-bold text-text-primary">
            Generation Failed
          </h3>
          <p className="text-sm font-sans text-text-secondary mt-2 max-w-md mx-auto leading-relaxed">
            {error || "We couldn't generate your roadmap. Please try again."}
          </p>
        </div>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleRetry}
            disabled={isRetrying}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-sans font-medium bg-text-primary text-white dark:text-brand-primary-900 rounded-xl hover:bg-black/80 dark:hover:bg-brand-secondary-200 transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${isRetrying ? "animate-spin" : ""}`} />
            {isRetrying ? "Restarting..." : "Try Again"}
          </button>
          <Link
            href="/dashboard/roadmaps"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-sans font-medium bg-surface-muted text-text-primary border border-border-subtle rounded-xl hover:bg-surface-subtle transition-colors"
          >
            Back to Library
          </Link>
        </div>
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
          graph={graph}
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

      {/* Recommended Projects Section */}
      {artifact.projects && artifact.projects.length > 0 && (
        <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius)] p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4 text-text-primary font-display font-bold text-base">
            <Rocket className="w-5 h-5 text-text-primary" />
            <h3>Portfolio Projects ({artifact.projects.length})</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      )}
    </div>
  );
};
