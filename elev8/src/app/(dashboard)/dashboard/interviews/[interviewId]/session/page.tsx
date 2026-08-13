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
    const { interview, artifact } = await fetchSessionArtifact(interviewId);

    if (!artifact) {
      return notFound();
    }

    return (
      <SessionClientWrapper 
        interviewId={interviewId}
        artifact={artifact}
        blobUrl={interview.blobUrl!}
      />
    );
  } catch (error) {
    console.error("Failed to load interview session:", error);
    // You could render a custom error page here
    return notFound();
  }
}
