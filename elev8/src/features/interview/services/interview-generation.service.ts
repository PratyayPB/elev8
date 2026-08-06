import { GoogleGenAI } from "@google/genai";
import { InterviewRequest, InterviewPlan, GeneratedQuestion } from "../types";
import { INTERVIEW_GENERATOR_SYSTEM_PROMPT, buildGeneratorUserPrompt } from "../constants/interview-prompts";
import { InterviewValidator } from "./interview-validator";

export class InterviewGenerationService {
  public static async generateQuestions(
    request: InterviewRequest,
    plan: InterviewPlan
  ): Promise<GeneratedQuestion[]> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }

    const ai = new GoogleGenAI({ apiKey });
    const userPrompt = buildGeneratorUserPrompt(request, JSON.stringify(plan, null, 2));

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [
        { role: "user", parts: [{ text: `${INTERVIEW_GENERATOR_SYSTEM_PROMPT}\n\n${userPrompt}` }] },
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
      throw new Error(`Failed to parse AI Questions response as JSON: ${text}`);
    }

    return InterviewValidator.validateQuestions(rawJson, request.questionCount);
  }
}
