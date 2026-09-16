import { RoadmapNode } from "@/features/roadmaps/types";

export class RoadmapDurationService {
  /**
   * Calculates a deterministic overall duration string (e.g. "6 weeks", "3 months")
   * from graph nodes and weekly hours.
   */
  public static calculate(
    nodes: RoadmapNode[],
    weeklyHoursInput: number | "Flexible" | null | undefined
  ): string {
    if (!nodes || nodes.length === 0) {
      return "Flexible";
    }

    const totalHours = nodes.reduce(
      (sum, n) => sum + (typeof n.estimatedHours === "number" && n.estimatedHours > 0 ? n.estimatedHours : 8),
      0
    );

    const weeklyHours =
      typeof weeklyHoursInput === "number" && weeklyHoursInput > 0 ? weeklyHoursInput : 10;

    const estimatedWeeks = Math.max(1, Math.ceil(totalHours / weeklyHours));
    return this.formatDuration(estimatedWeeks);
  }

  /**
   * Converts weeks into a clean human-readable duration string.
   */
  public static formatDuration(weeks: number): string {
    if (weeks <= 0) return "Flexible";
    if (weeks === 1) return "1 week";
    if (weeks < 4) return `${weeks} weeks`;

    const months = Math.round((weeks / 4.33) * 10) / 10;
    const roundedMonths = Math.round(months);

    if (roundedMonths <= 1) return "1 month";
    if (roundedMonths < 12) return `${roundedMonths} months`;

    const years = Math.round((roundedMonths / 12) * 10) / 10;
    const roundedYears = Math.round(years);
    return roundedYears === 1 ? "1 year" : `${roundedYears} years`;
  }
}
