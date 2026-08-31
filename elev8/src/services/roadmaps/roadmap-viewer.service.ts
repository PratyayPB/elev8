import { prisma } from "@/lib/prisma";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { RoadmapArtifact, RoadmapArtifactService } from "./roadmap-artifact.service";
import { Job, JobStatus, RoadmapStatus, CareerLevel } from "@prisma/client";

export interface RoadmapViewerSummary {
  id: string;
  title: string;
  status: RoadmapStatus;
  blobUrl?: string | null;
  targetRole?: string | null;
  experienceLevel?: CareerLevel | null;
  estimatedDuration?: string | null;
  personalized?: boolean | null;
  isGlobal?: boolean;
}

export interface RoadmapViewerResult {
  roadmap: RoadmapViewerSummary;
  artifact: RoadmapArtifact | null;
  job: Job | null;
  error?: string;
}

export class RoadmapViewerService {
  public static async getRoadmapForViewer(
    roadmapId: string,
    userId: string
  ): Promise<RoadmapViewerResult | null> {
    // 1. Try personalized Roadmap first
    const personalizedRoadmap = await prisma.roadmap.findFirst({
      where: {
        id: roadmapId,
        userId,
      },
    });

    let roadmapSummary: RoadmapViewerSummary | null = null;
    let blobUrlToFetch: string | null = null;
    let currentStatus: RoadmapStatus = RoadmapStatus.NOT_STARTED;

    if (personalizedRoadmap) {
      currentStatus = personalizedRoadmap.status;
      blobUrlToFetch = personalizedRoadmap.blobUrl;
      roadmapSummary = {
        id: personalizedRoadmap.id,
        title: personalizedRoadmap.title,
        status: personalizedRoadmap.status,
        blobUrl: personalizedRoadmap.blobUrl,
        targetRole: personalizedRoadmap.targetRole,
        experienceLevel: personalizedRoadmap.experienceLevel,
        estimatedDuration: personalizedRoadmap.estimatedDuration,
        personalized: personalizedRoadmap.personalized ?? true,
        isGlobal: false,
      };
    } else {
      // 2. Try shared GlobalRoadmap
      const globalRoadmap = await prisma.globalRoadmap.findUnique({
        where: {
          id: roadmapId,
        },
      });

      if (!globalRoadmap) {
        return null;
      }

      currentStatus = globalRoadmap.status;
      blobUrlToFetch = globalRoadmap.blobUrl;
      roadmapSummary = {
        id: globalRoadmap.id,
        title: globalRoadmap.title,
        status: globalRoadmap.status,
        blobUrl: globalRoadmap.blobUrl,
        targetRole: globalRoadmap.targetRole,
        experienceLevel: globalRoadmap.experienceLevel,
        estimatedDuration: globalRoadmap.estimatedDuration,
        personalized: false,
        isGlobal: true,
      };
    }

    let artifact: RoadmapArtifact | null = null;
    let job: Job | null = null;
    let error: string | undefined;

    // Check for associated background job progress
    job = await prisma.job.findFirst({
      where: {
        artifactId: roadmapId,
      },
      orderBy: { createdAt: "desc" },
    });

    if (currentStatus === RoadmapStatus.COMPLETED && blobUrlToFetch) {
      try {
        const rawArtifact = await BlobStorageService.fetchJson<unknown>(blobUrlToFetch);
        if (RoadmapArtifactService.validateArtifact(rawArtifact)) {
          artifact = rawArtifact;
        } else {
          error = "Invalid or corrupted roadmap artifact.";
        }
      } catch (err) {
        console.error("Failed to load roadmap artifact from Blob:", err);
        error = "Failed to load roadmap file from storage.";
      }
    } else if (job && job.status === JobStatus.FAILED) {
      error = job.error || "Roadmap generation failed.";
    }

    return {
      roadmap: roadmapSummary,
      artifact,
      job,
      error,
    };
  }
}
