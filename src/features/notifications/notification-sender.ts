import { toast } from "sonner";
import { createNotificationAction } from "./actions";
import { NotificationType } from "./types";
import { useNotificationsStore } from "@/store/notifications.store";

export interface SendNotificationOptions {
  title: string;
  message: string;
  type?: NotificationType;
  actionUrl?: string | null;
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
  showToast = true,
}: SendNotificationOptions) {
  // 1. Show immediate toast notification on frontend
  if (showToast) {
    toast(title, {
      description: message,
      duration: 6000,
    });
  }

  // 2. Persist to DB with initial status UNREAD
  try {
    const res = await createNotificationAction({
      title,
      message,
      type,
      actionUrl,
    });

    // 3. Refresh notifications store so the badge counter updates immediately
    if (res.success && res.data) {
      useNotificationsStore.getState().addNotificationLocally({
        id: res.data.id,
        userId: res.data.userId,
        title: res.data.title,
        message: res.data.message,
        type: res.data.type as NotificationType,
        status: "UNREAD",
        actionUrl: res.data.actionUrl,
        createdAt: res.data.createdAt,
        readAt: null,
      });
    }
  } catch (err) {
    console.error("[sendNotification] Failed to persist notification:", err);
  }
}
