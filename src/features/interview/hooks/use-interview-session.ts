import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { InterviewArtifact } from "../types";

export type SessionStateStatus = "NOT_STARTED" | "IN_PROGRESS" | "PAUSED" | "SUBMITTED";

export interface InterviewSessionState {
  status: SessionStateStatus;
  currentQuestionIndex: number;
  artifact: InterviewArtifact | null;
  blobUrl: string | null;
  durationSeconds: number;
  
  // Actions
  initializeSession: (artifact: InterviewArtifact, blobUrl: string, durationSeconds?: number) => void;
  setStatus: (status: SessionStateStatus) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  jumpToQuestion: (index: number) => void;
  updateAnswer: (questionId: string, answerText: string) => void;
  setBlobUrl: (url: string) => void;
  incrementDuration: () => void;
  clearSession: () => void;
}

const fallbackStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

export const useInterviewSessionStore = create<InterviewSessionState>()(
  persist(
    (set, get) => ({
      status: "NOT_STARTED",
      currentQuestionIndex: 0,
      artifact: null,
      blobUrl: null,
      durationSeconds: 0,

      initializeSession: (artifact, blobUrl, durationSeconds = 0) => {
        const currentStored = get().artifact;
        // If an in-progress session already exists in sessionStorage for this exact interview, preserve user's in-flight answers
        if (
          currentStored &&
          currentStored.metadata?.interviewId === artifact.metadata?.interviewId &&
          get().status === "IN_PROGRESS"
        ) {
          set({ blobUrl });
          return;
        }

        // Determine initial index based on what's answered
        let nextUnanswered = 0;
        if (artifact.answers && artifact.questions) {
          const answeredIds = new Set(
            artifact.answers.filter((a) => a.answerText && a.answerText.trim().length > 0).map((a) => a.questionId)
          );
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
          durationSeconds,
          currentQuestionIndex: nextUnanswered,
          status: "IN_PROGRESS",
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
          newAnswers[answerIndex] = {
            ...newAnswers[answerIndex],
            answerText,
          };
        } else {
          newAnswers.push({
            questionId,
            answerText,
            actualTimeSeconds: 0,
          });
        }

        set({
          artifact: {
            ...artifact,
            answers: newAnswers,
          },
        });
      },

      setBlobUrl: (url) => set({ blobUrl: url }),

      incrementDuration: () => {
        const { status, durationSeconds, artifact, currentQuestionIndex } = get();
        if (status === "IN_PROGRESS") {
          let updatedArtifact = artifact;
          if (artifact && artifact.questions && artifact.questions[currentQuestionIndex]) {
            const currentQId = artifact.questions[currentQuestionIndex].id;
            const existingAnswers = artifact.answers || [];
            const answerIndex = existingAnswers.findIndex((a) => a.questionId === currentQId);
            const newAnswers = [...existingAnswers];

            if (answerIndex > -1) {
              const prevTime = newAnswers[answerIndex].actualTimeSeconds || 0;
              newAnswers[answerIndex] = {
                ...newAnswers[answerIndex],
                actualTimeSeconds: prevTime + 1,
              };
            } else {
              newAnswers.push({
                questionId: currentQId,
                answerText: "",
                actualTimeSeconds: 1,
              });
            }

            updatedArtifact = {
              ...artifact,
              answers: newAnswers,
            };
          }

          set({
            durationSeconds: durationSeconds + 1,
            artifact: updatedArtifact,
          });
        }
      },

      clearSession: () => {
        set({
          status: "NOT_STARTED",
          currentQuestionIndex: 0,
          artifact: null,
          blobUrl: null,
          durationSeconds: 0,
        });
        if (typeof window !== "undefined") {
          try {
            sessionStorage.removeItem("elev8-active-interview-session");
          } catch {}
        }
      },
    }),
    {
      name: "elev8-active-interview-session",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" && typeof window.sessionStorage !== "undefined"
          ? window.sessionStorage
          : fallbackStorage
      ),
      partialize: (state) => ({
        status: state.status,
        currentQuestionIndex: state.currentQuestionIndex,
        artifact: state.artifact,
        blobUrl: state.blobUrl,
        durationSeconds: state.durationSeconds,
      }),
    }
  )
);
