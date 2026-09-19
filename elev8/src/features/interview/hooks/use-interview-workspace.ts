import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { InterviewSession, InterviewStatus, InterviewTemplate } from "@prisma/client";

export function useInterviewWorkspace(initialData: { sessions: InterviewSession[]; templates: InterviewTemplate[] }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("ALL");
  const [sortOption, setSortOption] = useState<string>("NEWEST");

  // Auto-refresh when any interview is in GENERATING state or being assessed
  useEffect(() => {
    const hasActiveSession = initialData.sessions.some(
      (i) =>
        i.status === InterviewStatus.GENERATING ||
        (i.status === InterviewStatus.COMPLETED && (i.overallScore === null || i.overallScore === undefined))
    );
    const hasActiveTemplate = initialData.templates.some(
      (t) => t.status === "ACTIVE" && !t.templateBlobUrl 
    );

    if (!hasActiveSession && !hasActiveTemplate) return;

    const interval = setInterval(() => {
      router.refresh();
    }, 3000);

    return () => clearInterval(interval);
  }, [initialData, router]);

  const filterAndSort = (items: any[]) => {
    return items.filter((item) => {
      const matchesSearch =
        search === "" ||
        item.role.toLowerCase().includes(search.toLowerCase()) ||
        (item.interviewType && item.interviewType.toLowerCase().includes(search.toLowerCase()));

      const matchesDifficulty =
        difficultyFilter === "ALL" ||
        (item.difficulty && item.difficulty.toLowerCase() === difficultyFilter.toLowerCase());

      return matchesSearch && matchesDifficulty;
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
  };

  const filteredSessions = useMemo(() => filterAndSort(initialData.sessions), [initialData.sessions, search, difficultyFilter, sortOption]);
  const filteredTemplates = useMemo(() => filterAndSort(initialData.templates), [initialData.templates, search, difficultyFilter, sortOption]);

  const inProgressList = useMemo(() => {
    return filteredSessions.filter((i) => i.status === "IN_PROGRESS");
  }, [filteredSessions]);

  const completedList = useMemo(() => {
    return filteredSessions.filter((i) => i.status === "COMPLETED");
  }, [filteredSessions]);

  const otherList = useMemo(() => {
    return filteredSessions.filter((i) => i.status !== "IN_PROGRESS" && i.status !== "COMPLETED");
  }, [filteredSessions]);

  return {
    search,
    setSearch,
    difficultyFilter,
    setDifficultyFilter,
    sortOption,
    setSortOption,
    filteredSessions,
    filteredTemplates,
    inProgressList,
    completedList,
    otherList,
  };
}
