"use client";

import { useWorkflowStore, BackgroundServiceType } from "@/store/workflow.store";
import { toast } from "sonner";

export interface ExecuteWorkflowOptions<T> {
  serviceName: string; // e.g. "Roadmap Generation", "Career Assessment"
  serviceType: BackgroundServiceType;
  initiationMessage?: string; // Default: "Initiating the workflow..."
  showOverlay?: boolean; // Default: true. Set to false to run completely without the fullscreen modal overlay
  suppressInitiationToast?: boolean; // Default: false. Set to true to skip generic toast when caller has custom onInitiated toast
  execute: () => Promise<T>;
  extractJobId?: (result: T) => string | undefined;
  extractRealtimeInfo?: (result: T) => { triggerRunId?: string; publicAccessToken?: string } | undefined;
  defaultViewUrl?: string;
  autoDownloadPdf?: boolean;
  onInitiated?: (result: T) => void;
  onError?: (error: any) => void;
}

export function useBackgroundWorkflow() {
  const isInitiating = useWorkflowStore((state) => state.isInitiating);
  const startInitiating = useWorkflowStore((state) => state.startInitiating);
  const stopInitiating = useWorkflowStore((state) => state.stopInitiating);
  const registerJob = useWorkflowStore((state) => state.registerJob);

  const runWorkflow = async <T>({
    serviceName,
    serviceType,
    initiationMessage = "Initiating the workflow...",
    showOverlay = true,
    suppressInitiationToast = false,
    execute,
    extractJobId,
    extractRealtimeInfo,
    defaultViewUrl,
    autoDownloadPdf,
    onInitiated,
    onError,
  }: ExecuteWorkflowOptions<T>): Promise<T | null> => {
    // 1. Display rocket loader with initiation text if overlay is enabled
    if (showOverlay) {
      startInitiating(initiationMessage);
    }

    try {
      // 2. Execute backend task dispatch
      const result = await execute();

      // 3. End loader animation immediately upon backend initiation
      if (showOverlay) {
        stopInitiating();
      }

      // Check for structured safeAction error if result has success: false
      const maybeSafeAction = result as any;
      if (maybeSafeAction && typeof maybeSafeAction === "object" && maybeSafeAction.success === false) {
        const errorMsg = maybeSafeAction.error?.message || `Failed to initialize ${serviceName.toLowerCase()}.`;
        toast.error(`Initiation Failed`, {
          description: errorMsg,
          duration: 6000,
        });
        if (onError) onError(maybeSafeAction.error);
        return result;
      }

      // 4. Send toast notification for initiated background job (unless suppressed in favor of custom onInitiated toast)
      if (!suppressInitiationToast) {
        toast.info(`Background job initialized for ${serviceName}`, {
          description: `Your request is running in the background. You will be notified once the task has been completed.`,
          duration: 6000,
        });
      }

      // 5. Register with background job watcher for completion toast tracking
      const jobId = extractJobId ? extractJobId(result) : undefined;
      const realtime = extractRealtimeInfo ? extractRealtimeInfo(result) : undefined;
      if (jobId) {
        registerJob({
          id: jobId,
          serviceName,
          serviceType,
          startedAt: Date.now(),
          viewUrl: defaultViewUrl,
          triggerRunId: realtime?.triggerRunId,
          publicAccessToken: realtime?.publicAccessToken,
          autoDownloadPdf,
        });
      }

      if (onInitiated) {
        onInitiated(result);
      }

      return result;
    } catch (err: any) {
      if (showOverlay) {
        stopInitiating();
      }

      const errorMessage =
        err?.message || `Failed to initialize ${serviceName.toLowerCase()}. Please try again.`;
      toast.error(`Initiation Failed`, {
        description: errorMessage,
        duration: 6000,
      });

      if (onError) {
        onError(err);
      }
      return null;
    }
  };

  return {
    runWorkflow,
    isInitiating,
  };
}
