import { llm } from "@/lib/llm";
import { InterviewRequest, InterviewPlan } from "../types";
import {
  INTERVIEW_PLANNER_SYSTEM_PROMPT,
  buildPlannerUserPrompt,
  DEFAULT_INTERVIEW_QUESTION_COUNT,
} from "../constants/interview-prompts";
import { InterviewValidator } from "./interview-validator";

export class InterviewPlannerService {
  public static async generatePlan(
    request: InterviewRequest,
    targetQuestionCount: number = request.questionCount || DEFAULT_INTERVIEW_QUESTION_COUNT
  ): Promise<InterviewPlan> {
    const userPrompt = buildPlannerUserPrompt(request, targetQuestionCount);

    const response = await llm.generate({
      feature: "interview-planner",
      systemInstruction: INTERVIEW_PLANNER_SYSTEM_PROMPT,
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
        throw new Error(`Failed to parse AI Plan response as JSON: ${text}`);
      }
    }

    if (!rawJson) {
      throw new Error(`Failed to parse AI Plan response as JSON: ${text}`);
    }

    return InterviewValidator.validatePlan(rawJson, targetQuestionCount);
  }
}
