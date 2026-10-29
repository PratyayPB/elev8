import { NextResponse } from "next/server";
import { getOrCreateDbUser } from "@/lib/auth";
import { ResumeBuilderService, ResumeBuilderError } from "@/features/resume-builder/services/resume-builder.service";

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ resumeId: string }> }
) {
  try {
    const dbUser = await getOrCreateDbUser();
    const { resumeId } = await params;

    const duplicateResume = await ResumeBuilderService.duplicateResume(dbUser.id, resumeId);
    
    return NextResponse.json({ resume: duplicateResume }, { status: 201 });
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
    console.error("POST /api/builder/resumes/[resumeId]/duplicate error:", error);
    return NextResponse.json({ error: "Internal server error", code: "INTERNAL_ERROR" }, { status: 500 });
  }
}
