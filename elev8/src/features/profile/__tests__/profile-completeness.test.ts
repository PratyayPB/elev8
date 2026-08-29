import assert from "node:assert";
import { calculateProfileCompleteness } from "../services/profile-completeness.service";
import { ProfileData } from "../types";
import { PROFILE_COMPLETION_WEIGHTS } from "../constants";

export async function runProfileCompletenessTests() {
  console.log("Running Profile Completeness Calculation Unit Tests...\n");

  // 1. Verify Weights Sum to 100
  console.log("1. Verifying Weights Sum to 100...");
  const sumWeights = Object.values(PROFILE_COMPLETION_WEIGHTS).reduce(
    (acc, w) => acc + w,
    0
  );
  assert.strictEqual(sumWeights, 100, `Weights sum to ${sumWeights}, expected 100`);
  console.log("✔ Weights sum exactly to 100.");
  // 2. Empty Profile (null) -> 0% & NOT_STARTED
  console.log("2. Testing null profile...");
  const nullResult = calculateProfileCompleteness(null);
  assert.strictEqual(nullResult.score, 0);
  assert.strictEqual(nullResult.state, "NOT_STARTED");
  assert.strictEqual(nullResult.isComplete, false);
  assert.strictEqual(nullResult.isMandatoryCompleted, false);
  assert.strictEqual(nullResult.completedFields.length, 0);
  assert.strictEqual(nullResult.missingFields.length, 9);
  assert.strictEqual(nullResult.missingFields[0].field, "primaryGoal"); // 15
  console.log("✔ Null profile returns 0% score and NOT_STARTED state.");

  // 3. Fully Complete Profile -> 100% & COMPLETED
  console.log("3. Testing 100% complete profile...");
  const fullProfile: ProfileData = {
    id: "prof_1",
    userId: "user_1",
    name: "Jane Doe",
    age: 24,
    country: "United States",
    phoneNumber: "+1234567890",
    phoneCountryCode: "+1",
    currentStatus: "EMPLOYED",
    currentRole: "Frontend Developer",
    yearsOfExperience: 2,
    education: {
      highestQualification: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
    },
    careerGoals: {
      primaryGoal: "LAND_A_JOB",
      targetRole: "Full Stack Engineer",
    },
    skills: [
      { id: "s1", name: "React", proficiency: "INTERMEDIATE" },
      { id: "s2", name: "TypeScript", proficiency: "ADVANCED" },
    ],
    desiredSkills: ["Go", "Kubernetes"],
    targetCompanyType: "STARTUP",
    weeklyLearningHours: 15,
    isMandatoryCompleted: true,
    profileVersion: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const fullResult = calculateProfileCompleteness(fullProfile);
  assert.strictEqual(fullResult.score, 100);
  assert.strictEqual(fullResult.state, "COMPLETED");
  assert.strictEqual(fullResult.isComplete, true);
  assert.strictEqual(fullResult.isMandatoryCompleted, true);
  assert.strictEqual(fullResult.completedFields.length, 9);
  assert.strictEqual(fullResult.missingFields.length, 0);
  console.log("✔ Fully complete profile returns 100% and COMPLETED state.");

  // 4. Education Group: Incomplete education
  console.log("4. Testing Education group completion logic...");
  const missingGradYearProfile: ProfileData = {
    ...fullProfile,
    education: null,
  };
  const eduResult = calculateProfileCompleteness(missingGradYearProfile);
  assert.strictEqual(eduResult.score, 85); // 100 - 15
  assert.strictEqual(eduResult.state, "IN_PROGRESS");
  assert.strictEqual(eduResult.isComplete, false);
  assert.strictEqual(eduResult.isMandatoryCompleted, true);
  assert.ok(eduResult.missingFields.some((f) => f.field === "education"));
  console.log("✔ Incomplete education correctly forfeits 15 points and sets isComplete to false.");

  // 5. Skills Group: Empty array does not count
  console.log("5. Testing empty skills array...");
  const emptySkillsProfile: ProfileData = {
    ...fullProfile,
    skills: [],
  };
  const skillsResult = calculateProfileCompleteness(emptySkillsProfile);
  assert.strictEqual(skillsResult.score, 85); // 100 - 15
  assert.strictEqual(skillsResult.isComplete, false);
  assert.ok(skillsResult.missingFields.some((f) => f.field === "skills"));
  console.log("✔ Empty skills array correctly forfeits 15 points.");

  // 6. Desired Skills Group: Empty array does not count
  console.log("6. Testing empty desired skills array...");
  const emptyDesiredProfile: ProfileData = {
    ...fullProfile,
    desiredSkills: [],
  };
  const desiredResult = calculateProfileCompleteness(emptyDesiredProfile);
  assert.strictEqual(desiredResult.score, 90); // 100 - 10
  assert.strictEqual(desiredResult.isComplete, false);
  assert.ok(desiredResult.missingFields.some((f) => f.field === "desiredSkills"));
  console.log("✔ Empty desired skills correctly forfeits 10 points.");

  // 7. EXPLORE_CAREERS Exception: targetRole = null is valid for score
  console.log("7. Testing EXPLORE_CAREERS targetRole exception...");
  const exploreProfile: ProfileData = {
    ...fullProfile,
    careerGoals: {
      primaryGoal: "EXPLORE_CAREERS",
      targetRole: null,
    },
  };
  const exploreResult = calculateProfileCompleteness(exploreProfile);
  assert.strictEqual(exploreResult.score, 100);
  assert.strictEqual(exploreResult.state, "COMPLETED");
  assert.ok(exploreResult.completedFields.includes("targetRole"));
  console.log("✔ EXPLORE_CAREERS with null targetRole counts as complete.");

  // 8. Individual Field Weights Check
  console.log("8. Testing individual weight contributions...");
  const minimalProfile: ProfileData = {
    id: "p_min",
    userId: "u_min",
    name: "Test",
    age: 20,
    country: "USA",
    phoneNumber: "123",
    currentStatus: "STUDENT",
    currentRole: "",
    yearsOfExperience: 0,
    education: null,
    careerGoals: {
      primaryGoal: "LAND_A_JOB",
      targetRole: null,
    },
    skills: [],
    desiredSkills: [],
    targetCompanyType: "NO_PREFERENCE",
    weeklyLearningHours: 10,
    isMandatoryCompleted: true,
    profileVersion: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // minimalProfile has: currentStatus (15) + primaryGoal (15) + targetCompanyType (5) + weeklyLearningHours (5) = 40
  const minResult = calculateProfileCompleteness(minimalProfile);
  assert.strictEqual(minResult.score, 40);
  assert.strictEqual(minResult.state, "IN_PROGRESS");
  assert.strictEqual(minResult.isComplete, false);
  assert.strictEqual(minResult.isMandatoryCompleted, true);
  console.log("✔ Partial field weights calculate accurately.");

  console.log("\n==============================================");
  console.log("All Profile Completeness unit tests passed!");
  console.log("==============================================\n");
}

if (require.main === module) {
  runProfileCompletenessTests().catch((err) => {
    console.error("Test failed:", err);
    process.exit(1);
  });
}
