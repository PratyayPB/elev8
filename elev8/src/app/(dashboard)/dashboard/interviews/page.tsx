import { getWorkspaceInterviews, getPerformanceStats } from "@/features/interview/actions/workspace-actions";
import { fetchPredefinedCatalog } from "@/features/interview/actions/predefined-actions";
import { WorkspaceContainer } from "@/features/interview/components/workspace/workspace-container";

export const revalidate = 0; // Dynamic route

export default async function InterviewsPage() {
  const [interviews, stats, predefinedCatalog] = await Promise.all([
    getWorkspaceInterviews(),
    getPerformanceStats(),
    fetchPredefinedCatalog(),
  ]);

  return (
    <WorkspaceContainer
      initialInterviews={interviews}
      stats={stats}
      predefinedCatalog={predefinedCatalog}
    />
  );
}
