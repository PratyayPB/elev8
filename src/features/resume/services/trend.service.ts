import { ResumeSummary, ResumeTrendPoint } from "../types/workspace";

export class TrendService {
  static generateTrendData(resumes: ResumeSummary[]): ResumeTrendPoint[] {
    const completed = resumes
      .filter((r) => r.overallScore !== null)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

    return completed.map((r) => ({
      date: new Date(r.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      overallScore: r.overallScore || 0,
      atsScore: r.atsScore || 0,
      role: r.role,
    }));
  }
}
