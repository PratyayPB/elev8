import { auth, currentUser } from "@clerk/nextjs/server";

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
