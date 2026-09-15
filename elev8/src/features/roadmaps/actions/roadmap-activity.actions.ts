"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { ModuleActivityService } from "@/features/progress/services";
import {
  ModuleType,
  ModuleCompletionStatus,
  ModuleActivityEventType,
} from "@/features/progress/types";

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
    await ModuleActivityService.recordActivity({
      userId: dbUser.id,
      module: ModuleType.ROADMAP,
      eventType: ModuleActivityEventType.MILESTONE_COMPLETED,
      completionStatus: ModuleCompletionStatus.COMPLETED,
      entityId: payload.phaseId,
      metadata: {
        source: "ROADMAP_PHASE_COMPLETION",
        roadmapId: payload.roadmapId,
        phaseId: payload.phaseId,
        phaseTitle: payload.phaseTitle,
        topics: payload.topics,
        targetRole: roadmap.targetRole || "Unknown Role",
      },
    });

    const artifact = roadmap.blobUrl
      ? await import("@/services/storage/blob-storage.service")
          .then(({ BlobStorageService }) => BlobStorageService.fetchJson<any>(roadmap.blobUrl!))
          .catch(() => null)
      : null;
    const totalMilestones = Array.isArray(artifact?.phases) ? artifact.phases.length : undefined;
    const completedMilestones = await prisma.moduleActivity.count({
      where: {
        userId: dbUser.id,
        eventType: ModuleActivityEventType.MILESTONE_COMPLETED,
        metadata: {
          path: ["roadmapId"],
          equals: payload.roadmapId,
        },
      },
    });

    if (totalMilestones && completedMilestones >= totalMilestones) {
      await ModuleActivityService.recordActivity({
        userId: dbUser.id,
        module: ModuleType.ROADMAP,
        eventType: ModuleActivityEventType.ROADMAP_COMPLETED,
        completionStatus: ModuleCompletionStatus.COMPLETED,
        entityId: payload.roadmapId,
        metadata: {
          source: "ROADMAP_PHASE_COMPLETION",
          roadmapId: payload.roadmapId,
          completedMilestones,
          totalMilestones,
        },
      });
    }

    return { success: true };
  } catch (error: any) {
    console.error("[RoadmapActivity] Failed to record phase completion:", error);
    return { success: false, error: error.message };
  }
}
