import { InterviewMetadata, AssessmentReport } from "../../types";
import { Clock, HelpCircle } from "lucide-react";

interface OverviewCardProps {
  metadata: InterviewMetadata;
  assessment: AssessmentReport;
}

export function OverviewCard({ metadata, assessment }: OverviewCardProps) {
  const { overallScores } = assessment;

  return (
    <div className="bg-dashboard-card rounded-[var(--card-radius)] p-6 sm:p-8 border border-dashboard-cardBorder shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border-subtle pb-6 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-text-primary text-white dark:text-brand-primary-900 font-display font-semibold text-xs rounded-full">
              {metadata.interviewType}
            </span>
            <span className="px-3 py-1 bg-dashboard-metricHighlight text-black border border-dashboard-metricHighlight/50 font-display font-semibold text-xs rounded-full">
              {metadata.difficulty}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-text-primary">
            {metadata.role} Interview Assessment
          </h1>
          <p className="text-text-secondary font-sans text-sm mt-1">
            Completed on {new Date(assessment.assessedAt).toLocaleDateString()}
          </p>
        </div>

        <div className="flex items-center gap-4 bg-surface-muted p-4 rounded-xl border border-border-subtle">
          <div className="text-center px-2">
            <span className="text-[10px] text-text-muted uppercase font-display font-semibold">Questions</span>
            <p className="text-lg font-display font-bold text-text-primary flex items-center justify-center gap-1">
              <HelpCircle className="w-4 h-4 text-text-secondary" />
              {metadata.questionCount}
            </p>
          </div>
          <div className="w-px h-8 bg-border-subtle" />
          <div className="text-center px-2">
            <span className="text-[10px] text-text-muted uppercase font-display font-semibold">Est. Time</span>
            <p className="text-lg font-display font-bold text-text-primary flex items-center justify-center gap-1">
              <Clock className="w-4 h-4 text-text-secondary" />
              {metadata.estimatedDuration}
            </p>
          </div>
        </div>
      </div>

      {/* Summary Paragraph */}
      <div className="mb-6">
        <h3 className="text-xs font-display font-bold text-text-muted uppercase tracking-wider mb-2">Executive Summary</h3>
        <p className="text-text-secondary font-sans leading-relaxed">
          {overallScores.summary}
        </p>
      </div>
    </div>
  );
}
