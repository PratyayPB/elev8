import assert from "node:assert";
import { createEmptyResumeArtifact } from "../utils/create-empty-resume";
import {
  BuilderResumeArtifactSchema,
  CreateResumeInputSchema,
  UpdateResumeInputSchema,
} from "../schemas/resume-artifact.schema";

export async function runResumeBuilderTests() {
  console.log("Running ResumeBuilder foundation unit tests...");

  // 1. Creation & Default Artifact structure
  const resumeId = "resume_test_123";
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

  // 2. Zod Artifact Validation
  const artifactValidation = BuilderResumeArtifactSchema.safeParse(emptyArtifact);
  assert.strictEqual(artifactValidation.success, true, "Empty artifact must pass Zod validation");

  // 3. Create Input Validation
  const validCreateInput = CreateResumeInputSchema.safeParse({
    title: "Software Engineer Resume",
    targetRole: "Full Stack Developer",
    template: "MODERN",
  });
  assert.strictEqual(validCreateInput.success, true);
  if (validCreateInput.success) {
    assert.strictEqual(validCreateInput.data.title, "Software Engineer Resume");
    assert.strictEqual(validCreateInput.data.template, "MODERN");
  }

  const invalidCreateInput = CreateResumeInputSchema.safeParse({
    title: "", // Min length 1
  });
  assert.strictEqual(invalidCreateInput.success, false);

  // 4. Update Input Validation
  const validUpdateInput = UpdateResumeInputSchema.safeParse({
    title: "Updated Title",
    status: "READY",
  });
  assert.strictEqual(validUpdateInput.success, true);

  // 5. Invalid Artifact Schema Rejection
  const invalidArtifact = {
    resumeId,
    version: "not_a_number",
  };
  const invalidArtifactValidation = BuilderResumeArtifactSchema.safeParse(invalidArtifact);
  assert.strictEqual(invalidArtifactValidation.success, false);

  console.log("All ResumeBuilder foundation unit tests passed!");
}

// Execute tests if called directly via CLI
if (require.main === module) {
  runResumeBuilderTests().catch((err) => {
    console.error("Test failure:", err);
    process.exit(1);
  });
}
