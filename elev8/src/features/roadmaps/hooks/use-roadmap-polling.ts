"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export const POLLING_INTERVAL_MS = 2500;

export interface RoadmapPollingOptions {
  intervalMs?: number;
  onPoll?: () => void;
}

/**
 * Custom hook to poll for roadmap generation updates via Next.js router.refresh().
 * Triggers re-renders of Server Components while active and terminates cleanly.
 */
export function useRoadmapPolling(
  isLoading: boolean,
  options?: RoadmapPollingOptions
) {
  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalMs = options?.intervalMs ?? POLLING_INTERVAL_MS;
  const onPoll = options?.onPoll;

  useEffect(() => {
    // If not loading, ensure any active timer is cleared
    if (!isLoading) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    // Prevent duplicate intervals
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
  }, [isLoading, router, intervalMs, onPoll]);
}
