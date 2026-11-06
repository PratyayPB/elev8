import { NextRequest, NextResponse } from "next/server";
import { getOrCreateDbUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { publishNotificationRead } from "@/lib/notify";

export const dynamic = "force-dynamic";

/**
 * PATCH /api/notifications/[id]
 * Mark a single notification as READ and broadcast to other tabs via Ably.
 */
export async function PATCH(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const dbUser = await getOrCreateDbUser().catch(() => null);
    if (!dbUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const result = await prisma.notification.updateMany({
      where: {
        id,
        userId: dbUser.id,
        status: "UNREAD",
      },
      data: {
        status: "READ",
        readAt: new Date(),
      },
    });

    if (result.count > 0) {
      await publishNotificationRead(dbUser.id, id).catch(() => {});
    }

    return NextResponse.json({
      success: true,
      id,
      status: "READ",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to mark notification as read";
    console.error("PATCH /api/notifications/[id] error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

/**
 * DELETE /api/notifications/[id]
 * Permanently delete a single notification belonging to the authenticated user.
 */
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const dbUser = await getOrCreateDbUser().catch(() => null);
    if (!dbUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const result = await prisma.notification.deleteMany({
      where: {
        id,
        userId: dbUser.id,
      },
    });

    return NextResponse.json({
      success: result.count > 0,
      id,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to delete notification";
    console.error("DELETE /api/notifications/[id] error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
