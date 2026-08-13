import { prisma } from "@/lib/prisma";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { RoadmapArtifact, RoadmapArtifactService } from "./roadmap-artifact.service";
import { Roadmap, Job, JobStatus, RoadmapStatus } from "@prisma/client";

export interface RoadmapViewerResult {
  roadmap: Roadmap;
  artifact: RoadmapArtifact | null;
  job: Job | null;
  error?: string;
}

export class RoadmapViewerService {
  public static async getRoadmapForViewer(
    roadmapId: string,
    userId: string
  ): Promise<RoadmapViewerResult | null> {
    const roadmap = await prisma.roadmap.findFirst({
      where: {
        id: roadmapId,
        userId,
      },
    });

    if (!roadmap) return null;

    let artifact: RoadmapArtifact | null = null;
    let job: Job | null = null;
    let error: string | undefined;

    // Check for associated background job progress
    job = await prisma.job.findFirst({
      where: {
        userId,
        artifactId: roadmapId,
      },
      orderBy: { createdAt: "desc" },
    });

    if (roadmap.status === RoadmapStatus.COMPLETED && roadmap.blobUrl) {
      const url = roadmap.blobUrl;
      if (url) {
        try {
          const rawArtifact = await BlobStorageService.fetchJson<unknown>(url);
          if (RoadmapArtifactService.validateArtifact(rawArtifact)) {
            artifact = rawArtifact;
          } else {
            error = "Invalid or corrupted roadmap artifact.";
          }
        } catch (err) {
          console.error("Failed to load roadmap artifact from Blob:", err);
          error = "Failed to load roadmap file from storage.";
        }
      }
    } else if (job && job.status === JobStatus.FAILED) {
      error = job.error || "Roadmap generation failed.";
    }

    return {
      roadmap,
      artifact,
      job,
      error,
    };
  }
}
