import { llm } from "@/lib/llm";
import { InterviewArtifact, QuestionFeedback } from "../types";
import { BULK_QUESTION_ASSESSMENT_PROMPT } from "./assessment-prompts";
import { BulkQuestionAssessmentSchema } from "../assessment-schema";

export class QuestionAssessmentService {
  public static async assessQuestions(artifact: InterviewArtifact): Promise<Record<string, QuestionFeedback>> {
    // Prepare the payload for the AI
    const payload = artifact.questions.map((q) => {
      const answer = artifact.answers.find((a) => a.questionId === q.id);
      return {
        id: q.id,
        category: q.category,
        question: q.question,
        expectedTopics: q.expectedTopics,
        difficulty: q.difficulty,
        estimatedTimeSeconds: q.estimatedTimeSeconds,
        actualTimeSeconds: answer?.actualTimeSeconds ?? null,
        userAnswer: answer ? answer.answerText : "",
      };
    });

    const userPrompt = `Assess the following questions and answers:\n\n${JSON.stringify(payload, null, 2)}`;

    const response = await llm.generate({
      feature: "interview-question-assessment",
      systemInstruction: BULK_QUESTION_ASSESSMENT_PROMPT,
      prompt: userPrompt,
      responseMimeType: "application/json",
    });

    const text = response.text?.trim() || "";
    let rawJson: unknown = response.parsed;
    if (!rawJson && text) {
      try {
        rawJson = JSON.parse(text);
      } catch (e) {
        throw new Error(`Failed to parse AI Question Assessment response as JSON: ${text}`);
      }
    }

    // If AI returned top-level dictionary of question IDs directly without "assessments" wrapper, normalize it
    if (typeof rawJson === "object" && rawJson !== null && !Array.isArray(rawJson) && !("assessments" in rawJson)) {
      rawJson = { assessments: rawJson };
    }

    // Validate and return
    const parsed = BulkQuestionAssessmentSchema.parse(rawJson);
    return parsed.assessments;
  }
}
