"use server";

import { RecommendationData } from "./types";

/**
 * Dormant server action for recommendations.
 */
export async function getRecommendationsAction(): Promise<{
  success: boolean;
  recommendations: RecommendationData[];
}> {
  return { success: true, recommendations: [] };
}

export async function refreshRecommendationsAction(): Promise<{
  success: boolean;
  recommendations: RecommendationData[];
}> {
  return { success: true, recommendations: [] };
}

export async function acceptRecommendationAction(id: string): Promise<{
  success: boolean;
}> {
  return { success: true };
}

export async function dismissRecommendationAction(id: string): Promise<{
  success: boolean;
}> {
  return { success: true };
}
