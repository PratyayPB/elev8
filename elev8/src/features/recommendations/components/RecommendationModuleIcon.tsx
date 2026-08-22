import React from "react";
import {
  Compass,
  FileCheck,
  FileText,
  Video,
  Sparkles,
  Zap,
  UserCheck,
  ArrowUpRight,
} from "lucide-react";

interface RecommendationModuleIconProps {
  type: string;
  refId: string;
  className?: string;
}

export function RecommendationModuleIcon({
  type,
  refId,
  className = "w-5 h-5",
}: RecommendationModuleIconProps) {
  if (refId === "ROADMAP") {
    return <Compass className={className} />;
  }
  if (refId === "RESUME_SCORE") {
    return <FileCheck className={className} />;
  }
  if (refId === "RESUME_BUILD") {
    return <FileText className={className} />;
  }
  if (refId === "INTERVIEW_PRACTICE") {
    return <Video className={className} />;
  }
  if (refId === "TAKE_CAREER_ASSESSMENT") {
    return <Sparkles className={className} />;
  }
  if (refId === "COMPLETE_PROFILE" || type === "PROFILE_CLARIFICATION") {
    return <UserCheck className={className} />;
  }
  if (type === "SKILL") {
    return <Zap className={className} />;
  }

  return <ArrowUpRight className={className} />;
}
