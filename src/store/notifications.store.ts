import { create } from "zustand";
import { NotificationItemData } from "@/features/notifications/types";
import { toast } from "sonner";

interface NotificationsState {
  notifications: NotificationItemData[];
  unreadCount: number;
  isLoading: boolean;
  filter: "ALL" | "UNREAD";
  selectedNotification: NotificationItemData | null;
  isModalOpen: boolean;

  setFilter: (filter: "ALL" | "UNREAD") => void;
  fetchNotifications: (since?: string) => Promise<void>;
  receive: (notification: NotificationItemData) => void;
  hydrate: (items: NotificationItemData[], unreadCount: number) => void;
  markReadLocally: (id: string) => void;
  markAllReadLocally: () => void;
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

  hydrate: (items, unreadCount) => {
    set({
      notifications: items || [],
      unreadCount: Math.max(0, unreadCount ?? 0),
    });
  },

  receive: (notification) => {
    set((state) => {
      // Deduplicate by ID or idempotencyKey
      const existingIndex = state.notifications.findIndex(
        (n) =>
          n.id === notification.id ||
          (Boolean(notification.idempotencyKey) &&
            Boolean(n.idempotencyKey) &&
            n.idempotencyKey === notification.idempotencyKey)
      );

      if (existingIndex !== -1) {
        // If already present, update in-place without duplicating
        const updated = [...state.notifications];
        updated[existingIndex] = { ...updated[existingIndex], ...notification };
        return { notifications: updated };
      }

      // Prepend newly received notification and cap at 50 items
      const nextList = [notification, ...state.notifications].slice(0, 50);
      const isUnread = notification.status === "UNREAD";

      return {
        notifications: nextList,
        unreadCount: isUnread ? state.unreadCount + 1 : state.unreadCount,
      };
    });
  },

  markReadLocally: (id) => {
    set((state) => {
      const item = state.notifications.find((n) => n.id === id);
      if (!item || item.status === "READ") return state;

      return {
        notifications: state.notifications.map((n) =>
          n.id === id ? { ...n, status: "READ", readAt: new Date() } : n
        ),
        unreadCount: Math.max(0, state.unreadCount - 1),
      };
    });
  },

  markAllReadLocally: () => {
    set((state) => ({
      notifications: state.notifications.map((n) => ({
        ...n,
        status: "READ",
        readAt: n.readAt || new Date(),
      })),
      unreadCount: 0,
    }));
  },

  fetchNotifications: async (since) => {
    set({ isLoading: true });
    try {
      const url = since
        ? `/api/notifications?limit=50&since=${encodeURIComponent(since)}`
        : "/api/notifications?limit=50";

      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        // Do not fall back to Server Actions or POST. Gracefully preserve state.
        console.warn(`[NotificationsStore] GET /api/notifications returned HTTP ${response.status}`);
        return;
      }

      const data = await response.json();
      const incoming: NotificationItemData[] = data.notifications || [];
      const unreadCount: number = data.unreadCount ?? 0;

      if (!since) {
        set({
          notifications: incoming,
          unreadCount,
        });
        return;
      }

      // Gap recovery merge: merge incoming items into state
      set((state) => {
        const existingMap = new Map(state.notifications.map((n) => [n.id, n]));
        for (const item of incoming) {
          existingMap.set(item.id, item);
        }

        const merged = Array.from(existingMap.values()).sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ).slice(0, 50);

        return {
          notifications: merged,
          unreadCount,
        };
      });
    } catch (err) {
      console.error("[NotificationsStore] Failed to fetch notifications via GET:", err);
    } finally {
      set({ isLoading: false });
    }
  },

  openNotification: async (notification) => {
    const isUnread = notification.status === "UNREAD";

    set({
      selectedNotification: {
        ...notification,
        status: "READ",
        readAt: notification.readAt || new Date(),
      },
      isModalOpen: true,
    });

    if (isUnread) {
      // Optimistic update
      set((state) => ({
        notifications: state.notifications.map((item) =>
          item.id === notification.id
            ? { ...item, status: "READ", readAt: new Date() }
            : item
        ),
        unreadCount: Math.max(0, state.unreadCount - 1),
      }));

      try {
        const res = await fetch(`/api/notifications/${notification.id}`, {
          method: "PATCH",
        });
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
      } catch (err) {
        console.error("[NotificationsStore] Rollback: Failed to mark as read:", err);
        // Rollback on failure
        set((state) => ({
          notifications: state.notifications.map((item) =>
            item.id === notification.id
              ? { ...item, status: "UNREAD", readAt: null }
              : item
          ),
          unreadCount: state.unreadCount + 1,
        }));
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
    const previous = get().notifications;
    const previousUnread = get().unreadCount;
    const current = previous.find((n) => n.id === id);
    const wasUnread = current?.status === "UNREAD";

    if (get().selectedNotification?.id === id) {
      set({ isModalOpen: false, selectedNotification: null });
    }

    // Optimistically remove
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
      unreadCount: wasUnread ? Math.max(0, state.unreadCount - 1) : state.unreadCount,
    }));

    try {
      const res = await fetch(`/api/notifications/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      toast.success("Notification deleted", {
        description: "The notification has been permanently removed.",
        skipDb: true,
      } as any);
    } catch (err) {
      console.error("[NotificationsStore] Rollback: Failed to delete notification:", err);
      // Rollback
      set({
        notifications: previous,
        unreadCount: previousUnread,
      });
      toast.error("Failed to delete notification", { skipDb: true } as any);
    }
  },

  markAllAsRead: async () => {
    const previous = get().notifications;
    const previousUnread = get().unreadCount;
    if (previousUnread === 0) return;

    // Optimistically mark all read
    set((state) => ({
      notifications: state.notifications.map((n) => ({
        ...n,
        status: "READ",
        readAt: n.readAt || new Date(),
      })),
      unreadCount: 0,
    }));

    try {
      const res = await fetch("/api/notifications/read-all", {
        method: "PATCH",
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      toast.success("All notifications marked as read", { skipDb: true } as any);
    } catch (err) {
      console.error("[NotificationsStore] Rollback: Failed to mark all as read:", err);
      // Rollback
      set({
        notifications: previous,
        unreadCount: previousUnread,
      });
      toast.error("Failed to mark all as read", { skipDb: true } as any);
    }
  },

  clearAll: async () => {
    const previous = get().notifications;
    const previousUnread = get().unreadCount;
    if (previous.length === 0) return;

    // Optimistically clear
    set({
      notifications: [],
      unreadCount: 0,
      isModalOpen: false,
      selectedNotification: null,
    });

    try {
      const res = await fetch("/api/notifications", {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      toast.success("All notifications cleared", { skipDb: true } as any);
    } catch (err) {
      console.error("[NotificationsStore] Rollback: Failed to clear all notifications:", err);
      // Rollback
      set({
        notifications: previous,
        unreadCount: previousUnread,
      });
      toast.error("Failed to clear notifications", { skipDb: true } as any);
    }
  },

  addNotificationLocally: (notification) => {
    get().receive(notification);
  },
}));
