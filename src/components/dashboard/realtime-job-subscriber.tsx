"use client";

import { useRealtimeRun } from "@trigger.dev/react-hooks";
import { ActiveBackgroundJob, useWorkflowStore } from "@/store/workflow.store";
import { sendNotification } from "@/features/notifications/notification-sender";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { mapServiceTypeToNotificationType } from "./global-job-watcher";
import { downloadFileFromUrl } from "@/lib/download";

interface RealtimeJobSubscriberProps {
  job: ActiveBackgroundJob;
}

export function RealtimeJobSubscriber({ job }: RealtimeJobSubscriberProps) {
  const router = useRouter();
  const unregisterJob = useWorkflowStore((state) => state.unregisterJob);

  useRealtimeRun(job.triggerRunId, {
    accessToken: job.publicAccessToken!,
    enabled: Boolean(job.triggerRunId && job.publicAccessToken),
    skipColumns: ["payload"],
    stopOnCompletion: true,
    onComplete: async (run) => {
      if (run.isSuccess) {
        const metadata = (run.metadata || {}) as Record<string, any>;
        const output = (run.output || {}) as Record<string, any>;
        const downloadUrl = (metadata.downloadUrl || output.downloadUrl) as string | undefined;
        const filename = (metadata.filename || output.filename || "resume.pdf") as string;

        // Auto-download PDF if configured or if downloadUrl exists
        if (downloadUrl && (job.autoDownloadPdf || job.serviceName.includes("PDF"))) {
          downloadFileFromUrl(downloadUrl, filename).catch((dlErr) => {
            console.warn("[RealtimeJobSubscriber] Auto-download failed:", dlErr);
          });
        }

        // For PDF exports, use the stable view/builder page as the persistent notification URL.
        // The signed downloadUrl is short-lived (24h token) and must NOT be persisted in the DB.
        const isPdfExport = job.autoDownloadPdf || job.serviceName.includes("PDF");
        const targetUrl = job.viewUrl;
        const notificationActionUrl = isPdfExport ? (targetUrl ?? null) : (downloadUrl || targetUrl);

        await sendNotification({
          title: `${job.serviceName} Ready`,
          message: `Your ${job.serviceName.toLowerCase()} has finished processing and is ready to review.`,
          type: mapServiceTypeToNotificationType(job.serviceType),
          actionUrl: notificationActionUrl,
          idempotencyKey: `job-completed-${job.id}`,
          showToast: false,
        });

        toast.success(`${job.serviceName} Completed`, {
          description: downloadUrl
            ? "Your PDF has been generated and your download has started."
            : `Your ${job.serviceName.toLowerCase()} has finished processing and is ready.`,
          duration: 9000,
          skipDb: true,
          action: downloadUrl
            ? {
                label: "Download Again",
                onClick: () => downloadFileFromUrl(downloadUrl, filename),
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
      } else if (run.isFailed) {
        const failureMessage =
          run.error?.message ||
          `The background task for ${job.serviceName.toLowerCase()} encountered an error. Please try again.`;

        await sendNotification({
          title: `${job.serviceName} Failed`,
          message: failureMessage,
          type: mapServiceTypeToNotificationType(job.serviceType),
          idempotencyKey: `job-failed-${job.id}`,
          showToast: false,
        });

        toast.error(`${job.serviceName} Failed`, {
          description: failureMessage,
          duration: 8000,
          skipDb: true,
        } as any);

        unregisterJob(job.id);
      }
    },
  });

  return null;
}
