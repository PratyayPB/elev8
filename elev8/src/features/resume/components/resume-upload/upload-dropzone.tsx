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
            ? "border-text-primary bg-dashboard-metricHighlight/15 scale-[1.01]"
            : error
            ? "border-rose-300 bg-rose-50/30"
            : "border-border-subtle bg-surface-muted hover:border-text-primary/30 hover:bg-surface-muted/80"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,application/pdf"
          onChange={handleInputChange}
          className="hidden"
        />

        <div className="w-14 h-14 rounded-2xl bg-white border border-border-subtle text-text-primary flex items-center justify-center mb-4 shadow-sm">
          <UploadCloud className="w-7 h-7" />
        </div>

        <h4 className="text-base font-display font-bold text-text-primary mb-1">
          Drag & Drop your resume here
        </h4>
        <p className="text-xs font-sans text-text-secondary max-w-xs mb-3">
          Support for PDF files up to 10 MB in size.
        </p>

        <span className="px-4 py-2 bg-white border border-border-subtle rounded-xl text-xs font-display font-bold text-text-primary shadow-sm hover:bg-surface-muted transition-colors">
          Browse File
        </span>
      </div>

      {error && (
        <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-rose-600 font-sans">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
