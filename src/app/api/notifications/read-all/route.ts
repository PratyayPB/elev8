import { NextResponse } from "next/server";
import { getOrCreateDbUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { publishNotificationReadAll } from "@/lib/notify";
import { CacheService, CacheKeys } from "@/services/cache";

export const dynamic = "force-dynamic";

/**
 * PATCH /api/notifications/read-all
 * Marks all unread notifications as READ for the authenticated user and
 * broadcasts a cross-tab sync event via Ably.
 */
export async function PATCH() {
  try {
    const dbUser = await getOrCreateDbUser().catch(() => null);
    if (!dbUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const result = await prisma.notification.updateMany({
      where: {
        userId: dbUser.id,
        status: "UNREAD",
      },
      data: {
        status: "READ",
        readAt: new Date(),
      },
    });

    // Broadcast cross-tab sync event to all active client tabs
    if (result.count > 0) {
      await CacheService.del(CacheKeys.unreadNotificationCount(dbUser.id)).catch(() => {});
      await publishNotificationReadAll(dbUser.id, result.count).catch(() => {});
    }

    return NextResponse.json({
      success: true,
      updatedCount: result.count,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to mark all as read";
    console.error("PATCH /api/notifications/read-all error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
