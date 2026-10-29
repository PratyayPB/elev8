"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { LLMPreference, LLMSelectorService } from "@/lib/llm";
import { revalidatePath } from "next/cache";

export interface ActionResult<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

/**
 * Server action to update the user's universal LLM preference.
 */
export async function updateLLMPreferenceAction(
  preference: LLMPreference
): Promise<ActionResult<{ preference: LLMPreference }>> {
  try {
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        error: "You must be signed in to update your settings.",
      };
    }

    if (!LLMSelectorService.isValidPreference(preference)) {
      return {
        success: false,
        error: "Invalid AI preference selection.",
      };
    }

    // Upsert or update user with the preference
    await prisma.user.upsert({
      where: { clerkId: userId },
      update: { llmPreference: preference },
      create: {
        clerkId: userId,
        llmPreference: preference,
      },
    });

    revalidatePath("/dashboard/settings");

    return {
      success: true,
      data: { preference },
    };
  } catch (error) {
    console.error("[SettingsAction] Failed to update LLM preference:", error);
    return {
      success: false,
      error: "Unable to save your AI preference. Please try again.",
    };
  }
}

/**
 * Server action to permanently delete the user's account and associated data.
 */
export async function deleteAccountAction(): Promise<ActionResult> {
  try {
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        error: "You must be signed in to delete your account.",
      };
    }

    // 1. Delete user from local database (cascades all related profile and feature records)
    await prisma.user.deleteMany({
      where: { clerkId: userId },
    });

    // 2. Delete user from Clerk
    try {
      const client = await clerkClient();
      await client.users.deleteUser(userId);
    } catch (clerkErr) {
      console.error("[SettingsAction] Failed to delete user in Clerk:", clerkErr);
      // Even if Clerk delete throws, DB records are already cleaned up
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error("[SettingsAction] Failed to delete account:", error);
    return {
      success: false,
      error: "Unable to delete your account. Please try again or contact support.",
    };
  }
}
