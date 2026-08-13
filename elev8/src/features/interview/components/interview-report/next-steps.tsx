import Link from "next/link";
import { ArrowRight, FileText, Map, RefreshCw, UserCheck } from "lucide-react";
import { InterviewMetadata } from "../../types";

interface NextStepsProps {
  metadata: InterviewMetadata;
}

export function NextSteps({ metadata }: NextStepsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-display font-bold text-text-primary">Next Steps in Elev8</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Action 1: Create Roadmap */}
        <Link
          href="/dashboard/roadmaps"
          className="p-5 bg-dashboard-card rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm hover:border-text-primary/30 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="p-2.5 bg-surface-muted border border-border-subtle text-text-primary rounded-xl w-fit mb-3">
              <Map className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-text-primary transition-colors">
              Generate Roadmap
            </h4>
            <p className="text-xs font-sans text-text-muted mt-1 leading-relaxed">
              Build a personalized learning plan targeting your weak areas.
            </p>
          </div>
          <div className="flex items-center text-xs font-display font-bold text-text-primary mt-4">
            Start Learning <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform text-dashboard-metricHighlight" />
          </div>
        </Link>

        {/* Action 2: Career Guidance */}
        <Link
          href="/career"
          className="p-5 bg-dashboard-card rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm hover:border-text-primary/30 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="p-2.5 bg-surface-muted border border-border-subtle text-text-primary rounded-xl w-fit mb-3">
              <UserCheck className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-text-primary transition-colors">
              Career Guidance
            </h4>
            <p className="text-xs font-sans text-text-muted mt-1 leading-relaxed">
              Analyze your readiness for {metadata.role} roles.
            </p>
          </div>
          <div className="flex items-center text-xs font-display font-bold text-text-primary mt-4">
            Explore Advice <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform text-dashboard-metricHighlight" />
          </div>
        </Link>

        {/* Action 3: Resume Review */}
        <Link
          href="/dashboard/resumes"
          className="p-5 bg-dashboard-card rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm hover:border-text-primary/30 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="p-2.5 bg-surface-muted border border-border-subtle text-text-primary rounded-xl w-fit mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-text-primary transition-colors">
              Resume Analysis
            </h4>
            <p className="text-xs font-sans text-text-muted mt-1 leading-relaxed">
              Optimize your resume for {metadata.role} positions.
            </p>
          </div>
          <div className="flex items-center text-xs font-display font-bold text-text-primary mt-4">
            Review Resume <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform text-dashboard-metricHighlight" />
          </div>
        </Link>

        {/* Action 4: Retake Interview */}
        <Link
          href="/dashboard/interviews/new"
          className="p-5 bg-dashboard-card rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm hover:border-text-primary/30 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="p-2.5 bg-surface-muted border border-border-subtle text-text-primary rounded-xl w-fit mb-3">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-text-primary transition-colors">
              Retake Interview
            </h4>
            <p className="text-xs font-sans text-text-muted mt-1 leading-relaxed">
              Start a new session to test your knowledge again.
            </p>
          </div>
          <div className="flex items-center text-xs font-display font-bold text-text-primary mt-4">
            New Interview <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform text-dashboard-metricHighlight" />
          </div>
        </Link>
      </div>
    </div>
  );
}
