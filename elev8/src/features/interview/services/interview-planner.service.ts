import { getInterviewGenAI, INTERVIEW_GEMINI_MODEL } from "./gemini";
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
    const ai = getInterviewGenAI();
    const userPrompt = buildPlannerUserPrompt(request, targetQuestionCount);

    const response = await ai.models.generateContent({
      model: INTERVIEW_GEMINI_MODEL,
      contents: [
        { role: "user", parts: [{ text: `${INTERVIEW_PLANNER_SYSTEM_PROMPT}\n\n${userPrompt}` }] },
      ],
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text?.trim() || "";
    let rawJson: unknown;
    try {
      rawJson = JSON.parse(text);
    } catch (e) {
      throw new Error(`Failed to parse AI Plan response as JSON: ${text}`);
    }

    return InterviewValidator.validatePlan(rawJson, targetQuestionCount);
  }
}
