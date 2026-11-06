"use client";

import { useEffect, useRef } from "react";
import { useNotificationsStore } from "@/store/notifications.store";
import { NotificationDetailModal } from "./notification-detail-modal";

export function NotificationWatcher() {
  const fetchNotifications = useNotificationsStore(
    (state) => state.fetchNotifications
  );
  const lastFocusFetchRef = useRef<number>(Date.now());

  useEffect(() => {
    // Initial fetch on mount
    fetchNotifications();

    // Periodic refresh every 30 seconds
    const interval = setInterval(() => {
      fetchNotifications();
    }, 30000);

    // Throttle window focus revalidation to at most once every 60 seconds
    const handleFocus = () => {
      const now = Date.now();
      if (now - lastFocusFetchRef.current >= 60000) {
        lastFocusFetchRef.current = now;
        fetchNotifications();
      }
    };
    window.addEventListener("focus", handleFocus);

    return () => {
      clearInterval(interval);
      window.removeEventListener("focus", handleFocus);
    };
  }, [fetchNotifications]);

  return <NotificationDetailModal />;
}
