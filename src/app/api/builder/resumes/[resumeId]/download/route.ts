import { NextRequest, NextResponse } from "next/server";
import { getOrCreateDbUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import crypto from "crypto";

/**
 * Validates token signature and returns the decoded payload if valid and not expired.
 */
function verifyDownloadToken(token: string): { resumeId: string; blobUrl: string } | null {
  try {
    const [encoded, signature] = token.split(".");
    if (!encoded || !signature) return null;

    const secret =
      process.env.BLOB_READ_WRITE_TOKEN ||
      process.env.CLERK_SECRET_KEY ||
      process.env.TRIGGER_SECRET_KEY ||
      "elev8-fallback-secret-key";

    const expectedSig = crypto.createHmac("sha256", secret).update(encoded).digest("base64url");
    if (signature !== expectedSig) return null;

    const payload = JSON.parse(Buffer.from(encoded, "base64url").toString("utf-8"));
    if (typeof payload !== "object" || !payload) return null;

    if (payload.exp && Date.now() > payload.exp) return null;

    return {
      resumeId: payload.resumeId,
      blobUrl: payload.blobUrl,
    };
  } catch {
    return null;
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ resumeId: string }> }
) {
  try {
    const { resumeId } = await params;
    const token = req.nextUrl.searchParams.get("token");

    let blobUrl: string | null = null;
    let resumeTitle = "Resume";

    // 1. Try Token-based authentication (works without Clerk cookies e.g. direct link or download popup)
    if (token) {
      const verified = verifyDownloadToken(token);
      if (verified && verified.resumeId === resumeId) {
        blobUrl = verified.blobUrl;
        const resume = await prisma.resumeBuild.findUnique({
          where: { id: resumeId },
          select: { title: true },
        });
        if (resume?.title) {
          resumeTitle = resume.title;
        }
      }
    }

    // 2. If token auth didn't match or wasn't provided, fallback to standard Clerk session authentication
    if (!blobUrl) {
      const dbUser = await getOrCreateDbUser().catch(() => null);
      if (!dbUser) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const resume = await prisma.resumeBuild.findUnique({
        where: { id: resumeId, userId: dbUser.id },
        select: { title: true },
      });

      if (!resume) {
        return NextResponse.json({ error: "Resume not found" }, { status: 404 });
      }

      resumeTitle = resume.title;

      // Check if caller explicitly passed a blobUrl in query params
      const queryBlobUrl = req.nextUrl.searchParams.get("blobUrl");
      if (queryBlobUrl && queryBlobUrl.includes(".blob.vercel-storage.com")) {
        blobUrl = queryBlobUrl;
      }
    }

    if (!blobUrl) {
      return NextResponse.json(
        { error: "No export artifact found or specified for this resume" },
        { status: 400 }
      );
    }

    // Fetch the private PDF buffer using BlobStorageService (authenticated via BLOB_READ_WRITE_TOKEN)
    const pdfBuffer = await BlobStorageService.fetchBuffer(blobUrl);

    const sanitizedFilename = (resumeTitle || "Resume")
      .replace(/[\/\\?%*:|"<>]/g, "")
      .trim()
      .replace(/\s+/g, "-");

    return new NextResponse(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${sanitizedFilename}.pdf"`,
        "Content-Length": pdfBuffer.byteLength.toString(),
        "Cache-Control": "private, max-age=3600",
      },
    });
  } catch (error: any) {
    console.error("[DownloadResumePdfRoute] Failed to serve PDF:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to download resume PDF" },
      { status: 500 }
    );
  }
}
