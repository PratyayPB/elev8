"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { BackgroundServiceType } from "@/store/workflow.store";
import { safeAction } from "@/lib/error-handler";

export type UnifiedJobStatus = "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED";

export interface UnifiedJobStatusResult {
  status: UnifiedJobStatus;
  progress?: number;
  viewUrl?: string;
  error?: string;
}

export async function checkBackgroundJobStatusAction(
  id: string,
  serviceType: BackgroundServiceType
) {
  return safeAction(async (): Promise<UnifiedJobStatusResult> => {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      throw new Error("Unauthorized");
    }

    const user = await prisma.user.findUnique({
      where: { clerkId },
      select: { id: true },
    });

    if (!user) {
      throw new Error("User record not found");
    }

    // 1. General Jobs via prisma.job (Primary check if id is a jobId)
    const job = await prisma.job.findFirst({
      where: { id, userId: user.id },
      select: {
        status: true,
        progress: true,
        artifactId: true,
        artifactType: true,
        error: true,
      },
    });

    if (job) {
      if (job.status === "COMPLETED") {
        let viewUrl = "/dashboard";
        if (serviceType === "ROADMAP" && job.artifactId) {
          viewUrl = `/dashboard/roadmaps/${job.artifactId}`;
        } else if (serviceType === "INTERVIEW" && job.artifactId) {
          viewUrl = `/dashboard/interview/${job.artifactId}`;
        } else if (serviceType === "RESUME_BUILD" && job.artifactId) {
          viewUrl = `/dashboard/resumes/builder/${job.artifactId}`;
        } else if (serviceType === "RESUME_SCORE" && job.artifactId) {
          viewUrl = `/dashboard/resumes/${job.artifactId}`;
        } else if (serviceType === "CAREER_ASSESSMENT") {
          viewUrl = `/dashboard/career-assessment`;
        }

        return {
          status: "COMPLETED",
          progress: 100,
          viewUrl,
        };
      }

      if (job.status === "FAILED" || job.status === "CANCELLED") {
        return {
          status: "FAILED",
          error: job.error || "Background task failed",
        };
      }

      return {
        status: "RUNNING",
        progress: job.progress,
      };
    }

    // 2. Fallback entity checks (if caller passed a direct entity ID instead of jobId)
    if (serviceType === "CAREER_ASSESSMENT") {
      const assessment = await prisma.careerAssessment.findFirst({
        where: { id, userId: user.id },
        select: { status: true },
      });

      if (!assessment) {
        return { status: "FAILED", error: "Assessment not found" };
      }

      if (assessment.status === "COMPLETED") {
        return { status: "COMPLETED", viewUrl: "/dashboard/career-assessment" };
      }
      if (assessment.status === "FAILED") {
        return { status: "FAILED", error: "Career assessment generation failed" };
      }
      return { status: "RUNNING" };
    }

    if (serviceType === "RESUME_SCORE") {
      const score = await prisma.resumeScore.findFirst({
        where: { id, userId: user.id },
        select: { status: true },
      });

      if (!score) {
        return { status: "FAILED", error: "Resume analysis record not found" };
      }

      if (score.status === "COMPLETED") {
        return { status: "COMPLETED", viewUrl: `/dashboard/resumes/${id}` };
      }
      if (score.status === "FAILED") {
        return { status: "FAILED", error: "Resume analysis failed" };
      }
      return { status: "RUNNING" };
    }

    // 4. Fallback checks for direct entity IDs
    if (serviceType === "ROADMAP") {
      const roadmap = await prisma.roadmap.findFirst({
        where: { id, userId: user.id },
        select: { status: true },
      });
      if (roadmap) {
        if (roadmap.status === "COMPLETED") {
          return { status: "COMPLETED", viewUrl: `/dashboard/roadmaps/${id}` };
        }
        if (roadmap.status === "FAILED") {
          return { status: "FAILED", error: "Roadmap generation failed" };
        }
        return { status: "RUNNING" };
      }
    }

    if (serviceType === "INTERVIEW") {
      const session = await prisma.interviewSession.findFirst({
        where: { id, userId: user.id },
        select: { status: true },
      });
      if (session) {
        if (session.status === "READY" || session.status === "COMPLETED") {
          return { status: "COMPLETED", viewUrl: `/dashboard/interview/${id}` };
        }
        if (session.status === "FAILED") {
          return { status: "FAILED", error: "Interview generation failed" };
        }
        return { status: "RUNNING" };
      }
    }

    return { status: "RUNNING" };
  });
}
