import { describe, it, expect } from "vitest";
import {
  fetchSessionArtifact,
  saveSessionProgress,
  submitInterview,
  retryAssessmentAction,
} from "../actions/session-actions";
import { InterviewArtifact } from "../types";

describe("Session Server Actions Security & Input Validation Tests", () => {
  const dummyArtifact: InterviewArtifact = {
    version: "1.0.0",
    metadata: {
      interviewId: "dummy_id",
      role: "Engineer",
      experienceLevel: "Intermediate",
      difficulty: "Medium",
      interviewType: "Standard Interview",
      questionCount: 1,
      estimatedDuration: "10 mins",
      generatedAt: new Date().toISOString(),
      generatorVersion: "1.0.0",
    },
    questions: [],
    answers: [],
    assessment: null,
  };

  describe("Input Sanitization on ID Parameters", () => {
    it("should reject empty interviewId in fetchSessionArtifact", async () => {
      const res = await fetchSessionArtifact("");
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error.message).toContain("Invalid interview ID");
      }
    });

    it("should reject whitespace interviewId in fetchSessionArtifact", async () => {
      const res = await fetchSessionArtifact("   ");
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error.message).toContain("Invalid interview ID");
      }
    });

    it("should reject empty interviewId in saveSessionProgress", async () => {
      const res = await saveSessionProgress("", "http://blob.url", dummyArtifact);
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error.message).toContain("Invalid interview ID");
      }
    });

    it("should reject empty interviewId in submitInterview", async () => {
      const res = await submitInterview("", "http://blob.url", dummyArtifact);
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error.message).toContain("Invalid interview ID");
      }
    });

    it("should reject empty interviewId in retryAssessmentAction", async () => {
      const res = await retryAssessmentAction("");
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error.message).toContain("Invalid interview ID");
      }
    });
  });

  describe("Unauthenticated Session Enforcement", () => {
    it("should reject fetchSessionArtifact without auth", async () => {
      const res = await fetchSessionArtifact("dummy_session_id");
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error).toBeDefined();
      }
    });

    it("should reject saveSessionProgress without auth", async () => {
      const res = await saveSessionProgress("dummy_session_id", "http://blob.url", dummyArtifact);
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error).toBeDefined();
      }
    });

    it("should reject submitInterview without auth", async () => {
      const res = await submitInterview("dummy_session_id", "http://blob.url", dummyArtifact);
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error).toBeDefined();
      }
    });

    it("should reject retryAssessmentAction without auth", async () => {
      const res = await retryAssessmentAction("dummy_session_id");
      expect(res.success).toBe(false);
      if (!res.success) {
        expect(res.error).toBeDefined();
      }
    });
  });
});
