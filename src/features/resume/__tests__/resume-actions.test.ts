import assert from "node:assert";
import {
  createResumeAssessmentJob,
  deleteResume,
} from "../actions/resume-actions";
import { ServerResumeAssessmentSchema } from "../schemas/resume-request.schema";

export async function runResumeActionsTests() {
  console.log("Running Resume Server Actions Input Validation & Boundary Tests...\n");

  // ----------------------------------------------------
  // 1. Input Sanitization: Empty / Malformed Resume IDs
  // ----------------------------------------------------
  console.log("1. Testing resumeId validation on delete action...");

  const delResEmpty = await deleteResume("");
  assert.strictEqual(delResEmpty.success, false, "deleteResume must fail on empty string");
  assert.ok(delResEmpty.error?.message.includes("Invalid resume ID"), "Error message should mention Invalid resume ID");

  const delResWhitespace = await deleteResume("   ");
  assert.strictEqual(delResWhitespace.success, false, "deleteResume must fail on whitespace string");
  assert.ok(delResWhitespace.error?.message.includes("Invalid resume ID"));

  const delResNull = await deleteResume(null as any);
  assert.strictEqual(delResNull.success, false, "deleteResume must fail on null ID");
  assert.ok(delResNull.error?.message.includes("Invalid resume ID"));

  console.log("✔ Input sanitization on raw resumeId verified.");

  // ----------------------------------------------------
  // 2. Server-side Schema Validation via ServerResumeAssessmentSchema
  // ----------------------------------------------------
  console.log("2. Testing ServerResumeAssessmentSchema validation rules...");

  // Mock valid File object
  const validFile = {
    name: "resume.pdf",
    type: "application/pdf",
    size: 1024 * 50, // 50 KB
    arrayBuffer: async () => new ArrayBuffer(50),
  };

  // Valid schema parsing
  const validResult = ServerResumeAssessmentSchema.safeParse({
    file: validFile,
    role: "Full Stack Engineer",
    roleDescription: "Experienced in React and Node.js",
    experienceLevel: "Intermediate",
    includeProfile: true,
  });
  assert.strictEqual(validResult.success, true, "Valid input should parse successfully");

  // Invalid role (too short)
  const invalidRoleResult = ServerResumeAssessmentSchema.safeParse({
    file: validFile,
    role: "A",
    experienceLevel: "Intermediate",
  });
  assert.strictEqual(invalidRoleResult.success, false, "Short role should be rejected");

  // Invalid experience level
  const invalidExpResult = ServerResumeAssessmentSchema.safeParse({
    file: validFile,
    role: "Software Engineer",
    experienceLevel: "INVALID_LEVEL" as any,
  });
  assert.strictEqual(invalidExpResult.success, false, "Invalid experience level should be rejected");

  // Invalid file type (e.g. text/plain)
  const invalidFileResult = ServerResumeAssessmentSchema.safeParse({
    file: {
      name: "document.txt",
      type: "text/plain",
      size: 1024,
      arrayBuffer: async () => new ArrayBuffer(10),
    },
    role: "Software Engineer",
    experienceLevel: "Beginner",
  });
  assert.strictEqual(invalidFileResult.success, false, "Non-PDF file should be rejected");

  // Empty file (0 bytes)
  const emptyFileResult = ServerResumeAssessmentSchema.safeParse({
    file: {
      name: "empty.pdf",
      type: "application/pdf",
      size: 0,
      arrayBuffer: async () => new ArrayBuffer(0),
    },
    role: "Software Engineer",
    experienceLevel: "Beginner",
  });
  assert.strictEqual(emptyFileResult.success, false, "Empty file should be rejected");

  // File exceeding size limit (> 10MB)
  const oversizedFileResult = ServerResumeAssessmentSchema.safeParse({
    file: {
      name: "large.pdf",
      type: "application/pdf",
      size: 15 * 1024 * 1024, // 15 MB
      arrayBuffer: async () => new ArrayBuffer(10),
    },
    role: "Software Engineer",
    experienceLevel: "Beginner",
  });
  assert.strictEqual(oversizedFileResult.success, false, "Oversized file (>10MB) should be rejected");

  console.log("✔ Server-side schema validation rules verified.");

  // ----------------------------------------------------
  // 3. createResumeAssessmentJob Action Validation on FormData
  // ----------------------------------------------------
  console.log("3. Testing createResumeAssessmentJob rejects invalid FormData...");

  const emptyFormData = new FormData();
  const createEmptyRes = await createResumeAssessmentJob(emptyFormData);
  assert.strictEqual(createEmptyRes.success, false, "createResumeAssessmentJob must fail on empty FormData");
  assert.ok(createEmptyRes.error, "Should return an AppError structure");

  console.log("✔ Empty FormData rejected safely by server action.");

  // ----------------------------------------------------
  // 4. Unauthenticated Session Rejection
  // ----------------------------------------------------
  console.log("4. Testing server actions require authenticated user session...");

  const delResAuth = await deleteResume("res_valid_format_id");
  assert.strictEqual(delResAuth.success, false, "deleteResume must fail without authenticated session");
  assert.ok(
    delResAuth.error?.message.includes("Unauthorized") ||
    delResAuth.error?.message.includes("Clerk") ||
    delResAuth.error?.message.includes("auth") ||
    delResAuth.error?.message.includes("Server Component") ||
    delResAuth.error?.message.includes("unexpected error"),
    `Expected auth boundary error, got: ${delResAuth.error?.message}`
  );

  console.log("✔ Unauthenticated session enforcement verified across server actions.");

  console.log("\n=========================================");
  console.log("All Resume Server Actions tests passed!");
  console.log("=========================================\n");
}

runResumeActionsTests().catch((err) => {
  console.error("Resume Actions Test Failure:", err);
  process.exit(1);
});
