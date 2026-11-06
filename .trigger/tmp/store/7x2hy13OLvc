import {
  getCountryName
} from "./chunk-DXC2ORYG.mjs";
import {
  BuilderResumeArtifactSchema
} from "./chunk-QPKFBGWH.mjs";
import {
  BlobStorageService
} from "./chunk-N4K5SP4C.mjs";
import {
  CacheKeys,
  CacheService,
  CacheTTL,
  ModuleActivityService,
  import_client,
  prisma,
  require_default
} from "./chunk-Q5MBDOPE.mjs";
import {
  require_react
} from "./chunk-ZPESTPYW.mjs";
import {
  __name,
  __toESM,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// src/features/resume-builder/services/resume-builder.service.ts
init_esm();

// src/features/resume-builder/services/profile-to-resume.mapper.ts
init_esm();

// src/features/resume-builder/utils/create-empty-resume.ts
init_esm();
function createEmptyResumeArtifact(resumeId) {
  return {
    resumeId,
    version: 1,
    personalInformation: {
      fullName: "",
      email: "",
      label: "",
      image: "",
      phone: "",
      location: "",
      city: "",
      region: "",
      countryCode: "",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: ""
    },
    professionalSummary: "",
    education: [],
    experience: [],
    projects: [],
    skills: [],
    certifications: [],
    achievements: [],
    languages: [],
    volunteer: [],
    publications: [],
    interests: [],
    references: []
  };
}
__name(createEmptyResumeArtifact, "createEmptyResumeArtifact");

// src/features/resume-builder/services/profile-to-resume.mapper.ts
import crypto from "crypto";
function profileToResumeArtifact(resumeId, profile, userEmail) {
  const artifact = createEmptyResumeArtifact(resumeId);
  if (!profile) {
    return artifact;
  }
  artifact.personalInformation.fullName = profile.name || "";
  if (userEmail) {
    artifact.personalInformation.email = userEmail;
  }
  if (profile.country) {
    artifact.personalInformation.location = getCountryName(profile.country);
  }
  if (profile.highestQualification || profile.fieldOfStudy) {
    const educationEntry = {
      id: crypto.randomUUID(),
      institution: "",
      degree: profile.highestQualification || "",
      fieldOfStudy: profile.fieldOfStudy || ""
    };
    artifact.education = [educationEntry];
  }
  if (profile.skills && Array.isArray(profile.skills)) {
    const mappedSkills = profile.skills.filter((s) => s.name && s.name.trim()).map((s) => ({
      id: crypto.randomUUID(),
      name: s.name.trim(),
      category: "Technical Skills"
    }));
    artifact.skills = mappedSkills;
  }
  return artifact;
}
__name(profileToResumeArtifact, "profileToResumeArtifact");
function mergeProfileIntoResumeArtifact(currentArtifact, profile, userEmail) {
  if (!profile) {
    return currentArtifact;
  }
  const profileArtifact = profileToResumeArtifact(
    currentArtifact.resumeId,
    profile,
    userEmail
  );
  return {
    ...currentArtifact,
    personalInformation: {
      ...currentArtifact.personalInformation,
      ...profileArtifact.personalInformation.fullName ? { fullName: profileArtifact.personalInformation.fullName } : {},
      ...profileArtifact.personalInformation.email ? { email: profileArtifact.personalInformation.email } : {},
      ...profileArtifact.personalInformation.location ? { location: profileArtifact.personalInformation.location } : {}
    },
    education: profileArtifact.education.length > 0 ? profileArtifact.education : currentArtifact.education,
    skills: profileArtifact.skills.length > 0 ? profileArtifact.skills : currentArtifact.skills
  };
}
__name(mergeProfileIntoResumeArtifact, "mergeProfileIntoResumeArtifact");

// src/features/resume-builder/types.ts
init_esm();
var import_client2 = __toESM(require_default());

// src/features/resume-builder/services/resume-builder.service.ts
var ResumeBuilderError = class extends Error {
  constructor(message, code, statusCode = 400) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.name = "ResumeBuilderError";
  }
  static {
    __name(this, "ResumeBuilderError");
  }
};
var ResumeBuilderService = class {
  static {
    __name(this, "ResumeBuilderService");
  }
  /**
   * Creates a new resume for a user: generates empty artifact, uploads to Blob, creates Prisma record.
   */
  static async createResume(userId, input) {
    const trimmedTitle = input.title.trim();
    if (!trimmedTitle) {
      throw new ResumeBuilderError(
        "Resume title is required.",
        "INVALID_RESUME_TITLE",
        400
      );
    }
    const existing = await prisma.resumeBuild.findFirst({
      where: {
        userId,
        title: { equals: trimmedTitle, mode: "insensitive" }
      }
    });
    if (existing) {
      throw new ResumeBuilderError(
        `A resume named "${trimmedTitle}" already exists. Please choose a unique name.`,
        "RESUME_TITLE_EXISTS",
        409
      );
    }
    let dummyRecord;
    try {
      dummyRecord = await prisma.resumeBuild.create({
        data: {
          userId,
          title: trimmedTitle,
          template: input.template && input.template !== "CLASSIC" ? input.template : "academic-cv-lite",
          status: import_client2.ResumeBuildStatus.DRAFT
        }
      });
    } catch (error) {
      if (error?.code === "P2002") {
        throw new ResumeBuilderError(
          `A resume named "${trimmedTitle}" already exists. Please choose a unique name.`,
          "RESUME_TITLE_EXISTS",
          409
        );
      }
      throw error;
    }
    const resumeId = dummyRecord.id;
    const initialArtifact = createEmptyResumeArtifact(resumeId);
    const pathname = `resumes/${userId}/${resumeId}/artifact.json`;
    try {
      const artifactBlobUrl = await BlobStorageService.upsertJson(pathname, initialArtifact);
      const updatedRecord = await prisma.resumeBuild.update({
        where: { id: resumeId },
        data: { artifactBlobUrl }
      });
      try {
        await ModuleActivityService.recordActivity({
          userId,
          module: import_client.ModuleType.RESUME_BUILD,
          eventType: import_client.ModuleActivityEventType.RESUME_BUILD_STARTED,
          completionStatus: import_client.ModuleCompletionStatus.STARTED,
          entityId: resumeId,
          metadata: {
            resumeId,
            title: input.title,
            template: input.template && input.template !== "CLASSIC" ? input.template : "academic-cv-lite"
          }
        });
      } catch (err) {
        console.warn("[ResumeBuilderService] Failed to record build started activity:", err);
      }
      return updatedRecord;
    } catch (error) {
      await prisma.resumeBuild.delete({ where: { id: resumeId } }).catch(() => {
      });
      throw new ResumeBuilderError(
        `Failed to create resume storage artifact: ${error.message}`,
        "BLOB_UPLOAD_FAILED",
        500
      );
    }
  }
  /**
   * Retrieves resume metadata for a user with ownership validation.
   */
  static async getResume(userId, resumeId) {
    const resume = await prisma.resumeBuild.findUnique({
      where: { id: resumeId }
    });
    if (!resume) {
      throw new ResumeBuilderError("Resume not found", "RESUME_NOT_FOUND", 404);
    }
    if (resume.userId !== userId) {
      throw new ResumeBuilderError(
        "You do not have permission to access this resume",
        "RESUME_FORBIDDEN",
        403
      );
    }
    return resume;
  }
  /**
   * Lists all resumes belonging to a user.
   */
  static async listUserResumes(userId) {
    const resumes = await prisma.resumeBuild.findMany({
      where: { userId },
      select: {
        id: true,
        userId: true,
        title: true,
        status: true,
        template: true,
        artifactBlobUrl: true,
        createdAt: true,
        updatedAt: true
      },
      orderBy: { updatedAt: "desc" },
      take: 50
    });
    return resumes;
  }
  /**
   * Updates resume metadata (title, targetRole, template, status).
   */
  static async updateResume(userId, resumeId, input) {
    const existingResume = await this.getResume(userId, resumeId);
    let trimmedTitle = void 0;
    if (input.title !== void 0) {
      trimmedTitle = input.title.trim();
      if (!trimmedTitle) {
        throw new ResumeBuilderError(
          "Resume title cannot be empty.",
          "INVALID_RESUME_TITLE",
          400
        );
      }
      if (trimmedTitle.toLowerCase() !== existingResume.title.trim().toLowerCase()) {
        const duplicate = await prisma.resumeBuild.findFirst({
          where: {
            userId,
            title: { equals: trimmedTitle, mode: "insensitive" },
            id: { not: resumeId }
          }
        });
        if (duplicate) {
          throw new ResumeBuilderError(
            `A resume named "${trimmedTitle}" already exists. Please choose a unique name.`,
            "RESUME_TITLE_EXISTS",
            409
          );
        }
      }
    }
    let updated;
    try {
      updated = await prisma.resumeBuild.update({
        where: { id: resumeId },
        data: {
          ...trimmedTitle !== void 0 && { title: trimmedTitle },
          ...input.template !== void 0 && { template: input.template },
          ...input.status !== void 0 && { status: input.status }
        }
      });
    } catch (error) {
      if (error?.code === "P2002") {
        throw new ResumeBuilderError(
          `A resume named "${trimmedTitle}" already exists. Please choose a unique name.`,
          "RESUME_TITLE_EXISTS",
          409
        );
      }
      throw error;
    }
    if (input.status === "READY" && existingResume.status !== "READY") {
      try {
        await ModuleActivityService.recordActivity({
          userId,
          module: import_client.ModuleType.RESUME_BUILD,
          eventType: import_client.ModuleActivityEventType.RESUME_BUILD_READY,
          completionStatus: import_client.ModuleCompletionStatus.COMPLETED,
          entityId: resumeId,
          metadata: {
            resumeId,
            template: updated.template,
            status: "READY"
          }
        });
      } catch (err) {
        console.error("[ResumeBuilderService] Failed to record activity:", err);
      }
    }
    if (input.template !== void 0 && input.template !== existingResume.template) {
      try {
        await ModuleActivityService.recordActivity({
          userId,
          module: import_client.ModuleType.RESUME_BUILD,
          eventType: import_client.ModuleActivityEventType.RESUME_TEMPLATE_CHANGED,
          entityId: resumeId,
          metadata: {
            source: "RESUME_BUILDER_UPDATE_RESUME",
            resumeId,
            previousTemplate: existingResume.template,
            template: updated.template
          }
        });
      } catch (err) {
        console.error("[ResumeBuilderService] Failed to record template change activity:", err);
      }
    }
    return updated;
  }
  /**
   * Deletes a resume record and its associated Blob artifact.
   */
  static async deleteResume(userId, resumeId) {
    const resume = await this.getResume(userId, resumeId);
    await prisma.resumeBuild.delete({
      where: { id: resumeId }
    });
    if (resume.artifactBlobUrl) {
      await BlobStorageService.delete(resume.artifactBlobUrl).catch((err) => {
        console.warn(`Failed to delete blob artifact for resume ${resumeId}:`, err);
      });
    }
    await CacheService.del(CacheKeys.resumeBuilderArtifact(resumeId));
  }
  /**
   * Retrieves full structured Resume Artifact JSON from Blob Storage.
   * Can accept an existing ResumeBuild entity to prevent duplicate Prisma queries.
   */
  static async getResumeArtifact(userId, resumeId, existingResume) {
    const resume = existingResume || await this.getResume(userId, resumeId);
    if (!resume.artifactBlobUrl) {
      throw new ResumeBuilderError(
        "Resume artifact URL missing",
        "BLOB_READ_FAILED",
        404
      );
    }
    try {
      const artifact = await CacheService.getOrSet(
        CacheKeys.resumeBuilderArtifact(resumeId),
        async () => {
          return await BlobStorageService.fetchJson(
            resume.artifactBlobUrl
          );
        },
        CacheTTL.ARTIFACT
      );
      return artifact;
    } catch (error) {
      throw new ResumeBuilderError(
        `Failed to fetch resume artifact: ${error.message}`,
        "BLOB_READ_FAILED",
        500
      );
    }
  }
  /**
   * Validates and updates the complete Resume Artifact in Blob Storage and updates version in Prisma.
   */
  static async updateResumeArtifact(userId, resumeId, artifactInput, clientVersion) {
    const resume = await this.getResume(userId, resumeId);
    const currentVersion = clientVersion !== void 0 ? clientVersion : 0;
    let validArtifact;
    if (artifactInput && typeof artifactInput === "object" && artifactInput.resumeId === resumeId && typeof artifactInput.personalInformation === "object") {
      validArtifact = artifactInput;
    } else {
      const parseResult = BuilderResumeArtifactSchema.safeParse(artifactInput);
      if (!parseResult.success) {
        throw new ResumeBuilderError(
          `Invalid artifact structure: ${parseResult.error.message}`,
          "INVALID_ARTIFACT",
          400
        );
      }
      validArtifact = parseResult.data;
    }
    if (validArtifact.resumeId !== resumeId) {
      throw new ResumeBuilderError(
        "Artifact resumeId does not match request resumeId",
        "INVALID_ARTIFACT",
        400
      );
    }
    const newVersion = currentVersion + 1;
    validArtifact.version = newVersion;
    const pathname = `resumes/${userId}/${resumeId}/artifact.json`;
    try {
      const updatedBlobUrl = await BlobStorageService.upsertJson(pathname, validArtifact);
      const updatedRecord = await prisma.resumeBuild.update({
        where: { id: resumeId },
        data: {
          artifactBlobUrl: updatedBlobUrl
        }
      });
      await CacheService.set(
        CacheKeys.resumeBuilderArtifact(resumeId),
        validArtifact,
        CacheTTL.ARTIFACT
      );
      return {
        artifact: validArtifact,
        version: newVersion,
        savedAt: updatedRecord.updatedAt
      };
    } catch (error) {
      throw new ResumeBuilderError(
        `Failed to update resume artifact storage: ${error.message}`,
        "BLOB_UPDATE_FAILED",
        500
      );
    }
  }
  /**
   * Duplicates an existing resume for a user.
   */
  static async duplicateResume(userId, originalResumeId) {
    const originalResume = await this.getResume(userId, originalResumeId);
    const originalArtifact = await this.getResumeArtifact(userId, originalResumeId);
    const baseTitle = originalResume.title.replace(/ - Copy( \(\d+\))?$/, "");
    const copyPrefix = `${baseTitle} - Copy`;
    const existingResumes = await prisma.resumeBuild.findMany({
      where: {
        userId,
        title: { startsWith: copyPrefix, mode: "insensitive" }
      },
      select: { title: true }
    });
    const existingTitles = new Set(existingResumes.map((r) => r.title.toLowerCase()));
    let candidateTitle = copyPrefix.substring(0, 100);
    let counter = 2;
    while (existingTitles.has(candidateTitle.toLowerCase())) {
      candidateTitle = `${baseTitle} - Copy (${counter})`.substring(0, 100);
      counter++;
    }
    let newRecord;
    try {
      newRecord = await prisma.resumeBuild.create({
        data: {
          userId,
          title: candidateTitle,
          template: originalResume.template,
          status: "DRAFT"
        }
      });
    } catch (error) {
      if (error?.code === "P2002") {
        throw new ResumeBuilderError(
          `A resume named "${candidateTitle}" already exists. Please choose a unique name.`,
          "RESUME_TITLE_EXISTS",
          409
        );
      }
      throw error;
    }
    const newResumeId = newRecord.id;
    const newArtifact = JSON.parse(JSON.stringify(originalArtifact));
    newArtifact.resumeId = newResumeId;
    newArtifact.version = 1;
    const pathname = `resumes/${userId}/${newResumeId}/artifact.json`;
    try {
      const newArtifactBlobUrl = await BlobStorageService.upsertJson(pathname, newArtifact);
      const updatedNewRecord = await prisma.resumeBuild.update({
        where: { id: newResumeId },
        data: { artifactBlobUrl: newArtifactBlobUrl }
      });
      return updatedNewRecord;
    } catch (error) {
      await prisma.resumeBuild.delete({ where: { id: newResumeId } }).catch(() => {
      });
      throw new ResumeBuilderError(
        `Failed to duplicate resume storage artifact: ${error.message}`,
        "BLOB_UPLOAD_FAILED",
        500
      );
    }
  }
  /**
   * Checks profile completion and imports profile data into an existing resume artifact.
   * Merges personalInformation, education, and skills while preserving other sections.
   */
  static async importProfileData(userId, resumeId, clientArtifact, clientVersion) {
    const resume = await this.getResume(userId, resumeId);
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: {
          include: { skills: true }
        }
      }
    });
    if (!user?.profile || !user.profile.isCompleted) {
      return {
        isCompleted: false
      };
    }
    let baseArtifact = clientArtifact;
    if (!baseArtifact) {
      if (!resume.artifactBlobUrl) {
        throw new ResumeBuilderError("Resume artifact URL missing", "BLOB_READ_FAILED", 404);
      }
      try {
        baseArtifact = await BlobStorageService.fetchJson(resume.artifactBlobUrl);
      } catch (error) {
        throw new ResumeBuilderError(
          `Failed to fetch resume artifact: ${error.message}`,
          "BLOB_READ_FAILED",
          500
        );
      }
    }
    const mergedArtifact = mergeProfileIntoResumeArtifact(
      baseArtifact,
      user.profile,
      user.email
    );
    const { version, savedAt } = await this.updateResumeArtifact(
      userId,
      resumeId,
      mergedArtifact,
      clientVersion ?? baseArtifact.version
    );
    return {
      isCompleted: true,
      artifact: mergedArtifact,
      version,
      savedAt
    };
  }
};

