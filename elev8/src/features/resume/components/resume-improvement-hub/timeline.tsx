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
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-sm space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 flex items-center justify-center">
          <Clock className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Artifact Audit Timeline</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Immutable generation lifecycle log for Artifact v{metadata.artifactVersion}.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        {timelineSteps.map((step, i) => (
          <div
            key={i}
            className="p-4 bg-gray-50/70 dark:bg-gray-700/30 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> {step.status}
              </span>
              <span className="text-[10px] text-gray-400">Step 0{i + 1}</span>
            </div>
            <h5 className="text-xs font-bold text-gray-900 dark:text-white">{step.title}</h5>
            <p className="text-[10px] text-gray-500 dark:text-gray-400">{step.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
