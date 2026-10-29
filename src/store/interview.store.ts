import { create } from "zustand";

interface InterviewState {
  activeSessionId: string | null;
  setActiveSessionId: (id: string | null) => void;
}

export const useInterviewStore = create<InterviewState>((set) => ({
  activeSessionId: null,
  setActiveSessionId: (id) => set({ activeSessionId: id }),
}));