// src/features/resume-builder/adapters/builder-to-json-resume.ts
init_esm();
function builderToJsonResume(artifact) {
  const {
    personalInformation = {},
    professionalSummary = "",
    experience = [],
    education = [],
    projects = [],
    skills = [],
    certifications = [],
    achievements = [],
    languages = [],
    volunteer = [],
    publications = [],
    interests = [],
    references = []
  } = artifact || {};
  const pi = personalInformation || {};
  const profiles = [];
  if (pi.linkedin) {
    profiles.push({ network: "LinkedIn", url: pi.linkedin, username: "" });
  }
  if (pi.github) {
    profiles.push({ network: "GitHub", url: pi.github, username: "" });
  }
  if (pi.twitter) {
    profiles.push({ network: "Twitter", url: pi.twitter, username: "" });
  }
  const locCity = pi.city || (pi.location && pi.location.includes(",") ? pi.location.split(",")[0]?.trim() : pi.location) || "";
  const locRegion = pi.region || (pi.location && pi.location.includes(",") ? pi.location.split(",")[1]?.trim() : "") || "";
  const jsonResume = {
    basics: {
      name: pi.fullName || "",
      label: pi.label || "",
      image: pi.image || "",
      email: pi.email || "",
      phone: pi.phone || "",
      url: pi.portfolio || "",
      summary: professionalSummary || "",
      location: {
        address: pi.location || "",
        postalCode: "",
        city: locCity,
        countryCode: pi.countryCode || "",
        region: locRegion
      },
      profiles
    },
    work: (experience || []).map((exp) => ({
      name: exp.company || "",
      position: exp.jobTitle || "",
      url: "",
      startDate: exp.startDate || "",
      endDate: exp.currentlyWorking ? "" : exp.endDate || "",
      summary: exp.description || "",
      highlights: exp.achievements && exp.achievements.length > 0 ? exp.achievements : []
    })),
    education: (education || []).map((edu) => ({
      institution: edu.institution || "",
      url: "",
      area: edu.fieldOfStudy || "",
      studyType: edu.degree || "",
      startDate: edu.startDate || "",
      endDate: edu.endDate || "",
      score: edu.score || "",
      courses: Array.isArray(edu.courses) ? edu.courses : typeof edu.courses === "string" ? edu.courses.split(",").map((s) => s.trim()).filter(Boolean) : []
    })),
    projects: (projects || []).map((proj) => ({
      name: proj.name || "",
      description: proj.description || "",
      highlights: proj.technologies && proj.technologies.length > 0 ? proj.technologies : [],
      url: proj.url || "",
      startDate: proj.startDate || "",
      endDate: proj.endDate || ""
    })),
    skills: (skills || []).map((skill) => ({
      name: skill.name || "",
      level: skill.proficiency || "",
      keywords: skill.category ? [skill.category] : []
    })),
    certificates: (certifications || []).map((cert) => ({
      name: cert.name || "",
      date: cert.issueDate || "",
      issuer: cert.issuingOrganization || "",
      url: cert.credentialUrl || ""
    })),
    awards: (achievements || []).map((ach) => ({
      title: ach.title || "",
      date: ach.date || "",
      awarder: ach.awarder || "",
      summary: ach.description || ""
    })),
    languages: (languages || []).map((lang) => ({
      language: lang.language || "",
      fluency: lang.fluency || ""
    })),
    volunteer: (volunteer || []).map((vol) => ({
      organization: vol.organization || "",
      position: vol.position || "",
      url: vol.url || "",
      startDate: vol.startDate || "",
      endDate: vol.endDate || "",
      summary: vol.summary || "",
      highlights: vol.highlights || []
    })),
    publications: (publications || []).map((pub) => ({
      name: pub.name || "",
      publisher: pub.publisher || "",
      releaseDate: pub.releaseDate || "",
      url: pub.url || "",
      summary: pub.summary || ""
    })),
    interests: (interests || []).map((int) => ({
      name: int.name || "",
      keywords: Array.isArray(int.keywords) ? int.keywords : []
    })),
    references: (references || []).map((ref) => ({
      name: ref.name || "",
      reference: ref.reference || ""
    }))
  };
  return jsonResume;
}
__name(builderToJsonResume, "builderToJsonResume");

