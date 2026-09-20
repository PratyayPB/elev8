"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useOnboarding } from "../hooks/useOnboarding";
import { OnboardingTour } from "./OnboardingTour";
import { OnboardingState } from "../types";

interface OnboardingContextType {
  startOnboarding: () => void;
  onboardingState: OnboardingState;
}

const OnboardingContext = createContext<OnboardingContextType | null>(null);

export function useOnboardingContext() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboardingContext must be used within OnboardingProvider");
  }
  return context;
}

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const { startOnboarding, onboardingState } = useOnboarding();

  return (
    <OnboardingContext.Provider value={{ startOnboarding, onboardingState }}>
      {children}
      <OnboardingTour />
    </OnboardingContext.Provider>
  );
}
