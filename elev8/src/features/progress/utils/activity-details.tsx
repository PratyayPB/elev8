import React from "react";
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
import { ModuleActivityEventType, ModuleActivityRecord } from "../types";

export interface ActivityEventDetails {
  title: string;
  icon: React.ReactNode;
}

export function getActivityEventDetails(act: ModuleActivityRecord): ActivityEventDetails {
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

    default: {
      const rawText = act.eventType || act.module || "Activity";
      // Convert UPPERCASE_SNAKE_CASE to Title Case
      const formattedTitle = rawText
        .split("_")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ");

      return {
        title: formattedTitle,
        icon: <Activity className="w-4 h-4 text-text-muted" />,
      };
    }
  }
}
