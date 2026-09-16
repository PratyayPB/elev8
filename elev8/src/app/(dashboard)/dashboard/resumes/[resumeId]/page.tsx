import { notFound } from "next/navigation";
import { ResumeReportService } from "@/features/resume/services/resume-report.service";
import { ResumeHubContainer } from "@/features/resume/components/resume-improvement-hub/hub-container";
import { prisma } from "@/lib/prisma";
import { ResumeScoreStatus } from "@prisma/client";
import Link from "next/link";
import { AlertCircle, ArrowLeft, RefreshCw, Loader2 } from "lucide-react";

interface ResumePageProps {
  params: Promise<{
    resumeId: string;
  }>;
}

export async function generateMetadata({ params }: ResumePageProps) {
  const { resumeId } = await params;
  return {
    title: `Resume Assessment #${resumeId.slice(0, 8)} | Elev8`,
    description: "View detailed ATS audit, section breakdowns, and resume improvement plan.",
  };
}

export default async function ResumeDetailPage({ params }: ResumePageProps) {
  const { resumeId } = await params;

  const report = await ResumeReportService.getResumeReport(resumeId);

  if (report) {
    return <ResumeHubContainer report={report} />;
  }

  // Check if resume exists and what status it is in
  const resume = await prisma.resumeScore.findUnique({
    where: { id: resumeId },
  });

  if (!resume) {
    notFound();
  }

  const job = await prisma.job.findFirst({
    where: { artifactId: resumeId },
    orderBy: { createdAt: "desc" },
  });

  const isFailed = resume.status === ResumeScoreStatus.FAILED || job?.status === "FAILED";

  if (isFailed) {
    const errorMessage =
      job?.error ||
      "An issue occurred while analyzing your resume with AI. Please try uploading again.";

    return (
      <div className="max-w-2xl mx-auto py-16 px-4 text-center">
        <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-2xl p-8 shadow-sm">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-rose-500/20">
            <AlertCircle className="w-7 h-7" />
          </div>

          <h2 className="text-xl font-display font-bold text-text-primary mb-2">
            Resume Assessment Failed
          </h2>

          <p className="text-sm text-text-secondary max-w-md mx-auto mb-6">
            {errorMessage}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/dashboard/resumes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-border-subtle bg-surface-muted hover:bg-border-subtle text-text-primary text-xs font-semibold transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Resumes
            </Link>
            <Link
              href="/dashboard/resumes/upload"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary hover:bg-black/80 text-white text-xs font-semibold transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              Upload Again
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (resume.status === ResumeScoreStatus.PROCESSING) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <div className="bg-dashboard-card border border-dashboard-cardBorder rounded-2xl p-8 shadow-sm space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-dashboard-metricHighlight/20 flex items-center justify-center">
            <Loader2 className="w-7 h-7 animate-spin text-text-primary" />
          </div>
          <h2 className="text-xl font-display font-bold text-text-primary">
            Analyzing Your Resume
          </h2>
          <p className="text-sm text-text-secondary max-w-md mx-auto">
            Our AI pipeline is currently extracting sections and evaluating ATS match.
            This may take a few moments.
          </p>
          <div className="pt-2">
            <Link
              href="/dashboard/resumes"
              className="inline-flex items-center gap-2 text-xs font-semibold text-text-secondary hover:text-text-primary"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Resumes
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return notFound();
}
