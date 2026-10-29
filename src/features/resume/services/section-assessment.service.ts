import { llm } from "@/lib/llm";
import { ParsedResume, ResumeProfileContext, ResumeSectionAssessment } from "../types";
import { RESUME_SECTION_ASSESSMENT_PROMPT } from "../constants/resume-prompts";
import { ResumeValidator } from "./resume-validator";

export class SectionAssessmentService {
  /**
   * Assesses all resume sections using multi-provider LLM fallback.
   */
  public static async assessSections(
    parsedResume: ParsedResume,
    role: string,
    experienceLevel: string,
    roleDescription?: string,
    profile?: ResumeProfileContext
  ): Promise<ResumeSectionAssessment> {
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

    const response = await llm.generate({
      feature: "resume-section-assessment",
      prompt,
      responseMimeType: "application/json",
      temperature: 0.2,
    });

    const text = response.text?.trim() || "";
    let rawJson: unknown = response.parsed;
    if (!rawJson && text) {
      try {
        rawJson = JSON.parse(text);
      } catch (e) {
        throw new Error(`Failed to parse Section Assessment response as JSON: ${text}`);
      }
    }

    if (!rawJson) {
      throw new Error(`Failed to parse Section Assessment response as JSON: ${text}`);
    }

    return ResumeValidator.validateSectionAssessment(rawJson);
  }
}
