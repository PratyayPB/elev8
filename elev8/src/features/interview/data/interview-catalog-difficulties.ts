import { PredefinedDifficulty } from "../types/predefined-interview";

export const INTERVIEW_CATALOG_DIFFICULTIES: Record<PredefinedDifficulty, { label: string; description: string; questionCount: string }> = {
  EASY: {
    label: "Easy",
    description: "Focuses on fundamentals, basic concepts, and simple practical questions.",
    questionCount: "7-8 questions"
  },
  MEDIUM: {
    label: "Medium",
    description: "Focuses on practical application, debugging, and scenario-based questions.",
    questionCount: "9-10 questions"
  },
  HARD: {
    label: "Hard",
    description: "Focuses on advanced concepts, system-level reasoning, and trade-offs.",
    questionCount: "11-12 questions"
  }
};
