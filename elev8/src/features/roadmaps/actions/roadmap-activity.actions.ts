"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { ModuleActivityService } from "@/features/recommendations/services";
import { ModuleType, ModuleCompletionStatus } from "@prisma/client";

export async function completeRoadmapPhaseAction(payload: {
  roadmapId: string;
  phaseId: string;
  phaseTitle: string;
  topics: string[];
}) {
  const { userId: clerkId } = await auth();
  if (!clerkId) throw new Error("Unauthorized");

  const dbUser = await prisma.user.findUnique({ where: { clerkId } });
  if (!dbUser) throw new Error("User not found");

  const roadmap = await prisma.roadmap.findUnique({
    where: { id: payload.roadmapId, userId: dbUser.id },
  });

  if (!roadmap) {
    throw new Error("Roadmap not found or unauthorized");
  }

  try {
    await ModuleActivityService.recordActivity(
      dbUser.id,
      ModuleType.ROADMAP,
      ModuleCompletionStatus.COMPLETED,
      {
        source: "ROADMAP_PHASE_COMPLETION",
        roadmapId: payload.roadmapId,
        phaseId: payload.phaseId,
        phaseTitle: payload.phaseTitle,
        topics: payload.topics,
        targetRole: roadmap.targetRole || "Unknown Role",
      }
    );

    return { success: true };
  } catch (error: any) {
    console.error("[RoadmapActivity] Failed to record phase completion:", error);
    return { success: false, error: error.message };
  }
}
