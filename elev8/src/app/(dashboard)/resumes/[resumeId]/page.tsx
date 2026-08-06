import { notFound } from "next/navigation";
import { ResumeReportService } from "@/features/resume/services/resume-report.service";
import { ResumeHubContainer } from "@/features/resume/components/resume-improvement-hub/hub-container";

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

  if (!report) {
    notFound();
  }

  return <ResumeHubContainer report={report} />;
}
