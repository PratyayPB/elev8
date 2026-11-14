"use server";

import { getOrCreateDbUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { tasks } from "@trigger.dev/sdk/v3";
import { JobService } from "@/services/jobs/job.service";
import { JobType } from "@prisma/client";
import { RealtimeTokenService } from "@/services/jobs/realtime-token.service";
import { exportResumePdfTask } from "@/trigger/export-resume-pdf";
import { compileResumeTemplateTask } from "@/trigger/compile-resume-template";
import { safeAction } from "@/lib/error-handler";
import { CacheService, CacheKeys } from "@/services/cache";

/**
 * Initiates an asynchronous headless Chrome PDF export in a Trigger.dev worker.
 */
export async function requestResumePdfExportAction(resumeId: string) {
  return safeAction(async () => {
    const user = await getOrCreateDbUser();

    const lockAcquired = await CacheService.acquireLock(
      CacheKeys.workflowLock("export-pdf", resumeId),
      20
    );
    if (!lockAcquired) {
      throw new Error("A PDF export is already being prepared for this resume. Please wait.");
    }

    const resume = await prisma.resumeBuild.findUnique({
      where: { id: resumeId, userId: user.id },
    });
    if (!resume) throw new Error("Resume not found");

    const job = await JobService.createJob({
      userId: user.id,
      type: JobType.RESUME_BUILD,
    });

    const handle = await tasks.trigger<typeof exportResumePdfTask>(
      "export-resume-pdf",
      {
        resumeId,
        userId: user.id,
        jobId: job.id,
      }
    );

    await prisma.job.update({
      where: { id: job.id },
      data: { triggerRunId: handle.id },
    });

    const publicAccessToken = await RealtimeTokenService.mintRunToken({
      triggerRunId: handle.id,
    });

    return {
      jobId: job.id,
      triggerRunId: handle.id,
      publicAccessToken,
    };
  });
}

/**
 * Initiates an asynchronous template population & compilation task in a Trigger.dev worker.
 */
export async function switchResumeTemplateAction(
  resumeId: string,
  newTemplate: string
) {
  return safeAction(async () => {
    const user = await getOrCreateDbUser();

    const lockAcquired = await CacheService.acquireLock(
      CacheKeys.workflowLock("switch-template", resumeId),
      20
    );
    if (!lockAcquired) {
      throw new Error("A template switch is already compiling for this resume. Please wait.");
    }

    const resume = await prisma.resumeBuild.findUnique({
      where: { id: resumeId, userId: user.id },
    });
    if (!resume) throw new Error("Resume not found");

    const job = await JobService.createJob({
      userId: user.id,
      type: JobType.RESUME_BUILD,
    });

    let triggerRunId: string | undefined;
    let publicAccessToken: string | undefined;

    try {
      const handle = await tasks.trigger<typeof compileResumeTemplateTask>(
        "compile-resume-template",
        {
          resumeId,
          userId: user.id,
          jobId: job.id,
          template: newTemplate,
        }
      );

      triggerRunId = handle.id;

      await prisma.job.update({
        where: { id: job.id },
        data: { triggerRunId: handle.id },
      });

      publicAccessToken = await RealtimeTokenService.mintRunToken({
        triggerRunId: handle.id,
      }).catch((tokenErr) => {
        console.warn("[switchResumeTemplateAction] Failed to mint public token:", tokenErr);
        return undefined;
      });
    } catch (triggerError: any) {
      const isBranchEnv =
        triggerError?.message?.includes("No matching branch env") ||
        triggerError?.error === "No matching branch env" ||
        triggerError?.status === 401;

      if (isBranchEnv) {
        console.info(
          `[Trigger.dev] Branch environment not configured on Trigger.dev cloud (${triggerError?.message || "No matching branch env"}), applying local template update fallback for "${newTemplate}".`
        );
      } else {
        console.warn(
          "[Trigger.dev] Cloud trigger failed, executing local template update fallback:",
          triggerError?.message || triggerError
        );
      }

      // Local fallback: update template directly in DB and mark job complete
      await prisma.resumeBuild.update({
        where: { id: resumeId },
        data: { template: newTemplate },
      });

      await JobService.completeJob(job.id, resumeId, "RESUME_BUILD");
    }

    return {
      jobId: job.id,
      triggerRunId,
      publicAccessToken,
    };
  });
}
