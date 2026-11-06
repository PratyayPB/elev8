import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";
import { getOrCreateDbUser } from "@/lib/auth";
import { UserQuotaService } from "@/services/quota/user-quota.service";

/**
 * Route handler providing authorized client upload tokens for direct-to-storage PDF uploads.
 * Bypasses Node.js server memory buffering by streaming directly from browser to Vercel Blob.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const dbUser = await getOrCreateDbUser();
    if (!dbUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 1. Assert upload quota before authorizing Vercel Blob storage allocation
    await UserQuotaService.assertResumeUploadQuota(dbUser.id);

    // 2. Negotiate client upload token with strict content-type and size boundaries
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        // Enforce sanitized path structure: resumes/originals/{userId}_{timestamp}_{filename}
        const sanitizedFilename = pathname.replace(/[^a-zA-Z0-9._-]/g, "_");
        return {
          allowedContentTypes: ["application/pdf"],
          maximumSizeInBytes: 10 * 1024 * 1024, // 10MB maximum PDF size
          addRandomSuffix: true,
          pathname: `resumes/originals/${dbUser.id}_${Date.now()}_${sanitizedFilename}`,
          tokenPayload: JSON.stringify({ userId: dbUser.id }),
        };
      },
      onUploadCompleted: async () => {
        // Logged on Vercel Edge when client completes upload
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error: unknown) {
    console.error("[ResumeUploadRoute] Error authorizing client upload:", error);
    const msg = error instanceof Error ? error.message : "Failed to authorize file upload.";
    let status = 400;
    if (msg.includes("Unauthorized") || msg.includes("sign in")) {
      status = 401;
    } else if (msg.includes("Quota exceeded") || msg.includes("Rate limit")) {
      status = 429;
    }
    return NextResponse.json({ error: msg }, { status });
  }
}
