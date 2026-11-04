import { cache } from "react";
import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

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
 * Wrapped in React cache() to deduplicate queries within a single server request lifecycle.
 */
export const getOrCreateDbUser = cache(async () => {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    throw new Error("Unauthorized: Please sign in.");
  }

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
});
