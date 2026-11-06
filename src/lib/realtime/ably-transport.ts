import { NotificationTransport, RealtimeNotificationEvent } from "./transport";

/**
 * Ably Realtime Notification Transport
 *
 * Implements server-side publishing over Ably REST API using lightweight HTTP fetch.
 *
 * Design & Security Guarantees:
 * 1. Direct REST publishing avoids SDK client-agent header mismatches with Ably MAU pricing accounts (error 40168).
 * 2. Authenticates with server-only Root API Key (ABLY_API_KEY) via Basic Auth with identified client ID ("elev8-server").
 * 3. Enforces a 3-second hard timeout so publish attempts never stall database transactions or background jobs.
 * 4. Logs publish failures without PII (no user IDs, names, or message bodies) and never throws.
 */
export class AblyNotificationTransport implements NotificationTransport {
  private warnedMissingKey = false;

  public async publish(userId: string, event: RealtimeNotificationEvent): Promise<void> {
    const apiKey = process.env.ABLY_API_KEY;
    if (!apiKey) {
      if (!this.warnedMissingKey && process.env.NODE_ENV !== "test") {
        this.warnedMissingKey = true;
        console.warn("[NotificationTransport] ABLY_API_KEY is not configured; skipping realtime push.");
      }
      return;
    }

    try {
      const channelName = `notifications:user:${userId}`;
      const url = `https://rest.ably.io/channels/${encodeURIComponent(channelName)}/messages`;
      const basicAuth = Buffer.from(apiKey).toString("base64");
      const serverClientId = "elev8-server";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Basic ${basicAuth}`,
          "Content-Type": "application/json",
          "X-Ably-ClientId": Buffer.from(serverClientId).toString("base64"),
        },
        body: JSON.stringify({
          name: event.type,
          data: event.data,
          clientId: serverClientId,
        }),
        signal: AbortSignal.timeout(3000),
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => "");
        console.error(
          `[NotificationTransport] Realtime push failed (HTTP ${response.status}): ${errorText.slice(0, 150)}`
        );
      }
    } catch (err: unknown) {
      // Constraints: Log publish failures without PII (no user IDs, names, or content) and never throw.
      const errorMsg = err instanceof Error ? err.message : "Unknown Ably publish error";
      console.error(`[NotificationTransport] Realtime push failed: ${errorMsg}`);
    }
  }
}

export const notificationTransport = new AblyNotificationTransport();
