import { z } from "zod";

export type ExperienceLevel = "Beginner" | "Basic" | "Intermediate" | "Advanced";
export type StudyHours = number | "Flexible";

export const ExistingSkillSchema = z.object({
  name: z.string(),
  proficiency: z.string(),
});

export const ProfileContextSchema = z.object({
  currentStatus: z.string().nullable(),
  currentRole: z.string().nullable(),
  yearsOfExperience: z.number().nullable(),
  highestQualification: z.string().nullable(),
  fieldOfStudy: z.string().nullable(),
  targetCompanyType: z.string().nullable(),
  weeklyLearningHours: z.number().nullable(),
  primaryGoal: z.string().nullable().optional(),
  existingSkills: z.array(ExistingSkillSchema),
});

export type ProfileContext = z.infer<typeof ProfileContextSchema>;

export const Stage1Schema = z.object({
  role: z.string().min(1, "Target Role is required"),
  experienceLevel: z.enum(["Beginner", "Basic", "Intermediate", "Advanced"]),
});

export type Stage1FormData = z.infer<typeof Stage1Schema>;

export const RoadmapRequestSchema = z.object({
  role: z.string().min(1),
  experienceLevel: z.enum(["Beginner", "Basic", "Intermediate", "Advanced"]),
  personalization: z.object({
    skipped: z.boolean(),
    profileContext: ProfileContextSchema.nullable().optional(),
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

import { RoadmapStatus, CareerLevel } from "@prisma/client";

export interface LibraryRoadmap {
  id: string;
  title: string;
  description: string | null;
  targetRole: string | null;
  experienceLevel: CareerLevel | null;
  status: RoadmapStatus;
  estimatedDuration: string | null;
  blobUrl: string | null;
  personalized: boolean;
  isGlobal: boolean;
  isOwner: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}

