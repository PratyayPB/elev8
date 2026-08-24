import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { Webhook } from "svix";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
      console.error("Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local");
      return NextResponse.json({ error: "Configuration error" }, { status: 500 });
    }

    const headerPayload = await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    if (!svix_id || !svix_timestamp || !svix_signature) {
      return NextResponse.json({ error: "Error occured -- no svix headers" }, { status: 400 });
    }

    const payloadString = await req.text();
    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: any;
    try {
      evt = wh.verify(payloadString, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      });
    } catch (err) {
      console.error("Error verifying webhook:", err);
      return NextResponse.json({ error: "Error occured" }, { status: 400 });
    }

    const eventType = evt.type;
    const data = evt.data;

    if (!eventType || !data) {
      return NextResponse.json({ error: "Missing type or data" }, { status: 400 });
    }

    const clerkId = data.id;

    if (eventType === "user.created" || eventType === "user.updated") {
      const email = data.email_addresses?.[0]?.email_address ?? null;

      await prisma.user.upsert({
        where: { clerkId },
        create: {
          clerkId,
          email,
        },
        update: {
          email,
        },
      });

      return NextResponse.json({ message: `Handled ${eventType}` }, { status: 200 });
    }

    if (eventType === "user.deleted") {
      await prisma.user.deleteMany({
        where: { clerkId },
      });
      return NextResponse.json({ message: "Handled user.deleted" }, { status: 200 });
    }

    return NextResponse.json({ message: `Ignored ${eventType}` }, { status: 200 });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "Webhook error";
    console.error("Clerk Webhook Error:", error);
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}
