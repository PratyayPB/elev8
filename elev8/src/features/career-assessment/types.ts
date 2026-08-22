import { CareerAssessmentStatus } from "@prisma/client";
import { ProfileData } from "@/features/profile/types";

export { CareerAssessmentStatus };

export interface AssessmentOutput {
  readinessScore: number;
  strengths: string[];
  gaps: string[];
  suggestedFocusAreas: string[];
  narrative: string;
}

export interface AssessmentInputSnapshot {
  profileVersion: number;
  name: string;
  currentStatus: string;
  currentRole: string;
  yearsOfExperience: number;
  highestQualification: string;
  fieldOfStudy: string;
  primaryGoal: string;
  targetRole?: string | null;
  targetCompanyType: string;
  weeklyLearningHours: number;
  skills: Array<{ name: string; proficiency: string }>;
  desiredSkills: string[];
  phoneNumber?: string | null;
}

export interface CareerAssessmentResult {
  id: string;
  userId: string;
  profileVersion: number;
  readinessScore: number;
  strengths: string[];
  gaps: string[];
  suggestedFocusAreas: string[];
  narrative: string;
  inputSnapshot: AssessmentInputSnapshot;
  model: string;
  status: CareerAssessmentStatus;
  createdAt: Date;
  updatedAt: Date;
  isStale?: boolean;
}

export interface CareerAssessmentSignal {
  id?: string;
  readinessScore: number;
  strengths: string[];
  gaps: string[];
  suggestedFocusAreas: string[];
  narrative: string;
  profileVersion: number;
  createdAt: Date;
  isStale?: boolean;
}

export interface ModuleActivityContext {
  recentInterviews?: Array<{
    role: string;
    difficulty: string;
    overallScore: number | null;
    category?: string | null;
    createdAt: Date;
  }>;
  recentResumes?: Array<{
    role: string;
    overallScore: number | null;
    atsScore: number | null;
    createdAt: Date;
  }>;
  activeRoadmaps?: Array<{
    title: string;
    targetRole?: string | null;
    status: string;
  }>;
}

export type AssessmentState =
  | "PROFILE_INCOMPLETE"
  | "NO_ASSESSMENT"
  | "STALE"
  | "CURRENT";
