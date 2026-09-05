import { prisma } from "@/lib/prisma";
import { tasks } from "@trigger.dev/sdk/v3";
import { JobService } from "@/services/jobs/job.service";
import { JobType, JobStatus } from "@prisma/client";
import { AiBuildResumeInput } from "../schemas/ai-build.schema";
import { buildAiResumeTask } from "@/trigger/build-ai-resume";

export class AiResumeBuildService {
  /**
   * Checks if user has completed mandatory profile data.
   */
  public static async checkProfileCompletion(userId: string): Promise<{
    isCompleted: boolean;
    missingFields?: string[];
  }> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
      },
    });

    if (!user?.profile) {
      return { isCompleted: false, missingFields: ["profile"] };
    }

    return {
      isCompleted: Boolean(user.profile.isMandatoryCompleted),
    };
  }

  /**
   * Initiates the AI Resume Build Trigger.dev task.
   */
  public static async triggerAiBuild(
    userId: string,
    resumeId: string,
    input: AiBuildResumeInput
  ): Promise<{ jobId: string; triggerRunId?: string }> {
    // 1. Verify user profile completion
    const profileStatus = await this.checkProfileCompletion(userId);
    if (!profileStatus.isCompleted) {
      throw new Error(
        "Mandatory profile information is incomplete. Please complete your profile before using AI Resume Build."
      );
    }

    // 2. Verify resume ownership
    const resume = await prisma.resumeBuild.findUnique({
      where: { id: resumeId },
    });

    if (!resume) {
      throw new Error("Resume not found.");
    }

    if (resume.userId !== userId) {
      throw new Error("Unauthorized access to resume.");
    }

    // 3. Create tracking Job record
    const job = await JobService.createJob({
      userId,
      type: JobType.RESUME_BUILD,
    });

    // 4. Dispatch Trigger.dev task
    let triggerRunId: string | undefined;
    try {
      const handle = await tasks.trigger<typeof buildAiResumeTask>(
        "build-ai-resume",
        {
          resumeId,
          userId,
          jobId: job.id,
          targetJobTitle: input.targetJobTitle,
          jobDescription: input.jobDescription,
          targetCompany: input.targetCompany,
          targetCompanyType: input.targetCompanyType,
        }
      );
      triggerRunId = handle.id;

      await prisma.job.update({
        where: { id: job.id },
        data: { triggerRunId },
      });
    } catch (triggerError) {
      console.error(
        "[AiResumeBuildService] Trigger.dev dispatch failed:",
        triggerError
      );
      // Even if trigger fails to dispatch, fail the job record gracefully
      await JobService.failJob(
        job.id,
        (triggerError as Error).message || "Failed to trigger AI resume build task"
      );
      throw triggerError;
    }

    return {
      jobId: job.id,
      triggerRunId,
    };
  }

  /**
   * Retrieves current AI build job status.
   */
  public static async getJobStatus(userId: string, jobId: string) {
    const job = await prisma.job.findUnique({
      where: { id: jobId },
    });

    if (!job) {
      throw new Error("Job not found.");
    }

    if (job.userId !== userId) {
      throw new Error("Unauthorized access to job.");
    }

    return {
      id: job.id,
      status: job.status,
      progress: job.progress,
      step: job.step,
      error: job.error,
      completedAt: job.completedAt,
    };
  }
}
