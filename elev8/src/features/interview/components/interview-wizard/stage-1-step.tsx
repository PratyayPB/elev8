"use client";

import React from "react";
import { useInterviewForm } from "../../hooks/use-interview-form";
import { Navigation } from "./navigation";
import { INTERVIEW_TYPES } from "../../constants/interview-types";
import { POPULAR_ROADMAP_ROLES } from "@/features/roadmaps/constants/roadmap-roles";
import { Search, Briefcase, Sparkles } from "lucide-react";

const EXPERIENCE_CARDS = [
  {
    id: "Beginner",
    title: "Beginner",
    description: "New to the field, little to no prior coding or industry experience.",
  },
  {
    id: "Basic",
    title: "Basic",
    description: "Familiar with fundamentals, built small syntax exercises or tutorials.",
  },
  {
    id: "Intermediate",
    title: "Intermediate",
    description: "Comfortable building applications, looking to fill knowledge gaps.",
  },
  {
    id: "Advanced",
    title: "Advanced",
    description: "Experienced professional looking for mastery, system architecture, or specialization.",
  },
] as const;

const DIFFICULTY_CARDS = [
  {
    id: "Easy",
    title: "Easy",
    description: "Core fundamentals, basic syntax, and conceptual questions.",
  },
  {
    id: "Medium",
    title: "Medium",
    description: "Standard industry interview rigor with problem solving and tradeoffs.",
  },
  {
    id: "Hard",
    title: "Hard",
    description: "Complex architectural scenarios, edge cases, and high-level optimization.",
  },
] as const;

