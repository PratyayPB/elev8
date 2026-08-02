"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { educationSchema, EducationSchemaType } from "@/features/profile/schemas";
import { UserProfileData } from "@/features/profile/types";
import { CURRENT_STATUS_OPTIONS } from "@/features/profile/constants";
import { Navigation } from "./navigation";
import { GraduationCap, Building2, BookOpen, Calendar } from "lucide-react";

interface EducationStepProps {
  initialValues: Partial<UserProfileData>;
  currentStep: number;
  isSubmitting: boolean;
  onSubmit: (data: EducationSchemaType) => void;
  onPrevious: () => void;
  onSkip: () => void;
}

export function EducationStep({
  initialValues,
  currentStep,
  isSubmitting,
  onSubmit,
  onPrevious,
  onSkip,
}: EducationStepProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
  } = useForm<EducationSchemaType>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      currentStatus: initialValues.currentStatus || "",
      degree: initialValues.degree || "",
      major: initialValues.major || "",
      institution: initialValues.institution || "",
      graduationYear: initialValues.graduationYear || undefined,
    },
  });

  const selectedStatus = watch("currentStatus");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-text-primary">Academic Background</h3>
        <p className="text-xs text-text-secondary">
          Share your education history and current professional standing.
        </p>
      </div>

      <div className="space-y-5">
        {/* Current Status */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-accent-cyan" />
            Current Status
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {CURRENT_STATUS_OPTIONS.map((opt) => {
              const isSelected = selectedStatus === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setValue("currentStatus", opt.value as EducationSchemaType["currentStatus"])}
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

        {/* Degree & Major */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-accent-cyan" />
              Degree / Qualification
            </label>
            <input
              {...register("degree")}
              type="text"
              placeholder="B.S., B.Tech, M.S., High School, etc."
              className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-text-primary">Major / Specialization</label>
            <input
              {...register("major")}
              type="text"
              placeholder="Computer Science, Economics, etc."
              className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
            />
          </div>
        </div>

        {/* Institution & Year */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-accent-cyan" />
              Institution / University
            </label>
            <input
              {...register("institution")}
              type="text"
              placeholder="Stanford University, MIT, Self-Taught, etc."
              className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
              Graduation Year
            </label>
            <input
              {...register("graduationYear")}
              type="number"
              placeholder="2025"
              className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
            />
          </div>
        </div>
      </div>

      <Navigation
        currentStep={currentStep}
        isSubmitting={isSubmitting}
        onPrevious={onPrevious}
        onSkip={onSkip}
        onNext={handleSubmit(onSubmit)}
      />
    </form>
  );
}
