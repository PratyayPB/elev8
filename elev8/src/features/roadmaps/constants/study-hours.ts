export const STUDY_HOURS_OPTIONS = [
  { label: "5 Hours / week", value: 5 },
  { label: "10 Hours / week", value: 10 },
  { label: "15 Hours / week", value: 15 },
  { label: "20 Hours / week", value: 20 },
  { label: "25+ Hours / week", value: 25 },
  { label: "Flexible Schedule", value: "Flexible" },
] as const;

export type StudyHoursValue = number | "Flexible";
