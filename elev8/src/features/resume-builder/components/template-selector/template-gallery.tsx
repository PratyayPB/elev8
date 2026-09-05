"use client";

import React, { useEffect, useState } from "react";

const CATEGORY_LABELS: Record<string, string> = {
  ATS_FRIENDLY: "ATS Friendly",
  MINIMAL_MODERN: "Minimal & Modern",
  TWO_COLUMN: "2 Column",
  CREATIVE: "Creative",
};

interface TemplateItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  supportedSections: string[];
  previewImage?: string;
}

interface TemplateGalleryProps {
  selectedTemplate?: string;
  onSelectTemplate?: (slug: string) => void;
}

export function TemplateGallery({
  selectedTemplate,
  onSelectTemplate,
}: TemplateGalleryProps = {}) {
  const [templates, setTemplates] = useState<TemplateItem[]>([]);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/builder/templates")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setTemplates(data);
      })
      .catch((err) => console.error("Failed to load templates", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {loading && templates.length === 0 && <p className="text-sm text-gray-500">Loading templates...</p>}
      {templates.map((template) => {
        const isSelected = selectedTemplate === template.slug;
        const hasFailedImage = failedImages[template.slug];
        const categoryLabel = CATEGORY_LABELS[template.category] || template.category.replace("_", " ");

        return (
          <div
            key={template.slug}
            className={`group relative border rounded-lg overflow-hidden flex flex-col bg-white shadow-sm transition-all duration-300 ease-out origin-center hover:scale-[1.5] hover:z-50 hover:shadow-2xl ${
              isSelected ? "ring-2 ring-primary border-transparent" : "hover:border-primary"
            }`}
          >
            <div className="relative h-48 bg-gray-50 flex items-center justify-center border-b overflow-hidden">
              {template.previewImage && !hasFailedImage ? (
                <img
                  src={template.previewImage}
                  alt={`${template.name} resume template preview`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  onError={() => {
                    setFailedImages((prev) => ({ ...prev, [template.slug]: true }));
                  }}
                />
              ) : (
                <span className="text-sm text-gray-400 font-medium">{categoryLabel}</span>
              )}
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-medium text-lg text-text-primary">{template.name}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
                  {categoryLabel}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1 flex-1">JSON Resume Theme</p>
              <button
                type="button"
                disabled={!onSelectTemplate}
                onClick={() => onSelectTemplate?.(template.slug)}
                className={`mt-4 w-full py-2 border rounded-md text-sm font-medium transition-colors ${
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary"
                    : "hover:bg-gray-50 disabled:opacity-50"
                }`}
              >
                {isSelected ? "Selected" : "Select Template"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
