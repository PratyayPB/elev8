import { llm } from "@/lib/llm";
import { InterviewRequest, InterviewPlan, GeneratedQuestion } from "../types";
import {
  INTERVIEW_GENERATOR_SYSTEM_PROMPT,
  buildGeneratorUserPrompt,
  DEFAULT_INTERVIEW_QUESTION_COUNT,
} from "../constants/interview-prompts";
import { InterviewValidator } from "./interview-validator";

export class InterviewGenerationService {
  public static async generateQuestions(
    request: InterviewRequest,
    plan: InterviewPlan,
    targetQuestionCount: number = request.questionCount || DEFAULT_INTERVIEW_QUESTION_COUNT
  ): Promise<GeneratedQuestion[]> {
    const userPrompt = buildGeneratorUserPrompt(request, JSON.stringify(plan, null, 2), targetQuestionCount);

    const response = await llm.generate({
      feature: "interview-questions",
      systemInstruction: INTERVIEW_GENERATOR_SYSTEM_PROMPT,
      prompt: userPrompt,
      responseMimeType: "application/json",
      temperature: 0.2,
    });

    const text = response.text?.trim() || "";
    let rawJson: unknown = response.parsed;
    if (!rawJson && text) {
      try {
        rawJson = JSON.parse(text);
      } catch (e) {
        throw new Error(`Failed to parse AI Questions response as JSON: ${text}`);
      }
    }

    if (!rawJson) {
      throw new Error(`Failed to parse AI Questions response as JSON: ${text}`);
    }

    return InterviewValidator.validateQuestions(rawJson, targetQuestionCount);
  }
}
