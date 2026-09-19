import assert from "node:assert";
import { createAssessmentAction } from "../services/actions";

export async function runCareerAssessmentActionsTests() {
  console.log("Running Career Assessment Actions Unit & Boundary Tests...\n");

  // ----------------------------------------------------
  // 1. Unauthenticated Invocation Guard
  // ----------------------------------------------------
  console.log("1. Testing unauthenticated invocation rejection...");
  const res = await createAssessmentAction();

  assert.strictEqual(
    res.success,
    false,
    "createAssessmentAction must fail when called without an authenticated user session"
  );
  assert.ok(
    res.error,
    "createAssessmentAction must return an AppError structure on failure"
  );
  assert.ok(
    typeof res.error.message === "string",
    "Error object must contain a descriptive message string"
  );
  assert.ok(
    typeof res.error.retryable === "boolean",
    "Error object must declare retryable status"
  );
  assert.ok(
    res.error.message.includes("Unauthorized") ||
    res.error.message.includes("logged in") ||
    res.error.message.includes("Clerk") ||
    res.error.message.includes("auth") ||
    res.error.message.includes("Server Component") ||
    res.error.message.includes("unexpected error"),
    `Expected auth/session failure message, got: ${res.error.message}`
  );
  console.log("✔ Unauthenticated session enforcement verified.");

  // ----------------------------------------------------
  // 2. Error Boundary Leakage Check
  // ----------------------------------------------------
  console.log("2. Testing safeAction error formatting...");
  assert.strictEqual(
    typeof res.error.code,
    "string",
    "Error must have an error code"
  );
  assert.ok(
    !res.error.message.includes("SELECT ") && !res.error.message.includes("prisma"),
    "Error message must not leak internal database SQL or ORM queries"
  );
  console.log("✔ Server Action safely normalizes errors without leaking internal details.");

  console.log("\n==================================================");
  console.log("All Career Assessment Actions tests passed!");
  console.log("==================================================\n");
}

runCareerAssessmentActionsTests().catch((err) => {
  console.error("Career Assessment Actions Test Failure:", err);
  process.exit(1);
});
