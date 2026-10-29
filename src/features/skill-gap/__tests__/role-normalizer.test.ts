import assert from "node:assert";
import {
  normalizeRoleName,
  resolveRoleAlias,
} from "../utils/role-normalizer";

export async function runRoleNormalizerTests() {
  console.log("Running Role Normalizer Unit Tests...\n");

  // 1. Slugification
  console.log("1. Testing role slugification...");
  assert.strictEqual(normalizeRoleName("Full Stack Developer"), "full-stack-developer");
  assert.strictEqual(normalizeRoleName("FRONTEND DEVELOPER"), "frontend-developer");
  assert.strictEqual(normalizeRoleName("  Data  Scientist  "), "data-scientist");
  assert.strictEqual(normalizeRoleName("UI/UX Designer"), "ui-ux-designer");
  console.log("✔ Role slugification passed.");

  // 2. Role Alias Resolution
  console.log("2. Testing role alias resolution...");
  assert.strictEqual(
    resolveRoleAlias("Full Stack Engineer"),
    "full-stack-developer"
  );
  assert.strictEqual(
    resolveRoleAlias("Frontend Dev"),
    "frontend-developer"
  );
  assert.strictEqual(
    resolveRoleAlias("Backend Engineer"),
    "backend-developer"
  );
  assert.strictEqual(
    resolveRoleAlias("SWE"),
    "software-engineer"
  );
  assert.strictEqual(
    resolveRoleAlias("ML Engineer"),
    "machine-learning-engineer"
  );
  assert.strictEqual(
    resolveRoleAlias("Cloud Architect"),
    "cloud-engineer"
  );
  assert.strictEqual(
    resolveRoleAlias("SDET"),
    "automation-test-engineer"
  );
  console.log("✔ Role alias resolution passed.");

  // 3. Unrecognized Role returns slug
  console.log("3. Testing unrecognized role resolution...");
  assert.strictEqual(
    resolveRoleAlias("Quantum Computing Specialist"),
    "quantum-computing-specialist"
  );
  console.log("✔ Unrecognized role slug returned cleanly.");

  console.log("\n==============================================");
  console.log("All Role Normalizer tests passed!");
  console.log("==============================================\n");
}

if (require.main === module) {
  runRoleNormalizerTests().catch((err) => {
    console.error("Test failed:", err);
    process.exit(1);
  });
}
