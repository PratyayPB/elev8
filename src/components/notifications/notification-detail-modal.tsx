"use client";

import { useNotificationsStore } from "@/store/notifications.store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, ExternalLink, Calendar, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function formatFullDate(date: Date | string | null | undefined): string {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function getTypeBadgeStyle(type: string) {
  switch (type) {
    case "CAREER_ASSESSMENT":
      return "bg-[#84E6F6]/20 text-[#0f5c69] dark:bg-[#84E6F6]/15 dark:text-[#84E6F6] border-[#84E6F6]/30 dark:border-[#84E6F6]/40";
    case "ROADMAP":
      return "bg-[#FECD1A]/20 text-[#7a6003] dark:bg-[#FECD1A]/15 dark:text-[#FECD1A] border-[#FECD1A]/30 dark:border-[#FECD1A]/40";
    case "RESUME":
      return "bg-[#F7A49E]/20 text-[#782824] dark:bg-[#F7A49E]/15 dark:text-[#F7A49E] border-[#F7A49E]/30 dark:border-[#F7A49E]/40";
    case "INTERVIEW":
      return "bg-emerald-500/20 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400 border-emerald-500/30 dark:border-emerald-500/40";
    case "SYSTEM":
    default:
      return "bg-primary/10 text-primary dark:bg-white/10 dark:text-white border-primary/20 dark:border-white/20";
  }
}

export function NotificationDetailModal() {
  const router = useRouter();
  const {
    isModalOpen,
    selectedNotification,
    closeModal,
    deleteNotification,
  } = useNotificationsStore();

  const [isDeleting, setIsDeleting] = useState(false);

  if (!selectedNotification) {
    return null;
  }

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await deleteNotification(selectedNotification.id);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleAction = () => {
    if (selectedNotification.actionUrl) {
      closeModal();
      router.push(selectedNotification.actionUrl);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-[520px] p-6 bg-white dark:bg-[#161616] border border-border dark:border-white/10 shadow-2xl rounded-2xl">
        <DialogHeader className="space-y-3 text-left">
          <div className="flex items-center justify-between gap-3">
            <Badge
              variant="outline"
              className={`text-xs px-2.5 py-0.5 font-semibold rounded-full ${getTypeBadgeStyle(
                selectedNotification.type
              )}`}
            >
              {selectedNotification.type.replace(/_/g, " ")}
            </Badge>

            <div className="flex items-center gap-1.5 text-xs text-muted-foreground dark:text-zinc-300">
              <Calendar className="w-3.5 h-3.5 text-muted-foreground dark:text-zinc-400" />
              <span>{formatFullDate(selectedNotification.createdAt)}</span>
            </div>
          </div>

          <DialogTitle className="text-lg font-display font-bold text-foreground dark:text-zinc-100 tracking-tight leading-snug">
            {selectedNotification.title}
          </DialogTitle>
        </DialogHeader>

        {/* Full Notification Content */}
        <div className="my-4 py-3.5 px-4 rounded-xl bg-muted/40 dark:bg-[#202020] border border-border/50 dark:border-white/10 text-sm leading-relaxed text-foreground/90 dark:text-zinc-200 whitespace-pre-wrap break-words max-h-[300px] overflow-y-auto">
          {selectedNotification.message}
        </div>

        <DialogFooter className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-3 border-t border-border/50 dark:border-white/10 sm:space-x-0">
          {/* Delete Button (Option to delete the notification from the database) */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleDelete}
            disabled={isDeleting}
            className="w-full sm:w-auto text-destructive dark:text-red-400 hover:bg-destructive/10 dark:hover:bg-red-950/40 hover:text-destructive dark:hover:text-red-300 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
            <span>{isDeleting ? "Deleting..." : "Delete"}</span>
          </Button>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {/* Close Button */}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={closeModal}
              className="w-full sm:w-auto rounded-xl dark:bg-[#242424] dark:border-white/10 dark:text-zinc-200 dark:hover:bg-[#2c2c2c] dark:hover:text-white cursor-pointer"
            >
              Close
            </Button>

            {/* Optional CTA Navigation if actionUrl exists */}
            {selectedNotification.actionUrl && (
              <Button
                type="button"
                size="sm"
                onClick={handleAction}
                className="w-full sm:w-auto rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-neutral-100 flex items-center gap-1.5 cursor-pointer font-semibold shadow-xs"
              >
                <span>View</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
