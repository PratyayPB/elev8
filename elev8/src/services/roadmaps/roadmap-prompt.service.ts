import { RoadmapRequest } from "@/features/roadmaps/types";
import { ROADMAP_SYSTEM_PROMPT, ROADMAP_USER_PROMPT_TEMPLATE } from "./roadmap-prompts";

export class RoadmapPromptService {
  /**
   * Returns the system prompt instructing the LLM on output requirements and structure.
   */
  public static getSystemPrompt(): string {
    return ROADMAP_SYSTEM_PROMPT;
  }

  /**
   * Constructs the user prompt by injecting personalization parameters from RoadmapRequest.
   */
  public static getUserPrompt(request: RoadmapRequest): string {
    let personalizationText = "No additional personalization answers provided.";

    if (request.personalization && !request.personalization.skipped && request.personalization.answers.length > 0) {
      personalizationText = request.personalization.answers
        .map((ans, idx) => `Q${idx + 1} (${ans.questionId}): ${ans.selectedOptions.join(", ")}`)
        .join("\n");
    }

    const hoursText = typeof request.hoursPerWeek === "number" ? `${request.hoursPerWeek}` : "Flexible";

    return ROADMAP_USER_PROMPT_TEMPLATE
      .replace("{role}", request.role)
      .replace("{experienceLevel}", request.experienceLevel)
      .replace("{hoursPerWeek}", hoursText)
      .replace("{personalizationText}", personalizationText);
  }
}
