import { fetchSessionArtifact } from "@/features/interview/actions/session-actions";
import { ReportContainer } from "@/features/interview/components/interview-report/report-container";
import { notFound, redirect } from "next/navigation";
import { InterviewStatus } from "@prisma/client";

interface InterviewReportPageProps {
  params: Promise<{
    interviewId: string;
  }>;
}

export default async function InterviewReportPage({ params }: InterviewReportPageProps) {
  try {
    const { interviewId } = await params;
    const { interview, artifact } = await fetchSessionArtifact(interviewId);

    // If still in progress, send them back to the active session view
    if (interview.status === InterviewStatus.IN_PROGRESS) {
      redirect(`/dashboard/interviews/${interviewId}/session`);
    }

    if (!artifact) {
      return notFound();
    }

    return <ReportContainer artifact={artifact} />;
  } catch (error) {
    console.error("Failed to load interview report:", error);
    return notFound();
  }
}
