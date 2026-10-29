import { ModuleActivityService } from "./module-activity.service";
import { ProgressDashboardData } from "../types";

export class ProgressService {
  /**
   * Aggregates all progress data and activity history for the user's progress dashboard view.
   *
   * @param userId Database user identifier
   * @returns Aggregated progress projection and recent activity records
   */
  public static async getDashboardData(
    userId: string
  ): Promise<ProgressDashboardData> {
    if (!userId || typeof userId !== "string" || !userId.trim()) {
      throw new Error("Valid userId is required to fetch progress dashboard data.");
    }

    const [progress, recentActivities] = await Promise.all([
      ModuleActivityService.getProgress(userId.trim()),
      ModuleActivityService.getRecentActivity(userId.trim(), 30),
    ]);

    return {
      progress,
      recentActivities,
    };
  }
}
