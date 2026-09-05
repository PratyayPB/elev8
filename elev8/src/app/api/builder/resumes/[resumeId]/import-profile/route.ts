import { NextResponse } from "next/server";
import { getOrCreateDbUser } from "@/lib/auth";
import {
  ResumeBuilderService,
  ResumeBuilderError,
} from "@/features/resume-builder/services/resume-builder.service";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ resumeId: string }> }
) {
  try {
    const dbUser = await getOrCreateDbUser();
    const { resumeId } = await params;
    const body = await req.json().catch(() => ({}));
    const { currentArtifact, clientVersion } = body;

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
