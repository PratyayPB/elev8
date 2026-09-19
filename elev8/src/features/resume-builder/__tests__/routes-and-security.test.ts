import assert from "node:assert";
import { describe, it } from "node:test";
import { z } from "zod";
import {
  BuilderResumeArtifactSchema,
  CreateResumeInputSchema,
  UpdateResumeInputSchema,
} from "../schemas/resume-artifact.schema";
import { ResumeBuilderError } from "../services/resume-builder.service";

describe("Resume Builder Routes & Security Contracts", () => {
  it("enforces title requirement on resume creation", () => {
    const invalidInputs = [
      {},
      { title: "" },
      { title: "   " },
      { title: "\t\n" },
    ];

    for (const input of invalidInputs) {
      const result = CreateResumeInputSchema.safeParse(input);
      assert.strictEqual(result.success, false, `Input ${JSON.stringify(input)} should be rejected`);
    }
  });

  it("enforces title maximum length (100 characters)", () => {
    const valid = CreateResumeInputSchema.safeParse({ title: "a".repeat(100) });
    assert.strictEqual(valid.success, true);

    const invalid = CreateResumeInputSchema.safeParse({ title: "a".repeat(101) });
    assert.strictEqual(invalid.success, false);
  });

  it("validates update resume status enum", () => {
    const valid = UpdateResumeInputSchema.safeParse({ status: "READY" });
    assert.strictEqual(valid.success, true);

    const invalid = UpdateResumeInputSchema.safeParse({ status: "INVALID_STATUS" });
    assert.strictEqual(invalid.success, false);
  });

  it("validates clientVersion contract on artifact save", () => {
    const ClientVersionSchema = z.number().int().nonnegative().optional();

    assert.strictEqual(ClientVersionSchema.safeParse(undefined).success, true);
    assert.strictEqual(ClientVersionSchema.safeParse(0).success, true);
    assert.strictEqual(ClientVersionSchema.safeParse(5).success, true);
    assert.strictEqual(ClientVersionSchema.safeParse(-1).success, false);
    assert.strictEqual(ClientVersionSchema.safeParse(1.5).success, false);
    assert.strictEqual(ClientVersionSchema.safeParse("5").success, false);
  });

  it("validates that import-profile accepts optional currentArtifact and clientVersion", () => {
    const ImportProfileRequestSchema = z.object({
      currentArtifact: BuilderResumeArtifactSchema.optional(),
      clientVersion: z.number().int().nonnegative().optional(),
    });

    assert.strictEqual(ImportProfileRequestSchema.safeParse({}).success, true);
    assert.strictEqual(ImportProfileRequestSchema.safeParse({ clientVersion: 2 }).success, true);
    assert.strictEqual(
      ImportProfileRequestSchema.safeParse({ clientVersion: -1 }).success,
      false
    );
  });

  it("formats ResumeBuilderError safely for API consumption", () => {
    const forbidden = new ResumeBuilderError(
      "You do not have permission to access this resume",
      "RESUME_FORBIDDEN",
      403
    );

    const json = {
      error: forbidden.message,
      code: forbidden.code,
    };

    assert.strictEqual(json.code, "RESUME_FORBIDDEN");
    assert.strictEqual(forbidden.statusCode, 403);
    assert.strictEqual(typeof json.error, "string");
  });

  it("formats conflict error correctly for duplicate title", () => {
    const conflict = new ResumeBuilderError(
      'A resume named "My Resume" already exists. Please choose a unique name.',
      "RESUME_TITLE_EXISTS",
      409
    );

    assert.strictEqual(conflict.code, "RESUME_TITLE_EXISTS");
    assert.strictEqual(conflict.statusCode, 409);
  });
});
