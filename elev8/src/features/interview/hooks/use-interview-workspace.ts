import { useState, useMemo } from "react";
import { Interview } from "@prisma/client";

export function useInterviewWorkspace(initialInterviews: Interview[]) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("ALL");
  const [sortOption, setSortOption] = useState<string>("NEWEST");

  const filteredInterviews = useMemo(() => {
    return initialInterviews.filter((item) => {
      // Search
      const matchesSearch =
        search === "" ||
        item.role.toLowerCase().includes(search.toLowerCase()) ||
        (item.interviewType && item.interviewType.toLowerCase().includes(search.toLowerCase()));

      // Status
      const matchesStatus = statusFilter === "ALL" || item.status === statusFilter;

      // Difficulty
      const matchesDifficulty = difficultyFilter === "ALL" || item.difficulty === difficultyFilter;

      return matchesSearch && matchesStatus && matchesDifficulty;
    }).sort((a, b) => {
      if (sortOption === "NEWEST") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      if (sortOption === "OLDEST") {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
      if (sortOption === "HIGHEST_SCORE") {
        return (b.overallScore || 0) - (a.overallScore || 0);
      }
      if (sortOption === "LOWEST_SCORE") {
        return (a.overallScore || 0) - (b.overallScore || 0);
      }
      return 0;
    });
  }, [initialInterviews, search, statusFilter, difficultyFilter, sortOption]);

  const inProgressList = useMemo(() => {
    return filteredInterviews.filter((i) => i.status === "IN_PROGRESS");
  }, [filteredInterviews]);

  const completedList = useMemo(() => {
    return filteredInterviews.filter((i) => i.status === "COMPLETED");
  }, [filteredInterviews]);

  const otherList = useMemo(() => {
    return filteredInterviews.filter((i) => i.status !== "IN_PROGRESS" && i.status !== "COMPLETED");
  }, [filteredInterviews]);

  return {
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    difficultyFilter,
    setDifficultyFilter,
    sortOption,
    setSortOption,
    filteredInterviews,
    inProgressList,
    completedList,
    otherList,
  };
}
