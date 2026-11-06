import { cache } from "react";
import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { CacheService, CacheKeys, CacheTTL } from "@/services/cache";

export async function getAuthSession() {
  return await auth();
}

export async function getAuthUser() {
  return await currentUser();
}

export async function requireAuth() {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  return userId;
}

/**
 * Returns or creates the database user record for the authenticated Clerk session.
 * Deduplicated in-memory per request lifecycle via React cache(), and cached across
 * requests via Redis (15-minute TTL) to eliminate repetitive database lookups.
 */
export const getOrCreateDbUser = cache(async () => {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    throw new Error("Unauthorized: Please sign in.");
  }

  const user = await CacheService.getOrSet(
    CacheKeys.userByClerkId(clerkId),
    async () => {
      const existingUser = await prisma.user.findUnique({
        where: { clerkId },
      });

      if (existingUser) {
        return existingUser;
      }

      const clerkUser = await currentUser();
      const primaryEmail = clerkUser?.emailAddresses?.[0]?.emailAddress;

      return prisma.user.upsert({
        where: { clerkId },
        create: {
          clerkId,
          email: primaryEmail,
        },
        update: {
          email: primaryEmail,
        },
      });
    },
    CacheTTL.USER_SESSION
  );

  // Re-hydrate Date objects if parsed from JSON
  if (user) {
    if (typeof user.createdAt === "string") user.createdAt = new Date(user.createdAt);
    if (typeof user.updatedAt === "string") user.updatedAt = new Date(user.updatedAt);
  }

  return user;
});
