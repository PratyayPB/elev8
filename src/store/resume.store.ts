import { create } from "zustand";

interface ResumeState {
  activeTemplate: string;
  setTemplate: (template: string) => void;
}

export const useResumeStore = create<ResumeState>((set) => ({
  activeTemplate: "modern",
  setTemplate: (template) => set({ activeTemplate: template }),
}));
