import { prisma } from "@/lib/prisma";
import { NotificationType } from "@/features/notifications/types";
import { notificationTransport } from "@/lib/realtime/ably-transport";
import { CacheService, CacheKeys } from "@/services/cache";

export interface CreateNotificationInput {
  userId: string;
  title: string;
  message: string;
  type?: NotificationType;
  actionUrl?: string | null;
  idempotencyKey?: string | null;
}

/**
 * Canonical helper to persist a notification to the database and publish
 * it over realtime transport (Ably REST) to the target user.
 *
 * Guarantees:
 * 1. Honors idempotencyKey (deterministic deduplication at DB level).
 * 2. Emits realtime event after database commit.
 * 3. Never throws if transport publish fails.
 */
export async function createNotification(input: CreateNotificationInput) {
  const type = input.type || "SYSTEM";
  const actionUrl = input.actionUrl || null;

  let notification;

  if (input.idempotencyKey) {
    notification = await prisma.notification.upsert({
      where: { idempotencyKey: input.idempotencyKey },
      create: {
        userId: input.userId,
        title: input.title,
        message: input.message,
        type,
        status: "UNREAD",
        actionUrl,
        idempotencyKey: input.idempotencyKey,
      },
      update: {}, // If already exists, return existing row
    });
  } else {
    notification = await prisma.notification.create({
      data: {
        userId: input.userId,
        title: input.title,
        message: input.message,
        type,
        status: "UNREAD",
        actionUrl,
      },
    });
  }

  // Invalidate cached unread count for the recipient
  await CacheService.del(CacheKeys.unreadNotificationCount(input.userId)).catch(() => {});

  // Publish to Ably channel notifications:user:{userId}
  // This is fire-and-forget; publish errors are logged without PII and never throw.
  await notificationTransport.publish(notification.userId, {
    type: "notification",
    data: {
      id: notification.id,
      userId: notification.userId,
      title: notification.title,
      message: notification.message,
      type: notification.type,
      status: notification.status,
      actionUrl: notification.actionUrl,
      idempotencyKey: notification.idempotencyKey,
      createdAt: notification.createdAt,
      readAt: notification.readAt,
    },
  }).catch((err) => {
    console.error("[createNotification] Transport publish failed:", err?.message || err);
  });

  return notification;
}

/**
 * Notify subscribers that a specific notification has been marked as READ (cross-tab sync).
 */
export async function publishNotificationRead(userId: string, notificationId: string): Promise<void> {
  await notificationTransport.publish(userId, {
    type: "read",
    data: { id: notificationId },
  }).catch((err) => {
    console.error("[publishNotificationRead] Transport publish failed:", err?.message || err);
  });
}

/**
 * Notify subscribers that all notifications have been marked as READ (cross-tab sync).
 */
export async function publishNotificationReadAll(userId: string, updatedCount: number): Promise<void> {
  await notificationTransport.publish(userId, {
    type: "read-all",
    data: { updatedCount },
  }).catch((err) => {
    console.error("[publishNotificationReadAll] Transport publish failed:", err?.message || err);
  });
}
