import assert from "node:assert";
import { AssessmentOutputSchema } from "../schemas";

export async function runCareerAssessmentOutputTests() {
  console.log("Running Career Assessment Output Validation Tests...\n");

  // 1. Valid Output
  console.log("1. Testing valid output parsing...");
  const validOutput = {
    readinessScore: 78,
    strengths: [
      "Solid TypeScript and React foundation",
      "Demonstrated experience with modern state management",
    ],
    gaps: [
      "Limited distributed systems and backend exposure",
      "CI/CD and containerization fundamentals need improvement",
    ],
    suggestedFocusAreas: [
      "Node.js Backend Architecture",
      "Docker & Kubernetes",
      "PostgreSQL Optimization",
    ],
    narrative:
      "The candidate possesses a strong frontend engineering foundation with clear direction towards full stack development. Targeting foundational backend practices will significantly enhance overall readiness.",
  };

  const parsed = AssessmentOutputSchema.parse(validOutput);
  assert.strictEqual(parsed.readinessScore, 78);
  assert.strictEqual(parsed.strengths.length, 2);
  assert.strictEqual(parsed.gaps.length, 2);
  assert.strictEqual(parsed.suggestedFocusAreas.length, 3);
  console.log("✔ Valid output parsed successfully.");

  // 2. Out-of-bounds readinessScore (< 0)
  console.log("2. Testing negative readinessScore rejection...");
  assert.throws(
    () =>
      AssessmentOutputSchema.parse({
        ...validOutput,
        readinessScore: -5,
      }),
    /Readiness score must be at least 0/
  );
  console.log("✔ Negative score correctly rejected.");

  // 3. Out-of-bounds readinessScore (> 100)
  console.log("3. Testing > 100 readinessScore rejection...");
  assert.throws(
    () =>
      AssessmentOutputSchema.parse({
        ...validOutput,
        readinessScore: 105,
      }),
    /Readiness score must be at most 100/
  );
  console.log("✔ Score > 100 correctly rejected.");

  // 4. Excess array length (> 5 items)
  console.log("4. Testing array length limit rejection (> 5 items)...");
  assert.throws(
    () =>
      AssessmentOutputSchema.parse({
        ...validOutput,
        strengths: ["S1", "S2", "S3", "S4", "S5", "S6"],
      }),
    /At most 5 strengths allowed/
  );
  console.log("✔ Over-sized array correctly rejected.");

  // 5. Empty narrative rejection
  console.log("5. Testing empty narrative rejection...");
  assert.throws(
    () =>
      AssessmentOutputSchema.parse({
        ...validOutput,
        narrative: "",
      }),
    /Narrative cannot be empty/
  );
  console.log("✔ Empty narrative correctly rejected.");

  // 6. Narrative exceeding 2000 chars rejection
  console.log("6. Testing excess narrative length rejection...");
  assert.throws(
    () =>
      AssessmentOutputSchema.parse({
        ...validOutput,
        narrative: "a".repeat(2001),
      }),
    /Narrative must not exceed 2000 characters/
  );
  console.log("✔ Excessive narrative length correctly rejected.");

  console.log("\n==============================================");
  console.log("All Career Assessment Output tests passed!");
  console.log("==============================================\n");
}

if (require.main === module) {
  runCareerAssessmentOutputTests().catch((err) => {
    console.error("Test failed:", err);
    process.exit(1);
  });
}
