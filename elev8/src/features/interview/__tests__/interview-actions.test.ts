import { describe, it } from "node:test";
import assert from "node:assert";
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
      assert.strictEqual(res.success, false);
      assert.ok(res.error?.message.includes("Invalid interview ID"));
    });

    it("should reject whitespace interviewId in retryInterviewGenerationAction", async () => {
      const res = await retryInterviewGenerationAction("   ");
      assert.strictEqual(res.success, false);
      assert.ok(res.error?.message.includes("Invalid interview ID"));
    });

    it("should reject empty globalInterviewTemplateId in retryGlobalInterviewAction", async () => {
      const res = await retryGlobalInterviewAction("");
      assert.strictEqual(res.success, false);
      assert.ok(res.error?.message.includes("Invalid global template ID"));
    });

    it("should reject empty interviewTemplateId in startPersonalizedSessionAction", async () => {
      const res = await startPersonalizedSessionAction("");
      assert.strictEqual(res.success, false);
      assert.ok(res.error?.message.includes("Invalid template ID"));
    });

    it("should reject empty globalInterviewTemplateId in startGlobalInterviewSessionAction", async () => {
      const res = await startGlobalInterviewSessionAction("");
      assert.strictEqual(res.success, false);
      assert.ok(res.error?.message.includes("Invalid global template ID"));
    });

    it("should reject empty interviewId in deleteInterview", async () => {
      const res = await deleteInterview("");
      assert.strictEqual(res.success, false);
      assert.ok(res.error?.message.includes("Invalid interview ID"));
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
      assert.strictEqual(res.success, false);
      assert.ok(res.error);
    });

    it("should reject request with invalid experienceLevel", async () => {
      const res = await createInterviewJob({
        role: "Backend Engineer",
        experienceLevel: "SUPER_EXPERT" as unknown as "Intermediate",
        difficulty: "Medium",
        interviewType: "Standard Interview",
        personalization: { skipped: true },
      });
      assert.strictEqual(res.success, false);
      assert.ok(res.error);
    });

    it("should reject request with invalid difficulty", async () => {
      const res = await createInterviewJob({
        role: "Backend Engineer",
        experienceLevel: "Intermediate",
        difficulty: "NIGHTMARE" as unknown as "Medium",
        interviewType: "Standard Interview",
        personalization: { skipped: true },
      });
      assert.strictEqual(res.success, false);
      assert.ok(res.error);
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
      assert.strictEqual(res.success, false);
      assert.ok(res.error);
    });

    it("should reject retryInterviewGenerationAction without auth", async () => {
      const res = await retryInterviewGenerationAction("valid_id_format");
      assert.strictEqual(res.success, false);
      assert.ok(res.error);
    });

    it("should reject deleteInterview without auth", async () => {
      const res = await deleteInterview("valid_id_format");
      assert.strictEqual(res.success, false);
      assert.ok(res.error);
    });

    it("should reject getWorkspaceInterviews without auth", async () => {
      const res = await getWorkspaceInterviews();
      assert.strictEqual(res.success, false);
      assert.ok(res.error);
    });
  });
});
