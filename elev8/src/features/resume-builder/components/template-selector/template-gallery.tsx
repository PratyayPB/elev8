import React from "react";
import { TEMPLATES } from "../../constants/templates";

export function TemplateGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {TEMPLATES.map((template) => (
        <div key={template.id} className="border rounded-lg overflow-hidden flex flex-col bg-white shadow-sm hover:shadow transition-shadow">
          <div className="h-48 bg-gray-50 flex items-center justify-center border-b">
            <span className="text-sm text-gray-400 font-medium">Thumbnail Placeholder</span>
          </div>
          <div className="p-4 flex flex-col flex-1">
            <h3 className="font-medium text-lg">{template.name}</h3>
            <p className="text-sm text-gray-500 mt-1 flex-1">{template.description}</p>
            <button disabled className="mt-4 w-full py-2 border rounded-md disabled:opacity-50 text-sm font-medium hover:bg-gray-50 transition-colors">
              Select Template
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
