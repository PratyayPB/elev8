import { describe, it, expect, beforeEach, vi } from "vitest";
import { useNotificationsStore } from "@/store/notifications.store";
import { NotificationItemData } from "../types";

vi.mock("@/features/notifications/actions", () => ({
  getNotificationsAction: vi.fn().mockResolvedValue({
    success: true,
    data: {
      notifications: [
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
      ],
      unreadCount: 1,
    },
  }),
  markNotificationAsReadAction: vi.fn().mockResolvedValue({ success: true, data: { status: "READ" } }),
  markAllNotificationsAsReadAction: vi.fn().mockResolvedValue({ success: true, data: { updatedCount: 1 } }),
  deleteNotificationAction: vi.fn().mockResolvedValue({ success: true, data: { success: true } }),
  clearAllNotificationsAction: vi.fn().mockResolvedValue({ success: true, data: { deletedCount: 2 } }),
}));

vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

describe("Notifications Store & Features", () => {
  beforeEach(() => {
    useNotificationsStore.setState({
      notifications: [],
      unreadCount: 0,
      isLoading: false,
      filter: "ALL",
      selectedNotification: null,
      isModalOpen: false,
    });
  });

  it("should fetch notifications and populate initial state", async () => {
    await useNotificationsStore.getState().fetchNotifications();

    const state = useNotificationsStore.getState();
    expect(state.notifications).toHaveLength(2);
    expect(state.unreadCount).toBe(1);
    expect(state.isLoading).toBe(false);
  });

  it("should open notification in modal and transition UNREAD status to READ", async () => {
    await useNotificationsStore.getState().fetchNotifications();

    const unreadItem = useNotificationsStore.getState().notifications[0];
    expect(unreadItem.status).toBe("UNREAD");

    await useNotificationsStore.getState().openNotification(unreadItem);

    const state = useNotificationsStore.getState();
    expect(state.isModalOpen).toBe(true);
    expect(state.selectedNotification?.id).toBe("notif-1");
    expect(state.selectedNotification?.status).toBe("READ");
    expect(state.unreadCount).toBe(0); // Decremented from 1 to 0
    expect(state.notifications[0].status).toBe("READ");
  });

  it("should delete a notification and remove it from the list and close modal", async () => {
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

  it("should mark all notifications as read", async () => {
    await useNotificationsStore.getState().fetchNotifications();

    expect(useNotificationsStore.getState().unreadCount).toBe(1);

    await useNotificationsStore.getState().markAllAsRead();

    const state = useNotificationsStore.getState();
    expect(state.unreadCount).toBe(0);
    expect(state.notifications.every((n) => n.status === "READ")).toBe(true);
  });

  it("should clear all notifications", async () => {
    await useNotificationsStore.getState().fetchNotifications();

    await useNotificationsStore.getState().clearAll();

    const state = useNotificationsStore.getState();
    expect(state.notifications).toHaveLength(0);
    expect(state.unreadCount).toBe(0);
  });

  it("should filter notifications properly", () => {
    const mockList: NotificationItemData[] = [
      {
        id: "1",
        userId: "u",
        title: "T1",
        message: "M1",
        type: "SYSTEM",
        status: "UNREAD",
        actionUrl: null,
        createdAt: new Date(),
        readAt: null,
      },
      {
        id: "2",
        userId: "u",
        title: "T2",
        message: "M2",
        type: "SYSTEM",
        status: "READ",
        actionUrl: null,
        createdAt: new Date(),
        readAt: new Date(),
      },
    ];

    useNotificationsStore.setState({ notifications: mockList, filter: "UNREAD" });
    const unreadOnly = useNotificationsStore
      .getState()
      .notifications.filter((n) => n.status === "UNREAD");

    expect(unreadOnly).toHaveLength(1);
    expect(unreadOnly[0].id).toBe("1");
  });
});
