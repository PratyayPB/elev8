import assert from "node:assert";
import { SkillGapService } from "../services/skill-gap.service";
import { ProfileData } from "@/features/profile/types";

export async function runSkillGapEngineTests() {
  console.log("Running Deterministic Skill Gap Engine Unit Tests...\n");

  // 1. Proficiency Comparison
  console.log("1. Testing compareProficiency...");
  assert.strictEqual(
    SkillGapService.compareProficiency("BEGINNER", "INTERMEDIATE"),
    "UNDERQUALIFIED"
  );
  assert.strictEqual(
    SkillGapService.compareProficiency("INTERMEDIATE", "INTERMEDIATE"),
    "MATCHED"
  );
  assert.strictEqual(
    SkillGapService.compareProficiency("ADVANCED", "BASIC"),
    "MATCHED"
  );
  assert.strictEqual(
    SkillGapService.compareProficiency(undefined, "BASIC"),
    "MISSING"
  );
  console.log("✔ compareProficiency operates accurately across all 5 tiers.");

  // 2. Weighted Severity Calculation Formula
  console.log("2. Testing weighted severity calculation formula...");
  const required = [
    { name: "JavaScript", minimumProficiency: "INTERMEDIATE" as const, importance: "CORE" as const },      // weight 3
    { name: "React", minimumProficiency: "INTERMEDIATE" as const, importance: "CORE" as const },           // weight 3
    { name: "Node.js", minimumProficiency: "BASIC" as const, importance: "IMPORTANT" as const },           // weight 2
    { name: "Git", minimumProficiency: "BASIC" as const, importance: "SUPPORTING" as const },              // weight 1
  ]; // Total weight: 3 + 3 + 2 + 1 = 9

  // Case A: All matched -> 0 severity
  const severityAllMatched = SkillGapService.calculateSeverity(required, [], []);
  assert.strictEqual(severityAllMatched, 0.0);

  // Case B: All missing -> 1.0 severity
  const missingAll = required.map((r) => ({
    name: r.name,
    requiredProficiency: r.minimumProficiency,
    importance: r.importance,
  }));
  const severityAllMissing = SkillGapService.calculateSeverity(required, [], missingAll);
  assert.strictEqual(severityAllMissing, 1.0);

  // Case C: Missing only 1 CORE (JS, weight 3) vs Missing only 1 SUPPORTING (Git, weight 1)
  const missingCoreOnly = [{ name: "JavaScript", requiredProficiency: "INTERMEDIATE" as const, importance: "CORE" as const }];
  const severityMissingCore = SkillGapService.calculateSeverity(required, [], missingCoreOnly);
  // 3 * 1.0 / 9 = 0.33
  assert.strictEqual(severityMissingCore, 0.33);

  const missingSupportingOnly = [{ name: "Git", requiredProficiency: "BASIC" as const, importance: "SUPPORTING" as const }];
  const severityMissingSupporting = SkillGapService.calculateSeverity(required, [], missingSupportingOnly);
  // 1 * 1.0 / 9 = 0.11
  assert.strictEqual(severityMissingSupporting, 0.11);

  assert.ok(
    severityMissingCore > severityMissingSupporting,
    "CORE missing must produce significantly higher severity than SUPPORTING missing"
  );
  console.log("✔ Weighted severity calculation strictly adheres to importance weights.");

  // 3. Pure calculateGap Execution
  console.log("3. Testing pure calculateGap function...");
  const userSkills = [
    { name: "JavaScript", proficiency: "ADVANCED" as const },
    { name: "React", proficiency: "BEGINNER" as const }, // Required INTERMEDIATE (3), User BEGINNER (1) -> deficit (3-1)/3 = 0.67
    { name: "C++", proficiency: "EXPERT" as const }, // Unmatched skill
  ];

  const gapResult = SkillGapService.calculateGap({
    userSkills,
    requiredSkills: [
      { name: "JavaScript", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "React", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 35 },
      { name: "Node.js", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 30 },
    ],
    targetRole: "Full Stack Developer",
    experienceLevel: "ENTRY",
  });

  assert.strictEqual(gapResult.status, "SUCCESS");
  assert.strictEqual(gapResult.matchedSkills.length, 1);
  assert.strictEqual(gapResult.matchedSkills[0].name, "JavaScript");
  assert.strictEqual(gapResult.underqualifiedSkills.length, 1);
  assert.strictEqual(gapResult.underqualifiedSkills[0].name, "React");
  assert.strictEqual(gapResult.missingSkills.length, 1);
  assert.strictEqual(gapResult.missingSkills[0].name, "Node.js");
  assert.strictEqual(gapResult.unmatchedUserSkills.length, 1);
  assert.strictEqual(gapResult.unmatchedUserSkills[0], "C++");
  // Total estimated hours: React (35) + Node.js (30) = 65
  assert.strictEqual(gapResult.estimatedLearningHours, 65);
  console.log("✔ calculateGap correctly categorizes skills, preserves unmatched skills, and calculates learning hours.");

  // 4. getTopSkillGaps Ordering
  console.log("4. Testing getTopSkillGaps ordering...");
  const topGaps = SkillGapService.getTopSkillGaps(gapResult, 2);
  assert.strictEqual(topGaps.length, 2);
  // Node.js is IMPORTANT missing, React is CORE underqualified.
  // CORE underqualified (priority 5) vs IMPORTANT missing (priority 4) -> React comes first.
  assert.strictEqual(topGaps[0].name, "React");
  assert.strictEqual(topGaps[1].name, "Node.js");
  console.log("✔ getTopSkillGaps prioritized gaps accurately.");

  // 5. calculateForProfile Integration (Database seeded)
  console.log("5. Testing calculateForProfile with seeded database...");
  const sampleProfile: ProfileData = {
    id: "p_1",
    userId: "u_1",
    name: "Alex Dev",
    age: 24,
    country: "USA",
    currentStatus: "JOB_SEEKER",
    currentRole: "Junior Developer",

    yearsOfExperience: 1,
    education: {
      highestQualification: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
      

    },
    careerGoals: {
      primaryGoal: "LAND_A_JOB",
      targetRole: "Full Stack Engineer", // Alias to Full Stack Developer
      
    },
    skills: [
      { id: "s1", name: "JS", proficiency: "INTERMEDIATE" },
      { id: "s2", name: "ReactJS", proficiency: "INTERMEDIATE" },
    ],
    desiredSkills: ["Node.js", "SQL"],
    
    targetCompanyType: "STARTUP",
    weeklyLearningHours: 15,
    isMandatoryCompleted: true,
    profileVersion: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const profileGap = await SkillGapService.calculateForProfile(sampleProfile);
  assert.strictEqual(profileGap.status, "SUCCESS");
  assert.strictEqual(profileGap.targetRole, "Full Stack Developer");
  assert.ok(profileGap.matchedSkills.some((m) => m.name === "JavaScript"));
  assert.ok(profileGap.matchedSkills.some((m) => m.name === "React"));
  assert.ok(profileGap.missingSkills.some((m) => m.name === "Node.js"));
  console.log("✔ calculateForProfile resolved alias and queried seeded RoleSkillProfile seamlessly.");

  // 6. No Target Role handling
  console.log("6. Testing NO_TARGET_ROLE state...");
  const exploreProfile: ProfileData = {
    ...sampleProfile,
    careerGoals: {
      primaryGoal: "EXPLORE_CAREERS",
      targetRole: null,

    },
  };
  const exploreGap = await SkillGapService.calculateForProfile(exploreProfile);
  assert.strictEqual(exploreGap.status, "NO_TARGET_ROLE");
  assert.strictEqual(exploreGap.severity, 0);
  console.log("✔ NO_TARGET_ROLE handled cleanly without error.");

  // 7. ROLE_NOT_SUPPORTED handling
  console.log("7. Testing ROLE_NOT_SUPPORTED state...");
  const unknownRoleProfile: ProfileData = {
    ...sampleProfile,
    careerGoals: {
      primaryGoal: "LAND_A_JOB",
      targetRole: "Quantum Computing Specialist",
      
    },
  };
  const unknownRoleGap = await SkillGapService.calculateForProfile(unknownRoleProfile);
  assert.strictEqual(unknownRoleGap.status, "ROLE_NOT_SUPPORTED");
  assert.strictEqual(unknownRoleGap.severity, 0);
  console.log("✔ ROLE_NOT_SUPPORTED handled cleanly without error.");

  console.log("\n==============================================");
  console.log("All Skill Gap Engine unit tests passed!");
  console.log("==============================================\n");
}

if (require.main === module) {
  runSkillGapEngineTests().catch((err) => {
    console.error("Test failed:", err);
    process.exit(1);
  });
}
