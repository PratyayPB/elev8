import { useState, useMemo } from "react";
import { ResumeSummary } from "../types/workspace";
import { useResumeFilters } from "./use-resume-filters";
import { WorkspaceService } from "../services/workspace.service";
import { deleteResume as deleteResumeAction } from "../actions/resume-actions";

export function useResumeWorkspace(initialResumes: ResumeSummary[]) {
  const [resumes, setResumes] = useState<ResumeSummary[]>(initialResumes);
  const filterControls = useResumeFilters();

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
    } catch (error) {
      console.error("Failed to delete resume:", error);
      setResumes(backup);
      alert("Failed to delete resume from server.");
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
