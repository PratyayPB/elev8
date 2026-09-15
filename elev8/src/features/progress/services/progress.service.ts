import { ModuleActivityService } from "./module-activity.service";
import { ProgressDashboardData } from "../types";

export class ProgressService {
  /**
   * Aggregates all progress data and activity history for the user's progress dashboard view.
   */
  public static async getDashboardData(
    userId: string
  ): Promise<ProgressDashboardData> {
    const [progress, recentActivities] = await Promise.all([
      ModuleActivityService.getProgress(userId),
      ModuleActivityService.getRecentActivity(userId, 30),
    ]);

    return {
      progress,
      recentActivities,
    };
  }
}
