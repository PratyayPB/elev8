import { z } from "zod";

export const resumeInfoSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Invalid email format").optional().or(z.literal("")),
  phone: z.string().optional(),
  location: z.string().optional(),
  linkedin: z.string().url("Invalid URL").optional().or(z.literal("")),
  github: z.string().url("Invalid URL").optional().or(z.literal("")),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
});

export const workExperienceSchema = z.object({
  company: z.string().min(1, "Company is required"),
  role: z.string().min(1, "Role is required"),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  highlights: z.array(z.string()),
});

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  technologies: z.array(z.string()),
  link: z.string().url("Invalid URL").optional().or(z.literal("")),
});

export const educationSchema = z.object({
  institution: z.string().min(1, "Institution is required"),
  degree: z.string().min(1, "Degree is required"),
  fieldOfStudy: z.string().optional(),
  graduationDate: z.string().optional(),
  gpa: z.string().optional(),
});

export const resumeProfileSchema = z.object({
  personalInformation: resumeInfoSchema,
  summary: z.string().optional(),
  skills: z.array(z.string()),
  projects: z.array(projectSchema),
  experience: z.array(workExperienceSchema),
  education: z.array(educationSchema),
  certifications: z.array(z.string()),
  achievements: z.array(z.string()),
});

export type ResumeProfileInput = z.infer<typeof resumeProfileSchema>;
