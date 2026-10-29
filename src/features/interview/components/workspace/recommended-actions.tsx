import Link from "next/link";
import { ArrowRight, Map, FileText, UserCheck, Sparkles } from "lucide-react";

export function RecommendedActions() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-display font-bold text-text-primary flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-text-primary" />
        Recommended Next Actions
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Roadmap */}
        <Link
          href="/dashboard/roadmaps"
          className="p-5 bg-dashboard-card rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm hover:border-text-primary/30 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="p-3 bg-surface-muted border border-border-subtle text-text-primary rounded-xl w-fit mb-3">
              <Map className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-text-primary group-hover:text-text-primary transition-colors">
              Learning Roadmaps
            </h4>
            <p className="text-xs font-sans text-text-secondary mt-1 leading-relaxed">
              Bridge your interview skill gaps with structured AI roadmaps.
            </p>
          </div>
          <div className="flex items-center text-xs font-display font-semibold text-text-primary mt-4">
            Create Roadmap <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform text-dashboard-metricHighlight fill-dashboard-metricHighlight" />
          </div>
        </Link>

        {/* Resume */}
        <Link
          href="/dashboard/resumes"
          className="p-5 bg-dashboard-card rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm hover:border-text-primary/30 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="p-3 bg-surface-muted border border-border-subtle text-text-primary rounded-xl w-fit mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-text-primary group-hover:text-text-primary transition-colors">
              Resume Analysis
            </h4>
            <p className="text-xs font-sans text-text-secondary mt-1 leading-relaxed">
              Ensure your resume aligns with the target roles you are practicing.
            </p>
          </div>
          <div className="flex items-center text-xs font-display font-semibold text-text-primary mt-4">
            Optimize Resume <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform text-dashboard-metricHighlight fill-dashboard-metricHighlight" />
          </div>
        </Link>

        {/* Career Assessment */}
        <Link
          href="/dashboard/career-assessment"
          className="p-5 bg-dashboard-card rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm hover:border-text-primary/30 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="p-3 bg-surface-muted border border-border-subtle text-text-primary rounded-xl w-fit mb-3">
              <UserCheck className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-text-primary group-hover:text-text-primary transition-colors">
              Career Assessment
            </h4>
            <p className="text-xs font-sans text-text-secondary mt-1 leading-relaxed">
              Evaluate your market readiness and target career progression path.
            </p>
          </div>
          <div className="flex items-center text-xs font-display font-semibold text-text-primary mt-4">
            View Assessment <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform text-dashboard-metricHighlight fill-dashboard-metricHighlight" />
          </div>
        </Link>
      </div>
    </div>
  );
}
