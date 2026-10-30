"use client";

import { useEffect, useRef } from "react";
import { useNotificationsStore } from "@/store/notifications.store";
import { NotificationDetailModal } from "./notification-detail-modal";

export function NotificationWatcher() {
  const fetchNotifications = useNotificationsStore(
    (state) => state.fetchNotifications
  );
  const isInitialRef = useRef(true);

  useEffect(() => {
    // Initial fetch on mount
    fetchNotifications();

    // Periodic refresh every 30 seconds
    const interval = setInterval(() => {
      fetchNotifications();
    }, 30000);

    // Revalidate when user returns to the tab
    const handleFocus = () => {
      fetchNotifications();
    };
    window.addEventListener("focus", handleFocus);

    return () => {
      clearInterval(interval);
      window.removeEventListener("focus", handleFocus);
    };
  }, [fetchNotifications]);

  return <NotificationDetailModal />;
}
