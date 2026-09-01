"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { StepIndicator } from "./step-indicator";
import { RoleSelector } from "./role-selector";
import { ExperienceSelector } from "./experience-selector";
import { PersonalizationStep } from "./personalization-step";
import { Summary } from "./summary";
import { Navigation } from "./navigation";

import { useRoadmapForm } from "../../hooks/use-roadmap-form";
import { usePersonalization } from "../../hooks/use-personalization";
import { useRoadmapRequest } from "../../hooks/use-roadmap-request";
import { RoadmapRequest } from "../../types";
import { generateRoadmapAction } from "../../actions/roadmap-actions";
import { toast } from "sonner";

interface RoadmapWizardProps {
  onComplete?: (request: RoadmapRequest) => void;
}

export function RoadmapWizard({ onComplete }: RoadmapWizardProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Hook 1: Required Form Inputs (Stage 1)
  const form = useRoadmapForm();
  const { watch, setValue, formState } = form;
  const role = watch("role");
  const experienceLevel = watch("experienceLevel");

  // Hook 2: Profile-based Personalization (Stage 2)
  const personalization = usePersonalization();

  // Hook 3: Payload Builder
  const { request, buildError, generateRequest } = useRoadmapRequest();

  // Fetch profile status as soon as step 2 is active
  useEffect(() => {
    if (currentStep === 2) {
      personalization.loadProfileStatus();
    }
  }, [currentStep, personalization]);

  const isStage1Valid = Boolean(
    role && role.trim().length > 0 && experienceLevel
  );

  const triggerGeneration = async (reqPayload: RoadmapRequest) => {
    setIsSubmitting(true);
    try {
      if (onComplete) {
        onComplete(reqPayload);
      }
      const res = await generateRoadmapAction(reqPayload);
      toast.success("Roadmap generation started!", {
        description: `Generating your ${reqPayload.role} roadmap...`,
      });
      if (res?.roadmapId) {
        router.push(`/dashboard/roadmaps/${res.roadmapId}`);
      } else {
        router.push("/dashboard/roadmaps");
      }
    } catch (err) {
      console.error("Failed to trigger roadmap generation:", err);
      toast.error("Generation failed", {
        description: "Failed to start roadmap generation task. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!isStage1Valid) return;
      setCurrentStep(2);
    } else if (currentStep === 2) {
      // Build RoadmapRequest payload
      const profileCtx = personalization.skipped
        ? null
        : personalization.profileStatus?.profileContext;

      generateRequest(form.getValues(), {
        skipped: personalization.skipped,
        profileContext: profileCtx,
      });

      setCurrentStep(3);
    } else if (currentStep === 3) {
      if (request) {
        triggerGeneration(request);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSkipPersonalization = () => {
    personalization.skipAll();
    generateRequest(form.getValues(), {
      skipped: true,
      profileContext: null,
    });
    setCurrentStep(3);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius-lg)] p-6 sm:p-8 shadow-sm">
      {/* Wizard Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-display font-bold text-text-primary tracking-tight">
          Roadmap Generator Wizard
        </h2>
        <p className="text-sm font-sans text-text-secondary mt-1 max-w-md mx-auto">
          Configure your learning parameters to generate a custom career roadmap.
        </p>
      </div>

      {/* Step Indicator */}
      <StepIndicator currentStep={currentStep} />

      {/* Step Contents */}
      <div className="min-h-[320px] flex flex-col justify-between pt-2">
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <RoleSelector
              value={role}
              onChange={(val) => setValue("role", val, { shouldValidate: true })}
              error={formState.errors.role?.message}
            />

            <ExperienceSelector
              value={experienceLevel}
              onChange={(val) => setValue("experienceLevel", val, { shouldValidate: true })}
              error={formState.errors.experienceLevel?.message}
            />
          </div>
        )}

        {currentStep === 2 && (
          <div className="animate-in fade-in duration-200">
            <PersonalizationStep
              skipped={personalization.skipped}
              hasOptedIn={personalization.hasOptedIn}
              profileStatus={personalization.profileStatus}
              loading={personalization.loading}
              error={personalization.error}
              onOptIn={personalization.optIn}
              onSkip={handleSkipPersonalization}
              onUnskip={personalization.unskip}
            />
          </div>
        )}

        {currentStep === 3 && (
          <div className="animate-in fade-in duration-200">
            <Summary request={request} error={buildError} />
          </div>
        )}

        {/* Wizard Navigation Footer */}
        <Navigation
          currentStep={currentStep}
          canContinue={currentStep === 1 ? isStage1Valid : true}
          isSkipped={personalization.skipped}
          isSubmitting={isSubmitting}
          onBack={handleBack}
          onNext={handleNext}
          onSkipPersonalization={currentStep === 2 ? handleSkipPersonalization : undefined}
        />
      </div>
    </div>
  );
}
