import { NextRequest, NextResponse } from "next/server";
import { getOrCreateDbUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NotificationItemData } from "@/features/notifications/types";
import { CacheService, CacheKeys } from "@/services/cache";

export const dynamic = "force-dynamic";

/**
 * GET /api/notifications
 * Supports:
 * - limit: number (default 30, max 100)
 * - since: ISO timestamp or milliseconds string for gap recovery
 */
export async function GET(req: NextRequest) {
  try {
    const dbUser = await getOrCreateDbUser().catch(() => null);
    if (!dbUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const limit = Math.min(
      Math.max(1, parseInt(searchParams.get("limit") || "30", 10)),
      100
    );

    const sinceParam = searchParams.get("since");
    let sinceDate: Date | null = null;
    if (sinceParam) {
      const parsedNumber = Number(sinceParam);
      if (!isNaN(parsedNumber) && parsedNumber > 0) {
        sinceDate = new Date(parsedNumber);
      } else {
        const parsedIso = new Date(sinceParam);
        if (!isNaN(parsedIso.getTime())) {
          sinceDate = parsedIso;
        }
      }
    }

    const whereClause: { userId: string; createdAt?: { gt: Date } } = {
      userId: dbUser.id,
    };

    if (sinceDate) {
      whereClause.createdAt = { gt: sinceDate };
    }

    const [notifications, unreadCount] = await Promise.all([
      prisma.notification.findMany({
        where: whereClause,
        orderBy: { createdAt: "desc" },
        take: limit,
      }),
      CacheService.getOrSet(
        CacheKeys.unreadNotificationCount(dbUser.id),
        () =>
          prisma.notification.count({
            where: { userId: dbUser.id, status: "UNREAD" },
          }),
        30
      ),
    ]);

    return NextResponse.json(
      {
        notifications: notifications as NotificationItemData[],
        unreadCount,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "private, no-cache, no-store, must-revalidate",
        },
      }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch notifications";
    console.error("GET /api/notifications error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

/**
 * DELETE /api/notifications
 * Clear all notifications for the authenticated user
 */
export async function DELETE() {
  try {
    const dbUser = await getOrCreateDbUser().catch(() => null);
    if (!dbUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const result = await prisma.notification.deleteMany({
      where: { userId: dbUser.id },
    });

    await CacheService.del(CacheKeys.unreadNotificationCount(dbUser.id)).catch(() => {});

    return NextResponse.json({
      success: true,
      deletedCount: result.count,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to clear notifications";
    console.error("DELETE /api/notifications error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
