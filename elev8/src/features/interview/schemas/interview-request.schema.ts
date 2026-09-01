import { z } from "zod";
import { DIFFICULTY_LEVELS, EXPERIENCE_LEVELS } from "../constants/index";

export const InterviewProfileContextSchema = z.object({
  currentStatus: z.string().nullable().optional(),
  currentRole: z.string().nullable().optional(),
  yearsOfExperience: z.number().nullable().optional(),
  highestQualification: z.string().nullable().optional(),
  fieldOfStudy: z.string().nullable().optional(),
  primaryGoal: z.string().nullable().optional(),
  targetCompanyType: z.string().nullable().optional(),
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
  questionCount: z.number().min(1).max(30).optional(),
  personalization: z.object({
    skipped: z.boolean(),
    profile: InterviewProfileContextSchema.nullable().optional(),
  }),
});
