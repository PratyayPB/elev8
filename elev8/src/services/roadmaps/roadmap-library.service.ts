import { prisma } from "@/lib/prisma";
import { Prisma, RoadmapStatus } from "@prisma/client";
import { LibraryRoadmap } from "@/features/roadmaps/types";

export interface GetRoadmapsOptions {
  userId: string;
  section?: "mine" | "global";
  search?: string;
  sort?: "newest" | "oldest" | "updated" | "alphabetical";
  page?: number;
  limit?: number;
}

export class RoadmapLibraryService {
  public static async getRoadmaps(options: GetRoadmapsOptions): Promise<{
    roadmaps: LibraryRoadmap[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  }> {
    const {
      userId,
      section = "mine",
      search,
      sort = "newest",
      page = 1,
      limit = 9,
    } = options;

    if (section === "global") {
      const globalWhere: Prisma.GlobalRoadmapWhereInput = {
        status: RoadmapStatus.COMPLETED,
      };

      if (search && search.trim()) {
        const query = search.trim();
        globalWhere.AND = [
          {
            OR: [
              { title: { contains: query, mode: "insensitive" } },
              { targetRole: { contains: query, mode: "insensitive" } },
            ],
          },
        ];
      }

      let orderBy: Prisma.GlobalRoadmapOrderByWithRelationInput = { createdAt: "desc" };
      if (sort === "oldest") {
        orderBy = { createdAt: "asc" };
      } else if (sort === "updated") {
        orderBy = { updatedAt: "desc" };
      } else if (sort === "alphabetical") {
        orderBy = { title: "asc" };
      }

      const skip = (page - 1) * limit;

      const [globalRoadmaps, total] = await Promise.all([
        prisma.globalRoadmap.findMany({
          where: globalWhere,
          orderBy,
          skip,
          take: limit,
          select: {
            id: true,
            title: true,
            description: true,
            targetRole: true,
            experienceLevel: true,
            status: true,
            estimatedDuration: true,
            blobUrl: true,
            createdByUserId: true,
            createdAt: true,
            updatedAt: true,
          },
        }),
        prisma.globalRoadmap.count({ where: globalWhere }),
      ]);

      const mapped: LibraryRoadmap[] = globalRoadmaps.map((g) => ({
        id: g.id,
        title: g.title,
        description: g.description,
        targetRole: g.targetRole,
        experienceLevel: g.experienceLevel,
        status: g.status,
        estimatedDuration: g.estimatedDuration,
        blobUrl: g.blobUrl,
        personalized: false,
        isGlobal: true,
        isOwner: g.createdByUserId === userId,
        createdAt: g.createdAt,
        updatedAt: g.updatedAt,
      }));

      return {
        roadmaps: mapped,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.max(1, Math.ceil(total / limit)),
        },
      };
    }

    // Section === "mine"
    // 1. Build where clause for user's personal Roadmaps
    const roadmapWhere: Prisma.RoadmapWhereInput = {
      userId,
    };

    if (search && search.trim()) {
      const query = search.trim();
      roadmapWhere.OR = [
        { title: { contains: query, mode: "insensitive" } },
        { targetRole: { contains: query, mode: "insensitive" } },
      ];
    }

    // 2. Build where clause for GlobalRoadmaps created by this user
    const globalUserWhere: Prisma.GlobalRoadmapWhereInput = {
      createdByUserId: userId,
    };

    if (search && search.trim()) {
      const query = search.trim();
      globalUserWhere.OR = [
        { title: { contains: query, mode: "insensitive" } },
        { targetRole: { contains: query, mode: "insensitive" } },
      ];
    }

    const [personalRoadmaps, userGlobalRoadmaps] = await Promise.all([
      prisma.roadmap.findMany({
        where: roadmapWhere,
        select: {
          id: true,
          title: true,
          description: true,
          targetRole: true,
          experienceLevel: true,
          status: true,
          estimatedDuration: true,
          blobUrl: true,
          personalized: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
      prisma.globalRoadmap.findMany({
        where: globalUserWhere,
        select: {
          id: true,
          title: true,
          description: true,
          targetRole: true,
          experienceLevel: true,
          status: true,
          estimatedDuration: true,
          blobUrl: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
    ]);

    const mappedPersonal: LibraryRoadmap[] = personalRoadmaps.map((r) => ({
      id: r.id,
      title: r.title,
      description: r.description,
      targetRole: r.targetRole,
      experienceLevel: r.experienceLevel,
      status: r.status,
      estimatedDuration: r.estimatedDuration,
      blobUrl: r.blobUrl,
      personalized: Boolean(r.personalized),
      isGlobal: false,
      isOwner: true,
      createdAt: r.createdAt,
      updatedAt: r.updatedAt,
    }));

    const mappedUserGlobal: LibraryRoadmap[] = userGlobalRoadmaps.map((g) => ({
      id: g.id,
      title: g.title,
      description: g.description,
      targetRole: g.targetRole,
      experienceLevel: g.experienceLevel,
      status: g.status,
      estimatedDuration: g.estimatedDuration,
      blobUrl: g.blobUrl,
      personalized: false,
      isGlobal: true,
      isOwner: true,
      createdAt: g.createdAt,
      updatedAt: g.updatedAt,
    }));

    const combined = [...mappedPersonal, ...mappedUserGlobal];

    if (sort === "oldest") {
      combined.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    } else if (sort === "updated") {
      combined.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    } else if (sort === "alphabetical") {
      combined.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // newest
      combined.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    const total = combined.length;
    const skip = (page - 1) * limit;
    const paginated = combined.slice(skip, skip + limit);

    return {
      roadmaps: paginated,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.max(1, Math.ceil(total / limit)),
      },
    };
  }
}
