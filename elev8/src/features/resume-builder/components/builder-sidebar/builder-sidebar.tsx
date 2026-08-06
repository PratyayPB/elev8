import React from "react";
import { BUILDER_SECTIONS } from "../../constants/builder-sections";

export function BuilderSidebar() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h2 className="font-semibold text-lg">Sections</h2>
      </div>
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {BUILDER_SECTIONS.map((section) => (
          <button
            key={section.id}
            disabled
            className="w-full flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors text-left disabled:opacity-50"
          >
            <span className="text-sm font-medium">{section.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
