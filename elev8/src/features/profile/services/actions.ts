"use server";

import { requireAuth, getAuthUser } from "@/lib/auth";
import { ProfileService } from "./profile.service";
import { UserProfileData, OnboardingStatus } from "../types";
import { revalidatePath } from "next/cache";

export async function getProfileOrSyncAction(): Promise<UserProfileData> {
  const user = await getAuthUser();
  if (!user) {
    throw new Error("Unauthorized");
  }
  const email = user.emailAddresses?.[0]?.emailAddress ?? null;
  const fullName = user.firstName ? `${user.firstName} ${user.lastName ?? ""}`.trim() : null;
  const profilePicture = user.imageUrl ?? null;

  return await ProfileService.getOrCreateProfile(user.id, email, fullName, profilePicture);
}

export async function updateProfileAction(
  data: Partial<UserProfileData>
): Promise<{ success: boolean; profile?: UserProfileData; error?: string }> {
  try {
    const userId = await requireAuth();
    const updated = await ProfileService.updateProfile(userId, data);
    revalidatePath("/dashboard");
    revalidatePath("/dashboard/settings");
    revalidatePath("/dashboard/onboarding");
    return { success: true, profile: updated };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "An error occurred";
    return { success: false, error: errorMsg };
  }
}

export async function saveOnboardingStepAction(
  step: number,
  data: Partial<UserProfileData>
): Promise<{ success: boolean; profile?: UserProfileData; error?: string }> {
  try {
    const userId = await requireAuth();
    const status: OnboardingStatus = step >= 8 ? "COMPLETED" : "IN_PROGRESS";
    const updated = await ProfileService.updateProfile(userId, {
      ...data,
      onboardingStep: step,
      onboardingStatus: status,
    });
    revalidatePath("/dashboard");
    revalidatePath("/dashboard/onboarding");
    return { success: true, profile: updated };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "An error occurred";
    return { success: false, error: errorMsg };
  }
}

export async function skipOnboardingAction(): Promise<{ success: boolean; error?: string }> {
  try {
    const userId = await requireAuth();
    await ProfileService.setOnboardingStatus(userId, "SKIPPED");
    revalidatePath("/dashboard");
    revalidatePath("/dashboard/onboarding");
    return { success: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "An error occurred";
    return { success: false, error: errorMsg };
  }
}

export async function completeOnboardingAction(): Promise<{ success: boolean; error?: string }> {
  try {
    const userId = await requireAuth();
    await ProfileService.setOnboardingStatus(userId, "COMPLETED", 9);
    revalidatePath("/dashboard");
    revalidatePath("/dashboard/onboarding");
    return { success: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Failed to complete onboarding";
    return { success: false, error: errorMsg };
  }
}
