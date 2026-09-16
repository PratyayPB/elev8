import {
  JobService,
  metadata
} from "./chunk-4QEGXLXS.mjs";
import {
  BlobStorageService,
  GoogleGenAI,
  ModuleActivityService,
  external_exports,
  import_client,
  normalizeError,
  prisma,
  require_default,
  schemaTask
} from "./chunk-X57CFT4W.mjs";
import "./chunk-WRDGJYLU.mjs";
import {
  __name,
  __toESM,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// src/trigger/generate-interview.ts
init_esm();

// src/features/interview/schemas/interview-request.schema.ts
init_esm();

// src/features/interview/constants/index.ts
init_esm();

// src/features/interview/constants/interview-types.ts
init_esm();

// src/features/interview/constants/difficulty.ts
init_esm();
var DIFFICULTY_LEVELS = ["Easy", "Medium", "Hard"];

// src/features/interview/constants/experience-levels.ts
init_esm();
var EXPERIENCE_LEVELS = ["Beginner", "Basic", "Intermediate", "Advanced"];

// src/features/interview/schemas/interview-request.schema.ts
var InterviewProfileContextSchema = external_exports.object({
  currentStatus: external_exports.string().nullable().optional(),
  currentRole: external_exports.string().nullable().optional(),
  yearsOfExperience: external_exports.number().nullable().optional(),
  highestQualification: external_exports.string().nullable().optional(),
  fieldOfStudy: external_exports.string().nullable().optional(),
  primaryGoal: external_exports.string().nullable().optional(),
  targetCompanyType: external_exports.string().nullable().optional()
});
var InterviewRequestStage1Schema = external_exports.object({
  role: external_exports.string().min(2, "Role must be at least 2 characters"),
  experienceLevel: external_exports.enum(EXPERIENCE_LEVELS, {
    required_error: "Please select an experience level"
  }),
  difficulty: external_exports.enum(DIFFICULTY_LEVELS, {
    required_error: "Please select a difficulty level"
  }),
  interviewType: external_exports.enum(
    [
      "Quick Practice",
      "Standard Interview",
      "Comprehensive Interview",
      "Mock Final Round"
    ],
    { required_error: "Please select an interview type" }
  )
});
var InterviewRequestSchema = InterviewRequestStage1Schema.extend({
  questionCount: external_exports.number().min(1).max(30).optional(),
  personalization: external_exports.object({
    skipped: external_exports.boolean(),
    profile: InterviewProfileContextSchema.nullable().optional()
  }),
  profileId: external_exports.string().optional(),
  resumeId: external_exports.string().optional(),
  roadmapId: external_exports.string().optional()
});

// src/features/interview/services/interview-planner.service.ts
init_esm();

// src/features/interview/constants/interview-prompts.ts
init_esm();
var DEFAULT_INTERVIEW_QUESTION_COUNT = 10;
var INTERVIEW_PLANNER_SYSTEM_PROMPT = `
You are an expert technical interviewer and career coach. Your task is to design a high-level interview plan/blueprint for a candidate.

RULES:
1. Do NOT include actual interview questions. Only define the high-level sections and the exact number of questions per section.
2. The sum of questions across all sections MUST strictly equal the required total question count.
3. Ensure the sections accurately reflect the candidate's target role, experience level, difficulty, and optional profile personalization context.
4. If candidate profile context (current role, experience, transition goals) is provided, use it to tailor the breadth and emphasis of interview sections appropriately without compromising role expectations.
5. Output MUST be valid JSON conforming strictly to the requested schema. No markdown formatting, backticks, or additional text.
`;
function formatProfileContext(profile) {
  if (!profile)
    return "None (Generic interview based strictly on target role).";
  const lines = [];
  if (profile.currentStatus)
    lines.push(`- Current Status: ${profile.currentStatus}`);
  if (profile.currentRole) lines.push(`- Current Role: ${profile.currentRole}`);
  if (profile.yearsOfExperience != null)
    lines.push(`- Years of Experience: ${profile.yearsOfExperience}`);
  if (profile.highestQualification)
    lines.push(`- Highest Qualification: ${profile.highestQualification}`);
  if (profile.fieldOfStudy)
    lines.push(`- Field of Study: ${profile.fieldOfStudy}`);
  if (profile.primaryGoal)
    lines.push(`- Primary Career Goal: ${profile.primaryGoal}`);
  if (profile.targetCompanyType)
    lines.push(`- Target Company Type: ${profile.targetCompanyType}`);
  return lines.length > 0 ? lines.join("\n") : "None.";
}
__name(formatProfileContext, "formatProfileContext");
function buildPlannerUserPrompt(request, questionCount = DEFAULT_INTERVIEW_QUESTION_COUNT) {
  const profileDetails = request.personalization?.skipped ? "None (User skipped personalization)." : formatProfileContext(request.personalization?.profile);
  return `
Create an interview plan for the following candidate profile:
- Target Role: "${request.role}"
- Experience Level: "${request.experienceLevel}"
- Difficulty: "${request.difficulty}"
- Interview Type: "${request.interviewType}"
- Required Total Questions: Exactly ${questionCount} questions

Candidate Background Context:
${profileDetails}

Return a JSON object matching this schema:
{
  "title": "Descriptive Title (e.g. Full Stack Developer Mock Interview)",
  "estimatedDuration": "Estimated time (e.g. 30-45 minutes)",
  "sections": [
    {
      "name": "Section Name (e.g. Core JavaScript & Async)",
      "questions": 3
    }
  ]
}
Note: The sum of "questions" in all sections MUST equal exactly ${questionCount}.
`;
}
__name(buildPlannerUserPrompt, "buildPlannerUserPrompt");
var INTERVIEW_GENERATOR_SYSTEM_PROMPT = `
You are an expert technical and behavioral interviewer responsible for generating a high-quality interview from an approved interview plan.

Your output will be consumed programmatically. Follow every rule exactly.

## CORE RULES

1. The Approved Interview Plan is the PRIMARY SOURCE OF TRUTH.
   - Follow its sections, topics, question distribution, and constraints exactly.
   - Do not introduce sections or topics that are not supported by the plan unless required to produce a coherent question.

2. Generate EXACTLY the required number of questions.
   - The total number of questions MUST equal the requested total.
   - Do not generate fewer or additional questions.
   - Do not compensate for one section by exceeding another section's allocation.

3. Every question MUST contain:
   - id
   - category
   - question
   - difficulty
   - expectedTopics
   - estimatedTimeSeconds

4. estimatedTimeSeconds MUST be:
   - an integer
   - greater than 0
   - realistic for the question's complexity
   - generally within 60 to 300 seconds
   - based on the time required to understand, reason about, and formulate a complete answer

5. PERSONALIZATION:
   If candidate profile context is provided:
   - Adapt questions to the candidate's current role, experience, education, goals, and target role.
   - Adjust expected depth according to their background.
   - Use realistic scenarios relevant to their career transition or current experience when appropriate.
   - Do NOT simply repeat profile information.
   - Do NOT assume the candidate has experience that is not present in the profile.
   - Do NOT make every question dependent on personal background; maintain balanced role-specific coverage.

6. RELEVANCE:
   Every question must directly contribute to evaluating the candidate for:
   - target role
   - experience level
   - interview type
   - requested difficulty
   - approved plan topics

7. DIFFICULTY:
   - Respect the requested interview difficulty.
   - Questions may gradually increase in depth within that difficulty level.
   - Do not unintentionally turn an Easy interview into a Medium/Hard interview.
   - Do not use complexity alone as a substitute for difficulty.

8. QUESTION QUALITY:
   - Avoid duplicate or near-duplicate questions.
   - Avoid trivial rewordings of the same concept.
   - Prefer questions that test reasoning, understanding, practical application, and decision-making where appropriate.
   - Use direct, unambiguous wording.
   - Avoid unnecessary multi-part questions unless the plan explicitly requires them.
   - Avoid questions whose answer can be given by simply repeating the question's wording.

9. EXPECTED TOPICS:
   - List the key concepts that a strong answer should address.
   - Keep expectedTopics concise and directly relevant.
   - Do not include concepts unrelated to the question.

10. INTERVIEW TYPE:
   Adapt question style to the interview type.
   - Technical: test technical knowledge, reasoning, implementation, debugging, architecture, or problem solving as appropriate.
   - Behavioral: test past behavior, decision-making, communication, ownership, teamwork, and problem solving.
   - Non-Technical: evaluate role-relevant communication, situational judgment, domain understanding, or other approved non-technical competencies.
   - Follow the approved plan when it specifies a more precise style.

11. QUESTION IDs:
   - Generate sequential IDs starting from q1.
   - IDs must be unique.
   - Do not skip IDs.

12. OUTPUT:
   - Return ONLY a valid JSON array.
   - No markdown.
   - No code fences.
   - No explanations.
   - No additional properties outside the required schema.
`;
function buildGeneratorUserPrompt(request, planJson, questionCount = DEFAULT_INTERVIEW_QUESTION_COUNT) {
  const profileDetails = request.personalization?.skipped ? "No candidate profile provided. Generate a generic role-appropriate interview." : formatProfileContext(request.personalization?.profile);
  return `
Generate an interview using the following inputs.

## INTERVIEW CONFIGURATION

Target Role: ${request.role}
Experience Level: ${request.experienceLevel}
Difficulty: ${request.difficulty}
Interview Type: ${request.interviewType}

Total Questions Required: EXACTLY ${questionCount}

## CANDIDATE PROFILE

${profileDetails}

## APPROVED INTERVIEW PLAN

${planJson}

## GENERATION REQUIREMENTS

Generate exactly ${questionCount} questions.

The Approved Interview Plan is authoritative for:
- section/topic coverage
- question distribution
- required competencies
- interview structure

Use the candidate profile only when it is provided.

Personalize question context and expected depth without inventing candidate experience.

Ensure questions are:
- relevant to the target role
- appropriate for the experience level
- appropriate for the requested difficulty
- appropriate for the interview type
- non-repetitive
- progressively deeper where appropriate

For every question, generate a realistic estimatedTimeSeconds value.

Return ONLY the JSON array.

Required structure:

[
  {
    "id": "q1",
    "category": "React State Management",
    "question": "Explain how React state updates are processed and describe a situation where incorrect state handling could cause a bug.",
    "difficulty": "Medium",
    "expectedTopics": [
      "State updates",
      "Rendering",
      "State synchronization",
      "Common state management issues"
    ],
    "estimatedTimeSeconds": 120
  }
]
`;
}
__name(buildGeneratorUserPrompt, "buildGeneratorUserPrompt");

// src/features/interview/services/interview-validator.ts
init_esm();

// src/features/interview/constants/interview-schema.ts
init_esm();
var InterviewSectionSchema = external_exports.object({
  name: external_exports.string().min(1, "Section name is required"),
  questions: external_exports.number().int().positive("Question count must be positive")
});
var InterviewPlanSchema = external_exports.object({
  title: external_exports.string().min(1, "Title is required"),
  estimatedDuration: external_exports.string().min(1, "Estimated duration is required"),
  sections: external_exports.array(InterviewSectionSchema).min(1, "At least one section is required")
});
var GeneratedQuestionSchema = external_exports.object({
  id: external_exports.string().min(1, "ID is required"),
  category: external_exports.string().min(1, "Category is required"),
  question: external_exports.string().min(1, "Question text is required"),
  difficulty: external_exports.enum(DIFFICULTY_LEVELS),
  expectedTopics: external_exports.array(external_exports.string()).min(1, "At least one expected topic required"),
  estimatedTimeSeconds: external_exports.number().int().positive("Estimated time must be a positive integer")
});
var GeneratedQuestionsListSchema = external_exports.array(GeneratedQuestionSchema);

// src/features/interview/services/interview-validator.ts
var InterviewValidator = class {
  static {
    __name(this, "InterviewValidator");
  }
  /**
   * Validates the AI generated plan against Zod schema and question counts
   */
  static validatePlan(rawJson, expectedTotalQuestions) {
    const parsed = InterviewPlanSchema.safeParse(rawJson);
    if (!parsed.success) {
      throw new Error(`Plan validation failed: ${parsed.error.message}`);
    }
    const plan = parsed.data;
    const totalPlanQuestions = plan.sections.reduce((acc, sec) => acc + sec.questions, 0);
    if (totalPlanQuestions !== expectedTotalQuestions) {
      throw new Error(
        `Plan question count mismatch: expected ${expectedTotalQuestions}, but total section questions equal ${totalPlanQuestions}`
      );
    }
    return plan;
  }
  /**
   * Validates the generated questions array against schema, count, and duplicate IDs
   */
  static validateQuestions(rawJson, expectedTotalQuestions) {
    const parsed = GeneratedQuestionsListSchema.safeParse(rawJson);
    if (!parsed.success) {
      throw new Error(`Questions validation failed: ${parsed.error.message}`);
    }
    const questions = parsed.data;
    if (questions.length !== expectedTotalQuestions) {
      throw new Error(
        `Questions length mismatch: expected ${expectedTotalQuestions}, received ${questions.length}`
      );
    }
    const seenIds = /* @__PURE__ */ new Set();
    for (const q of questions) {
      if (seenIds.has(q.id)) {
        throw new Error(`Duplicate question ID detected: ${q.id}`);
      }
      seenIds.add(q.id);
      if (!q.estimatedTimeSeconds || q.estimatedTimeSeconds <= 0) {
        throw new Error(`Invalid estimatedTimeSeconds for question ${q.id}: ${q.estimatedTimeSeconds}`);
      }
    }
    return questions;
  }
};

// src/features/interview/services/interview-planner.service.ts
var InterviewPlannerService = class {
  static {
    __name(this, "InterviewPlannerService");
  }
  static async generatePlan(request, targetQuestionCount = request.questionCount || DEFAULT_INTERVIEW_QUESTION_COUNT) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }
    const ai = new GoogleGenAI({ apiKey });
    const userPrompt = buildPlannerUserPrompt(request, targetQuestionCount);
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [
        { role: "user", parts: [{ text: `${INTERVIEW_PLANNER_SYSTEM_PROMPT}

${userPrompt}` }] }
      ],
      config: {
        responseMimeType: "application/json"
      }
    });
    const text = response.text?.trim() || "";
    let rawJson;
    try {
      rawJson = JSON.parse(text);
    } catch (e) {
      throw new Error(`Failed to parse AI Plan response as JSON: ${text}`);
    }
    return InterviewValidator.validatePlan(rawJson, targetQuestionCount);
  }
};

