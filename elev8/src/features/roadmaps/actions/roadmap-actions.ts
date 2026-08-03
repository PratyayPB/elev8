"use server";

import { getOrCreateDbUser } from "@/lib/auth";
import {
  RoadmapLibraryService,
  GetRoadmapsOptions,
} from "@/services/roadmaps/roadmap-library.service";
import { RoadmapActionsService } from "@/services/roadmaps/roadmap-actions.service";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { JobStatus, JobType, RoadmapStatus, CareerLevel } from "@prisma/client";
import { RoadmapRequest } from "@/features/roadmaps/types";
import { generateRoadmapTask } from "@/trigger/generate-roadmap";
import { tasks } from "@trigger.dev/sdk/v3";
import { RoadmapGenerationService } from "@/services/roadmaps/roadmap-generation.service";
import { RoadmapArtifactService } from "@/services/roadmaps/roadmap-artifact.service";
import { JobService } from "@/services/jobs/job.service";

function parseCareerLevel(level: string): CareerLevel {
  const upper = (level || "").toUpperCase();
  if (upper === "BEGINNER" || upper === "BASIC") return CareerLevel.BEGINNER;
  if (upper === "INTERMEDIATE") return CareerLevel.INTERMEDIATE;
  if (upper === "ADVANCED") return CareerLevel.ADVANCED;
  return CareerLevel.BEGINNER;
}

export async function fetchUserRoadmaps(
  options: Omit<GetRoadmapsOptions, "userId">
) {
  const user = await getOrCreateDbUser();
  return RoadmapLibraryService.getRoadmaps({ ...options, userId: user.id });
}

export async function duplicateRoadmapAction(roadmapId: string) {
  const user = await getOrCreateDbUser();
  const result = await RoadmapActionsService.duplicateRoadmap(
    roadmapId,
    user.id
  );
  revalidatePath("/roadmaps");
  return result;
}

export async function deleteRoadmapAction(roadmapId: string) {
  const user = await getOrCreateDbUser();
  const result = await RoadmapActionsService.deleteRoadmap(roadmapId, user.id);
  revalidatePath("/roadmaps");
  return result;
}

export async function generateRoadmapAction(requestPayload: RoadmapRequest) {
  const user = await getOrCreateDbUser();

  // 1. Create Roadmap placeholder in DB
  const targetId = `rm_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const roadmap = await prisma.roadmap.create({
    data: {
      id: targetId,
      userId: user.id,
      title: `${requestPayload.role} Roadmap`,
      description: `AI-generated career roadmap for ${requestPayload.role} (${requestPayload.experienceLevel} level).`,
      targetCareer: requestPayload.role,
      targetRole: requestPayload.role,
      experienceLevel: parseCareerLevel(requestPayload.experienceLevel),
      estimatedDuration: `${requestPayload.hoursPerWeek === "Flexible" ? "Flexible" : `${requestPayload.hoursPerWeek} hrs/wk`}`,
      status: RoadmapStatus.IN_PROGRESS,
    },
  });

  // 2. Create Job tracking record
  const job = await prisma.job.create({
    data: {
      userId: user.id,
      type: JobType.ROADMAP,
      status: JobStatus.RUNNING,
      progress: 5,
      step: "Queued for AI Generation",
      artifactId: roadmap.id,
      artifactType: "ROADMAP",
    },
  });

  // 3. Trigger Trigger.dev task or run inline fallback
  try {
    const handle = await tasks.trigger<typeof generateRoadmapTask>(
      "generate-roadmap",
      {
        ...requestPayload,
        jobId: job.id,
        userId: user.id,
        roadmapId: roadmap.id,
      }
    );

    if (handle?.id) {
      await prisma.job.update({
        where: { id: job.id },
        data: { triggerRunId: handle.id },
      });
    }
  } catch (triggerError) {
    console.warn(
      "[Trigger.dev] Direct cloud trigger skipped, running local background task...",
      triggerError
    );

    // Background execution fallback for local dev when Trigger.dev engine isn't connected
    (async () => {
      try {
        await JobService.updateProgress(job.id, 25, "Generating Roadmap");
        const generatedRoadmap =
          await RoadmapGenerationService.generate(requestPayload);

        await JobService.updateProgress(job.id, 65, "Computing Layout");
        const artifact = RoadmapArtifactService.buildArtifact(generatedRoadmap);

        await JobService.updateProgress(job.id, 80, "Uploading Artifact");
        const blobUrl = await RoadmapArtifactService.uploadArtifact(
          roadmap.id,
          artifact
        );

        await JobService.updateProgress(job.id, 95, "Saving Metadata");
        await prisma.roadmap.update({
          where: { id: roadmap.id },
          data: {
            title: generatedRoadmap.metadata.title,
            status: RoadmapStatus.COMPLETED,
            contentUrl: blobUrl,
            blobUrl,
            version: artifact.version,
          },
        });
        await JobService.completeJob(job.id, roadmap.id, "ROADMAP");
      } catch (err: any) {
        console.error("[Local Background Job Error]:", err);
        await JobService.failJob(job.id, err?.message || String(err));
      }
    })();
  }

  revalidatePath("/roadmaps");
  return {
    success: true,
    roadmapId: roadmap.id,
    jobId: job.id,
  };
}
