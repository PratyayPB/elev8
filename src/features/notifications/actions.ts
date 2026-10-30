"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { safeAction } from "@/lib/error-handler";
import {
  CreateNotificationInput,
  NotificationItemData,
  NotificationType,
} from "./types";

/**
 * Internal helper to authenticate and get the current user's DB ID.
 */
async function getAuthUserId(): Promise<string> {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    throw new Error("Unauthorized: Please sign in.");
  }

  const user = await prisma.user.findUnique({
    where: { clerkId },
    select: { id: true },
  });

  if (!user) {
    throw new Error("User record not found.");
  }

  return user.id;
}

/**
 * Fetch notifications for the authenticated user along with the unread count.
 */
export async function getNotificationsAction(limit = 30) {
  return safeAction(async () => {
    const userId = await getAuthUserId();

    const [notifications, unreadCount] = await Promise.all([
      prisma.notification.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: limit,
      }),
      prisma.notification.count({
        where: { userId, status: "UNREAD" },
      }),
    ]);

    return {
      notifications: notifications as NotificationItemData[],
      unreadCount,
    };
  });
}

/**
 * Fetch the current unread notifications count for badge display.
 */
export async function getUnreadCountAction() {
  return safeAction(async () => {
    const userId = await getAuthUserId();

    const count = await prisma.notification.count({
      where: { userId, status: "UNREAD" },
    });

    return { count };
  });
}

/**
 * Mark a single notification as READ when opened in the modal.
 */
export async function markNotificationAsReadAction(notificationId: string) {
  return safeAction(async () => {
    const userId = await getAuthUserId();

    await prisma.notification.updateMany({
      where: {
        id: notificationId,
        userId, // Ensures users can only update their own notifications
        status: "UNREAD",
      },
      data: {
        status: "READ",
        readAt: new Date(),
      },
    });

    return { id: notificationId, status: "READ" as const };
  });
}

/**
 * Mark all unread notifications for the authenticated user as READ.
 */
export async function markAllNotificationsAsReadAction() {
  return safeAction(async () => {
    const userId = await getAuthUserId();

    const result = await prisma.notification.updateMany({
      where: {
        userId,
        status: "UNREAD",
      },
      data: {
        status: "READ",
        readAt: new Date(),
      },
    });

    return { updatedCount: result.count };
  });
}

/**
 * Delete a notification from the database.
 */
export async function deleteNotificationAction(notificationId: string) {
  return safeAction(async () => {
    const userId = await getAuthUserId();

    const result = await prisma.notification.deleteMany({
      where: {
        id: notificationId,
        userId, // Ensures users can only delete their own notifications
      },
    });

    return { id: notificationId, success: result.count > 0 };
  });
}

/**
 * Clear/delete all notifications for the authenticated user.
 */
export async function clearAllNotificationsAction() {
  return safeAction(async () => {
    const userId = await getAuthUserId();

    const result = await prisma.notification.deleteMany({
      where: { userId },
    });

    return { deletedCount: result.count };
  });
}

/**
 * Server action to create a notification for the current user.
 */
export async function createNotificationAction(input: {
  title: string;
  message: string;
  type?: NotificationType;
  actionUrl?: string | null;
}) {
  return safeAction(async () => {
    const userId = await getAuthUserId();
    return await createDbNotification({
      userId,
      title: input.title,
      message: input.message,
      type: input.type || "SYSTEM",
      actionUrl: input.actionUrl,
    });
  });
}

/**
 * Service function to programmatically create a notification for any user
 * (e.g., from Trigger.dev tasks, webhooks, or background routines).
 */
export async function createDbNotification(input: CreateNotificationInput) {
  return prisma.notification.create({
    data: {
      userId: input.userId,
      title: input.title,
      message: input.message,
      type: input.type || "SYSTEM",
      status: "UNREAD",
      actionUrl: input.actionUrl || null,
    },
  });
}
