"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FileText, Layout, Loader2 } from "lucide-react";
import { CreateResumeInputSchema } from "../schemas/resume-artifact.schema";
import { BUILDER_ROUTES, BUILDER_API } from "../constants/builder-routes";

interface CreateResumeFormProps {}

interface CreateResumeFormInput {
  title: string;
  template?: string;
}

interface TemplateMetadata {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  category: string;
  previewImage?: string;
}

const CATEGORIES = [
  { id: "ATS_FRIENDLY", label: "ATS Friendly" },
  { id: "MINIMAL_MODERN", label: "Minimal & Modern" },
  { id: "TWO_COLUMN", label: "2 Column" },
  { id: "CREATIVE", label: "Creative" },
];

export function CreateResumeForm({}: CreateResumeFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [templates, setTemplates] = useState<TemplateMetadata[]>([]);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string>("ATS_FRIENDLY");
  const [isLoadingTemplates, setIsLoadingTemplates] = useState(true);

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
      template: "academic-cv-lite",
    },
  });

  const selectedTemplate = watch("template");

  useEffect(() => {
    fetch("/api/builder/templates")
      .then((res) => res.json())
      .then((data) => {
        const templatesArray = Array.isArray(data) ? data : (data.templates || []);
        if (templatesArray.length > 0) {
          setTemplates(templatesArray);
          const firstValid = templatesArray.find((t: any) => t.category === "ATS_FRIENDLY");
          if (firstValid && !templatesArray.find((t: any) => t.slug === selectedTemplate)) {
            setValue("template", firstValid.slug);
          }
        }
      })
      .catch((err) => console.error("Failed to load templates", err))
      .finally(() => setIsLoadingTemplates(false));
  }, [setValue, selectedTemplate]);

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
      
      router.push(BUILDER_ROUTES.EDITOR(resumeId));
      router.refresh();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred while creating your resume.";
      setError(errorMessage);
      setIsSubmitting(false);
    }
  };

  const filteredTemplates = templates.filter((t) => t.category === activeCategory);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {error && (
        <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm font-medium border border-red-200">
          {error}
        </div>
      )}

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

      {/* Template Categories Tabs */}
      <div className="space-y-4">
        <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
          <Layout className="w-3.5 h-3.5 text-text-secondary" />
          Select Template Style
        </label>
        
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeCategory === cat.id
                  ? "bg-text-primary text-white border-text-primary"
                  : "bg-surface-muted text-text-secondary border-border hover:bg-border-subtle"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="mt-4 bg-surface-muted p-4 md:p-6 rounded-xl border border-border">
          {isLoadingTemplates ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-6 h-6 animate-spin text-text-secondary" />
            </div>
          ) : filteredTemplates.length === 0 ? (
            <div className="text-center py-8 text-sm text-text-secondary">
              No templates available in this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredTemplates.map((tmpl) => {
                const isSelected = selectedTemplate === tmpl.slug;
                const hasFailedImage = failedImages[tmpl.slug];
                const categoryLabel = CATEGORIES.find((c) => c.id === tmpl.category)?.label || tmpl.category.replace("_", " ");

                return (
                  <button
                    key={tmpl.id}
                    type="button"
                    onClick={() => setValue("template", tmpl.slug)}
                    className={`group relative flex flex-col text-left rounded-xl border-2 overflow-hidden transition-all duration-300 ease-out origin-center hover:scale-[1.5] hover:z-50 hover:shadow-2xl ${
                      isSelected
                        ? "border-text-primary ring-2 ring-text-primary/20 shadow-md"
                        : "border-border bg-dashboard-card hover:border-text-primary"
                    }`}
                  >
                    {/* Preview Container - Static screenshot */}
                    <div className="relative w-full aspect-[1/1.2] bg-surface-muted border-b border-border overflow-hidden flex items-center justify-center">
                      {tmpl.previewImage && !hasFailedImage ? (
                        <img
                          src={tmpl.previewImage}
                          alt={`${tmpl.name} resume template preview`}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                          onError={() => {
                            setFailedImages((prev) => ({ ...prev, [tmpl.slug]: true }));
                          }}
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center p-4 text-center">
                          <Layout className="w-8 h-8 text-text-muted mb-2" />
                          <span className="text-xs font-semibold text-text-secondary">
                            {categoryLabel}
                          </span>
                          <span className="text-[10px] text-text-muted mt-0.5">Template Preview</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4 bg-dashboard-card z-10 w-full flex-grow">
                      <div className="flex items-center justify-between">
                        <span className="font-display font-semibold text-sm text-text-primary truncate">
                          {tmpl.name}
                        </span>
                        {isSelected && (
                          <div className="w-2.5 h-2.5 rounded-full bg-text-primary shrink-0" />
                        )}
                      </div>
                      {tmpl.description && (
                        <p className="text-xs text-text-secondary mt-1.5 line-clamp-2">
                          {tmpl.description}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 border-t border-border-subtle pt-6">
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
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-text-primary text-white dark:text-brand-primary-900 font-display font-semibold text-sm transition-all hover:bg-black/80 dark:hover:bg-brand-secondary-200 disabled:opacity-50"
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
