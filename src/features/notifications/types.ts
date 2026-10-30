export type NotificationType =
  | "CAREER_ASSESSMENT"
  | "ROADMAP"
  | "RESUME"
  | "INTERVIEW"
  | "SYSTEM";

export type NotificationStatus = "UNREAD" | "READ";

export interface NotificationItemData {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  status: NotificationStatus;
  actionUrl: string | null;
  createdAt: Date | string;
  readAt: Date | string | null;
}

export interface CreateNotificationInput {
  userId: string;
  title: string;
  message: string;
  type?: NotificationType;
  actionUrl?: string | null;
}
