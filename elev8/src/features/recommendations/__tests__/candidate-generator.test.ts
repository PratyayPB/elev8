import assert from "node:assert";
import { CandidateGeneratorService } from "../services/candidate-generator.service";
import { RecommendationContext } from "../types";
import { ProfileData } from "@/features/profile/types";

export async function runCandidateGeneratorTests() {
  console.log("Running Candidate Generator Unit Tests...\n");

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
    
    isMandatoryCompleted: false,
    isCompleted: false,
    
    
    profileVersion: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // 1. COLD_START mode
  console.log("1. Testing COLD_START mode candidate generation...");
  const coldStartCtx: RecommendationContext = {
    userId: "u_test",
    profile: baseProfile,
    completeness: { score: 0, state: "NOT_STARTED", isComplete: false, isMandatoryCompleted: false, 
    
     completedFields: [], missingFields: [] },
    moduleActivity: [],
    recommendationHistory: [],
    mode: "COLD_START",
  };

  const coldCandidates = CandidateGeneratorService.generateCandidates(coldStartCtx);
  assert.strictEqual(coldCandidates.length, 2);
  assert.ok(coldCandidates.some((c) => c.refId === "COMPLETE_PROFILE"));
  assert.ok(coldCandidates.some((c) => c.refId === "RESUME_SCORE"));
  console.log("✔ COLD_START mode returned standard onboarding candidates.");

  // 2. PARTIAL_PROFILE mode with missing targetRole
  console.log("2. Testing PARTIAL_PROFILE mode with missing target role...");
  const partialCtx: RecommendationContext = {
    userId: "u_test",
    profile: {
      ...baseProfile,
      careerGoals: { primaryGoal: "EXPLORE_CAREERS", targetRole: null },
    },
    completeness: { score: 40, state: "IN_PROGRESS", isComplete: false, isMandatoryCompleted: false, 
    
     completedFields: [], missingFields: [] },
    moduleActivity: [],
    recommendationHistory: [],
    mode: "PARTIAL_PROFILE",
  };

  const partialCandidates = CandidateGeneratorService.generateCandidates(partialCtx);
  assert.ok(partialCandidates.some((c) => c.refId === "TARGET_ROLE"));
  console.log("✔ PARTIAL_PROFILE mode correctly prompted for TARGET_ROLE.");

  // 3. STANDARD mode with Skill Gaps
  console.log("3. Testing STANDARD mode with skill gaps...");
  const standardCtx: RecommendationContext = {
    userId: "u_test",
    profile: baseProfile,
    completeness: { score: 100, state: "COMPLETED", isComplete: true, isMandatoryCompleted: false, 
    
     completedFields: [], missingFields: [] },
    skillGap: {
      status: "SUCCESS",
      targetRole: "Full Stack Developer",
      matchedSkills: [],
      underqualifiedSkills: [
        {
          name: "React",
          userProficiency: "BEGINNER",
          requiredProficiency: "INTERMEDIATE",
          importance: "CORE",
          proficiencyDeficit: 0.33,
        },
      ],
      missingSkills: [
        {
          name: "Node.js",
          requiredProficiency: "BASIC",
          importance: "CORE",
        },
      ],
      unmatchedUserSkills: [],
      severity: 0.7,
      estimatedLearningHours: 40,
    },
    moduleActivity: [],
    recommendationHistory: [],
    mode: "STANDARD",
  };

  const standardCandidates = CandidateGeneratorService.generateCandidates(standardCtx);
  assert.ok(standardCandidates.some((c) => c.type === "MODULE" && c.refId === "ROADMAP"));
  assert.ok(standardCandidates.some((c) => c.type === "SKILL" && c.refId === "Node.js"));
  assert.ok(standardCandidates.some((c) => c.type === "SKILL" && c.refId === "React"));
  console.log("✔ STANDARD mode generated Roadmap and top Skill candidates.");

  // 4. Inter-module triggers (Roadmap phase completed -> Interview candidate)
  console.log("4. Testing Roadmap Phase completion -> Interview candidate trigger...");
  const roadmapActivityCtx: RecommendationContext = {
    ...standardCtx,
    moduleActivity: [
      {
        id: "act_1",
        userId: "u_test",
        module: "ROADMAP",
        completionStatus: "COMPLETED",
        metadata: {
          roadmapId: "rm_1",
          phaseId: "ph_1",
          topics: ["React", "Node.js"],
        },
        createdAt: new Date(),
      },
    ],
  };

  const roadmapTriggered = CandidateGeneratorService.generateCandidates(roadmapActivityCtx);
  const interviewCandidate = roadmapTriggered.find(
    (c) => c.context?.source === "ROADMAP_PHASE_COMPLETION"
  );
  assert.ok(interviewCandidate, "Must generate contextual interview candidate after roadmap completion");
  assert.deepStrictEqual(interviewCandidate?.context?.topics, ["React", "Node.js"]);
  console.log("✔ Roadmap phase completion generated targeted Interview candidate.");

  console.log("\n==============================================");
  console.log("All Candidate Generator tests passed!");
  console.log("==============================================\n");
}

if (require.main === module) {
  runCandidateGeneratorTests().catch((err) => {
    console.error("Test failed:", err);
    process.exit(1);
  });
}
