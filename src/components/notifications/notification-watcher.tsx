"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useNotificationsStore } from "@/store/notifications.store";
import { NotificationItemData } from "@/features/notifications/types";
import { NotificationDetailModal } from "./notification-detail-modal";

interface NotificationWatcherProps {
  initialNotifications?: NotificationItemData[];
  initialUnreadCount?: number;
}

const FIVE_MINUTES_MS = 5 * 60 * 1000;

export function NotificationWatcher({
  initialNotifications,
  initialUnreadCount,
}: NotificationWatcherProps) {
  const router = useRouter();
  const hydrate = useNotificationsStore((state) => state.hydrate);
  const receive = useNotificationsStore((state) => state.receive);
  const markReadLocally = useNotificationsStore((state) => state.markReadLocally);
  const markAllReadLocally = useNotificationsStore((state) => state.markAllReadLocally);
  const fetchNotifications = useNotificationsStore((state) => state.fetchNotifications);

  const eventSourceRef = useRef<EventSource | null>(null);
  const latestCreatedAtRef = useRef<string | null>(null);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const reconnectTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isIdleRef = useRef<boolean>(false);
  const isHydratedRef = useRef<boolean>(false);

  // 1. SSR Hydration (Runs once on mount with zero network requests)
  useEffect(() => {
    if (!isHydratedRef.current) {
      isHydratedRef.current = true;
      if (initialNotifications !== undefined) {
        hydrate(initialNotifications, initialUnreadCount ?? 0);
        if (initialNotifications.length > 0) {
          latestCreatedAtRef.current = new Date(initialNotifications[0].createdAt).toISOString();
        }
      } else {
        // Fallback for non-SSR routes: single initial fetch
        fetchNotifications().then(() => {
          const items = useNotificationsStore.getState().notifications;
          if (items.length > 0) {
            latestCreatedAtRef.current = new Date(items[0].createdAt).toISOString();
          }
        });
      }
    }
  }, [hydrate, fetchNotifications, initialNotifications, initialUnreadCount]);

  // 2. Realtime SSE Connection (Native EventSource via Ably SSE edge protocol)
  useEffect(() => {
    let isMounted = true;

    const connectSSE = async () => {
      try {
        const tokenRes = await fetch("/api/realtime/token", { method: "POST" });
        if (!tokenRes.ok) {
          if (tokenRes.status === 401) {
            console.warn("[NotificationWatcher] Unauthorized (401); stopping realtime reconnect.");
            return;
          }
          console.warn(`[NotificationWatcher] Token fetch returned HTTP ${tokenRes.status}`);
          return;
        }

        const data = await tokenRes.json();
        const token = data.token;
        const channelName = data.channelName;

        if (!isMounted || !token || !channelName) return;

        // Connect directly to Ably's global SSE streaming endpoint with scoped token
        const sseUrl = `https://realtime.ably.io/sse?v=1.2&channels=${encodeURIComponent(
          channelName
        )}&accessToken=${encodeURIComponent(token)}&rewind=1`;

        const es = new EventSource(sseUrl);
        eventSourceRef.current = es;

        es.onmessage = (event) => {
          if (!isMounted || !event.data) return;

          try {
            const parsed = JSON.parse(event.data);
            const eventName = parsed.name;
            const eventData =
              typeof parsed.data === "string" ? JSON.parse(parsed.data) : parsed.data;

            if (eventName === "notification" && eventData) {
              const notification = eventData as NotificationItemData;
              receive(notification);

              if (notification.createdAt) {
                latestCreatedAtRef.current = new Date(notification.createdAt).toISOString();
              }

              toast.info(notification.title, {
                description: notification.message,
                duration: 8000,
                skipDb: true,
                action: notification.actionUrl
                  ? {
                      label: "View",
                      onClick: () => router.push(notification.actionUrl!),
                    }
                  : undefined,
              } as any);
            } else if (eventName === "read" && eventData?.id) {
              markReadLocally(eventData.id);
            } else if (eventName === "read-all") {
              markAllReadLocally();
            }
          } catch (err) {
            console.warn("[NotificationWatcher] Error parsing realtime event:", err);
          }
        };

        es.onerror = () => {
          if (!isMounted) return;
          // Tokens expire after 1 hour or connection was dropped.
          // Close stale EventSource and reconnect with fresh token.
          es.close();
          eventSourceRef.current = null;

          if (!isIdleRef.current) {
            reconnectTimerRef.current = setTimeout(() => {
              if (isMounted && !isIdleRef.current) {
                connectSSE();
              }
            }, 3000);
          }
        };
      } catch (err) {
        console.warn("[NotificationWatcher] SSE initialization failed:", err);
      }
    };

    connectSSE();

    // 3. Idle Teardown & Recovery on Visibility Change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Disconnect after 5 minutes hidden to save connection quotas
        idleTimerRef.current = setTimeout(() => {
          if (document.hidden && eventSourceRef.current) {
            isIdleRef.current = true;
            eventSourceRef.current.close();
            eventSourceRef.current = null;
          }
        }, FIVE_MINUTES_MS);
      } else {
        if (idleTimerRef.current) {
          clearTimeout(idleTimerRef.current);
          idleTimerRef.current = null;
        }

        // Reconnect if closed during idle
        if (isIdleRef.current) {
          isIdleRef.current = false;
          connectSSE();

          // One-time gap recovery query after visibility resume
          if (latestCreatedAtRef.current) {
            fetchNotifications(latestCreatedAtRef.current);
          }
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isMounted = false;
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }

      if (reconnectTimerRef.current) {
        clearTimeout(reconnectTimerRef.current);
      }

      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        eventSourceRef.current = null;
      }
    };
  }, [receive, markReadLocally, markAllReadLocally, fetchNotifications, router]);

  return <NotificationDetailModal />;
}
