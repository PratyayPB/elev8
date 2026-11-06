import { NextRequest, NextResponse } from "next/server";
import { getOrCreateDbUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { RealtimeTokenService } from "@/services/jobs/realtime-token.service";

export const dynamic = "force-dynamic";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const dbUser = await getOrCreateDbUser().catch(() => null);
    if (!dbUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const job = await prisma.job.findFirst({
      where: { id, userId: dbUser.id },
      select: { id: true, status: true, triggerRunId: true },
    });

    if (!job || !job.triggerRunId) {
      return NextResponse.json({
        triggerRunId: undefined,
        publicAccessToken: undefined,
        status: job?.status,
      });
    }

    try {
      const publicAccessToken = await RealtimeTokenService.mintRunToken({
        triggerRunId: job.triggerRunId,
      });

      return NextResponse.json({
        triggerRunId: job.triggerRunId,
        publicAccessToken,
        status: job.status,
      });
    } catch (tokenErr) {
      console.warn(`[getJobRealtimeTokenRoute] Token minting failed for job ${id}:`, tokenErr);
      return NextResponse.json({
        triggerRunId: job.triggerRunId,
        publicAccessToken: undefined,
        status: job.status,
      });
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch realtime token";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
