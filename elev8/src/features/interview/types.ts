import {
  InterviewType,
  InterviewStatus,
  InterviewTemplateSource,
  InterviewTemplateStatus,
  CareerExperienceLevel,
} from "@prisma/client";

export {
  InterviewType,
  InterviewStatus,
  InterviewTemplateSource,
  InterviewTemplateStatus,
  CareerExperienceLevel,
};

export type ExperienceLevel = "Beginner" | "Basic" | "Intermediate" | "Advanced";

export type Difficulty = "Easy" | "Medium" | "Hard";

export type InterviewTypeOption =
  | "Quick Practice"
  | "Standard Interview"
  | "Comprehensive Interview"
  | "Mock Final Round"
  | "TECHNICAL"
  | "NON_TECHNICAL"
  | "BEHAVIORAL"
  | "SYSTEM_DESIGN"
  | "ROLE_SPECIFIC"
  | "GENERAL";

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

export interface InterviewProfileContext {
  currentStatus?: string | null;
  currentRole?: string | null;
  yearsOfExperience?: number | null;
  highestQualification?: string | null;
  fieldOfStudy?: string | null;
  primaryGoal?: string | null;
  targetCompanyType?: string | null;
}

export interface InterviewRequest {
  role: string;
  experienceLevel: ExperienceLevel;
  difficulty: Difficulty;
  interviewType: InterviewType | InterviewTypeOption | string;
  questionCount?: number;
  personalization: {
    skipped: boolean;
    profile?: InterviewProfileContext | null;
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
  estimatedTimeSeconds: number;
}

export interface InterviewMetadata {
  interviewId: string;
  role: string;
  experienceLevel: ExperienceLevel;
  difficulty: Difficulty;
  interviewType: InterviewType | string;
  questionCount: number;
  estimatedDuration: string;
  generatedAt: string;
  generatorVersion: string;
  templateSource?: InterviewTemplateSource;
  interviewTemplateId?: string;
  globalInterviewTemplateId?: string;
}

// ====================================================
// Phase 3.4 Additions: Assessment Types
// ====================================================

export interface QuestionFeedback {
  score: number;
  technicalAccuracy: number;
  communication: number;
  depthScore: number;
  strengths: string[];
  weaknesses: string[];
  coveredTopics?: string[];
  missedTopics: string[];
  feedback: string;
}

export interface TopicMasteryItem {
  topic: string;
  score: number;
  status: "STRONG" | "SATISFACTORY" | "NEEDS_IMPROVEMENT";
}

export interface RecommendedLearningItem {
  title: string;
  description: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
}

export interface OverallAssessment {
  overallScore: number;
  technicalScore: number;
  communicationScore: number;
  confidenceScore: number;
  problemSolvingScore: number;
  practicalDepthScore: number;
  strengths: string[];
  weaknesses: string[];
  topicMastery?: TopicMasteryItem[];
  recommendedLearning: RecommendedLearningItem[];
  nextSteps: string[];
  summary: string;
}

export interface Analytics {
  averageAnswerTimeMs: number | null;
  totalInterviewTimeSeconds: number;
  questionsAttempted: number;
  completionPercentage: number;
  totalWords: number;
  averageWordsPerAnswer: number;
  pacingEfficiencyRating: "OPTIMAL" | "FAST" | "DELIBERATE" | "VARIABLE";
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
    actualTimeSeconds?: number;
  }>;
  assessment: AssessmentReport | null;
  status?: string; // Optional field used during session tracking
}
