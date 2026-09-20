import assert from "node:assert";
import {
  PAGE_RECOMMENDATIONS_MAP,
  RECOMMENDATION_REGISTRY,
  RecommendationKey,
  ModulePageKey,
} from "../recommended-actions";

export async function runRecommendedActionsTests() {
  console.log("Running RecommendedActions Unit Tests...\n");

  // 1. Verify Page Recommendations Mappings
  console.log("1. Testing Page Recommendations Mappings...");

  assert.deepStrictEqual(PAGE_RECOMMENDATIONS_MAP.resumes, [
    "career-assessment",
    "interview",
    "roadmaps",
  ]);
  assert.deepStrictEqual(PAGE_RECOMMENDATIONS_MAP.interviews, [
    "career-assessment",
    "resumes",
    "roadmaps",
  ]);
  assert.deepStrictEqual(PAGE_RECOMMENDATIONS_MAP.roadmaps, [
    "career-assessment",
    "resumes",
    "interview",
  ]);
  assert.deepStrictEqual(PAGE_RECOMMENDATIONS_MAP["career-assessment"], [
    "interview",
    "roadmaps",
    "resumes",
  ]);
  console.log("✔ All 4 page mappings match specifications exactly.");

  // 2. Verify Registry Items
  console.log("2. Testing Recommendation Registry items...");
  const keys: RecommendationKey[] = [
    "career-assessment",
    "interview",
    "roadmaps",
    "resumes",
  ];

  for (const key of keys) {
    const item = RECOMMENDATION_REGISTRY[key];
    assert.ok(item, `Item for key ${key} must exist`);
    assert.strictEqual(item.id, key);
    assert.ok(item.title.length > 0, `Title for ${key} must not be empty`);
    assert.ok(item.description.length > 0, `Description for ${key} must not be empty`);
    assert.ok(item.ctaText.length > 0, `CTA text for ${key} must not be empty`);
    assert.ok(item.href.startsWith("/dashboard/"), `Href for ${key} must start with /dashboard/`);
    assert.ok(item.icon, `Icon for ${key} must exist`);
  }
  console.log("✔ Registry contains valid configuration for all modules.");

  console.log("\n==============================================");
  console.log("All RecommendedActions tests passed successfully!");
  console.log("==============================================\n");
}

if (require.main === module) {
  runRecommendedActionsTests().catch((err) => {
    console.error("Test failed:", err);
    process.exit(1);
  });
}
