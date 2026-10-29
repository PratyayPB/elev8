import { z } from "zod";
import { DIFFICULTY_LEVELS } from "./difficulty";

export const InterviewSectionSchema = z.object({
  name: z.string().min(1, "Section name is required"),
  questions: z.number().int().positive("Question count must be positive"),
});

export const InterviewPlanSchema = z.object({
  title: z.string().min(1, "Title is required"),
  estimatedDuration: z.string().min(1, "Estimated duration is required"),
  sections: z.array(InterviewSectionSchema).min(1, "At least one section is required"),
});

export const GeneratedQuestionSchema = z.object({
  id: z.string().min(1, "ID is required"),
  category: z.string().min(1, "Category is required"),
  question: z.string().min(1, "Question text is required"),
  difficulty: z.enum(DIFFICULTY_LEVELS),
  expectedTopics: z.array(z.string()).min(1, "At least one expected topic required"),
  estimatedTimeSeconds: z.number().int().positive("Estimated time must be a positive integer"),
});

export const GeneratedQuestionsListSchema = z.array(GeneratedQuestionSchema);
