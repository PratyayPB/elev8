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

// src/trigger/build-ai-resume.ts
init_esm();

// src/features/resume-builder/constants/ai-resume-prompts.ts
init_esm();
var AI_RESUME_BUILD_PROMPT_VERSION = "resume-build-v1";
var AI_RESUME_BUILD_MODEL = "gemini-3.6-flash";
var AI_RESUME_BUILD_SYSTEM_PROMPT = `
You are an elite Career Strategist and Executive Resume Writer.
Your task is to take a candidate's completed Profile, their current Resume Artifact (if any), and the Target Job Requirements to generate a tailored, high-impact, professional resume JSON artifact.

═══════════════════════════════════════════════════════════════════════════
CRITICAL SYSTEM DIRECTIVES: NO FABRICATION & STRICT TRUTHFULNESS
═══════════════════════════════════════════════════════════════════════════
Truthfulness has strictly higher priority than keyword matching.

1. FACTUAL BOUNDARIES:
- The Candidate's Profile and Existing Resume are the ONLY sources of factual truth regarding the candidate.
- The Job Description (JD) describes what the employer wants; it does NOT establish facts about what the candidate has done.
- You must NEVER invent or hallucinate candidate information just to match the JD.

2. STRICTLY FORBIDDEN:
- Do NOT fabricate companies, employers, or employment dates.
- Do NOT invent degrees, universities, graduation dates, or GPAs.
- Do NOT fabricate certifications, licenses, or credentials.
- Do NOT invent projects, technologies, tools, or libraries not mentioned in the candidate's background.
- Do NOT invent metrics, revenue numbers, percentage gains, team sizes, or accomplishments unless indicated or implied by the candidate's factual background.
- Do NOT invent skills, tools, or domain experience. If the JD requires AWS but the candidate only has GCP or generic cloud experience, do NOT claim they have AWS experience.

3. ALLOWED & REQUIRED ENHANCEMENTS:
- Professionally rewrite bullet points using the Action Verb + Context + Outcome framework.
- Improve clarity, conciseness, grammar, and ATS impact.
- Reorganize, sort, and prioritize the candidate's existing experience and projects based on relevance to the target job.
- Highlight and emphasize relevant skills and technologies that exist in the candidate's background.
- Tailor the Professional Summary to bridge the candidate's genuine background with the target role and company.
- Align terminology with the JD when and only when supported by the candidate's genuine experience.

4. TEMPLATE-AGNOSTIC GENERATION:
- Populate all truthful sections where candidate data exists (Personal Info, Summary, Experience, Education, Projects, Skills, Certifications, Achievements).
- If no truthful data exists for an optional section (e.g., certifications or achievements), return an empty array []. Do NOT invent items.

═══════════════════════════════════════════════════════════════════════════
EXPECTED JSON OUTPUT STRUCTURE:
═══════════════════════════════════════════════════════════════════════════
Return a single, raw JSON object (valid according to the schema below).
Do NOT include markdown formatting (\`\`\`json), comments, or conversational text.

{
  "personalInformation": {
    "fullName": "string",
    "email": "string",
    "phone": "string (optional)",
    "location": "string (optional)",
    "linkedin": "string (optional)",
    "github": "string (optional)",
    "portfolio": "string (optional)"
  },
  "professionalSummary": "string (tailored 2-4 sentences summary)",
  "education": [
    {
      "id": "edu_1",
      "institution": "string",
      "degree": "string",
      "fieldOfStudy": "string (optional)",
      "startDate": "string (optional, e.g. '2018')",
      "endDate": "string (optional, e.g. '2022')",
      "description": "string (optional)"
    }
  ],
  "experience": [
    {
      "id": "exp_1",
      "jobTitle": "string",
      "company": "string",
      "location": "string (optional)",
      "startDate": "string (optional, e.g. 'Jan 2022')",
      "endDate": "string (optional, e.g. 'Present')",
      "currentlyWorking": boolean,
      "description": "string (optional)",
      "achievements": [
        "High impact bullet point emphasizing relevant results...",
        "Another high impact bullet point..."
      ]
    }
  ],
  "projects": [
    {
      "id": "proj_1",
      "name": "string",
      "description": "string",
      "technologies": ["string", "string"],
      "url": "string (optional)",
      "startDate": "string (optional)",
      "endDate": "string (optional)"
    }
  ],
  "skills": [
    {
      "id": "skill_1",
      "name": "string",
      "category": "string (e.g. 'Technical Skills', 'Languages', 'Frameworks', 'Tools', 'Soft Skills')",
      "proficiency": "string (optional)"
    }
  ],
  "certifications": [
    {
      "id": "cert_1",
      "name": "string",
      "issuingOrganization": "string (optional)",
      "issueDate": "string (optional)",
      "expiryDate": "string (optional)",
      "credentialUrl": "string (optional)"
    }
  ],
  "achievements": [
    {
      "id": "ach_1",
      "title": "string",
      "description": "string (optional)",
      "date": "string (optional)"
    }
  ]
}
`;

