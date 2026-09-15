import {
  Activity,
  CheckCircle2,
  FileText,
  Map,
  Mic,
  Compass,
  Award,
  Eye,
  WandSparkles,
  Download,
  AlertCircle,
} from "lucide-react";
import { ModuleActivityEventType, ModuleActivityRecord, ModuleType } from "../types";

interface ActivityLedgerTimelineProps {
  activities: ModuleActivityRecord[];
}

export function ActivityLedgerTimeline({ activities }: ActivityLedgerTimelineProps) {
  if (activities.length === 0) {
    return (
      <div className="p-8 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card text-center">
        <Activity className="w-8 h-8 text-text-muted mx-auto mb-3 opacity-60" />
        <h4 className="font-display font-semibold text-text-primary mb-1">
          No Activity Recorded Yet
        </h4>
        <p className="text-sm font-sans text-text-secondary max-w-md mx-auto">
          As you practice mock interviews, complete roadmap milestones, and build resumes, your career progress history will be recorded here.
        </p>
      </div>
    );
  }

  // Format event title
  const getEventDetails = (act: ModuleActivityRecord) => {
    switch (act.eventType) {
      case ModuleActivityEventType.INTERVIEW_QUESTION_ANSWERED: {
        const qNum = act.metadata?.answeredQuestions ?? "";
        return {
          title: qNum ? `Answered Interview Question ${qNum}` : "Answered Interview Question",
          icon: <Mic className="w-4 h-4 text-emerald-500" />,
        };
      }
      case ModuleActivityEventType.INTERVIEW_ALL_QUESTIONS_ANSWERED:
        return {
          title: "Answered All Interview Questions",
          icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" />,
        };
      case ModuleActivityEventType.INTERVIEW_SUBMITTED:
        return {
          title: "Submitted Interview for AI Evaluation",
          icon: <Mic className="w-4 h-4 text-purple-500" />,
        };
      case ModuleActivityEventType.INTERVIEW_EVALUATION_STARTED:
        return {
          title: "Interview Evaluation Started",
          icon: <WandSparkles className="w-4 h-4 text-purple-500" />,
        };
      case ModuleActivityEventType.INTERVIEW_FAILED:
        return {
          title: "Interview Workflow Failed",
          icon: <AlertCircle className="w-4 h-4 text-red-500" />,
        };
      case ModuleActivityEventType.INTERVIEW_VIEWED:
        return {
          title: "Viewed Interview Session",
          icon: <Eye className="w-4 h-4 text-purple-500" />,
        };
      case ModuleActivityEventType.INTERVIEW_COMPLETED: {
        const score = act.metadata?.overallScore;
        return {
          title: score !== undefined ? `Completed Interview (Score: ${score}%)` : "Completed Mock Interview",
          icon: <Award className="w-4 h-4 text-emerald-500" />,
        };
      }
      case ModuleActivityEventType.MILESTONE_COMPLETED: {
        const title = act.metadata?.phaseTitle || act.metadata?.topic || "Roadmap Milestone";
        return {
          title: `Completed ${title}`,
          icon: <Map className="w-4 h-4 text-blue-500" />,
        };
      }
      case ModuleActivityEventType.ROADMAP_COMPLETED:
        return {
          title: "Completed Full Roadmap Journey",
          icon: <Award className="w-4 h-4 text-blue-500" />,
        };
      case ModuleActivityEventType.ROADMAP_GENERATION_STARTED:
        return {
          title: "Roadmap Generation Started",
          icon: <WandSparkles className="w-4 h-4 text-blue-500" />,
        };
      case ModuleActivityEventType.ROADMAP_GENERATION_STAGE_CHANGED:
        return {
          title: act.metadata?.stage ? `Roadmap Stage: ${act.metadata.stage}` : "Roadmap Generation Progressed",
          icon: <Map className="w-4 h-4 text-blue-500" />,
        };
      case ModuleActivityEventType.ROADMAP_GENERATED:
        return {
          title: "Roadmap Generated",
          icon: <CheckCircle2 className="w-4 h-4 text-blue-500" />,
        };
      case ModuleActivityEventType.ROADMAP_GENERATION_FAILED:
        return {
          title: "Roadmap Generation Failed",
          icon: <AlertCircle className="w-4 h-4 text-red-500" />,
        };
      case ModuleActivityEventType.ROADMAP_STARTED:
        return {
          title: "Started Roadmap",
          icon: <Map className="w-4 h-4 text-blue-500" />,
        };
      case ModuleActivityEventType.ROADMAP_VIEWED:
        return {
          title: "Viewed Roadmap",
          icon: <Eye className="w-4 h-4 text-blue-500" />,
        };
      case ModuleActivityEventType.RESUME_BUILD_STARTED:
        return {
          title: "Started New Resume Draft",
          icon: <FileText className="w-4 h-4 text-amber-500" />,
        };
      case ModuleActivityEventType.RESUME_BUILD_READY:
        return {
          title: "Resume Marked Ready for Export",
          icon: <CheckCircle2 className="w-4 h-4 text-amber-500" />,
        };
      case ModuleActivityEventType.RESUME_UPDATED:
        return {
          title: "Updated Resume Draft",
          icon: <FileText className="w-4 h-4 text-amber-500" />,
        };
      case ModuleActivityEventType.RESUME_TEMPLATE_CHANGED:
        return {
          title: "Changed Resume Template",
          icon: <FileText className="w-4 h-4 text-amber-500" />,
        };
      case ModuleActivityEventType.AI_RESUME_BUILD_REQUESTED:
        return {
          title: "Requested AI Resume Build",
          icon: <WandSparkles className="w-4 h-4 text-amber-500" />,
        };
      case ModuleActivityEventType.AI_RESUME_BUILD_STARTED:
        return {
          title: "AI Resume Build Started",
          icon: <WandSparkles className="w-4 h-4 text-amber-500" />,
        };
      case ModuleActivityEventType.AI_RESUME_BUILD_COMPLETED:
        return {
          title: "AI Resume Build Completed",
          icon: <CheckCircle2 className="w-4 h-4 text-amber-500" />,
        };
      case ModuleActivityEventType.AI_RESUME_BUILD_FAILED:
        return {
          title: "AI Resume Build Failed",
          icon: <AlertCircle className="w-4 h-4 text-red-500" />,
        };
      case ModuleActivityEventType.RESUME_PDF_GENERATED:
        return {
          title: "Generated Resume PDF",
          icon: <Download className="w-4 h-4 text-amber-500" />,
        };
      case ModuleActivityEventType.RESUME_VIEWED:
        return {
          title: "Viewed Resume Builder",
          icon: <Eye className="w-4 h-4 text-amber-500" />,
        };
      case ModuleActivityEventType.RESUME_SCORE_STARTED:
        return {
          title: "Resume Score Started",
          icon: <WandSparkles className="w-4 h-4 text-rose-500" />,
        };
      case ModuleActivityEventType.RESUME_SCORE_COMPLETED: {
        const ats = act.metadata?.atsScore ?? act.metadata?.overallScore;
        return {
          title: ats !== undefined ? `Resume Scored — ${ats}/100` : "Resume Scored",
          icon: <CheckCircle2 className="w-4 h-4 text-rose-500" />,
        };
      }
      case ModuleActivityEventType.RESUME_SCORE_FAILED:
        return {
          title: "Resume Score Failed",
          icon: <AlertCircle className="w-4 h-4 text-red-500" />,
        };
      case ModuleActivityEventType.RESUME_SCORE_VIEWED:
        return {
          title: "Viewed Resume Score Report",
          icon: <Eye className="w-4 h-4 text-rose-500" />,
        };
      case ModuleActivityEventType.ASSESSMENT_STARTED:
        return {
          title: "Career Assessment Started",
          icon: <Compass className="w-4 h-4 text-purple-500" />,
        };
      case ModuleActivityEventType.ASSESSMENT_SUBMITTED:
        return {
          title: "Career Assessment Submitted",
          icon: <WandSparkles className="w-4 h-4 text-purple-500" />,
        };
      case ModuleActivityEventType.ASSESSMENT_GENERATION_STARTED:
        return {
          title: "Career Assessment Generation Started",
          icon: <WandSparkles className="w-4 h-4 text-purple-500" />,
        };
      case ModuleActivityEventType.ASSESSMENT_COMPLETED: {
        const score = act.metadata?.readinessScore;
        return {
          title: score !== undefined ? `Career Assessment Completed — ${score}/100` : "Career Assessment Completed",
          icon: <Compass className="w-4 h-4 text-purple-500" />,
        };
      }
      case ModuleActivityEventType.ASSESSMENT_GENERATION_FAILED:
        return {
          title: "Career Assessment Generation Failed",
          icon: <AlertCircle className="w-4 h-4 text-red-500" />,
        };
      case ModuleActivityEventType.ASSESSMENT_VIEWED:
        return {
          title: "Viewed Career Assessment",
          icon: <Eye className="w-4 h-4 text-purple-500" />,
        };
      default:
        return {
          title: (act.eventType || act.module || "Activity").replace(/_/g, " "),
          icon: <Activity className="w-4 h-4 text-text-muted" />,
        };
    }
  };

  // Group activities by date bucket (Today, Yesterday, or Date string)
  const groupActivitiesByDate = (items: ModuleActivityRecord[]) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const groups: { [key: string]: ModuleActivityRecord[] } = {};

    items.forEach((item) => {
      const d = new Date(item.createdAt);
      d.setHours(0, 0, 0, 0);

      let label = d.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

      if (d.getTime() === today.getTime()) {
        label = "Today";
      } else if (d.getTime() === yesterday.getTime()) {
        label = "Yesterday";
      }

      if (!groups[label]) groups[label] = [];
      groups[label].push(item);
    });

    return groups;
  };

  const grouped = groupActivitiesByDate(activities);

  return (
    <div className="p-6 md:p-8 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card relative">
      <div className="space-y-8">
        {Object.entries(grouped).map(([dateLabel, groupItems]) => (
          <div key={dateLabel} className="space-y-4">
            <h5 className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              {dateLabel}
            </h5>

            <div className="space-y-3 relative pl-6 border-l border-border-subtle">
              {groupItems.map((item) => {
                const details = getEventDetails(item);
                const time = new Date(item.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                });

                return (
                  <div key={item.id} className="relative flex items-center justify-between gap-4 py-1">
                    {/* Bullet marker */}
                    <div className="absolute -left-[31px] w-3 h-3 rounded-full bg-dashboard-card border-2 border-border-subtle flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-dashboard-metricHighlight" />
                    </div>

                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-surface-muted border border-border-subtle flex items-center justify-center shrink-0">
                        {details.icon}
                      </div>
                      <span className="text-sm font-medium text-text-primary truncate">
                        {details.title}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-text-muted shrink-0">
                      {time}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
