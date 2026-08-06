import { getWorkspaceInterviews, getPerformanceStats } from "@/features/interview/actions/workspace-actions";
import { WorkspaceContainer } from "@/features/interview/components/workspace/workspace-container";

export const revalidate = 0; // Dynamic route

export default async function InterviewsPage() {
  const [interviews, stats] = await Promise.all([
    getWorkspaceInterviews(),
    getPerformanceStats(),
  ]);

  return <WorkspaceContainer initialInterviews={interviews} stats={stats} />;
}
