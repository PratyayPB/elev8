import { create } from "zustand";
import { BuilderState, ResumeProfile } from "../types";
import { BuilderService } from "../services/builder.service";

interface BuilderStore extends BuilderState {
  setActiveResume: (resume: ResumeProfile) => void;
  setActiveTemplate: (templateId: string) => void;
}

export const useBuilderState = create<BuilderStore>((set) => ({
  ...BuilderService.getInitialState(),
  setActiveResume: (resume) => 
    set((state) => BuilderService.setActiveResume(state, resume)),
  setActiveTemplate: (templateId) => 
    set((state) => BuilderService.setActiveTemplate(state, templateId)),
}));
