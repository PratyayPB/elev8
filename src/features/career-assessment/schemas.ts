import { z } from "zod";
import {
  ASSESSMENT_MAX_ARRAY_LENGTH,
  ASSESSMENT_MAX_NARRATIVE_LENGTH,
} from "./constants";

export const AssessmentOutputSchema = z.object({
  readinessScore: z
    .number()
    .int()
    .min(0, "Readiness score must be at least 0")
    .max(100, "Readiness score must be at most 100"),
  strengths: z
    .array(z.string().min(1, "Strength item cannot be empty"))
    .min(1, "At least one strength is required")
    .max(
      ASSESSMENT_MAX_ARRAY_LENGTH,
      `At most ${ASSESSMENT_MAX_ARRAY_LENGTH} strengths allowed`
    ),
  gaps: z
    .array(z.string().min(1, "Gap item cannot be empty"))
    .min(1, "At least one gap is required")
    .max(
      ASSESSMENT_MAX_ARRAY_LENGTH,
      `At most ${ASSESSMENT_MAX_ARRAY_LENGTH} gaps allowed`
    ),
  suggestedFocusAreas: z
    .array(z.string().min(1, "Focus area item cannot be empty"))
    .min(1, "At least one focus area is required")
    .max(
      ASSESSMENT_MAX_ARRAY_LENGTH,
      `At most ${ASSESSMENT_MAX_ARRAY_LENGTH} focus areas allowed`
    ),
  narrative: z
    .string()
    .min(1, "Narrative cannot be empty")
    .max(
      ASSESSMENT_MAX_NARRATIVE_LENGTH,
      `Narrative must not exceed ${ASSESSMENT_MAX_NARRATIVE_LENGTH} characters`
    ),
});

export type AssessmentOutputParsed = z.infer<typeof AssessmentOutputSchema>;
