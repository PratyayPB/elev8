import { z } from "zod";

export type ExperienceLevel = "Beginner" | "Basic" | "Intermediate" | "Advanced";
export type StudyHours = number | "Flexible";

export const QuestionSchema = z.object({
  id: z.string(),
  question: z.string().min(1, "Question text is required"),
  type: z.enum(["single", "multi"]),
  options: z.array(z.string()).min(2, "Must provide at least 2 options"),
});

export const QuestionsListSchema = z
  .array(QuestionSchema)
  .max(4, "Maximum of 4 questions allowed");

export type Question = z.infer<typeof QuestionSchema>;

export interface Answer {
  questionId: string;
  selectedOptions: string[];
}

export const AnswerSchema = z.object({
  questionId: z.string(),
  selectedOptions: z.array(z.string()),
});

export const Stage1Schema = z.object({
  role: z.string().min(1, "Target Role is required"),
  hoursPerWeek: z.union([z.number().positive(), z.literal("Flexible")]),
  experienceLevel: z.enum(["Beginner", "Basic", "Intermediate", "Advanced"]),
});

export type Stage1FormData = z.infer<typeof Stage1Schema>;

export const RoadmapRequestSchema = z.object({
  role: z.string().min(1),
  hoursPerWeek: z.union([z.number().positive(), z.literal("Flexible")]),
  experienceLevel: z.enum(["Beginner", "Basic", "Intermediate", "Advanced"]),
  personalization: z.object({
    skipped: z.boolean(),
    answers: z.array(AnswerSchema),
  }),
});

export type RoadmapRequest = z.infer<typeof RoadmapRequestSchema>;

export interface RoadmapNode {
  id: string;
  title: string;
  description: string;
  type: string;
  category?: string;
  estimatedHours?: number;
}

export interface RoadmapEdge {
  id: string;
  source: string;
  target: string;
}

export interface LearningResource {
  id: string;
  title: string;
  url: string;
  type: string;
  isFree: boolean;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  skillsRequired: string[];
  keyFeatures?: string[];
}

export interface CareerTip {
  id: string;
  category: string;
  tip: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  order: number;
  estimatedWeeks: number;
  skillsCovered: string[];
  resources: LearningResource[];
  projects?: Project[];
}

export interface RoadmapMetadata {
  title: string;
  role: string;
  estimatedDuration: string;
  experienceLevel: ExperienceLevel;
  generatedAt: string;
}

export interface GeneratedRoadmap {
  metadata: RoadmapMetadata;
  summary: string;
  milestones: Milestone[];
  projects: Project[];
  resources: LearningResource[];
  careerTips: CareerTip[];
  logicalGraph: {
    nodes: RoadmapNode[];
    edges: RoadmapEdge[];
  };
}

