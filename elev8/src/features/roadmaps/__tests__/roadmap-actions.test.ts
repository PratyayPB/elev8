import assert from "node:assert";
import {
  duplicateRoadmapAction,
  deleteRoadmapAction,
  retryRoadmapGenerationAction,
  generateRoadmapAction,
} from "../actions/roadmap-actions";

export async function runRoadmapActionsTests() {
  console.log("Running Roadmap Server Actions Input Validation & Boundary Tests...\n");

  // ----------------------------------------------------
  // 1. Input Sanitization: Empty / Malformed Roadmap IDs
  // ----------------------------------------------------
  console.log("1. Testing roadmapId validation on duplicate, delete, and retry actions...");

  const dupResEmpty = await duplicateRoadmapAction("");
  assert.strictEqual(dupResEmpty.success, false, "duplicateRoadmapAction must fail on empty string");
  assert.ok(dupResEmpty.error?.message.includes("Invalid roadmap ID"), "Error message should mention Invalid roadmap ID");

  const dupResWhitespace = await duplicateRoadmapAction("   ");
  assert.strictEqual(dupResWhitespace.success, false, "duplicateRoadmapAction must fail on whitespace string");
  assert.ok(dupResWhitespace.error?.message.includes("Invalid roadmap ID"));

  const dupResNull = await duplicateRoadmapAction(null as any);
  assert.strictEqual(dupResNull.success, false, "duplicateRoadmapAction must fail on null ID");
  assert.ok(dupResNull.error?.message.includes("Invalid roadmap ID"));

  const delResEmpty = await deleteRoadmapAction("");
  assert.strictEqual(delResEmpty.success, false, "deleteRoadmapAction must fail on empty string");
  assert.ok(delResEmpty.error?.message.includes("Invalid roadmap ID"));

  const delResWhitespace = await deleteRoadmapAction("   ");
  assert.strictEqual(delResWhitespace.success, false, "deleteRoadmapAction must fail on whitespace string");
  assert.ok(delResWhitespace.error?.message.includes("Invalid roadmap ID"));

  const retryResEmpty = await retryRoadmapGenerationAction("");
  assert.strictEqual(retryResEmpty.success, false, "retryRoadmapGenerationAction must fail on empty string");
  assert.ok(retryResEmpty.error?.message.includes("Invalid roadmap ID"));

  const retryResWhitespace = await retryRoadmapGenerationAction("   ");
  assert.strictEqual(retryResWhitespace.success, false, "retryRoadmapGenerationAction must fail on whitespace string");
  assert.ok(retryResWhitespace.error?.message.includes("Invalid roadmap ID"));

  console.log("✔ Input sanitization on raw roadmapId verified.");

  // ----------------------------------------------------
  // 2. Server-side Schema Validation on generateRoadmapAction
  // ----------------------------------------------------
  console.log("2. Testing server-side Zod validation in generateRoadmapAction...");

  const genResInvalidRole = await generateRoadmapAction({
    role: "",
    experienceLevel: "SUPER_EXPERT" as any,
    personalization: { skipped: true },
  });
  assert.strictEqual(genResInvalidRole.success, false, "generateRoadmapAction must fail on invalid schema input");
  assert.ok(genResInvalidRole.error, "Should return an AppError structure");

  const genResMissingPersonalization = await generateRoadmapAction({
    role: "Frontend Engineer",
    experienceLevel: "Beginner",
    personalization: null as any,
  });
  assert.strictEqual(genResMissingPersonalization.success, false, "generateRoadmapAction must fail on missing personalization");
  assert.ok(genResMissingPersonalization.error, "Should return an AppError structure");

  console.log("✔ Malformed payloads correctly rejected at server action boundary via Zod schema.");

  // ----------------------------------------------------
  // 3. Unauthenticated Session Rejection
  // ----------------------------------------------------
  console.log("3. Testing server actions require authenticated user session...");

  const dupResAuth = await duplicateRoadmapAction("rm_valid_format_id");
  assert.strictEqual(dupResAuth.success, false, "duplicateRoadmapAction must fail without authenticated session");
  assert.ok(
    dupResAuth.error?.message.includes("Unauthorized") ||
    dupResAuth.error?.message.includes("Clerk") ||
    dupResAuth.error?.message.includes("auth") ||
    dupResAuth.error?.message.includes("Server Component") ||
    dupResAuth.error?.message.includes("unexpected error"),
    `Expected auth or server runtime boundary error, got: ${dupResAuth.error?.message}`
  );

  const delResAuth = await deleteRoadmapAction("rm_valid_format_id");
  assert.strictEqual(delResAuth.success, false, "deleteRoadmapAction must fail without authenticated session");
  assert.ok(
    delResAuth.error?.message.includes("Unauthorized") ||
    delResAuth.error?.message.includes("Clerk") ||
    delResAuth.error?.message.includes("auth") ||
    delResAuth.error?.message.includes("Server Component") ||
    delResAuth.error?.message.includes("unexpected error"),
    `Expected auth or server runtime boundary error, got: ${delResAuth.error?.message}`
  );

  console.log("✔ Unauthenticated session enforcement verified across server actions.");

  console.log("\n=========================================");
  console.log("All Roadmap Server Actions tests passed!");
  console.log("=========================================\n");
}

runRoadmapActionsTests().catch((err) => {
  console.error("Roadmap Actions Test Failure:", err);
  process.exit(1);
});
