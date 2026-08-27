import React from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, Save, CheckCircle2, AlertCircle, Download, LayoutTemplate } from "lucide-react";
import { SaveStatus } from "../../hooks/use-resume-editor";
import { BUILDER_ROUTES } from "../../constants/builder-routes";
import { ResumeBuilderTemplate } from "../../types";

interface EditorHeaderProps {
  title: string;
  saveStatus: SaveStatus;
  saveError: string | null;
  lastSavedAt: Date | null;
  onSave: () => void;
  isDirty: boolean;
  currentTemplate: ResumeBuilderTemplate;
  onTemplateChange: (template: ResumeBuilderTemplate) => void;
  isTemplateUpdating?: boolean;
  onDownloadPdf: () => void;
  isPdfGenerating?: boolean;
}

export function EditorHeader({
  title,
  saveStatus,
  saveError,
  lastSavedAt,
  onSave,
  isDirty,
  currentTemplate,
  onTemplateChange,
  isTemplateUpdating = false,
  onDownloadPdf,
  isPdfGenerating = false,
}: EditorHeaderProps) {
  const getStatusBadge = () => {
    switch (saveStatus) {
      case "saving":
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-text-secondary bg-surface-muted px-2.5 py-1 rounded-full">
            <Loader2 className="h-3 w-3 animate-spin text-text-secondary" />
            Saving...
          </span>
        );
      case "saved":
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
            <CheckCircle2 className="h-3 w-3 text-green-600" />
            Saved ✓
          </span>
        );
      case "error":
        return (
          <span
            className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 px-2.5 py-1 rounded-full border border-red-200 cursor-help"
            title={saveError || "Error occurred during autosave."}
          >
            <AlertCircle className="h-3 w-3 text-red-600" />
            Unable to save
          </span>
        );
      case "dirty":
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground bg-secondary px-2.5 py-1 rounded-full border border-border">
            Unsaved changes
          </span>
        );
      case "clean":
      default:
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-text-secondary bg-surface-muted px-2.5 py-1 rounded-full">
            Saved
          </span>
        );
    }
  };

  return (
    <header className="sticky top-0 z-20 w-full border-b border-border bg-dashboard-card backdrop-blur-sm supports-[backdrop-filter]:bg-dashboard-card/90">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left Section: Back link & Title */}
        <div className="flex items-center gap-4 min-w-0">
          <Link
            href={BUILDER_ROUTES.HOME}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-dashboard-card text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="min-w-0">
            <h1 className="text-sm font-display font-bold text-text-primary truncate" title={title}>
              {title}
            </h1>
            <div className="flex items-center gap-2 mt-0.5">
              {getStatusBadge()}
              {lastSavedAt && (
                <span className="text-[10px] text-text-secondary hidden sm:inline">
                  Last saved {lastSavedAt.toLocaleTimeString()}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right Section: Template Selector, Download PDF & Save */}
        <div className="flex items-center gap-2.5">
          {/* Template Selector */}
          <div className="relative flex items-center">
            <LayoutTemplate className="h-3.5 w-3.5 text-text-secondary absolute left-3 pointer-events-none" />
            <select
              value={currentTemplate}
              disabled={isTemplateUpdating}
              onChange={(e) => onTemplateChange(e.target.value as ResumeBuilderTemplate)}
              className="pl-8 pr-8 py-2 rounded-xl bg-surface-muted border border-border text-xs font-semibold text-text-primary focus:outline-none focus:border-text-primary transition-all cursor-pointer disabled:opacity-50 appearance-none"
            >
              <option value="CLASSIC">Classic Template</option>
              <option value="MODERN">Modern Template</option>
              <option value="MINIMAL">Minimal Template</option>
            </select>
            {isTemplateUpdating && (
              <Loader2 className="h-3 w-3 animate-spin text-text-secondary absolute right-2.5 pointer-events-none" />
            )}
          </div>

          {/* PDF Download Button */}
          <button
            type="button"
            onClick={onDownloadPdf}
            disabled={isPdfGenerating}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-border bg-surface-muted hover:bg-border-subtle text-text-primary font-display font-semibold text-xs transition-all disabled:opacity-50"
            title="Download PDF version of your resume"
          >
            {isPdfGenerating ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin text-text-primary" />
            ) : (
              <Download className="h-3.5 w-3.5 text-text-primary" />
            )}
            <span className="hidden sm:inline">
              {isPdfGenerating ? "Generating..." : "Download PDF"}
            </span>
          </button>

          {/* Manual Save Button */}
          <button
            type="button"
            onClick={onSave}
            disabled={saveStatus === "saving" || !isDirty}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-text-primary text-white font-display font-semibold text-xs transition-all hover:bg-black/80 disabled:opacity-50"
          >
            {saveStatus === "saving" ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Save className="h-3.5 w-3.5" />
            )}
            <span>Save</span>
          </button>
        </div>
      </div>
    </header>
  );
}
