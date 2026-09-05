import { NextResponse } from "next/server";
import { getOrCreateDbUser } from "@/lib/auth";
import { AiResumeBuildService } from "@/features/resume-builder/services/ai-resume-build.service";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ resumeId: string }> }
) {
  try {
    const dbUser = await getOrCreateDbUser();
    await params;

    const { searchParams } = new URL(req.url);
    const jobId = searchParams.get("jobId");

    if (!jobId) {
      return NextResponse.json(
        { error: "jobId query parameter is required", code: "MISSING_JOB_ID" },
        { status: 400 }
      );
    }

    const job = await AiResumeBuildService.getJobStatus(dbUser.id, jobId);
    return NextResponse.json({ job }, { status: 200 });
  } catch (error: any) {
    if (error?.message?.includes("Unauthorized")) {
      return NextResponse.json(
        { error: "Unauthorized", code: "UNAUTHORIZED" },
        { status: 401 }
      );
    }
    if (error?.message?.includes("Job not found")) {
      return NextResponse.json(
        { error: "Job not found", code: "NOT_FOUND" },
        { status: 404 }
      );
    }
    console.error("GET /api/builder/resumes/[resumeId]/ai-build/status error:", error);
    return NextResponse.json(
      { error: "Internal server error", code: "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}
