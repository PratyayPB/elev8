"use client";

import { useState } from "react";
import { UserProfileData } from "../types";
import {
  saveOnboardingStepAction,
  skipOnboardingAction,
  completeOnboardingAction,
} from "../services/actions";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";

export function useOnboarding(initialProfile: UserProfileData) {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfileData>(initialProfile);
  const [currentStep, setCurrentStep] = useState<number>(
    initialProfile.onboardingStep > 0 && initialProfile.onboardingStep <= 8
      ? initialProfile.onboardingStep
      : 1
  );
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const goNext = () => {
    if (currentStep < 9) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goPrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const saveStep = async (stepData: Partial<UserProfileData>) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await saveOnboardingStepAction(currentStep, stepData);
      if (res.success && res.profile) {
        setProfile(res.profile);
        goNext();
      } else if (res.error) {
        setError(res.error);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An error occurred";
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const skipOnboarding = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await skipOnboardingAction();
      if (res.success) {
        router.push(ROUTES.DASHBOARD);
      } else if (res.error) {
        setError(res.error);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to proceed";
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const completeOnboarding = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await completeOnboardingAction();
      if (res.success) {
        router.push(ROUTES.DASHBOARD);
      } else if (res.error) {
        setError(res.error);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to complete onboarding";
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    profile,
    currentStep,
    isSubmitting,
    error,
    setCurrentStep,
    goNext,
    goPrevious,
    saveStep,
    skipOnboarding,
    completeOnboarding,
  };
}
