import { create } from "zustand";
import { NotificationItemData } from "@/features/notifications/types";
import {
  getNotificationsAction,
  markNotificationAsReadAction,
  markAllNotificationsAsReadAction,
  deleteNotificationAction,
  clearAllNotificationsAction,
} from "@/features/notifications/actions";
import { toast } from "sonner";

interface NotificationsState {
  notifications: NotificationItemData[];
  unreadCount: number;
  isLoading: boolean;
  filter: "ALL" | "UNREAD";
  selectedNotification: NotificationItemData | null;
  isModalOpen: boolean;

  setFilter: (filter: "ALL" | "UNREAD") => void;
  fetchNotifications: () => Promise<void>;
  openNotification: (notification: NotificationItemData) => Promise<void>;
  closeModal: () => void;
  deleteNotification: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  clearAll: () => Promise<void>;
  addNotificationLocally: (notification: NotificationItemData) => void;
}

export const useNotificationsStore = create<NotificationsState>((set, get) => ({
  notifications: [],
  unreadCount: 0,
  isLoading: false,
  filter: "ALL",
  selectedNotification: null,
  isModalOpen: false,

  setFilter: (filter) => set({ filter }),

  fetchNotifications: async () => {
    set({ isLoading: true });
    try {
      const res = await getNotificationsAction(50);
      if (res.success && res.data) {
        set({
          notifications: res.data.notifications,
          unreadCount: res.data.unreadCount,
        });
      }
    } catch (err) {
      console.error("[NotificationsStore] Failed to fetch notifications:", err);
    } finally {
      set({ isLoading: false });
    }
  },

  openNotification: async (notification) => {
    const isUnread = notification.status === "UNREAD";

    // Open modal with the notification
    set({
      selectedNotification: {
        ...notification,
        status: "READ",
        readAt: notification.readAt || new Date(),
      },
      isModalOpen: true,
    });

    // If it was unread, update locally & in the database
    if (isUnread) {
      set((state) => ({
        notifications: state.notifications.map((item) =>
          item.id === notification.id
            ? { ...item, status: "READ", readAt: new Date() }
            : item
        ),
        unreadCount: Math.max(0, state.unreadCount - 1),
      }));

      try {
        await markNotificationAsReadAction(notification.id);
      } catch (err) {
        console.error("[NotificationsStore] Failed to mark as read in DB:", err);
      }
    }
  },

  closeModal: () => {
    set({
      isModalOpen: false,
      selectedNotification: null,
    });
  },

  deleteNotification: async (id: string) => {
    const current = get().notifications.find((n) => n.id === id);
    const wasUnread = current?.status === "UNREAD";

    // Close modal if deleting the currently open one
    if (get().selectedNotification?.id === id) {
      set({ isModalOpen: false, selectedNotification: null });
    }

    // Optimistically remove from state
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
      unreadCount: wasUnread
        ? Math.max(0, state.unreadCount - 1)
        : state.unreadCount,
    }));

    toast.success("Notification deleted", {
      description: "The notification has been permanently removed.",
    });

    try {
      const res = await deleteNotificationAction(id);
      if (!res.success) {
        toast.error("Failed to delete notification from database");
      }
    } catch (err) {
      console.error("[NotificationsStore] Failed to delete notification:", err);
    }
  },

  markAllAsRead: async () => {
    const hadUnread = get().unreadCount > 0;
    if (!hadUnread) return;

    // Optimistically update
    set((state) => ({
      notifications: state.notifications.map((n) => ({
        ...n,
        status: "READ",
        readAt: n.readAt || new Date(),
      })),
      unreadCount: 0,
    }));

    toast.success("All notifications marked as read");

    try {
      await markAllNotificationsAsReadAction();
    } catch (err) {
      console.error("[NotificationsStore] Failed to mark all as read:", err);
    }
  },

  clearAll: async () => {
    if (get().notifications.length === 0) return;

    set({
      notifications: [],
      unreadCount: 0,
      isModalOpen: false,
      selectedNotification: null,
    });

    toast.success("All notifications cleared");

    try {
      await clearAllNotificationsAction();
    } catch (err) {
      console.error("[NotificationsStore] Failed to clear notifications:", err);
    }
  },

  addNotificationLocally: (notification) => {
    set((state) => ({
      notifications: [notification, ...state.notifications],
      unreadCount:
        notification.status === "UNREAD"
          ? state.unreadCount + 1
          : state.unreadCount,
    }));
  },
}));