// src/features/resume-builder/schemas/resume-artifact.schema.ts
init_esm();
var PersonalInformationSchema = external_exports.object({
  fullName: external_exports.string().default(""),
  email: external_exports.string().default(""),
  phone: external_exports.string().optional(),
  location: external_exports.string().optional(),
  linkedin: external_exports.string().optional(),
  github: external_exports.string().optional(),
  portfolio: external_exports.string().optional()
});
var EducationEntrySchema = external_exports.object({
  id: external_exports.string(),
  institution: external_exports.string(),
  degree: external_exports.string(),
  fieldOfStudy: external_exports.string().optional(),
  startDate: external_exports.string().optional(),
  endDate: external_exports.string().optional(),
  description: external_exports.string().optional()
});
var ExperienceEntrySchema = external_exports.object({
  id: external_exports.string(),
  jobTitle: external_exports.string(),
  company: external_exports.string(),
  location: external_exports.string().optional(),
  startDate: external_exports.string().optional(),
  endDate: external_exports.string().optional(),
  currentlyWorking: external_exports.boolean().optional(),
  description: external_exports.string().optional(),
  achievements: external_exports.array(external_exports.string()).optional()
});
var ProjectEntrySchema = external_exports.object({
  id: external_exports.string(),
  name: external_exports.string(),
  description: external_exports.string().optional(),
  technologies: external_exports.array(external_exports.string()).optional(),
  url: external_exports.string().optional(),
  startDate: external_exports.string().optional(),
  endDate: external_exports.string().optional()
});
var SkillEntrySchema = external_exports.object({
  id: external_exports.string(),
  name: external_exports.string(),
  category: external_exports.string().optional(),
  proficiency: external_exports.string().optional()
});
var CertificationEntrySchema = external_exports.object({
  id: external_exports.string(),
  name: external_exports.string(),
  issuingOrganization: external_exports.string().optional(),
  issueDate: external_exports.string().optional(),
  expiryDate: external_exports.string().optional(),
  credentialUrl: external_exports.string().optional()
});
var AchievementEntrySchema = external_exports.object({
  id: external_exports.string(),
  title: external_exports.string(),
  description: external_exports.string().optional(),
  date: external_exports.string().optional()
});
var BuilderResumeArtifactSchema = external_exports.object({
  resumeId: external_exports.string(),
  version: external_exports.number().int().positive(),
  personalInformation: PersonalInformationSchema,
  professionalSummary: external_exports.string().default(""),
  education: external_exports.array(EducationEntrySchema).default([]),
  experience: external_exports.array(ExperienceEntrySchema).default([]),
  projects: external_exports.array(ProjectEntrySchema).default([]),
  skills: external_exports.array(SkillEntrySchema).default([]),
  certifications: external_exports.array(CertificationEntrySchema).default([]),
  achievements: external_exports.array(AchievementEntrySchema).default([])
});
var ResumeBuildStatusEnum = external_exports.enum(["DRAFT", "READY", "ARCHIVED"]);
var CreateResumeInputSchema = external_exports.object({
  title: external_exports.string().min(1, "Title is required").max(100, "Title is too long"),
  template: external_exports.string().optional().default("academic-cv-lite")
});
var UpdateResumeInputSchema = external_exports.object({
  title: external_exports.string().min(1, "Title is required").max(100, "Title is too long").optional(),
  template: external_exports.string().optional(),
  status: ResumeBuildStatusEnum.optional()
});

