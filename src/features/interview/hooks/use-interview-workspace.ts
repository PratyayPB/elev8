import { useState, useMemo, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { InterviewSession, InterviewStatus, InterviewTemplate } from "@prisma/client";
import { useWorkflowStore } from "@/store/workflow.store";
import { useDebounce } from "@/hooks/use-debounce";

export function useInterviewWorkspace(initialData: { sessions: InterviewSession[]; templates: InterviewTemplate[] }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 250);
  const [difficultyFilter, setDifficultyFilter] = useState<string>("ALL");
  const [sortOption, setSortOption] = useState<string>("NEWEST");
  const activeJobs = useWorkflowStore((state) => state.activeJobs);
  const prevJobCountRef = useRef(Object.keys(activeJobs).length);

  // Auto-refresh when an active interview background job completes in useWorkflowStore
  useEffect(() => {
    const activeInterviewJobs = Object.values(activeJobs).filter(
      (j) => j.serviceType === "INTERVIEW"
    );
    const currentCount = activeInterviewJobs.length;

    // A job has finished and been unregistered -> refresh view once
    if (prevJobCountRef.current > currentCount) {
      router.refresh();
    }
    prevJobCountRef.current = currentCount;
  }, [activeJobs, router]);

  // Fallback slow refresh ONLY if there are active items on server without client-side job tracking
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

    // 10s fallback guard for orphaned or background tasks triggered from other devices
    const interval = setInterval(() => {
      router.refresh();
    }, 10000);

    return () => clearInterval(interval);
  }, [initialData, router]);

  const filterAndSort = (items: any[]) => {
    return items.filter((item) => {
      const matchesSearch =
        debouncedSearch === "" ||
        item.role.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        (item.interviewType && item.interviewType.toLowerCase().includes(debouncedSearch.toLowerCase()));

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

  const filteredSessions = useMemo(() => filterAndSort(initialData.sessions), [initialData.sessions, debouncedSearch, difficultyFilter, sortOption]);
  const filteredTemplates = useMemo(() => filterAndSort(initialData.templates), [initialData.templates, debouncedSearch, difficultyFilter, sortOption]);

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
