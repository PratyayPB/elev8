"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";
import { UploadCloud, FileText, AlertCircle } from "lucide-react";

interface UploadDropzoneProps {
  onFileSelect: (file: File) => void;
  error?: string | null;
}

export function UploadDropzone({ onFileSelect, error }: UploadDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      onFileSelect(droppedFile);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      onFileSelect(selectedFile);
    }
  };

  return (
    <div className="w-full">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-3xl p-8 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center min-h-[220px] ${
          isDragging
            ? "border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 scale-[1.01]"
            : error
            ? "border-red-300 dark:border-red-800 bg-red-50/30 dark:bg-red-900/10"
            : "border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-gray-100/50 dark:hover:bg-gray-800"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,application/pdf"
          onChange={handleInputChange}
          className="hidden"
        />

        <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
          <UploadCloud className="w-7 h-7" />
        </div>

        <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">
          Drag & Drop your resume here
        </h4>
        <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs mb-3">
          Support for PDF files up to 10 MB in size.
        </p>

        <span className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-xs font-semibold text-gray-700 dark:text-gray-200 shadow-sm">
          Browse File
        </span>
      </div>

      {error && (
        <div className="mt-3 flex items-center gap-2 text-xs font-medium text-red-600 dark:text-red-400">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
