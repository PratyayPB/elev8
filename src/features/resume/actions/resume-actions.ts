"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { JobType, JobStatus, ResumeScoreStatus, CareerExperienceLevel } from "@prisma/client";
import { tasks } from "@trigger.dev/sdk/v3";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { assessResumeTask } from "@/trigger/assess-resume";
import { ModuleActivityService } from "@/features/progress/services";
import {
  ModuleActivityEventType,
  ModuleType,
} from "@/features/progress/types";
import { normalizeError, safeAction } from "@/lib/error-handler";
import { ServerResumeAssessmentSchema } from "../schemas/resume-request.schema";

function mapExperienceLevel(level: string): CareerExperienceLevel {
  const upper = level.toUpperCase();
  if (upper === "BEGINNER" || upper === "ENTRY") return CareerExperienceLevel.ENTRY;
  if (upper === "BASIC" || upper === "JUNIOR") return CareerExperienceLevel.JUNIOR;
  if (upper === "INTERMEDIATE" || upper === "MID") return CareerExperienceLevel.MID;
  if (upper === "ADVANCED" || upper === "SENIOR") return CareerExperienceLevel.SENIOR;
  if (upper === "LEAD" || upper === "EXPERT") return CareerExperienceLevel.LEAD;
  return CareerExperienceLevel.MID;
}

export async function createResumeAssessmentJob(formData: FormData) {
  return safeAction(async () => {
    const { userId: clerkId } = await auth();

    if (!clerkId) {
      throw new Error("Unauthorized: You must be logged in to upload a resume.");
    }

    const dbUser = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!dbUser) {
      throw new Error("User record not found.");
    }

    const rawFile = formData.get("file");
    const rawRole = formData.get("role");
    const rawRoleDesc = formData.get("roleDescription");
    const rawExp = formData.get("experienceLevel");
    const rawIncludeProfile = formData.get("includeProfile");

    const validatedInput = ServerResumeAssessmentSchema.parse({
      file: rawFile,
      role: rawRole,
      roleDescription: rawRoleDesc ? String(rawRoleDesc) : undefined,
      experienceLevel: rawExp,
      includeProfile: rawIncludeProfile === "true",
    });

    const { file, role, roleDescription, experienceLevel, includeProfile } = validatedInput;

    // Fetch approved profile data server-side if user opted in
    let profileContext = undefined;
    if (includeProfile) {
      const profile = await prisma.profile.findUnique({
        where: { userId: dbUser.id },
        include: {
          skills: true,
          desiredSkills: true,
        },
      });

      if (profile && profile.isCompleted) {
        profileContext = {
          currentStatus: profile.currentStatus,
          currentRole: profile.currentRole,
          yearsOfExperience: profile.yearsOfExperience,
          highestQualification: profile.highestQualification,
          fieldOfStudy: profile.fieldOfStudy,
          primaryGoal: profile.primaryGoal,
          targetCompanyType: profile.targetCompanyType,
          skills: profile.skills ? profile.skills.map((s) => s.name) : [],
          desiredSkills: profile.desiredSkills ? profile.desiredSkills.map((s) => s.name) : [],
        };
      }
    }

    // 1. Upload original PDF to Vercel Blob
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const pdfBlobPath = `resumes/originals/${dbUser.id}_${Date.now()}.pdf`;
    const originalPdfBlobUrl = await BlobStorageService.uploadBuffer(
      pdfBlobPath,
      buffer,
      "application/pdf"
    );

    // 2. Create Resume Metadata in Prisma
    const resume = await prisma.resumeScore.create({
      data: {
        userId: dbUser.id,
        role,
        roleDesc: roleDescription,
        expLevel: mapExperienceLevel(experienceLevel),
        status: ResumeScoreStatus.PROCESSING,
      },
    });

    // 3. Create Job record in Prisma
    const job = await prisma.job.create({
      data: {
        userId: dbUser.id,
        type: JobType.RESUME_ANALYSIS,
        status: JobStatus.QUEUED,
        progress: 0,
        step: "Queued",
        artifactId: resume.id,
        artifactType: "RESUME",
      },
    });

    await ModuleActivityService.recordActivity({
      userId: dbUser.id,
      module: ModuleType.RESUME_SCORE,
      eventType: ModuleActivityEventType.RESUME_SCORE_STARTED,
      entityId: resume.id,
      metadata: {
        source: "CREATE_RESUME_ASSESSMENT_JOB",
        scoreId: resume.id,
        jobId: job.id,
        role,
        experienceLevel,
      },
    }).catch((error) =>
      console.warn("[ResumeActions] Failed to record resume score start activity:", error)
    );

    // 4. Trigger background task in Trigger.dev
    let triggerRunId: string | undefined;
    try {
      const handle = await tasks.trigger<typeof assessResumeTask>("assess-resume", {
        resumeId: resume.id,
        jobId: job.id,
        userId: dbUser.id,
        role,
        roleDescription,
        experienceLevel,
        originalPdfBlobUrl,
        profile: profileContext,
      });
      triggerRunId = handle.id;

      await prisma.job.update({
        where: { id: job.id },
        data: { triggerRunId },
      });
    } catch (error) {
      console.error("Failed to trigger Trigger.dev assess-resume task:", error);
      const appError = normalizeError(error);
      await prisma.job.update({
        where: { id: job.id },
        data: {
          status: JobStatus.FAILED,
          error: appError.message,
        },
      });
      await prisma.resumeScore.update({
        where: { id: resume.id },
        data: { status: ResumeScoreStatus.FAILED },
      });
      await ModuleActivityService.recordActivity({
        userId: dbUser.id,
        module: ModuleType.RESUME_SCORE,
        eventType: ModuleActivityEventType.RESUME_SCORE_FAILED,
        entityId: resume.id,
        metadata: {
          source: "ASSESS_RESUME_DISPATCH",
          scoreId: resume.id,
          jobId: job.id,
          error: appError.message,
        },
      }).catch((activityError) =>
        console.warn("[ResumeActions] Failed to record resume score failure activity:", activityError)
      );
      throw new Error(appError.message);
    }

    return {
      resumeId: resume.id,
      jobId: job.id,
    };
  });
}

export async function deleteResume(resumeId: string) {
  return safeAction(async () => {
    if (!resumeId || typeof resumeId !== "string" || !resumeId.trim()) {
      throw new Error("Invalid resume ID provided.");
    }

    const { userId: clerkId } = await auth();

    if (!clerkId) {
      throw new Error("Unauthorized: You must be logged in to delete a resume.");
    }

    const dbUser = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!dbUser) {
      throw new Error("User record not found.");
    }

    const resume = await prisma.resumeScore.findUnique({
      where: { id: resumeId },
    });

    if (!resume || resume.userId !== dbUser.id) {
      throw new Error("Resume record not found or unauthorized.");
    }

    // 1. Delete associated jobs
    await prisma.job.deleteMany({
      where: { artifactId: resumeId },
    });

    // 2. Delete the resume entry from database
    await prisma.resumeScore.delete({
      where: { id: resumeId },
    });

    // 3. Clean up Vercel Blob storage files
    if (resume.artifactBlobUrl) {
      try {
        await BlobStorageService.delete(resume.artifactBlobUrl);
      } catch (e) {
        console.warn("Failed to delete artifact JSON blob:", e);
      }
    }

    return { resumeId };
  });
}
