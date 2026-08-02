"use client";

import { useMemo } from "react";
import { UserProfileData } from "../types";
import { calculateProfileCompletion } from "../utils";

export function useProfileCompletion(profile: Partial<UserProfileData> | null) {
  return useMemo(() => {
    const percentage = calculateProfileCompletion(profile);

    const missingFields: string[] = [];
    if (!profile?.fullName) missingFields.push("Full Name");
    if (!profile?.country) missingFields.push("Country");
    if (!profile?.currentStatus) missingFields.push("Academic/Current Status");
    if (!profile?.careerInterests || profile.careerInterests.length === 0)
      missingFields.push("Career Interests");
    if (
      !profile?.skills ||
      Object.values(profile.skills).every((arr) => !arr || arr.length === 0)
    )
      missingFields.push("Skills");
    if (!profile?.careerGoals || profile.careerGoals.length === 0)
      missingFields.push("Career Goals");

    let completionLabel = "Basic Profile";
    if (percentage >= 100) completionLabel = "All-Star Profile";
    else if (percentage >= 75) completionLabel = "Comprehensive Profile";
    else if (percentage >= 50) completionLabel = "Intermediate Profile";

    return {
      percentage,
      missingFields,
      completionLabel,
    };
  }, [profile]);
}
