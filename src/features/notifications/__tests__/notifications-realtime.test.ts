import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { useNotificationsStore } from "@/store/notifications.store";
import { NotificationItemData } from "../types";

describe("Notifications Store - Realtime, Dedupe & Merge", () => {
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

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should hydrate initial notifications without network request", () => {
    const mockItems: NotificationItemData[] = [
      {
        id: "notif-1",
        userId: "u-1",
        title: "Test",
        message: "Message",
        type: "SYSTEM",
        status: "UNREAD",
        actionUrl: null,
        createdAt: new Date(),
        readAt: null,
      },
    ];

    useNotificationsStore.getState().hydrate(mockItems, 1);

    const state = useNotificationsStore.getState();
    expect(state.notifications).toHaveLength(1);
    expect(state.unreadCount).toBe(1);
  });

  it("should receive a notification and increment unread count", () => {
    const item: NotificationItemData = {
      id: "notif-new",
      userId: "u-1",
      title: "Realtime Notification",
      message: "Delivered via Ably",
      type: "CAREER_ASSESSMENT",
      status: "UNREAD",
      actionUrl: "/dashboard",
      createdAt: new Date(),
      readAt: null,
    };

    useNotificationsStore.getState().receive(item);

    const state = useNotificationsStore.getState();
    expect(state.notifications).toHaveLength(1);
    expect(state.notifications[0].id).toBe("notif-new");
    expect(state.unreadCount).toBe(1);
  });

  it("should deduplicate incoming notifications by ID", () => {
    const item: NotificationItemData = {
      id: "notif-dup",
      userId: "u-1",
      title: "Duplicate",
      message: "Testing dedupe",
      type: "SYSTEM",
      status: "UNREAD",
      actionUrl: null,
      createdAt: new Date(),
      readAt: null,
    };

    // Receive first time
    useNotificationsStore.getState().receive(item);
    expect(useNotificationsStore.getState().notifications).toHaveLength(1);
    expect(useNotificationsStore.getState().unreadCount).toBe(1);

    // Receive second time with same ID
    useNotificationsStore.getState().receive(item);
    expect(useNotificationsStore.getState().notifications).toHaveLength(1);
    expect(useNotificationsStore.getState().unreadCount).toBe(1);
  });

  it("should deduplicate incoming notifications by idempotencyKey", () => {
    const itemA: NotificationItemData = {
      id: "notif-first",
      userId: "u-1",
      title: "Task Done",
      message: "Done",
      type: "RESUME",
      status: "UNREAD",
      actionUrl: null,
      idempotencyKey: "job:123:completed",
      createdAt: new Date(),
      readAt: null,
    };

    const itemB: NotificationItemData = {
      id: "notif-retry",
      userId: "u-1",
      title: "Task Done (Retry)",
      message: "Done retry",
      type: "RESUME",
      status: "UNREAD",
      actionUrl: null,
      idempotencyKey: "job:123:completed",
      createdAt: new Date(),
      readAt: null,
    };

    useNotificationsStore.getState().receive(itemA);
    expect(useNotificationsStore.getState().notifications).toHaveLength(1);

    useNotificationsStore.getState().receive(itemB);
    expect(useNotificationsStore.getState().notifications).toHaveLength(1);
    expect(useNotificationsStore.getState().notifications[0].idempotencyKey).toBe("job:123:completed");
  });

  it("should cap notification list at 50 items when receiving stream", () => {
    for (let i = 0; i < 60; i++) {
      useNotificationsStore.getState().receive({
        id: `notif-${i}`,
        userId: "u-1",
        title: `Notif ${i}`,
        message: `Msg ${i}`,
        type: "SYSTEM",
        status: "READ",
        actionUrl: null,
        createdAt: new Date(Date.now() + i * 1000),
        readAt: new Date(),
      });
    }

    expect(useNotificationsStore.getState().notifications).toHaveLength(50);
  });

  it("should sync read status across tabs via markReadLocally", () => {
    useNotificationsStore.getState().hydrate(
      [
        {
          id: "tab-sync-1",
          userId: "u-1",
          title: "Cross Tab",
          message: "Read test",
          type: "SYSTEM",
          status: "UNREAD",
          actionUrl: null,
          createdAt: new Date(),
          readAt: null,
        },
      ],
      1
    );

    expect(useNotificationsStore.getState().unreadCount).toBe(1);

    useNotificationsStore.getState().markReadLocally("tab-sync-1");

    const state = useNotificationsStore.getState();
    expect(state.unreadCount).toBe(0);
    expect(state.notifications[0].status).toBe("READ");
  });

  it("should sync mark-all-read across tabs via markAllReadLocally", () => {
    useNotificationsStore.getState().hydrate(
      [
        {
          id: "sync-all-1",
          userId: "u-1",
          title: "T1",
          message: "M1",
          type: "SYSTEM",
          status: "UNREAD",
          actionUrl: null,
          createdAt: new Date(),
          readAt: null,
        },
        {
          id: "sync-all-2",
          userId: "u-1",
          title: "T2",
          message: "M2",
          type: "SYSTEM",
          status: "UNREAD",
          actionUrl: null,
          createdAt: new Date(),
          readAt: null,
        },
      ],
      2
    );

    expect(useNotificationsStore.getState().unreadCount).toBe(2);

    useNotificationsStore.getState().markAllReadLocally();

    const state = useNotificationsStore.getState();
    expect(state.unreadCount).toBe(0);
    expect(state.notifications.every((n) => n.status === "READ")).toBe(true);
  });

  it("should merge gap recovery notifications on fetchNotifications(since)", async () => {
    const existing: NotificationItemData = {
      id: "older-1",
      userId: "u-1",
      title: "Older",
      message: "Before disconnect",
      type: "SYSTEM",
      status: "READ",
      actionUrl: null,
      createdAt: new Date(1000),
      readAt: new Date(),
    };

    useNotificationsStore.getState().hydrate([existing], 0);

    const newer: NotificationItemData = {
      id: "newer-1",
      userId: "u-1",
      title: "Newer",
      message: "During disconnect",
      type: "SYSTEM",
      status: "UNREAD",
      actionUrl: null,
      createdAt: new Date(2000),
      readAt: null,
    };

    // Mock fetch for gap recovery query
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        notifications: [newer],
        unreadCount: 1,
      }),
    } as any);

    await useNotificationsStore.getState().fetchNotifications(new Date(1000).toISOString());

    const state = useNotificationsStore.getState();
    expect(state.notifications).toHaveLength(2);
    expect(state.notifications[0].id).toBe("newer-1");
    expect(state.notifications[1].id).toBe("older-1");
    expect(state.unreadCount).toBe(1);
  });
});
