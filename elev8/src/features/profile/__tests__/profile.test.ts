import assert from "node:assert";
import {
  profileCreateSchema,
  profileUpdateSchema,
  profileSkillSchema,
} from "../schemas";
import { deduplicateSkills, deduplicateDesiredSkills, normalizeSkillName } from "../utils";

export async function runProfileFoundationTests() {
  console.log("Running Phase 6.1 Profile Foundation Unit Tests...\n");

  // 1. Skill Normalization
  console.log("1. Testing Skill Normalization...");
  assert.strictEqual(normalizeSkillName("  JavaScript  "), "javascript");
  assert.strictEqual(normalizeSkillName("React.js"), "react.js");
  assert.strictEqual(normalizeSkillName("Node.JS"), "node.js");
  assert.strictEqual(normalizeSkillName("REST   API"), "rest api");
  console.log("✔ Skill normalization passed.");

  // 2. Skill Deduplication
  console.log("2. Testing Skill Deduplication...");
  const rawSkills = [
    { name: "JavaScript", proficiency: "INTERMEDIATE" as const },
    { name: "javascript", proficiency: "ADVANCED" as const },
    { name: "JAVASCRIPT", proficiency: "BEGINNER" as const },
    { name: "TypeScript", proficiency: "EXPERT" as const },
  ];
  const dedupedSkills = deduplicateSkills(rawSkills);
  assert.strictEqual(dedupedSkills.length, 2);
  assert.strictEqual(dedupedSkills[0].name, "JavaScript");
  assert.strictEqual(dedupedSkills[0].proficiency, "INTERMEDIATE");
  assert.strictEqual(dedupedSkills[1].name, "TypeScript");
  console.log("✔ Skill deduplication passed.");

  // 3. Desired Skill Deduplication
  console.log("3. Testing Desired Skill Deduplication...");
  const rawDesired = ["Docker", "docker", "DOCKER", "Kubernetes", "  Docker  "];
  const dedupedDesired = deduplicateDesiredSkills(rawDesired);
  assert.strictEqual(dedupedDesired.length, 2);
  assert.strictEqual(dedupedDesired[0].name, "Docker");
  assert.strictEqual(dedupedDesired[1].name, "Kubernetes");
  console.log("✔ Desired skill deduplication passed.");

  // 4. Validation: Valid Create Payload
  console.log("4. Testing Valid Profile Creation Validation...");
  const validPayload = {
    name: "Alex Smith",
    age: 23,
    country: "Canada",
    phoneNumber: "+1 (555) 123-4567",
    currentStatus: "STUDENT",
    currentRole: "Computer Science Student",

    yearsOfExperience: 0,
    highestQualification: "Bachelor of Science",
    fieldOfStudy: "Software Engineering",
    

    primaryGoal: "LAND_A_JOB",
    
    targetRole: "Full Stack Engineer",
    
    
    targetCompanyType: "STARTUP",
    weeklyLearningHours: 15,
    skills: [
      { name: "React", proficiency: "INTERMEDIATE" },
      { name: "TypeScript", proficiency: "ADVANCED" },
    ],
    desiredSkills: ["Go", "Docker"],
  };
  const parsed = profileCreateSchema.parse(validPayload);
  assert.strictEqual(parsed.name, "Alex Smith");
  assert.strictEqual(parsed.age, 23);
  assert.strictEqual(parsed.currentStatus, "STUDENT");
  assert.strictEqual(parsed.skills?.length, 2);
  console.log("✔ Valid payload parsed successfully.");

  // 5. Validation: Negative Experience Rejected
  console.log("5. Testing Negative Experience Validation...");
  assert.throws(() => {
    profileCreateSchema.parse({
      ...validPayload,
      yearsOfExperience: -1,
    });
  }, /Years of experience cannot be negative/);
  console.log("✔ Negative experience correctly rejected.");

  // 6. Validation: Age Limits
  console.log("6. Testing Age Limits Validation...");
  assert.throws(() => {
    profileCreateSchema.parse({
      ...validPayload,
      age: 12,
    });
  }, /Age must be at least 16/);

  assert.throws(() => {
    profileCreateSchema.parse({
      ...validPayload,
      age: 150,
    });
  }, /Age must be at most 100/);
  console.log("✔ Age bounds correctly enforced.");

  // 7. Validation: Invalid Enums Rejected
  console.log("7. Testing Enum Validation...");
  assert.throws(() => {
    profileCreateSchema.parse({
      ...validPayload,
      currentStatus: "INVALID_STATUS",
    });
  });

  assert.throws(() => {
    profileCreateSchema.parse({
      ...validPayload,
      primaryGoal: "BECOME_ASTRONAUT",
    });
  });

  assert.throws(() => {
    profileSkillSchema.parse({
      name: "React",
      proficiency: "SUPER_EXPERT",
    });
  });
  console.log("✔ Invalid enums correctly rejected.");

  // 8. Validation: Optional Target Role Allowed
  console.log("8. Testing Optional Target Role (e.g. for Career Exploration)...");
  const exploratoryPayload = {
    ...validPayload,
    primaryGoal: "EXPLORE_CAREERS",
    targetRole: null,


  };
  const exploratoryParsed = profileCreateSchema.parse(exploratoryPayload);
  assert.strictEqual(exploratoryParsed.targetRole, null);
  console.log("✔ Exploratory profile with null targetRole parsed successfully.");

  // 9. Validation: Partial Update Schema
  console.log("9. Testing Partial Update Schema...");
  const updatePayload = {
    yearsOfExperience: 2,
    currentRole: "Software Engineer",

  };
  const updateParsed = profileUpdateSchema.parse(updatePayload);
  assert.strictEqual(updateParsed.yearsOfExperience, 2);
  assert.strictEqual(updateParsed.currentRole, "Software Engineer");
  console.log("✔ Partial update schema parsed successfully.");

  console.log("\n=========================================");
  console.log("All Profile Foundation unit tests passed!");
  console.log("=========================================\n");
}

if (require.main === module) {
  runProfileFoundationTests().catch((err) => {
    console.error("Test failed:", err);
    process.exit(1);
  });
}
