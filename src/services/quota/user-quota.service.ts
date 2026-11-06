import { prisma } from "@/lib/prisma";
import { JobType, JobStatus, ResumeBuildStatus } from "@prisma/client";

export class UserQuotaService {
  /**
   * Asserts that a user has not exceeded the hourly personalized roadmap generation quota.
   * Limit: 3 personalized roadmaps / hour or max 5 in-flight.
   */
  public static async assertRoadmapQuota(userId: string): Promise<void> {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

    const [recentJobs, inFlightJobs] = await Promise.all([
      prisma.job.count({
        where: {
          userId,
          type: JobType.ROADMAP,
          createdAt: { gte: oneHourAgo },
          status: { not: JobStatus.FAILED },
        },
      }),
      prisma.job.count({
        where: {
          userId,
          type: JobType.ROADMAP,
          status: { in: [JobStatus.QUEUED, JobStatus.RUNNING] },
        },
      }),
    ]);

    if (inFlightJobs >= 5) {
      throw new Error(
        "You currently have 5 active roadmaps generating. Please wait for them to finish."
      );
    }

    if (recentJobs >= 3) {
      throw new Error(
        "Roadmap generation limit reached (3 per hour). Please try again in an hour."
      );
    }
  }

  /**
   * Asserts that a user has not exceeded the hourly AI Resume Build quota.
   * Limit: 5 builds / hour and max 1 active build at a time.
   */
  public static async assertAiResumeBuildQuota(userId: string): Promise<void> {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

    const [recentBuilds, activeBuild] = await Promise.all([
      prisma.job.count({
        where: {
          userId,
          type: JobType.RESUME_BUILD,
          createdAt: { gte: oneHourAgo },
          status: { not: JobStatus.FAILED },
        },
      }),
      prisma.job.count({
        where: {
          userId,
          type: JobType.RESUME_BUILD,
          status: { in: [JobStatus.QUEUED, JobStatus.RUNNING] },
        },
      }),
    ]);

    if (activeBuild >= 1) {
      throw new Error(
        "An AI Resume Build is already in progress for your account. Please wait for it to complete."
      );
    }

    if (recentBuilds >= 5) {
      throw new Error(
        "AI Resume Build limit reached (5 per hour). Please wait before generating another resume."
      );
    }
  }

  /**
   * Asserts that a user has not exceeded the hourly Interview Generation quota.
   * Limit: 5 custom interview generations / hour.
   */
  public static async assertInterviewGenerationQuota(userId: string): Promise<void> {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

    const recentGenerations = await prisma.job.count({
      where: {
        userId,
        type: JobType.INTERVIEW,
        createdAt: { gte: oneHourAgo },
        status: { not: JobStatus.FAILED },
      },
    });

    if (recentGenerations >= 5) {
      throw new Error(
        "Interview generation limit reached (5 per hour). Please wait before creating another mock interview."
      );
    }
  }

  /**
   * Asserts that a user has not exceeded the hourly Interview Submission quota.
   * Limit: 10 submissions / hour.
   */
  public static async assertInterviewSubmissionQuota(userId: string): Promise<void> {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

    const recentSubmissions = await prisma.interviewSession.count({
      where: {
        userId,
        updatedAt: { gte: oneHourAgo },
        status: { in: ["COMPLETED"] },
      },
    });

    if (recentSubmissions >= 10) {
      throw new Error(
        "Interview submission limit reached (10 submissions per hour). Please wait before submitting more interviews."
      );
    }
  }

  /**
   * Asserts that a user has not exceeded the Resume PDF upload quota.
   * Limit: 10 uploads / day and max 3 uploads / 10 minutes.
   */
  public static async assertResumeUploadQuota(userId: string): Promise<void> {
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const [recentTenMin, recentDay] = await Promise.all([
      prisma.job.count({
        where: {
          userId,
          type: JobType.RESUME_ANALYSIS,
          createdAt: { gte: tenMinutesAgo },
        },
      }),
      prisma.job.count({
        where: {
          userId,
          type: JobType.RESUME_ANALYSIS,
          createdAt: { gte: oneDayAgo },
        },
      }),
    ]);

    if (recentTenMin >= 3) {
      throw new Error(
        "Resume upload limit reached (max 3 uploads every 10 minutes). Please wait a few minutes."
      );
    }

    if (recentDay >= 10) {
      throw new Error(
        "Daily resume upload quota reached (10 uploads per day). Please try again tomorrow."
      );
    }
  }
}
