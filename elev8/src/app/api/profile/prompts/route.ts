import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { ProfileService, getProfileCompletionPrompts } from "@/features/profile/services";
import { PromptContext } from "@/features/profile/types";

const VALID_CONTEXTS: PromptContext[] = [
  "PROFILE",
  "ROADMAP",
  "RESUME",
  "INTERVIEW",
  "DASHBOARD",
];

export async function GET(req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const rawContext = (searchParams.get("context") || "DASHBOARD").toUpperCase() as PromptContext;
    const context: PromptContext = VALID_CONTEXTS.includes(rawContext)
      ? rawContext
      : "DASHBOARD";

    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      const prompts = getProfileCompletionPrompts(null, context);
      return NextResponse.json({ context, prompts }, { status: 200 });
    }

    const profile = await ProfileService.getProfile(user.id);
    const prompts = getProfileCompletionPrompts(profile, context);

    return NextResponse.json({ context, prompts }, { status: 200 });
  } catch (error) {
    console.error("GET /api/profile/prompts error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
