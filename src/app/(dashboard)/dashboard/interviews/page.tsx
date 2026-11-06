import type { Metadata } from "next";
import { Suspense } from "react";
import { getWorkspaceInterviews } from "@/features/interview/actions/workspace-actions";
import { WorkspaceContainer } from "@/features/interview/components/workspace/workspace-container";
import { InterviewsWorkspaceSkeleton } from "./loading";
import { RecommendedActions } from "@/components/dashboard";

export const metadata: Metadata = {
  title: "Interview Workspace | Elev8",
  description: "Practice, track performance, and continuous technical growth.",
};

export const revalidate = 0; // Dynamic route

export default async function InterviewsPage() {
  const interviewsRes = await getWorkspaceInterviews();

  const initialInterviews = interviewsRes.success
    ? {
        sessions: interviewsRes.data.sessions,
        templates: interviewsRes.data.templates,
      }
    : { sessions: [], templates: [] };

  const initialStats = interviewsRes.success && interviewsRes.data.stats
    ? interviewsRes.data.stats
    : {
        total: 0,
        completedCount: 0,
        inProgressCount: 0,
        averageScore: 0,
        highestScore: 0,
      };

  return (
    <div className="space-y-8 pb-12">
      <Suspense fallback={<InterviewsWorkspaceSkeleton />}>
        <WorkspaceContainer
          initialInterviews={initialInterviews as any}
          stats={initialStats}
        />
      </Suspense>
      <RecommendedActions currentModule="interviews" />
    </div>
  );
}

