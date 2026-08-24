import { z } from "zod";
import {
  CareerStatus,
  PrimaryGoal,
  SkillProficiency,
  CareerExperienceLevel,
  TargetCompanyType,
} from "./types";
import { PROFILE_VALIDATION } from "./constants";

export const skillProficiencySchema = z.nativeEnum(SkillProficiency);
export const careerStatusSchema = z.nativeEnum(CareerStatus);
export const currentStatusSchema = careerStatusSchema;
export const primaryGoalSchema = z.nativeEnum(PrimaryGoal);
export const careerExperienceLevelSchema = z.nativeEnum(CareerExperienceLevel);
export const targetCompanyTypeSchema = z.nativeEnum(TargetCompanyType);

export const profileSkillSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Skill name is required")
    .max(PROFILE_VALIDATION.SKILL_NAME_MAX, `Maximum ${PROFILE_VALIDATION.SKILL_NAME_MAX} characters`),
  proficiency: skillProficiencySchema,
});

export const profileDesiredSkillSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Skill name is required")
    .max(PROFILE_VALIDATION.DESIRED_SKILL_MAX, `Maximum ${PROFILE_VALIDATION.DESIRED_SKILL_MAX} characters`),
});

export const profileEducationSchema = z.object({
  highestQualification: z
    .string()
    .trim()
    .min(1, "Highest qualification is required")
    .max(PROFILE_VALIDATION.QUALIFICATION_MAX),
  fieldOfStudy: z
    .string()
    .trim()
    .min(1, "Field of study is required")
    .max(PROFILE_VALIDATION.FIELD_OF_STUDY_MAX),
});

export const profileCareerGoalsSchema = z.object({
  primaryGoal: primaryGoalSchema,
  targetRole: z
    .string()
    .trim()
    .max(PROFILE_VALIDATION.TARGET_ROLE_MAX)
    .optional()
    .nullable()
    .transform((val) => (val && val.trim().length > 0 ? val.trim() : null)),
});

export const mandatoryProfileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(PROFILE_VALIDATION.NAME_MIN, "Name is required")
    .max(PROFILE_VALIDATION.NAME_MAX, `Maximum ${PROFILE_VALIDATION.NAME_MAX} characters`),
  age: z.coerce
    .number({ invalid_type_error: "Age must be a number" })
    .int("Age must be an integer")
    .min(PROFILE_VALIDATION.AGE_MIN, `Age must be at least ${PROFILE_VALIDATION.AGE_MIN}`)
    .max(PROFILE_VALIDATION.AGE_MAX, `Age must be at most ${PROFILE_VALIDATION.AGE_MAX}`),
  country: z.string().trim().min(1, "Country is required"),
  phoneNumber: z.string().trim().min(1, "Phone number is required"),
});

export const optionalProfileSchema = z.object({
  currentStatus: currentStatusSchema.nullable().optional(),
  currentRole: z
    .string()
    .trim()
    .max(PROFILE_VALIDATION.ROLE_MAX)
    .nullable()
    .optional(),
  yearsOfExperience: z.coerce
    .number({ invalid_type_error: "Years of experience must be a number" })
    .int("Years of experience must be an integer")
    .min(0, "Years of experience cannot be negative")
    .nullable()
    .optional(),

  highestQualification: z
    .string()
    .trim()
    .max(PROFILE_VALIDATION.QUALIFICATION_MAX)
    .nullable()
    .optional(),
  fieldOfStudy: z
    .string()
    .trim()
    .max(PROFILE_VALIDATION.FIELD_OF_STUDY_MAX)
    .nullable()
    .optional(),

  primaryGoal: primaryGoalSchema.nullable().optional(),
  targetRole: z
    .string()
    .trim()
    .max(PROFILE_VALIDATION.TARGET_ROLE_MAX)
    .optional()
    .nullable()
    .transform((val) => (val && val.trim().length > 0 ? val.trim() : null)),

  targetCompanyType: targetCompanyTypeSchema.nullable().optional(),

  weeklyLearningHours: z.coerce
    .number({ invalid_type_error: "Weekly learning hours must be a number" })
    .int("Weekly learning hours must be an integer")
    .min(1, "Must be at least 1 hour")
    .max(168, "Cannot exceed 168 hours")
    .nullable()
    .optional(),

  skills: z
    .array(profileSkillSchema)
    .max(PROFILE_VALIDATION.MAX_SKILLS, `Cannot exceed ${PROFILE_VALIDATION.MAX_SKILLS} skills`)
    .default([]),
  desiredSkills: z
    .array(
      z
        .string()
        .trim()
        .min(1, "Desired skill cannot be empty")
        .max(PROFILE_VALIDATION.DESIRED_SKILL_MAX)
    )
    .max(
      PROFILE_VALIDATION.MAX_DESIRED_SKILLS,
      `Cannot exceed ${PROFILE_VALIDATION.MAX_DESIRED_SKILLS} desired skills`
    )
    .default([]),
});

export const profileCreateSchema = mandatoryProfileSchema.merge(optionalProfileSchema.partial());
export const profileUpdateSchema = profileCreateSchema.partial();
export const profileUpsertSchema = profileCreateSchema.partial();

export type MandatoryProfileSchemaType = z.infer<typeof mandatoryProfileSchema>;
export type OptionalProfileSchemaType = z.infer<typeof optionalProfileSchema>;
export type ProfileCreateSchemaType = z.infer<typeof profileCreateSchema>;
export type ProfileUpdateSchemaType = z.infer<typeof profileUpdateSchema>;
export type ProfileSkillSchemaType = z.infer<typeof profileSkillSchema>;
