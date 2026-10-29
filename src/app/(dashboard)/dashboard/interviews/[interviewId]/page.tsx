import { fetchSessionArtifact } from "@/features/interview/actions/session-actions";
import { ReportContainer } from "@/features/interview/components/interview-report/report-container";
import { notFound, redirect } from "next/navigation";
import { InterviewStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { AlertCircle, ArrowLeft, RefreshCw } from "lucide-react";
import { retryAssessmentAction } from "@/features/interview/actions/session-actions";

interface InterviewReportPageProps {
  params: Promise<{
    interviewId: string;
  }>;
}

export default async function InterviewReportPage({ params }: InterviewReportPageProps) {
  const { interviewId } = await params;

  const { userId: clerkId } = await auth();
  if (!clerkId) {
    redirect("/sign-in");
  }

  const dbUser = await prisma.user.findUnique({
    where: { clerkId },
  });

  if (!dbUser) {
    redirect("/sign-in");
  }

  try {
    const res = await fetchSessionArtifact(interviewId);

    if (res.success) {
      const { interview, artifact } = res.data;

      // If still in progress, send them back to the active session view
      if (interview.status === InterviewStatus.IN_PROGRESS) {
        redirect(`/dashboard/interviews/${interviewId}/session`);
      }

      if (!artifact) {
        return notFound();
      }

      return <ReportContainer artifact={artifact} />;
    }

    // If fetch failed, check if it's a known failure state scoped to this user (IDOR protected)
    const interview = await prisma.interviewSession.findUnique({
      where: { id: interviewId, userId: dbUser.id },
    });

    if (!interview) {
      return notFound();
    }

    const job = await prisma.job.findFirst({
      where: { artifactId: interviewId, userId: dbUser.id },
      orderBy: { createdAt: "desc" },
    });

    const isAssessmentFailed = interview.status === InterviewStatus.ASSESSMENT_FAILED;
    const isFailed =
      interview.status === InterviewStatus.FAILED ||
      job?.status === "FAILED" ||
      isAssessmentFailed;

    if (isFailed) {
      const errorMessage =
        job?.error ||
        "An error occurred while generating or evaluating this interview. Please try again.";

      async function handleRetry() {
        "use server";
        await retryAssessmentAction(interviewId);
      }

      return (
        <div className="max-w-2xl mx-auto py-16 px-4 text-center">
          <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-2xl p-8 shadow-sm">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-rose-500/20">
              <AlertCircle className="w-7 h-7" />
            </div>

            <h2 className="text-xl font-display font-bold text-text-primary mb-2">
              {isAssessmentFailed ? "Assessment Failed" : "Interview Could Not Be Completed"}
            </h2>

            <p className="text-sm text-text-secondary max-w-md mx-auto mb-6">
              {errorMessage}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/dashboard/interviews"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-border-subtle bg-surface-muted hover:bg-border-subtle text-text-primary text-xs font-semibold transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Interviews
              </Link>

              {isAssessmentFailed ? (
                <form action={handleRetry}>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary hover:bg-black/80 text-white text-xs font-semibold transition-all"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Retry Assessment
                  </button>
                </form>
              ) : (
                <Link
                  href={`/dashboard/interviews/new?role=${encodeURIComponent(interview.role)}&experience=${interview.experienceLevel}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary hover:bg-black/80 text-white text-xs font-semibold transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Another Interview
                </Link>
              )}
            </div>
          </div>
        </div>
      );
    }

    return notFound();
  } catch (error) {
    console.error("Failed to load interview report:", error);
    return notFound();
  }
}
