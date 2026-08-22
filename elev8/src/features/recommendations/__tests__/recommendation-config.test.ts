import assert from "node:assert";
import {
  SCORING_WEIGHTS,
  GOAL_DEFAULT_PRIORITIES,
  GOAL_ALIGNMENT_MATRIX,
  RECOMMENDATION_CONFIG,
} from "../config/recommendation.config";
import { PrimaryGoal } from "@prisma/client";

export async function runRecommendationConfigTests() {
  console.log("Running Recommendation Config Unit Tests...\n");

  // 1. Scoring weights sum to 1.00
  console.log("1. Testing scoring weights sum...");
  const sum = Object.values(SCORING_WEIGHTS).reduce((a, b) => a + b, 0);
  assert.strictEqual(
    Math.round(sum * 100) / 100,
    1.0,
    "SCORING_WEIGHTS must sum to 1.00"
  );
  console.log(`✔ SCORING_WEIGHTS sum exactly to ${sum.toFixed(2)}.`);

  // 2. All PrimaryGoal enum values are mapped in GOAL_DEFAULT_PRIORITIES
  console.log("2. Testing PrimaryGoal default priorities completeness...");
  const goals: PrimaryGoal[] = [
    "LAND_A_JOB",
    "GET_AN_INTERNSHIP",
    "SWITCH_CAREER",
    "GET_PROMOTED",
    "LEARN_NEW_SKILLS",
    "PREPARE_FOR_INTERVIEW",
    "BUILD_RESUME",
    "IMPROVE_RESUME",
    "BECOME_JOB_READY",
    "EXPLORE_CAREERS",
    "OTHER",
  ];

  for (const goal of goals) {
    assert.ok(
      GOAL_DEFAULT_PRIORITIES[goal] && GOAL_DEFAULT_PRIORITIES[goal].length > 0,
      `Goal ${goal} must have default priorities defined.`
    );
    assert.ok(
      GOAL_ALIGNMENT_MATRIX[goal],
      `Goal ${goal} must have goal alignment matrix defined.`
    );
  }
  console.log(`✔ All ${goals.length} PrimaryGoal values are mapped.`);

  // 3. Operational constants validity
  console.log("3. Testing operational configuration limits...");
  assert.strictEqual(RECOMMENDATION_CONFIG.MAX_RECOMMENDATIONS, 3);
  assert.strictEqual(RECOMMENDATION_CONFIG.MAX_SKILL_CANDIDATES, 3);
  assert.strictEqual(RECOMMENDATION_CONFIG.MINIMUM_CANDIDATE_SCORE, 0.35);
  assert.strictEqual(RECOMMENDATION_CONFIG.DISMISSAL_COOLDOWN_DAYS, 7);
  assert.strictEqual(RECOMMENDATION_CONFIG.DISMISSAL_THRESHOLD_COUNT, 3);
  assert.strictEqual(RECOMMENDATION_CONFIG.FRESHNESS_THRESHOLD_DAYS, 30);
  console.log("✔ Operational limits match spec §82, §42, §117, §53.");

  console.log("\n==============================================");
  console.log("All Recommendation Config tests passed!");
  console.log("==============================================\n");
}

if (require.main === module) {
  runRecommendationConfigTests().catch((err) => {
    console.error("Test failed:", err);
    process.exit(1);
  });
}
