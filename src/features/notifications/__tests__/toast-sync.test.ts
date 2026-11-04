import { describe, it, expect, vi, beforeEach } from "vitest";
import { inferNotificationType } from "@/lib/toast-sync";
import { POST } from "@/app/api/notifications/log-toast/route";
import { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { JobService } from "@/services/jobs/job.service";
import { JobStatus, JobType } from "@prisma/client";

vi.mock("@clerk/nextjs/server", () => ({
  auth: vi.fn(),
}));

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

describe("Toast Sync & Guaranteed Notification Resilience", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("inferNotificationType", () => {
    it("should infer ROADMAP type from roadmap keywords", () => {
      expect(inferNotificationType("Roadmap duplicated successfully")).toBe("ROADMAP");
      expect(inferNotificationType("Failed to delete roadmap")).toBe("ROADMAP");
    });

    it("should infer INTERVIEW type from interview keywords", () => {
      expect(inferNotificationType("Mock interview session started")).toBe("INTERVIEW");
      expect(inferNotificationType("Practice session finished")).toBe("INTERVIEW");
    });

    it("should infer RESUME type from resume/ATS keywords", () => {
      expect(inferNotificationType("Resume score calculated")).toBe("RESUME");
      expect(inferNotificationType("ATS Optimization applied")).toBe("RESUME");
    });

    it("should infer CAREER_ASSESSMENT type from career/assessment keywords", () => {
      expect(inferNotificationType("Career Assessment generated successfully")).toBe("CAREER_ASSESSMENT");
    });

    it("should fallback to SYSTEM type for generic notifications", () => {
      expect(inferNotificationType("Account settings updated")).toBe("SYSTEM");
      expect(inferNotificationType("PDF exported successfully")).toBe("SYSTEM");
    });
  });

  describe("POST /api/notifications/log-toast", () => {
    it("should reject unauthenticated requests with 401", async () => {
      vi.mocked(auth).mockResolvedValue({ userId: null } as any);

      const req = new NextRequest("http://localhost:3000/api/notifications/log-toast", {
        method: "POST",
        body: JSON.stringify({ title: "Test Toast" }),
      });

      const res = await POST(req);
      expect(res.status).toBe(401);
      const json = await res.json();
      expect(json.success).toBe(false);
    });

    it("should reject invalid payload without title with 400", async () => {
      vi.mocked(auth).mockResolvedValue({ userId: "clerk_123" } as any);
      vi.mocked(prisma.user.findUnique).mockResolvedValue({ id: "db_user_1" } as any);

      const req = new NextRequest("http://localhost:3000/api/notifications/log-toast", {
        method: "POST",
        body: JSON.stringify({ title: "" }),
      });

      const res = await POST(req);
      expect(res.status).toBe(400);
      const json = await res.json();
      expect(json.success).toBe(false);
    });

    it("should successfully persist toast with idempotency key and return 200", async () => {
      vi.mocked(auth).mockResolvedValue({ userId: "clerk_123" } as any);
      vi.mocked(prisma.user.findUnique).mockResolvedValue({ id: "db_user_1" } as any);
      vi.mocked(prisma.notification.upsert).mockResolvedValue({
        id: "notif_abc",
        userId: "db_user_1",
        title: "Profile saved",
        message: "Your profile has been saved.",
        type: "SYSTEM",
        status: "UNREAD",
        actionUrl: null,
        idempotencyKey: "profile-saved-1",
        createdAt: new Date(),
        readAt: null,
        updatedAt: new Date(),
      } as any);

      const req = new NextRequest("http://localhost:3000/api/notifications/log-toast", {
        method: "POST",
        body: JSON.stringify({
          title: "Profile saved",
          message: "Your profile has been saved.",
          idempotencyKey: "profile-saved-1",
        }),
      });

      const res = await POST(req);
      expect(res.status).toBe(200);
      const json = await res.json();
      expect(json.success).toBe(true);
      expect(json.data.id).toBe("notif_abc");
      expect(prisma.notification.upsert).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { idempotencyKey: "profile-saved-1" },
          create: expect.objectContaining({
            userId: "db_user_1",
            title: "Profile saved",
            idempotencyKey: "profile-saved-1",
          }),
        })
      );
    });
  });

  describe("JobService Server-Side Guaranteed Notifications", () => {
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
        id: "notif_job_999",
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
          where: { idempotencyKey: "job-completed-job_999" },
          create: expect.objectContaining({
            userId: "user_owner",
            title: "Roadmap Ready",
            type: "ROADMAP",
            actionUrl: "/dashboard/roadmaps/roadmap_123",
            idempotencyKey: "job-completed-job_999",
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
          where: { idempotencyKey: "job-failed-job_fail_1" },
          create: expect.objectContaining({
            userId: "user_owner",
            title: "Interview Task Failed",
            message: "LLM timeout",
            type: "INTERVIEW",
            idempotencyKey: "job-failed-job_fail_1",
          }),
        })
      );
    });
  });
});
