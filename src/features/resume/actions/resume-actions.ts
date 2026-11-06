"use server";

import { getOrCreateDbUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { JobType, JobStatus, ResumeScoreStatus, CareerExperienceLevel } from "@prisma/client";
import { tasks } from "@trigger.dev/sdk/v3";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { assessResumeTask } from "@/trigger/assess-resume";
import { ModuleActivityService } from "@/features/progress/services";
import { UserQuotaService } from "@/services/quota/user-quota.service";
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

export type CreateResumeAssessmentInput =
  | FormData
  | {
      blobUrl?: string;
      file?: File;
      role: string;
      roleDescription?: string;
      experienceLevel: string;
      includeProfile?: boolean;
    };

export async function createResumeAssessmentJob(input: CreateResumeAssessmentInput) {
  return safeAction(async () => {
    const dbUser = await getOrCreateDbUser();

    const isFormData = typeof FormData !== "undefined" && input instanceof FormData;

    const validatedInput = isFormData
      ? ServerResumeAssessmentSchema.parse({
          blobUrl: input.get("blobUrl") ? String(input.get("blobUrl")) : undefined,
          file: (() => {
            const f = input.get("file");
            return f && typeof (f as any).arrayBuffer === "function" ? (f as File) : undefined;
          })(),
          role: input.get("role") ? String(input.get("role")) : undefined,
          roleDescription: input.get("roleDescription") ? String(input.get("roleDescription")) : undefined,
          experienceLevel: input.get("experienceLevel") ? String(input.get("experienceLevel")) : undefined,
          includeProfile: input.get("includeProfile") === "true",
        })
      : ServerResumeAssessmentSchema.parse(input);

    const { blobUrl, file, role, roleDescription, experienceLevel, includeProfile } = validatedInput;

    // Rate limit: 10 uploads / day, max 3 / 10 minutes
    await UserQuotaService.assertResumeUploadQuota(dbUser.id);

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

    // 1. Atomically create ResumeScore and Job records in a single database transaction
    const [resume, job] = await prisma.$transaction(async (tx) => {
      const createdResume = await tx.resumeScore.create({
        data: {
          userId: dbUser.id,
          role,
          roleDesc: roleDescription,
          expLevel: mapExperienceLevel(experienceLevel),
          status: ResumeScoreStatus.PROCESSING,
        },
      });

      const createdJob = await tx.job.create({
        data: {
          userId: dbUser.id,
          type: JobType.RESUME_ANALYSIS,
          status: JobStatus.QUEUED,
          progress: 0,
          step: "Uploading file",
          artifactId: createdResume.id,
          artifactType: "RESUME",
        },
      });

      return [createdResume, createdJob];
    });

    // 2. Resolve original PDF blob URL: use direct-uploaded URL or fallback to server-side buffer upload
    let originalPdfBlobUrl: string;
    if (blobUrl) {
      originalPdfBlobUrl = blobUrl;
    } else if (file) {
      try {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const pdfBlobPath = `resumes/originals/${dbUser.id}_${resume.id}_${Date.now()}.pdf`;
        originalPdfBlobUrl = await BlobStorageService.uploadBuffer(
          pdfBlobPath,
          buffer,
          "application/pdf"
        );
      } catch (uploadError) {
        await prisma.$transaction([
          prisma.resumeScore.update({
            where: { id: resume.id },
            data: { status: ResumeScoreStatus.FAILED },
          }),
          prisma.job.update({
            where: { id: job.id },
            data: {
              status: JobStatus.FAILED,
              error: "Failed to upload resume file to storage",
            },
          }),
        ]);
        throw uploadError;
      }
    } else {
      throw new Error("No PDF file or blobUrl provided");
    }

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

    const dbUser = await getOrCreateDbUser();

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
