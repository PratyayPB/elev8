import { prisma } from "@/lib/prisma";
import { BlobStorageService } from "@/services/storage/blob-storage.service";

export class RoadmapActionsService {
  /**
   * Duplicates an existing roadmap metadata record without re-generating AI or uploading new blob.
   * Can duplicate both personal roadmaps and global roadmaps into the user's personal roadmap library.
   */
  public static async duplicateRoadmap(roadmapId: string, userId: string) {
    // 1. Try finding in personal Roadmap table
    const personal = await prisma.roadmap.findFirst({
      where: {
        id: roadmapId,
      },
    });

    if (personal) {
      const duplicated = await prisma.roadmap.create({
        data: {
          userId,
          title: `${personal.title} (Copy)`,
          description: personal.description,
          targetRole: personal.targetRole,
          experienceLevel: personal.experienceLevel,
          estimatedDuration: personal.estimatedDuration,
          status: personal.status,
          blobUrl: personal.blobUrl,
          personalized: personal.personalized,
        },
      });
      return duplicated;
    }

    // 2. Try finding in GlobalRoadmap table
    const globalRoadmap = await prisma.globalRoadmap.findUnique({
      where: {
        id: roadmapId,
      },
    });

    if (globalRoadmap) {
      const duplicated = await prisma.roadmap.create({
        data: {
          userId,
          title: `${globalRoadmap.title} (Copy)`,
          description: globalRoadmap.description,
          targetRole: globalRoadmap.targetRole,
          experienceLevel: globalRoadmap.experienceLevel,
          estimatedDuration: globalRoadmap.estimatedDuration,
          status: globalRoadmap.status,
          blobUrl: globalRoadmap.blobUrl,
          personalized: false,
        },
      });
      return duplicated;
    }

    throw new Error("Roadmap not found or access denied.");
  }

  /**
   * Deletes a roadmap metadata record, associated jobs, and deletes the Blob artifact if unreferenced.
   * If the roadmap is a GlobalRoadmap created by this user, it unlinks the author so it leaves their library.
   */
  public static async deleteRoadmap(roadmapId: string, userId: string) {
    // 1. Try finding and deleting from personal Roadmap table
    const personal = await prisma.roadmap.findFirst({
      where: {
        id: roadmapId,
        userId,
      },
    });

    if (personal) {
      const blobUrl = personal.blobUrl;

      // Delete Prisma Roadmap model
      await prisma.roadmap.delete({
        where: { id: roadmapId },
      });

      // Delete associated Job records
      await prisma.job.deleteMany({
        where: { artifactId: roadmapId },
      });

      // Clean up Blob if no other Roadmap or GlobalRoadmap references the same URL
      if (blobUrl) {
        const [ref1, ref2] = await Promise.all([
          prisma.roadmap.count({ where: { blobUrl } }),
          prisma.globalRoadmap.count({ where: { blobUrl } }),
        ]);

        if (ref1 + ref2 === 0) {
          try {
            await BlobStorageService.delete(blobUrl);
          } catch (err) {
            console.warn("Failed to delete Blob artifact during roadmap deletion:", err);
          }
        }
      }

      return true;
    }

    // 2. Try finding in GlobalRoadmap table where createdByUserId = userId
    const userGlobal = await prisma.globalRoadmap.findFirst({
      where: {
        id: roadmapId,
        createdByUserId: userId,
      },
    });

    if (userGlobal) {
      // Unlink the user so it no longer appears in their personal "My Roadmaps", but remains in the global catalog
      await prisma.globalRoadmap.update({
        where: { id: roadmapId },
        data: { createdByUserId: null },
      });
      return true;
    }

    throw new Error("Roadmap not found or access denied.");
  }
}
