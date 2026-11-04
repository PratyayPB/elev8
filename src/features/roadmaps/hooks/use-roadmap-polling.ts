"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useRealtimeRun } from "@trigger.dev/react-hooks";

export const POLLING_INTERVAL_MS = 2500;

export interface RoadmapPollingOptions {
  intervalMs?: number;
  onPoll?: () => void;
  triggerRunId?: string;
  publicAccessToken?: string;
  onMetadataUpdate?: (progress: number, statusText: string) => void;
}

/**
 * Custom hook to monitor roadmap generation updates via Trigger.dev Realtime SDK.
 * Seamlessly falls back to periodic router.refresh() if realtime cloud token is unavailable.
 */
export function useRoadmapPolling(
  isLoading: boolean,
  options?: RoadmapPollingOptions
) {
  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalMs = options?.intervalMs ?? POLLING_INTERVAL_MS;
  const onPoll = options?.onPoll;
  const onMetadataUpdate = options?.onMetadataUpdate;
  const triggerRunId = options?.triggerRunId;
  const publicAccessToken = options?.publicAccessToken;

  const hasRealtimeCredentials = Boolean(triggerRunId && publicAccessToken);

  // 1. Realtime SSE connection to Trigger.dev run stream
  const { run } = useRealtimeRun(triggerRunId, {
    accessToken: publicAccessToken!,
    enabled: Boolean(isLoading && hasRealtimeCredentials),
    skipColumns: ["payload", "output"],
    stopOnCompletion: true,
    onComplete: () => {
      // Refresh the page once when completed or failed to load generated artifact
      router.refresh();
    },
  });

  useEffect(() => {
    if (run?.metadata && onMetadataUpdate) {
      const progress = typeof run.metadata.progress === "number" ? run.metadata.progress : 0;
      const status = typeof run.metadata.status === "string" ? run.metadata.status : "";
      onMetadataUpdate(progress, status);
    }
  }, [run, onMetadataUpdate]);

  // 2. Fallback polling ONLY when realtime credentials are not available
  useEffect(() => {
    // If not loading or realtime SSE is active, ensure interval timer is cleared
    if (!isLoading || hasRealtimeCredentials) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    if (timerRef.current) {
      return;
    }

    timerRef.current = setInterval(() => {
      if (onPoll) {
        onPoll();
      }
      router.refresh();
    }, intervalMs);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isLoading, hasRealtimeCredentials, router, intervalMs, onPoll]);
}
