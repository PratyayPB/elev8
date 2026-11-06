"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useWorkflowStore, BackgroundServiceType } from "@/store/workflow.store";
import { useNotificationsStore } from "@/store/notifications.store";
import { NotificationType } from "@/features/notifications/types";
import { RealtimeJobSubscriber } from "./realtime-job-subscriber";
import { downloadFileFromUrl } from "@/lib/download";

export function mapServiceTypeToNotificationType(
  serviceType: BackgroundServiceType
): NotificationType {
  switch (serviceType) {
    case "ROADMAP":
      return "ROADMAP";
    case "RESUME_BUILD":
    case "RESUME_SCORE":
      return "RESUME";
    case "INTERVIEW":
      return "INTERVIEW";
    case "CAREER_ASSESSMENT":
      return "CAREER_ASSESSMENT";
    default:
      return "SYSTEM";
  }
}

export function GlobalJobWatcher() {
  const router = useRouter();
  const activeJobs = useWorkflowStore((state) => state.activeJobs);
  const unregisterJob = useWorkflowStore((state) => state.unregisterJob);
  const updateJobRealtime = useWorkflowStore((state) => state.updateJobRealtime);
  const notifications = useNotificationsStore((state) => state.notifications);

  const tokenFetchRef = useRef<Record<string, boolean>>({});
  const pollCountRef = useRef<Record<string, number>>({});
  const checkingRef = useRef<Record<string, boolean>>({});

  const allJobs = Object.values(activeJobs);

  // 1. Reactive completion driven by Ably notifications:
  // When an Ably notification arrives for a job, immediately mark it complete/failed and remove from watcher.
  useEffect(() => {
    for (const job of allJobs) {
      const match = notifications.find(
        (n) =>
          n.idempotencyKey === `job:${job.id}:completed` ||
          n.idempotencyKey === `job-completed-${job.id}` ||
          n.idempotencyKey === `job:${job.id}:failed` ||
          n.idempotencyKey === `job-failed-${job.id}`
      );

      if (match) {
        const isFailed = match.idempotencyKey?.includes("failed");
        if (isFailed) {
          toast.error(`${job.serviceName} Failed`, {
            description: match.message,
            duration: 8000,
            skipDb: true,
          } as any);
        } else {
          const isPdfExport = job.autoDownloadPdf || job.serviceName.includes("PDF");
          if (isPdfExport && match.actionUrl && (match.actionUrl.startsWith("http") || match.actionUrl.startsWith("/"))) {
            downloadFileFromUrl(match.actionUrl, "resume.pdf").catch(() => {});
          }

          toast.success(`${job.serviceName} Completed`, {
            description: match.message,
            duration: 9000,
            skipDb: true,
            action: match.actionUrl
              ? {
                  label: "View",
                  onClick: () => router.push(match.actionUrl!),
                }
              : undefined,
          } as any);
        }

        unregisterJob(job.id);
        delete pollCountRef.current[job.id];
      }
    }
  }, [notifications, allJobs, unregisterJob, router]);

  // 2. Fetch scoped Trigger.dev realtime tokens via REST GET route handler
  useEffect(() => {
    for (const job of allJobs) {
      if (!job.triggerRunId || !job.publicAccessToken) {
        if (tokenFetchRef.current[job.id]) continue;
        tokenFetchRef.current[job.id] = true;

        fetch(`/api/jobs/${encodeURIComponent(job.id)}/realtime-token`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => (res.ok ? res.json() : null))
          .then((data) => {
            if (data?.triggerRunId && data?.publicAccessToken) {
              updateJobRealtime(job.id, {
                triggerRunId: data.triggerRunId,
                publicAccessToken: data.publicAccessToken,
              });
            }
          })
          .catch((err) => {
            console.warn(`[GlobalJobWatcher] Failed to fetch realtime token for ${job.id}:`, err);
          })
          .finally(() => {
            delete tokenFetchRef.current[job.id];
          });
      }
    }
  }, [allJobs, updateJobRealtime]);

  // Realtime jobs (handled via RealtimeJobSubscriber over Trigger.dev SSE)
  const realtimeJobs = allJobs.filter((j) => Boolean(j.triggerRunId && j.publicAccessToken));
  // Fallback jobs: ONLY jobs where Trigger.dev cloud realtime handle is unavailable
  const fallbackJobs = allJobs.filter((j) => !Boolean(j.triggerRunId && j.publicAccessToken));

  // 3. Backoff-limited fallback polling ONLY when realtime is unavailable
  useEffect(() => {
    if (fallbackJobs.length === 0) return;

    let timeoutId: NodeJS.Timeout | null = null;
    let isCancelled = false;

    const runPollCycle = async () => {
      if (isCancelled) return;

      for (const job of fallbackJobs) {
        if (checkingRef.current[job.id]) continue;
        checkingRef.current[job.id] = true;

        const currentCount = pollCountRef.current[job.id] || 0;
        // Hard cap at 15 poll cycles to protect server resources
        if (currentCount >= 15) {
          checkingRef.current[job.id] = false;
          continue;
        }

        try {
          const res = await fetch(
            `/api/jobs/${encodeURIComponent(job.id)}/status?serviceType=${encodeURIComponent(job.serviceType)}`,
            { method: "GET" }
          );

          if (res.ok) {
            const data = await res.json();
            pollCountRef.current[job.id] = currentCount + 1;

            if (data.status === "COMPLETED") {
              const isPdfExport = job.autoDownloadPdf || job.serviceName.includes("PDF");
              const viewUrl = data.viewUrl;
              const targetUrl = job.viewUrl;

              if (isPdfExport && viewUrl && (viewUrl.startsWith("http") || viewUrl.startsWith("/"))) {
                downloadFileFromUrl(viewUrl, "resume.pdf").catch(() => {});
              }

              toast.success(`${job.serviceName} Completed`, {
                description: isPdfExport && viewUrl
                  ? "Your PDF has been generated and your download has started."
                  : `Your ${job.serviceName.toLowerCase()} has finished processing and is ready.`,
                duration: 9000,
                skipDb: true,
                action: isPdfExport && viewUrl
                  ? {
                      label: "Download Again",
                      onClick: () => downloadFileFromUrl(viewUrl, "resume.pdf"),
                    }
                  : targetUrl
                  ? {
                      label: "View",
                      onClick: () => router.push(targetUrl),
                    }
                  : undefined,
              } as any);

              unregisterJob(job.id);
              delete pollCountRef.current[job.id];
              router.refresh();
            } else if (data.status === "FAILED") {
              toast.error(`${job.serviceName} Failed`, {
                description: data.error || "The background task encountered an error.",
                duration: 8000,
                skipDb: true,
              } as any);

              unregisterJob(job.id);
              delete pollCountRef.current[job.id];
            }
          }
        } catch (err) {
          console.warn(`[GlobalJobWatcher] Status poll failed for ${job.id}:`, err);
        } finally {
          checkingRef.current[job.id] = false;
        }
      }

      // Exponential backoff: 3s -> 4.5s -> 6.75s -> ... max 30s
      const maxCount = Math.max(0, ...fallbackJobs.map((j) => pollCountRef.current[j.id] || 0));
      const nextDelayMs = Math.min(30000, Math.round(3000 * Math.pow(1.5, maxCount)));

      if (!isCancelled && fallbackJobs.length > 0) {
        timeoutId = setTimeout(runPollCycle, nextDelayMs);
      }
    };

    timeoutId = setTimeout(runPollCycle, 3000);

    return () => {
      isCancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [fallbackJobs, unregisterJob, router]);

  return (
    <>
      {realtimeJobs.map((job) => (
        <RealtimeJobSubscriber key={job.id} job={job} />
      ))}
    </>
  );
}
