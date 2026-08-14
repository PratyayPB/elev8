import { NextResponse } from "next/server";
import { getOrCreateDbUser } from "@/lib/auth";
import { ResumeBuilderService, ResumeBuilderError } from "@/features/resume-builder/services/resume-builder.service";
import { UpdateResumeInputSchema } from "@/features/resume-builder/schemas/resume-artifact.schema";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ resumeId: string }> }
) {
  try {
    const dbUser = await getOrCreateDbUser();
    const { resumeId } = await params;

    const resume = await ResumeBuilderService.getResume(dbUser.id, resumeId);
    return NextResponse.json({ resume }, { status: 200 });
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
    console.error("GET /api/builder/resumes/[resumeId] error:", error);
    return NextResponse.json({ error: "Internal server error", code: "INTERNAL_ERROR" }, { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ resumeId: string }> }
) {
  try {
    const dbUser = await getOrCreateDbUser();
    const { resumeId } = await params;
    const body = await req.json();

    const parseResult = UpdateResumeInputSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parseResult.error.format(), code: "INVALID_RESUME" },
        { status: 400 }
      );
    }

    const updated = await ResumeBuilderService.updateResume(dbUser.id, resumeId, parseResult.data);
    return NextResponse.json({ resume: updated }, { status: 200 });
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
    console.error("PATCH /api/builder/resumes/[resumeId] error:", error);
    return NextResponse.json({ error: "Internal server error", code: "INTERNAL_ERROR" }, { status: 500 });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ resumeId: string }> }
) {
  try {
    const dbUser = await getOrCreateDbUser();
    const { resumeId } = await params;

    await ResumeBuilderService.deleteResume(dbUser.id, resumeId);
    return new NextResponse(null, { status: 204 });
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
    console.error("DELETE /api/builder/resumes/[resumeId] error:", error);
    return NextResponse.json({ error: "Internal server error", code: "INTERNAL_ERROR" }, { status: 500 });
  }
}
