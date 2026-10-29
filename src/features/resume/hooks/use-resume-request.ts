import { create } from "zustand";
import { ResumeAssessmentRequest, ResumeProfileContext } from "../types";

interface ResumeWizardState {
  currentStep: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;

  requestData: Partial<ResumeAssessmentRequest>;
  updateRequestData: (data: Partial<ResumeAssessmentRequest>) => void;

  setSkipped: (skipped: boolean) => void;
  setProfile: (profile: ResumeProfileContext | null) => void;

  reset: () => void;
}

const initialState = {
  currentStep: 1,
  requestData: {
    role: "",
    roleDescription: "",
    experienceLevel: "Intermediate" as const,
    uploadedFile: null,
    personalization: {
      skipped: false,
      profile: null,
    },
  },
};

export const useResumeRequestStore = create<ResumeWizardState>((set) => ({
  ...initialState,

  setStep: (step) => set({ currentStep: step }),
  nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 3) })),
  prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),

  updateRequestData: (data) =>
    set((state) => ({
      requestData: { ...state.requestData, ...data },
    })),

  setSkipped: (skipped) =>
    set((state) => ({
      requestData: {
        ...state.requestData,
        personalization: {
          ...state.requestData.personalization,
          skipped,
          profile: skipped ? null : state.requestData.personalization?.profile || null,
        },
      },
    })),

  setProfile: (profile) =>
    set((state) => ({
      requestData: {
        ...state.requestData,
        personalization: {
          ...state.requestData.personalization,
          skipped: false,
          profile,
        },
      },
    })),

  reset: () => set(initialState),
}));

