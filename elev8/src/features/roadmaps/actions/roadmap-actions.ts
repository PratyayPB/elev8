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
import { parseCareerLevel, normalizeRole } from "../utils";

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
  revalidatePath("/dashboard/roadmaps");
  return result;
}

export async function deleteRoadmapAction(roadmapId: string) {
  const user = await getOrCreateDbUser();
  const result = await RoadmapActionsService.deleteRoadmap(roadmapId, user.id);
  revalidatePath("/dashboard/roadmaps");
  return result;
}

export async function generateRoadmapAction(requestPayload: RoadmapRequest) {
  const user = await getOrCreateDbUser();
  const isPersonalized = !requestPayload.personalization.skipped;

  // 1. Generic Roadmap: Check cache in GlobalRoadmap table for instant reuse
  if (!isPersonalized) {
    const normalizedRole = normalizeRole(requestPayload.role);
    const experienceLevel = parseCareerLevel(requestPayload.experienceLevel);

    const existingGlobal = await prisma.globalRoadmap.findUnique({
      where: {
        normalizedRole_experienceLevel: {
          normalizedRole,
          experienceLevel,
        },
      },
    });

    if (existingGlobal) {
      if (existingGlobal.status === RoadmapStatus.COMPLETED) {
        console.log(
          `[GlobalRoadmap] Cache hit for "${normalizedRole}" (${experienceLevel}). Reusing ${existingGlobal.id}.`
        );
        return {
          success: true,
          roadmapId: existingGlobal.id,
          jobId: null,
          isExisting: true,
        };
      }

      if (existingGlobal.status === RoadmapStatus.IN_PROGRESS) {
        const activeJob = await prisma.job.findFirst({
          where: {
            artifactId: existingGlobal.id,
            status: JobStatus.RUNNING,
          },
          orderBy: { createdAt: "desc" },
        });

        return {
          success: true,
          roadmapId: existingGlobal.id,
          jobId: activeJob?.id || null,
          isExisting: true,
        };
      }
    }

    // Cache miss: Create GlobalRoadmap placeholder
    let globalRoadmap;
    try {
      const targetId = `rm_global_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
      globalRoadmap = await prisma.globalRoadmap.create({
        data: {
          id: targetId,
          createdByUserId: user.id,
          title: `${requestPayload.role} Roadmap`,
          description: `Generic career roadmap for ${requestPayload.role} (${requestPayload.experienceLevel} level).`,
          targetRole: requestPayload.role,
          normalizedRole,
          experienceLevel,
          status: RoadmapStatus.IN_PROGRESS,
        },
      });
    } catch (err: any) {
      if (err?.code === "P2002") {
        const raceGlobal = await prisma.globalRoadmap.findUnique({
          where: {
            normalizedRole_experienceLevel: {
              normalizedRole,
              experienceLevel,
            },
          },
        });
        if (raceGlobal) {
          if (raceGlobal.status === RoadmapStatus.COMPLETED) {
            return {
              success: true,
              roadmapId: raceGlobal.id,
              jobId: null,
              isExisting: true,
            };
          }
          const activeJob = await prisma.job.findFirst({
            where: {
              artifactId: raceGlobal.id,
              status: JobStatus.RUNNING,
            },
            orderBy: { createdAt: "desc" },
          });
          return {
            success: true,
            roadmapId: raceGlobal.id,
            jobId: activeJob?.id || null,
            isExisting: true,
          };
        }
      }
      throw err;
    }

    const job = await prisma.job.create({
      data: {
        userId: user.id,
        type: JobType.ROADMAP,
        status: JobStatus.RUNNING,
        progress: 5,
        step: "Queued for AI Generation",
        artifactId: globalRoadmap.id,
        artifactType: "GLOBAL_ROADMAP",
      },
    });

    try {
      const handle = await tasks.trigger<typeof generateRoadmapTask>(
        "generate-roadmap",
        {
          ...requestPayload,
          jobId: job.id,
          userId: user.id,
          roadmapId: globalRoadmap.id,
          isGlobal: true,
          normalizedRole,
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

      (async () => {
        try {
          await JobService.updateProgress(job.id, 25, "Generating Roadmap");
          const generatedRoadmap =
            await RoadmapGenerationService.generate(requestPayload);

          await JobService.updateProgress(job.id, 65, "Computing Layout");
          const artifact = RoadmapArtifactService.buildArtifact(generatedRoadmap);

          await JobService.updateProgress(job.id, 80, "Uploading Artifact");
          const blobUrl = await RoadmapArtifactService.uploadArtifact(
            globalRoadmap.id,
            artifact
          );

          await JobService.updateProgress(job.id, 95, "Saving Metadata");
          await prisma.globalRoadmap.update({
            where: { id: globalRoadmap.id },
            data: {
              title: generatedRoadmap.metadata.title,
              description: generatedRoadmap.summary,
              estimatedDuration: generatedRoadmap.metadata.estimatedDuration,
              status: RoadmapStatus.COMPLETED,
              blobUrl,
            },
          });
          await JobService.completeJob(job.id, globalRoadmap.id, "GLOBAL_ROADMAP");
        } catch (err: any) {
          console.error("[Local Background Job Error]:", err);
          await JobService.failJob(job.id, err?.message || String(err));
        }
      })();
    }

    revalidatePath("/dashboard/roadmaps");
    return {
      success: true,
      roadmapId: globalRoadmap.id,
      jobId: job.id,
    };
  }

  // 2. Personalized Roadmap: Create user-specific Roadmap
  const targetId = `rm_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const profileSnapshot = requestPayload.personalization.profileContext ?? null;

  const roadmap = await prisma.roadmap.create({
    data: {
      id: targetId,
      userId: user.id,
      title: `${requestPayload.role} Roadmap`,
      description: `Personalized career roadmap for ${requestPayload.role} (${requestPayload.experienceLevel} level).`,
      targetRole: requestPayload.role,
      experienceLevel: parseCareerLevel(requestPayload.experienceLevel),
      status: RoadmapStatus.IN_PROGRESS,
      personalized: true,
      profileSnapshot: profileSnapshot ? JSON.parse(JSON.stringify(profileSnapshot)) : undefined,
    },
  });

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

  try {
    const handle = await tasks.trigger<typeof generateRoadmapTask>(
      "generate-roadmap",
      {
        ...requestPayload,
        jobId: job.id,
        userId: user.id,
        roadmapId: roadmap.id,
        isGlobal: false,
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
            description: generatedRoadmap.summary,
            estimatedDuration: generatedRoadmap.metadata.estimatedDuration,
            status: RoadmapStatus.COMPLETED,
            blobUrl,
          },
        });
        await JobService.completeJob(job.id, roadmap.id, "ROADMAP");
      } catch (err: any) {
        console.error("[Local Background Job Error]:", err);
        await JobService.failJob(job.id, err?.message || String(err));
      }
    })();
  }

  revalidatePath("/dashboard/roadmaps");
  return {
    success: true,
    roadmapId: roadmap.id,
    jobId: job.id,
  };
}
