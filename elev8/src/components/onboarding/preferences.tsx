"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { preferencesSchema, PreferencesSchemaType } from "@/features/profile/schemas";
import { UserProfileData } from "@/features/profile/types";
import { LEARNING_STYLE_OPTIONS, DIFFICULTY_OPTIONS } from "@/features/profile/constants";
import { Navigation } from "./navigation";
import { SlidersHorizontal, BookOpen, Gauge, Clock } from "lucide-react";

interface PreferencesStepProps {
  initialValues: Partial<UserProfileData>;
  currentStep: number;
  isSubmitting: boolean;
  onSubmit: (data: PreferencesSchemaType) => void;
  onPrevious: () => void;
  onSkip: () => void;
}

export function PreferencesStep({
  initialValues,
  currentStep,
  isSubmitting,
  onSubmit,
  onPrevious,
  onSkip,
}: PreferencesStepProps) {
  const { register, handleSubmit, setValue, watch } = useForm<PreferencesSchemaType>({
    resolver: zodResolver(preferencesSchema),
    defaultValues: {
      learningStyle: initialValues.learningStyle || "PROJECTS",
      difficulty: initialValues.difficulty || "INTERMEDIATE",
      weeklyHours: initialValues.weeklyHours || 10,
    },
  });

  const selectedStyle = watch("learningStyle");
  const selectedDifficulty = watch("difficulty");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-accent-cyan" />
          Learning Preferences
        </h3>
        <p className="text-xs text-text-secondary">
          Customize your learning pacing and content style.
        </p>
      </div>

      <div className="space-y-5">
        {/* Learning Style */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-accent-cyan" />
            Preferred Learning Style
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {LEARNING_STYLE_OPTIONS.map((opt) => {
              const isSelected = selectedStyle === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setValue("learningStyle", opt.value)}
                  className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-accent-cyan/10 border-accent-cyan text-text-primary"
                      : "bg-surface-muted border-border text-text-secondary hover:border-border-strong"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Difficulty */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <Gauge className="w-3.5 h-3.5 text-accent-cyan" />
            Preferred Target Difficulty
          </label>
          <div className="grid grid-cols-3 gap-2">
            {DIFFICULTY_OPTIONS.map((opt) => {
              const isSelected = selectedDifficulty === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setValue("difficulty", opt.value)}
                  className={`p-3 rounded-xl border text-center text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-accent-gold/10 border-accent-gold text-text-primary"
                      : "bg-surface-muted border-border text-text-secondary hover:border-border-strong"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Weekly Hours */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-accent-cyan" />
            Weekly Dedicated Learning Hours
          </label>
          <input
            {...register("weeklyHours")}
            type="number"
            min="1"
            max="168"
            placeholder="10"
            className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
          />
        </div>
      </div>

      <Navigation
        currentStep={currentStep}
        isSubmitting={isSubmitting}
        onPrevious={onPrevious}
        onSkip={onSkip}
        onNext={handleSubmit(onSubmit)}
        nextText="Complete Onboarding"
      />
    </form>
  );
}
