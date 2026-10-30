"use client";

import { useState } from "react";
import { Bell, CheckCheck, Inbox, Trash2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { NotificationItem } from "./notification-item";
import { useNotificationsStore } from "@/store/notifications.store";
import { cn } from "@/lib/utils";

export function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    notifications,
    unreadCount,
    filter,
    setFilter,
    openNotification,
    markAllAsRead,
    clearAll,
  } = useNotificationsStore();

  const filteredNotifications = notifications.filter((item) => {
    if (filter === "UNREAD") return item.status === "UNREAD";
    return true;
  });

  const displayCount = unreadCount > 99 ? "99+" : unreadCount;

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={`Notifications (${unreadCount} unread)`}
          className="relative p-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-secondary dark:hover:bg-neutral-800 transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Bell className="w-5 h-5 transition-transform duration-200 active:scale-95" />

          {/* Red unread badge on the top right per requirement and UI screenshot */}
          {unreadCount > 0 && (
            <span
              className="absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] px-1 items-center justify-center rounded-full bg-[#E5253A] text-white text-[11px] font-bold shadow-sm ring-2 ring-background transition-transform animate-in zoom-in-50 leading-none select-none"
            >
              {displayCount}
            </span>
          )}
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        sideOffset={8}
        className="w-[360px] sm:w-[400px] p-0 bg-white dark:bg-[#111111] border border-border shadow-2xl rounded-2xl overflow-hidden z-[100]"
      >
        {/* Header */}
        <div className="p-4 border-b border-border/60 bg-muted/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-display font-semibold text-sm text-foreground">
              Notifications
            </h3>
            {unreadCount > 0 && (
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#E83043]/15 text-[#E83043] dark:bg-[#E83043]/20 dark:text-[#F7A49E]">
                {unreadCount} new
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            {unreadCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => markAllAsRead()}
                className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground"
                title="Mark all as read"
              >
                <CheckCheck className="w-3.5 h-3.5 mr-1 text-primary" />
                <span>Mark read</span>
              </Button>
            )}

            {notifications.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => clearAll()}
                className="h-7 w-7 p-0 text-xs text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                title="Clear all notifications"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </Button>
            )}
          </div>
        </div>

        {/* Filter Pills ("All" vs "Unread") */}
        <div className="px-4 py-2 border-b border-border/40 flex items-center gap-2 bg-background/50">
          <button
            type="button"
            onClick={() => setFilter("ALL")}
            className={cn(
              "text-xs px-2.5 py-1 rounded-full font-medium transition-colors",
              filter === "ALL"
                ? "bg-foreground text-background font-semibold"
                : "text-muted-foreground hover:bg-secondary dark:hover:bg-neutral-800"
            )}
          >
            All ({notifications.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("UNREAD")}
            className={cn(
              "text-xs px-2.5 py-1 rounded-full font-medium transition-colors",
              filter === "UNREAD"
                ? "bg-foreground text-background font-semibold"
                : "text-muted-foreground hover:bg-secondary dark:hover:bg-neutral-800"
            )}
          >
            Unread ({unreadCount})
          </button>
        </div>

        {/* Scrollable Notifications List */}
        <div className="max-h-[380px] overflow-y-auto divide-y divide-border/30">
          {filteredNotifications.length === 0 ? (
            <div className="py-12 px-4 text-center flex flex-col items-center justify-center gap-2 text-muted-foreground">
              <div className="w-10 h-10 rounded-full bg-muted/60 flex items-center justify-center">
                <Inbox className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium text-foreground">No notifications</p>
              <p className="text-xs max-w-[220px]">
                {filter === "UNREAD"
                  ? "You have caught up with all your unread notifications."
                  : "We will notify you when your AI resumes, roadmaps, or assessments are ready."}
              </p>
            </div>
          ) : (
            filteredNotifications.map((item) => (
              <NotificationItem
                key={item.id}
                notification={item}
                onClick={() => {
                  setIsOpen(false);
                  openNotification(item);
                }}
              />
            ))
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
