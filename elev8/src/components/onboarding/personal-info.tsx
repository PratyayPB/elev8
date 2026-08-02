"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema, PersonalInfoSchemaType } from "@/features/profile/schemas";
import { UserProfileData } from "@/features/profile/types";
import { Navigation } from "./navigation";
import { User, MapPin, Globe } from "lucide-react";

interface PersonalInfoStepProps {
  initialValues: Partial<UserProfileData>;
  currentStep: number;
  isSubmitting: boolean;
  onSubmit: (data: PersonalInfoSchemaType) => void;
  onPrevious: () => void;
  onSkip: () => void;
}

export function PersonalInfoStep({
  initialValues,
  currentStep,
  isSubmitting,
  onSubmit,
  onPrevious,
  onSkip,
}: PersonalInfoStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoSchemaType>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      fullName: initialValues.fullName || "",
      country: initialValues.country || "",
      timezone: initialValues.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-text-primary">Personal Details</h3>
        <p className="text-xs text-text-secondary">
          Enter your full name and regional location for localized suggestions.
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-accent-cyan" />
            Full Name <span className="text-accent-red">*</span>
          </label>
          <input
            {...register("fullName")}
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
          />
          {errors.fullName && (
            <p className="text-xs text-accent-red mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Country */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
            Country
          </label>
          <input
            {...register("country")}
            type="text"
            placeholder="United States, India, Germany, etc."
            className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
          />
        </div>

        {/* Timezone */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-accent-cyan" />
            Timezone
          </label>
          <input
            {...register("timezone")}
            type="text"
            placeholder="UTC-5 (EST), UTC+5:30 (IST), etc."
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
      />
    </form>
  );
}
