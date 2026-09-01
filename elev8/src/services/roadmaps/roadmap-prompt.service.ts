import { RoadmapRequest, ProfileContext } from "@/features/roadmaps/types";
import {
  ROADMAP_SYSTEM_PROMPT,
  ROADMAP_USER_PROMPT_TEMPLATE,
} from "./roadmap-prompts";

export class RoadmapPromptService {
  /**
   * Returns the system prompt instructing the LLM on output requirements and structure.
   */
  public static getSystemPrompt(): string {
    return ROADMAP_SYSTEM_PROMPT;
  }

  /**
   * Formats normalized ProfileContext into a clean string representation for the LLM.
   */
  public static formatProfileContext(context: ProfileContext | null | undefined): string {
    if (!context) {
      return "No profile context provided. Generate a standard general roadmap.";
    }

    const sections: string[] = [];

    // Current Situation
    const situationLines: string[] = [];
    if (context.currentStatus) {
      situationLines.push(`Current Status: ${context.currentStatus}`);
    }
    if (context.currentRole) {
      situationLines.push(`Current Role: ${context.currentRole}`);
    }
    if (context.yearsOfExperience != null) {
      situationLines.push(`Years of Experience: ${context.yearsOfExperience}`);
    }
    if (situationLines.length > 0) {
      sections.push(situationLines.join("\n"));
    }

    // Career Goals
    if (context.primaryGoal) {
      sections.push(`Primary Career Goal: ${context.primaryGoal}`);
    }

    // Education
    const educationLines: string[] = [];
    if (context.highestQualification) {
      educationLines.push(`Highest Qualification: ${context.highestQualification}`);
    }
    if (context.fieldOfStudy) {
      educationLines.push(`Field of Study: ${context.fieldOfStudy}`);
    }
    if (educationLines.length > 0) {
      sections.push(educationLines.join("\n"));
    }

    // Company Preference
    if (context.targetCompanyType) {
      sections.push(`Target Company Type: ${context.targetCompanyType}`);
    }

    // Learning Availability (if provided in Profile)
    if (context.weeklyLearningHours != null && context.weeklyLearningHours > 0) {
      sections.push(`Weekly Learning Availability: ${context.weeklyLearningHours} hours/week`);
    }

    // Existing Skills
    if (context.existingSkills && context.existingSkills.length > 0) {
      const skillLines = context.existingSkills.map(
        (s) => `- ${s.name} — ${s.proficiency}`
      );
      sections.push(`Existing Skills:\n${skillLines.join("\n")}`);
    }

    if (sections.length === 0) {
      return "No profile context provided. Generate a standard general roadmap.";
    }

    return sections.join("\n\n");
  }

  /**
   * Constructs the user prompt by injecting personalization parameters from RoadmapRequest.
   */
  public static getUserPrompt(request: RoadmapRequest): string {
    let profileContextText = "No profile context provided. Generate a standard general roadmap.";
    let weeklyHoursText = "";

    const ctx = request.personalization?.profileContext;
    if (!request.personalization?.skipped && ctx) {
      profileContextText = this.formatProfileContext(ctx);
      if (ctx.weeklyLearningHours != null && ctx.weeklyLearningHours > 0) {
        weeklyHoursText = `Weekly Time Commitment: ${ctx.weeklyLearningHours} hours/week\n`;
      }
    }

    return ROADMAP_USER_PROMPT_TEMPLATE
      .replace("{role}", request.role)
      .replace("{experienceLevel}", request.experienceLevel)
      .replace("{weeklyHoursText}", weeklyHoursText)
      .replace("{profileContextText}", profileContextText);
  }
}
