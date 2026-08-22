import assert from "node:assert";
import { CareerAssessmentPromptBuilder } from "../services/assessment-prompt-builder";
import { ProfileData } from "@/features/profile/types";
import { ModuleActivityContext } from "../types";

export async function runAssessmentPromptBuilderTests() {
  console.log("Running Career Assessment Prompt Builder Unit Tests...\n");

  const sampleProfile: ProfileData = {
    id: "p_1",
    userId: "u_1",
    name: "John Developer",
    age: 26,
    country: "Canada",
    currentStatus: "EMPLOYED",
    currentRole: "Frontend Engineer",
    
    yearsOfExperience: 3,
    education: {
      highestQualification: "Bachelor of Science",
      fieldOfStudy: "Software Engineering",
      

    },
    careerGoals: {
      primaryGoal: "LAND_A_JOB",
      
      targetRole: "Full Stack Engineer",
      
    },
    skills: [
      { id: "s1", name: "React", proficiency: "ADVANCED" },
      { id: "s2", name: "TypeScript", proficiency: "INTERMEDIATE" },
    ],
    desiredSkills: ["Go", "Kubernetes", "GraphQL"],
    
    targetCompanyType: "STARTUP",
    weeklyLearningHours: 12,
    profileVersion: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // 1. System Prompt Rules Verification
  console.log("1. Verifying System Prompt boundaries...");
  const systemPrompt = CareerAssessmentPromptBuilder.buildSystemPrompt();
  assert.ok(systemPrompt.includes("Do NOT invent facts"));
  assert.ok(systemPrompt.includes("DO NOT make definitive claims about hiring outcomes"));
  assert.ok(systemPrompt.includes("DO NOT recommend specific Elev8 platform modules"));
  console.log("✔ System prompt includes mandatory architectural boundaries.");

  // 2. Profile Context Serialization
  console.log("2. Verifying Profile Context serialization...");
  const profileContext = CareerAssessmentPromptBuilder.buildProfileContext(sampleProfile);
  assert.ok(profileContext.includes("John Developer"));
  assert.ok(profileContext.includes("Frontend Engineer"));
  assert.ok(profileContext.includes("University of Waterloo"));
  assert.ok(profileContext.includes("Full Stack Engineer"));
  console.log("✔ Profile context serialization accurate.");

  // 3. Skill Inventory Formatting
  console.log("3. Verifying Skill Inventory formatting...");
  const skillContext = CareerAssessmentPromptBuilder.buildSkillContext(sampleProfile);
  assert.ok(skillContext.includes("React (ADVANCED)"));
  assert.ok(skillContext.includes("TypeScript (INTERMEDIATE)"));
  assert.ok(skillContext.includes("- Go"));
  assert.ok(skillContext.includes("- Kubernetes"));
  console.log("✔ Skill inventory distinguishes current vs desired skills.");

  // 4. Null targetRole (e.g. EXPLORE_CAREERS)
  console.log("4. Verifying Null Target Role handling...");
  const exploreProfile: ProfileData = {
    ...sampleProfile,
    careerGoals: {
      primaryGoal: "EXPLORE_CAREERS",
      
      targetRole: null,

    },
  };
  const explorePrompt = CareerAssessmentPromptBuilder.buildAssessmentPrompt(exploreProfile);
  assert.ok(
    explorePrompt.includes("No specific target role is currently defined. Do not invent one.")
  );
  console.log("✔ Null targetRole gracefully instructs model not to invent a role.");

  // 5. Activity Context Inclusion
  console.log("5. Verifying Activity Context inclusion...");
  const activity: ModuleActivityContext = {
    recentInterviews: [
      {
        role: "Full Stack Engineer",
        difficulty: "MEDIUM",
        overallScore: 82,
        createdAt: new Date(),
      },
    ],
    recentResumes: [
      {
        role: "Full Stack Engineer",
        overallScore: 74,
        atsScore: 80,
        createdAt: new Date(),
      },
    ],
    activeRoadmaps: [
      {
        title: "Senior Full Stack Path",
        targetRole: "Full Stack Engineer",
        status: "IN_PROGRESS",
      },
    ],
  };

  const fullPromptWithActivity = CareerAssessmentPromptBuilder.buildAssessmentPrompt(
    sampleProfile,
    activity
  );
  assert.ok(fullPromptWithActivity.includes("Recent Interview Practice Sessions:"));
  assert.ok(fullPromptWithActivity.includes("Score: 82/100"));
  assert.ok(fullPromptWithActivity.includes("Senior Full Stack Path"));
  console.log("✔ Activity context accurately integrated into prompt.");

  console.log("\n==============================================");
  console.log("All Assessment Prompt Builder tests passed!");
  console.log("==============================================\n");
}

if (require.main === module) {
  runAssessmentPromptBuilderTests().catch((err) => {
    console.error("Test failed:", err);
    process.exit(1);
  });
}
