import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { ProfileService } from "@/features/profile/services";
import { SkillGapService } from "@/features/skill-gap/services";

export async function GET() {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const profile = await ProfileService.getProfile(user.id);
    if (!profile) {
      return NextResponse.json(
        { error: "Profile not found. Please complete your profile first." },
        { status: 404 }
      );
    }

    const gapAnalysis = await SkillGapService.calculateForProfile(profile);

    return NextResponse.json({ gapAnalysis }, { status: 200 });
  } catch (error: any) {
    console.error("GET /api/profile/skill-gap error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
