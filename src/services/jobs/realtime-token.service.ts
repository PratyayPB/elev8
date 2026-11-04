import { auth as triggerAuth } from "@trigger.dev/sdk/v3";

export interface MintJobTokenOptions {
  triggerRunId: string;
  expirationTime?: string;
}

export class RealtimeTokenService {
  /**
   * Mints an ephemeral public access token scoped strictly to read updates for a specific run.
   * Excludes heavy payload and output columns from SSE broadcast streams to conserve client bandwidth.
   */
  public static async mintRunToken(options: MintJobTokenOptions): Promise<string> {
    const { triggerRunId, expirationTime = "1h" } = options;
    return triggerAuth.createPublicToken({
      scopes: {
        read: {
          runs: [triggerRunId],
        },
      },
      expirationTime,
      realtime: {
        skipColumns: ["payload", "output"],
      },
    });
  }
}
