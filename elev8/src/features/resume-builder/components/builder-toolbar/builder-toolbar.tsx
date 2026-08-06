import React from "react";

export function BuilderToolbar() {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-4">
        <h1 className="text-sm font-semibold text-gray-900">Untitled Resume</h1>
      </div>
      <div className="flex items-center space-x-2">
        <button disabled className="px-3 py-1.5 text-sm font-medium border rounded-md disabled:opacity-50">
          Templates
        </button>
        <button disabled className="px-3 py-1.5 text-sm font-medium border rounded-md disabled:opacity-50">
          Import
        </button>
        <button disabled className="px-3 py-1.5 text-sm font-medium bg-black text-white rounded-md disabled:opacity-50">
          Export PDF
        </button>
      </div>
    </div>
  );
}
