import { z } from "zod";

export const PersonalInformationSchema = z.object({
  fullName: z.string().nullish().transform((v) => v ?? ""),
  email: z.string().nullish().transform((v) => v ?? ""),
  label: z.string().nullish().transform((v) => v ?? ""),
  image: z.string().nullish().transform((v) => v ?? ""),
  phone: z.string().nullish().transform((v) => v ?? ""),
  location: z.string().nullish().transform((v) => v ?? ""),
  city: z.string().nullish().transform((v) => v ?? ""),
  region: z.string().nullish().transform((v) => v ?? ""),
  countryCode: z.string().nullish().transform((v) => v ?? ""),
  linkedin: z.string().nullish().transform((v) => v ?? ""),
  github: z.string().nullish().transform((v) => v ?? ""),
  twitter: z.string().nullish().transform((v) => v ?? ""),
  portfolio: z.string().nullish().transform((v) => v ?? ""),
});

export const EducationEntrySchema = z.object({
  id: z.string(),
  institution: z.string().nullish().transform((v) => v ?? ""),
  degree: z.string().nullish().transform((v) => v ?? ""),
  fieldOfStudy: z.string().nullish().transform((v) => v ?? ""),
  startDate: z.string().nullish().transform((v) => v ?? ""),
  endDate: z.string().nullish().transform((v) => v ?? ""),
  score: z.string().nullish().transform((v) => v ?? ""),
  courses: z.array(z.string()).nullish().transform((v) => v ?? []),
  description: z.string().nullish().transform((v) => v ?? ""),
});

export const ExperienceEntrySchema = z.object({
  id: z.string(),
  jobTitle: z.string().nullish().transform((v) => v ?? ""),
  company: z.string().nullish().transform((v) => v ?? ""),
  location: z.string().nullish().transform((v) => v ?? ""),
  startDate: z.string().nullish().transform((v) => v ?? ""),
  endDate: z.string().nullish().transform((v) => v ?? ""),
  currentlyWorking: z.boolean().nullish().transform((v) => Boolean(v)),
  description: z.string().nullish().transform((v) => v ?? ""),
  achievements: z.array(z.string()).nullish().transform((v) => v ?? []),
});

export const ProjectEntrySchema = z.object({
  id: z.string(),
  name: z.string().nullish().transform((v) => v ?? ""),
  description: z.string().nullish().transform((v) => v ?? ""),
  technologies: z.array(z.string()).nullish().transform((v) => v ?? []),
  url: z.string().nullish().transform((v) => v ?? ""),
  startDate: z.string().nullish().transform((v) => v ?? ""),
  endDate: z.string().nullish().transform((v) => v ?? ""),
});

export const SkillEntrySchema = z.object({
  id: z.string(),
  name: z.string().nullish().transform((v) => v ?? ""),
  category: z.string().nullish().transform((v) => v ?? ""),
  proficiency: z.string().nullish().transform((v) => v ?? ""),
});

export const CertificationEntrySchema = z.object({
  id: z.string(),
  name: z.string().nullish().transform((v) => v ?? ""),
  issuingOrganization: z.string().nullish().transform((v) => v ?? ""),
  issueDate: z.string().nullish().transform((v) => v ?? ""),
  expiryDate: z.string().nullish().transform((v) => v ?? ""),
  credentialUrl: z.string().nullish().transform((v) => v ?? ""),
});

export const AchievementEntrySchema = z.object({
  id: z.string(),
  title: z.string().nullish().transform((v) => v ?? ""),
  awarder: z.string().nullish().transform((v) => v ?? ""),
  description: z.string().nullish().transform((v) => v ?? ""),
  date: z.string().nullish().transform((v) => v ?? ""),
});

export const LanguageEntrySchema = z.object({
  id: z.string(),
  language: z.string().nullish().transform((v) => v ?? ""),
  fluency: z.string().nullish().transform((v) => v ?? ""),
});

export const VolunteerEntrySchema = z.object({
  id: z.string(),
  organization: z.string().nullish().transform((v) => v ?? ""),
  position: z.string().nullish().transform((v) => v ?? ""),
  url: z.string().nullish().transform((v) => v ?? ""),
  startDate: z.string().nullish().transform((v) => v ?? ""),
  endDate: z.string().nullish().transform((v) => v ?? ""),
  summary: z.string().nullish().transform((v) => v ?? ""),
  highlights: z.array(z.string()).nullish().transform((v) => v ?? []),
});

export const PublicationEntrySchema = z.object({
  id: z.string(),
  name: z.string().nullish().transform((v) => v ?? ""),
  publisher: z.string().nullish().transform((v) => v ?? ""),
  releaseDate: z.string().nullish().transform((v) => v ?? ""),
  url: z.string().nullish().transform((v) => v ?? ""),
  summary: z.string().nullish().transform((v) => v ?? ""),
});

export const InterestEntrySchema = z.object({
  id: z.string(),
  name: z.string().nullish().transform((v) => v ?? ""),
  keywords: z.array(z.string()).nullish().transform((v) => v ?? []),
});

export const ReferenceEntrySchema = z.object({
  id: z.string(),
  name: z.string().nullish().transform((v) => v ?? ""),
  reference: z.string().nullish().transform((v) => v ?? ""),
});

export const BuilderResumeArtifactSchema = z.object({
  resumeId: z.string(),
  version: z.number().int().positive(),
  personalInformation: PersonalInformationSchema,
  professionalSummary: z.string().nullish().transform((v) => v ?? ""),
  education: z.array(EducationEntrySchema).nullish().transform((v) => v ?? []),
  experience: z.array(ExperienceEntrySchema).nullish().transform((v) => v ?? []),
  projects: z.array(ProjectEntrySchema).nullish().transform((v) => v ?? []),
  skills: z.array(SkillEntrySchema).nullish().transform((v) => v ?? []),
  certifications: z.array(CertificationEntrySchema).nullish().transform((v) => v ?? []),
  achievements: z.array(AchievementEntrySchema).nullish().transform((v) => v ?? []),
  languages: z.array(LanguageEntrySchema).nullish().transform((v) => v ?? []),
  volunteer: z.array(VolunteerEntrySchema).nullish().transform((v) => v ?? []),
  publications: z.array(PublicationEntrySchema).nullish().transform((v) => v ?? []),
  interests: z.array(InterestEntrySchema).nullish().transform((v) => v ?? []),
  references: z.array(ReferenceEntrySchema).nullish().transform((v) => v ?? []),
});

export const ResumeBuildStatusEnum = z.enum(["DRAFT", "READY", "ARCHIVED"]);

export const BuilderResumeStatusEnum = ResumeBuildStatusEnum;

export const CreateResumeInputSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Resume title is required")
    .max(100, "Resume title cannot exceed 100 characters"),
  template: z.string().optional().default("academic-cv-lite"),
});

export const UpdateResumeInputSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Resume title is required")
    .max(100, "Resume title cannot exceed 100 characters")
    .optional(),
  template: z.string().optional(),
  status: ResumeBuildStatusEnum.optional(),
});

export type CreateResumeInput = z.infer<typeof CreateResumeInputSchema>;
export type UpdateResumeInput = z.infer<typeof UpdateResumeInputSchema>;
