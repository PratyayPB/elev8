import { prisma } from "@/lib/prisma";
import {
  ModuleType,
  ModuleCompletionStatus,
  ModuleProgressStatus,
  ModuleActivityEventType,
  ModuleActivityRecord,
  RecordActivityInput,
  ProgressProjection,
} from "../types";

export class ModuleActivityService {
  /**
   * Records a user's activity in a platform module, handles idempotency,
   * and updates the user's Progress current-state projection.
   */
  public static async recordActivity(
    inputOrUserId: RecordActivityInput | string,
    moduleArg?: ModuleType,
    completionStatusArg?: ModuleCompletionStatus | null,
    metadataArg?: Record<string, any> | null
  ): Promise<ModuleActivityRecord> {
    let input: RecordActivityInput;

    if (typeof inputOrUserId === "string") {
      const module = moduleArg!;
      const completionStatus = completionStatusArg;
      const metadata = metadataArg;

      // Infer eventType for legacy calls
      let eventType: ModuleActivityEventType = ModuleActivityEventType.ASSESSMENT_COMPLETED;
      if (module === ModuleType.ROADMAP) {
        eventType = ModuleActivityEventType.MILESTONE_COMPLETED;
      } else if (module === ModuleType.INTERVIEW_PRACTICE) {
        eventType = ModuleActivityEventType.INTERVIEW_COMPLETED;
      } else if (module === ModuleType.RESUME_BUILD) {
        eventType = ModuleActivityEventType.RESUME_BUILD_COMPLETED;
      } else if (module === ModuleType.RESUME_SCORE) {
        eventType = ModuleActivityEventType.RESUME_SCORE_COMPLETED;
      }

      input = {
        userId: inputOrUserId,
        module,
        eventType,
        completionStatus,
        metadata,
        entityId: metadata?.roadmapId || metadata?.interviewId || metadata?.resumeId || metadata?.scoreId || metadata?.assessmentId,
      };
    } else {
      input = inputOrUserId;
    }

    const { userId, module, eventType, entityId, completionStatus, metadata } = input;

    // Compute discriminated entityId for repeating events
    const computeIdempotentEntityId = (
      event: ModuleActivityEventType,
      baseId: string | undefined,
      meta?: Record<string, any> | null
    ): string | undefined => {
      if (!baseId) return undefined;
      switch (event) {
        case ModuleActivityEventType.INTERVIEW_QUESTION_ANSWERED:
          if (meta?.questionNumber !== undefined) {
            return `${baseId}:question:${meta.questionNumber}:answered`;
          }
          break;
        case ModuleActivityEventType.ROADMAP_GENERATION_STAGE_CHANGED:
          if (meta?.stageNumber !== undefined) {
            return `${baseId}:stage:${meta.stageNumber}`;
          }
          break;
        case ModuleActivityEventType.RESUME_UPDATED:
          if (meta?.version !== undefined) {
            return `${baseId}:version:${meta.version}`;
          }
          break;
        default:
          return baseId;
      }
      return baseId;
    };

    const finalEntityId = computeIdempotentEntityId(eventType, entityId ?? undefined, metadata);

    // Idempotency check – guard against duplicate logs
    if (finalEntityId) {
      const existing = await prisma.moduleActivity.findFirst({
        where: {
          userId,
          module,
          eventType,
          entityId: finalEntityId,
        },
      });
      if (existing) {
        return {
          id: existing.id,
          userId: existing.userId,
          module: existing.module,
          eventType: existing.eventType,
          completionStatus: existing.completionStatus,
          entityId: existing.entityId,
          metadata: existing.metadata as Record<string, any> | null,
          createdAt: existing.createdAt,
        };
      }
    }

    // Insert ledger record
    const record = await prisma.moduleActivity.create({
      data: {
        userId,
        module,
        eventType,
        completionStatus: completionStatus ?? undefined,
        entityId: finalEntityId ?? undefined,
        metadata: metadata ?? undefined,
      },
    });

    // Update progress projection
    await this.updateProgressProjection(userId, module, eventType, metadata, finalEntityId);

    return {
      id: record.id,
      userId: record.userId,
      module: record.module,
      eventType: record.eventType,
      completionStatus: record.completionStatus,
      entityId: record.entityId,
      metadata: record.metadata as Record<string, any> | null,
      createdAt: record.createdAt,
    };
  }

