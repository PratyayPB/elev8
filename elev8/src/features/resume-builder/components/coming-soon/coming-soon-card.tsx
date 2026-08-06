import React from "react";

interface ComingSoonCardProps {
  title: string;
  description: string;
}

export function ComingSoonCard({ title, description }: ComingSoonCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center border rounded-lg bg-gray-50 border-dashed border-gray-300">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-500 max-w-sm">{description}</p>
      <span className="mt-6 px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
        Coming Soon
      </span>
    </div>
  );
}
