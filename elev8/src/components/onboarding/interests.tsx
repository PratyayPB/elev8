"use client";

import React, { useState } from "react";
import { UserProfileData } from "@/features/profile/types";
import { CAREER_INTEREST_OPTIONS } from "@/features/profile/constants";
import { Navigation } from "./navigation";
import { Target, Check } from "lucide-react";

interface InterestsStepProps {
  initialValues: Partial<UserProfileData>;
  currentStep: number;
  isSubmitting: boolean;
  onSubmit: (data: { careerInterests: string[] }) => void;
  onPrevious: () => void;
  onSkip: () => void;
}

export function InterestsStep({
  initialValues,
  currentStep,
  isSubmitting,
  onSubmit,
  onPrevious,
  onSkip,
}: InterestsStepProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    initialValues.careerInterests || []
  );
  const [error, setError] = useState<string | null>(null);

  const toggleInterest = (interest: string) => {
    setError(null);
    if (selectedInterests.includes(interest)) {
      setSelectedInterests((prev) => prev.filter((i) => i !== interest));
    } else {
      setSelectedInterests((prev) => [...prev, interest]);
    }
  };

  const handleNext = () => {
    if (selectedInterests.length === 0) {
      setError("Please select at least one career interest.");
      return;
    }
    onSubmit({ careerInterests: selectedInterests });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
          <Target className="w-5 h-5 text-accent-cyan" />
          Career Interests
        </h3>
        <p className="text-xs text-text-secondary">
          Select all technical and professional fields that interest you.
        </p>
      </div>

      {error && <p className="text-xs text-accent-red font-medium">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {CAREER_INTEREST_OPTIONS.map((interest) => {
          const isSelected = selectedInterests.includes(interest);
          return (
            <button
              key={interest}
              type="button"
              onClick={() => toggleInterest(interest)}
              className={`p-3.5 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-all ${
                isSelected
                  ? "bg-accent-cyan/10 border-accent-cyan text-text-primary font-semibold"
                  : "bg-surface border-border text-text-secondary hover:border-border-strong"
              }`}
            >
              <span>{interest}</span>
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                  isSelected
                    ? "bg-accent-cyan text-black"
                    : "bg-surface-muted border border-border"
                }`}
              >
                {isSelected && <Check className="w-3 h-3" />}
              </div>
            </button>
          );
        })}
      </div>

      <Navigation
        currentStep={currentStep}
        isSubmitting={isSubmitting}
        onPrevious={onPrevious}
        onSkip={onSkip}
        onNext={handleNext}
      />
    </div>
  );
}
