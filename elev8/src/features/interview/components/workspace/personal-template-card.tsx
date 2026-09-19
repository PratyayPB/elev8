"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { InterviewTemplate, InterviewTemplateStatus } from "@prisma/client";
import { PlayCircle, Loader2, Calendar } from "lucide-react";
import { toast } from "sonner";
import { startPersonalizedSessionAction } from "../../actions/interview-actions";
// Assuming you have a delete action for templates, but for now we might skip or use a generic one.

interface PersonalTemplateCardProps {
  template: InterviewTemplate;
}

export function PersonalTemplateCard({ template }: PersonalTemplateCardProps) {
  const router = useRouter();
  const [isStarting, setIsStarting] = useState(false);

  const handleStart = async () => {
    setIsStarting(true);
    try {
      const res = await startPersonalizedSessionAction(template.id);
      if (res.success) {
        router.push(`/dashboard/interviews/${res.data.interviewId}/session`);
      } else {
        toast.error(res.error?.message || "Failed to start interview");
        setIsStarting(false);
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast.error(e.message || "Failed to start interview");
      } else {
        toast.error("Failed to start interview");
      }
      setIsStarting(false);
    }
  };

  const isReady = template.status === InterviewTemplateStatus.ACTIVE && template.templateBlobUrl;
  const isGenerating = template.status === InterviewTemplateStatus.ACTIVE && !template.templateBlobUrl;
  const isFailed = template.status === InterviewTemplateStatus.FAILED;

  return (
    <div className="bg-dashboard-card rounded-[var(--card-radius)] border border-dashboard-cardBorder p-5 hover:border-dashboard-cardBorderHover hover:shadow-md transition-all flex flex-col h-full group relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute -right-8 -top-8 w-24 h-24 bg-dashboard-metricHighlight/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Header */}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div>
          <h3 className="font-display font-bold text-text-primary text-base line-clamp-1 group-hover:text-dashboard-metricHighlight transition-colors">
            {template.role}
          </h3>
          <p className="text-xs font-sans text-text-secondary mt-1 capitalize">
            {template.experienceLevel.toLowerCase()} • {template.interviewType.replace("_", " ")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {isReady && <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-display font-semibold rounded-full">Template Ready</span>}
          {isGenerating && <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 border border-blue-200 text-xs font-display font-semibold rounded-full animate-pulse">Generating...</span>}
          {isFailed && <span className="px-2.5 py-0.5 bg-rose-100 text-rose-800 border border-rose-200 text-xs font-display font-semibold rounded-full">Generation Failed</span>}
        </div>
      </div>

      {/* Meta Specs */}
      <div className="flex flex-wrap gap-2 mb-5 relative z-10">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-muted border border-border-subtle text-xs font-sans text-text-secondary">
          <Calendar className="w-3.5 h-3.5 text-text-muted" />
          {new Date(template.createdAt).toLocaleDateString()}
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-muted border border-border-subtle text-xs font-sans text-text-secondary">
          {template.questionCount} Questions
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-muted border border-border-subtle text-xs font-sans text-text-secondary capitalize">
          {template.difficulty.toLowerCase()}
        </span>
      </div>

      <div className="mt-auto relative z-10">
        {isReady && (
          <button
            onClick={handleStart}
            disabled={isStarting}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-text-primary hover:bg-black/90 text-white text-sm font-display font-semibold rounded-xl shadow-sm transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isStarting ? <Loader2 className="w-4 h-4 animate-spin" /> : <PlayCircle className="w-4 h-4" />}
            {isStarting ? "Starting..." : "Start New Session"}
          </button>
        )}
        {isGenerating && (
          <div className="w-full py-2.5 bg-surface-muted text-text-secondary border border-border-subtle text-center font-display font-semibold text-sm rounded-xl flex items-center justify-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Generating Template...
          </div>
        )}
      </div>
    </div>
  );
}
