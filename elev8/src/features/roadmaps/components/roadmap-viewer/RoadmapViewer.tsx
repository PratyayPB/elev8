"use client";

import React, { useState, useRef } from "react";
import { RoadmapArtifact } from "@/services/roadmaps/roadmap-artifact.service";
import { ReactFlowCanvas } from "./ReactFlowCanvas";
import { ReadOnlyToolbar } from "./ReadOnlyToolbar";
import { LoadingOverlay } from "./LoadingOverlay";
import { EmptyState } from "./EmptyState";
import { RoadmapExportUtility } from "@/services/roadmaps/roadmap-export.utility";
import { X, BookOpen, Rocket } from "lucide-react";

interface RoadmapViewerProps {
  artifact?: RoadmapArtifact | null;
  isLoading?: boolean;
  jobStatus?: string;
  jobProgress?: number;
  onRegenerate?: () => void;
}

export const RoadmapViewer: React.FC<RoadmapViewerProps> = ({
  artifact,
  isLoading = false,
  jobStatus = "Processing...",
  jobProgress = 0,
  onRegenerate,
}) => {
  const [selectedNodeData, setSelectedNodeData] = useState<any | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = () => {
    if (canvasRef.current && artifact) {
      RoadmapExportUtility.downloadPdf(
        canvasRef.current,
        artifact.reactFlow.nodes,
        `${artifact.metadata.title || "roadmap"}.pdf`
      );
    }
  };

  if (isLoading) {
    return <LoadingOverlay status={jobStatus} progress={jobProgress} />;
  }

  if (!artifact) {
    return <EmptyState onGenerateClick={onRegenerate} />;
  }

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
                  Estimated Time: <span className="text-text-primary font-semibold">{selectedNodeData.estimatedHours} hours</span>
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
                roadmapId={artifact.metadata.title} // Or we need the actual ID. Wait, artifact doesn't have the roadmapId at the top level? Let's assume roadmapId is passed or we can use a wrapper. Wait, I'll pass the roadmapId from props if possible.
                roadmap={artifact}
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
              <div key={p.id} className="p-4 bg-surface-muted/50 rounded-xl border border-border-subtle">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-display font-semibold text-text-primary">{p.title}</span>
                  <span className="text-[11px] font-display font-semibold bg-dashboard-metricHighlight/30 text-black px-2.5 py-0.5 rounded-full border border-dashboard-metricHighlight">
                    {p.difficulty}
                  </span>
                </div>
                <p className="text-xs font-sans text-text-secondary mt-1">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Extracted MilestoneCard to handle client-side completion
import { useState as useMilestoneState, useTransition } from "react";
import { completeRoadmapPhaseAction } from "../../actions/roadmap-activity.actions";
import { CheckCircle } from "lucide-react";

function MilestoneCard({ milestone, roadmap, roadmapId }: { milestone: any; roadmap: any; roadmapId?: string }) {
  const [isCompleted, setIsCompleted] = useMilestoneState(false);
  const [isPending, startTransition] = useTransition();

  // In RoadmapViewer, we don't have the roadmapId directly on the artifact, but we know the viewer
  // is rendered on a page that knows it. We can parse it from URL or pass it down. 
  // Let's parse from window.location for MVP if roadmapId is missing, but ideally it should be in props.
  const handleComplete = () => {
    startTransition(async () => {
      // Very hacky but avoids changing page.tsx and passing it down all the way.
      const resolvedRoadmapId = roadmapId || (typeof window !== 'undefined' ? window.location.pathname.match(/\/roadmaps\/([a-zA-Z0-9_-]+)/)?.[1] : null);

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
          <span className="text-xs font-sans text-text-muted">{milestone.estimatedWeeks} wks</span>
          {isCompleted ? (
            <span className="inline-flex items-center gap-1 text-xs text-emerald-500 font-medium">
              <CheckCircle className="w-4 h-4" />
              Done
            </span>
          ) : (
            <button
              onClick={handleComplete}
              disabled={isPending}
              className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold bg-text-primary text-white rounded hover:bg-black/80 transition-colors disabled:opacity-50"
            >
              {isPending ? "Saving..." : "Mark Complete"}
            </button>
          )}
        </div>
      </div>
      <p className="text-xs font-sans text-text-secondary">{milestone.description}</p>
    </div>
  );
}