export function Stage1Step() {
  const { form, onSubmit } = useInterviewForm();
  const { register, handleSubmit, watch, setValue, formState: { errors } } = form;

  const currentRole = watch("role") || "";
  const currentExperience = watch("experienceLevel");
  const currentDifficulty = watch("difficulty");
  const currentType = watch("interviewType");

  const isFormValid = Boolean(
    currentRole.trim().length >= 2 &&
    currentExperience &&
    currentDifficulty &&
    currentType
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Target Role */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-display font-semibold text-text-primary mb-1">
            Target Role <span className="text-rose-500">*</span>
          </label>
          <p className="text-xs font-sans text-text-secondary mb-3">
            Select or type the exact job role you are aiming for.
          </p>

          {/* Input field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
              <Search className="w-4 h-4" />
            </div>
            <input
              {...register("role")}
              type="text"
              placeholder="e.g. Backend Developer, AI Engineer..."
              className={`w-full pl-10 pr-4 py-3 bg-surface-muted border rounded-xl text-sm font-sans text-text-primary placeholder-text-muted focus:outline-none transition-all ${
                errors.role
                  ? "border-rose-300 focus:border-rose-500"
                  : "border-border-subtle focus:border-text-primary"
              }`}
            />
          </div>
          {errors.role && <p className="text-xs font-sans text-rose-500 mt-1.5">{errors.role.message}</p>}
        </div>

        {/* Suggested roles pill tags */}
        <div>
          <span className="text-xs font-display font-semibold text-text-secondary block mb-2">
            Popular Roles
          </span>
          <div className="flex flex-wrap gap-2">
            {POPULAR_ROADMAP_ROLES.map((role) => {
              const isSelected = currentRole.trim().toLowerCase() === role.toLowerCase();
              return (
                <button
                  key={role}
                  type="button"
                  onClick={() => setValue("role", role, { shouldValidate: true })}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-display font-medium transition-all ${
                    isSelected
                      ? "bg-text-primary text-white dark:text-brand-primary-900 shadow-sm"
                      : "bg-surface-muted text-text-primary border border-border-subtle hover:bg-border-subtle"
                  }`}
                >
                  <Briefcase className="w-3 h-3" />
                  {role}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Current Experience Level */}
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-display font-semibold text-text-primary mb-1">
            Current Experience Level <span className="text-rose-500">*</span>
          </label>
          <p className="text-xs font-sans text-text-secondary mb-3">
            Select the level that best reflects your current knowledge in this field.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {EXPERIENCE_CARDS.map((item) => {
            const isSelected = currentExperience === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setValue("experienceLevel", item.id as any, { shouldValidate: true })}
                className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                  isSelected
                    ? "bg-text-primary text-white dark:text-brand-primary-900 border-text-primary shadow-md"
                    : "bg-surface-muted text-text-primary border-border-subtle hover:border-text-primary/30 hover:bg-border-subtle"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-display font-semibold text-sm flex items-center gap-1.5">
                    <Sparkles className={`w-4 h-4 ${isSelected ? "text-dashboard-metricHighlight fill-dashboard-metricHighlight" : "text-text-muted"}`} />
                    {item.title}
                  </span>
                </div>
                <p
                  className={`text-xs font-sans mt-1 leading-relaxed ${
                    isSelected ? "text-slate-300" : "text-text-secondary"
                  }`}
                >
                  {item.description}
                </p>
              </button>
            );
          })}
        </div>
        {errors.experienceLevel && <p className="text-xs font-sans text-rose-500 mt-1.5">{errors.experienceLevel.message}</p>}
      </div>

      {/* Interview Difficulty */}
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-display font-semibold text-text-primary mb-1">
            Interview Difficulty <span className="text-rose-500">*</span>
          </label>
          <p className="text-xs font-sans text-text-secondary mb-3">
            Select the technical depth and evaluation rigor for your interview.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {DIFFICULTY_CARDS.map((diff) => {
            const isSelected = currentDifficulty === diff.id;

            return (
              <button
                key={diff.id}
                type="button"
                onClick={() => setValue("difficulty", diff.id as any, { shouldValidate: true })}
                className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                  isSelected
                    ? "bg-text-primary text-white dark:text-brand-primary-900 border-text-primary shadow-md"
                    : "bg-surface-muted text-text-primary border-border-subtle hover:border-text-primary/30 hover:bg-border-subtle"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-display font-semibold text-sm flex items-center gap-1.5">
                    <Sparkles className={`w-4 h-4 ${isSelected ? "text-dashboard-metricHighlight fill-dashboard-metricHighlight" : "text-text-muted"}`} />
                    {diff.title}
                  </span>
                </div>
                <p
                  className={`text-xs font-sans mt-1 leading-relaxed ${
                    isSelected ? "text-slate-300" : "text-text-secondary"
                  }`}
                >
                  {diff.description}
                </p>
              </button>
            );
          })}
        </div>
        {errors.difficulty && <p className="text-xs font-sans text-rose-500 mt-1.5">{errors.difficulty.message}</p>}
      </div>

      {/* Interview Type */}
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-display font-semibold text-text-primary mb-1">
            Interview Type <span className="text-rose-500">*</span>
          </label>
          <p className="text-xs font-sans text-text-secondary mb-3">
            Select the interview format and evaluation scope.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {INTERVIEW_TYPES.map((type) => {
            const isSelected = currentType === type.label;

            return (
              <button
                key={type.id}
                type="button"
                onClick={() => setValue("interviewType", type.label as any, { shouldValidate: true })}
                className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                  isSelected
                    ? "bg-text-primary text-white dark:text-brand-primary-900 border-text-primary shadow-md"
                    : "bg-surface-muted text-text-primary border-border-subtle hover:border-text-primary/30 hover:bg-border-subtle"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-display font-semibold text-sm flex items-center gap-1.5">
                    <Sparkles className={`w-4 h-4 ${isSelected ? "text-dashboard-metricHighlight fill-dashboard-metricHighlight" : "text-text-muted"}`} />
                    {type.label}
                  </span>
                </div>
                <p
                  className={`text-xs font-sans mt-1 leading-relaxed ${
                    isSelected ? "text-slate-300" : "text-text-secondary"
                  }`}
                >
                  {type.description}
                </p>
              </button>
            );
          })}
        </div>
        {errors.interviewType && <p className="text-xs font-sans text-rose-500 mt-1.5">{errors.interviewType.message}</p>}
      </div>

      {/* Footer Navigation */}
      <Navigation 
        currentStep={1}
        canContinue={isFormValid}
        onNext={handleSubmit(onSubmit)} 
      />
    </div>
  );
}
