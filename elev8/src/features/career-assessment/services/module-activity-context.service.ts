import { prisma } from "@/lib/prisma";
import { ModuleActivityContext } from "../types";

export class ModuleActivityContextService {
  public static async getRecentActivity(
    userId: string
  ): Promise<ModuleActivityContext> {
    try {
      const ninetyDaysAgo = new Date();
      ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);

      // Fetch recent completed/evaluated interviews
      const recentInterviews = await prisma.interviewSession.findMany({
        where: {
          userId,
          createdAt: { gte: ninetyDaysAgo },
        },
        orderBy: { createdAt: "desc" },
        take: 3,
        select: {
          role: true,
          overallScore: true,
          interviewType: true,
          createdAt: true,
        },
      });

      // Fetch recent resume scores
      const recentResumes = await prisma.resumeScore.findMany({
        where: {
          userId,
          createdAt: { gte: ninetyDaysAgo },
        },
        orderBy: { createdAt: "desc" },
        take: 2,
        select: {
          role: true,
          ovrScore: true,
          atsScore: true,
          createdAt: true,
        },
      });

      // Fetch active roadmaps
      const activeRoadmaps = await prisma.roadmap.findMany({
        where: {
          userId,
        },
        orderBy: { updatedAt: "desc" },
        take: 2,
        select: {
          title: true,
          targetRole: true,
          status: true,
        },
      });

      return {
        recentInterviews: recentInterviews.map((i) => ({
          role: i.role,
          difficulty: "Medium",
          overallScore: i.overallScore,
          category: i.interviewType,
          createdAt: i.createdAt,
        })),
        recentResumes: recentResumes.map((r) => ({
          role: r.role,
          overallScore: r.ovrScore,
          atsScore: r.atsScore,
          createdAt: r.createdAt,
        })),
        activeRoadmaps: activeRoadmaps.map((rm) => ({
          title: rm.title,
          targetRole: rm.targetRole,
          status: rm.status,
        })),
      };
    } catch (error) {
      console.warn("Could not fetch module activity context for assessment:", error);
      return {};
    }
  }
}