  /**
   * Computes the progress state payload for a given module and event.
   */
  public static computeProgressState(
    module: ModuleType,
    eventType: ModuleActivityEventType,
    metadata?: Record<string, any> | null,
    entityId?: string | null
  ): Record<string, any> {
    const now = new Date();
    const progressData: Record<string, any> = {
      lastActivityAt: now,
    };

    switch (module) {
      case ModuleType.CAREER_ASSESSMENT: {
        let status: ModuleProgressStatus = ModuleProgressStatus.IN_PROGRESS;
        let progress = 50;

          if (eventType === ModuleActivityEventType.ASSESSMENT_STARTED) {
            status = ModuleProgressStatus.IN_PROGRESS;
            progress = 25;
          } else if (eventType === ModuleActivityEventType.ASSESSMENT_READY) {
            status = ModuleProgressStatus.READY;
            progress = 75;
          } else if (
            eventType === ModuleActivityEventType.ASSESSMENT_SUBMITTED ||
            eventType === ModuleActivityEventType.ASSESSMENT_GENERATION_STARTED ||
            eventType === ModuleActivityEventType.ASSESSMENT_GENERATION_STAGE_CHANGED
          ) {
            status = ModuleProgressStatus.PROCESSING;
            progress = 90;
          } else if (eventType === ModuleActivityEventType.ASSESSMENT_COMPLETED) {
            status = ModuleProgressStatus.COMPLETED;
            progress = 100;
          } else if (eventType === ModuleActivityEventType.ASSESSMENT_GENERATION_FAILED) {
            status = ModuleProgressStatus.FAILED;
          }

          progressData.careerAssessmentStatus = status;
          progressData.careerAssessmentProgress = progress;
          progressData.careerAssessmentMetadata = {
            ...(metadata || {}),
            assessmentId: entityId,
            lastEvent: eventType,
            updatedAt: now.toISOString(),
          };
          break;
        }

        case ModuleType.ROADMAP: {
          let status: ModuleProgressStatus = ModuleProgressStatus.IN_PROGRESS;
          let progress = metadata?.progress ?? 0;

          if (
            eventType === ModuleActivityEventType.ROADMAP_STARTED ||
            eventType === ModuleActivityEventType.ROADMAP_GENERATION_STARTED ||
            eventType === ModuleActivityEventType.ROADMAP_GENERATION_STAGE_CHANGED
          ) {
            status = ModuleProgressStatus.PROCESSING;
            progress = metadata?.stageNumber ? Math.round((metadata.stageNumber / 4) * 100) : 20;
          } else if (eventType === ModuleActivityEventType.ROADMAP_GENERATED) {
            status = ModuleProgressStatus.READY;
            progress = 0;
          } else if (eventType === ModuleActivityEventType.MILESTONE_STARTED) {
            status = ModuleProgressStatus.IN_PROGRESS;
          } else if (eventType === ModuleActivityEventType.MILESTONE_COMPLETED) {
            const completed = metadata?.completedMilestones ?? 1;
            const total = metadata?.totalMilestones ?? 1;
            progress = Math.min(100, Math.round((completed / Math.max(total, 1)) * 100));
            status = completed >= total ? ModuleProgressStatus.COMPLETED : ModuleProgressStatus.IN_PROGRESS;
          } else if (eventType === ModuleActivityEventType.ROADMAP_COMPLETED) {
            status = ModuleProgressStatus.COMPLETED;
            progress = 100;
          } else if (eventType === ModuleActivityEventType.ROADMAP_GENERATION_FAILED) {
            status = ModuleProgressStatus.FAILED;
          }

          progressData.roadmapStatus = status;
          progressData.roadmapProgress = progress;
          progressData.roadmapMetadata = {
            ...(metadata || {}),
            roadmapId: entityId || metadata?.roadmapId,
            lastEvent: eventType,
            updatedAt: now.toISOString(),
          };
          break;
        }

        case ModuleType.INTERVIEW_PRACTICE: {
          let status: ModuleProgressStatus = ModuleProgressStatus.IN_PROGRESS;
          let progress = metadata?.progress ?? 0;

          if (eventType === ModuleActivityEventType.INTERVIEW_STARTED) {
            status = ModuleProgressStatus.IN_PROGRESS;
            progress = 10;
          } else if (eventType === ModuleActivityEventType.INTERVIEW_QUESTION_ANSWERED) {
            const answered = metadata?.answeredQuestions ?? 0;
            const total = metadata?.totalQuestions ?? 10;
            progress = Math.min(100, Math.round((answered / Math.max(total, 1)) * 100));
            status = answered >= total ? ModuleProgressStatus.READY : ModuleProgressStatus.IN_PROGRESS;
          } else if (eventType === ModuleActivityEventType.INTERVIEW_ALL_QUESTIONS_ANSWERED) {
            status = ModuleProgressStatus.READY;
            progress = 100;
          } else if (
            eventType === ModuleActivityEventType.INTERVIEW_SUBMITTED ||
            eventType === ModuleActivityEventType.INTERVIEW_EVALUATION_STARTED
          ) {
            status = ModuleProgressStatus.PROCESSING;
            progress = 100;
          } else if (eventType === ModuleActivityEventType.INTERVIEW_COMPLETED) {
            status = ModuleProgressStatus.COMPLETED;
            progress = 100;
          } else if (eventType === ModuleActivityEventType.INTERVIEW_FAILED) {
            status = ModuleProgressStatus.FAILED;
          } else if (eventType === ModuleActivityEventType.INTERVIEW_ABANDONED) {
            status = ModuleProgressStatus.ABANDONED;
          }

          progressData.interviewStatus = status;
          progressData.interviewProgress = progress;
          progressData.interviewMetadata = {
            ...(metadata || {}),
            interviewId: entityId || metadata?.interviewId,
            lastEvent: eventType,
            updatedAt: now.toISOString(),
          };
          break;
        }

        case ModuleType.RESUME_BUILD: {
          let status: ModuleProgressStatus = ModuleProgressStatus.IN_PROGRESS;
          let progress = metadata?.progress ?? 50;

          if (eventType === ModuleActivityEventType.RESUME_BUILD_STARTED) {
            status = ModuleProgressStatus.IN_PROGRESS;
            progress = 10;
          } else if (eventType === ModuleActivityEventType.RESUME_BUILD_READY) {
            status = ModuleProgressStatus.READY;
            progress = 90;
          } else if (
            eventType === ModuleActivityEventType.RESUME_BUILD_COMPLETED ||
            eventType === ModuleActivityEventType.RESUME_PDF_GENERATED
          ) {
            status = ModuleProgressStatus.COMPLETED;
            progress = 100;
          } else if (
            eventType === ModuleActivityEventType.AI_RESUME_BUILD_REQUESTED ||
            eventType === ModuleActivityEventType.AI_RESUME_BUILD_STARTED
          ) {
            status = ModuleProgressStatus.PROCESSING;
          } else if (eventType === ModuleActivityEventType.AI_RESUME_BUILD_COMPLETED) {
            status = ModuleProgressStatus.READY;
            progress = 90;
          } else if (eventType === ModuleActivityEventType.AI_RESUME_BUILD_FAILED) {
            status = ModuleProgressStatus.FAILED;
          }

          progressData.resumeBuildStatus = status;
          progressData.resumeBuildProgress = progress;
          progressData.resumeBuildMetadata = {
            ...(metadata || {}),
            resumeId: entityId || metadata?.resumeId,
            lastEvent: eventType,
            updatedAt: now.toISOString(),
          };
          break;
        }

        case ModuleType.RESUME_SCORE: {
          let status: ModuleProgressStatus = ModuleProgressStatus.IN_PROGRESS;
          let progress = 50;

          if (eventType === ModuleActivityEventType.RESUME_SCORE_STARTED) {
            status = ModuleProgressStatus.PROCESSING;
            progress = 50;
          } else if (eventType === ModuleActivityEventType.RESUME_SCORE_COMPLETED) {
            status = ModuleProgressStatus.COMPLETED;
            progress = 100;
          } else if (eventType === ModuleActivityEventType.RESUME_SCORE_FAILED) {
            status = ModuleProgressStatus.FAILED;
          }

          progressData.resumeScoreStatus = status;
          progressData.resumeScoreProgress = progress;
          progressData.resumeScoreMetadata = {
            ...(metadata || {}),
            scoreId: entityId || metadata?.scoreId,
            overallScore: metadata?.overallScore ?? metadata?.ovrScore,
            atsScore: metadata?.atsScore,
            lastEvent: eventType,
            updatedAt: now.toISOString(),
          };
          break;
        }
      }

      return progressData;
  }

