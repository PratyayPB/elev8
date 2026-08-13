import { prisma } from "./prisma";

/**
 * Checks if the given user has a completed profile.
 * FOR NOW: Always returns false as per Phase 3.7 spec.
 * In a future phase, this will check UserProfile fields (e.g., currentStatus, skills).
 */
export async function isProfileComplete(userId: string): Promise<boolean> {
  // Allow bypassing via environment variable or default to true during development
  if (process.env.SKIP_PROFILE_GATE === "true" || process.env.NODE_ENV === "development") {
    return true;
  }
  
  return false;
}
