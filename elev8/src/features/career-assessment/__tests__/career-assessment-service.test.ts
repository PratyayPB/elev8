import assert from "node:assert";
import { CareerAssessmentService } from "../services/career-assessment.service";
import { ProfileData } from "@/features/profile/types";

export async function runCareerAssessmentServiceTests() {
  console.log("Running Career Assessment Service Unit Tests...\n");

  // 1. Staleness Logic
  console.log("1. Testing isAssessmentStale logic...");
  assert.strictEqual(
    CareerAssessmentService.isAssessmentStale(3, 4),
    true,
    "Assessment profileVersion 3 vs Profile 4 should be stale"
  );
  assert.strictEqual(
    CareerAssessmentService.isAssessmentStale(4, 4),
    false,
    "Assessment profileVersion 4 vs Profile 4 should NOT be stale"
  );
  console.log("✔ Staleness comparison operates deterministically.");

  // 2. Input Snapshot Generation
  console.log("2. Testing createInputSnapshot...");
  const sampleProfile: ProfileData = {
    id: "p_100",
    userId: "u_100",
    name: "Alice Engineer",
    age: 28,
    country: "United Kingdom",
    currentStatus: "EMPLOYED",
    currentRole: "Backend Developer",
    
    yearsOfExperience: 4,
    education: {
      highestQualification: "Master of Science",
      fieldOfStudy: "Computing",
      

    },
    careerGoals: {
      primaryGoal: "GET_PROMOTED",
      
      targetRole: "Staff Backend Engineer",
      
    },
    skills: [
      { id: "s1", name: "Python", proficiency: "EXPERT" },
      { id: "s2", name: "PostgreSQL", proficiency: "ADVANCED" },
    ],
    desiredSkills: ["Rust", "Distributed Systems"],
    
    targetCompanyType: "ENTERPRISE",
    weeklyLearningHours: 10,
    profileVersion: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const snapshot = CareerAssessmentService.createInputSnapshot(sampleProfile);
  assert.strictEqual(snapshot.profileVersion, 5);
  assert.strictEqual(snapshot.name, "Alice Engineer");
  assert.strictEqual(snapshot.targetRole, "Staff Backend Engineer");
  assert.strictEqual(snapshot.skills.length, 2);
  assert.strictEqual(snapshot.desiredSkills.length, 2);
  console.log("✔ Input snapshot captures relevant profile context for audit.");

  console.log("\n==============================================");
  console.log("All Career Assessment Service tests passed!");
  console.log("==============================================\n");
}

if (require.main === module) {
  runCareerAssessmentServiceTests().catch((err) => {
    console.error("Test failed:", err);
    process.exit(1);
  });
}
