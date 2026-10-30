import { describe, it, expect, vi, beforeEach } from "vitest";
import { ResumeBuilderService, ResumeBuilderError } from "@/features/resume-builder/services/resume-builder.service";
import { GET as getResumesRoute, POST as createResumeRoute } from "@/app/api/builder/resumes/route";
import { GET as getSingleResumeRoute, PATCH as patchResumeRoute } from "@/app/api/builder/resumes/[resumeId]/route";
import { prisma } from "@/lib/prisma";
import * as authModule from "@/lib/auth";

vi.mock("@/lib/prisma", () => ({
  prisma: {
    resumeBuild: {
      findUnique: vi.fn(),
      findFirst: vi.fn(),
      findMany: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
    user: {
      findUnique: vi.fn(),
      upsert: vi.fn(),
    },
  },
}));

vi.mock("@/services/storage/blob-storage.service", () => ({
  BlobStorageService: {
    uploadJson: vi.fn(),
    delete: vi.fn(),
    fetchJson: vi.fn(),
  },
}));

vi.mock("@/features/progress/services", () => ({
  ModuleActivityService: {
    recordActivity: vi.fn().mockResolvedValue(undefined),
  },
}));

describe("Authorization & Multi-Tenant Boundary Defense", () => {
  const userA = { id: "user_a_uuid", clerkId: "clerk_user_a", email: "user_a@test.com" };
  const userB = { id: "user_b_uuid", clerkId: "clerk_user_b", email: "user_b@test.com" };

  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe("ResumeBuilderService Service-Level Authorization Checks", () => {
    it("allows a user to retrieve their own resume", async () => {
      const resumeA = {
        id: "resume_123",
        userId: userA.id,
        title: "User A Software Engineer Resume",
        status: "DRAFT",
        template: "academic-cv-lite",
      };
      vi.mocked(prisma.resumeBuild.findUnique).mockResolvedValueOnce(resumeA as any);

      const result = await ResumeBuilderService.getResume(userA.id, "resume_123");
      expect(result).toEqual(resumeA);
    });

    it("prevents User A from reading User B's resume (returns 403 RESUME_FORBIDDEN)", async () => {
      const resumeB = {
        id: "resume_of_user_b",
        userId: userB.id,
        title: "User B Private Resume",
        status: "READY",
        template: "academic-cv-lite",
      };
      vi.mocked(prisma.resumeBuild.findUnique).mockResolvedValueOnce(resumeB as any);

      let caughtError: any = null;
      try {
        await ResumeBuilderService.getResume(userA.id, "resume_of_user_b");
      } catch (err: any) {
        caughtError = err;
      }

      expect(caughtError).toBeInstanceOf(ResumeBuilderError);
      expect(caughtError.message).toBe("You do not have permission to access this resume");
      expect(caughtError.statusCode).toBe(403);
      expect(caughtError.code).toBe("RESUME_FORBIDDEN");
    });

    it("throws 404 RESUME_NOT_FOUND if requested resume does not exist", async () => {
      vi.mocked(prisma.resumeBuild.findUnique).mockResolvedValueOnce(null);

      let caughtError: any = null;
      try {
        await ResumeBuilderService.getResume(userA.id, "nonexistent_resume");
      } catch (err: any) {
        caughtError = err;
      }

      expect(caughtError).toBeInstanceOf(ResumeBuilderError);
      expect(caughtError.message).toBe("Resume not found");
      expect(caughtError.statusCode).toBe(404);
      expect(caughtError.code).toBe("RESUME_NOT_FOUND");
    });

    it("prevents User A from deleting User B's resume", async () => {
      const resumeB = {
        id: "resume_of_user_b",
        userId: userB.id,
        title: "User B Resume",
        artifactBlobUrl: "https://blob.vercel-storage.com/resume-b.json",
      };
      vi.mocked(prisma.resumeBuild.findUnique).mockResolvedValueOnce(resumeB as any);

      await expect(
        ResumeBuilderService.deleteResume(userA.id, "resume_of_user_b")
      ).rejects.toThrow("You do not have permission to access this resume");

      expect(prisma.resumeBuild.delete).not.toHaveBeenCalled();
    });

    it("prevents User A from fetching the Blob artifact of User B's resume", async () => {
      const resumeB = {
        id: "resume_of_user_b",
        userId: userB.id,
        title: "User B Resume",
        artifactBlobUrl: "https://blob.vercel-storage.com/resume-b.json",
      };
      vi.mocked(prisma.resumeBuild.findUnique).mockResolvedValueOnce(resumeB as any);

      await expect(
        ResumeBuilderService.getResumeArtifact(userA.id, "resume_of_user_b")
      ).rejects.toThrow("You do not have permission to access this resume");
    });
  });

  describe("API Route-Level Authorization & 401 Unauthenticated Protection", () => {
    it("returns 401 UNAUTHORIZED on GET /api/builder/resumes when unauthenticated", async () => {
      vi.spyOn(authModule, "getOrCreateDbUser").mockRejectedValueOnce(
        new Error("Unauthorized: Please sign in.")
      );

      const response = await getResumesRoute();
      const json = await response.json();

      expect(response.status).toBe(401);
      expect(json.error).toBe("Unauthorized");
      expect(json.code).toBe("UNAUTHORIZED");
    });

    it("returns 401 UNAUTHORIZED on POST /api/builder/resumes when unauthenticated", async () => {
      vi.spyOn(authModule, "getOrCreateDbUser").mockRejectedValueOnce(
        new Error("Unauthorized: Please sign in.")
      );

      const req = {
        json: vi.fn().mockResolvedValue({ title: "My New Resume" }),
      } as any;

      const response = await createResumeRoute(req);
      const json = await response.json();

      expect(response.status).toBe(401);
      expect(json.error).toBe("Unauthorized");
      expect(json.code).toBe("UNAUTHORIZED");
    });

    it("returns 403 on GET /api/builder/resumes/[id] when accessing another user's resume", async () => {
      vi.spyOn(authModule, "getOrCreateDbUser").mockResolvedValueOnce(userA as any);

      const resumeB = {
        id: "resume_b_id",
        userId: userB.id,
        title: "User B Resume",
      };
      vi.mocked(prisma.resumeBuild.findUnique).mockResolvedValueOnce(resumeB as any);

      const params = Promise.resolve({ resumeId: "resume_b_id" });
      const response = await getSingleResumeRoute({} as any, { params });
      const json = await response.json();

      expect(response.status).toBe(403);
      expect(json.code).toBe("RESUME_FORBIDDEN");
      expect(json.error).toBe("You do not have permission to access this resume");
    });

    it("returns 403 on PATCH /api/builder/resumes/[id] when mutating another user's resume", async () => {
      vi.spyOn(authModule, "getOrCreateDbUser").mockResolvedValueOnce(userA as any);

      const resumeB = {
        id: "resume_b_id",
        userId: userB.id,
        title: "User B Resume",
        template: "academic-cv-lite",
      };
      vi.mocked(prisma.resumeBuild.findUnique).mockResolvedValueOnce(resumeB as any);

      const req = {
        json: vi.fn().mockResolvedValue({ status: "READY" }),
      } as any;

      const params = Promise.resolve({ resumeId: "resume_b_id" });
      const response = await patchResumeRoute(req, { params });
      const json = await response.json();

      expect(response.status).toBe(403);
      expect(json.code).toBe("RESUME_FORBIDDEN");
      expect(json.error).toBe("You do not have permission to access this resume");
    });
  });
});
