"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import * as Ably from "ably";
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

  const ablyClientRef = useRef<Ably.Realtime | null>(null);
  const channelRef = useRef<Ably.RealtimeChannel | null>(null);
  const latestCreatedAtRef = useRef<string | null>(null);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
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

  // 2. Ably Realtime Connection & Push Handler
  useEffect(() => {
    let isMounted = true;
    let targetChannelName: string | null = null;

    const client = new Ably.Realtime({
      autoConnect: true,
      authCallback: async (_data, callback) => {
        try {
          const res = await fetch("/api/realtime/token", { method: "POST" });
          if (!res.ok) {
            if (res.status === 401) {
              // Authentication lost; abort reconnecting
              console.warn("[NotificationWatcher] Unauthorized (401); stopping realtime reconnect.");
              callback("Unauthorized", null);
              return;
            }
            callback(`Failed to mint realtime token (HTTP ${res.status})`, null);
            return;
          }

          const json = await res.json();
          if (json.channelName) {
            targetChannelName = json.channelName;
          }
          callback(null, json.tokenRequest);
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : "Auth callback failed";
          callback(message, null);
        }
      },
    });

    ablyClientRef.current = client;

    // Handle connection state changes for gap recovery
    client.connection.on("connected", () => {
      if (!isMounted) return;

      // Subscribe to channel once connected
      const channelName = targetChannelName || `notifications:user:me`;
      if (!channelRef.current || channelRef.current.name !== channelName) {
        const channel = client.channels.get(channelName);
        channelRef.current = channel;

        // Subscribe to incoming notifications
        channel.subscribe("notification", (msg) => {
          if (!isMounted || !msg.data) return;
          const notification = msg.data as NotificationItemData;

          // Dedupe and insert into store
          receive(notification);

          if (notification.createdAt) {
            latestCreatedAtRef.current = new Date(notification.createdAt).toISOString();
          }

          // Trigger toast with action button
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
        });

        // Cross-tab sync: mark single read
        channel.subscribe("read", (msg) => {
          if (!isMounted || !msg.data?.id) return;
          markReadLocally(msg.data.id);
        });

        // Cross-tab sync: mark all read
        channel.subscribe("read-all", () => {
          if (!isMounted) return;
          markAllReadLocally();
        });
      }

      // If recovering from a disconnect or idle sleep, perform a single gap recovery fetch
      if (isIdleRef.current && latestCreatedAtRef.current) {
        isIdleRef.current = false;
        fetchNotifications(latestCreatedAtRef.current);
      }
    });

    // 3. Idle Teardown & Recovery on Visibility Change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Disconnect after 5 minutes hidden to save connection quotas
        idleTimerRef.current = setTimeout(() => {
          if (document.hidden && ablyClientRef.current) {
            isIdleRef.current = true;
            ablyClientRef.current.connection.close();
          }
        }, FIVE_MINUTES_MS);
      } else {
        // Clear idle disconnect timer if user returns before 5 minutes
        if (idleTimerRef.current) {
          clearTimeout(idleTimerRef.current);
          idleTimerRef.current = null;
        }

        // Reconnect if was closed during idle
        if (isIdleRef.current && ablyClientRef.current) {
          ablyClientRef.current.connection.connect();
          // One-time gap recovery after visibility resume
          if (latestCreatedAtRef.current) {
            fetchNotifications(latestCreatedAtRef.current);
          }
          isIdleRef.current = false;
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

      if (channelRef.current) {
        channelRef.current.unsubscribe();
        channelRef.current = null;
      }

      if (ablyClientRef.current) {
        ablyClientRef.current.close();
        ablyClientRef.current = null;
      }
    };
  }, [receive, markReadLocally, markAllReadLocally, fetchNotifications, router]);

  return <NotificationDetailModal />;
}
