import { describe, it, expect, vi, beforeEach } from "vitest";
import { UserAccountDeletionService } from "../user-account-deletion.service";
import { prisma } from "@/lib/prisma";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { JobStatus } from "@prisma/client";

vi.mock("@/lib/prisma", () => ({
  prisma: {
    user: {
      findUnique: vi.fn(),
      delete: vi.fn(),
      deleteMany: vi.fn(),
    },
    job: {
      updateMany: vi.fn(),
    },
  },
}));

vi.mock("@/services/storage/blob-storage.service", () => ({
  BlobStorageService: {
    delete: vi.fn(),
  },
}));

describe("UserAccountDeletionService", () => {
  const mockClerkId = "clerk_user_delete_123";
  const mockDbUserId = "db_user_123";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return false if the user record is not found", async () => {
    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce(null);

    const result = await UserAccountDeletionService.purgeUserDataByClerkId(mockClerkId);

    expect(result).toBe(false);
    expect(BlobStorageService.delete).not.toHaveBeenCalled();
    expect(prisma.job.updateMany).not.toHaveBeenCalled();
    expect(prisma.user.delete).not.toHaveBeenCalled();
  });

  it("should collect personal blob URLs, cancel active jobs, and cascade delete the user", async () => {
    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce({
      id: mockDbUserId,
      roadmaps: [{ blobUrl: "https://blob.vercel.com/roadmap1.json" }, { blobUrl: null }],
      resumeScores: [{ artifactBlobUrl: "https://blob.vercel.com/resume1.pdf" }],
      resumeBuilds: [{ artifactBlobUrl: "https://blob.vercel.com/builder1.json" }],
    } as any);

    vi.mocked(prisma.user.delete).mockResolvedValueOnce({ id: mockDbUserId } as any);

    const result = await UserAccountDeletionService.purgeUserDataByClerkId(mockClerkId);

    expect(result).toBe(true);

    // 1. Verify Vercel Blob batch delete was called with personal URLs
    expect(BlobStorageService.delete).toHaveBeenCalledWith([
      "https://blob.vercel.com/roadmap1.json",
      "https://blob.vercel.com/resume1.pdf",
      "https://blob.vercel.com/builder1.json",
    ]);

    // 2. Verify in-flight jobs were cancelled
    expect(prisma.job.updateMany).toHaveBeenCalledWith({
      where: {
        userId: mockDbUserId,
        status: { in: [JobStatus.QUEUED, JobStatus.RUNNING] },
      },
      data: {
        status: JobStatus.CANCELLED,
        error: "User account deleted",
      },
    });

    // 3. Verify user was deleted from PostgreSQL
    expect(prisma.user.delete).toHaveBeenCalledWith({
      where: { id: mockDbUserId },
    });
  });

  it("should proceed with database deletion even if blob deletion throws", async () => {
    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce({
      id: mockDbUserId,
      roadmaps: [{ blobUrl: "https://blob.vercel.com/failed.json" }],
      resumeScores: [],
      resumeBuilds: [],
    } as any);

    vi.mocked(BlobStorageService.delete).mockRejectedValueOnce(new Error("Vercel Blob offline"));
    vi.mocked(prisma.user.delete).mockResolvedValueOnce({ id: mockDbUserId } as any);

    const result = await UserAccountDeletionService.purgeUserDataByClerkId(mockClerkId);

    expect(result).toBe(true);
    expect(prisma.user.delete).toHaveBeenCalledWith({
      where: { id: mockDbUserId },
    });
  });
});
