"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { JobType, JobStatus, ResumeStatus } from "@prisma/client";
import { tasks } from "@trigger.dev/sdk/v3";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { assessResumeTask } from "@/trigger/assess-resume";

export async function createResumeAssessmentJob(formData: FormData) {
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

  const file = formData.get("file") as File | null;
  const role = formData.get("role") as string | null;
  const roleDescription = (formData.get("roleDescription") as string | null) || undefined;
  const experienceLevel = formData.get("experienceLevel") as string | null;
  const personalizationRaw = formData.get("personalization") as string | null;

  if (!file || !role || !experienceLevel) {
    throw new Error("Missing required resume request fields (file, role, experienceLevel).");
  }

  const personalization = personalizationRaw
    ? JSON.parse(personalizationRaw)
    : { skipped: true, answers: [] };

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
  const resume = await prisma.resume.create({
    data: {
      userId: dbUser.id,
      role,
      roleDescription,
      experienceLevel,
      originalPdfBlobUrl,
      status: ResumeStatus.DRAFT,
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
      personalization,
    });
    triggerRunId = handle.id;

    await prisma.job.update({
      where: { id: job.id },
      data: { triggerRunId },
    });
  } catch (error) {
    console.error("Failed to trigger Trigger.dev assess-resume task:", error);
    await prisma.job.update({
      where: { id: job.id },
      data: {
        status: JobStatus.FAILED,
        error: error instanceof Error ? error.message : "Trigger failed",
      },
    });
  }

  return {
    success: true,
    resumeId: resume.id,
    jobId: job.id,
  };
}

export async function deleteResume(resumeId: string) {
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

  const resume = await prisma.resume.findUnique({
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
  await prisma.resume.delete({
    where: { id: resumeId },
  });

  // 3. Clean up Vercel Blob storage files
  if (resume.originalPdfBlobUrl) {
    try {
      await BlobStorageService.delete(resume.originalPdfBlobUrl);
    } catch (e) {
      console.warn("Failed to delete original PDF blob:", e);
    }
  }

  if (resume.artifactBlobUrl) {
    try {
      await BlobStorageService.delete(resume.artifactBlobUrl);
    } catch (e) {
      console.warn("Failed to delete artifact JSON blob:", e);
    }
  }

  return { success: true };
}
