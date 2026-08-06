import { ResumeSummary, ResumeWorkspaceFilters } from "../types/workspace";

export class WorkspaceService {
  static filterAndSortResumes(resumes: ResumeSummary[], filters: ResumeWorkspaceFilters): ResumeSummary[] {
    let result = [...resumes];

    // Search query (filename or role)
    if (filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase();
      result = result.filter(
        (r) =>
          r.role.toLowerCase().includes(q) ||
          (r.filename && r.filename.toLowerCase().includes(q)) ||
          r.id.toLowerCase().includes(q)
      );
    }

    // Status filter
    if (filters.status && filters.status !== "all") {
      result = result.filter((r) => r.status.toLowerCase() === filters.status.toLowerCase());
    }

    // Experience filter
    if (filters.experienceLevel && filters.experienceLevel !== "all") {
      result = result.filter(
        (r) => r.experienceLevel.toLowerCase() === filters.experienceLevel.toLowerCase()
      );
    }

    // Min overall score filter
    if (filters.minScore !== null) {
      result = result.filter((r) => r.overallScore !== null && r.overallScore >= filters.minScore!);
    }

    // Min ATS score filter
    if (filters.minAtsScore !== null) {
      result = result.filter((r) => r.atsScore !== null && r.atsScore >= filters.minAtsScore!);
    }

    // Sorting
    switch (filters.sortBy) {
      case "newest":
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case "oldest":
        result.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      case "highestScore":
        result.sort((a, b) => (b.overallScore || 0) - (a.overallScore || 0));
        break;
      case "lowestScore":
        result.sort((a, b) => (a.overallScore || 0) - (b.overallScore || 0));
        break;
      case "highestAtsScore":
        result.sort((a, b) => (b.atsScore || 0) - (a.atsScore || 0));
        break;
      case "recentlyUpdated":
        result.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
        break;
      case "alphabetical":
        result.sort((a, b) => a.role.localeCompare(b.role));
        break;
    }

    return result;
  }

  static groupResumesByStatus(resumes: ResumeSummary[]) {
    return {
      processing: resumes.filter((r) => r.status === "DRAFT"),
      completed: resumes.filter((r) => r.status === "COMPLETED"),
      archived: resumes.filter((r) => r.status === "ARCHIVED"),
    };
  }
}
