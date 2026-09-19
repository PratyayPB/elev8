import { NextResponse } from "next/server";
import { ProfileService } from "@/features/profile/services";
import { getOrCreateDbUser } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getOrCreateDbUser().catch(() => null);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const profile = await ProfileService.getProfile(user.id);
    if (!profile) {
      return NextResponse.json({ profile: null }, { status: 200 });
    }

    return NextResponse.json(profile, { status: 200 });
  } catch (error) {
    console.error("GET /api/profile error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
