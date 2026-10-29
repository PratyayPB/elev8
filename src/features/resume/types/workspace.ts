import { ResumeScoreStatus } from "@prisma/client";

export interface ResumeSummary {
  id: string;
  role: string;
  experienceLevel: string;
  overallScore: number | null;
  atsScore: number | null;
  artifactBlobUrl: string | null;
  status: ResumeScoreStatus;
  filename?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface ResumePerformanceSummary {
  totalAssessments: number;
  averageScore: number;
  highestScore: number;
  averageAtsScore: number;
  highestAtsScore: number;
  totalUploads: number;
  mostRecentAssessmentDate: string | null;
  mostFrequentRole: string | null;
}

export interface ResumeTrendPoint {
  date: string;
  overallScore: number;
  atsScore: number;
  role: string;
}

export interface ResumeRecommendation {
  id: string;
  title: string;
  description: string;
  type: "upload" | "roadmap" | "interview" | "builder" | "guidance";
  actionUrl: string;
  actionText: string;
  priority: "high" | "medium" | "low";
}

export interface ResumeWorkspaceFilters {
  searchQuery: string;
  status: string;
  experienceLevel: string;
  minScore: number | null;
  minAtsScore: number | null;
  sortBy: "newest" | "oldest" | "highestScore" | "lowestScore" | "highestAtsScore" | "recentlyUpdated" | "alphabetical";
}
