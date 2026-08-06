import { create } from "zustand";
import { InterviewArtifact } from "../types";

export type SessionStateStatus = "NOT_STARTED" | "IN_PROGRESS" | "PAUSED" | "SUBMITTED";

export interface InterviewSessionState {
  status: SessionStateStatus;
  currentQuestionIndex: number;
  artifact: InterviewArtifact | null;
  blobUrl: string | null;
  
  // Actions
  initializeSession: (artifact: InterviewArtifact, blobUrl: string) => void;
  setStatus: (status: SessionStateStatus) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  jumpToQuestion: (index: number) => void;
  updateAnswer: (questionId: string, answerText: string) => void;
  setBlobUrl: (url: string) => void;
}

export const useInterviewSessionStore = create<InterviewSessionState>((set, get) => ({
  status: "NOT_STARTED",
  currentQuestionIndex: 0,
  artifact: null,
  blobUrl: null,

  initializeSession: (artifact, blobUrl) => {
    // Determine initial index based on what's answered
    let nextUnanswered = 0;
    if (artifact.answers && artifact.questions) {
      const answeredIds = new Set(artifact.answers.map(a => a.questionId));
      for (let i = 0; i < artifact.questions.length; i++) {
        if (!answeredIds.has(artifact.questions[i].id)) {
          nextUnanswered = i;
          break;
        }
      }
    }

    set({
      artifact,
      blobUrl,
      currentQuestionIndex: nextUnanswered,
      status: "IN_PROGRESS"
    });
  },

  setStatus: (status) => set({ status }),

  nextQuestion: () => {
    const { currentQuestionIndex, artifact } = get();
    if (artifact && currentQuestionIndex < artifact.questions.length - 1) {
      set({ currentQuestionIndex: currentQuestionIndex + 1 });
    }
  },

  prevQuestion: () => {
    const { currentQuestionIndex } = get();
    if (currentQuestionIndex > 0) {
      set({ currentQuestionIndex: currentQuestionIndex - 1 });
    }
  },

  jumpToQuestion: (index) => {
    const { artifact } = get();
    if (artifact && index >= 0 && index < artifact.questions.length) {
      set({ currentQuestionIndex: index });
    }
  },

  updateAnswer: (questionId, answerText) => {
    const { artifact } = get();
    if (!artifact) return;

    const existingAnswers = artifact.answers || [];
    const answerIndex = existingAnswers.findIndex((a) => a.questionId === questionId);

    const newAnswers = [...existingAnswers];
    if (answerIndex > -1) {
      newAnswers[answerIndex] = { ...newAnswers[answerIndex], answerText };
    } else {
      newAnswers.push({ questionId, answerText });
    }

    set({
      artifact: {
        ...artifact,
        answers: newAnswers,
      },
    });
  },

  setBlobUrl: (url) => set({ blobUrl: url }),
}));
