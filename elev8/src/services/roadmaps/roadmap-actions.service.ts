import { prisma } from "@/lib/prisma";
import { BlobStorageService } from "@/services/storage/blob-storage.service";

export class RoadmapActionsService {
  /**
   * Duplicates an existing roadmap metadata record without re-generating AI or uploading new blob.
   */
  public static async duplicateRoadmap(roadmapId: string, userId: string) {
    const existing = await prisma.roadmap.findFirst({
      where: {
        id: roadmapId,
        userId,
      },
    });

    if (!existing) {
      throw new Error("Roadmap not found or access denied.");
    }

    const duplicated = await prisma.roadmap.create({
      data: {
        userId,
        title: `${existing.title} (Copy)`,
        description: existing.description,
        targetRole: existing.targetRole,
        experienceLevel: existing.experienceLevel,
        estimatedDuration: existing.estimatedDuration,
        status: existing.status,
        blobUrl: existing.blobUrl,
      },
    });

    return duplicated;
  }

  /**
   * Deletes a roadmap metadata record, associated jobs, and deletes the Blob artifact if unreferenced.
   */
  public static async deleteRoadmap(roadmapId: string, userId: string) {
    const existing = await prisma.roadmap.findFirst({
      where: {
        id: roadmapId,
        userId,
      },
    });

    if (!existing) {
      throw new Error("Roadmap not found or access denied.");
    }

    const blobUrl = existing.blobUrl;

    // Delete Prisma Roadmap model
    await prisma.roadmap.delete({
      where: { id: roadmapId },
    });

    // Delete associated Job records
    await prisma.job.deleteMany({
      where: { artifactId: roadmapId },
    });

    // Clean up Blob if no other Roadmap references the same URL
    if (blobUrl) {
      const otherReferences = await prisma.roadmap.count({
        where: {
          blobUrl,
        },
      });

      if (otherReferences === 0) {
        try {
          await BlobStorageService.delete(blobUrl);
        } catch (err) {
          console.warn("Failed to delete Blob artifact during roadmap deletion:", err);
        }
      }
    }

    return true;
  }
}
