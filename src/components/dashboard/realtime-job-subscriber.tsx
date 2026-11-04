"use client";

import { useRealtimeRun } from "@trigger.dev/react-hooks";
import { ActiveBackgroundJob, useWorkflowStore } from "@/store/workflow.store";
import { sendNotification } from "@/features/notifications/notification-sender";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { mapServiceTypeToNotificationType } from "./global-job-watcher";

interface RealtimeJobSubscriberProps {
  job: ActiveBackgroundJob;
}

export function RealtimeJobSubscriber({ job }: RealtimeJobSubscriberProps) {
  const router = useRouter();
  const unregisterJob = useWorkflowStore((state) => state.unregisterJob);

  useRealtimeRun(job.triggerRunId, {
    accessToken: job.publicAccessToken!,
    enabled: Boolean(job.triggerRunId && job.publicAccessToken),
    skipColumns: ["payload", "output"],
    stopOnCompletion: true,
    onComplete: async (run) => {
      if (run.isSuccess) {
        const targetUrl = job.viewUrl;

        await sendNotification({
          title: `${job.serviceName} Ready`,
          message: `Your ${job.serviceName.toLowerCase()} has finished processing and is ready to review.`,
          type: mapServiceTypeToNotificationType(job.serviceType),
          actionUrl: targetUrl,
          idempotencyKey: `job-completed-${job.id}`,
          showToast: false,
        });

        toast.success(`${job.serviceName} Completed`, {
          description: `Your ${job.serviceName.toLowerCase()} has finished processing and is ready.`,
          duration: 7000,
          skipDb: true,
          action: targetUrl
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
