import { z } from "zod";
import {
  CareerStatus,
  PrimaryGoal,
  SkillProficiency,
  CareerExperienceLevel,
  TargetCompanyType,
} from "./types";
import { PROFILE_VALIDATION } from "./constants";
import { isValidCountryCode } from "@/lib/data/countries";
import { parsePhoneNumberWithError, CountryCode } from "libphonenumber-js";
import { normalizeCareerStatus } from "./utils";

export const skillProficiencySchema = z.enum(["BEGINNER", "BASIC", "INTERMEDIATE", "ADVANCED", "EXPERT"]);
export const careerStatusSchema = z.enum(["STUDENT", "EMPLOYED", "SELF_EMPLOYED", "BUSINESS_OWNER", "FREELANCER", "JOB_SEEKER", "RECENT_GRADUATE", "OTHER"]);
export const currentStatusSchema = careerStatusSchema;
export const primaryGoalSchema = z.enum(["LAND_A_JOB", "GET_AN_INTERNSHIP", "SWITCH_CAREER", "GET_PROMOTED", "LEARN_NEW_SKILLS", "PREPARE_FOR_INTERVIEW", "BUILD_RESUME", "IMPROVE_RESUME", "BECOME_JOB_READY", "EXPLORE_CAREERS", "OTHER"]);
export const careerExperienceLevelSchema = z.enum(["ENTRY", "JUNIOR", "MID", "SENIOR", "LEAD"]);
export const targetCompanyTypeSchema = z.enum(["STARTUP", "MID_SIZE", "ENTERPRISE", "FAANG", "GOVERNMENT", "NON_PROFIT", "NO_PREFERENCE"]);

const validatePhoneNumber = (data: any, ctx: z.RefinementCtx) => {
  const hasCountryCode = !!data.phoneCountryCode;
  const hasNumber = !!data.phoneNumber;

  if (hasCountryCode && !hasNumber) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Phone number is required when country code is provided.",
      path: ["phoneNumber"],
    });
    return;
  }

  if (!hasCountryCode && hasNumber) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Country code is required when phone number is provided.",
      path: ["phoneCountryCode"],
    });
    return;
  }

  if (hasCountryCode && hasNumber) {
    try {
      // Validate complete international number
      // Assuming phoneCountryCode already includes '+' e.g. "+91"
      const fullNumber = `${data.phoneCountryCode}${data.phoneNumber}`;
      const phone = parsePhoneNumberWithError(fullNumber);
      if (!phone.isValid()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Enter a valid international phone number.",
          path: ["phoneNumber"],
        });
      }
    } catch (error) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Enter a valid international phone number.",
        path: ["phoneNumber"],
      });
    }
  }
};

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
  country: z
    .string()
    .trim()
    .min(1, "Country is required")
    .refine((val) => isValidCountryCode(val), {
      message: "Please select a valid country",
    }),
});

export const optionalProfileSchema = z.object({
  phoneCountryCode: z
    .string()
    .trim()
    .transform((val) => (val === "" ? null : val))
    .nullable()
    .optional(),
  phoneNumber: z
    .string()
    .trim()
    .transform((val) => (val === "" ? null : val))
    .nullable()
    .optional(),
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

const transformProfile = <
  T extends {
    phoneCountryCode?: string | null;
    phoneNumber?: string | null;
    currentStatus?: any;
  }
>(
  data: T
): T => {
  const result: any = { ...data };
  
  if (result.phoneCountryCode && result.phoneNumber) {
    try {
      const fullNumber = `${result.phoneCountryCode}${result.phoneNumber}`;
      const phone = parsePhoneNumberWithError(fullNumber);
      
      // Extract formatted country code (e.g. "+91") and national number
      const callingCode = phone.countryCallingCode;
      result.phoneCountryCode = `+${callingCode}`;
      result.phoneNumber = phone.nationalNumber;
    } catch (e) {
      // should not happen as superRefine caught it
    }
  }

  if (result.currentStatus) {
    result.currentStatus = normalizeCareerStatus(result.currentStatus);
  }
  return result;
};

export const profileCreateSchema = mandatoryProfileSchema.merge(optionalProfileSchema.partial()).superRefine(validatePhoneNumber).transform(transformProfile);
export const profileUpdateSchema = mandatoryProfileSchema.partial().merge(optionalProfileSchema.partial()).superRefine(validatePhoneNumber).transform(transformProfile);
export const profileUpsertSchema = mandatoryProfileSchema.partial().merge(optionalProfileSchema.partial()).superRefine(validatePhoneNumber).transform(transformProfile);

export type MandatoryProfileSchemaType = z.infer<typeof mandatoryProfileSchema>;
export type OptionalProfileSchemaType = z.infer<typeof optionalProfileSchema>;
export type ProfileCreateSchemaType = z.infer<typeof profileCreateSchema>;
export type ProfileUpdateSchemaType = z.infer<typeof profileUpdateSchema>;
export type ProfileSkillSchemaType = z.infer<typeof profileSkillSchema>;
