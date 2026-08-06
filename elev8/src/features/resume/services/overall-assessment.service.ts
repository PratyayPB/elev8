import { GoogleGenAI } from "@google/genai";
import { ResumeOverallAssessment, ResumeSectionAssessment } from "../types";
import { RESUME_OVERALL_ASSESSMENT_PROMPT } from "../constants/resume-prompts";
import { ResumeValidator } from "./resume-validator";

export class OverallAssessmentService {
  /**
   * Generates overall resume assessment and ATS analysis based ONLY on structured section evaluations.
   */
  public static async assessOverall(
    sectionAssessment: ResumeSectionAssessment,
    role: string,
    experienceLevel: string
  ): Promise<ResumeOverallAssessment> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }

    const ai = new GoogleGenAI({ apiKey });

    const contextPayload = {
      targetRole: role,
      experienceLevel,
      sectionAssessment,
    };

    const prompt = `${RESUME_OVERALL_ASSESSMENT_PROMPT}\n\nSECTION EVALUATIONS:\n${JSON.stringify(contextPayload, null, 2)}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text?.trim() || "";
    let rawJson: unknown;
    try {
      rawJson = JSON.parse(text);
    } catch (e) {
      throw new Error(`Failed to parse Overall Assessment response as JSON: ${text}`);
    }

    return ResumeValidator.validateOverallAssessment(rawJson);
  }
}
