import { prisma } from "@/lib/prisma";
import { JobStatus, JobType, Job } from "@prisma/client";
import { createNotification } from "@/lib/notify";
import { NotificationType } from "@/features/notifications/types";

export interface CreateJobInput {
  userId: string;
  type: JobType;
  triggerRunId?: string;
}

function getJobCompletionDetails(job: Job, artifactId?: string, artifactType?: string) {
  let title = "Task Ready";
  let message = "Your background task has completed successfully.";
  let type: NotificationType = "SYSTEM";
  let actionUrl: string | null = null;

  switch (job.type) {
    case "ROADMAP":
      title = "Roadmap Ready";
      message = "Your career roadmap has finished generating and is ready to explore.";
      type = "ROADMAP";
      actionUrl = artifactId ? `/dashboard/roadmaps/${artifactId}` : "/dashboard/roadmaps";
      break;
    case "INTERVIEW":
      if (artifactType === "INTERVIEW_ASSESSMENT") {
        title = "Mock Interview Feedback Ready";
        message = "Your interview session assessment has finished processing. Review your detailed score report.";
        type = "INTERVIEW";
        actionUrl = artifactId ? `/dashboard/interviews/${artifactId}/report` : "/dashboard/interviews";
      } else {
        title = "Mock Interview Ready";
        message = "Your personalized mock interview has been generated. You can start practicing now.";
        type = "INTERVIEW";
        actionUrl = artifactId ? `/dashboard/interviews/${artifactId}` : "/dashboard/interviews";
      }
      break;
    case "RESUME_ANALYSIS":
      title = "Resume Assessment Ready";
      message = "Your resume analysis audit is complete with detailed ATS and section scores.";
      type = "RESUME";
      actionUrl = artifactId ? `/dashboard/resumes/${artifactId}` : "/dashboard/resumes";
      break;
    case "RESUME_BUILD":
      // Template switching re-compiles and caches in the background; do not create notifications
      if (artifactType === "RESUME_TEMPLATE_SWITCH") {
        return null;
      }
      if (artifactType === "RESUME_PDF") {
        title = "Resume PDF Ready";
        message = "Your high-fidelity resume PDF has been generated and is ready to download.";
        type = "RESUME";
        actionUrl = artifactId ? `/dashboard/resumes/builder/${artifactId}` : "/dashboard/resumes/builder";
      } else {
        title = "AI Resume Ready";
        message = "Your AI-tailored resume draft has been generated and loaded into the editor.";
        type = "RESUME";
        actionUrl = artifactId ? `/dashboard/resumes/builder/${artifactId}` : "/dashboard/resumes/builder";
      }
      break;
    case "CAREER_GUIDANCE":
      title = "Career Assessment Ready";
      message = "Your career assessment report has finished processing.";
      type = "CAREER_ASSESSMENT";
      actionUrl = "/dashboard/career-assessment";
      break;
    default:
      title = "Task Completed";
      message = "Your background task has finished successfully.";
      type = "SYSTEM";
      actionUrl = "/dashboard";
      break;
  }

  return { title, message, type, actionUrl };
}

export class JobService {
  public static async createJob(input: CreateJobInput): Promise<Job> {
    return prisma.job.create({
      data: {
        userId: input.userId,
        type: input.type,
        status: JobStatus.QUEUED,
        progress: 0,
        step: "Queued",
        triggerRunId: input.triggerRunId,
      },
    });
  }

  public static async updateProgress(
    jobId: string,
    progress: number,
    step: string,
    triggerRunId?: string
  ): Promise<Job> {
    return prisma.job.update({
      where: { id: jobId },
      data: {
        status: JobStatus.RUNNING,
        progress,
        step,
        triggerRunId: triggerRunId || undefined,
        startedAt: progress === 0 ? new Date() : undefined,
      },
    });
  }

  public static async completeJob(
    jobId: string,
    artifactId: string,
    artifactType: string
  ): Promise<Job> {
    const updated = await prisma.job.update({
      where: { id: jobId },
      data: {
        status: JobStatus.COMPLETED,
        progress: 100,
        step: "Completed",
        artifactId,
        artifactType,
        completedAt: new Date(),
      },
    });

    try {
      const details = getJobCompletionDetails(updated, artifactId, artifactType);
      if (details) {
        await createNotification({
          userId: updated.userId,
          title: details.title,
          message: details.message,
          type: details.type,
          actionUrl: details.actionUrl,
          idempotencyKey: `job:${jobId}:completed`,
        });
      }
    } catch (err) {
      console.error(
        `[JobService.completeJob] Failed to record completion notification for ${jobId}:`,
        err
      );
    }

    return updated;
  }

  public static async failJob(jobId: string, error: string): Promise<Job> {
    const updated = await prisma.job.update({
      where: { id: jobId },
      data: {
        status: JobStatus.FAILED,
        error,
        completedAt: new Date(),
      },
    });

    try {
      let title = "Task Failed";
      let type: NotificationType = "SYSTEM";
      switch (updated.type) {
        case "ROADMAP":
          title = "Roadmap Generation Failed";
          type = "ROADMAP";
          break;
        case "INTERVIEW":
          title = "Interview Task Failed";
          type = "INTERVIEW";
          break;
        case "RESUME_ANALYSIS":
        case "RESUME_BUILD":
          title = "Resume Task Failed";
          type = "RESUME";
          break;
        case "CAREER_GUIDANCE":
          title = "Career Assessment Failed";
          type = "CAREER_ASSESSMENT";
          break;
      }

      await createNotification({
        userId: updated.userId,
        title,
        message: error || "The background task encountered an error. Please try again.",
        type,
        actionUrl: "/dashboard",
        idempotencyKey: `job:${jobId}:failed`,
      });
    } catch (err) {
      console.error(
        `[JobService.failJob] Failed to record failure notification for ${jobId}:`,
        err
      );
    }

    return updated;
  }

  public static async getJob(jobId: string): Promise<Job | null> {
    return prisma.job.findUnique({
      where: { id: jobId },
    });
  }
}
