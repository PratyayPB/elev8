"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FileText, Target, Layout, Loader2 } from "lucide-react";
import {
  CreateResumeInputSchema,
} from "../schemas/resume-artifact.schema";
import { BUILDER_ROUTES, BUILDER_API } from "../constants/builder-routes";

interface CreateResumeFormProps {
  defaultTargetRole?: string;
}

interface CreateResumeFormInput {
  title: string;
  targetRole?: string;
  template?: "CLASSIC" | "MODERN" | "MINIMAL";
}

export function CreateResumeForm({ defaultTargetRole = "" }: CreateResumeFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreateResumeFormInput>({
    resolver: zodResolver(CreateResumeInputSchema),
    defaultValues: {
      title: "",
      targetRole: defaultTargetRole,
      template: "MODERN",
    },
  });

  const selectedTemplate = watch("template");

  const onSubmit = async (data: CreateResumeFormInput) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(BUILDER_API.RESUMES, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || "Failed to create resume");
      }

      const result = await response.json();
      const resumeId = result.resume.id;
      
      // Redirect to editor
      router.push(BUILDER_ROUTES.EDITOR(resumeId));
      router.refresh();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred while creating your resume.";
      setError(errorMessage);
      setIsSubmitting(false);
    }
  };

  const templatesList = [
    {
      id: "CLASSIC" as const,
      name: "Classic",
      description: "Standard layout ideal for traditional industries.",
    },
    {
      id: "MODERN" as const,
      name: "Modern",
      description: "Sleek, balanced design suitable for most professions.",
    },
    {
      id: "MINIMAL" as const,
      name: "Minimal",
      description: "Ultra-clean layout prioritizing readability.",
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm font-medium border border-red-200">
          {error}
        </div>
      )}

      <div className="space-y-4">
        {/* Title */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-text-secondary" />
            Resume Title <span className="text-red-500">*</span>
          </label>
          <input
            {...register("title")}
            type="text"
            placeholder="e.g. Software Engineer Resume - Google Application"
            className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
          />
          {errors.title && (
            <p className="text-xs text-red-500 mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Target Role */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-text-secondary" />
            Target Role (Optional)
          </label>
          <input
            {...register("targetRole")}
            type="text"
            placeholder="e.g. Senior Software Engineer"
            className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
          />
          {errors.targetRole && (
            <p className="text-xs text-red-500 mt-1">{errors.targetRole.message}</p>
          )}
        </div>

        {/* Template Selection */}
        <div className="space-y-3">
          <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <Layout className="w-3.5 h-3.5 text-text-secondary" />
            Select Template
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {templatesList.map((tmpl) => {
              const isSelected = selectedTemplate === tmpl.id;
              return (
                <button
                  key={tmpl.id}
                  type="button"
                  onClick={() => setValue("template", tmpl.id)}
                  className={`flex flex-col text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? "border-text-primary bg-surface-muted ring-1 ring-text-primary"
                      : "border-border bg-dashboard-card hover:bg-surface-muted/50"
                  }`}
                >
                  <span className="font-display font-semibold text-sm text-text-primary">
                    {tmpl.name}
                  </span>
                  <span className="text-xs text-text-secondary mt-1">
                    {tmpl.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 border-t border-border-subtle pt-6 mt-8">
        <button
          type="button"
          onClick={() => router.push(BUILDER_ROUTES.HOME)}
          disabled={isSubmitting}
          className="px-5 py-2.5 rounded-xl bg-surface-muted text-text-primary hover:bg-border-subtle font-display font-semibold text-sm transition-all"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-text-primary text-white font-display font-semibold text-sm transition-all hover:bg-black/80 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Creating...
            </>
          ) : (
            "Create Resume"
          )}
        </button>
      </div>
    </form>
  );
}
