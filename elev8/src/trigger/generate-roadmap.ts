import { schemaTask, metadata } from "@trigger.dev/sdk/v3";
import { z } from "zod";
import { RoadmapRequestSchema } from "@/features/roadmaps/types";
import { RoadmapGenerationService } from "@/services/roadmaps/roadmap-generation.service";
import { RoadmapArtifactService } from "@/services/roadmaps/roadmap-artifact.service";
import { JobService } from "@/services/jobs/job.service";
import { prisma } from "@/lib/prisma";
import { RoadmapStatus, CareerLevel } from "@prisma/client";

import { parseCareerLevel, normalizeRole } from "@/features/roadmaps/utils";

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

    try {
      // Step 1: Building Prompt
      metadata.set("status", "Preparing Prompt");
      metadata.set("progress", 10);
      if (jobId) await JobService.updateProgress(jobId, 10, "Preparing Prompt", ctx.run.id);

      // Step 2: Generating Roadmap
      metadata.set("status", "Generating Roadmap");
      metadata.set("progress", 25);
      if (jobId) await JobService.updateProgress(jobId, 25, "Generating Roadmap");

      const generatedRoadmap = await RoadmapGenerationService.generate(payload);

      // Step 3: Validating Graph
      metadata.set("status", "Validating Graph");
      metadata.set("progress", 45);
      if (jobId) await JobService.updateProgress(jobId, 45, "Validating Graph");

      // Step 4: Computing Layout & Converting to React Flow
      metadata.set("status", "Computing Layout");
      metadata.set("progress", 65);
      if (jobId) await JobService.updateProgress(jobId, 65, "Computing Layout");

      const artifact = RoadmapArtifactService.buildArtifact(generatedRoadmap);

      // Step 5: Uploading Artifact to Blob
      metadata.set("status", "Uploading Artifact");
      metadata.set("progress", 80);
      if (jobId) await JobService.updateProgress(jobId, 80, "Uploading Artifact");

      const targetId = payload.roadmapId || `rm_${Date.now()}`;
      const blobUrl = await RoadmapArtifactService.uploadArtifact(targetId, artifact);

      // Step 6: Saving Metadata to Prisma
      metadata.set("status", "Saving Metadata");
      metadata.set("progress", 95);
      if (jobId) await JobService.updateProgress(jobId, 95, "Saving Metadata");

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

      return {
        success: true,
        roadmapId: finalRoadmapId,
        blobUrl,
        artifact,
      };
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      console.error("[Trigger.dev] Pipeline error:", errorMsg);
      if (jobId) {
        await JobService.failJob(jobId, errorMsg);
      }
      throw err;
    }
  },
});
