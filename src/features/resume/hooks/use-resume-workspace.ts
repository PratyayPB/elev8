import { useState, useMemo, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ResumeSummary } from "../types/workspace";
import { useResumeFilters } from "./use-resume-filters";
import { WorkspaceService } from "../services/workspace.service";
import { deleteResume as deleteResumeAction } from "../actions/resume-actions";
import { toast } from "sonner";
import { useWorkflowStore } from "@/store/workflow.store";
import { useDebounce } from "@/hooks/use-debounce";

export function useResumeWorkspace(initialResumes: ResumeSummary[]) {
  const router = useRouter();
  const [resumes, setResumes] = useState<ResumeSummary[]>(initialResumes);
  const filterControls = useResumeFilters();
  const activeJobs = useWorkflowStore((state) => state.activeJobs);
  const prevJobCountRef = useRef(Object.keys(activeJobs).length);

  // Keep state in sync with server component updates / re-fetches
  useEffect(() => {
    setResumes(initialResumes);
  }, [initialResumes]);

  // Auto-refresh when an active resume background job completes in useWorkflowStore
  useEffect(() => {
    const activeResumeJobs = Object.values(activeJobs).filter(
      (j) => j.serviceType === "RESUME_SCORE" || j.serviceType === "RESUME_BUILD"
    );
    const currentCount = activeResumeJobs.length;

    // A job has finished and been unregistered -> refresh view once
    if (prevJobCountRef.current > currentCount) {
      router.refresh();
    }
    prevJobCountRef.current = currentCount;
  }, [activeJobs, router]);

  // Fallback slow refresh ONLY if there are active items on server without client-side job tracking
  useEffect(() => {
    const hasActiveJob = initialResumes.some(
      (r) =>
        r.status === "PROCESSING" ||
        (r.status === "COMPLETED" && (r.overallScore === null || r.overallScore === undefined))
    );

    if (!hasActiveJob) return;

    // 10s fallback guard for orphaned or background tasks triggered from other devices
    const interval = setInterval(() => {
      router.refresh();
    }, 10000);

    return () => clearInterval(interval);
  }, [initialResumes, router]);

  const debouncedSearchQuery = useDebounce(filterControls.filters.searchQuery, 250);

  const effectiveFilters = useMemo(
    () => ({
      ...filterControls.filters,
      searchQuery: debouncedSearchQuery,
    }),
    [filterControls.filters, debouncedSearchQuery]
  );

  const filteredResumes = useMemo(() => {
    return WorkspaceService.filterAndSortResumes(resumes, effectiveFilters);
  }, [resumes, effectiveFilters]);

  const groupedResumes = useMemo(() => {
    return WorkspaceService.groupResumesByStatus(filteredResumes);
  }, [filteredResumes]);

  const deleteResume = async (id: string) => {
    const backup = [...resumes];
    setResumes((prev) => prev.filter((r) => r.id !== id));
    try {
      const res = await deleteResumeAction(id);
      if (!res.success) {
        setResumes(backup);
        toast.error("Failed to delete resume", {
          description: res.error.message,
        });
        return;
      }
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
