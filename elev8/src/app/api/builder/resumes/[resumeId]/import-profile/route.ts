import { NextResponse } from "next/server";
import { z } from "zod";
import { getOrCreateDbUser } from "@/lib/auth";
import {
  ResumeBuilderService,
  ResumeBuilderError,
} from "@/features/resume-builder/services/resume-builder.service";
import { BuilderResumeArtifactSchema } from "@/features/resume-builder/schemas/resume-artifact.schema";

const ImportProfileRequestSchema = z.object({
  currentArtifact: BuilderResumeArtifactSchema.optional(),
  clientVersion: z.number().int().nonnegative().optional(),
});

export async function POST(
  req: Request,
  { params }: { params: Promise<{ resumeId: string }> }
) {
  try {
    const dbUser = await getOrCreateDbUser();
    const { resumeId } = await params;
    const body = await req.json().catch(() => null);

    if (body !== null && typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid JSON payload", code: "INVALID_BODY" },
        { status: 400 }
      );
    }

    const parseResult = ImportProfileRequestSchema.safeParse(body ?? {});
    if (!parseResult.success) {
      return NextResponse.json(
        {
          error: "Invalid request payload",
          details: parseResult.error.format(),
          code: "INVALID_PAYLOAD",
        },
        { status: 400 }
      );
    }

    const { currentArtifact, clientVersion } = parseResult.data;

    const result = await ResumeBuilderService.importProfileData(
      dbUser.id,
      resumeId,
      currentArtifact,
      clientVersion
    );

    if (!result.isCompleted) {
      return NextResponse.json(
        {
          isCompleted: false,
          error: "PROFILE_INCOMPLETE",
          message: "Please complete your profile to import profile data.",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        isCompleted: true,
        artifact: result.artifact,
        version: result.version,
        savedAt: result.savedAt?.toISOString(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    if (error instanceof ResumeBuilderError) {
      return NextResponse.json(
        { error: error.message, code: error.code },
        { status: error.statusCode }
      );
    }
    if (error?.message?.includes("Unauthorized")) {
      return NextResponse.json(
        { error: "Unauthorized", code: "UNAUTHORIZED" },
        { status: 401 }
      );
    }
    console.error("POST /api/builder/resumes/[resumeId]/import-profile error:", error);
    return NextResponse.json(
      { error: "Internal server error", code: "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}
