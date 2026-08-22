import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { ProfileService, calculateProfileCompleteness } from "@/features/profile/services";
import {
  CareerAssessmentService,
  ModuleActivityContextService,
} from "@/features/career-assessment/services";

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
      return NextResponse.json(
        { assessment: null, isStale: false },
        { status: 200 }
      );
    }

    const profile = await ProfileService.getProfile(user.id);
    const assessment = await CareerAssessmentService.getLatestAssessment(
      user.id,
      profile?.profileVersion
    );

    return NextResponse.json(
      {
        assessment,
        isStale: assessment?.isStale || false,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("GET /api/career-assessment error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST() {
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
        { error: "Profile not found. Please create your profile first." },
        { status: 400 }
      );
    }

    const completeness = calculateProfileCompleteness(profile);
    if (completeness.state !== "COMPLETED") {
      return NextResponse.json(
        {
          error:
            "Your profile must be 100% complete before taking a Career Assessment.",
          completeness,
        },
        { status: 400 }
      );
    }

    // Rate-limiting / anti-spam guard: prevent multiple submissions within 10 seconds
    const tenSecondsAgo = new Date(Date.now() - 10 * 1000);
    const recentDuplicate = await prisma.careerAssessment.findFirst({
      where: {
        userId: user.id,
        createdAt: { gte: tenSecondsAgo },
      },
    });

    if (recentDuplicate) {
      return NextResponse.json(
        { error: "An assessment was just generated. Please wait a moment." },
        { status: 429 }
      );
    }

    const activity = await ModuleActivityContextService.getRecentActivity(user.id);
    const assessment = await CareerAssessmentService.createAssessment(
      user.id,
      profile,
      activity
    );

    return NextResponse.json({ assessment }, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/career-assessment error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
