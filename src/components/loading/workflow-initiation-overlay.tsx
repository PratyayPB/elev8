"use client";

import React from "react";
import { RocketLoader } from "./rocket-loader";
import { useWorkflowStore } from "@/store/workflow.store";

export function WorkflowInitiationOverlay() {
  const isInitiating = useWorkflowStore((state) => state.isInitiating);
  const initiatingMessage = useWorkflowStore((state) => state.initiatingMessage);

  if (!isInitiating) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Workflow initiation overlay"
    >
      <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius-lg)] p-8 max-w-sm w-full shadow-2xl flex flex-col items-center text-center space-y-5 animate-in zoom-in-95 duration-200">
        <RocketLoader size="lg" />

        <div className="space-y-1.5">
          <h3 className="text-lg font-display font-bold text-text-primary">
            {initiatingMessage || "Initiating the workflow..."}
          </h3>
          <p className="text-xs font-sans text-text-secondary leading-relaxed">
            Dispatching task to background workers and preparing AI pipeline.
          </p>
        </div>

        <div className="w-full max-w-[180px] h-1 bg-surface-muted dark:bg-card rounded-full overflow-hidden">
          <div className="h-full bg-accent rounded-full animate-pulse w-2/3" />
        </div>
      </div>
    </div>
  );
}
