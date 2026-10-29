import { fetchSessionArtifact } from "@/features/interview/actions/session-actions";
import { SessionClientWrapper } from "@/features/interview/components/interview-session/session-client-wrapper";
import { notFound } from "next/navigation";

interface InterviewSessionPageProps {
  params: Promise<{
    interviewId: string;
  }>;
}

export default async function InterviewSessionPage({ params }: InterviewSessionPageProps) {
  try {
    const { interviewId } = await params;
    const res = await fetchSessionArtifact(interviewId);

    if (!res.success || !res.data?.artifact || !res.data?.interview?.blobUrl) {
      return notFound();
    }

    const { interview, artifact } = res.data;

    return (
      <SessionClientWrapper 
        interviewId={interviewId}
        artifact={artifact}
        blobUrl={interview.blobUrl!}
        durationSeconds={interview.durationSeconds ?? 0}
      />
    );
  } catch (error) {
    console.error("Failed to load interview session:", error);
    return notFound();
  }
}
