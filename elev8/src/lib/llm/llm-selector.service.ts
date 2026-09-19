import { prisma } from "@/lib/prisma";
import { LLMPreference } from "@prisma/client";

export type { LLMPreference };

export const DEFAULT_LLM_PREFERENCE: LLMPreference = "BALANCED";

/**
 * Server-side centralized model mapping.
 * UI never knows these mappings directly.
 * As requested for this version, all tiers map to "gemini-3.7-flash".
 */
export const LLM_MODEL_MAP: Record<LLMPreference, string> = {
  FAST: "gemini-3.7-flash",
  BALANCED: "gemini-3.7-flash",
  THINK: "gemini-3.7-flash",
};

export class LLMSelectorService {
  /**
   * Resolves model name string from abstract preference tier.
   * Gracefully falls back to BALANCED default if undefined or invalid.
   */
  public static resolveModel(preference?: LLMPreference | string | null): string {
    if (preference && preference in LLM_MODEL_MAP) {
      return LLM_MODEL_MAP[preference as LLMPreference];
    }
    return LLM_MODEL_MAP[DEFAULT_LLM_PREFERENCE];
  }

  /**
   * Retrieves the user's stored LLM preference from the database.
   * Returns DEFAULT_LLM_PREFERENCE ("BALANCED") on missing record or error.
   */
  public static async getUserPreference(userId: string): Promise<LLMPreference> {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { llmPreference: true },
      });

      if (user?.llmPreference && user.llmPreference in LLM_MODEL_MAP) {
        return user.llmPreference;
      }
    } catch (error) {
      console.error("[LLMSelectorService] Failed to load user LLM preference:", error);
    }

    return DEFAULT_LLM_PREFERENCE;
  }

  /**
   * Single resolution point for model selection across all modules.
   * Resolves the configured model name for a specific user ID.
   */
  public static async getModelForUser(userId: string): Promise<string> {
    const preference = await this.getUserPreference(userId);
    return this.resolveModel(preference);
  }

  /**
   * Validates whether a given string is a recognized LLMPreference.
   */
  public static isValidPreference(val: unknown): val is LLMPreference {
    return typeof val === "string" && (val === "FAST" || val === "BALANCED" || val === "THINK");
  }
}
