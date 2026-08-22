import { prisma } from "@/lib/prisma";
import { ModuleType, ModuleCompletionStatus } from "@prisma/client";
import { ModuleActivityRecord } from "../types";

export class ModuleActivityService {
  /**
   * Records a user's activity in a specific platform module.
   */
  public static async recordActivity(
    userId: string,
    module: ModuleType,
    completionStatus: ModuleCompletionStatus,
    metadata?: Record<string, any> | null
  ): Promise<ModuleActivityRecord> {
    const record = await prisma.moduleActivity.create({
      data: {
        userId,
        module,
        completionStatus,
        metadata: metadata ? metadata : undefined,
      },
    });

    return {
      id: record.id,
      userId: record.userId,
      module: record.module,
      completionStatus: record.completionStatus,
      metadata: record.metadata as Record<string, any> | null,
      createdAt: record.createdAt,
    };
  }

  /**
   * Retrieves recent module activities for a user within the specified day window.
   */
  public static async getRecentActivity(
    userId: string,
    limitDays: number = 90
  ): Promise<ModuleActivityRecord[]> {
    const since = new Date(Date.now() - limitDays * 24 * 60 * 60 * 1000);

    const records = await prisma.moduleActivity.findMany({
      where: {
        userId,
        createdAt: { gte: since },
      },
      orderBy: { createdAt: "desc" },
    });

    return records.map((r) => ({
      id: r.id,
      userId: r.userId,
      module: r.module,
      completionStatus: r.completionStatus,
      metadata: r.metadata as Record<string, any> | null,
      createdAt: r.createdAt,
    }));
  }

  /**
   * Retrieves the most recent activity record for a specific module.
   */
  public static async getLatestForModule(
    userId: string,
    module: ModuleType
  ): Promise<ModuleActivityRecord | null> {
    const record = await prisma.moduleActivity.findFirst({
      where: {
        userId,
        module,
      },
      orderBy: { createdAt: "desc" },
    });

    if (!record) return null;

    return {
      id: record.id,
      userId: record.userId,
      module: record.module,
      completionStatus: record.completionStatus,
      metadata: record.metadata as Record<string, any> | null,
      createdAt: record.createdAt,
    };
  }
}
