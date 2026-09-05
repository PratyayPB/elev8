import { NextResponse } from "next/server";
import { getOrCreateDbUser } from "@/lib/auth";
import { AiResumeBuildService } from "@/features/resume-builder/services/ai-resume-build.service";
import { AiBuildResumeInputSchema } from "@/features/resume-builder/schemas/ai-build.schema";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ resumeId: string }> }
) {
  try {
    const dbUser = await getOrCreateDbUser();
    await params;

    const profileStatus = await AiResumeBuildService.checkProfileCompletion(dbUser.id);
    return NextResponse.json(profileStatus, { status: 200 });
  } catch (error: any) {
    if (error?.message?.includes("Unauthorized")) {
      return NextResponse.json(
        { error: "Unauthorized", code: "UNAUTHORIZED" },
        { status: 401 }
      );
    }
    console.error("GET /api/builder/resumes/[resumeId]/ai-build error:", error);
    return NextResponse.json(
      { error: "Internal server error", code: "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ resumeId: string }> }
) {
  try {
    const dbUser = await getOrCreateDbUser();
    const { resumeId } = await params;
    const body = await req.json();

    const parseResult = AiBuildResumeInputSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          error: "Invalid input",
          details: parseResult.error.format(),
          code: "INVALID_INPUT",
        },
        { status: 400 }
      );
    }

    const result = await AiResumeBuildService.triggerAiBuild(
      dbUser.id,
      resumeId,
      parseResult.data
    );

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    if (error?.message?.includes("Unauthorized")) {
      return NextResponse.json(
        { error: "Unauthorized", code: "UNAUTHORIZED" },
        { status: 401 }
      );
    }
    if (error?.message?.includes("Mandatory profile information is incomplete")) {
      return NextResponse.json(
        { error: error.message, code: "PROFILE_INCOMPLETE" },
        { status: 400 }
      );
    }
    console.error("POST /api/builder/resumes/[resumeId]/ai-build error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to trigger AI resume build", code: "TRIGGER_FAILED" },
      { status: 500 }
    );
  }
}
