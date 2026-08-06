import { useMemo } from "react";
import { ResumeSummary } from "../types/workspace";
import { PerformanceService } from "../services/performance.service";

export function useResumePerformance(resumes: ResumeSummary[]) {
  const performance = useMemo(() => PerformanceService.calculatePerformance(resumes), [resumes]);
  return performance;
}
