import { prisma } from "@/lib/prisma";
import { BlobStorageService } from "@/services/storage/blob-storage.service";

export class RoadmapActionsService {
  /**
   * Duplicates an existing roadmap metadata record without re-generating AI or uploading new blob.
   * Can duplicate both personal roadmaps and global roadmaps into the user's personal roadmap library.
   */
  public static async duplicateRoadmap(roadmapId: string, userId: string) {
    // 1. Try finding in personal Roadmap table (IDOR fix: scoped to userId)
    const personal = await prisma.roadmap.findFirst({
      where: {
        id: roadmapId,
        userId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        targetRole: true,
        experienceLevel: true,
        estimatedDuration: true,
        status: true,
        blobUrl: true,
        personalized: true,
        profileSnapshot: true,
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
          profileSnapshot: personal.profileSnapshot
            ? JSON.parse(JSON.stringify(personal.profileSnapshot))
            : undefined,
        },
      });
      return duplicated;
    }

    // 2. Try finding in GlobalRoadmap table (public catalog)
    const globalRoadmap = await prisma.globalRoadmap.findUnique({
      where: {
        id: roadmapId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        targetRole: true,
        experienceLevel: true,
        estimatedDuration: true,
        status: true,
        blobUrl: true,
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
   * Delete is only available for personal roadmaps owned by the current user.
   */
  public static async deleteRoadmap(roadmapId: string, userId: string) {
    // 1. Try finding in personal Roadmap table
    const personal = await prisma.roadmap.findUnique({
      where: { id: roadmapId },
      select: {
        id: true,
        userId: true,
        blobUrl: true,
      },
    });

    if (personal) {
      if (personal.userId !== userId) {
        throw new Error("Unauthorized: You can only delete your own roadmaps.");
      }

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

    // 2. Check if it's in GlobalRoadmap table
    const globalRoadmap = await prisma.globalRoadmap.findUnique({
      where: { id: roadmapId },
      select: { id: true },
    });

    if (globalRoadmap) {
      throw new Error("Delete is not available for global roadmaps.");
    }

    throw new Error("Roadmap not found.");
  }
}
