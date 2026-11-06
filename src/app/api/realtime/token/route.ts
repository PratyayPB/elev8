import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import * as Ably from "ably";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

/**
 * Mint an Ably Token scoped to the authenticated user's private notification channel.
 *
 * Security Invariants:
 * 1. Clerk session authentication only (never trust userId or clientId from client request).
 * 2. Strict capability restriction: client can ONLY 'subscribe' to their own notification channel.
 * 3. Token TTL: 1 hour.
 */
export async function POST() {
  try {
    const { userId: clerkUserId } = await auth();

    if (!clerkUserId) {
      return NextResponse.json({ error: "Unauthorized: Please sign in." }, { status: 401 });
    }

    const apiKey = process.env.ABLY_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Realtime messaging is not configured (ABLY_API_KEY missing)" },
        { status: 503 }
      );
    }

    // Resolve internal DB user ID
    const dbUser = await prisma.user.findUnique({
      where: { clerkId: clerkUserId },
      select: { id: true },
    });

    const rest = new Ably.Rest({
      key: apiKey,
      httpRequestTimeout: 4000,
    });

    // Authorize subscribe capability only to user's private notification channels
    const capability: Record<string, string[]> = {
      [`notifications:user:${clerkUserId}`]: ["subscribe"],
    };

    if (dbUser?.id) {
      capability[`notifications:user:${dbUser.id}`] = ["subscribe"];
    }

    const targetChannel = dbUser?.id
      ? `notifications:user:${dbUser.id}`
      : `notifications:user:${clerkUserId}`;

    // Request signed token for native SSE / browser connection
    const tokenDetails = await rest.auth.requestToken({
      clientId: clerkUserId,
      capability: JSON.stringify(capability),
      ttl: 3600 * 1000, // 1 hour
    });

    return NextResponse.json({
      token: tokenDetails.token,
      channelName: targetChannel,
      userId: dbUser?.id || clerkUserId,
      expires: tokenDetails.expires,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to mint realtime token";
    console.error("[RealtimeTokenRoute] Error generating token request:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
