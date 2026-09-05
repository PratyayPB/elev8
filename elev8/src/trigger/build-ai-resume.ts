import { schemaTask, metadata } from "@trigger.dev/sdk/v3";
import { z } from "zod";
import { GoogleGenAI } from "@google/genai";
import { prisma } from "@/lib/prisma";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { JobService } from "@/services/jobs/job.service";
import {
  AI_RESUME_BUILD_PROMPT_VERSION,
  AI_RESUME_BUILD_MODEL,
  AI_RESUME_BUILD_SYSTEM_PROMPT,
} from "@/features/resume-builder/constants/ai-resume-prompts";
import {
  BuilderResumeArtifactSchema,
} from "@/features/resume-builder/schemas/resume-artifact.schema";
import { BuilderResumeArtifact } from "@/features/resume-builder/types";
import { ResumeCompanyType } from "@prisma/client";

export const BuildAiResumeTaskSchema = z.object({
  resumeId: z.string(),
  userId: z.string(),
  jobId: z.string().optional(),
  targetJobTitle: z.string(),
  jobDescription: z.string(),
  targetCompany: z.string().optional(),
  targetCompanyType: z.nativeEnum(ResumeCompanyType).optional(),
});

export const buildAiResumeTask = schemaTask({
  id: "build-ai-resume",
  schema: BuildAiResumeTaskSchema,
  retry: {
    maxAttempts: 3,
    factor: 2,
    minTimeoutInMs: 1000,
    maxTimeoutInMs: 10000,
  },
  run: async (payload, { ctx }) => {
    const {
      resumeId,
      userId,
      jobId,
      targetJobTitle,
      jobDescription,
      targetCompany,
      targetCompanyType,
    } = payload;

    try {
      // Step 1: 15% - Validating user profile & resume ownership
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
              skills: true,
            },
          },
        },
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
        where: { id: resumeId },
      });

      if (!existingResume) {
        throw new Error(`Resume build record ${resumeId} not found.`);
      }

      if (existingResume.userId !== userId) {
        throw new Error("Unauthorized access to resume build.");
      }

      // Step 2: 30% - Fetching existing resume artifact (if available)
      metadata.set("status", "Retrieving Baseline Data");
      metadata.set("progress", 30);
      if (jobId) {
        await JobService.updateProgress(jobId, 30, "Retrieving Baseline Data");
      }

      let currentArtifact: BuilderResumeArtifact | null = null;
      let currentVersion = 1;

      if (existingResume.artifactBlobUrl) {
        try {
          currentArtifact =
            await BlobStorageService.fetchJson<BuilderResumeArtifact>(
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

      // Step 3: 50% - Calling Gemini AI
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

      const profilePhone = user.profile.phoneNumber
        ? `${user.profile.phoneCountryCode || ""} ${user.profile.phoneNumber}`.trim()
        : undefined;

      const candidateContext = {
        profile: {
          name: user.profile.name || user.email,
          email: user.email,
          phone: profilePhone,
          location: user.profile.country || undefined,
          currentRole: user.profile.currentRole,
          yearsOfExperience: user.profile.yearsOfExperience,
          highestQualification: user.profile.highestQualification,
          fieldOfStudy: user.profile.fieldOfStudy,
          primaryGoal: user.profile.primaryGoal,
          targetRole: user.profile.targetRole,
          targetCompanyType: user.profile.targetCompanyType,
          skills: user.profile.skills.map((s) => ({
            name: s.name,
            proficiency: s.proficiency,
          })),
        },
        existingResumeArtifact: currentArtifact
          ? {
              personalInformation: currentArtifact.personalInformation,
              professionalSummary: currentArtifact.professionalSummary,
              experience: currentArtifact.experience,
              education: currentArtifact.education,
              projects: currentArtifact.projects,
              skills: currentArtifact.skills,
              certifications: currentArtifact.certifications,
              achievements: currentArtifact.achievements,
            }
          : null,
      };

      const jobRequirementsContext = {
        targetJobTitle,
        jobDescription,
        targetCompany: targetCompany || "Not specified",
        targetCompanyType: targetCompanyType || "Not specified",
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
          temperature: 0.2, // Low temperature for high factual consistency
        },
      });

      const responseText = response.text?.trim() || "";
      if (!responseText) {
        throw new Error("AI returned an empty response.");
      }

      // Step 4: 75% - Validating AI Response Structure
      metadata.set("status", "Validating Resume Structure");
      metadata.set("progress", 75);
      if (jobId) {
        await JobService.updateProgress(
          jobId,
          75,
          "Validating Resume Structure"
        );
      }

      let parsedJson: any;
      try {
        parsedJson = JSON.parse(responseText);
      } catch (parseErr) {
        throw new Error(
          `Failed to parse AI output as JSON: ${(parseErr as Error).message}`
        );
      }

      // Fill in required system fields
      const candidateFullName =
        parsedJson.personalInformation?.fullName ||
        user.profile.name ||
        "";
      const candidateEmail =
        parsedJson.personalInformation?.email || user.email || "";

      const rawArtifactCandidate: BuilderResumeArtifact = {
        resumeId,
        version: currentVersion + 1,
        personalInformation: {
          fullName: candidateFullName,
          email: candidateEmail,
          phone:
            parsedJson.personalInformation?.phone ||
            profilePhone ||
            undefined,
          location:
            parsedJson.personalInformation?.location ||
            user.profile.country ||
            undefined,
          linkedin: parsedJson.personalInformation?.linkedin || undefined,
          github: parsedJson.personalInformation?.github || undefined,
          portfolio: parsedJson.personalInformation?.portfolio || undefined,
        },
        professionalSummary: parsedJson.professionalSummary || "",
        education: Array.isArray(parsedJson.education)
          ? parsedJson.education.map((e: any, idx: number) => ({
              id: e.id || `edu_${idx + 1}`,
              institution: e.institution || "",
              degree: e.degree || "",
              fieldOfStudy: e.fieldOfStudy || undefined,
              startDate: e.startDate || undefined,
              endDate: e.endDate || undefined,
              description: e.description || undefined,
            }))
          : [],
        experience: Array.isArray(parsedJson.experience)
          ? parsedJson.experience.map((e: any, idx: number) => ({
              id: e.id || `exp_${idx + 1}`,
              jobTitle: e.jobTitle || "",
              company: e.company || "",
              location: e.location || undefined,
              startDate: e.startDate || undefined,
              endDate: e.endDate || undefined,
              currentlyWorking: Boolean(e.currentlyWorking),
              description: e.description || undefined,
              achievements: Array.isArray(e.achievements)
                ? e.achievements.map((a: any) => String(a))
                : undefined,
            }))
          : [],
        projects: Array.isArray(parsedJson.projects)
          ? parsedJson.projects.map((p: any, idx: number) => ({
              id: p.id || `proj_${idx + 1}`,
              name: p.name || "",
              description: p.description || undefined,
              technologies: Array.isArray(p.technologies)
                ? p.technologies.map((t: any) => String(t))
                : undefined,
              url: p.url || undefined,
              startDate: p.startDate || undefined,
              endDate: p.endDate || undefined,
            }))
          : [],
        skills: Array.isArray(parsedJson.skills)
          ? parsedJson.skills.map((s: any, idx: number) => ({
              id: s.id || `skill_${idx + 1}`,
              name: s.name || "",
              category: s.category || undefined,
              proficiency: s.proficiency || undefined,
            }))
          : [],
        certifications: Array.isArray(parsedJson.certifications)
          ? parsedJson.certifications.map((c: any, idx: number) => ({
              id: c.id || `cert_${idx + 1}`,
              name: c.name || "",
              issuingOrganization: c.issuingOrganization || undefined,
              issueDate: c.issueDate || undefined,
              expiryDate: c.expiryDate || undefined,
              credentialUrl: c.credentialUrl || undefined,
            }))
          : [],
        achievements: Array.isArray(parsedJson.achievements)
          ? parsedJson.achievements.map((a: any, idx: number) => ({
              id: a.id || `ach_${idx + 1}`,
              title: a.title || "",
              description: a.description || undefined,
              date: a.date || undefined,
            }))
          : [],
      };

      const validation =
        BuilderResumeArtifactSchema.safeParse(rawArtifactCandidate);
      if (!validation.success) {
        throw new Error(
          `Generated resume failed schema validation: ${validation.error.message}`
        );
      }

      const validArtifact = validation.data;

      // Step 5: 90% - Persisting Generated Artifact to Blob & DB
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
          aiGeneratedAt: new Date(),
          aiModel: AI_RESUME_BUILD_MODEL,
          aiPromptVersion: AI_RESUME_BUILD_PROMPT_VERSION,
        },
      });

      // Step 6: 100% - Complete
      metadata.set("status", "Completed");
      metadata.set("progress", 100);
      if (jobId) {
        await JobService.completeJob(jobId, resumeId, "RESUME_BUILD");
      }

      return {
        success: true,
        resumeId,
        version: validArtifact.version,
        artifactBlobUrl,
      };
    } catch (error) {
      console.error("[buildAiResumeTask] Error during AI resume build:", error);
      const errorMessage = (error as Error).message || "Unknown error";
      metadata.set("status", "Failed");
      metadata.set("error", errorMessage);

      if (jobId) {
        await JobService.failJob(jobId, errorMessage).catch((e) =>
          console.error("Failed to fail job record:", e)
        );
      }

      throw error;
    }
  },
});