// src/features/resume-builder/templates/registry.ts
init_esm();
var import_react = __toESM(require_react());
if (typeof import_react.default !== "undefined") {
  if (!import_react.default.createContext) {
    import_react.default.createContext = function(defaultValue) {
      const context = {
        $$typeof: Symbol.for("react.context"),
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      context.Provider = {
        $$typeof: Symbol.for("react.provider"),
        _context: context
      };
      context.Consumer = context;
      return context;
    };
  }
}
if (typeof globalThis !== "undefined") {
  if (!globalThis.React) {
    globalThis.React = import_react.default;
  }
  if (globalThis.React && !globalThis.React.createContext) {
    globalThis.React.createContext = import_react.default.createContext;
  }
}
var RESUME_TEMPLATE_REGISTRY = {
  // Themes that work correctly with Next.js/Node
  // @ts-ignore
  "academic-cv-lite": /* @__PURE__ */ __name(async (resume) => {
    const mod = await import("./src-PD7PBFRT.mjs");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  }, "academic-cv-lite"),
  // @ts-ignore
  "developer-mono": /* @__PURE__ */ __name(async (resume) => {
    const mod = await import("./src-7336HLVE.mjs");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  }, "developer-mono"),
  // @ts-ignore
  "government-standard": /* @__PURE__ */ __name(async (resume) => {
    const mod = await import("./src-GH2SYOZI.mjs");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  }, "government-standard"),
  // @ts-ignore
  "architects-portfolio": /* @__PURE__ */ __name(async (resume) => {
    const mod = await import("./src-U635VDGZ.mjs");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  }, "architects-portfolio"),
  // @ts-ignore
  "minimalist-grid": /* @__PURE__ */ __name(async (resume) => {
    const mod = await import("./src-RVTOGLPH.mjs");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  }, "minimalist-grid"),
  // @ts-ignore
  "nordic-minimal": /* @__PURE__ */ __name(async (resume) => {
    const mod = await import("./src-BKEHQKNO.mjs");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  }, "nordic-minimal"),
  // @ts-ignore
  "desert-modern": /* @__PURE__ */ __name(async (resume) => {
    const mod = await import("./src-H5Y2QMUK.mjs");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  }, "desert-modern"),
  // @ts-ignore
  elegant: /* @__PURE__ */ __name(async (resume) => {
    const mod = await import("./jsonresume-theme-elegant-RKUJ3AED.mjs");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  }, "elegant"),
  // @ts-ignore
  macchiato: /* @__PURE__ */ __name(async (resume) => {
    const mod = await import("./jsonresume-theme-macchiato-HA52MEJW.mjs");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  }, "macchiato"),
  // @ts-ignore
  sidebar: /* @__PURE__ */ __name(async (resume) => {
    const mod = await import("./src-MIMOTX6I.mjs");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  }, "sidebar"),
  // @ts-ignore
  "art-deco": /* @__PURE__ */ __name(async (resume) => {
    const mod = await import("./dist-56GXEY2V.mjs");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  }, "art-deco"),
  // @ts-ignore
  "art-school-modern": /* @__PURE__ */ __name(async (resume) => {
    const mod = await import("./dist-ZS3LXULC.mjs");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  }, "art-school-modern"),
  // @ts-ignore
  brutalist: /* @__PURE__ */ __name(async (resume) => {
    const mod = await import("./dist-LZNOAAXN.mjs");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  }, "brutalist"),
  // @ts-ignore
  "consultant-polished": /* @__PURE__ */ __name(async (resume) => {
    const mod = await import("./dist-CW5CU6BJ.mjs");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  }, "consultant-polished"),
  // @ts-ignore
  "creative-studio": /* @__PURE__ */ __name(async (resume) => {
    const mod = await import("./dist-KFW44NCX.mjs");
    const renderFn = mod.render || mod.default?.render || mod.default;
    return renderFn(resume);
  }, "creative-studio")
};
async function renderResumeTheme(template, jsonResume) {
  const isServer = typeof window === "undefined";
  if (isServer) {
    try {
      const { renderThemeInNodeWorker } = await import("./node-theme-renderer-34MEROTB.mjs");
      return await renderThemeInNodeWorker({ template, jsonResume });
    } catch (workerErr) {
      console.warn(
        `[REGISTRY] Worker execution for "${template}" failed (${workerErr?.message}), trying in-process renderer...`
      );
    }
  }
  const renderer = RESUME_TEMPLATE_REGISTRY[template] || RESUME_TEMPLATE_REGISTRY["academic-cv-lite"];
  if (!renderer) {
    throw new Error(`Template not found: ${template}`);
  }
  return await renderer(jsonResume);
}
__name(renderResumeTheme, "renderResumeTheme");

export {
  ResumeBuilderService,
  builderToJsonResume,
  renderResumeTheme
};
//# sourceMappingURL=chunk-4XM4VWBZ.mjs.map
