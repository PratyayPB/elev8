import {
  RecommendationSource,
  RecommendationType,
  RecommendationStatus,
  ModuleType,
  ModuleCompletionStatus,
} from "@prisma/client";
import { ProfileData, ProfileCompletenessResult } from "@/features/profile/types";
import { GapAnalysis } from "@/features/skill-gap/types";
import { CareerAssessmentSignal } from "@/features/career-assessment/types";

export {
  RecommendationSource,
  RecommendationType,
  RecommendationStatus,
  ModuleType,
  ModuleCompletionStatus,
};

export type { CareerAssessmentSignal };

export type RecommendationMode =
  | "COLD_START"
  | "PARTIAL_PROFILE"
  | "STANDARD"
  | "FULL_HYBRID"
  | "MAINTENANCE";

export interface CandidateSignals {
  goalAlignment: number;
  gapSignal: number;
  moduleResultSignal: number;
  recencySignal: number;
  assessmentSignal: number;
  profileSignal: number;
  behavioralSignal: number;
}

export interface RecommendationCandidate {
  type: RecommendationType;
  source: RecommendationSource;
  refId: string;
  signals: CandidateSignals;
  score: number;
  reason: string;
  context?: Record<string, any>;
  eligible: boolean;
  estimatedHours?: number;
}

export interface ModuleActivityRecord {
  id: string;
  userId: string;
  module: ModuleType;
  completionStatus: ModuleCompletionStatus;
  metadata?: Record<string, any> | null;
  createdAt: Date;
}

export interface RecommendationContext {
  userId: string;
  profile: ProfileData;
  completeness: ProfileCompletenessResult;
  skillGap?: GapAnalysis;
  assessment?: CareerAssessmentSignal | null;
  moduleActivity: ModuleActivityRecord[];
  recommendationHistory: Array<{
    refId: string;
    type: RecommendationType;
    status: RecommendationStatus;
    createdAt: Date;
  }>;
  mode: RecommendationMode;
}

export interface RecommendationData {
  id: string;
  recommendationSetId: string;
  userId: string;
  source: RecommendationSource;
  type: RecommendationType;
  refId: string;
  priority: number;
  score: number;
  scoreBreakdown?: CandidateSignals | null;
  reason: string;
  context?: Record<string, any> | null;
  status: RecommendationStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface RecommendationSetData {
  id: string;
  userId: string;
  profileVersion: number;
  trigger: string;
  recommendations: RecommendationData[];
  createdAt: Date | string;
}
