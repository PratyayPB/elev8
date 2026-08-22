import assert from "node:assert";
import { RecommendationEngineService } from "../services/recommendation-engine.service";
import { RecommendationCandidate, RecommendationContext } from "../types";
import { ProfileData } from "@/features/profile/types";

export async function runRecommendationEngineTests() {
  console.log("Running Recommendation Engine Pipeline Unit Tests...\n");

  const baseProfile: ProfileData = {
    id: "p_test",
    userId: "u_test",
    name: "Jane Dev",
    age: 26,
    country: "USA",
    currentStatus: "JOB_SEEKER",
    currentRole: "Frontend Developer",

    yearsOfExperience: 2,
    education: {
      highestQualification: "BSc Computer Science",
      fieldOfStudy: "Computer Science",
      

    },
    careerGoals: {
      primaryGoal: "LAND_A_JOB",
      targetRole: "Full Stack Developer",
      
    },
    skills: [{ name: "JavaScript", proficiency: "INTERMEDIATE" }],
    desiredSkills: ["Node.js"],
    
    targetCompanyType: "STARTUP",
    weeklyLearningHours: 10,
    profileVersion: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const emptySignals = {
    goalAlignment: 0.5,
    gapSignal: 0.5,
    moduleResultSignal: 0.5,
    recencySignal: 0.5,
    assessmentSignal: 0.5,
    profileSignal: 0.5,
    behavioralSignal: 0.5,
  };

  // 1. filterCandidates with Dismissal Cooldown (spec §52-53)
  console.log("1. Testing dismissal cooldown filtering (3 dismissals with recent one)...");
  const ctxWithDismissals: RecommendationContext = {
    userId: "u_test",
    profile: baseProfile,
    completeness: { score: 100, state: "COMPLETED", completedFields: [], missingFields: [] },
    moduleActivity: [],
    recommendationHistory: [
      { refId: "RESUME_SCORE", type: "MODULE", status: "DISMISSED", createdAt: new Date() },
      { refId: "RESUME_SCORE", type: "MODULE", status: "DISMISSED", createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
      { refId: "RESUME_SCORE", type: "MODULE", status: "DISMISSED", createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) },
    ],
    mode: "STANDARD",
  };

  const candidatesToFilter: RecommendationCandidate[] = [
    { type: "MODULE", source: "RULE_ENGINE", refId: "RESUME_SCORE", signals: emptySignals, score: 0.8, reason: "Test", eligible: true },
    { type: "MODULE", source: "RULE_ENGINE", refId: "ROADMAP", signals: emptySignals, score: 0.7, reason: "Test", eligible: true },
  ];

  const filtered = RecommendationEngineService.filterCandidates(candidatesToFilter, ctxWithDismissals);
  assert.strictEqual(filtered.length, 1);
  assert.strictEqual(filtered[0].refId, "ROADMAP");
  console.log("✔ Repeatedly dismissed candidate properly filtered during cooldown.");

  // 2. applyDiversity (spec §56)
  console.log("2. Testing applyDiversity duplicate refId elimination...");
  const duplicateCandidates: RecommendationCandidate[] = [
    { type: "MODULE", source: "RULE_ENGINE", refId: "ROADMAP", signals: emptySignals, score: 0.9, reason: "First", eligible: true },
    { type: "MODULE", source: "MODULE_RESULT", refId: "ROADMAP", signals: emptySignals, score: 0.8, reason: "Second", eligible: true },
    { type: "MODULE", source: "RULE_ENGINE", refId: "INTERVIEW_PRACTICE", signals: emptySignals, score: 0.7, reason: "Third", eligible: true },
  ];

  const diversified = RecommendationEngineService.applyDiversity(duplicateCandidates);
  assert.strictEqual(diversified.length, 2);
  assert.strictEqual(diversified[0].refId, "ROADMAP");
  assert.strictEqual(diversified[0].score, 0.9);
  assert.strictEqual(diversified[1].refId, "INTERVIEW_PRACTICE");
  console.log("✔ applyDiversity successfully deduplicated candidates while preserving highest scores.");

  // 3. rankCandidates priority assignment and max count (spec §82, §58)
  console.log("3. Testing rankCandidates priority assignment and top 3 limit...");
  const candidatesToRank: RecommendationCandidate[] = [
    { type: "MODULE", source: "RULE_ENGINE", refId: "RESUME_SCORE", signals: emptySignals, score: 0.92, reason: "A", eligible: true },
    { type: "MODULE", source: "RULE_ENGINE", refId: "ROADMAP", signals: emptySignals, score: 0.85, reason: "B", eligible: true },
    { type: "MODULE", source: "RULE_ENGINE", refId: "INTERVIEW_PRACTICE", signals: emptySignals, score: 0.78, reason: "C", eligible: true },
    { type: "MODULE", source: "RULE_ENGINE", refId: "RESUME_BUILD", signals: emptySignals, score: 0.65, reason: "D", eligible: true },
  ];

  const ranked = RecommendationEngineService.rankCandidates(candidatesToRank);
  assert.strictEqual(ranked.length, 3);
  assert.strictEqual(ranked[0].priority, 1);
  assert.strictEqual(ranked[0].refId, "RESUME_SCORE");
  assert.strictEqual(ranked[1].priority, 2);
  assert.strictEqual(ranked[1].refId, "ROADMAP");
  assert.strictEqual(ranked[2].priority, 3);
  assert.strictEqual(ranked[2].refId, "INTERVIEW_PRACTICE");
  console.log("✔ rankCandidates assigned sequential priorities and capped output to top 3.");

  console.log("\n==============================================");
  console.log("All Recommendation Engine Pipeline tests passed!");
  console.log("==============================================\n");
}

if (require.main === module) {
  runRecommendationEngineTests().catch((err) => {
    console.error("Test failed:", err);
    process.exit(1);
  });
}
