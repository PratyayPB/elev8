import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { ProfileService, calculateProfileCompleteness } from "@/features/profile/services";

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
      const emptyCompleteness = calculateProfileCompleteness(null);
      return NextResponse.json(emptyCompleteness, { status: 200 });
    }

    const profile = await ProfileService.getProfile(user.id);
    const completeness = calculateProfileCompleteness(profile);

    return NextResponse.json(completeness, { status: 200 });
  } catch (error) {
    console.error("GET /api/profile/completion error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