// src/features/interview/services/interview-generation.service.ts
init_esm();
var InterviewGenerationService = class {
  static {
    __name(this, "InterviewGenerationService");
  }
  static async generateQuestions(request, plan, targetQuestionCount = request.questionCount || DEFAULT_INTERVIEW_QUESTION_COUNT) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }
    const ai = new GoogleGenAI({ apiKey });
    const userPrompt = buildGeneratorUserPrompt(request, JSON.stringify(plan, null, 2), targetQuestionCount);
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [
        { role: "user", parts: [{ text: `${INTERVIEW_GENERATOR_SYSTEM_PROMPT}

${userPrompt}` }] }
      ],
      config: {
        responseMimeType: "application/json"
      }
    });
    const text = response.text?.trim() || "";
    let rawJson;
    try {
      rawJson = JSON.parse(text);
    } catch (e) {
      throw new Error(`Failed to parse AI Questions response as JSON: ${text}`);
    }
    return InterviewValidator.validateQuestions(rawJson, targetQuestionCount);
  }
};

// src/features/interview/services/interview-artifact.service.ts
init_esm();
var import_client2 = __toESM(require_default());
var InterviewArtifactService = class {
  static {
    __name(this, "InterviewArtifactService");
  }
  /**
   * Compiles and stores an immutable template artifact in Blob storage.
   */
  static async createAndStoreTemplateBlob(templateId, request, plan, questions) {
    const templateArtifact = {
      version: "1.0.0",
      metadata: {
        interviewId: templateId,
        role: request.role,
        experienceLevel: request.experienceLevel,
        difficulty: request.difficulty,
        interviewType: request.interviewType,
        questionCount: request.questionCount || questions.length || 10,
        estimatedDuration: plan.estimatedDuration,
        generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        generatorVersion: "1.0.0"
      },
      questions,
      answers: [],
      assessment: null
    };
    const blobPath = `interview-templates/${templateId}.json`;
    return BlobStorageService.upsertJson(blobPath, templateArtifact);
  }
  /**
   * Compiles the InterviewArtifact, uploads to Blob storage, and updates the Prisma InterviewSession record.
   */
  static async createAndStoreArtifact(interviewId, request, plan, questions, templateSource = import_client2.InterviewTemplateSource.GLOBAL, templateId) {
    const artifact = {
      version: "1.0.0",
      metadata: {
        interviewId,
        role: request.role,
        experienceLevel: request.experienceLevel,
        difficulty: request.difficulty,
        interviewType: request.interviewType,
        questionCount: request.questionCount || questions.length || 10,
        estimatedDuration: plan.estimatedDuration,
        generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        generatorVersion: "1.0.0",
        templateSource,
        ...templateSource === import_client2.InterviewTemplateSource.USER_CREATED ? { interviewTemplateId: templateId } : { globalInterviewTemplateId: templateId }
      },
      questions,
      answers: [],
      assessment: null
    };
    const blobPath = `interviews/${interviewId}.json`;
    const blobUrl = await BlobStorageService.upsertJson(blobPath, artifact);
    await prisma.interviewSession.update({
      where: { id: interviewId },
      data: {
        blobUrl,
        status: import_client2.InterviewStatus.READY,
        estimatedDuration: plan.estimatedDuration,
        updatedAt: /* @__PURE__ */ new Date()
      }
    });
    return blobUrl;
  }
  /**
   * Clones questions from an existing global template blob and creates a new user session artifact.
   */
  static async createSessionFromTemplateBlob(sessionId, templateBlobUrl, globalTemplateId) {
    const templateArtifact = await BlobStorageService.fetchJson(templateBlobUrl);
    const sessionArtifact = {
      version: "1.0.0",
      metadata: {
        ...templateArtifact.metadata,
        interviewId: sessionId,
        generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        templateSource: import_client2.InterviewTemplateSource.GLOBAL,
        globalInterviewTemplateId: globalTemplateId
      },
      questions: templateArtifact.questions || [],
      answers: [],
      assessment: null
    };
    const blobPath = `interviews/${sessionId}.json`;
    const blobUrl = await BlobStorageService.upsertJson(blobPath, sessionArtifact);
    await prisma.interviewSession.update({
      where: { id: sessionId },
      data: {
        blobUrl,
        status: import_client2.InterviewStatus.READY,
        updatedAt: /* @__PURE__ */ new Date()
      }
    });
    return blobUrl;
  }
};

