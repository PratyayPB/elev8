import { z } from "zod";
import { DIFFICULTY_LEVELS, EXPERIENCE_LEVELS } from "../constants/index";

export const AnswerSchema = z.object({
  questionId: z.string(),
  selectedOptions: z.array(z.string()),
});

export const InterviewRequestStage1Schema = z.object({
  role: z.string().min(2, "Role must be at least 2 characters"),
  experienceLevel: z.enum(EXPERIENCE_LEVELS, {
    required_error: "Please select an experience level",
  }),
  difficulty: z.enum(DIFFICULTY_LEVELS, {
    required_error: "Please select a difficulty level",
  }),
  interviewType: z.enum(
    [
      "Quick Practice",
      "Standard Interview",
      "Comprehensive Interview",
      "Mock Final Round",
    ],
    { required_error: "Please select an interview type" }
  ),
});

export const InterviewRequestSchema = InterviewRequestStage1Schema.extend({
  questionCount: z.number().min(5).max(20),
  personalization: z.object({
    skipped: z.boolean(),
    answers: z.array(AnswerSchema),
  }).superRefine((data, ctx) => {
    // Only enforce at least 1 option per answer if personalization is NOT skipped
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
