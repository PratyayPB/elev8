export type PredefinedInterviewType = "TECHNICAL" | "NON_TECHNICAL" | "BEHAVIORAL";
export type PredefinedDifficulty = "EASY" | "MEDIUM" | "HARD";

export interface PredefinedInterviewQuestion {
  id: string;
  question: string;
  answer: string;              // Always "" in templates
  category?: string;
  expectedTopics?: string[];
  estimatedAnswerTime?: number; // in minutes
}

export interface InterviewLevel {
  questions: Record<string, PredefinedInterviewQuestion>;
  estimatedDuration: string;   // e.g. "25-35 minutes"
}

export interface PredefinedInterview {
  id: string;
  role: string;
  type: PredefinedInterviewType;
  description: string;
  levels: {
    EASY: InterviewLevel;
    MEDIUM: InterviewLevel;
    HARD: InterviewLevel;
  };
}

export interface PredefinedInterviewSummary {
  id: string;
  role: string;
  type: PredefinedInterviewType;
  description: string;
  availableLevels: PredefinedDifficulty[];
}
