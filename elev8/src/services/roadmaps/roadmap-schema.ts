import { z } from "zod";

export const RoadmapNodeSchema = z.object({
  id: z.string().min(1, "Node ID is required"),
  title: z.string().min(1, "Node title is required"),
  description: z.string(),
  type: z.string().default("skill"),
  category: z.string().optional(),
  estimatedHours: z.number().optional(),
});

export const RoadmapEdgeSchema = z.object({
  id: z.string().min(1, "Edge ID is required"),
  source: z.string().min(1, "Edge source is required"),
  target: z.string().min(1, "Edge target is required"),
});

export const LearningResourceSchema = z.object({
  id: z.string(),
  title: z.string(),
  url: z.string(),
  type: z.string(),
  isFree: z.boolean(),
  description: z.string().optional(),
});

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]),
  skillsRequired: z.array(z.string()),
  keyFeatures: z.array(z.string()).optional(),
});

export const CareerTipSchema = z.object({
  id: z.string(),
  category: z.string(),
  tip: z.string(),
});

export const MilestoneSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  order: z.number(),
  estimatedWeeks: z.number(),
  skillsCovered: z.array(z.string()),
  resources: z.array(LearningResourceSchema),
  projects: z.array(ProjectSchema).optional(),
});

export const RoadmapMetadataSchema = z.object({
  title: z.string(),
  role: z.string(),
  estimatedDuration: z.string(),
  experienceLevel: z.enum(["Beginner", "Basic", "Intermediate", "Advanced"]),
  generatedAt: z.string(),
});

export const LogicalGraphSchema = z.object({
  nodes: z.array(RoadmapNodeSchema).min(1, "Graph must contain at least one node"),
  edges: z.array(RoadmapEdgeSchema),
});

export const GeneratedRoadmapSchema = z.object({
  metadata: RoadmapMetadataSchema,
  summary: z.string(),
  milestones: z.array(MilestoneSchema).min(1, "Roadmap must contain at least one milestone"),
  projects: z.array(ProjectSchema),
  resources: z.array(LearningResourceSchema),
  careerTips: z.array(CareerTipSchema),
  logicalGraph: LogicalGraphSchema,
});
