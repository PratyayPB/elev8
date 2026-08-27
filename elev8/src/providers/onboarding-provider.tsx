"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useAuth } from "@clerk/nextjs";
import { ProfileData, OnboardingStage, ProfileCreateInput } from "@/features/profile/types";
import { upsertProfileAction } from "@/features/profile/services/actions";

interface OnboardingContextValue {
  isLoading: boolean;
  isOpen: boolean;
  stage: OnboardingStage;
  profile: ProfileData | null;
  missingFields: string[];
  isSaving: boolean;
  error: string | null;
  saveMandatory: (data: Partial<ProfileCreateInput>) => Promise<boolean>;
  saveOptional: (data: Partial<ProfileCreateInput>) => Promise<boolean>;
  closeOptional: () => void;
  checkCompletion: () => Promise<void>;
}

const OnboardingContext = createContext<OnboardingContextValue | null>(null);

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn } = useAuth();
  
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState<OnboardingStage>("MANDATORY");
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [missingFields, setMissingFields] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkCompletion = useCallback(async () => {
    if (!isLoaded) return;
    
    if (!isSignedIn) {
      setIsLoading(false);
      setIsOpen(false);
      return;
    }

    try {
      const res = await fetch("/api/profile/completion");
      if (res.ok) {
        const data = await res.json();
        
        const profileRes = await fetch("/api/profile");
        if (profileRes.ok) {
          const profileData = await profileRes.json();
          setProfile(profileData.id ? profileData : null);
        }

        setMissingFields(data.missingFields || []);
        
        // Modal popup behaviour instead of redirection
        setTimeout(() => {
          setStage(data.isComplete ? "OPTIONAL" : "MANDATORY");
          setIsOpen(true); // Always trigger the modal
          setIsLoading(false);
        }, 3000);
      } else {
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Failed to check profile completion", err);
      setIsLoading(false);
    }
  }, [isLoaded, isSignedIn]);

  useEffect(() => {
    checkCompletion();
  }, [checkCompletion]);

  const saveMandatory = async (data: Partial<ProfileCreateInput>) => {
    setIsSaving(true);
    setError(null);
    try {
      const res = await upsertProfileAction(data);
      if (res.success && res.profile) {
        setProfile(res.profile);
        setStage("OPTIONAL");
        setIsSaving(false);
        return true;
      } else {
        setError(res.error || "Failed to save profile");
        setIsSaving(false);
        return false;
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error saving profile");
      setIsSaving(false);
      return false;
    }
  };

  const saveOptional = async (data: Partial<ProfileCreateInput>) => {
    setIsSaving(true);
    setError(null);
    try {
      const res = await upsertProfileAction(data);
      if (res.success && res.profile) {
        setProfile(res.profile);
        setIsOpen(false);
        setIsSaving(false);
        return true;
      } else {
        setError(res.error || "Failed to save profile");
        setIsSaving(false);
        return false;
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error saving profile");
      setIsSaving(false);
      return false;
    }
  };

  const closeOptional = () => {
    if (stage === "OPTIONAL") {
      setIsOpen(false);
    }
  };

  return (
    <OnboardingContext.Provider
      value={{
        isLoading,
        isOpen,
        stage,
        profile,
        missingFields,
        isSaving,
        error,
        saveMandatory,
        saveOptional,
        closeOptional,
        checkCompletion,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
}
