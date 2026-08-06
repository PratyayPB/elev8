import { GoogleGenAI } from "@google/genai";
import { InterviewRequest, InterviewPlan } from "../types";
import { INTERVIEW_PLANNER_SYSTEM_PROMPT, buildPlannerUserPrompt } from "../constants/interview-prompts";
import { InterviewValidator } from "./interview-validator";

export class InterviewPlannerService {
  public static async generatePlan(request: InterviewRequest): Promise<InterviewPlan> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }

    const ai = new GoogleGenAI({ apiKey });
    const userPrompt = buildPlannerUserPrompt(request);

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
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

    return InterviewValidator.validatePlan(rawJson, request.questionCount);
  }
}
