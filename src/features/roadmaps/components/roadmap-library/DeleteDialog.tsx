"use client";

import React from "react";
import { AlertTriangle, Loader2 } from "lucide-react";

interface DeleteDialogProps {
  isOpen: boolean;
  roadmapTitle?: string;
  isDeleting?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const DeleteDialog: React.FC<DeleteDialogProps> = ({
  isOpen,
  roadmapTitle,
  isDeleting = false,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius-lg)] p-6 max-w-md w-full shadow-xl space-y-4">
        <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <div>
          <h3 className="text-xl font-display font-bold text-text-primary">Delete Roadmap</h3>
          <p className="text-sm font-sans text-text-secondary mt-1">
            Are you sure you want to permanently delete{" "}
            <span className="text-text-primary font-semibold">{roadmapTitle || "this roadmap"}</span>? This
            action cannot be undone.
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onCancel}
            disabled={isDeleting}
            className="px-4 py-2 text-xs font-display font-semibold bg-surface-muted hover:bg-border-subtle text-text-primary rounded-xl transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isDeleting}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-display font-semibold bg-rose-600 hover:bg-rose-700 text-white rounded-xl transition-colors disabled:opacity-50"
          >
            {isDeleting && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
            {isDeleting ? "Deleting..." : "Delete Permanently"}
          </button>
        </div>
      </div>
    </div>
  );
};
