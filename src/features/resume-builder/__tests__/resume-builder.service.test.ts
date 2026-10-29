import assert from "node:assert";
import { describe, it } from "node:test";
import { createEmptyResumeArtifact } from "../utils/create-empty-resume";
import {
  BuilderResumeArtifactSchema,
  CreateResumeInputSchema,
  UpdateResumeInputSchema,
} from "../schemas/resume-artifact.schema";
import { ResumeBuilderError } from "../services/resume-builder.service";

describe("ResumeBuilder Service & Foundation Unit Tests", () => {
  const resumeId = "resume_test_123";

  it("creates a properly structured empty resume artifact", () => {
    const emptyArtifact = createEmptyResumeArtifact(resumeId);

    assert.strictEqual(emptyArtifact.resumeId, resumeId);
    assert.strictEqual(emptyArtifact.version, 1);
    assert.strictEqual(emptyArtifact.professionalSummary, "");
    assert.deepStrictEqual(emptyArtifact.education, []);
    assert.deepStrictEqual(emptyArtifact.experience, []);
    assert.deepStrictEqual(emptyArtifact.projects, []);
    assert.deepStrictEqual(emptyArtifact.skills, []);
    assert.deepStrictEqual(emptyArtifact.certifications, []);
    assert.deepStrictEqual(emptyArtifact.achievements, []);
  });

  it("validates empty artifact against BuilderResumeArtifactSchema", () => {
    const emptyArtifact = createEmptyResumeArtifact(resumeId);
    const artifactValidation = BuilderResumeArtifactSchema.safeParse(emptyArtifact);
    assert.strictEqual(artifactValidation.success, true, "Empty artifact must pass Zod validation");
  });

  it("validates and trims CreateResumeInput", () => {
    const validCreateInput = CreateResumeInputSchema.safeParse({
      title: "  Software Engineer Resume  ",
      template: "academic-cv-lite",
    });
    assert.strictEqual(validCreateInput.success, true);
    if (validCreateInput.success) {
      assert.strictEqual(validCreateInput.data.title, "Software Engineer Resume", "Title should be trimmed");
      assert.strictEqual(validCreateInput.data.template, "academic-cv-lite");
    }

    const emptyTitleInput = CreateResumeInputSchema.safeParse({
      title: "",
    });
    assert.strictEqual(emptyTitleInput.success, false, "Empty title must fail");

    const whitespaceTitleInput = CreateResumeInputSchema.safeParse({
      title: "    ",
    });
    assert.strictEqual(whitespaceTitleInput.success, false, "Whitespace-only title must fail");

    const tooLongTitleInput = CreateResumeInputSchema.safeParse({
      title: "a".repeat(101),
    });
    assert.strictEqual(tooLongTitleInput.success, false, "Title over 100 chars must fail");
  });

  it("validates and trims UpdateResumeInput", () => {
    const validUpdateInput = UpdateResumeInputSchema.safeParse({
      title: "  Updated Title  ",
      status: "READY",
    });
    assert.strictEqual(validUpdateInput.success, true);
    if (validUpdateInput.success) {
      assert.strictEqual(validUpdateInput.data.title, "Updated Title", "Updated title should be trimmed");
    }

    const whitespaceUpdateInput = UpdateResumeInputSchema.safeParse({
      title: "   ",
    });
    assert.strictEqual(whitespaceUpdateInput.success, false, "Whitespace-only update title must fail");
  });

  it("rejects invalid artifact schema", () => {
    const invalidArtifact = {
      resumeId,
      version: "not_a_number",
    };
    const invalidArtifactValidation = BuilderResumeArtifactSchema.safeParse(invalidArtifact);
    assert.strictEqual(invalidArtifactValidation.success, false);
  });

  it("constructs ResumeBuilderError with correct code and status code", () => {
    const err = new ResumeBuilderError("Forbidden access", "RESUME_FORBIDDEN", 403);
    assert.strictEqual(err.message, "Forbidden access");
    assert.strictEqual(err.code, "RESUME_FORBIDDEN");
    assert.strictEqual(err.statusCode, 403);
    assert.strictEqual(err.name, "ResumeBuilderError");
  });
});
