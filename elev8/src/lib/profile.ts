import { prisma } from "./prisma";

/**
 * Checks if the given user has a profile record.
 */
export async function isProfileComplete(userId: string): Promise<boolean> {
  if (process.env.SKIP_PROFILE_GATE === "true" || process.env.NODE_ENV === "development") {
    return true;
  }

  const profile = await prisma.profile.findUnique({
    where: { userId },
    select: { id: true },
  });

  return !!profile;
}
