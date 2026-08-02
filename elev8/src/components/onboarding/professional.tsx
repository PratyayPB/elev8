"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { professionalSchema, ProfessionalSchemaType } from "@/features/profile/schemas";
import { UserProfileData } from "@/features/profile/types";
import { EMPLOYMENT_STATUS_OPTIONS } from "@/features/profile/constants";
import { Navigation } from "./navigation";
import { Briefcase, Clock, Building, UserCheck } from "lucide-react";

interface ProfessionalStepProps {
  initialValues: Partial<UserProfileData>;
  currentStep: number;
  isSubmitting: boolean;
  onSubmit: (data: ProfessionalSchemaType) => void;
  onPrevious: () => void;
  onSkip: () => void;
}

export function ProfessionalStep({
  initialValues,
  currentStep,
  isSubmitting,
  onSubmit,
  onPrevious,
  onSkip,
}: ProfessionalStepProps) {
  const { register, handleSubmit } = useForm<ProfessionalSchemaType>({
    resolver: zodResolver(professionalSchema),
    defaultValues: {
      currentRole: initialValues.currentRole || "",
      yearsOfExperience: initialValues.yearsOfExperience || undefined,
      industry: initialValues.industry || "",
      employmentStatus: initialValues.employmentStatus || "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-text-primary">Professional Background</h3>
        <p className="text-xs text-text-secondary">
          Tell us about your current position and work history.
        </p>
      </div>

      <div className="space-y-4">
        {/* Current Role & Experience */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-accent-cyan" />
              Current / Target Role
            </label>
            <input
              {...register("currentRole")}
              type="text"
              placeholder="Software Engineer, Data Analyst, Student, etc."
              className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent-cyan" />
              Years of Experience
            </label>
            <input
              {...register("yearsOfExperience")}
              type="number"
              min="0"
              placeholder="0, 2, 5+"
              className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
            />
          </div>
        </div>

        {/* Industry & Employment Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-accent-cyan" />
              Industry
            </label>
            <input
              {...register("industry")}
              type="text"
              placeholder="Fintech, Healthcare, E-commerce, EdTech, etc."
              className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-accent-cyan" />
              Employment Status
            </label>
            <select
              {...register("employmentStatus")}
              className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary focus:outline-none focus:border-accent-cyan transition-colors"
            >
              <option value="">Select status...</option>
              {EMPLOYMENT_STATUS_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
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
