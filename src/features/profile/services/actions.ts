"use server";

import { getOrCreateDbUser } from "@/lib/auth";
import { ProfileService, ProfileConflictError } from "./profile.service";
import { ProfileData, ProfileCreateInput, ProfileUpdateInput } from "../types";
import { revalidatePath } from "next/cache";

export async function getProfileAction(): Promise<ProfileData | null> {
  const user = await getOrCreateDbUser();
  return await ProfileService.getProfile(user.id);
}

export async function createProfileAction(
  data: ProfileCreateInput
): Promise<{ success: boolean; profile?: ProfileData; error?: string }> {
  try {
    const user = await getOrCreateDbUser();
    const created = await ProfileService.createProfile(user.id, data);

    revalidatePath("/dashboard");
    revalidatePath("/dashboard/settings");
    revalidatePath("/dashboard/onboarding");

    return { success: true, profile: created };
  } catch (err: unknown) {
    if (err instanceof ProfileConflictError) {
      return { success: false, error: err.message };
    }
    const errorMsg = err instanceof Error ? err.message : "Failed to create profile";
    return { success: false, error: errorMsg };
  }
}

export async function updateProfileAction(
  data: ProfileUpdateInput
): Promise<{ success: boolean; profile?: ProfileData; error?: string }> {
  try {
    const user = await getOrCreateDbUser();
    const updated = await ProfileService.updateProfile(user.id, data);

    revalidatePath("/dashboard");
    revalidatePath("/dashboard/settings");

    return { success: true, profile: updated };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Failed to update profile";
    return { success: false, error: errorMsg };
  }
}

export async function upsertProfileAction(
  data: Partial<ProfileCreateInput>
): Promise<{ success: boolean; profile?: ProfileData; error?: string }> {
  try {
    const user = await getOrCreateDbUser();
    const upserted = await ProfileService.upsertProfile(user.id, data);

    revalidatePath("/dashboard");
    revalidatePath("/dashboard/settings");

    return { success: true, profile: upserted };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Failed to save profile";
    return { success: false, error: errorMsg };
  }
}
