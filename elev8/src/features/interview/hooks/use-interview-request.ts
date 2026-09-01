import { create } from "zustand";
import { InterviewRequest, InterviewProfileContext } from "../types";

interface InterviewWizardState {
  // Wizard steps: 1 = Required Inputs, 2 = AI Personalization, 3 = Review
  currentStep: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;

  // Partial data gathering
  requestData: Partial<InterviewRequest>;
  updateRequestData: (data: Partial<InterviewRequest>) => void;
  
  // Personalization settings
  setSkipped: (skipped: boolean) => void;
  setProfile: (profile: InterviewProfileContext | null) => void;
  
  // Reset
  reset: () => void;
}

const initialState = {
  currentStep: 1,
  requestData: {
    personalization: {
      skipped: false,
      profile: null,
    },
  },
};

export const useInterviewRequestStore = create<InterviewWizardState>((set) => ({
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
