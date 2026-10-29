import { prisma } from "@/lib/prisma";
import { JobStatus, JobType, Job } from "@prisma/client";

export interface CreateJobInput {
  userId: string;
  type: JobType;
  triggerRunId?: string;
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
    return prisma.job.update({
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
  }

  public static async failJob(jobId: string, error: string): Promise<Job> {
    return prisma.job.update({
      where: { id: jobId },
      data: {
        status: JobStatus.FAILED,
        error,
        completedAt: new Date(),
      },
    });
  }

  public static async getJob(jobId: string): Promise<Job | null> {
    return prisma.job.findUnique({
      where: { id: jobId },
    });
  }
}
