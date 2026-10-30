import { describe, it, expect, vi, beforeEach } from "vitest";
import { retryRoadmapGenerationAction } from "../actions/roadmap-actions";
import { RoadmapViewerService } from "@/services/roadmaps/roadmap-viewer.service";
import { prisma } from "@/lib/prisma";
import { tasks } from "@trigger.dev/sdk/v3";
import { getOrCreateDbUser } from "@/lib/auth";
import { RoadmapStatus, JobStatus, JobType } from "@prisma/client";

vi.mock("next/cache", () => ({
  revalidatePath: vi.fn(),
  revalidateTag: vi.fn(),
}));

vi.mock("@/lib/auth", () => ({
  getOrCreateDbUser: vi.fn(),
}));

vi.mock("@/features/progress/services", () => ({
  ModuleActivityService: {
    recordActivity: vi.fn().mockResolvedValue({ id: "mock_act" }),
  },
}));

vi.mock("@/lib/prisma", () => ({
  prisma: {
    globalRoadmap: {
      findUnique: vi.fn(),
      update: vi.fn(),
    },
    roadmap: {
      findUnique: vi.fn(),
      findFirst: vi.fn(),
      update: vi.fn(),
    },
    job: {
      create: vi.fn(),
      update: vi.fn(),
      findFirst: vi.fn(),
    },
    moduleActivity: {
      create: vi.fn(),
      findFirst: vi.fn(),
    },
  },
}));

vi.mock("@trigger.dev/sdk/v3", () => ({
  tasks: {
    trigger: vi.fn(),
  },
}));

