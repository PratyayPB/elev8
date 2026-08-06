import { useMemo } from "react";
import { ResumeSummary } from "../types/workspace";
import { TrendService } from "../services/trend.service";

export function useResumeTrends(resumes: ResumeSummary[]) {
  const trends = useMemo(() => TrendService.generateTrendData(resumes), [resumes]);
  return trends;
}
