import assert from "node:assert";
import { RoadmapPromptService } from "../roadmap-prompt.service";
import { RoadmapProfileContextService, RoadmapProfileContext } from "../roadmap-profile-context.service";
import { RoadmapDurationService } from "../roadmap-duration.service";
import { RoadmapValidator } from "../roadmap-validator";
import { RoadmapRequest, Milestone } from "@/features/roadmaps/types";
import { normalizeRole, parseCareerLevel } from "@/features/roadmaps/utils";

export async function runRoadmapPromptAndPersonalizationTests() {
  console.log("Running Roadmap Prompt, Personalization & Global Roadmap Unit Tests...\n");

  // ==========================================
  // 1. Profile Context Builder & PII Exclusion
  // ==========================================
  console.log("1. Testing Profile Context Builder & PII Exclusion...");

  const mockProfile: any = {
    id: "p_123",
    userId: "u_456",
    name: "John Doe",
    age: 28,
    country: "US",
    phoneCountryCode: "+1",
    phoneNumber: "555-0199",
    currentStatus: "EMPLOYED",
    currentRole: "QA Engineer",
    yearsOfExperience: 4,
    highestQualification: "Bachelor of Science",
    fieldOfStudy: "Information Technology",
    primaryGoal: "SWITCH_CAREER",
    targetRole: "Full Stack Developer",
    targetCompanyType: "STARTUP",
    weeklyLearningHours: 15,
    isMandatoryCompleted: true,
    isCompleted: true,
    skills: [
      { id: "s1", profileId: "p_123", name: "JavaScript", normalizedName: "javascript", proficiency: "INTERMEDIATE" },
      { id: "s2", profileId: "p_123", name: "Selenium", normalizedName: "selenium", proficiency: "ADVANCED" },
    ],
  };

  const context = RoadmapProfileContextService.buildRoadmapProfileContext(mockProfile);
  assert.ok(context !== null, "Context should not be null");
  assert.strictEqual(context.currentRole, "QA Engineer");
  assert.strictEqual(context.currentStatus, "EMPLOYED");
  assert.strictEqual(context.yearsOfExperience, 4);
  assert.strictEqual(context.highestQualification, "Bachelor of Science");
  assert.strictEqual(context.fieldOfStudy, "Information Technology");
  assert.strictEqual(context.targetCompanyType, "STARTUP");
  assert.strictEqual(context.weeklyLearningHours, 15);
  assert.strictEqual(context.existingSkills.length, 2);
  assert.deepStrictEqual(context.existingSkills[0], { name: "JavaScript", proficiency: "INTERMEDIATE" });

  // Verify excluded fields
  assert.strictEqual((context as any).name, undefined, "Name must be excluded");
  assert.strictEqual((context as any).age, undefined, "Age must be excluded");
  assert.strictEqual((context as any).phoneNumber, undefined, "Phone number must be excluded");
  assert.strictEqual((context as any).userId, undefined, "UserId must be excluded");
  console.log("✔ Profile Context Builder builds clean context without PII.");

  // ==========================================
  // 2. Formatted Prompt & Existing Skills Baseline
  // ==========================================
  console.log("2. Testing Formatted Profile Context in User Prompt...");

  const requestWithProfile: RoadmapRequest = {
    role: "Full Stack Developer",
    experienceLevel: "Beginner",
    personalization: {
      skipped: false,
      profileContext: context,
    },
  };

  const userPrompt = RoadmapPromptService.getUserPrompt(requestWithProfile);
  assert.ok(userPrompt.includes("Target Role: Full Stack Developer"));
  assert.ok(userPrompt.includes("Experience Level (in target role): Beginner"));
  assert.ok(userPrompt.includes("Weekly Time Commitment: 15 hours/week"));
  assert.ok(userPrompt.includes("Current Role: QA Engineer"));
  assert.ok(userPrompt.includes("Years of Experience: 4"));
  assert.ok(userPrompt.includes("- JavaScript — INTERMEDIATE"));
  assert.ok(userPrompt.includes("- Selenium — ADVANCED"));
  console.log("✔ User prompt correctly embeds normalized profile context.");

  // ==========================================
  // 3. Career Switch Context (Senior Overall, Beginner in Target Role)
  // ==========================================
  console.log("3. Testing Career Switch (High overall experience, Beginner in target role)...");

  const careerSwitchContext: RoadmapProfileContext = {
    currentStatus: "EMPLOYED",
    currentRole: "Mechanical Engineer",
    yearsOfExperience: 10,
    highestQualification: "Master of Science",
    fieldOfStudy: "Mechanical Engineering",
    targetCompanyType: "ENTERPRISE",
    weeklyLearningHours: 12,
    existingSkills: [{ name: "CAD", proficiency: "EXPERT" }],
  };

  const careerSwitchRequest: RoadmapRequest = {
    role: "Cloud Architect",
    experienceLevel: "Beginner",
    personalization: {
      skipped: false,
      profileContext: careerSwitchContext,
    },
  };

  const careerSwitchPrompt = RoadmapPromptService.getUserPrompt(careerSwitchRequest);
  assert.ok(careerSwitchPrompt.includes("Target Role: Cloud Architect"));
  assert.ok(careerSwitchPrompt.includes("Experience Level (in target role): Beginner"));
  assert.ok(careerSwitchPrompt.includes("Weekly Time Commitment: 12 hours/week"));
  assert.ok(careerSwitchPrompt.includes("Years of Experience: 10"));
  assert.ok(careerSwitchPrompt.includes("Current Role: Mechanical Engineer"));
  console.log("✔ Career switch scenario formats target-role vs overall experience distinctly.");

  // ==========================================
  // 4. Missing Data & Generic Roadmap Prompt (No Profile Context, No Weekly Hours)
  // ==========================================
  console.log("4. Testing Missing Data & Generic Roadmap Fallback...");

  const genericRequest: RoadmapRequest = {
    role: "DevOps Engineer",
    experienceLevel: "Intermediate",
    personalization: {
      skipped: true,
      profileContext: null,
    },
  };

  const genericPrompt = RoadmapPromptService.getUserPrompt(genericRequest);
  assert.ok(
    genericPrompt.includes("No profile context provided. Generate a standard general roadmap.")
  );
  assert.strictEqual(
    genericPrompt.includes("Weekly Time Commitment:"),
    false,
    "Generic prompt must not include Weekly Time Commitment"
  );

  const partialContext: RoadmapProfileContext = {
    currentStatus: null,
    currentRole: null,
    yearsOfExperience: null,
    highestQualification: null,
    fieldOfStudy: null,
    targetCompanyType: null,
    weeklyLearningHours: null,
    existingSkills: [],
  };

  const formattedPartial = RoadmapPromptService.formatProfileContext(partialContext);
  assert.strictEqual(
    formattedPartial,
    "No profile context provided. Generate a standard general roadmap."
  );
  console.log("✔ Generic roadmap prompt and missing data fall back gracefully without hallucinating.");

  // ==========================================
  // 5. Role Normalization
  // ==========================================
  console.log("5. Testing Role Normalization & Career Level Parsing...");

  assert.strictEqual(normalizeRole("Backend Engineer"), "backend-engineer");
  assert.strictEqual(normalizeRole("  Full Stack Developer  "), "full-stack-developer");
  assert.strictEqual(normalizeRole("AI / ML Engineer"), "ai-ml-engineer");
  assert.strictEqual(normalizeRole("DevOps & SRE"), "devops-sre");

  assert.strictEqual(parseCareerLevel("Beginner"), "BEGINNER");
  assert.strictEqual(parseCareerLevel("Basic"), "BEGINNER");
  assert.strictEqual(parseCareerLevel("Intermediate"), "INTERMEDIATE");
  assert.strictEqual(parseCareerLevel("Advanced"), "ADVANCED");
  console.log("✔ Role normalization and CareerLevel parsing work reliably.");

  // ==========================================
  // 6. Deterministic Duration Calculation
  // ==========================================
  console.log("6. Testing RoadmapDurationService calculation...");

  const sampleMilestones: Milestone[] = [
    {
      id: "m1",
      title: "Foundations",
      description: "Basics",
      order: 1,
      estimatedWeeks: 2,
      skillsCovered: ["HTML", "CSS"],
      resources: [],
    },
    {
      id: "m2",
      title: "Frameworks",
      description: "React",
      order: 2,
      estimatedWeeks: 4,
      skillsCovered: ["React"],
      resources: [],
    },
    {
      id: "m3",
      title: "Backend & APIs",
      description: "Node & Express",
      order: 3,
      estimatedWeeks: 6,
      skillsCovered: ["Node.js"],
      resources: [],
    },
  ];

  // 2 + 4 + 6 = 12 weeks -> 3 months
  const duration12Weeks = RoadmapDurationService.calculate(sampleMilestones, 10);
  assert.strictEqual(duration12Weeks, "3 months");

  // Single 2-week milestone -> "2 weeks"
  const duration2Weeks = RoadmapDurationService.calculate([sampleMilestones[0]], 10);
  assert.strictEqual(duration2Weeks, "2 weeks");

  // Empty milestones fallback
  const durationEmpty = RoadmapDurationService.calculate([], "Flexible");
  assert.strictEqual(durationEmpty, "Flexible");

  console.log("✔ Duration calculations are deterministic and human-readable.");

  // ==========================================
  // 7. Schema & Graph DAG Validation
  // ==========================================
  console.log("7. Testing RoadmapValidator (DAG integrity & cycle rejection)...");

  const validRoadmapJson = JSON.stringify({
    metadata: {
      title: "Frontend Developer Roadmap",
      role: "Frontend Developer",
      experienceLevel: "Beginner",
    },
    summary: "Comprehensive guide to frontend development.",
    milestones: [
      {
        id: "m1",
        title: "HTML & CSS",
        description: "Web fundamentals",
        order: 1,
        estimatedWeeks: 3,
        skillsCovered: ["HTML", "CSS"],
        resources: [
          { id: "r1", title: "MDN Web Docs", url: "https://developer.mozilla.org", type: "article", isFree: true },
        ],
      },
    ],
    projects: [
      {
        id: "p1",
        title: "Portfolio Site",
        description: "Build personal site",
        difficulty: "Beginner",
        skillsRequired: ["HTML", "CSS"],
      },
    ],
    resources: [
      { id: "r1", title: "MDN", url: "https://developer.mozilla.org", type: "article", isFree: true },
    ],
    careerTips: [
      { id: "t1", category: "Portfolio", tip: "Showcase responsive projects." },
    ],
    logicalGraph: {
      nodes: [
        { id: "n1", title: "HTML", description: "Markup", type: "skill" },
        { id: "n2", title: "CSS", description: "Styling", type: "skill" },
      ],
      edges: [
        { id: "e1", source: "n1", target: "n2" },
      ],
    },
  });

  const validResult = RoadmapValidator.validate(validRoadmapJson);
  assert.ok(validResult.isValid, "Valid roadmap JSON should pass validation");

  // Cycle graph (A -> B -> A)
  const cyclicRoadmapJson = JSON.stringify({
    ...JSON.parse(validRoadmapJson),
    logicalGraph: {
      nodes: [
        { id: "n1", title: "HTML", description: "Markup", type: "skill" },
        { id: "n2", title: "CSS", description: "Styling", type: "skill" },
      ],
      edges: [
        { id: "e1", source: "n1", target: "n2" },
        { id: "e2", source: "n2", target: "n1" },
      ],
    },
  });

  const cyclicResult = RoadmapValidator.validate(cyclicRoadmapJson);
  assert.strictEqual(cyclicResult.isValid, false, "Cyclic graph must be rejected");
  assert.ok(cyclicResult.errors.some((e) => e.includes("Circular dependencies")));

  // Missing Node Reference
  const missingRefRoadmapJson = JSON.stringify({
    ...JSON.parse(validRoadmapJson),
    logicalGraph: {
      nodes: [
        { id: "n1", title: "HTML", description: "Markup", type: "skill" },
      ],
      edges: [
        { id: "e1", source: "n1", target: "non_existent_node" },
      ],
    },
  });

  const missingRefResult = RoadmapValidator.validate(missingRefRoadmapJson);
  assert.strictEqual(missingRefResult.isValid, false, "Missing node reference must be rejected");

  console.log("✔ RoadmapValidator enforces strict schema and DAG integrity.");

  console.log("\n==============================================");
  console.log("All Roadmap Prompt, Personalization & Global Roadmap tests passed!");
  console.log("==============================================\n");
}

if (require.main === module) {
  runRoadmapPromptAndPersonalizationTests().catch((err) => {
    console.error("Test failed:", err);
    process.exit(1);
  });
}
