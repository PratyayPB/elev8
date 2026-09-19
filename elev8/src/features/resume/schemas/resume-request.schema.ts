import { z } from "zod";
import { RESUME_EXPERIENCE_LEVELS, MAX_FILE_SIZE_BYTES, SUPPORTED_FILE_TYPES } from "../constants";

export const ResumeProfileContextSchema = z.object({
  currentRole: z.string().nullable().optional(),
  currentStatus: z.string().nullable().optional(),
  yearsOfExperience: z.number().nullable().optional(),
  highestQualification: z.string().nullable().optional(),
  fieldOfStudy: z.string().nullable().optional(),
  primaryGoal: z.string().nullable().optional(),
  targetCompanyType: z.string().nullable().optional(),
  skills: z.array(z.string()).nullable().optional(),
  desiredSkills: z.array(z.string()).nullable().optional(),
});

export const ResumeStage1Schema = z.object({
  role: z.string().min(2, "Target role must be at least 2 characters"),
  roleDescription: z.string().optional(),
  experienceLevel: z.enum(RESUME_EXPERIENCE_LEVELS, {
    required_error: "Please select an experience level",
  }),
  uploadedFile: z
    .custom<File>((val) => typeof window !== "undefined" && val instanceof File, {
      message: "Please upload a valid PDF file",
    })
    .refine((file) => file && SUPPORTED_FILE_TYPES.includes(file.type), {
      message: "Only PDF files are supported",
    })
    .refine((file) => file && file.size > 0, {
      message: "Uploaded file cannot be empty",
    })
    .refine((file) => file && file.size <= MAX_FILE_SIZE_BYTES, {
      message: "File size must be 10 MB or less",
    }),
});

export const ResumeRequestSchema = ResumeStage1Schema.extend({
  personalization: z.object({
    skipped: z.boolean(),
    profile: ResumeProfileContextSchema.nullable().optional(),
  }),
});

export const ServerResumeAssessmentSchema = z.object({
  role: z
    .string({ required_error: "Target role is required" })
    .trim()
    .min(2, "Target role must be at least 2 characters")
    .max(100, "Target role must be 100 characters or less"),
  roleDescription: z.string().trim().max(5000, "Role description too long").optional(),
  experienceLevel: z.enum(RESUME_EXPERIENCE_LEVELS, {
    required_error: "Please select a valid experience level",
  }),
  includeProfile: z.boolean().default(false),
  file: z
    .custom<File>(
      (val) => val !== null && typeof val === "object" && typeof (val as any).arrayBuffer === "function",
      { message: "A valid PDF file is required" }
    )
    .refine(
      (file) => {
        const type = (file as any).type;
        const name = (file as any).name;
        return type === "application/pdf" || (typeof name === "string" && name.toLowerCase().endsWith(".pdf"));
      },
      { message: "Only PDF files are supported" }
    )
    .refine((file) => (file as any).size > 0, {
      message: "Uploaded file cannot be empty",
    })
    .refine((file) => (file as any).size <= MAX_FILE_SIZE_BYTES, {
      message: "File size must be 10 MB or less",
    }),
});

export type ServerResumeAssessmentInput = z.infer<typeof ServerResumeAssessmentSchema>;
