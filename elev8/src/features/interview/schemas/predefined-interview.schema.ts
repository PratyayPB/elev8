import { z } from "zod";

export const TemplateQuestionSchema = z.object({
  id: z.string(),
  question: z.string().min(1),
  answer: z.literal(""),
  category: z.string().optional(),
  expectedTopics: z.array(z.string()).optional(),
  estimatedAnswerTime: z.union([z.number(), z.string()]).optional(),
});

export const TemplateBlobSchema = z.object({
  templateId: z.string(),
  role: z.string(),
  type: z.enum(["TECHNICAL", "NON_TECHNICAL", "BEHAVIORAL"]),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]),
  questions: z.record(z.string(), TemplateQuestionSchema),
});

export type TemplateQuestion = z.infer<typeof TemplateQuestionSchema>;
export type TemplateBlob = z.infer<typeof TemplateBlobSchema>;

export const UserArtifactMetadataSchema = z.object({
  interviewId: z.string(),
  role: z.string(),
  experienceLevel: z.string(),
  difficulty: z.string(),
  interviewType: z.string(),
  questionCount: z.number(),
  estimatedDuration: z.string(),
  generatedAt: z.string(),
  generatorVersion: z.string(),
  source: z.literal("PREDEFINED").optional(),
  templateId: z.string().optional(),
  predefinedInterviewId: z.string().optional(),
});

export type UserArtifactMetadata = z.infer<typeof UserArtifactMetadataSchema>;
