import { NotificationItemData } from "@/features/notifications/types";

export type RealtimeNotificationEvent =
  | {
      type: "notification";
      data: NotificationItemData;
    }
  | {
      type: "read";
      data: { id: string };
    }
  | {
      type: "read-all";
      data: { updatedCount: number };
    };

export interface NotificationTransport {
  publish(userId: string, event: RealtimeNotificationEvent): Promise<void>;
}