describe("Global Roadmap Regeneration Authorization & Exception", () => {
  const currentUserId = "user_creator_123";
  const otherUserId = "user_other_456";

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(getOrCreateDbUser).mockResolvedValue({
      id: currentUserId,
      clerkId: "clerk_123",
      email: "test@example.com",
    } as any);
  });

  describe("retryRoadmapGenerationAction", () => {
    it("should reject regeneration of a global roadmap if user is NOT the creator", async () => {
      vi.mocked(prisma.globalRoadmap.findUnique).mockResolvedValueOnce({
        id: "rm_global_1",
        createdByUserId: otherUserId, // Not current user
        targetRole: "Frontend Engineer",
        experienceLevel: "BEGINNER",
        title: "Frontend Engineer Roadmap",
        status: RoadmapStatus.COMPLETED,
      } as any);

      const res = await retryRoadmapGenerationAction("rm_global_1");

      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error.message).toContain(
          "Regeneration and Try Again are not available for global roadmaps unless you are the creator."
        );
      }
      expect(prisma.globalRoadmap.update).not.toHaveBeenCalled();
      expect(prisma.job.create).not.toHaveBeenCalled();
      expect(tasks.trigger).not.toHaveBeenCalled();
    });

    it("should reject regeneration of a global roadmap if createdByUserId is null", async () => {
      vi.mocked(prisma.globalRoadmap.findUnique).mockResolvedValueOnce({
        id: "rm_global_seeded",
        createdByUserId: null, // System seeded
        targetRole: "DevOps Engineer",
        experienceLevel: "MID",
        title: "DevOps Engineer Roadmap",
        status: RoadmapStatus.COMPLETED,
      } as any);

      const res = await retryRoadmapGenerationAction("rm_global_seeded");

      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error.message).toContain(
          "Regeneration and Try Again are not available for global roadmaps unless you are the creator."
        );
      }
      expect(prisma.globalRoadmap.update).not.toHaveBeenCalled();
    });

    it("should ALLOW regeneration of a global roadmap when user IS the creator", async () => {
      vi.mocked(prisma.globalRoadmap.findUnique).mockResolvedValueOnce({
        id: "rm_global_1",
        createdByUserId: currentUserId, // Matches current user!
        targetRole: "Frontend Engineer",
        experienceLevel: "BEGINNER",
        title: "Frontend Engineer Roadmap",
        status: RoadmapStatus.COMPLETED,
      } as any);

      vi.mocked(prisma.globalRoadmap.update).mockResolvedValueOnce({
        id: "rm_global_1",
        status: RoadmapStatus.IN_PROGRESS,
      } as any);

      vi.mocked(prisma.job.create).mockResolvedValueOnce({
        id: "job_global_retry_1",
        userId: currentUserId,
        type: JobType.ROADMAP,
        status: JobStatus.RUNNING,
      } as any);

      vi.mocked(tasks.trigger).mockResolvedValueOnce({
        id: "run_trig_global_123",
      } as any);

      const res = await retryRoadmapGenerationAction("rm_global_1");

      expect(res.success).toBe(true);
      if (res.success) {
        expect(res.data.roadmapId).toBe("rm_global_1");
        expect(res.data.jobId).toBe("job_global_retry_1");
      }

      // Verify global roadmap updated to IN_PROGRESS
      expect(prisma.globalRoadmap.update).toHaveBeenCalledWith({
        where: { id: "rm_global_1" },
        data: { status: RoadmapStatus.IN_PROGRESS },
      });

      // Verify job created for global roadmap
      expect(prisma.job.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          userId: currentUserId,
          type: JobType.ROADMAP,
          status: JobStatus.RUNNING,
          artifactId: "rm_global_1",
          artifactType: "ROADMAP",
        }),
      });

      // Verify Trigger.dev task was called with isGlobal: true
      expect(tasks.trigger).toHaveBeenCalledWith(
        "generate-roadmap",
        expect.objectContaining({
          roadmapId: "rm_global_1",
          isGlobal: true,
          role: "Frontend Engineer",
        })
      );
    });

    it("should allow owner to regenerate personal roadmap", async () => {
      vi.mocked(prisma.globalRoadmap.findUnique).mockResolvedValueOnce(null);

      vi.mocked(prisma.roadmap.findUnique).mockResolvedValueOnce({
        id: "rm_personal_1",
        userId: currentUserId, // Matches current user
        targetRole: "Backend Engineer",
        experienceLevel: "MID",
        title: "My Backend Roadmap",
        status: RoadmapStatus.COMPLETED,
        personalized: true,
      } as any);

      vi.mocked(prisma.roadmap.update).mockResolvedValueOnce({
        id: "rm_personal_1",
        status: RoadmapStatus.IN_PROGRESS,
      } as any);

      vi.mocked(prisma.job.create).mockResolvedValueOnce({
        id: "job_personal_1",
        userId: currentUserId,
        type: JobType.ROADMAP,
        status: JobStatus.RUNNING,
      } as any);

      vi.mocked(tasks.trigger).mockResolvedValueOnce({ id: "run_123" } as any);

      const res = await retryRoadmapGenerationAction("rm_personal_1");

      expect(res.success).toBe(true);
      if (res.success) {
        expect(res.data.roadmapId).toBe("rm_personal_1");
      }
      expect(tasks.trigger).toHaveBeenCalledWith(
        "generate-roadmap",
        expect.objectContaining({
          roadmapId: "rm_personal_1",
          isGlobal: false,
        })
      );
    });
  });

  describe("RoadmapViewerService.getRoadmapForViewer permission evaluation", () => {
    it("should return canRegenerate: false when viewing a global roadmap as a non-creator", async () => {
      vi.mocked(prisma.roadmap.findFirst).mockResolvedValueOnce(null);
      vi.mocked(prisma.globalRoadmap.findUnique).mockResolvedValueOnce({
        id: "rm_global_viewer_1",
        title: "Data Science Roadmap",
        status: RoadmapStatus.COMPLETED,
        blobUrl: null,
        targetRole: "Data Scientist",
        experienceLevel: "BEGINNER",
        estimatedDuration: "12 weeks",
        createdByUserId: otherUserId, // Not current user
      } as any);

      const res = await RoadmapViewerService.getRoadmapForViewer("rm_global_viewer_1", currentUserId);

      expect(res).not.toBeNull();
      expect(res?.roadmap.isGlobal).toBe(true);
      expect(res?.roadmap.canRegenerate).toBe(false);
    });

    it("should return canRegenerate: true when viewing a global roadmap as the creator", async () => {
      vi.mocked(prisma.roadmap.findFirst).mockResolvedValueOnce(null);
      vi.mocked(prisma.globalRoadmap.findUnique).mockResolvedValueOnce({
        id: "rm_global_viewer_2",
        title: "Data Science Roadmap",
        status: RoadmapStatus.COMPLETED,
        blobUrl: null,
        targetRole: "Data Scientist",
        experienceLevel: "BEGINNER",
        estimatedDuration: "12 weeks",
        createdByUserId: currentUserId, // Matches current user!
      } as any);

      const res = await RoadmapViewerService.getRoadmapForViewer("rm_global_viewer_2", currentUserId);

      expect(res).not.toBeNull();
      expect(res?.roadmap.isGlobal).toBe(true);
      expect(res?.roadmap.canRegenerate).toBe(true);
    });
  });
});
