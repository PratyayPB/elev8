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
      return "bg-[#84E6F6]/20 text-[#0f5c69] dark:text-[#84E6F6] border-[#84E6F6]/30";
    case "ROADMAP":
      return "bg-[#FECD1A]/20 text-[#7a6003] dark:text-[#FECD1A] border-[#FECD1A]/30";
    case "RESUME":
      return "bg-[#F7A49E]/20 text-[#782824] dark:text-[#F7A49E] border-[#F7A49E]/30";
    case "INTERVIEW":
      return "bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-500/30";
    case "SYSTEM":
    default:
      return "bg-primary/10 text-primary border-primary/20";
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
      <DialogContent className="sm:max-w-[520px] p-6 bg-white dark:bg-[#111111] border border-border shadow-2xl rounded-2xl">
        <DialogHeader className="space-y-3 text-left">
          <div className="flex items-center justify-between gap-3">
            <Badge
              variant="outline"
              className={`text-xs px-2.5 py-0.5 font-medium rounded-full ${getTypeBadgeStyle(
                selectedNotification.type
              )}`}
            >
              {selectedNotification.type.replace(/_/g, " ")}
            </Badge>

            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formatFullDate(selectedNotification.createdAt)}</span>
            </div>
          </div>

          <DialogTitle className="text-lg font-display font-semibold text-foreground tracking-tight leading-snug">
            {selectedNotification.title}
          </DialogTitle>
        </DialogHeader>

        {/* Full Notification Content */}
        <div className="my-4 py-3 px-4 rounded-xl bg-muted/40 dark:bg-neutral-900/60 border border-border/50 text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap break-words max-h-[300px] overflow-y-auto">
          {selectedNotification.message}
        </div>

        <DialogFooter className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-2 border-t border-border/50 sm:space-x-0">
          {/* Delete Button (Option to delete the notification from the database) */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleDelete}
            disabled={isDeleting}
            className="w-full sm:w-auto text-destructive hover:bg-destructive/10 hover:text-destructive flex items-center justify-center gap-1.5 transition-colors"
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
              className="w-full sm:w-auto rounded-lg"
            >
              Close
            </Button>

            {/* Optional CTA Navigation if actionUrl exists */}
            {selectedNotification.actionUrl && (
              <Button
                type="button"
                size="sm"
                onClick={handleAction}
                className="w-full sm:w-auto rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-1.5"
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
