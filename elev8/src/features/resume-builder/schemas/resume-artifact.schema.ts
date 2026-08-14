import { z } from "zod";

export const PersonalInformationSchema = z.object({
  fullName: z.string().default(""),
  email: z.string().default(""),
  phone: z.string().optional(),
  location: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  portfolio: z.string().optional(),
});

export const EducationEntrySchema = z.object({
  id: z.string(),
  institution: z.string(),
  degree: z.string(),
  fieldOfStudy: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  description: z.string().optional(),
});

export const ExperienceEntrySchema = z.object({
  id: z.string(),
  jobTitle: z.string(),
  company: z.string(),
  location: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  currentlyWorking: z.boolean().optional(),
  description: z.string().optional(),
  achievements: z.array(z.string()).optional(),
});

export const ProjectEntrySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  technologies: z.array(z.string()).optional(),
  url: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});

export const SkillEntrySchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string().optional(),
  proficiency: z.string().optional(),
});

export const CertificationEntrySchema = z.object({
  id: z.string(),
  name: z.string(),
  issuingOrganization: z.string().optional(),
  issueDate: z.string().optional(),
  expiryDate: z.string().optional(),
  credentialUrl: z.string().optional(),
});

export const AchievementEntrySchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  date: z.string().optional(),
});

export const BuilderResumeArtifactSchema = z.object({
  resumeId: z.string(),
  version: z.number().int().positive(),
  personalInformation: PersonalInformationSchema,
  professionalSummary: z.string().default(""),
  education: z.array(EducationEntrySchema).default([]),
  experience: z.array(ExperienceEntrySchema).default([]),
  projects: z.array(ProjectEntrySchema).default([]),
  skills: z.array(SkillEntrySchema).default([]),
  certifications: z.array(CertificationEntrySchema).default([]),
  achievements: z.array(AchievementEntrySchema).default([]),
});

export const BuilderResumeTemplateEnum = z.enum(["CLASSIC", "MODERN", "MINIMAL"]);
export const BuilderResumeStatusEnum = z.enum(["DRAFT", "READY", "ARCHIVED"]);

export const CreateResumeInputSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title is too long"),
  targetRole: z.string().optional(),
  template: BuilderResumeTemplateEnum.optional().default("CLASSIC"),
});

export const UpdateResumeInputSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title is too long").optional(),
  targetRole: z.string().optional().nullable(),
  template: BuilderResumeTemplateEnum.optional(),
  status: BuilderResumeStatusEnum.optional(),
});

export type CreateResumeInput = z.infer<typeof CreateResumeInputSchema>;
export type UpdateResumeInput = z.infer<typeof UpdateResumeInputSchema>;
