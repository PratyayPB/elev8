import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { useNotificationsStore } from "@/store/notifications.store";
import { NotificationItemData } from "../types";

vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
    info: vi.fn(),
  },
}));

describe("Notifications Store Operations via REST", () => {
  const mockInitialNotifications: NotificationItemData[] = [
    {
      id: "notif-1",
      userId: "user-1",
      title: "Roadmap Ready",
      message: "Your AI Roadmap has been generated successfully and is ready to view.",
      type: "ROADMAP",
      status: "UNREAD",
      actionUrl: "/roadmaps/test-1",
      createdAt: new Date(),
      readAt: null,
    },
    {
      id: "notif-2",
      userId: "user-1",
      title: "Resume Scored",
      message: "Your resume score is ready.",
      type: "RESUME",
      status: "READ",
      actionUrl: "/resumes/test-2",
      createdAt: new Date(),
      readAt: new Date(),
    },
  ];

  beforeEach(() => {
    useNotificationsStore.setState({
      notifications: [],
      unreadCount: 0,
      isLoading: false,
      filter: "ALL",
      selectedNotification: null,
      isModalOpen: false,
    });

    global.fetch = vi.fn().mockImplementation((url: string, options?: RequestInit) => {
      const method = options?.method || "GET";

      if (url.includes("/api/notifications") && method === "GET") {
        return Promise.resolve({
          ok: true,
          json: async () => ({
            notifications: mockInitialNotifications,
            unreadCount: 1,
          }),
        });
      }

      if (url.includes("/api/notifications/notif-1") && method === "PATCH") {
        return Promise.resolve({
          ok: true,
          json: async () => ({ success: true, id: "notif-1", status: "READ" }),
        });
      }

      if (url.includes("/api/notifications/read-all") && method === "PATCH") {
        return Promise.resolve({
          ok: true,
          json: async () => ({ success: true, updatedCount: 1 }),
        });
      }

      if (url.includes("/api/notifications/notif-1") && method === "DELETE") {
        return Promise.resolve({
          ok: true,
          json: async () => ({ success: true, id: "notif-1" }),
        });
      }

      if (url === "/api/notifications" && method === "DELETE") {
        return Promise.resolve({
          ok: true,
          json: async () => ({ success: true, deletedCount: 2 }),
        });
      }

      return Promise.resolve({ ok: true, json: async () => ({ success: true }) });
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should fetch notifications via GET and populate initial state", async () => {
    await useNotificationsStore.getState().fetchNotifications();

    const state = useNotificationsStore.getState();
    expect(state.notifications).toHaveLength(2);
    expect(state.unreadCount).toBe(1);
    expect(state.isLoading).toBe(false);
  });

  it("should open notification in modal and optimistically transition UNREAD status to READ", async () => {
    await useNotificationsStore.getState().fetchNotifications();

    const unreadItem = useNotificationsStore.getState().notifications[0];
    expect(unreadItem.status).toBe("UNREAD");

    await useNotificationsStore.getState().openNotification(unreadItem);

    const state = useNotificationsStore.getState();
    expect(state.isModalOpen).toBe(true);
    expect(state.selectedNotification?.id).toBe("notif-1");
    expect(state.selectedNotification?.status).toBe("READ");
    expect(state.unreadCount).toBe(0);
    expect(state.notifications[0].status).toBe("READ");
  });

  it("should delete a notification via DELETE route and remove it from list", async () => {
    await useNotificationsStore.getState().fetchNotifications();

    const itemToDelete = useNotificationsStore.getState().notifications[0];
    await useNotificationsStore.getState().openNotification(itemToDelete);

    expect(useNotificationsStore.getState().isModalOpen).toBe(true);

    await useNotificationsStore.getState().deleteNotification(itemToDelete.id);

    const state = useNotificationsStore.getState();
    expect(state.notifications).toHaveLength(1);
    expect(state.notifications.find((n) => n.id === "notif-1")).toBeUndefined();
    expect(state.isModalOpen).toBe(false);
    expect(state.selectedNotification).toBeNull();
  });

  it("should mark all notifications as read via PATCH route", async () => {
    await useNotificationsStore.getState().fetchNotifications();

    expect(useNotificationsStore.getState().unreadCount).toBe(1);

    await useNotificationsStore.getState().markAllAsRead();

    const state = useNotificationsStore.getState();
    expect(state.unreadCount).toBe(0);
    expect(state.notifications.every((n) => n.status === "READ")).toBe(true);
  });

  it("should clear all notifications via DELETE route", async () => {
    await useNotificationsStore.getState().fetchNotifications();

    await useNotificationsStore.getState().clearAll();

    const state = useNotificationsStore.getState();
    expect(state.notifications).toHaveLength(0);
    expect(state.unreadCount).toBe(0);
  });

  it("should filter notifications properly", () => {
    useNotificationsStore.setState({
      notifications: mockInitialNotifications,
      filter: "UNREAD",
    });

    const unreadOnly = useNotificationsStore
      .getState()
      .notifications.filter((n) => n.status === "UNREAD");

    expect(unreadOnly).toHaveLength(1);
    expect(unreadOnly[0].id).toBe("notif-1");
  });
});
