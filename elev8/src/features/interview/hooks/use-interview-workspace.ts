import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { InterviewSession, InterviewStatus } from "@prisma/client";

export function useInterviewWorkspace(initialInterviews: InterviewSession[]) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("ALL");
  const [sortOption, setSortOption] = useState<string>("NEWEST");

  // Auto-refresh when any interview is in GENERATING state or being assessed
  useEffect(() => {
    const hasActiveJob = initialInterviews.some(
      (i) =>
        i.status === InterviewStatus.GENERATING ||
        (i.status === InterviewStatus.COMPLETED && (i.overallScore === null || i.overallScore === undefined))
    );

    if (!hasActiveJob) return;

    const interval = setInterval(() => {
      router.refresh();
    }, 3000);

    return () => clearInterval(interval);
  }, [initialInterviews, router]);

  const filteredInterviews = useMemo(() => {
    return initialInterviews.filter((item) => {
      // Search
      const matchesSearch =
        search === "" ||
        item.role.toLowerCase().includes(search.toLowerCase()) ||
        (item.interviewType && item.interviewType.toLowerCase().includes(search.toLowerCase()));

      // Status
      const matchesStatus = statusFilter === "ALL" || item.status === statusFilter;

      return matchesSearch && matchesStatus;
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
