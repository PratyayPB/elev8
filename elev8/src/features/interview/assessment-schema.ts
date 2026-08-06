import { z } from "zod";

export const QuestionFeedbackSchema = z.object({
  score: z.coerce.number().min(0).max(100).catch(50),
  strengths: z.array(z.string()).catch([]),
  weaknesses: z.array(z.string()).catch([]),
  missedTopics: z.array(z.string()).catch([]),
  communication: z.coerce.number().min(0).max(100).catch(50),
  technicalAccuracy: z.coerce.number().min(0).max(100).catch(50),
  feedback: z.string().catch("No feedback provided."),
});

// A wrapper to handle the bulk question assessment
export const BulkQuestionAssessmentSchema = z.object({
  assessments: z.record(z.string(), QuestionFeedbackSchema)
});

export const OverallAssessmentSchema = z.object({
  overallScore: z.coerce.number().min(0).max(100).catch(50),
  technicalScore: z.coerce.number().min(0).max(100).catch(50),
  communicationScore: z.coerce.number().min(0).max(100).catch(50),
  confidenceScore: z.coerce.number().min(0).max(100).catch(50),
  problemSolvingScore: z.coerce.number().min(0).max(100).catch(50),
  strengths: z.array(z.string()).catch([]),
  weaknesses: z.array(z.string()).catch([]),
  recommendedLearning: z.array(z.string()).catch([]),
  nextSteps: z.array(z.string()).catch([]),
  summary: z.string().catch("Assessment summary unavailable."),
});

