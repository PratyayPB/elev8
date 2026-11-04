import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { createDbNotification } from "@/features/notifications/actions";
import { NotificationType } from "@/features/notifications/types";

const LogToastSchema = z.object({
  title: z.string().min(1, "Title is required"),
  message: z.string().optional(),
  type: z
    .enum(["CAREER_ASSESSMENT", "ROADMAP", "RESUME", "INTERVIEW", "SYSTEM"])
    .optional(),
  actionUrl: z.string().nullable().optional(),
  idempotencyKey: z.string().nullable().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: Please sign in." },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { clerkId },
      select: { id: true },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found." },
        { status: 404 }
      );
    }

    const rawJson = await req.json().catch(() => null);
    const parsed = LogToastSchema.safeParse(rawJson);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid payload", details: parsed.error.issues },
        { status: 400 }
      );
    }

    const { title, message, type = "SYSTEM", actionUrl, idempotencyKey } =
      parsed.data;

    const notification = await createDbNotification({
      userId: user.id,
      title,
      message: message || title,
      type: type as NotificationType,
      actionUrl: actionUrl || null,
      idempotencyKey: idempotencyKey || null,
    });

    return NextResponse.json({
      success: true,
      data: notification,
    });
  } catch (error: any) {
    console.error("[log-toast] Failed to record toast notification:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
