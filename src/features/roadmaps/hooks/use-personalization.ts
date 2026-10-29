"use client";

import { useState, useCallback } from "react";
import {
  fetchProfileStatusAction,
  ProfileStatusResult,
} from "../actions/profile-status.action";

export function usePersonalization() {
  const [skipped, setSkipped] = useState<boolean>(false);
  const [hasOptedIn, setHasOptedIn] = useState<boolean | null>(null);
  const [profileStatus, setProfileStatus] =
    useState<ProfileStatusResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadProfileStatus = useCallback(async () => {
    if (profileStatus !== null || loading) return;

    setLoading(true);
    setError(null);
    try {
      const result = await fetchProfileStatusAction();
      setProfileStatus(result);
    } catch (err) {
      console.error("Failed to fetch profile status:", err);
      setError("Failed to check profile status.");
      // Fallback
      setProfileStatus({ exists: false, isCompleted: false });
    } finally {
      setLoading(false);
    }
  }, [profileStatus, loading]);

  const optIn = useCallback(() => {
    setHasOptedIn(true);
    setSkipped(false);
  }, []);

  const skipAll = useCallback(() => {
    setSkipped(true);
    setHasOptedIn(false);
  }, []);

  const unskip = useCallback(() => {
    setSkipped(false);
    setHasOptedIn(null);
  }, []);

  return {
    skipped,
    hasOptedIn,
    profileStatus,
    loading,
    error,
    loadProfileStatus,
    optIn,
    skipAll,
    unskip,
  };
}
