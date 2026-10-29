import { useState, useEffect } from "react";
import { useInterviewRequestStore } from "./use-interview-request";
import {
  fetchInterviewProfileStatusAction,
  InterviewProfileStatusResult,
} from "../actions/profile-status.action";

export function useInterviewPersonalization() {
  const { requestData, nextStep, prevStep, setSkipped, setProfile } = useInterviewRequestStore();
  const [profileStatus, setProfileStatus] = useState<InterviewProfileStatusResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasOptedIn, setHasOptedIn] = useState<boolean | null>(
    requestData.personalization?.skipped ? false : requestData.personalization?.profile ? true : null
  );

  useEffect(() => {
    let isMounted = true;

    async function checkProfile() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetchInterviewProfileStatusAction();
        if (isMounted) {
          setProfileStatus(res);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err?.message || "Failed to load profile context.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    checkProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  const optIn = () => {
    setHasOptedIn(true);
    if (profileStatus?.profileContext) {
      setProfile(profileStatus.profileContext);
    }
  };

  const handleSkip = () => {
    setHasOptedIn(false);
    setSkipped(true);
    nextStep();
  };

  const handleUnskip = () => {
    setHasOptedIn(null);
    setSkipped(false);
  };

  const handleContinue = () => {
    if (hasOptedIn && profileStatus?.profileContext) {
      setProfile(profileStatus.profileContext);
    } else {
      setSkipped(true);
    }
    nextStep();
  };

  return {
    profileStatus,
    isLoading,
    error,
    hasOptedIn,
    skipped: requestData.personalization?.skipped ?? false,
    optIn,
    handleSkip,
    handleUnskip,
    handleContinue,
    prevStep,
  };
}
