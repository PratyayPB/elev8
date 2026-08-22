"use client";

import { useState, useEffect, useCallback } from "react";
import { ProfileData, ProfileUpdateInput } from "../types";
import { getProfileAction, updateProfileAction } from "../services/actions";

export function useProfile(initialProfile?: ProfileData | null) {
  const [profile, setProfile] = useState<ProfileData | null>(initialProfile ?? null);
  const [isLoading, setIsLoading] = useState<boolean>(!initialProfile);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getProfileAction();
      setProfile(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to load profile";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (initialProfile === undefined) {
      fetchProfile();
    }
  }, [initialProfile, fetchProfile]);

  const updateProfile = async (data: ProfileUpdateInput) => {
    setIsLoading(true);
    const res = await updateProfileAction(data);
    if (res.success && res.profile) {
      setProfile(res.profile);
    } else if (res.error) {
      setError(res.error);
    }
    setIsLoading(false);
    return res;
  };

  return {
    profile,
    isLoading,
    error,
    refetch: fetchProfile,
    updateProfile,
  };
}
