import { z } from "zod";

export const personalInfoSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  country: z.string().optional(),
  timezone: z.string().optional(),
});

export const educationSchema = z.object({
  currentStatus: z.enum(["STUDENT", "GRADUATE", "WORKING_PROFESSIONAL", "CAREER_SWITCHER"]).optional().or(z.literal("")),
  degree: z.string().optional(),
  major: z.string().optional(),
  institution: z.string().optional(),
  graduationYear: z.coerce.number().optional().nullable(),
});

export const professionalSchema = z.object({
  currentRole: z.string().optional(),
  yearsOfExperience: z.coerce.number().min(0).optional().nullable(),
  industry: z.string().optional(),
  employmentStatus: z.string().optional(),
});

export const categorizedSkillsSchema = z.object({
  languages: z.array(z.string()).default([]),
  frameworks: z.array(z.string()).default([]),
  databases: z.array(z.string()).default([]),
  cloud: z.array(z.string()).default([]),
  tools: z.array(z.string()).default([]),
  softSkills: z.array(z.string()).default([]),
});

export const skillsSchema = z.object({
  skills: categorizedSkillsSchema,
});

export const interestsSchema = z.object({
  careerInterests: z.array(z.string()).min(1, "Select at least one interest"),
});

export const goalsSchema = z.object({
  careerGoals: z.array(z.string()).min(1, "Select at least one goal"),
});

export const preferencesSchema = z.object({
  learningStyle: z.string().optional(),
  difficulty: z.string().optional(),
  weeklyHours: z.coerce.number().min(1).max(168).optional().nullable(),
});

export const profileUpdateSchema = personalInfoSchema
  .merge(educationSchema)
  .merge(professionalSchema)
  .merge(skillsSchema)
  .merge(interestsSchema)
  .merge(goalsSchema)
  .merge(preferencesSchema);

export type PersonalInfoSchemaType = z.infer<typeof personalInfoSchema>;
export type EducationSchemaType = z.infer<typeof educationSchema>;
export type ProfessionalSchemaType = z.infer<typeof professionalSchema>;
export type SkillsSchemaType = z.infer<typeof skillsSchema>;
export type InterestsSchemaType = z.infer<typeof interestsSchema>;
export type GoalsSchemaType = z.infer<typeof goalsSchema>;
export type PreferencesSchemaType = z.infer<typeof preferencesSchema>;
export type ProfileUpdateSchemaType = z.infer<typeof profileUpdateSchema>;
