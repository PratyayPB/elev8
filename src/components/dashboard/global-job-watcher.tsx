"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useWorkflowStore, BackgroundServiceType } from "@/store/workflow.store";
import { checkBackgroundJobStatusAction } from "@/services/jobs/actions";
import { sendNotification } from "@/features/notifications/notification-sender";
import { NotificationType } from "@/features/notifications/types";

function mapServiceTypeToNotificationType(
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
              
              // Persist notification to DB and trigger UI badge
              sendNotification({
                title: `${job.serviceName} Ready`,
                message: `Your ${job.serviceName.toLowerCase()} has finished processing and is ready to review.`,
                type: mapServiceTypeToNotificationType(job.serviceType),
                actionUrl: targetUrl,
                showToast: false, // We fire the customized toast with action below
              });

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
              const failureMessage =
                error ||
                `The background task for ${job.serviceName.toLowerCase()} encountered an error. Please try again.`;

              // Persist notification to DB and trigger UI badge
              sendNotification({
                title: `${job.serviceName} Failed`,
                message: failureMessage,
                type: mapServiceTypeToNotificationType(job.serviceType),
                showToast: false,
              });

              toast.error(`${job.serviceName} Failed`, {
                description: failureMessage,
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
