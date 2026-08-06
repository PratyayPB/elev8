import { create } from "zustand";
import { ResumeAssessmentRequest, Answer } from "../types";

interface ResumeWizardState {
  currentStep: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;

  requestData: Partial<ResumeAssessmentRequest>;
  updateRequestData: (data: Partial<ResumeAssessmentRequest>) => void;

  updateAnswer: (questionId: string, selectedOptions: string[]) => void;
  setSkipped: (skipped: boolean) => void;

  reset: () => void;
}

const initialState = {
  currentStep: 1,
  requestData: {
    role: "",
    experienceLevel: "Intermediate" as const,
    uploadedFile: null,
    personalization: {
      skipped: false,
      answers: [],
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

  updateAnswer: (questionId, selectedOptions) =>
    set((state) => {
      const currentAnswers = state.requestData.personalization?.answers || [];
      const existingIdx = currentAnswers.findIndex((a) => a.questionId === questionId);

      let newAnswers = [...currentAnswers];
      if (selectedOptions.length === 0) {
        newAnswers = newAnswers.filter((a) => a.questionId !== questionId);
      } else if (existingIdx >= 0) {
        newAnswers[existingIdx] = { questionId, selectedOptions };
      } else {
        newAnswers.push({ questionId, selectedOptions });
      }

      return {
        requestData: {
          ...state.requestData,
          personalization: {
            ...state.requestData.personalization!,
            answers: newAnswers,
          },
        },
      };
    }),

  setSkipped: (skipped) =>
    set((state) => ({
      requestData: {
        ...state.requestData,
        personalization: {
          skipped,
          answers: skipped ? [] : state.requestData.personalization?.answers || [],
        },
      },
    })),

  reset: () => set(initialState),
}));
