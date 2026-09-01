import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ResumeSummary } from "../types/workspace";
import { useResumeFilters } from "./use-resume-filters";
import { WorkspaceService } from "../services/workspace.service";
import { deleteResume as deleteResumeAction } from "../actions/resume-actions";
import { toast } from "sonner";

export function useResumeWorkspace(initialResumes: ResumeSummary[]) {
  const router = useRouter();
  const [resumes, setResumes] = useState<ResumeSummary[]>(initialResumes);
  const filterControls = useResumeFilters();

  // Keep state in sync with server component updates / re-fetches
  useEffect(() => {
    setResumes(initialResumes);
  }, [initialResumes]);

  // Auto-refresh when any resume is in PROCESSING state or has incomplete score data
  useEffect(() => {
    const hasActiveJob = initialResumes.some(
      (r) =>
        r.status === "PROCESSING" ||
        (r.status === "COMPLETED" && (r.overallScore === null || r.overallScore === undefined))
    );

    if (!hasActiveJob) return;

    const interval = setInterval(() => {
      router.refresh();
    }, 3000);

    return () => clearInterval(interval);
  }, [initialResumes, router]);

  const filteredResumes = useMemo(() => {
    return WorkspaceService.filterAndSortResumes(resumes, filterControls.filters);
  }, [resumes, filterControls.filters]);

  const groupedResumes = useMemo(() => {
    return WorkspaceService.groupResumesByStatus(filteredResumes);
  }, [filteredResumes]);

  const deleteResume = async (id: string) => {
    const backup = [...resumes];
    setResumes((prev) => prev.filter((r) => r.id !== id));
    try {
      await deleteResumeAction(id);
      toast.success("Resume assessment deleted successfully");
    } catch (error) {
      console.error("Failed to delete resume:", error);
      setResumes(backup);
      toast.error("Failed to delete resume", {
        description: "Could not remove the resume assessment from the server.",
      });
    }
  };

  return {
    resumes,
    filteredResumes,
    groupedResumes,
    deleteResume,
    ...filterControls,
  };
}
