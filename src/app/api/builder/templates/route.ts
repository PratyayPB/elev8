import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { CacheService, CacheKeys, CacheTTL } from "@/services/cache";

export async function GET() {
  try {
    const templates = await CacheService.getOrSet(
      CacheKeys.catalogResumeTemplates(),
      () =>
        prisma.resumeTemplate.findMany({
          orderBy: { name: "asc" },
        }),
      CacheTTL.CATALOG
    );
    return NextResponse.json(templates);
  } catch (error) {
    console.error("GET /api/builder/templates error:", error);
    return NextResponse.json(
      { error: "Failed to fetch templates" },
      { status: 500 }
    );
  }
}
