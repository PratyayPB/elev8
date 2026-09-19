import { describe, it } from "node:test";
import assert from "node:assert";
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
      assert.strictEqual(res.success, false);
      assert.ok(res.error?.message.includes("Invalid interview ID"));
    });

    it("should reject whitespace interviewId in fetchSessionArtifact", async () => {
      const res = await fetchSessionArtifact("   ");
      assert.strictEqual(res.success, false);
      assert.ok(res.error?.message.includes("Invalid interview ID"));
    });

    it("should reject empty interviewId in saveSessionProgress", async () => {
      const res = await saveSessionProgress("", "http://blob.url", dummyArtifact);
      assert.strictEqual(res.success, false);
      assert.ok(res.error?.message.includes("Invalid interview ID"));
    });

    it("should reject empty interviewId in submitInterview", async () => {
      const res = await submitInterview("", "http://blob.url", dummyArtifact);
      assert.strictEqual(res.success, false);
      assert.ok(res.error?.message.includes("Invalid interview ID"));
    });

    it("should reject empty interviewId in retryAssessmentAction", async () => {
      const res = await retryAssessmentAction("");
      assert.strictEqual(res.success, false);
      assert.ok(res.error?.message.includes("Invalid interview ID"));
    });
  });

  describe("Unauthenticated Session Enforcement", () => {
    it("should reject fetchSessionArtifact without auth", async () => {
      const res = await fetchSessionArtifact("dummy_session_id");
      assert.strictEqual(res.success, false);
      assert.ok(res.error);
    });

    it("should reject saveSessionProgress without auth", async () => {
      const res = await saveSessionProgress("dummy_session_id", "http://blob.url", dummyArtifact);
      assert.strictEqual(res.success, false);
      assert.ok(res.error);
    });

    it("should reject submitInterview without auth", async () => {
      const res = await submitInterview("dummy_session_id", "http://blob.url", dummyArtifact);
      assert.strictEqual(res.success, false);
      assert.ok(res.error);
    });

    it("should reject retryAssessmentAction without auth", async () => {
      const res = await retryAssessmentAction("dummy_session_id");
      assert.strictEqual(res.success, false);
      assert.ok(res.error);
    });
  });
});
