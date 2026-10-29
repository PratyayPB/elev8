import { schemaTask, metadata } from "@trigger.dev/sdk/v3";
import { z } from "zod";
import { RoadmapRequestSchema } from "@/features/roadmaps/types";
import { RoadmapGenerationService } from "@/services/roadmaps/roadmap-generation.service";
import { RoadmapArtifactService } from "@/services/roadmaps/roadmap-artifact.service";
import { JobService } from "@/services/jobs/job.service";
import { prisma } from "@/lib/prisma";
import { RoadmapStatus } from "@prisma/client";

import { parseCareerLevel, normalizeRole } from "@/features/roadmaps/utils";
import { ModuleActivityService } from "@/features/progress/services";
import { ModuleActivityEventType, ModuleType } from "@/features/progress/types";
import { normalizeError } from "@/lib/error-handler";

export const GenerateRoadmapTaskSchema = RoadmapRequestSchema.extend({
  jobId: z.string().optional(),
  userId: z.string().optional(),
  roadmapId: z.string().optional(),
  isGlobal: z.boolean().optional(),
  normalizedRole: z.string().optional(),
});

export const generateRoadmapTask = schemaTask({
  id: "generate-roadmap",
  schema: GenerateRoadmapTaskSchema,
  retry: {
    maxAttempts: 3,
    factor: 2,
    minTimeoutInMs: 1000,
    maxTimeoutInMs: 10000,
  },
  run: async (payload, { ctx }) => {
    const jobId = payload.jobId;
    const userId = payload.userId;
    const recordStage = async (stageNumber: number, stage: string, entityId?: string) => {
      if (!userId || !entityId) return;
      await ModuleActivityService.recordActivity({
        userId,
        module: ModuleType.ROADMAP,
        eventType: ModuleActivityEventType.ROADMAP_GENERATION_STAGE_CHANGED,
        entityId,
        metadata: {
          source: "GENERATE_ROADMAP_TASK",
          roadmapId: entityId,
          stage,
          stageNumber,
          totalStages: 4,
        },
      }).catch((error) =>
        console.warn(`[RoadmapActivity] Stage ${stageNumber} log failed:`, error)
      );
    };

    try {
      metadata.set("progress", 10);
      if (jobId) await JobService.updateProgress(jobId, 10, "Preparing Prompt", ctx.run.id);

      // Step 2: Generating Roadmap
      metadata.set("status", "Generating Roadmap");
      metadata.set("progress", 25);
      if (jobId) await JobService.updateProgress(jobId, 25, "Generating Roadmap");
      await recordStage(1, "Generating Roadmap", payload.roadmapId);

      const generatedRoadmap = await RoadmapGenerationService.generate(payload);

      // Step 3: Validating Graph
      metadata.set("status", "Validating Graph");
      metadata.set("progress", 45);
      if (jobId) await JobService.updateProgress(jobId, 45, "Validating Graph");

      // Step 4: Computing Layout & Converting to React Flow
      metadata.set("status", "Computing Layout");
      metadata.set("progress", 65);
      if (jobId) await JobService.updateProgress(jobId, 65, "Computing Layout");
      await recordStage(2, "Computing Layout", payload.roadmapId);

      const artifact = RoadmapArtifactService.buildArtifact(generatedRoadmap);

      // Step 5: Uploading Artifact to Blob
      metadata.set("status", "Uploading Artifact");
      metadata.set("progress", 80);
      if (jobId) await JobService.updateProgress(jobId, 80, "Uploading Artifact");
      await recordStage(3, "Uploading Artifact", payload.roadmapId);

      const targetId = payload.roadmapId || `rm_${Date.now()}`;
      const blobUrl = await RoadmapArtifactService.uploadArtifact(targetId, artifact);

      // Step 6: Saving Metadata to Prisma
      metadata.set("status", "Saving Metadata");
      metadata.set("progress", 95);
      if (jobId) await JobService.updateProgress(jobId, 95, "Saving Metadata");
      await recordStage(4, "Saving Metadata", payload.roadmapId);

      let finalRoadmapId = targetId;

      if (payload.isGlobal) {
        const normRole = payload.normalizedRole || normalizeRole(payload.role);
        const expLevel = parseCareerLevel(payload.experienceLevel);
        const globalRecord = await prisma.globalRoadmap.upsert({
          where: {
            normalizedRole_experienceLevel: {
              normalizedRole: normRole,
              experienceLevel: expLevel,
            },
          },
          create: {
            id: targetId,
            createdByUserId: userId || null,
            title: generatedRoadmap.metadata.title,
            description: generatedRoadmap.summary,
            targetRole: payload.role,
            normalizedRole: normRole,
            experienceLevel: expLevel,
            estimatedDuration: generatedRoadmap.metadata.estimatedDuration,
            status: RoadmapStatus.COMPLETED,
            blobUrl,
          },
          update: {
            title: generatedRoadmap.metadata.title,
            description: generatedRoadmap.summary,
            targetRole: payload.role,
            estimatedDuration: generatedRoadmap.metadata.estimatedDuration,
            status: RoadmapStatus.COMPLETED,
            blobUrl,
          },
        });
        finalRoadmapId = globalRecord.id;

        // Step 7: Complete
        metadata.set("status", "Completed");
        metadata.set("progress", 100);
        if (jobId) {
          await JobService.completeJob(jobId, finalRoadmapId, "GLOBAL_ROADMAP");
        }
      } else {
        let roadmapRecord;
        if (userId) {
          roadmapRecord = await prisma.roadmap.upsert({
            where: { id: targetId },
            create: {
              id: targetId,
              userId,
              title: generatedRoadmap.metadata.title,
              description: generatedRoadmap.summary,
              targetRole: payload.role,
              experienceLevel: parseCareerLevel(payload.experienceLevel),
              estimatedDuration: generatedRoadmap.metadata.estimatedDuration,
              status: RoadmapStatus.COMPLETED,
              blobUrl,
              personalized: true,
              profileSnapshot: payload.personalization.profileContext
                ? JSON.parse(JSON.stringify(payload.personalization.profileContext))
                : undefined,
            },
            update: {
              title: generatedRoadmap.metadata.title,
              description: generatedRoadmap.summary,
              targetRole: payload.role,
              experienceLevel: parseCareerLevel(payload.experienceLevel),
              estimatedDuration: generatedRoadmap.metadata.estimatedDuration,
              status: RoadmapStatus.COMPLETED,
              blobUrl,
            },
          });
          finalRoadmapId = roadmapRecord?.id || targetId;
        }

        // Step 7: Complete
        metadata.set("status", "Completed");
        metadata.set("progress", 100);
        if (jobId) {
          await JobService.completeJob(jobId, finalRoadmapId, "ROADMAP");
        }
      }

      console.log("[Trigger.dev] Roadmap post-processing pipeline finished successfully!");

      // Record successful roadmap generation
      if (userId) await ModuleActivityService.recordActivity({
        userId,
        module: ModuleType.ROADMAP,
        eventType: ModuleActivityEventType.ROADMAP_GENERATED,
        entityId: finalRoadmapId,
        metadata: { source: "GENERATE_ROADMAP_TASK", roadmapId: finalRoadmapId },
      }).catch((e) => console.warn("[RoadmapActivity] Generation completed log failed:", e));

      return {
        success: true,
        roadmapId: finalRoadmapId,
        blobUrl,
        artifact,
      };
    } catch (err: unknown) {
      const appError = normalizeError(err);
      console.error("[Trigger.dev] Pipeline error:", appError.message, err);
      if (jobId) {
        await JobService.failJob(jobId, appError.message);
      }
      if (payload.roadmapId) {
        if (payload.isGlobal) {
          await prisma.globalRoadmap.update({
            where: { id: payload.roadmapId },
            data: { status: RoadmapStatus.FAILED },
          }).catch((dbErr) => console.warn("[Trigger.dev] Failed to mark GlobalRoadmap as FAILED:", dbErr));
        } else {
          await prisma.roadmap.update({
            where: { id: payload.roadmapId },
            data: { status: RoadmapStatus.FAILED },
          }).catch((dbErr) => console.warn("[Trigger.dev] Failed to mark Roadmap as FAILED:", dbErr));
        }
      }
      if (userId) await ModuleActivityService.recordActivity({
        userId,
        module: ModuleType.ROADMAP,
        eventType: ModuleActivityEventType.ROADMAP_GENERATION_FAILED,
        entityId: payload.roadmapId,
        metadata: { source: "GENERATE_ROADMAP_TASK", roadmapId: payload.roadmapId, error: appError.message },
      }).catch((e) => console.warn('[RoadmapActivity] Generation failed log error:', e));
      throw err;
    }
  },
});
