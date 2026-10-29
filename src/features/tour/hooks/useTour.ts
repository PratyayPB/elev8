"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { CallBackProps, EVENTS, STATUS, Step } from "react-joyride";
import {
  OnboardingState,
  ONBOARDING_STORAGE_KEY,
  ONBOARDING_VERSION,
} from "../types";
import { ONBOARDING_STEPS, CustomStep } from "../config/onboarding-steps";

const DEFAULT_STATE: OnboardingState = {
  status: "NOT_STARTED",
  currentStep: 0,
  version: ONBOARDING_VERSION,
  completedAt: null,
};

export function useOnboarding() {
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  
  const [state, setState] = useState<OnboardingState>(DEFAULT_STATE);
  const [run, setRun] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  // Initialize from localStorage
  useEffect(() => {
    setIsClient(true);
    try {
      const stored = localStorage.getItem(ONBOARDING_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as OnboardingState;
        if (parsed.version === ONBOARDING_VERSION) {
          setState(parsed);
          setStepIndex(parsed.currentStep);
          if (parsed.status === "IN_PROGRESS") {
            setRun(true);
          }
        } else {
          // Version mismatch - reset
          persistState(DEFAULT_STATE);
        }
      }
    } catch (e) {
      console.error("Failed to load onboarding state", e);
    }
  }, []);

  const persistState = useCallback((newState: OnboardingState) => {
    setState(newState);
    if (typeof window !== "undefined") {
      localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify(newState));
    }
  }, []);

  const startOnboarding = useCallback(() => {
    const newState: OnboardingState = {
      status: "IN_PROGRESS",
      currentStep: 0,
      version: ONBOARDING_VERSION,
      completedAt: null,
    };
    persistState(newState);
    setStepIndex(0);
    setRun(true);
  }, [persistState]);

  const stopOnboarding = useCallback((status: "COMPLETED" | "SKIPPED") => {
    const newState: OnboardingState = {
      ...state,
      status,
      completedAt: new Date().toISOString(),
    };
    persistState(newState);
    setRun(false);
  }, [state, persistState]);

  // Handle Joyride callbacks
  const handleJoyrideCallback = useCallback(
    (data: CallBackProps) => {
      const { status, type, index, action } = data;

      const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

      if (finishedStatuses.includes(status)) {
        stopOnboarding(status === STATUS.FINISHED ? "COMPLETED" : "SKIPPED");
      } else if (
        ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND] as string[]).includes(type)
      ) {
        // Calculate the next step
        const nextStepIndex = index + (action === "prev" ? -1 : 1);
        
        // If target was not found, we still want to gracefully move to the next step
        // or just stay here, but ideally we move forward if it was a missing target.
        // Joyride's action="next" handles this.

        setStepIndex(nextStepIndex);
        persistState({ ...state, currentStep: nextStepIndex });
      }
    },
    [state, persistState, stopOnboarding]
  );

  // Cross-route synchronization
  useEffect(() => {
    if (!run || !isClient) return;

    const currentTourStep = ONBOARDING_STEPS[stepIndex];
    if (!currentTourStep) return;

    // If the expected route does not match the current pathname, navigate
    if (currentTourStep.route !== pathname) {
      setRun(false); // Pause tour temporarily
      router.push(currentTourStep.route);
    }
  }, [stepIndex, pathname, run, isClient, router]);

  // Resume tour when route matches
  useEffect(() => {
    if (state.status !== "IN_PROGRESS" || !isClient) return;
    
    const currentTourStep = ONBOARDING_STEPS[stepIndex];
    if (currentTourStep && currentTourStep.route === pathname && !run) {
      // Delay slightly to allow DOM to settle after route change
      const timer = setTimeout(() => {
        setRun(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [pathname, stepIndex, state.status, run, isClient]);

  return {
    run,
    stepIndex,
    steps: ONBOARDING_STEPS,
    onboardingState: state,
    startOnboarding,
    handleJoyrideCallback,
    isClient,
  };
}
