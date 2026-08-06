import { useState, useMemo } from "react";
import { ResumeSummary } from "../types/workspace";
import { useResumeFilters } from "./use-resume-filters";
import { WorkspaceService } from "../services/workspace.service";

export function useResumeWorkspace(initialResumes: ResumeSummary[]) {
  const [resumes, setResumes] = useState<ResumeSummary[]>(initialResumes);
  const filterControls = useResumeFilters();

  const filteredResumes = useMemo(() => {
    return WorkspaceService.filterAndSortResumes(resumes, filterControls.filters);
  }, [resumes, filterControls.filters]);

  const groupedResumes = useMemo(() => {
    return WorkspaceService.groupResumesByStatus(filteredResumes);
  }, [filteredResumes]);

  const deleteResume = (id: string) => {
    setResumes((prev) => prev.filter((r) => r.id !== id));
  };

  return {
    resumes,
    filteredResumes,
    groupedResumes,
    deleteResume,
    ...filterControls,
  };
}
