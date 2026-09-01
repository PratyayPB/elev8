import { GoogleGenAI } from "@google/genai";
import { ParsedResume, ResumeProfileContext, ResumeSectionAssessment } from "../types";
import { RESUME_SECTION_ASSESSMENT_PROMPT } from "../constants/resume-prompts";
import { ResumeValidator } from "./resume-validator";

export class SectionAssessmentService {
  /**
   * Assesses all resume sections using a single bulk Gemini call.
   */
  public static async assessSections(
    parsedResume: ParsedResume,
    role: string,
    experienceLevel: string,
    roleDescription?: string,
    profile?: ResumeProfileContext
  ): Promise<ResumeSectionAssessment> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }

    const ai = new GoogleGenAI({ apiKey });

    const contextPayload = {
      target: {
        role,
        experienceLevel,
        ...(roleDescription ? { jobDescription: roleDescription } : {}),
      },
      profile: profile || null,
      resume: parsedResume,
    };

    const prompt = `${RESUME_SECTION_ASSESSMENT_PROMPT}\n\nEVALUATION CONTEXT:\n${JSON.stringify(contextPayload, null, 2)}`;

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
      throw new Error(`Failed to parse Section Assessment response as JSON: ${text}`);
    }

    return ResumeValidator.validateSectionAssessment(rawJson);
  }
}