// src/features/interview/services/global-interview-template.service.ts
init_esm();
var import_client3 = __toESM(require_default());

// src/features/skill-gap/utils/role-normalizer.ts
init_esm();
var ROLE_ALIAS_MAP = {
  "full-stack-engineer": "full-stack-developer",
  "full-stack-dev": "full-stack-developer",
  "fullstack-developer": "full-stack-developer",
  "fullstack-engineer": "full-stack-developer",
  "web-developer": "full-stack-developer",
  "frontend-engineer": "frontend-developer",
  "frontend-dev": "frontend-developer",
  "front-end-developer": "frontend-developer",
  "front-end-engineer": "frontend-developer",
  "react-developer": "frontend-developer",
  "backend-engineer": "backend-developer",
  "backend-dev": "backend-developer",
  "back-end-developer": "backend-developer",
  "back-end-engineer": "backend-developer",
  "software-developer": "software-engineer",
  swe: "software-engineer",
  "ml-engineer": "machine-learning-engineer",
  "machine-learning-developer": "machine-learning-engineer",
  "ai-ml-engineer": "ai-engineer",
  "artificial-intelligence-engineer": "ai-engineer",
  "cloud-architect": "cloud-engineer",
  "devops-specialist": "devops-engineer",
  "qa-tester": "qa-engineer",
  "quality-assurance-engineer": "qa-engineer",
  "test-automation-engineer": "automation-test-engineer",
  sdet: "automation-test-engineer",
  dba: "database-administrator",
  "db-administrator": "database-administrator",
  "ui-ux": "ux-designer",
  "technical-author": "technical-writer",
  "docs-engineer": "technical-writer",
  "data-analyst-specialist": "data-analyst"
};
function normalizeRoleName(role) {
  if (!role) return "";
  return role.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
__name(normalizeRoleName, "normalizeRoleName");
function resolveRoleAlias(role) {
  const slug = normalizeRoleName(role);
  if (!slug) return "";
  return ROLE_ALIAS_MAP[slug] || slug;
}
__name(resolveRoleAlias, "resolveRoleAlias");

// src/features/interview/services/global-interview-template.service.ts
var GlobalInterviewTemplateService = class {
  static {
    __name(this, "GlobalInterviewTemplateService");
  }
  /**
   * Normalizes a role name into a canonical slug for deduplication and lookup.
   */
  static normalizeRole(role) {
    return resolveRoleAlias(role);
  }
  /**
   * Looks up an existing GlobalInterviewTemplate matching the normalized role, experience level, interview type, and difficulty.
   */
  static async findMatchingTemplate(role, experienceLevel, interviewType, difficulty = "MEDIUM") {
    const normalizedRole = this.normalizeRole(role);
    if (!normalizedRole) return null;
    return prisma.globalInterviewTemplate.findUnique({
      where: {
        normalizedRole_experienceLevel_interviewType_difficulty: {
          normalizedRole,
          experienceLevel,
          interviewType,
          difficulty
        }
      }
    });
  }
  /**
   * Creates and stores a new GlobalInterviewTemplate record.
   */
  static async createTemplate(data) {
    return prisma.globalInterviewTemplate.create({
      data: {
        createdByUserId: data.createdByUserId || void 0,
        role: data.role,
        normalizedRole: data.normalizedRole,
        experienceLevel: data.experienceLevel,
        difficulty: data.difficulty || "MEDIUM",
        interviewType: data.interviewType,
        questionCount: data.questionCount,
        estimatedDuration: data.estimatedDuration,
        templateBlobUrl: data.templateBlobUrl,
        status: import_client3.InterviewTemplateStatus.ACTIVE
      }
    });
  }
  /**
   * Lists all active global interview templates.
   */
  static async listTemplates() {
    return prisma.globalInterviewTemplate.findMany({
      where: { status: import_client3.InterviewTemplateStatus.ACTIVE },
      orderBy: [{ role: "asc" }, { interviewType: "asc" }]
    });
  }
};

// src/trigger/generate-interview.ts
var import_client4 = __toESM(require_default());
var GenerateInterviewTaskSchema = external_exports.object({
  interviewId: external_exports.string(),
  jobId: external_exports.string(),
  userId: external_exports.string(),
  templateSource: external_exports.enum(["USER_CREATED", "GLOBAL"]).default("GLOBAL"),
  interviewTemplateId: external_exports.string().optional(),
  globalInterviewTemplateId: external_exports.string().optional(),
  request: InterviewRequestSchema
});
var generateInterviewTask = schemaTask({
  id: "generate-interview",
  schema: GenerateInterviewTaskSchema,
  retry: {
    maxAttempts: 3,
    factor: 2,
    minTimeoutInMs: 1e3,
    maxTimeoutInMs: 1e4
  },
  run: /* @__PURE__ */ __name(async (payload, { ctx }) => {
    const {
      interviewId,
      jobId,
      userId,
      templateSource,
      interviewTemplateId,
      globalInterviewTemplateId,
      request
    } = payload;
    try {
      metadata.set("status", "Preparing Prompt");
      metadata.set("progress", 10);
      await JobService.updateProgress(jobId, 10, "Preparing Prompt", ctx.run.id);
      const targetQuestionCount = request.questionCount || 10;
      metadata.set("status", "Generating Interview Plan");
      metadata.set("progress", 25);
      await JobService.updateProgress(jobId, 25, "Generating Interview Plan");
      const plan = await InterviewPlannerService.generatePlan(
        request,
        targetQuestionCount
      );
      metadata.set("status", "Generating Questions");
      metadata.set("progress", 50);
      await JobService.updateProgress(jobId, 50, "Generating Questions");
      const questions = await InterviewGenerationService.generateQuestions(
        request,
        plan,
        targetQuestionCount
      );
      metadata.set("status", "Validating Artifact");
      metadata.set("progress", 75);
      await JobService.updateProgress(jobId, 75, "Validating Artifact");
      const expLevel = request.experienceLevel.toUpperCase() === "BEGINNER" ? "ENTRY" : request.experienceLevel.toUpperCase() === "ADVANCED" ? "SENIOR" : "MID";
      const interviewType = request.interviewType.toUpperCase().includes("BEHAVIORAL") ? "BEHAVIORAL" : request.interviewType.toUpperCase().includes("SYSTEM_DESIGN") ? "SYSTEM_DESIGN" : request.interviewType.toUpperCase().includes("ROLE_SPECIFIC") ? "ROLE_SPECIFIC" : request.interviewType.toUpperCase().includes("GENERAL") ? "GENERAL" : "TECHNICAL";
      const difficulty = request.difficulty?.toUpperCase() === "EASY" ? "EASY" : request.difficulty?.toUpperCase() === "HARD" ? "HARD" : "MEDIUM";
      let blobUrl;
      if (templateSource === "USER_CREATED" && interviewTemplateId) {
        const templateBlobUrl = await InterviewArtifactService.createAndStoreTemplateBlob(
          interviewTemplateId,
          request,
          plan,
          questions
        );
        await prisma.interviewTemplate.update({
          where: { id: interviewTemplateId },
          data: {
            templateBlobUrl,
            estimatedDuration: plan.estimatedDuration
          }
        });
        metadata.set("status", "Uploading Artifact");
        metadata.set("progress", 90);
        await JobService.updateProgress(jobId, 90, "Uploading Artifact");
        blobUrl = await InterviewArtifactService.createAndStoreArtifact(
          interviewId,
          request,
          plan,
          questions,
          templateSource,
          interviewTemplateId
        );
      } else {
        const targetGlobalTemplateId = globalInterviewTemplateId || `gt_${Date.now()}`;
        blobUrl = await InterviewArtifactService.createAndStoreTemplateBlob(
          targetGlobalTemplateId,
          request,
          plan,
          questions
        );
        if (globalInterviewTemplateId) {
          await prisma.globalInterviewTemplate.update({
            where: { id: globalInterviewTemplateId },
            data: {
              templateBlobUrl: blobUrl,
              estimatedDuration: plan.estimatedDuration
            }
          });
        } else {
          const normalizedRole = GlobalInterviewTemplateService.normalizeRole(request.role);
          await GlobalInterviewTemplateService.createTemplate({
            createdByUserId: userId,
            role: request.role,
            normalizedRole,
            experienceLevel: expLevel,
            difficulty,
            interviewType,
            questionCount: targetQuestionCount,
            estimatedDuration: plan.estimatedDuration,
            templateBlobUrl: blobUrl
          });
        }
      }
      await prisma.interviewSession.update({
        where: { id: interviewId },
        data: {
          blobUrl,
          status: import_client4.InterviewStatus.READY,
          estimatedDuration: plan.estimatedDuration
        }
      });
      if (globalInterviewTemplateId) {
        await prisma.interviewSession.updateMany({
          where: {
            globalInterviewTemplateId,
            status: import_client4.InterviewStatus.GENERATING
          },
          data: {
            blobUrl,
            status: import_client4.InterviewStatus.READY,
            estimatedDuration: plan.estimatedDuration
          }
        });
      }
      metadata.set("status", "Interview Ready");
      metadata.set("progress", 100);
      await JobService.completeJob(jobId, interviewId, "INTERVIEW");
      console.log(`[Trigger.dev] Interview generation pipeline completed for interviewId=${interviewId}`);
      return {
        success: true,
        interviewId,
        blobUrl
      };
    } catch (err) {
      const appError = normalizeError(err);
      console.error(`[Trigger.dev] Interview generation error for interviewId=${interviewId}:`, appError.message, err);
      await JobService.failJob(jobId, appError.message);
      await prisma.interviewSession.update({
        where: { id: interviewId },
        data: { status: import_client4.InterviewStatus.FAILED }
      }).catch(
        (updateError) => console.warn("[generateInterviewTask] Failed to mark interview failed:", updateError)
      );
      await ModuleActivityService.recordActivity({
        userId,
        module: import_client.ModuleType.INTERVIEW_PRACTICE,
        eventType: import_client.ModuleActivityEventType.INTERVIEW_FAILED,
        entityId: interviewId,
        metadata: {
          source: "GENERATE_INTERVIEW_TASK",
          interviewId,
          jobId,
          error: appError.message
        }
      }).catch(
        (activityError) => console.warn("[generateInterviewTask] Failed to record failure activity:", activityError)
      );
      throw err;
    }
  }, "run")
});
export {
  GenerateInterviewTaskSchema,
  generateInterviewTask
};
//# sourceMappingURL=generate-interview.mjs.map
