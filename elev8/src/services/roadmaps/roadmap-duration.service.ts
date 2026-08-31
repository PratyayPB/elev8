import { Milestone } from "@/features/roadmaps/types";

export class RoadmapDurationService {
  /**
   * Calculates a deterministic overall duration string (e.g. "6 weeks", "3 months")
   * from milestones and weekly hours.
   */
  public static calculate(
    milestones: Milestone[],
    weeklyHoursInput: number | "Flexible" | null | undefined
  ): string {
    if (!milestones || milestones.length === 0) {
      return "Flexible";
    }

    const totalWeeksFromMilestones = milestones.reduce(
      (sum, m) => sum + (typeof m.estimatedWeeks === "number" && m.estimatedWeeks > 0 ? m.estimatedWeeks : 1),
      0
    );

    let weeklyHours: number | null = null;
    if (typeof weeklyHoursInput === "number" && weeklyHoursInput > 0) {
      weeklyHours = weeklyHoursInput;
    }

    const estimatedWeeks = Math.max(1, totalWeeksFromMilestones);
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
