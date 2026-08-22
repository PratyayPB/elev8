import assert from "node:assert";
import {
  normalizeSkillForLookup,
  resolveUserSkillsToCanonical,
} from "../utils/skill-normalizer";

export async function runSkillNormalizerTests() {
  console.log("Running Skill Normalizer Unit Tests...\n");

  // 1. Basic normalization
  console.log("1. Testing basic normalization...");
  assert.strictEqual(normalizeSkillForLookup("  React  "), "react");
  assert.strictEqual(normalizeSkillForLookup("JAVASCRIPT"), "javascript");
  assert.strictEqual(normalizeSkillForLookup("Node.js"), "node.js");
  console.log("✔ Basic normalization passed.");

  // 2. Alias resolution
  console.log("2. Testing alias resolution...");
  assert.strictEqual(normalizeSkillForLookup("JS"), "javascript");
  assert.strictEqual(normalizeSkillForLookup("ts"), "typescript");
  assert.strictEqual(normalizeSkillForLookup("Postgres"), "postgresql");
  assert.strictEqual(normalizeSkillForLookup("k8s"), "kubernetes");
  assert.strictEqual(normalizeSkillForLookup("Amazon Web Services"), "aws");
  assert.strictEqual(normalizeSkillForLookup("DSA"), "data structures & algorithms");
  assert.strictEqual(normalizeSkillForLookup("CI/CD"), "ci/cd");
  console.log("✔ Alias resolution passed.");

  // 3. Unknown skill preservation
  console.log("3. Testing unknown skill preservation...");
  assert.strictEqual(
    normalizeSkillForLookup("CustomProprietaryFramework"),
    "customproprietaryframework"
  );
  console.log("✔ Unknown skills preserved consistently.");

  // 4. resolveUserSkillsToCanonical map
  console.log("4. Testing resolveUserSkillsToCanonical...");
  const userSkills = [
    { name: "JS", proficiency: "ADVANCED" as const },
    { name: "ReactJS", proficiency: "INTERMEDIATE" as const },
    { name: "PostgreSQL", proficiency: "BASIC" as const },
  ];

  const resolved = resolveUserSkillsToCanonical(userSkills);
  assert.strictEqual(resolved.size, 3);
  assert.strictEqual(resolved.get("javascript")?.proficiency, "ADVANCED");
  assert.strictEqual(resolved.get("react")?.proficiency, "INTERMEDIATE");
  assert.strictEqual(resolved.get("postgresql")?.proficiency, "BASIC");
  console.log("✔ User skill resolution map built correctly.");

  console.log("\n==============================================");
  console.log("All Skill Normalizer tests passed!");
  console.log("==============================================\n");
}

if (require.main === module) {
  runSkillNormalizerTests().catch((err) => {
    console.error("Test failed:", err);
    process.exit(1);
  });
}
