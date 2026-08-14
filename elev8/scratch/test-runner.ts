import assert from "node:assert";

// Quick validation runner for resume builder foundation
import { createEmptyResumeArtifact } from "../src/features/resume-builder/utils/create-empty-resume";
import { BuilderResumeArtifactSchema, CreateResumeInputSchema } from "../src/features/resume-builder/schemas/resume-artifact.schema";

console.log("Running foundation validations...");

// Test 1: Empty resume artifact creation
const artifact = createEmptyResumeArtifact("test_resume_123");
assert.strictEqual(artifact.resumeId, "test_resume_123");
assert.strictEqual(artifact.version, 1);
assert.deepStrictEqual(artifact.education, []);
assert.deepStrictEqual(artifact.experience, []);

// Test 2: Zod schema validation
const parseResult = BuilderResumeArtifactSchema.safeParse(artifact);
assert.strictEqual(parseResult.success, true, "Empty artifact should be valid");

// Test 3: Input schema validation
const inputResult = CreateResumeInputSchema.safeParse({ title: "My Resume", template: "MODERN" });
assert.strictEqual(inputResult.success, true);
assert.strictEqual(inputResult.data?.template, "MODERN");

console.log("All foundation unit assertions passed successfully!");
