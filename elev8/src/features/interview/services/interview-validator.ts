import { InterviewPlan, GeneratedQuestion, InterviewArtifact } from "../types";
import { InterviewPlanSchema, GeneratedQuestionsListSchema } from "../constants/interview-schema";

export class InterviewValidator {
  /**
   * Validates the AI generated plan against Zod schema and question counts
   */
  public static validatePlan(rawJson: unknown, expectedTotalQuestions: number): InterviewPlan {
    const parsed = InterviewPlanSchema.safeParse(rawJson);
    if (!parsed.success) {
      throw new Error(`Plan validation failed: ${parsed.error.message}`);
    }

    const plan = parsed.data as InterviewPlan;
    const totalPlanQuestions = plan.sections.reduce((acc, sec) => acc + sec.questions, 0);

    if (totalPlanQuestions !== expectedTotalQuestions) {
      throw new Error(
        `Plan question count mismatch: expected ${expectedTotalQuestions}, but total section questions equal ${totalPlanQuestions}`
      );
    }

    return plan;
  }

  /**
   * Validates the generated questions array against schema, count, and duplicate IDs
   */
  public static validateQuestions(
    rawJson: unknown,
    expectedTotalQuestions: number
  ): GeneratedQuestion[] {
    const parsed = GeneratedQuestionsListSchema.safeParse(rawJson);
    if (!parsed.success) {
      throw new Error(`Questions validation failed: ${parsed.error.message}`);
    }

    const questions = parsed.data as GeneratedQuestion[];

    if (questions.length !== expectedTotalQuestions) {
      throw new Error(
        `Questions length mismatch: expected ${expectedTotalQuestions}, received ${questions.length}`
      );
    }

    const seenIds = new Set<string>();
    for (const q of questions) {
      if (seenIds.has(q.id)) {
        throw new Error(`Duplicate question ID detected: ${q.id}`);
      }
      seenIds.add(q.id);

      if (!q.estimatedTimeSeconds || q.estimatedTimeSeconds <= 0) {
        throw new Error(`Invalid estimatedTimeSeconds for question ${q.id}: ${q.estimatedTimeSeconds}`);
      }
    }

    return questions;
  }
}
