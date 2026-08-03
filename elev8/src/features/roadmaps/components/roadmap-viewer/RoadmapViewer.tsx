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

  const handleDownloadSvg = () => {
    if (canvasRef.current) {
      RoadmapExportUtility.downloadSvg(canvasRef.current, `${artifact?.metadata.title || "roadmap"}.svg`);
    }
  };

  const handleDownloadPdf = () => {
    if (canvasRef.current) {
      RoadmapExportUtility.downloadPdf(canvasRef.current, `${artifact?.metadata.title || "roadmap"}.pdf`);
    }
  };

  if (isLoading) {
    return <LoadingOverlay status={jobStatus} progress={jobProgress} />;
  }

  if (!artifact) {
    return <EmptyState onGenerateClick={onRegenerate} />;
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto space-y-4">
      <ReadOnlyToolbar
        title={artifact.metadata.title}
        role={artifact.metadata.role}
        onDownloadSvg={handleDownloadSvg}
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
          <div className="absolute top-4 right-4 bottom-4 w-96 bg-slate-900/95 border border-slate-800 rounded-xl p-5 shadow-2xl backdrop-blur-md z-40 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {selectedNodeData.nodeType || "Node Details"}
                </span>
                <button
                  onClick={() => setSelectedNodeData(null)}
                  aria-label="Close details"
                  className="p-1 hover:bg-slate-800 rounded-md text-slate-400 hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h3 className="text-lg font-bold text-slate-100 mb-2">
                {selectedNodeData.title || selectedNodeData.label}
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {selectedNodeData.description}
              </p>

              {selectedNodeData.estimatedHours && (
                <div className="mb-4 text-xs text-slate-400">
                  Estimated Time: <span className="text-slate-200 font-medium">{selectedNodeData.estimatedHours} hours</span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
              Select any node on the roadmap to inspect its details and learning topics.
            </div>
          </div>
        )}
      </div>

      {/* Summary and Key Resources Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Milestones Overview */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4 text-slate-100 font-bold text-base">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <h3>Learning Milestones ({artifact.milestones.length})</h3>
          </div>
          <div className="space-y-3">
            {artifact.milestones.map((m) => (
              <div key={m.id} className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-200">
                    Phase {m.order}: {m.title}
                  </span>
                  <span className="text-xs text-slate-400">{m.estimatedWeeks} wks</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">{m.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Projects */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4 text-slate-100 font-bold text-base">
            <Rocket className="w-5 h-5 text-cyan-400" />
            <h3>Portfolio Projects ({artifact.projects.length})</h3>
          </div>
          <div className="space-y-3">
            {artifact.projects.map((p) => (
              <div key={p.id} className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-200">{p.title}</span>
                  <span className="text-[10px] bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-500/20">
                    {p.difficulty}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
