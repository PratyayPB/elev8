import { NextRequest, NextResponse } from "next/server";
import { ProfileService } from "@/features/profile/services/profile.service";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const eventType = payload?.type;
    const data = payload?.data;

    if (!eventType || !data) {
      return NextResponse.json({ error: "Missing type or data" }, { status: 400 });
    }

    const clerkId = data.id;

    if (eventType === "user.created" || eventType === "user.updated") {
      const email = data.email_addresses?.[0]?.email_address ?? null;
      const fullName = [data.first_name, data.last_name].filter(Boolean).join(" ") || null;
      const profilePicture = data.image_url ?? null;

      await ProfileService.getOrCreateProfile(clerkId, email, fullName, profilePicture);
      if (eventType === "user.updated") {
        await ProfileService.updateProfile(clerkId, {
          email,
          fullName,
          profilePicture,
        });
      }
      return NextResponse.json({ message: `Handled ${eventType}` }, { status: 200 });
    }

    if (eventType === "user.deleted") {
      await ProfileService.deleteProfile(clerkId);
      return NextResponse.json({ message: "Handled user.deleted" }, { status: 200 });
    }

    return NextResponse.json({ message: `Ignored ${eventType}` }, { status: 200 });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "Webhook error";
    console.error("Clerk Webhook Error:", error);
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}
