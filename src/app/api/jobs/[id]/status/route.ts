import { NextRequest, NextResponse } from "next/server";
import { getOrCreateDbUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { BackgroundServiceType } from "@/store/workflow.store";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const dbUser = await getOrCreateDbUser().catch(() => null);
    if (!dbUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const serviceType = req.nextUrl.searchParams.get("serviceType") as BackgroundServiceType | null;

    // 1. General Jobs via prisma.job
    const job = await prisma.job.findFirst({
      where: { id, userId: dbUser.id },
      select: {
        status: true,
        progress: true,
        artifactId: true,
        artifactType: true,
        error: true,
      },
    });

    if (job) {
      if (job.status === "COMPLETED") {
        let viewUrl = "/dashboard";
        if (serviceType === "ROADMAP" && job.artifactId) {
          viewUrl = `/dashboard/roadmaps/${job.artifactId}`;
        } else if (serviceType === "INTERVIEW" && job.artifactId) {
          viewUrl =
            job.artifactType === "INTERVIEW_ASSESSMENT"
              ? `/dashboard/interviews/${job.artifactId}/report`
              : `/dashboard/interviews/${job.artifactId}`;
        } else if (serviceType === "RESUME_BUILD" && job.artifactId) {
          viewUrl = `/dashboard/resumes/builder/${job.artifactId}`;
        } else if (serviceType === "RESUME_SCORE" && job.artifactId) {
          viewUrl = `/dashboard/resumes/${job.artifactId}`;
        } else if (serviceType === "CAREER_ASSESSMENT") {
          viewUrl = `/dashboard/career-assessment`;
        }

        return NextResponse.json({
          status: "COMPLETED",
          progress: 100,
          viewUrl,
        });
      }

      if (job.status === "FAILED" || job.status === "CANCELLED") {
        return NextResponse.json({
          status: "FAILED",
          error: job.error || "Background task failed",
        });
      }

      return NextResponse.json({
        status: "RUNNING",
        progress: job.progress,
      });
    }

    // 2. Direct entity lookups if caller registered direct entity ID instead of job ID
    if (serviceType === "CAREER_ASSESSMENT") {
      const assessment = await prisma.careerAssessment.findFirst({
        where: { id, userId: dbUser.id },
        select: { status: true },
      });
      if (assessment) {
        if (assessment.status === "COMPLETED") {
          return NextResponse.json({ status: "COMPLETED", viewUrl: "/dashboard/career-assessment" });
        }
        if (assessment.status === "FAILED") {
          return NextResponse.json({ status: "FAILED", error: "Career assessment generation failed" });
        }
        return NextResponse.json({ status: "RUNNING" });
      }
    }

    return NextResponse.json({ status: "RUNNING" });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to query job status";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
