import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type BackgroundServiceType =
  | "ROADMAP"
  | "CAREER_ASSESSMENT"
  | "INTERVIEW"
  | "RESUME_BUILD"
  | "RESUME_SCORE";

export interface ActiveBackgroundJob {
  id: string; // Job ID or Entity ID
  serviceName: string; // e.g. "Roadmap Generation"
  serviceType: BackgroundServiceType;
  startedAt: number;
  viewUrl?: string; // Optional URL to navigate to upon completion
  triggerRunId?: string; // Trigger.dev Run Handle ID for Realtime SSE
  publicAccessToken?: string; // Scoped Public JWT for useRealtimeRun
}

interface WorkflowState {
  isInitiating: boolean;
  initiatingMessage: string;
  activeJobs: Record<string, ActiveBackgroundJob>;
  startInitiating: (message?: string) => void;
  stopInitiating: () => void;
  registerJob: (job: ActiveBackgroundJob) => void;
  updateJobRealtime: (id: string, realtime: { triggerRunId?: string; publicAccessToken?: string }) => void;
  unregisterJob: (id: string) => void;
}

export const useWorkflowStore = create<WorkflowState>()(
  persist(
    (set) => ({
      isInitiating: false,
      initiatingMessage: "Initiating the workflow...",
      activeJobs: {},

      startInitiating: (message = "Initiating the workflow...") =>
        set({ isInitiating: true, initiatingMessage: message }),

      stopInitiating: () =>
        set({ isInitiating: false }),

      registerJob: (job) =>
        set((state) => ({
          activeJobs: {
            ...state.activeJobs,
            [job.id]: job,
          },
        })),

      updateJobRealtime: (id, realtime) =>
        set((state) => {
          const existing = state.activeJobs[id];
          if (!existing) return state;
          return {
            activeJobs: {
              ...state.activeJobs,
              [id]: {
                ...existing,
                triggerRunId: realtime.triggerRunId ?? existing.triggerRunId,
                publicAccessToken: realtime.publicAccessToken ?? existing.publicAccessToken,
              },
            },
          };
        }),

      unregisterJob: (id) =>
        set((state) => {
          const next = { ...state.activeJobs };
          delete next[id];
          return { activeJobs: next };
        }),
    }),
    {
      name: "elev8-workflow-jobs",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ activeJobs: state.activeJobs }),
    }
  )
);
