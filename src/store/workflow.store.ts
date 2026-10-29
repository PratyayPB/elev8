import { create } from "zustand";

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
}

interface WorkflowState {
  isInitiating: boolean;
  initiatingMessage: string;
  activeJobs: Record<string, ActiveBackgroundJob>;
  startInitiating: (message?: string) => void;
  stopInitiating: () => void;
  registerJob: (job: ActiveBackgroundJob) => void;
  unregisterJob: (id: string) => void;
}

export const useWorkflowStore = create<WorkflowState>((set) => ({
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

  unregisterJob: (id) =>
    set((state) => {
      const next = { ...state.activeJobs };
      delete next[id];
      return { activeJobs: next };
    }),
}));
