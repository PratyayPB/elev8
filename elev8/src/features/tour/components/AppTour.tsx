"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useOnboarding } from "../hooks/useOnboarding";
import { OnboardingTooltip } from "./OnboardingTooltip";

// Lazy load react-joyride to avoid hydration mismatch and block main bundle
const Joyride = dynamic(() => import("react-joyride"), { ssr: false });

export function OnboardingTour() {
  const { run, stepIndex, steps, handleJoyrideCallback, isClient } = useOnboarding();

  if (!isClient) return null;

  return (
    <Joyride
      steps={steps}
      run={run}
      stepIndex={stepIndex}
      callback={handleJoyrideCallback}
      continuous
      scrollToFirstStep
      showProgress
      showSkipButton
      disableOverlayClose
      tooltipComponent={OnboardingTooltip}
      floaterProps={{
        disableAnimation: true, // Prevents layout shift bugs on route transition
      }}
      styles={{
        options: {
          zIndex: 10000,
          arrowColor: "var(--dashboard-card)",
          overlayColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    />
  );
}
