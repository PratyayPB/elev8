import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  AssessmentQuotaService,
  formatTimeUntilReset,
} from "../services/assessment-quota.service";
import { prisma } from "@/lib/prisma";
import {
  ASSESSMENT_WEEKLY_QUOTA,
  ASSESSMENT_QUOTA_WINDOW_MS,
} from "../constants";

vi.mock("@/lib/prisma", () => ({
  prisma: {
    careerAssessment: {
      findMany: vi.fn(),
    },
  },
}));

describe("AssessmentQuotaService (Rolling 7-day Window)", () => {
  const mockUserId = "user-test-123";
  const baseNow = new Date("2026-10-29T12:00:00.000Z");

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("formatTimeUntilReset", () => {
    it("should format hours when reset is within 24 hours", () => {
      const resetDate = new Date(baseNow.getTime() + 5 * 60 * 60 * 1000); // 5 hours later
      expect(formatTimeUntilReset(resetDate, baseNow)).toBe("in 5 hours");
    });

    it("should format singular hour", () => {
      const resetDate = new Date(baseNow.getTime() + 45 * 60 * 1000); // 45 minutes -> 1 hour
      expect(formatTimeUntilReset(resetDate, baseNow)).toBe("in 1 hour");
    });

    it("should format days when reset is more than 24 hours", () => {
      const resetDate = new Date(baseNow.getTime() + 3 * 24 * 60 * 60 * 1000); // 3 days later
      expect(formatTimeUntilReset(resetDate, baseNow)).toBe("in 3 days");
    });

    it("should format momentarily when reset time has passed", () => {
      const resetDate = new Date(baseNow.getTime() - 1000);
      expect(formatTimeUntilReset(resetDate, baseNow)).toBe("momentarily");
    });
  });

  describe("getWeeklyQuota", () => {
    it("should return full quota when user has 0 assessments in past 7 days", async () => {
      vi.mocked(prisma.careerAssessment.findMany).mockResolvedValueOnce([]);

      const quota = await AssessmentQuotaService.getWeeklyQuota(mockUserId, baseNow);

      expect(quota.totalAllowed).toBe(3);
      expect(quota.usedThisWeek).toBe(0);
      expect(quota.remaining).toBe(3);
      expect(quota.canGenerate).toBe(true);
      expect(quota.earliestExpiringAt).toBeNull();
      expect(quota.resetFormatted).toBeNull();
    });

    it("should return remaining quota when user has 2 assessments", async () => {
      const assessments = [
        {
          id: "a1",
          createdAt: new Date(baseNow.getTime() - 2 * 24 * 60 * 60 * 1000),
          status: "COMPLETED" as const,
        },
        {
          id: "a2",
          createdAt: new Date(baseNow.getTime() - 1 * 24 * 60 * 60 * 1000),
          status: "COMPLETED" as const,
        },
      ];
      vi.mocked(prisma.careerAssessment.findMany).mockResolvedValueOnce(assessments as any);

      const quota = await AssessmentQuotaService.getWeeklyQuota(mockUserId, baseNow);

      expect(quota.usedThisWeek).toBe(2);
      expect(quota.remaining).toBe(1);
      expect(quota.canGenerate).toBe(true);
      expect(quota.earliestExpiringAt).toBeNull();
    });

    it("should enforce limit when user has 3 assessments (quota reached)", async () => {
      const oldestCreatedAt = new Date(baseNow.getTime() - 4 * 24 * 60 * 60 * 1000); // 4 days ago
      const assessments = [
        { id: "a1", createdAt: oldestCreatedAt, status: "COMPLETED" as const },
        { id: "a2", createdAt: new Date(baseNow.getTime() - 2 * 24 * 60 * 60 * 1000), status: "COMPLETED" as const },
        { id: "a3", createdAt: new Date(baseNow.getTime() - 1 * 24 * 60 * 60 * 1000), status: "COMPLETED" as const },
      ];
      vi.mocked(prisma.careerAssessment.findMany).mockResolvedValueOnce(assessments as any);

      const quota = await AssessmentQuotaService.getWeeklyQuota(mockUserId, baseNow);

      expect(quota.usedThisWeek).toBe(3);
      expect(quota.remaining).toBe(0);
      expect(quota.canGenerate).toBe(false);

      // Oldest is 4 days ago, so it rolls off 7 days after creation (in 3 days from now)
      const expectedExpiry = new Date(oldestCreatedAt.getTime() + ASSESSMENT_QUOTA_WINDOW_MS);
      expect(quota.earliestExpiringAt).toBe(expectedExpiry.toISOString());
      expect(quota.resetFormatted).toBe("in 3 days");
    });

    it("query should pass rolling 7-day window filter and exclude FAILED status", async () => {
      vi.mocked(prisma.careerAssessment.findMany).mockResolvedValueOnce([]);

      await AssessmentQuotaService.getWeeklyQuota(mockUserId, baseNow);

      const expectedWindowStart = new Date(baseNow.getTime() - ASSESSMENT_QUOTA_WINDOW_MS);

      expect(prisma.careerAssessment.findMany).toHaveBeenCalledWith({
        where: {
          userId: mockUserId,
          createdAt: { gte: expectedWindowStart },
          status: { not: "FAILED" },
        },
        select: {
          id: true,
          createdAt: true,
          status: true,
        },
        orderBy: { createdAt: "asc" },
      });
    });
  });

  describe("assertQuotaAvailable", () => {
    it("should not throw when quota is available", async () => {
      vi.mocked(prisma.careerAssessment.findMany).mockResolvedValueOnce([]);

      await expect(
        AssessmentQuotaService.assertQuotaAvailable(mockUserId)
      ).resolves.not.toThrow();
    });

    it("should throw error with reset info when quota is exhausted", async () => {
      const oldestCreatedAt = new Date(baseNow.getTime() - 5 * 24 * 60 * 60 * 1000);
      const assessments = [
        { id: "a1", createdAt: oldestCreatedAt, status: "COMPLETED" as const },
        { id: "a2", createdAt: new Date(), status: "COMPLETED" as const },
        { id: "a3", createdAt: new Date(), status: "COMPLETED" as const },
      ];
      vi.mocked(prisma.careerAssessment.findMany).mockResolvedValueOnce(assessments as any);

      await expect(
        AssessmentQuotaService.assertQuotaAvailable(mockUserId)
      ).rejects.toThrow(/Weekly limit reached \(3\/3 used\)/);
    });
  });
});
