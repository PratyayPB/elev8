import React from "react";
import { TemplateGallery } from "@/features/resume-builder/components";

export default function TemplatesPage() {
  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Template Gallery</h1>
        <p className="text-gray-500 mt-2">Choose a template for your resume.</p>
      </div>
      <TemplateGallery />
    </div>
  );
}
