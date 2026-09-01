import { z } from "zod";

export const QuestionFeedbackSchema = z.object({
  score: z.coerce.number().min(0).max(100).catch(50),
  technicalAccuracy: z.coerce.number().min(0).max(100).catch(50),
  communication: z.coerce.number().min(0).max(100).catch(50),
  depthScore: z.coerce.number().min(0).max(100).catch(50),
  strengths: z.array(z.string()).catch([]),
  weaknesses: z.array(z.string()).catch([]),
  coveredTopics: z.array(z.string()).optional().catch([]),
  missedTopics: z.array(z.string()).catch([]),
  feedback: z.string().catch("No feedback provided."),
});

// A wrapper to handle the bulk question assessment
export const BulkQuestionAssessmentSchema = z.object({
  assessments: z.record(z.string(), QuestionFeedbackSchema),
});

export const TopicMasteryItemSchema = z.object({
  topic: z.string(),
  score: z.coerce.number().min(0).max(100),
  status: z.enum(["STRONG", "SATISFACTORY", "NEEDS_IMPROVEMENT"]).catch("SATISFACTORY"),
});

export const RecommendedLearningItemSchema = z.object({
  title: z.string(),
  description: z.string(),
  priority: z.enum(["HIGH", "MEDIUM", "LOW"]).catch("MEDIUM"),
});

export const OverallAssessmentSchema = z.object({
  overallScore: z.coerce.number().min(0).max(100).catch(50),
  technicalScore: z.coerce.number().min(0).max(100).catch(50),
  communicationScore: z.coerce.number().min(0).max(100).catch(50),
  confidenceScore: z.coerce.number().min(0).max(100).catch(50),
  problemSolvingScore: z.coerce.number().min(0).max(100).catch(50),
  practicalDepthScore: z.coerce.number().min(0).max(100).catch(50),
  strengths: z.array(z.string()).catch([]),
  weaknesses: z.array(z.string()).catch([]),
  topicMastery: z.array(TopicMasteryItemSchema).optional().catch([]),
  recommendedLearning: z.array(RecommendedLearningItemSchema).catch([]),
  nextSteps: z.array(z.string()).catch([]),
  summary: z.string().catch("Assessment summary unavailable."),
});

