import { z } from "zod";
import { RESUME_EXPERIENCE_LEVELS, MAX_FILE_SIZE_BYTES, SUPPORTED_FILE_TYPES } from "../constants";

export const ResumeAnswerSchema = z.object({
  questionId: z.string(),
  selectedOptions: z.array(z.string()),
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
  personalization: z
    .object({
      skipped: z.boolean(),
      answers: z.array(ResumeAnswerSchema),
    })
    .superRefine((data, ctx) => {
      if (!data.skipped) {
        data.answers.forEach((ans, index) => {
          if (!ans.selectedOptions || ans.selectedOptions.length === 0) {
            ctx.addIssue({
              code: z.ZodIssueCode.too_small,
              minimum: 1,
              type: "array",
              inclusive: true,
              exact: false,
              message: "Please select at least one option",
              path: ["answers", index, "selectedOptions"],
            });
          }
        });
      }
    }),
});
