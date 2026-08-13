import { PredefinedInterviewType } from "../types/predefined-interview";

export const INTERVIEW_CATALOG_TYPES: Record<PredefinedInterviewType, { label: string; description: string }> = {
  TECHNICAL: {
    label: "Technical",
    description: "Focuses on technical skills, system design, and coding knowledge."
  },
  NON_TECHNICAL: {
    label: "Non-Technical",
    description: "Focuses on role-specific competencies like strategy, requirements, and metrics."
  },
  BEHAVIORAL: {
    label: "Behavioral",
    description: "Focuses on communication, conflict resolution, leadership, and teamwork."
  }
};
