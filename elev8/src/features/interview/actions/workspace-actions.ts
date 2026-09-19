"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import {
  InterviewStatus,
  JobStatus,
  InterviewTemplateStatus,
  InterviewDifficulty,
  Prisma,
} from "@prisma/client";
import { revalidatePath } from "next/cache";
import { safeAction } from "@/lib/error-handler";

export async function getWorkspaceInterviews() {
  return safeAction(async () => {
    const { userId: clerkId } = await auth();
    if (!clerkId) throw new Error("Unauthorized");

    const dbUser = await prisma.user.findUnique({ where: { clerkId } });
    if (!dbUser) throw new Error("User not found");

    // Automatically fail stuck interview generations older than 5 minutes (e.g. server restarts/crashes)
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    const stuckSessions = await prisma.interviewSession.findMany({
      where: {
        userId: dbUser.id,
        status: InterviewStatus.GENERATING,
        updatedAt: { lt: fiveMinutesAgo },
      },
      select: {
        id: true,
        globalInterviewTemplateId: true,
        interviewTemplateId: true,
      },
    });

    if (stuckSessions.length > 0) {
      const stuckSessionIds = stuckSessions.map((s) => s.id);
      const stuckGlobalTemplateIds = stuckSessions
        .map((s) => s.globalInterviewTemplateId)
        .filter((id): id is string => Boolean(id));
      const stuckUserTemplateIds = stuckSessions
        .map((s) => s.interviewTemplateId)
        .filter((id): id is string => Boolean(id));

      // 1. Mark stuck interview sessions as FAILED
      await prisma.interviewSession.updateMany({
        where: { id: { in: stuckSessionIds } },
        data: { status: InterviewStatus.FAILED },
      });

      // 2. Mark corresponding queued/running jobs as FAILED
      const artifactIdsToFail = [
        ...stuckSessionIds,
        ...stuckGlobalTemplateIds,
        ...stuckUserTemplateIds,
      ];

      await prisma.job.updateMany({
        where: {
          artifactId: { in: artifactIdsToFail },
          status: { in: [JobStatus.QUEUED, JobStatus.RUNNING] },
        },
        data: {
          status: JobStatus.FAILED,
          error: "Generation timed out due to server unresponsiveness.",
        },
      });

      // 3. Mark global templates with no blobUrl as FAILED
      if (stuckGlobalTemplateIds.length > 0) {
        await prisma.globalInterviewTemplate.updateMany({
          where: {
            id: { in: stuckGlobalTemplateIds },
            templateBlobUrl: "",
          },
          data: { status: InterviewTemplateStatus.FAILED },
        });
      }

      // 4. Mark user templates with no blobUrl as FAILED
      if (stuckUserTemplateIds.length > 0) {
        await prisma.interviewTemplate.updateMany({
          where: {
            id: { in: stuckUserTemplateIds },
            templateBlobUrl: "",
          },
          data: { status: InterviewTemplateStatus.FAILED },
        });
      }
    }

    const [sessions, templates] = await Promise.all([
      prisma.interviewSession.findMany({
        where: { userId: dbUser.id },
        orderBy: { updatedAt: "desc" },
        select: {
          id: true,
          userId: true,
          interviewTemplateId: true,
          globalInterviewTemplateId: true,
          templateSource: true,
          role: true,
          experienceLevel: true,
          difficulty: true,
          interviewType: true,
          questionCount: true,
          estimatedDuration: true,
          blobUrl: true,
          overallScore: true,
          durationSeconds: true,
          personalized: true,
          status: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
      prisma.interviewTemplate.findMany({
        where: { userId: dbUser.id },
        orderBy: { updatedAt: "desc" },
        select: {
          id: true,
          userId: true,
          role: true,
          experienceLevel: true,
          difficulty: true,
          interviewType: true,
          questionCount: true,
          estimatedDuration: true,
          personalized: true,
          templateBlobUrl: true,
          status: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
    ]);

    return { sessions, templates };
  });
}

export async function deleteInterview(interviewId: string) {
  return safeAction(async () => {
    if (!interviewId || typeof interviewId !== "string" || interviewId.trim().length === 0) {
      throw new Error("Invalid interview ID.");
    }
    const sanitizedId = interviewId.trim();

    const { userId: clerkId } = await auth();
    if (!clerkId) throw new Error("Unauthorized");

    const dbUser = await prisma.user.findUnique({ where: { clerkId } });
    if (!dbUser) throw new Error("User not found");

    // Verify ownership before deleting
    const session = await prisma.interviewSession.findUnique({
      where: { id: sanitizedId, userId: dbUser.id },
      select: {
        id: true,
        userId: true,
        interviewTemplateId: true,
      },
    });

    if (!session) {
      throw new Error("Interview not found or unauthorized");
    }

    const interviewTemplateId = session.interviewTemplateId;

    // Mark any active jobs associated with this interview session as CANCELLED
    await prisma.job.updateMany({
      where: {
        artifactId: sanitizedId,
        status: { in: [JobStatus.QUEUED, JobStatus.RUNNING] },
      },
      data: {
        status: JobStatus.CANCELLED,
        error: "Interview was deleted by user.",
        completedAt: new Date(),
      },
    }).catch((err) => {
      console.warn("[deleteInterview] Failed to cancel active jobs:", err);
    });

    // Delete the interview session (GlobalInterviewTemplate is NEVER touched/deleted)
    await prisma.interviewSession.delete({
      where: { id: sanitizedId },
    });

    // If there is an associated user InterviewTemplate, check if any other session references it
    if (interviewTemplateId) {
      const remainingSessions = await prisma.interviewSession.count({
        where: { interviewTemplateId },
      });

      if (remainingSessions === 0) {
        // Clean up the user's InterviewTemplate record if no other sessions are linked
        await prisma.interviewTemplate.deleteMany({
          where: { id: interviewTemplateId, userId: dbUser.id },
        });
      }
    }

    revalidatePath("/dashboard/interviews");
    return { success: true };
  });
}

/**
 * Browsing global interviews is public to all authenticated users.
 */
export async function getGlobalInterviews(params?: {
  search?: string;
  difficulty?: string;
  sort?: string;
  page?: number;
  limit?: number;
}) {
  return safeAction(async () => {
    const { userId: clerkId } = await auth();
    const dbUser = clerkId
      ? await prisma.user.findUnique({ where: { clerkId } })
      : null;

    const page = Math.max(1, params?.page || 1);
    const limit = Math.max(1, Math.min(50, params?.limit || 9));
    const skip = (page - 1) * limit;

    const search = params?.search?.trim() || "";
    const difficulty = params?.difficulty || "ALL";
    const sort = params?.sort || "NEWEST";

    // Build filter where
    const where: Prisma.GlobalInterviewTemplateWhereInput = {
      status: InterviewTemplateStatus.ACTIVE,
      templateBlobUrl: { not: "" },
    };

    if (search) {
      where.OR = [
        { role: { contains: search, mode: "insensitive" } },
        { normalizedRole: { contains: search, mode: "insensitive" } },
      ];
    }

    const validDifficulties = Object.values(InterviewDifficulty) as string[];
    if (difficulty !== "ALL" && validDifficulties.includes(difficulty.toUpperCase())) {
      where.difficulty = difficulty.toUpperCase() as InterviewDifficulty;
    }

    // Build order by
    let orderBy: Prisma.GlobalInterviewTemplateOrderByWithRelationInput = { createdAt: "desc" };
    if (sort === "OLDEST") {
      orderBy = { createdAt: "asc" };
    } else if (sort === "ALPHABETICAL") {
      orderBy = { role: "asc" };
    }

    const [total, templates] = await Promise.all([
      prisma.globalInterviewTemplate.count({ where }),
      prisma.globalInterviewTemplate.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        select: {
          id: true,
          role: true,
          normalizedRole: true,
          experienceLevel: true,
          difficulty: true,
          interviewType: true,
          questionCount: true,
          estimatedDuration: true,
          status: true,
          createdByUserId: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
    ]);

    const totalPages = Math.max(1, Math.ceil(total / limit));

    const items = templates.map((t) => ({
      id: t.id,
      role: t.role,
      normalizedRole: t.normalizedRole,
      experienceLevel: t.experienceLevel,
      difficulty: t.difficulty,
      interviewType: t.interviewType,
      questionCount: t.questionCount,
      estimatedDuration: t.estimatedDuration,
      status: t.status,
      createdByUserId: t.createdByUserId,
      isOwner: Boolean(dbUser && t.createdByUserId === dbUser.id),
      createdAt: t.createdAt,
      updatedAt: t.updatedAt,
    }));

    return {
      interviews: items,
      pagination: {
        total,
        page,
        limit,
        totalPages,
      },
    };
  });
}

export async function getPerformanceStats() {
  return safeAction(async () => {
    const { userId: clerkId } = await auth();
    if (!clerkId) throw new Error("Unauthorized");

    const dbUser = await prisma.user.findUnique({ where: { clerkId } });
    if (!dbUser) throw new Error("User not found");

    const interviews = await prisma.interviewSession.findMany({
      where: { userId: dbUser.id },
      select: {
        status: true,
        overallScore: true,
      },
    });

    const total = interviews.length;
    const completed = interviews.filter((i) => i.status === InterviewStatus.COMPLETED);
    const inProgress = interviews.filter((i) => i.status === InterviewStatus.IN_PROGRESS);

    const scores = completed
      .map((i) => i.overallScore)
      .filter((s): s is number => s !== null && s !== undefined);

    const averageScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    const highestScore = scores.length > 0 ? Math.max(...scores) : 0;

    return {
      total,
      completedCount: completed.length,
      inProgressCount: inProgress.length,
      averageScore,
      highestScore,
    };
  });
}