  /**
   * Updates the user's current-state Progress projection based on the recorded event.
   */
  private static async updateProgressProjection(
    userId: string,
    module: ModuleType,
    eventType: ModuleActivityEventType,
    metadata?: Record<string, any> | null,
    entityId?: string | null
  ): Promise<void> {
    try {
      const progressData = this.computeProgressState(module, eventType, metadata, entityId);

      await prisma.progress.upsert({
        where: { userId },
        create: {
          userId,
          ...progressData,
        },
        update: progressData,
      });
    } catch (error) {
      console.warn("[ModuleActivityService] Failed to project progress state:", error);
    }
  }

  /**
   * Retrieves recent module activities for a user within a specified day window.
   */
  public static async getRecentActivity(
    userId: string,
    limitDays: number = 90
  ): Promise<ModuleActivityRecord[]> {
    const since = new Date(Date.now() - limitDays * 24 * 60 * 60 * 1000);

    const records = await prisma.moduleActivity.findMany({
      where: {
        userId,
        createdAt: { gte: since },
      },
      orderBy: { createdAt: "desc" },
    });

    return records.map((r) => ({
      id: r.id,
      userId: r.userId,
      module: r.module,
      eventType: r.eventType,
      completionStatus: r.completionStatus,
      entityId: r.entityId,
      metadata: r.metadata as Record<string, any> | null,
      createdAt: r.createdAt,
    }));
  }

