import * as Ably from "ably";
import { NotificationTransport, RealtimeNotificationEvent } from "./transport";

declare global {
  // eslint-disable-next-line no-var
  var __ablyRestInstance: Ably.Rest | undefined;
}

export class AblyNotificationTransport implements NotificationTransport {
  private client: Ably.Rest | null = null;
  private warnedMissingKey = false;

  constructor() {
    const apiKey = process.env.ABLY_API_KEY;
    if (!apiKey) {
      return;
    }

    if (process.env.NODE_ENV !== "production") {
      if (!globalThis.__ablyRestInstance) {
        globalThis.__ablyRestInstance = new Ably.Rest({
          key: apiKey,
          httpRequestTimeout: 3000,
        });
      }
      this.client = globalThis.__ablyRestInstance;
    } else {
      this.client = new Ably.Rest({
        key: apiKey,
        httpRequestTimeout: 3000,
      });
    }
  }

  public async publish(userId: string, event: RealtimeNotificationEvent): Promise<void> {
    if (!this.client) {
      if (!this.warnedMissingKey && process.env.NODE_ENV !== "test") {
        this.warnedMissingKey = true;
        console.warn("[NotificationTransport] ABLY_API_KEY is not configured; skipping realtime push.");
      }
      return;
    }

    try {
      const channelName = `notifications:user:${userId}`;
      const channel = this.client.channels.get(channelName);

      // Publish with safe timeout
      await channel.publish(event.type, event.data);
    } catch (err: unknown) {
      // Constraints: Log publish failures without PII (no user IDs, names, or content) and never throw.
      const errorMsg = err instanceof Error ? err.message : "Unknown Ably publish error";
      console.error(`[NotificationTransport] Realtime push failed: ${errorMsg}`);
    }
  }
}

export const notificationTransport = new AblyNotificationTransport();
