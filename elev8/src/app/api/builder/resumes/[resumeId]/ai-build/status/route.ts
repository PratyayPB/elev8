import { NextResponse } from "next/server";
import { getOrCreateDbUser } from "@/lib/auth";
import { AiResumeBuildService } from "@/features/resume-builder/services/ai-resume-build.service";
import { ResumeBuilderError } from "@/features/resume-builder/services/resume-builder.service";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ resumeId: string }> }
) {
  try {
    const dbUser = await getOrCreateDbUser();
    await params;

    const { searchParams } = new URL(req.url);
    const jobId = searchParams.get("jobId")?.trim();

    if (!jobId || jobId.length < 5) {
      return NextResponse.json(
        { error: "A valid jobId query parameter is required", code: "INVALID_JOB_ID" },
        { status: 400 }
      );
    }

    const job = await AiResumeBuildService.getJobStatus(dbUser.id, jobId);
    return NextResponse.json({ job }, { status: 200 });
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
    console.error("GET /api/builder/resumes/[resumeId]/ai-build/status error:", error);
    return NextResponse.json(
      { error: "Internal server error", code: "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}
