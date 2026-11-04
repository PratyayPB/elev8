import { toast } from "sonner";
import { createNotificationAction } from "./actions";
import { NotificationType } from "./types";
import { useNotificationsStore } from "@/store/notifications.store";
import { syncToastToDatabase } from "@/lib/toast-sync";

export interface SendNotificationOptions {
  title: string;
  message: string;
  type?: NotificationType;
  actionUrl?: string | null;
  idempotencyKey?: string | null;
  showToast?: boolean;
}

/**
 * Client-side helper to record a notification in the DB, update local badge state,
 * and display a toast notification on the frontend.
 */
export async function sendNotification({
  title,
  message,
  type = "SYSTEM",
  actionUrl = null,
  idempotencyKey = null,
  showToast = true,
}: SendNotificationOptions) {
  // 1. Show immediate toast notification on frontend if requested
  if (showToast) {
    toast(title, {
      description: message,
      duration: 6000,
      skipDb: true, // We explicitly handle DB sync below
    } as any);
  }

  // 2. Persist to DB with keepalive & offline resilience
  try {
    await syncToastToDatabase({
      title,
      message,
      type,
      actionUrl,
      idempotencyKey,
    });
  } catch (syncErr) {
    // Fallback directly to server action if direct API sync failed
    try {
      const res = await createNotificationAction({
        title,
        message,
        type,
        actionUrl,
        idempotencyKey,
      });

      if (res.success && res.data) {
        useNotificationsStore.getState().addNotificationLocally({
          id: res.data.id,
          userId: res.data.userId,
          title: res.data.title,
          message: res.data.message,
          type: res.data.type as NotificationType,
          status: "UNREAD",
          actionUrl: res.data.actionUrl,
          idempotencyKey: res.data.idempotencyKey,
          createdAt: res.data.createdAt,
          readAt: null,
        });
      }
    } catch (err) {
      console.error("[sendNotification] Failed to persist notification:", err);
    }
  }
}
