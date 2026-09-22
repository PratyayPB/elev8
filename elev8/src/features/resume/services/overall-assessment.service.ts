import { llm } from "@/lib/llm";
import { ResumeOverallAssessment, ResumeProfileContext, ResumeSectionAssessment } from "../types";
import { RESUME_OVERALL_ASSESSMENT_PROMPT } from "../constants/resume-prompts";
import { ResumeValidator } from "./resume-validator";

export class OverallAssessmentService {
  /**
   * Generates overall resume assessment and ATS analysis based on structured section evaluations and target context.
   */
  public static async assessOverall(
    sectionAssessment: ResumeSectionAssessment,
    role: string,
    experienceLevel: string,
    roleDescription?: string,
    profile?: ResumeProfileContext
  ): Promise<ResumeOverallAssessment> {
    const contextPayload = {
      target: {
        role,
        experienceLevel,
        ...(roleDescription ? { jobDescription: roleDescription } : {}),
      },
      profile: profile || null,
      sectionAssessment,
    };

    const prompt = `${RESUME_OVERALL_ASSESSMENT_PROMPT}\n\nEVALUATION CONTEXT:\n${JSON.stringify(contextPayload, null, 2)}`;

    const response = await llm.generate({
      feature: "resume-overall-assessment",
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
        throw new Error(`Failed to parse Overall Assessment response as JSON: ${text}`);
      }
    }

    if (!rawJson) {
      throw new Error(`Failed to parse Overall Assessment response as JSON: ${text}`);
    }

    return ResumeValidator.validateOverallAssessment(rawJson);
  }
}
