"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useWorkflowStore } from "@/store/workflow.store";
import { checkBackgroundJobStatusAction } from "@/services/jobs/actions";

export function GlobalJobWatcher() {
  const router = useRouter();
  const activeJobs = useWorkflowStore((state) => state.activeJobs);
  const unregisterJob = useWorkflowStore((state) => state.unregisterJob);
  const checkingRef = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const jobList = Object.values(activeJobs);
    if (jobList.length === 0) return;

    const intervalId = setInterval(async () => {
      for (const job of jobList) {
        // Prevent concurrent overlapping checks for the same job
        if (checkingRef.current[job.id]) continue;
        checkingRef.current[job.id] = true;

        try {
          const res = await checkBackgroundJobStatusAction(job.id, job.serviceType);

          if (res.success && res.data) {
            const { status, viewUrl, error } = res.data;

            if (status === "COMPLETED") {
              const targetUrl = viewUrl || job.viewUrl;
              toast.success(`${job.serviceName} Completed`, {
                description: `Your ${job.serviceName.toLowerCase()} has finished processing and is ready.`,
                duration: 7000,
                action: targetUrl
                  ? {
                      label: "View",
                      onClick: () => router.push(targetUrl),
                    }
                  : undefined,
              });

              unregisterJob(job.id);
              router.refresh();
            } else if (status === "FAILED") {
              toast.error(`${job.serviceName} Failed`, {
                description:
                  error ||
                  `The background task for ${job.serviceName.toLowerCase()} encountered an error. Please try again.`,
                duration: 8000,
              });

              unregisterJob(job.id);
            }
          }
        } catch (pollErr) {
          console.warn(`[GlobalJobWatcher] Failed to poll status for ${job.id}:`, pollErr);
        } finally {
          delete checkingRef.current[job.id];
        }
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeJobs, unregisterJob, router]);

  return null;
}
