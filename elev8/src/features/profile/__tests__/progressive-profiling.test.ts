import assert from "node:assert";
import { getProfileCompletionPrompts } from "../services/progressive-profiling.service";
import { ProfileData } from "../types";

export async function runProgressiveProfilingTests() {
  console.log("Running Progressive Profiling Contextual Prompt Tests...\n");

  const incompleteProfile: ProfileData = {
    id: "p_1",
    userId: "u_1",
    name: "Alex",
    age: 22,
    country: "USA",
    currentStatus: "STUDENT",
    currentRole: "CS Student",

    yearsOfExperience: 0,
    education: {
      highestQualification: "",
      fieldOfStudy: "",
      

    },
    careerGoals: {
      primaryGoal: "LAND_A_JOB",

      targetRole: null, // missing

    },
    skills: [], // missing
    desiredSkills: [], // missing
    
    targetCompanyType: "NO_PREFERENCE",
    weeklyLearningHours: 10,
    isMandatoryCompleted: true,
    isCompleted: false,
    profileVersion: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // 1. Resume Context: Prioritizes targetRole -> skills -> education -> targetIndustry
  console.log("1. Testing RESUME context priority...");
  const resumePrompts = getProfileCompletionPrompts(incompleteProfile, "RESUME");
  assert.ok(resumePrompts.length > 0);
  assert.strictEqual(resumePrompts[0].field, "targetRole");
  assert.strictEqual(resumePrompts[1].field, "skills");
  assert.strictEqual(resumePrompts[2].field, "education");
  assert.strictEqual(resumePrompts[3].field, "targetIndustry");
  assert.ok(resumePrompts.every((p) => p.skippable === true));
  console.log("✔ Resume context prioritizes targetRole, skills, and education.");

  // 2. Interview Context: Prioritizes targetRole -> skills
  console.log("2. Testing INTERVIEW context priority...");
  const interviewPrompts = getProfileCompletionPrompts(incompleteProfile, "INTERVIEW");
  assert.ok(interviewPrompts.length > 0);
  assert.strictEqual(interviewPrompts[0].field, "targetRole");
  assert.strictEqual(interviewPrompts[1].field, "skills");
  console.log("✔ Interview context prioritizes targetRole and skills.");

  // 3. Roadmap Context: Prioritizes targetRole -> desiredSkills -> skills
  console.log("3. Testing ROADMAP context priority...");
  const roadmapPrompts = getProfileCompletionPrompts(incompleteProfile, "ROADMAP");
  assert.ok(roadmapPrompts.length > 0);
  assert.strictEqual(roadmapPrompts[0].field, "targetRole");
  assert.strictEqual(roadmapPrompts[1].field, "desiredSkills");
  assert.strictEqual(roadmapPrompts[2].field, "skills");
  console.log("✔ Roadmap context prioritizes targetRole and desiredSkills.");

  // 4. Dashboard Context: Prioritizes skills -> targetRole -> desiredSkills
  console.log("4. Testing DASHBOARD context priority...");
  const dashboardPrompts = getProfileCompletionPrompts(incompleteProfile, "DASHBOARD");
  assert.ok(dashboardPrompts.length > 0);
  assert.strictEqual(dashboardPrompts[0].field, "skills");
  assert.strictEqual(dashboardPrompts[1].field, "targetRole");
  assert.strictEqual(dashboardPrompts[2].field, "desiredSkills");
  console.log("✔ Dashboard context prioritizes top weighted missing fields.");

  // 5. Complete Profile -> Empty Prompts
  console.log("5. Testing complete profile prompt suppression...");
  const completeProfile: ProfileData = {
    ...incompleteProfile,
    education: {
      highestQualification: "BS",
      fieldOfStudy: "CS",
      

    },
    careerGoals: {
      primaryGoal: "LAND_A_JOB",
      
      targetRole: "Full Stack Developer",
      
    },
    skills: [{ id: "s1", name: "React", proficiency: "INTERMEDIATE" }],
    desiredSkills: ["Docker"],
  };
  const emptyPrompts = getProfileCompletionPrompts(completeProfile, "RESUME");
  assert.strictEqual(emptyPrompts.length, 0);
  console.log("✔ 100% complete profile returns zero prompts.");

  console.log("\n==============================================");
  console.log("All Progressive Profiling unit tests passed!");
  console.log("==============================================\n");
}

if (require.main === module) {
  runProgressiveProfilingTests().catch((err) => {
    console.error("Test failed:", err);
    process.exit(1);
  });
}
