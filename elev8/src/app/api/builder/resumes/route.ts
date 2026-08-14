import { NextResponse } from "next/server";
import { getOrCreateDbUser } from "@/lib/auth";
import { ResumeBuilderService, ResumeBuilderError } from "@/features/resume-builder/services/resume-builder.service";
import { CreateResumeInputSchema } from "@/features/resume-builder/schemas/resume-artifact.schema";

export async function GET() {
  try {
    const dbUser = await getOrCreateDbUser();
    const resumes = await ResumeBuilderService.listUserResumes(dbUser.id);
    return NextResponse.json({ resumes }, { status: 200 });
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
    console.error("GET /api/builder/resumes error:", error);
    return NextResponse.json({ error: "Internal server error", code: "INTERNAL_ERROR" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const dbUser = await getOrCreateDbUser();
    const body = await req.json();

    const parseResult = CreateResumeInputSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parseResult.error.format(), code: "INVALID_RESUME" },
        { status: 400 }
      );
    }

    const createdResume = await ResumeBuilderService.createResume(dbUser.id, parseResult.data);
    return NextResponse.json({ resume: createdResume }, { status: 201 });
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
    console.error("POST /api/builder/resumes error:", error);
    return NextResponse.json({ error: "Internal server error", code: "INTERNAL_ERROR" }, { status: 500 });
  }
}
