import { NextResponse } from "next/server";
import { getOrCreateDbUser } from "@/lib/auth";
import { ResumeBuilderService, ResumeBuilderError } from "@/features/resume-builder/services/resume-builder.service";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ resumeId: string }> }
) {
  try {
    const dbUser = await getOrCreateDbUser();
    const { resumeId } = await params;

    const artifact = await ResumeBuilderService.getResumeArtifact(dbUser.id, resumeId);
    return NextResponse.json({ artifact }, { status: 200 });
  } catch (error: any) {
    if (error instanceof ResumeBuilderError) {
      return NextResponse.json(
        { error: error.message, code: error.code },
        { status: error.statusCode }
      );
    }
    if (error?.message?.includes("Unauthorized")) {
      return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });
    }
    console.error("GET /api/builder/resumes/[resumeId]/artifact error:", error);
    return NextResponse.json({ error: "Internal server error", code: "INTERNAL_ERROR" }, { status: 500 });
  }
}

async function handleSave(
  req: Request,
  resumeId: string
) {
  try {
    const dbUser = await getOrCreateDbUser();
    const body = await req.json();
    const { artifact, clientVersion } = body;

    if (!artifact) {
      return NextResponse.json(
        { error: "Artifact is required", code: "INVALID_ARTIFACT" },
        { status: 400 }
      );
    }

    const { version, savedAt } = await ResumeBuilderService.updateResumeArtifact(
      dbUser.id,
      resumeId,
      artifact,
      clientVersion
    );

    return NextResponse.json(
      {
        resumeId,
        version,
        savedAt: savedAt.toISOString(),
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
      return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });
    }
    console.error("Save /api/builder/resumes/[resumeId]/artifact error:", error);
    return NextResponse.json({ error: "Internal server error", code: "INTERNAL_ERROR" }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ resumeId: string }> }
) {
  const { resumeId } = await params;
  return handleSave(req, resumeId);
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ resumeId: string }> }
) {
  const { resumeId } = await params;
  return handleSave(req, resumeId);
}