  /**
   * Retrieves the most recent activity record for a specific module.
   */
  public static async getLatestForModule(
    userId: string,
    module: ModuleType
  ): Promise<ModuleActivityRecord | null> {
    const record = await prisma.moduleActivity.findFirst({
      where: {
        userId,
        module,
      },
      orderBy: { createdAt: "desc" },
    });

    if (!record) return null;

    return {
      id: record.id,
      userId: record.userId,
      module: record.module,
      eventType: record.eventType,
      completionStatus: record.completionStatus,
      entityId: record.entityId,
      metadata: record.metadata as Record<string, any> | null,
      createdAt: record.createdAt,
    };
  }

  /**
   * Retrieves or initializes the current-state Progress projection for a user.
   */
  public static async getProgress(userId: string): Promise<ProgressProjection> {
    let progress = await prisma.progress.findUnique({
      where: { userId },
    });

    if (!progress) {
      progress = await prisma.progress.create({
        data: {
          userId,
        },
      });
    }

    return {
      id: progress.id,
      userId: progress.userId,
      careerAssessmentStatus: progress.careerAssessmentStatus,
      roadmapStatus: progress.roadmapStatus,
      interviewStatus: progress.interviewStatus,
      resumeBuildStatus: progress.resumeBuildStatus,
      resumeScoreStatus: progress.resumeScoreStatus,
      careerAssessmentProgress: progress.careerAssessmentProgress,
      roadmapProgress: progress.roadmapProgress,
      interviewProgress: progress.interviewProgress,
      resumeBuildProgress: progress.resumeBuildProgress,
      resumeScoreProgress: progress.resumeScoreProgress,
      careerAssessmentMetadata: progress.careerAssessmentMetadata as Record<string, any> | null,
      roadmapMetadata: progress.roadmapMetadata as Record<string, any> | null,
      interviewMetadata: progress.interviewMetadata as Record<string, any> | null,
      resumeBuildMetadata: progress.resumeBuildMetadata as Record<string, any> | null,
      resumeScoreMetadata: progress.resumeScoreMetadata as Record<string, any> | null,
      lastActivityAt: progress.lastActivityAt,
      createdAt: progress.createdAt,
      updatedAt: progress.updatedAt,
    };
  }
}
