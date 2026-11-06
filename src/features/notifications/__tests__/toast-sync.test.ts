import { describe, it, expect, vi, beforeEach } from "vitest";
import { prisma } from "@/lib/prisma";
import { JobService } from "@/services/jobs/job.service";
import { JobStatus, JobType } from "@prisma/client";

vi.mock("@/lib/prisma", () => ({
  prisma: {
    user: {
      findUnique: vi.fn(),
    },
    notification: {
      create: vi.fn(),
      upsert: vi.fn(),
    },
    job: {
      update: vi.fn(),
    },
  },
}));

// Mock Ably transport so tests run in pure unit isolation
vi.mock("@/lib/realtime/ably-transport", () => ({
  notificationTransport: {
    publish: vi.fn().mockResolvedValue(undefined),
  },
}));

describe("JobService Server-Side Guaranteed Notifications", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should create a database notification when completeJob is called", async () => {
    vi.mocked(prisma.job.update).mockResolvedValue({
      id: "job_999",
      userId: "user_owner",
      type: JobType.ROADMAP,
      status: JobStatus.COMPLETED,
      progress: 100,
      step: "Completed",
      artifactId: "roadmap_123",
      artifactType: "ROADMAP",
      triggerRunId: null,
      error: null,
      startedAt: new Date(),
      completedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    vi.mocked(prisma.notification.upsert).mockResolvedValue({
      id: "notif_999",
    } as any);

    await JobService.completeJob("job_999", "roadmap_123", "ROADMAP");

    expect(prisma.job.update).toHaveBeenCalledWith({
      where: { id: "job_999" },
      data: expect.objectContaining({
        status: JobStatus.COMPLETED,
        progress: 100,
      }),
    });

    expect(prisma.notification.upsert).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { idempotencyKey: "job:job_999:completed" },
        create: expect.objectContaining({
          userId: "user_owner",
          title: "Roadmap Ready",
          type: "ROADMAP",
          actionUrl: "/dashboard/roadmaps/roadmap_123",
          idempotencyKey: "job:job_999:completed",
        }),
      })
    );
  });

  it("should create a database notification when failJob is called", async () => {
    vi.mocked(prisma.job.update).mockResolvedValue({
      id: "job_fail_1",
      userId: "user_owner",
      type: JobType.INTERVIEW,
      status: JobStatus.FAILED,
      progress: 40,
      step: "Failed",
      artifactId: null,
      artifactType: null,
      triggerRunId: null,
      error: "LLM timeout",
      startedAt: new Date(),
      completedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    vi.mocked(prisma.notification.upsert).mockResolvedValue({
      id: "notif_fail_1",
    } as any);

    await JobService.failJob("job_fail_1", "LLM timeout");

    expect(prisma.notification.upsert).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { idempotencyKey: "job:job_fail_1:failed" },
        create: expect.objectContaining({
          userId: "user_owner",
          title: "Interview Task Failed",
          message: "LLM timeout",
          type: "INTERVIEW",
          idempotencyKey: "job:job_fail_1:failed",
        }),
      })
    );
  });
});
