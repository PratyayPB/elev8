"use client";

import React, { useState } from "react";
import { UserProfileData } from "@/features/profile/types";
import { CAREER_GOAL_OPTIONS } from "@/features/profile/constants";
import { Navigation } from "./navigation";
import { Sliders, Check } from "lucide-react";

interface GoalsStepProps {
  initialValues: Partial<UserProfileData>;
  currentStep: number;
  isSubmitting: boolean;
  onSubmit: (data: { careerGoals: string[] }) => void;
  onPrevious: () => void;
  onSkip: () => void;
}

export function GoalsStep({
  initialValues,
  currentStep,
  isSubmitting,
  onSubmit,
  onPrevious,
  onSkip,
}: GoalsStepProps) {
  const [selectedGoals, setSelectedGoals] = useState<string[]>(
    initialValues.careerGoals || []
  );
  const [error, setError] = useState<string | null>(null);

  const toggleGoal = (goal: string) => {
    setError(null);
    if (selectedGoals.includes(goal)) {
      setSelectedGoals((prev) => prev.filter((g) => g !== goal));
    } else {
      setSelectedGoals((prev) => [...prev, goal]);
    }
  };

  const handleNext = () => {
    if (selectedGoals.length === 0) {
      setError("Please select at least one career goal.");
      return;
    }
    onSubmit({ careerGoals: selectedGoals });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
          <Sliders className="w-5 h-5 text-accent-cyan" />
          Career Goals
        </h3>
        <p className="text-xs text-text-secondary">
          What are your immediate or medium-term career objectives?
        </p>
      </div>

      {error && <p className="text-xs text-accent-red font-medium">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CAREER_GOAL_OPTIONS.map((goal) => {
          const isSelected = selectedGoals.includes(goal);
          return (
            <button
              key={goal}
              type="button"
              onClick={() => toggleGoal(goal)}
              className={`p-4 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-all ${
                isSelected
                  ? "bg-accent-gold/10 border-accent-gold text-text-primary font-semibold"
                  : "bg-surface border-border text-text-secondary hover:border-border-strong"
              }`}
            >
              <span>{goal}</span>
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                  isSelected
                    ? "bg-accent-gold text-black"
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
