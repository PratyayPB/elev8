import assert from "node:assert";
import { CandidateScorerService } from "../services/candidate-scorer.service";
import { RecommendationCandidate, RecommendationContext } from "../types";
import { ProfileData } from "@/features/profile/types";

export async function runCandidateScorerTests() {
  console.log("Running Candidate Scorer Unit Tests...\n");

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
    isMandatoryCompleted: true,
    profileVersion: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const sampleCandidates: RecommendationCandidate[] = [
    {
      type: "MODULE",
      source: "RULE_ENGINE",
      refId: "RESUME_SCORE",
      signals: {
        goalAlignment: 0,
        gapSignal: 0,
        moduleResultSignal: 0,
        recencySignal: 0,
        assessmentSignal: 0,
        profileSignal: 0,
        behavioralSignal: 0,
      },
      score: 0,
      reason: "Test",
      eligible: true,
    },
    {
      type: "MODULE",
      source: "RULE_ENGINE",
      refId: "ROADMAP",
      signals: {
        goalAlignment: 0,
        gapSignal: 0,
        moduleResultSignal: 0,
        recencySignal: 0,
        assessmentSignal: 0,
        profileSignal: 0,
        behavioralSignal: 0,
      },
      score: 0,
      reason: "Test",
      eligible: true,
    },
  ];

  const ctx: RecommendationContext = {
    userId: "u_test",
    profile: baseProfile,
    completeness: { score: 100, state: "COMPLETED", isComplete: true, isMandatoryCompleted: true, completedFields: [], missingFields: [] },
    skillGap: {
      status: "SUCCESS",
      targetRole: "Full Stack Developer",
      experienceLevel: "ENTRY",
      matchedSkills: [],
      underqualifiedSkills: [],
      missingSkills: [{ name: "Node.js", requiredProficiency: "BASIC", importance: "CORE" }],
      unmatchedUserSkills: [],
      severity: 0.8,
      estimatedLearningHours: 30,
    },
    moduleActivity: [],
    recommendationHistory: [],
    mode: "STANDARD",
  };

  // 1. Scoring execution & clamping
  console.log("1. Testing scoreCandidates computation and range [0, 1]...");
  const scored = CandidateScorerService.scoreCandidates(sampleCandidates, ctx);
  for (const c of scored) {
    assert.ok(c.score >= 0 && c.score <= 1, `Score ${c.score} must be clamped to [0, 1]`);
    assert.ok(c.signals.goalAlignment > 0, "Goal alignment signal must be computed");
    assert.ok(c.signals.profileSignal > 0, "Profile signal must be computed");
  }
  console.log("✔ Scores computed and bounded between 0 and 1.");

  // 2. Goal alignment ranking for LAND_A_JOB (RESUME_SCORE > ROADMAP)
  console.log("2. Testing goal alignment priority for LAND_A_JOB...");
  const resumeScoreCandidate = scored.find((c) => c.refId === "RESUME_SCORE")!;
  const roadmapCandidate = scored.find((c) => c.refId === "ROADMAP")!;
  assert.strictEqual(
    resumeScoreCandidate.signals.goalAlignment,
    1.0,
    "RESUME_SCORE should have 1.0 goal alignment for LAND_A_JOB"
  );
  assert.strictEqual(
    roadmapCandidate.signals.goalAlignment,
    0.5,
    "ROADMAP should have 0.5 goal alignment for LAND_A_JOB"
  );
  console.log("✔ Goal alignment matrix properly reflected in candidate signals.");

  // 3. Stale Assessment test
  console.log("3. Testing assessment signal behavior when stale...");
  const staleCtx: RecommendationContext = {
    ...ctx,
    assessment: {
      id: "ass_1",
      readinessScore: 80,
      strengths: ["JS"],
      gaps: ["Node.js"],
      suggestedFocusAreas: ["Backend"],
      narrative: "Good",
      isStale: true, // STALE!
      profileVersion: 1,
      createdAt: new Date(),
    },
  };

  const scoredWithStale = CandidateScorerService.scoreCandidates(sampleCandidates, staleCtx);
  for (const c of scoredWithStale) {
    assert.strictEqual(
      c.signals.assessmentSignal,
      0,
      "Stale assessment must produce 0.0 assessment signal"
    );
  }
  console.log("✔ Stale assessment correctly zeros out assessmentSignal.");

  console.log("\n==============================================");
  console.log("All Candidate Scorer tests passed!");
  console.log("==============================================\n");
}

if (require.main === module) {
  runCandidateScorerTests().catch((err) => {
    console.error("Test failed:", err);
    process.exit(1);
  });
}
