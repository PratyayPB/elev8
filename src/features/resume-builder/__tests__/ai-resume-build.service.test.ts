import assert from "node:assert";
import { describe, it } from "node:test";
import {
  AiBuildResumeInputSchema,
  ResumeCompanyTypeEnum,
} from "../schemas/ai-build.schema";
import { ResumeBuilderError } from "../services/resume-builder.service";

describe("AI Resume Build Service & Validation Tests", () => {
  it("validates valid AI build input", () => {
    const validInput = {
      targetJobTitle: "Staff Software Engineer",
      jobDescription: "We are seeking a senior engineer with 5+ years of experience in distributed systems.",
      targetCompany: "Acme Corp",
      targetCompanyType: "STARTUP",
    };

    const parseResult = AiBuildResumeInputSchema.safeParse(validInput);
    assert.strictEqual(parseResult.success, true);
    if (parseResult.success) {
      assert.strictEqual(parseResult.data.targetJobTitle, "Staff Software Engineer");
      assert.strictEqual(parseResult.data.targetCompanyType, "STARTUP");
    }
  });

  it("rejects targetJobTitle with less than 2 characters", () => {
    const invalidInput = {
      targetJobTitle: "A",
      jobDescription: "Detailed job description for engineering position.",
    };

    const parseResult = AiBuildResumeInputSchema.safeParse(invalidInput);
    assert.strictEqual(parseResult.success, false);
  });

  it("rejects jobDescription with less than 10 characters", () => {
    const invalidInput = {
      targetJobTitle: "Software Engineer",
      jobDescription: "Too short",
    };

    const parseResult = AiBuildResumeInputSchema.safeParse(invalidInput);
    assert.strictEqual(parseResult.success, false);
  });

  it("rejects invalid targetCompanyType enum value", () => {
    const invalidInput = {
      targetJobTitle: "Software Engineer",
      jobDescription: "Detailed job description with more than ten characters.",
      targetCompanyType: "INVALID_COMPANY_TYPE",
    };

    const parseResult = AiBuildResumeInputSchema.safeParse(invalidInput);
    assert.strictEqual(parseResult.success, false);
  });

  it("ResumeBuilderError handles AI build error codes properly", () => {
    const incompleteErr = new ResumeBuilderError(
      "Profile is incomplete. A 100% completed profile is required before using AI Resume Build.",
      "PROFILE_INCOMPLETE",
      400
    );
    assert.strictEqual(incompleteErr.code, "PROFILE_INCOMPLETE");
    assert.strictEqual(incompleteErr.statusCode, 400);

    const notFoundErr = new ResumeBuilderError("Resume not found.", "RESUME_NOT_FOUND", 404);
    assert.strictEqual(notFoundErr.code, "RESUME_NOT_FOUND");
    assert.strictEqual(notFoundErr.statusCode, 404);

    const forbiddenErr = new ResumeBuilderError("Unauthorized access to resume.", "RESUME_FORBIDDEN", 403);
    assert.strictEqual(forbiddenErr.code, "RESUME_FORBIDDEN");
    assert.strictEqual(forbiddenErr.statusCode, 403);
  });
});
