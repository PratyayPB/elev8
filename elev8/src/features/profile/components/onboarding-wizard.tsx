"use client";

import React from "react";
import { UserProfileData } from "../types";
import { useOnboarding } from "../hooks/use-onboarding";
import { ONBOARDING_STEPS } from "../constants";
import { Stepper } from "@/components/onboarding/stepper";
import { ProgressBar } from "@/components/onboarding/progress-bar";
import { WelcomeStep } from "@/components/onboarding/welcome";
import { PersonalInfoStep } from "@/components/onboarding/personal-info";
import { EducationStep } from "@/components/onboarding/education";
import { ProfessionalStep } from "@/components/onboarding/professional";
import { SkillsStep } from "@/components/onboarding/skills";
import { InterestsStep } from "@/components/onboarding/interests";
import { GoalsStep } from "@/components/onboarding/goals";
import { PreferencesStep } from "@/components/onboarding/preferences";
import { CompletionStep } from "@/components/onboarding/completion";

interface OnboardingWizardProps {
  initialProfile: UserProfileData;
}

export function OnboardingWizard({ initialProfile }: OnboardingWizardProps) {
  const {
    profile,
    currentStep,
    isSubmitting,
    error,
    goNext,
    goPrevious,
    saveStep,
    skipOnboarding,
    completeOnboarding,
  } = useOnboarding(initialProfile);

  const stepConfig = ONBOARDING_STEPS.find((s) => s.id === currentStep);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Top Stepper & Progress */}
      {currentStep >= 2 && currentStep <= 8 && (
        <div className="space-y-4 bg-surface p-6 rounded-3xl border border-border shadow-sm">
          <ProgressBar currentStep={currentStep} />
          <Stepper currentStep={currentStep} />
        </div>
      )}

      {/* Main Card */}
      <div className="bg-surface p-6 sm:p-10 rounded-3xl border border-border shadow-sm space-y-6">
        {stepConfig && currentStep >= 2 && currentStep <= 8 && (
          <div className="border-b border-border pb-4">
            <h2 className="text-2xl font-bold text-text-primary">{stepConfig.title}</h2>
            <p className="text-xs text-text-secondary">{stepConfig.description}</p>
          </div>
        )}

        {error && (
          <div className="p-3.5 rounded-xl bg-accent-red/10 border border-accent-red/20 text-accent-red text-xs">
            {error}
          </div>
        )}

        {/* Step rendering */}
        {currentStep === 1 && (
          <WelcomeStep
            userName={profile.fullName}
            onStart={goNext}
            onSkip={skipOnboarding}
          />
        )}

        {currentStep === 2 && (
          <PersonalInfoStep
            initialValues={profile}
            currentStep={currentStep}
            isSubmitting={isSubmitting}
            onSubmit={(data) => saveStep(data)}
            onPrevious={goPrevious}
            onSkip={skipOnboarding}
          />
        )}

        {currentStep === 3 && (
          <EducationStep
            initialValues={profile}
            currentStep={currentStep}
            isSubmitting={isSubmitting}
            onSubmit={(data) =>
              saveStep({
                ...data,
                currentStatus: data.currentStatus || null,
              })
            }
            onPrevious={goPrevious}
            onSkip={skipOnboarding}
          />
        )}

        {currentStep === 4 && (
          <ProfessionalStep
            initialValues={profile}
            currentStep={currentStep}
            isSubmitting={isSubmitting}
            onSubmit={(data) => saveStep(data)}
            onPrevious={goPrevious}
            onSkip={skipOnboarding}
          />
        )}

        {currentStep === 5 && (
          <SkillsStep
            initialValues={profile}
            currentStep={currentStep}
            isSubmitting={isSubmitting}
            onSubmit={(data) => saveStep(data)}
            onPrevious={goPrevious}
            onSkip={skipOnboarding}
          />
        )}

        {currentStep === 6 && (
          <InterestsStep
            initialValues={profile}
            currentStep={currentStep}
            isSubmitting={isSubmitting}
            onSubmit={(data) => saveStep(data)}
            onPrevious={goPrevious}
            onSkip={skipOnboarding}
          />
        )}

        {currentStep === 7 && (
          <GoalsStep
            initialValues={profile}
            currentStep={currentStep}
            isSubmitting={isSubmitting}
            onSubmit={(data) => saveStep(data)}
            onPrevious={goPrevious}
            onSkip={skipOnboarding}
          />
        )}

        {currentStep === 8 && (
          <PreferencesStep
            initialValues={profile}
            currentStep={currentStep}
            isSubmitting={isSubmitting}
            onSubmit={(data) => saveStep(data)}
            onPrevious={goPrevious}
            onSkip={skipOnboarding}
          />
        )}

        {currentStep === 9 && (
          <CompletionStep
            profile={profile}
            isSubmitting={isSubmitting}
            onFinish={completeOnboarding}
          />
        )}
      </div>
    </div>
  );
}
