"use client";

import { ResumeReport } from "../../types";
import { Clock, CheckCircle2 } from "lucide-react";

interface TimelineProps {
  report: ResumeReport;
}

export function TimelineComponent({ report }: TimelineProps) {
  const { metadata } = report.artifact;
  const dateStr = new Date(metadata.assessmentDate).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const timelineSteps = [
    { title: "Resume PDF Uploaded", status: "Completed", time: dateStr },
    { title: "PDF Parsing & Normalization", status: "Completed", time: dateStr },
    { title: "Section & Overall AI Assessment", status: "Completed", time: dateStr },
    { title: "Resume Artifact Compiled & Saved", status: "Completed", time: dateStr },
  ];

  return (
    <div className="bg-dashboard-card rounded-3xl p-6 sm:p-8 border border-dashboard-cardBorder shadow-sm space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-dashboard-metricHighlight/20 border border-dashboard-metricHighlight/30 text-text-primary flex items-center justify-center">
          <Clock className="w-5 h-5 text-text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-display font-black text-text-primary uppercase tracking-wide">Artifact Audit Timeline</h3>
          <p className="text-xs text-text-secondary">
            Immutable generation lifecycle log for Artifact v{metadata.artifactVersion}.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        {timelineSteps.map((step, i) => (
          <div
            key={i}
            className="p-4 bg-surface-muted rounded-2xl border border-border-subtle space-y-1.5"
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black uppercase text-text-primary flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-text-primary bg-dashboard-metricHighlight border border-border-strong rounded-full p-[1px]" /> {step.status}
              </span>
              <span className="text-[9px] font-bold text-text-muted">Step 0{i + 1}</span>
            </div>
            <h5 className="text-xs font-display font-black text-text-primary uppercase tracking-wide leading-tight">{step.title}</h5>
            <p className="text-[10px] text-text-secondary font-medium">{step.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
