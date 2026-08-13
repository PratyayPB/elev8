export type ExperienceLevel = "Beginner" | "Basic" | "Intermediate" | "Advanced";

export type Difficulty = "Easy" | "Medium" | "Hard";

export type InterviewType =
  | "Quick Practice"
  | "Standard Interview"
  | "Comprehensive Interview"
  | "Mock Final Round"
  | "TECHNICAL"
  | "NON_TECHNICAL"
  | "BEHAVIORAL";

export interface Question {
  id: string;
  question: string;
  type: "single" | "multi";
  options: string[];
}

export interface Answer {
  questionId: string;
  selectedOptions: string[];
}

export interface InterviewRequest {
  role: string;
  experienceLevel: ExperienceLevel;
  difficulty: Difficulty;
  interviewType: InterviewType;
  questionCount: number;
  personalization: {
    skipped: boolean;
    answers: Answer[];
  };
}

// ====================================================
// Phase 3.2 Additions: Plan, Question & Artifact Types
// ====================================================

export interface InterviewSection {
  name: string;
  questions: number;
}

export interface InterviewPlan {
  title: string;
  estimatedDuration: string;
  sections: InterviewSection[];
}

export interface GeneratedQuestion {
  id: string;
  category: string;
  question: string;
  difficulty: Difficulty;
  expectedTopics: string[];
  estimatedAnswerTime: string;
}

export interface InterviewMetadata {
  interviewId: string;
  role: string;
  experienceLevel: ExperienceLevel;
  difficulty: Difficulty;
  interviewType: InterviewType;
  questionCount: number;
  estimatedDuration: string;
  generatedAt: string;
  generatorVersion: string;
  source?: "PREDEFINED" | "AI_GENERATED" | "ROADMAP" | "CUSTOM";
  templateId?: string;
  predefinedInterviewId?: string;
}

// ====================================================
// Phase 3.4 Additions: Assessment Types
// ====================================================

export interface QuestionFeedback {
  score: number;
  strengths: string[];
  weaknesses: string[];
  missedTopics: string[];
  communication: number;
  technicalAccuracy: number;
  feedback: string;
}

export interface OverallAssessment {
  overallScore: number;
  technicalScore: number;
  communicationScore: number;
  confidenceScore: number;
  problemSolvingScore: number;
  strengths: string[];
  weaknesses: string[];
  recommendedLearning: string[];
  nextSteps: string[];
  summary: string;
}

export interface Analytics {
  averageAnswerTimeMs: number | null;
  questionsAttempted: number;
  completionPercentage: number;
  totalWords: number;
  averageWordsPerAnswer: number;
}

export interface AssessmentReport {
  overallScores: OverallAssessment;
  questionAnalysis: Record<string, QuestionFeedback>;
  analytics: Analytics;
  assessedAt: string;
}

// ====================================================
// Final Artifact Structure
// ====================================================

export interface InterviewArtifact {
  version: string;
  metadata: InterviewMetadata;
  questions: GeneratedQuestion[];
  answers: Array<{
    questionId: string;
    answerText: string;
    audioBlobUrl?: string;
  }>;
  assessment: AssessmentReport | null;
  status?: string; // Optional field used during session tracking
}
