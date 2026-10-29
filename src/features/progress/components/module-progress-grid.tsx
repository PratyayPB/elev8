import Link from "next/link";
import {
  Compass,
  Map,
  Mic,
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { ModuleProgressStatus, ProgressProjection } from "../types";

interface ModuleProgressGridProps {
  progress: ProgressProjection;
}

export function ModuleProgressGrid({ progress }: ModuleProgressGridProps) {
  const getStatusBadge = (status: ModuleProgressStatus) => {
    switch (status) {
      case ModuleProgressStatus.COMPLETED:
        return {
          label: "Completed",
          classes: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
          icon: <CheckCircle2 className="w-3 h-3" />,
        };
      case ModuleProgressStatus.IN_PROGRESS:
        return {
          label: "In Progress",
          classes: "bg-blue-500/10 text-blue-500 border-blue-500/20",
          icon: <Clock className="w-3 h-3" />,
        };
      case ModuleProgressStatus.PROCESSING:
        return {
          label: "Processing",
          classes: "bg-purple-500/10 text-purple-500 border-purple-500/20",
          icon: <Sparkles className="w-3 h-3 animate-spin" />,
        };
      case ModuleProgressStatus.READY:
        return {
          label: "Ready",
          classes: "bg-amber-500/10 text-amber-500 border-amber-500/20",
          icon: <CheckCircle2 className="w-3 h-3" />,
        };
      case ModuleProgressStatus.FAILED:
        return {
          label: "Failed",
          classes: "bg-rose-500/10 text-rose-500 border-rose-500/20",
          icon: <AlertCircle className="w-3 h-3" />,
        };
      case ModuleProgressStatus.ABANDONED:
        return {
          label: "Abandoned",
          classes: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
          icon: <AlertCircle className="w-3 h-3" />,
        };
      default:
        return {
          label: "Not Started",
          classes: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
          icon: null,
        };
    }
  };

  const modules = [
    {
      title: "Career Assessment",
      description: "Baseline skills & readiness evaluation",
      icon: <Compass className="w-5 h-5 text-purple-500" />,
      status: progress.careerAssessmentStatus,
      percentage: progress.careerAssessmentProgress,
      detail:
        progress.careerAssessmentMetadata?.readinessScore !== undefined
          ? `Readiness Score: ${progress.careerAssessmentMetadata.readinessScore}/100`
          : null,
      href: "/dashboard/career-assessment",
    },
    {
      title: "Learning Roadmap",
      description: "Structured skill acquisition journey",
      icon: <Map className="w-5 h-5 text-blue-500" />,
      status: progress.roadmapStatus,
      percentage: progress.roadmapProgress,
      detail: progress.roadmapMetadata?.targetRole
        ? `Role: ${progress.roadmapMetadata.targetRole}`
        : null,
      href: progress.roadmapMetadata?.roadmapId
        ? `/dashboard/roadmap/${progress.roadmapMetadata.roadmapId}`
        : "/dashboard/roadmap",
    },
    {
      title: "Mock Interview",
      description: "Technical, behavioral & design practice",
      icon: <Mic className="w-5 h-5 text-emerald-500" />,
      status: progress.interviewStatus,
      percentage: progress.interviewProgress,
      detail:
        progress.interviewMetadata?.overallScore !== undefined
          ? `Score: ${progress.interviewMetadata.overallScore}%`
          : progress.interviewMetadata?.answeredQuestions !== undefined
          ? `${progress.interviewMetadata.answeredQuestions} / ${progress.interviewMetadata.totalQuestions || 10} Questions`
          : null,
      href: progress.interviewMetadata?.interviewId
        ? `/dashboard/interview/${progress.interviewMetadata.interviewId}`
        : "/dashboard/interview",
    },
    {
      title: "Resume Builder",
      description: "ATS-optimized document generation",
      icon: <FileText className="w-5 h-5 text-amber-500" />,
      status: progress.resumeBuildStatus,
      percentage: progress.resumeBuildProgress,
      detail: progress.resumeBuildMetadata?.template
        ? `Template: ${progress.resumeBuildMetadata.template}`
        : null,
      href: progress.resumeBuildMetadata?.resumeId
        ? `/dashboard/resume-builder/${progress.resumeBuildMetadata.resumeId}`
        : "/dashboard/resume-builder",
    },
    {
      title: "Resume Diagnostic",
      description: "AI scoring and keyword alignment",
      icon: <CheckCircle2 className="w-5 h-5 text-rose-500" />,
      status: progress.resumeScoreStatus,
      percentage: progress.resumeScoreProgress,
      detail:
        progress.resumeScoreMetadata?.overallScore !== undefined
          ? `ATS Score: ${progress.resumeScoreMetadata.atsScore ?? progress.resumeScoreMetadata.overallScore}/100`
          : null,
      href: "/dashboard/resume",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {modules.map((mod, idx) => {
        const badge = getStatusBadge(mod.status);

        return (
          <div
            key={idx}
            className="p-6 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card flex flex-col justify-between hover:border-zinc-700/60 transition-colors shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-xl bg-surface-muted border border-border-subtle">
                  {mod.icon}
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border ${badge.classes}`}
                >
                  {badge.icon}
                  {badge.label}
                </span>
              </div>

              <div>
                <h4 className="font-display font-semibold text-text-primary text-base mb-1">
                  {mod.title}
                </h4>
                <p className="text-xs font-sans text-text-secondary">
                  {mod.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-xs font-sans">
                  <span className="text-text-muted">Completion</span>
                  <span className="font-semibold text-text-primary">
                    {mod.percentage}%
                  </span>
                </div>
                <div className="h-2 w-full bg-surface-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-dashboard-metricHighlight rounded-full transition-all duration-500"
                    style={{ width: `${mod.percentage}%` }}
                  />
                </div>
              </div>

              {mod.detail && (
                <p className="text-xs font-sans text-text-muted font-medium pt-0.5">
                  {mod.detail}
                </p>
              )}
            </div>

            <div className="pt-5 mt-2 border-t border-border-subtle">
              <Link
                href={mod.href}
                className="inline-flex items-center gap-1 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                Open Module
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
