import React from "react";

export function ResumePreview() {
  return (
    <div className="flex flex-col h-full bg-gray-100 p-6">
      <div className="flex-1 bg-white shadow-lg rounded-md flex items-center justify-center border">
        <div className="text-center text-gray-500">
          <p className="text-lg font-medium text-gray-700">Live Preview</p>
          <p className="text-sm mt-1">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}
