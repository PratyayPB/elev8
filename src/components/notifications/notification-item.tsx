"use client";

import { NotificationItemData, NotificationType } from "@/features/notifications/types";
import { cn } from "@/lib/utils";
import { Target, Map, FileText, Mic, Sparkles, Bell } from "lucide-react";
import React from "react";

interface NotificationItemProps {
  notification: NotificationItemData;
  onClick: () => void;
}

function formatRelativeTime(date: Date | string): string {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (diffInSeconds < 60) return "Just now";
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d ago`;
  return past.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function getTypeIcon(type: NotificationType) {
  switch (type) {
    case "CAREER_ASSESSMENT":
      return <Target className="w-4 h-4 text-[#84E6F6]" />;
    case "ROADMAP":
      return <Map className="w-4 h-4 text-[#FECD1A]" />;
    case "RESUME":
      return <FileText className="w-4 h-4 text-[#F7A49E]" />;
    case "INTERVIEW":
      return <Mic className="w-4 h-4 text-emerald-500" />;
    case "SYSTEM":
    default:
      return <Sparkles className="w-4 h-4 text-primary" />;
  }
}

export function NotificationItem({ notification, onClick }: NotificationItemProps) {
  const isUnread = notification.status === "UNREAD";

  // Truncate message to ~60 characters followed by '...'
  const truncatedMessage =
    notification.message.length > 60
      ? `${notification.message.slice(0, 60)}...`
      : notification.message;

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "w-full text-left p-3.5 transition-colors border-b border-border/50 last:border-b-0 flex items-start gap-3 relative group focus-visible:outline-none focus-visible:bg-secondary/40",
        isUnread
          ? "bg-primary/[0.03] hover:bg-primary/[0.07] dark:bg-primary/[0.05] dark:hover:bg-primary/[0.10]"
          : "hover:bg-muted/50 dark:hover:bg-neutral-800/40"
      )}
    >
      {/* Category Icon Surface */}
      <div
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-border/60",
          isUnread
            ? "bg-background shadow-xs ring-1 ring-primary/20"
            : "bg-muted/70 opacity-80"
        )}
      >
        {getTypeIcon(notification.type)}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pr-1">
        <div className="flex items-center justify-between gap-2 mb-0.5">
          {/* Title: Unread is darker (black in light mode / white in dark mode), Read is lighter (grey) */}
          <h4
            className={cn(
              "text-sm truncate transition-colors",
              isUnread
                ? "font-semibold text-black dark:text-white"
                : "font-normal text-[#605F5F] dark:text-[#999999]"
            )}
          >
            {notification.title}
          </h4>
          <span className="text-[11px] text-muted-foreground whitespace-nowrap shrink-0">
            {formatRelativeTime(notification.createdAt)}
          </span>
        </div>

        {/* Message preview truncated with '...' */}
        <p
          className={cn(
            "text-xs line-clamp-1 break-words transition-colors",
            isUnread
              ? "text-[#1A1A1A] dark:text-neutral-200 font-medium"
              : "text-[#737373] dark:text-neutral-400 font-normal"
          )}
        >
          {truncatedMessage}
        </p>
      </div>

      {/* Unread indicator dot */}
      {isUnread && (
        <span
          className="w-2 h-2 rounded-full bg-[#E83043] shrink-0 mt-2 self-center animate-pulse"
          title="Unread"
        />
      )}
    </button>
  );
}
