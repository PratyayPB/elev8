import { NotificationType } from "@/features/notifications/types";
import { useNotificationsStore } from "@/store/notifications.store";

export interface ToastSyncPayload {
  title: string;
  message?: string;
  type?: NotificationType;
  actionUrl?: string | null;
  idempotencyKey?: string | null;
  skipDb?: boolean;
}

const STORAGE_QUEUE_KEY = "elev8_toast_sync_queue";

// In-memory queue for resilience during session
let memoryQueue: ToastSyncPayload[] = [];
let isProcessingQueue = false;

/**
 * Infer the NotificationType from the title or message content if not explicitly provided.
 */
export function inferNotificationType(text: string): NotificationType {
  const lower = text.toLowerCase();
  if (lower.includes("roadmap")) return "ROADMAP";
  if (lower.includes("interview") || lower.includes("practice")) return "INTERVIEW";
  if (lower.includes("resume") || lower.includes("ats")) return "RESUME";
  if (lower.includes("assessment") || lower.includes("career")) return "CAREER_ASSESSMENT";
  return "SYSTEM";
}

/**
 * Persist queue to sessionStorage so items survive fast reloads
 */
function saveQueue() {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_QUEUE_KEY, JSON.stringify(memoryQueue));
  } catch {
    // Ignore storage quota or disabled storage
  }
}

/**
 * Load queued items from sessionStorage on initial hydration
 */
function loadQueue() {
  if (typeof window === "undefined") return;
  try {
    const raw = sessionStorage.getItem(STORAGE_QUEUE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        memoryQueue = [...parsed, ...memoryQueue];
      }
    }
  } catch {
    // Ignore parse error
  }
}

/**
 * Process any pending offline or delayed toast notifications
 */
export async function processToastQueue(): Promise<void> {
  if (typeof window === "undefined" || isProcessingQueue || memoryQueue.length === 0) {
    return;
  }

  isProcessingQueue = true;
  const remaining: ToastSyncPayload[] = [];

  for (const item of memoryQueue) {
    try {
      const res = await fetch("/api/notifications/log-toast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
        keepalive: true,
      });

      if (res.ok) {
        const json = await res.json().catch(() => null);
        if (json?.success && json?.data) {
          useNotificationsStore.getState().addNotificationLocally(json.data);
        }
      } else if (res.status === 401) {
        // User is unauthenticated (e.g. public page); discard to avoid infinite retry
      } else {
        remaining.push(item);
      }
    } catch {
      remaining.push(item);
    }
  }

  memoryQueue = remaining;
  saveQueue();
  isProcessingQueue = false;
}

// Attach listener once in browser environment
if (typeof window !== "undefined") {
  loadQueue();
  window.addEventListener("online", () => {
    processToastQueue().catch(() => {});
  });
}

/**
 * Primary sync function: sends toast notification to database with keepalive: true,
 * ensuring delivery even if the user immediately navigates or refreshes the page.
 */
export async function syncToastToDatabase(payload: ToastSyncPayload): Promise<void> {
  if (payload.skipDb || typeof window === "undefined") {
    return;
  }

  const cleanTitle = (payload.title || "").trim();
  if (!cleanTitle) return;

  const resolvedType = payload.type || inferNotificationType(`${cleanTitle} ${payload.message || ""}`);

  const itemToSync: ToastSyncPayload = {
    title: cleanTitle,
    message: payload.message || cleanTitle,
    type: resolvedType,
    actionUrl: payload.actionUrl || null,
    idempotencyKey: payload.idempotencyKey || null,
  };

  try {
    const res = await fetch("/api/notifications/log-toast", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemToSync),
      keepalive: true,
    });

    if (res.ok) {
      const json = await res.json().catch(() => null);
      if (json?.success && json?.data) {
        useNotificationsStore.getState().addNotificationLocally(json.data);
      }
    } else if (res.status === 401) {
      // Unauthenticated, skip storing
    } else {
      // Server error or unexpected response: queue for retry
      memoryQueue.push(itemToSync);
      saveQueue();
    }
  } catch {
    // Network failure (offline, timeout, etc.): queue for retry
    memoryQueue.push(itemToSync);
    saveQueue();
  }
}
