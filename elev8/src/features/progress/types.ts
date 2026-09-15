import {
  ModuleType,
  ModuleCompletionStatus,
  ModuleProgressStatus,
  ModuleActivityEventType,
} from "@prisma/client";

export {
  ModuleType,
  ModuleCompletionStatus,
  ModuleProgressStatus,
  ModuleActivityEventType,
};

export interface ModuleActivityRecord {
  id: string;
  userId: string;
  module: ModuleType;
  eventType: ModuleActivityEventType;
  completionStatus?: ModuleCompletionStatus | null;
  entityId?: string | null;
  metadata?: Record<string, any> | null;
  createdAt: Date;
}

export interface RecordActivityInput {
  userId: string;
  module: ModuleType;
  eventType: ModuleActivityEventType;
  completionStatus?: ModuleCompletionStatus | null;
  entityId?: string | null;
  metadata?: Record<string, any> | null;
}

export interface ProgressProjection {
  id: string;
  userId: string;
  careerAssessmentStatus: ModuleProgressStatus;
  roadmapStatus: ModuleProgressStatus;
  interviewStatus: ModuleProgressStatus;
  resumeBuildStatus: ModuleProgressStatus;
  resumeScoreStatus: ModuleProgressStatus;

  careerAssessmentProgress: number;
  roadmapProgress: number;
  interviewProgress: number;
  resumeBuildProgress: number;
  resumeScoreProgress: number;

  careerAssessmentMetadata?: Record<string, any> | null;
  roadmapMetadata?: Record<string, any> | null;
  interviewMetadata?: Record<string, any> | null;
  resumeBuildMetadata?: Record<string, any> | null;
  resumeScoreMetadata?: Record<string, any> | null;

  lastActivityAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProgressDashboardData {
  progress: ProgressProjection;
  recentActivities: ModuleActivityRecord[];
}