// src/trigger/build-ai-resume.ts
var import_client2 = __toESM(require_default());
var BuildAiResumeTaskSchema = external_exports.object({
  resumeId: external_exports.string(),
  userId: external_exports.string(),
  jobId: external_exports.string().optional(),
  targetJobTitle: external_exports.string(),
  jobDescription: external_exports.string(),
  targetCompany: external_exports.string().optional(),
  targetCompanyType: external_exports.nativeEnum(import_client2.ResumeCompanyType).optional()
});
var buildAiResumeTask = schemaTask({
  id: "build-ai-resume",
  schema: BuildAiResumeTaskSchema,
  retry: {
    maxAttempts: 3,
    factor: 2,
    minTimeoutInMs: 1e3,
    maxTimeoutInMs: 1e4
  },
  run: /* @__PURE__ */ __name(async (payload, { ctx }) => {
    const {
      resumeId,
      userId,
      jobId,
      targetJobTitle,
      jobDescription,
      targetCompany,
      targetCompanyType
    } = payload;
    try {
      await ModuleActivityService.recordActivity({
        userId,
        module: import_client.ModuleType.RESUME_BUILD,
        eventType: import_client.ModuleActivityEventType.AI_RESUME_BUILD_STARTED,
        entityId: resumeId,
        metadata: {
          source: "BUILD_AI_RESUME_TASK",
          resumeId,
          jobId,
          targetJobTitle
        }
      }).catch(
        (error) => console.warn("[buildAiResumeTask] Failed to record AI build start activity:", error)
      );
      metadata.set("status", "Validating Profile & Resume");
      metadata.set("progress", 15);
      if (jobId) {
        await JobService.updateProgress(
          jobId,
          15,
          "Validating Profile & Resume",
          ctx.run.id
        );
      }
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          profile: {
            include: {
              skills: true
            }
          }
        }
      });
      if (!user) {
        throw new Error(`User ${userId} not found.`);
      }
      if (!user.profile || !user.profile.isMandatoryCompleted) {
        throw new Error(
          "Profile is incomplete. A completed profile is mandatory for AI Resume Build."
        );
      }
      const existingResume = await prisma.resumeBuild.findUnique({
        where: { id: resumeId }
      });
      if (!existingResume) {
        throw new Error(`Resume build record ${resumeId} not found.`);
      }
      if (existingResume.userId !== userId) {
        throw new Error("Unauthorized access to resume build.");
      }
      metadata.set("status", "Retrieving Baseline Data");
      metadata.set("progress", 30);
      if (jobId) {
        await JobService.updateProgress(jobId, 30, "Retrieving Baseline Data");
      }
      let currentArtifact = null;
      let currentVersion = 1;
      if (existingResume.artifactBlobUrl) {
        try {
          currentArtifact = await BlobStorageService.fetchJson(
            existingResume.artifactBlobUrl
          );
          if (currentArtifact?.version) {
            currentVersion = currentArtifact.version;
          }
        } catch (fetchErr) {
          console.warn(
            "[buildAiResumeTask] Could not fetch baseline artifact; continuing with profile data only:",
            fetchErr
          );
        }
      }
      metadata.set("status", "Generating Tailored Content with AI");
      metadata.set("progress", 50);
      if (jobId) {
        await JobService.updateProgress(
          jobId,
          50,
          "Generating Tailored Content with AI"
        );
      }
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is not configured.");
      }
      const ai = new GoogleGenAI({ apiKey });
      const profilePhone = user.profile.phoneNumber ? `${user.profile.phoneCountryCode || ""} ${user.profile.phoneNumber}`.trim() : void 0;
      const candidateContext = {
        profile: {
          name: user.profile.name || user.email,
          email: user.email,
          phone: profilePhone,
          location: user.profile.country || void 0,
          currentRole: user.profile.currentRole,
          yearsOfExperience: user.profile.yearsOfExperience,
          highestQualification: user.profile.highestQualification,
          fieldOfStudy: user.profile.fieldOfStudy,
          primaryGoal: user.profile.primaryGoal,
          targetRole: user.profile.targetRole,
          targetCompanyType: user.profile.targetCompanyType,
          skills: user.profile.skills.map((s) => ({
            name: s.name,
            proficiency: s.proficiency
          }))
        },
        existingResumeArtifact: currentArtifact ? {
          personalInformation: currentArtifact.personalInformation,
          professionalSummary: currentArtifact.professionalSummary,
          experience: currentArtifact.experience,
          education: currentArtifact.education,
          projects: currentArtifact.projects,
          skills: currentArtifact.skills,
          certifications: currentArtifact.certifications,
          achievements: currentArtifact.achievements
        } : null
      };
      const jobRequirementsContext = {
        targetJobTitle,
        jobDescription,
        targetCompany: targetCompany || "Not specified",
        targetCompanyType: targetCompanyType || "Not specified"
      };
      const prompt = `
${AI_RESUME_BUILD_SYSTEM_PROMPT}

═══════════════════════════════════════════════════════════════════════════
INPUT DATA:
═══════════════════════════════════════════════════════════════════════════

1. CANDIDATE FACTUAL BACKGROUND (ONLY SOURCE OF TRUTH):
${JSON.stringify(candidateContext, null, 2)}

2. TARGET JOB REQUIREMENTS (FOR TAILORING & FOCUS):
${JSON.stringify(jobRequirementsContext, null, 2)}

Remember: Output ONLY valid JSON conforming exactly to the expected structure. No markdown formatting.
`;
      const response = await ai.models.generateContent({
        model: AI_RESUME_BUILD_MODEL,
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        config: {
          responseMimeType: "application/json",
          temperature: 0.2
          // Low temperature for high factual consistency
        }
      });
      const responseText = response.text?.trim() || "";
      if (!responseText) {
        throw new Error("AI returned an empty response.");
      }
      metadata.set("status", "Validating Resume Structure");
      metadata.set("progress", 75);
      if (jobId) {
        await JobService.updateProgress(
          jobId,
          75,
          "Validating Resume Structure"
        );
      }
      let parsedJson;
      try {
        parsedJson = JSON.parse(responseText);
      } catch (parseErr) {
        throw new Error(
          `Failed to parse AI output as JSON: ${parseErr.message}`
        );
      }
      const candidateFullName = parsedJson.personalInformation?.fullName || user.profile.name || "";
      const candidateEmail = parsedJson.personalInformation?.email || user.email || "";
      const rawArtifactCandidate = {
        resumeId,
        version: currentVersion + 1,
        personalInformation: {
          fullName: candidateFullName,
          email: candidateEmail,
          phone: parsedJson.personalInformation?.phone || profilePhone || void 0,
          location: parsedJson.personalInformation?.location || user.profile.country || void 0,
          linkedin: parsedJson.personalInformation?.linkedin || void 0,
          github: parsedJson.personalInformation?.github || void 0,
          portfolio: parsedJson.personalInformation?.portfolio || void 0
        },
        professionalSummary: parsedJson.professionalSummary || "",
        education: Array.isArray(parsedJson.education) ? parsedJson.education.map((e, idx) => ({
          id: e.id || `edu_${idx + 1}`,
          institution: e.institution || "",
          degree: e.degree || "",
          fieldOfStudy: e.fieldOfStudy || void 0,
          startDate: e.startDate || void 0,
          endDate: e.endDate || void 0,
          description: e.description || void 0
        })) : [],
        experience: Array.isArray(parsedJson.experience) ? parsedJson.experience.map((e, idx) => ({
          id: e.id || `exp_${idx + 1}`,
          jobTitle: e.jobTitle || "",
          company: e.company || "",
          location: e.location || void 0,
          startDate: e.startDate || void 0,
          endDate: e.endDate || void 0,
          currentlyWorking: Boolean(e.currentlyWorking),
          description: e.description || void 0,
          achievements: Array.isArray(e.achievements) ? e.achievements.map((a) => String(a)) : void 0
        })) : [],
        projects: Array.isArray(parsedJson.projects) ? parsedJson.projects.map((p, idx) => ({
          id: p.id || `proj_${idx + 1}`,
          name: p.name || "",
          description: p.description || void 0,
          technologies: Array.isArray(p.technologies) ? p.technologies.map((t) => String(t)) : void 0,
          url: p.url || void 0,
          startDate: p.startDate || void 0,
          endDate: p.endDate || void 0
        })) : [],
        skills: Array.isArray(parsedJson.skills) ? parsedJson.skills.map((s, idx) => ({
          id: s.id || `skill_${idx + 1}`,
          name: s.name || "",
          category: s.category || void 0,
          proficiency: s.proficiency || void 0
        })) : [],
        certifications: Array.isArray(parsedJson.certifications) ? parsedJson.certifications.map((c, idx) => ({
          id: c.id || `cert_${idx + 1}`,
          name: c.name || "",
          issuingOrganization: c.issuingOrganization || void 0,
          issueDate: c.issueDate || void 0,
          expiryDate: c.expiryDate || void 0,
          credentialUrl: c.credentialUrl || void 0
        })) : [],
        achievements: Array.isArray(parsedJson.achievements) ? parsedJson.achievements.map((a, idx) => ({
          id: a.id || `ach_${idx + 1}`,
          title: a.title || "",
          description: a.description || void 0,
          date: a.date || void 0
        })) : []
      };
      const validation = BuilderResumeArtifactSchema.safeParse(rawArtifactCandidate);
      if (!validation.success) {
        throw new Error(
          `Generated resume failed schema validation: ${validation.error.message}`
        );
      }
      const validArtifact = validation.data;
      metadata.set("status", "Saving Generated Resume");
      metadata.set("progress", 90);
      if (jobId) {
        await JobService.updateProgress(jobId, 90, "Saving Generated Resume");
      }
      const blobPath = `resumes/${userId}/${resumeId}/artifact.json`;
      const artifactBlobUrl = await BlobStorageService.upsertJson(
        blobPath,
        validArtifact
      );
      await prisma.resumeBuild.update({
        where: { id: resumeId },
        data: {
          artifactBlobUrl,
          targetJobTitle,
          jobDescription,
          targetCompany: targetCompany || null,
          targetCompanyType: targetCompanyType || null,
          isAiGenerated: true,
          aiGeneratedAt: /* @__PURE__ */ new Date(),
          aiModel: AI_RESUME_BUILD_MODEL,
          aiPromptVersion: AI_RESUME_BUILD_PROMPT_VERSION
        }
      });
      metadata.set("status", "Completed");
      metadata.set("progress", 100);
      if (jobId) {
        await JobService.completeJob(jobId, resumeId, "RESUME_BUILD");
      }
      await ModuleActivityService.recordActivity({
        userId,
        module: import_client.ModuleType.RESUME_BUILD,
        eventType: import_client.ModuleActivityEventType.AI_RESUME_BUILD_COMPLETED,
        entityId: resumeId,
        metadata: {
          source: "BUILD_AI_RESUME_TASK",
          resumeId,
          jobId,
          targetJobTitle,
          version: validArtifact.version
        }
      }).catch(
        (activityError) => console.warn("[buildAiResumeTask] Failed to record AI build completion activity:", activityError)
      );
      return {
        success: true,
        resumeId,
        version: validArtifact.version,
        artifactBlobUrl
      };
    } catch (error) {
      const appError = normalizeError(error);
      console.error("[buildAiResumeTask] Error during AI resume build:", appError.message, error);
      metadata.set("status", "Failed");
      metadata.set("error", appError.message);
      if (jobId) {
        await JobService.failJob(jobId, appError.message).catch(
          (e) => console.error("Failed to fail job record:", e)
        );
      }
      await ModuleActivityService.recordActivity({
        userId,
        module: import_client.ModuleType.RESUME_BUILD,
        eventType: import_client.ModuleActivityEventType.AI_RESUME_BUILD_FAILED,
        entityId: resumeId,
        metadata: {
          source: "BUILD_AI_RESUME_TASK",
          resumeId,
          jobId,
          targetJobTitle,
          error: appError.message
        }
      }).catch(
        (activityError) => console.warn("[buildAiResumeTask] Failed to record AI build failure activity:", activityError)
      );
      throw error;
    }
  }, "run")
});
export {
  BuildAiResumeTaskSchema,
  buildAiResumeTask
};
//# sourceMappingURL=build-ai-resume.mjs.map
