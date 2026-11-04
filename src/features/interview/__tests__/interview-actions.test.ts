import { describe, it, expect } from "vitest";
import {
  createInterviewJob,
  retryInterviewGenerationAction,
  retryGlobalInterviewAction,
  startPersonalizedSessionAction,
  startGlobalInterviewSessionAction,
} from "../actions/interview-actions";
import { deleteInterview, getWorkspaceInterviews } from "../actions/workspace-actions";

describe("Interview Server Actions Security & Input Validation Tests", () => {
  describe("Input Sanitization on ID Parameters", () => {
    it("should reject empty interviewId in retryInterviewGenerationAction", async () => {
      const res = await retryInterviewGenerationAction("");
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error.message).toContain("Invalid interview ID");
      }
    });

    it("should reject whitespace interviewId in retryInterviewGenerationAction", async () => {
      const res = await retryInterviewGenerationAction("   ");
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error.message).toContain("Invalid interview ID");
      }
    });

    it("should reject empty globalInterviewTemplateId in retryGlobalInterviewAction", async () => {
      const res = await retryGlobalInterviewAction("");
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error.message).toContain("Invalid global template ID");
      }
    });

    it("should reject empty interviewTemplateId in startPersonalizedSessionAction", async () => {
      const res = await startPersonalizedSessionAction("");
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error.message).toContain("Invalid template ID");
      }
    });

    it("should reject empty globalInterviewTemplateId in startGlobalInterviewSessionAction", async () => {
      const res = await startGlobalInterviewSessionAction("");
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error.message).toContain("Invalid global template ID");
      }
    });

    it("should reject empty interviewId in deleteInterview", async () => {
      const res = await deleteInterview("");
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error.message).toContain("Invalid interview ID");
      }
    });
  });

  describe("Schema Validation on createInterviewJob", () => {
    it("should reject request with invalid role length", async () => {
      const res = await createInterviewJob({
        role: "A",
        experienceLevel: "Intermediate",
        difficulty: "Medium",
        interviewType: "Standard Interview",
        personalization: { skipped: true },
      });
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error).toBeDefined();
      }
    });

    it("should reject request with invalid experienceLevel", async () => {
      const res = await createInterviewJob({
        role: "Backend Engineer",
        experienceLevel: "SUPER_EXPERT" as unknown as "Intermediate",
        difficulty: "Medium",
        interviewType: "Standard Interview",
        personalization: { skipped: true },
      });
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error).toBeDefined();
      }
    });

    it("should reject request with invalid difficulty", async () => {
      const res = await createInterviewJob({
        role: "Backend Engineer",
        experienceLevel: "Intermediate",
        difficulty: "NIGHTMARE" as unknown as "Medium",
        interviewType: "Standard Interview",
        personalization: { skipped: true },
      });
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error).toBeDefined();
      }
    });
  });

  describe("Unauthenticated Session Enforcement", () => {
    it("should reject createInterviewJob without auth", async () => {
      const res = await createInterviewJob({
        role: "Frontend Engineer",
        experienceLevel: "Intermediate",
        difficulty: "Medium",
        interviewType: "Standard Interview",
        personalization: { skipped: true },
      });
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error).toBeDefined();
      }
    });

    it("should reject retryInterviewGenerationAction without auth", async () => {
      const res = await retryInterviewGenerationAction("valid_id_format");
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error).toBeDefined();
      }
    });

    it("should reject deleteInterview without auth", async () => {
      const res = await deleteInterview("valid_id_format");
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error).toBeDefined();
      }
    });

    it("should reject getWorkspaceInterviews without auth", async () => {
      const res = await getWorkspaceInterviews();
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error).toBeDefined();
      }
    });
  });
});
