import { prisma } from "@/lib/prisma";
import { CareerLevel, RoadmapStatus, Prisma } from "@prisma/client";

export interface GetRoadmapsOptions {
  userId: string;
  search?: string;
  experienceLevel?: string;
  status?: string;
  sort?: "newest" | "oldest" | "updated" | "alphabetical";
  page?: number;
  limit?: number;
}

export class RoadmapLibraryService {
  public static async getRoadmaps(options: GetRoadmapsOptions) {
    const {
      userId,
      search,
      experienceLevel,
      status,
      sort = "newest",
      page = 1,
      limit = 9,
    } = options;

    const where: Prisma.RoadmapWhereInput = {
      userId,
    };

    if (search && search.trim()) {
      const query = search.trim();
      where.OR = [
        { title: { contains: query, mode: "insensitive" } },
        { targetRole: { contains: query, mode: "insensitive" } },
      ];
    }

    if (experienceLevel && experienceLevel !== "ALL") {
      where.experienceLevel = experienceLevel as CareerLevel;
    }

    if (status && status !== "ALL") {
      where.status = status as RoadmapStatus;
    }

    let orderBy: Prisma.RoadmapOrderByWithRelationInput = { createdAt: "desc" };

    if (sort === "oldest") {
      orderBy = { createdAt: "asc" };
    } else if (sort === "updated") {
      orderBy = { updatedAt: "desc" };
    } else if (sort === "alphabetical") {
      orderBy = { title: "asc" };
    }

    const skip = (page - 1) * limit;

    const [roadmaps, total] = await Promise.all([
      prisma.roadmap.findMany({
        where,
        orderBy,
        skip,
        take: limit,
      }),
      prisma.roadmap.count({ where }),
    ]);

    return {
      roadmaps,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
