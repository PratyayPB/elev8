import { useState } from "react";
import { ResumeWorkspaceFilters } from "../types/workspace";

export const initialFilters: ResumeWorkspaceFilters = {
  searchQuery: "",
  status: "all",
  experienceLevel: "all",
  minScore: null,
  minAtsScore: null,
  sortBy: "newest",
};

export function useResumeFilters() {
  const [filters, setFilters] = useState<ResumeWorkspaceFilters>(initialFilters);

  const setSearchQuery = (query: string) => setFilters((prev) => ({ ...prev, searchQuery: query }));
  const setStatus = (status: string) => setFilters((prev) => ({ ...prev, status }));
  const setExperienceLevel = (level: string) => setFilters((prev) => ({ ...prev, experienceLevel: level }));
  const setMinScore = (score: number | null) => setFilters((prev) => ({ ...prev, minScore: score }));
  const setMinAtsScore = (score: number | null) => setFilters((prev) => ({ ...prev, minAtsScore: score }));
  const setSortBy = (sortBy: ResumeWorkspaceFilters["sortBy"]) => setFilters((prev) => ({ ...prev, sortBy }));
  const resetFilters = () => setFilters(initialFilters);

  return {
    filters,
    setSearchQuery,
    setStatus,
    setExperienceLevel,
    setMinScore,
    setMinAtsScore,
    setSortBy,
    resetFilters,
  };
}
