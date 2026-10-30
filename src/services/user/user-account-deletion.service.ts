import { prisma } from "@/lib/prisma";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { JobStatus } from "@prisma/client";

export class UserAccountDeletionService {
  /**
   * Purges all personal data belonging to a user by their Clerk ID.
   *
   * 1. Collects all personal blob URLs (personal roadmaps, resumes, resume scores).
   * 2. Deletes those files from Vercel Blob storage.
   * 3. Cancels any active in-flight jobs.
   * 4. Deletes the User record in PostgreSQL, triggering cascading deletion across all
   *    personal models (Profile, Skills, Career Assessments, Roadmaps, Resumes, etc.)
   *    while safely detaching GlobalRoadmaps and GlobalInterviewTemplates (SetNull).
   */
  public static async purgeUserDataByClerkId(clerkId: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: { clerkId },
      select: {
        id: true,
        roadmaps: {
          select: { blobUrl: true },
        },
        resumeScores: {
          select: { artifactBlobUrl: true },
        },
        resumeBuilds: {
          select: { artifactBlobUrl: true },
        },
      },
    });

    if (!user) {
      // User already removed or does not exist
      return false;
    }

    // 1. Collect personal blob URLs
    const blobUrls: string[] = [];
    user.roadmaps.forEach((r) => r.blobUrl && blobUrls.push(r.blobUrl));
    user.resumeScores.forEach((s) => s.artifactBlobUrl && blobUrls.push(s.artifactBlobUrl));
    user.resumeBuilds.forEach((b) => b.artifactBlobUrl && blobUrls.push(b.artifactBlobUrl));

    // 2. Clean up external Vercel Blob storage (fail-safe, non-blocking to DB delete)
    if (blobUrls.length > 0) {
      try {
        await BlobStorageService.delete(blobUrls);
      } catch (blobErr) {
        console.warn("[UserAccountDeletionService] Failed to clean up some blobs:", blobErr);
      }
    }

    // 3. Cancel any in-flight background jobs
    try {
      await prisma.job.updateMany({
        where: {
          userId: user.id,
          status: { in: [JobStatus.QUEUED, JobStatus.RUNNING] },
        },
        data: {
          status: JobStatus.CANCELLED,
          error: "User account deleted",
        },
      });
    } catch (jobErr) {
      console.warn("[UserAccountDeletionService] Failed to cancel active jobs:", jobErr);
    }

    // 4. Delete user record in PostgreSQL (cascades all personal models, setNull on global roadmaps & templates)
    await prisma.user.delete({
      where: { id: user.id },
    });

    return true;
  }
}
