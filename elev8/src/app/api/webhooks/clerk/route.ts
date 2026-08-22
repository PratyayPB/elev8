import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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
