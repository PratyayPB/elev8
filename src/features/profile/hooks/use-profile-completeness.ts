"use client";

import { useMemo } from "react";
import { ProfileData, ProfileCompletenessResult } from "../types";
import { calculateProfileCompleteness } from "../services/profile-completeness.service";

export function useProfileCompleteness(profile: ProfileData | null): ProfileCompletenessResult {
  return useMemo(() => {
    return calculateProfileCompleteness(profile);
  }, [profile]);
}
