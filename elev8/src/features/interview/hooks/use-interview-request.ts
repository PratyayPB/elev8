import { create } from "zustand";
import { InterviewRequest, Answer } from "../types";

interface InterviewWizardState {
  // Wizard steps: 1 = Required Inputs, 2 = AI Personalization, 3 = Review
  currentStep: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;

  // Partial data gathering
  requestData: Partial<InterviewRequest>;
  updateRequestData: (data: Partial<InterviewRequest>) => void;
  
  // Answers tracking for AI Personalization
  updateAnswer: (questionId: string, selectedOptions: string[]) => void;
  setSkipped: (skipped: boolean) => void;
  
  // Reset
  reset: () => void;
}

const initialState = {
  currentStep: 1,
  requestData: {
    personalization: {
      skipped: false,
      answers: [],
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
