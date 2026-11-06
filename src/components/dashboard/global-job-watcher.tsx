"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useWorkflowStore, BackgroundServiceType } from "@/store/workflow.store";
import { checkBackgroundJobStatusAction, getJobRealtimeTokenAction } from "@/services/jobs/actions";
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
  const checkingRef = useRef<Record<string, boolean>>({});
  const tokenFetchRef = useRef<Record<string, boolean>>({});

  const allJobs = Object.values(activeJobs);

  // Auto-discover and hydrate public tokens for active jobs that lack them
  useEffect(() => {
    for (const job of allJobs) {
      if (!job.triggerRunId || !job.publicAccessToken) {
        if (tokenFetchRef.current[job.id]) continue;
        tokenFetchRef.current[job.id] = true;

        getJobRealtimeTokenAction(job.id)
          .then((res) => {
            if (res.success && res.data?.triggerRunId && res.data?.publicAccessToken) {
              updateJobRealtime(job.id, {
                triggerRunId: res.data.triggerRunId,
                publicAccessToken: res.data.publicAccessToken,
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

  // Realtime jobs (handled via RealtimeJobSubscriber over SSE)
  const realtimeJobs = allJobs.filter((j) => Boolean(j.triggerRunId && j.publicAccessToken));
  // Fallback jobs (only jobs lacking cloud run ID / token run on local interval check)
  const fallbackJobs = allJobs.filter((j) => !Boolean(j.triggerRunId && j.publicAccessToken));

  // Interval check ONLY for local fallback jobs that lack cloud Trigger.dev handles
  useEffect(() => {
    if (fallbackJobs.length === 0) return;

    const intervalId = setInterval(async () => {
      for (const job of fallbackJobs) {
        // Prevent concurrent overlapping checks for the same job
        if (checkingRef.current[job.id]) continue;
        checkingRef.current[job.id] = true;

        try {
          const res = await checkBackgroundJobStatusAction(job.id, job.serviceType);

          if (res.success && res.data) {
            const { status, viewUrl, error } = res.data;

            if (status === "COMPLETED") {
              const isPdfExport = job.autoDownloadPdf || job.serviceName.includes("PDF");
              const targetUrl = job.viewUrl;

              if (isPdfExport && viewUrl && (viewUrl.startsWith("http") || viewUrl.startsWith("/"))) {
                downloadFileFromUrl(viewUrl, "resume.pdf").catch((err) =>
                  console.warn("[GlobalJobWatcher] Auto-download failed:", err)
                );
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
              router.refresh();
            } else if (status === "FAILED") {
              const failureMessage =
                error ||
                `The background task for ${job.serviceName.toLowerCase()} encountered an error. Please try again.`;

              toast.error(`${job.serviceName} Failed`, {
                description: failureMessage,
                duration: 8000,
                skipDb: true,
              } as any);

              unregisterJob(job.id);
            }
          }
        } catch (pollErr) {
          console.warn(`[GlobalJobWatcher] Failed to poll status for fallback job ${job.id}:`, pollErr);
        } finally {
          delete checkingRef.current[job.id];
        }
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [fallbackJobs, unregisterJob, router]);

  return (
    <>
      {realtimeJobs.map((job) => (
        <RealtimeJobSubscriber key={job.id} job={job} />
      ))}
    </>
  );
}
