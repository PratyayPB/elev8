import {
  InterviewType,
  InterviewDifficulty,
  CareerExperienceLevel,
} from "@prisma/client";
import { ExperienceLevel, Difficulty } from "../types";

export function mapInterviewType(type: string): InterviewType {
  const norm = type.toUpperCase().replace(/[\s-]+/g, "_");
  if (norm.includes("BEHAVIORAL")) return InterviewType.BEHAVIORAL;
  if (norm.includes("SYSTEM_DESIGN")) return InterviewType.SYSTEM_DESIGN;
  if (norm.includes("ROLE_SPECIFIC")) return InterviewType.ROLE_SPECIFIC;
  if (norm.includes("GENERAL")) return InterviewType.GENERAL;
  return InterviewType.TECHNICAL;
}

export function mapExperienceLevel(level: string): CareerExperienceLevel {
  const upper = level.toUpperCase();
  if (upper === "BEGINNER" || upper === "ENTRY") return CareerExperienceLevel.ENTRY;
  if (upper === "JUNIOR") return CareerExperienceLevel.JUNIOR;
  if (upper === "ADVANCED" || upper === "SENIOR") return CareerExperienceLevel.SENIOR;
  if (upper === "LEAD") return CareerExperienceLevel.LEAD;
  return CareerExperienceLevel.MID;
}

export function mapDifficulty(difficulty: string): InterviewDifficulty {
  const upper = difficulty.toUpperCase();
  if (upper === "EASY") return InterviewDifficulty.EASY;
  if (upper === "HARD") return InterviewDifficulty.HARD;
  return InterviewDifficulty.MEDIUM;
}

export function mapExpToStr(exp: CareerExperienceLevel): ExperienceLevel {
  switch (exp) {
    case "ENTRY":
      return "Beginner";
    case "JUNIOR":
      return "Basic";
    case "MID":
      return "Intermediate";
    case "SENIOR":
      return "Advanced";
    case "LEAD":
      return "Advanced";
    default:
      return "Intermediate";
  }
}

export function mapDiffToStr(diff: InterviewDifficulty): Difficulty {
  switch (diff) {
    case "EASY":
      return "Easy";
    case "MEDIUM":
      return "Medium";
    case "HARD":
      return "Hard";
    default:
      return "Medium";
  }
}
