import React from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, Save, CheckCircle2, AlertCircle, Download, LayoutTemplate, UserCheck, Sparkles, RefreshCw } from "lucide-react";
import { SaveStatus } from "../../hooks/use-resume-editor";
import { BUILDER_ROUTES } from "../../constants/builder-routes";
import { ResumeBuilderTemplate } from "../../types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TEMPLATE_CATEGORIES = [
  { id: "ATS_FRIENDLY", label: "ATS Friendly" },
  { id: "MINIMAL_MODERN", label: "Minimal & Modern" },
  { id: "TWO_COLUMN", label: "2 Column" },
  { id: "CREATIVE", label: "Creative" },
] as const;

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
  downloadStep?: "idle" | "saving" | "generating";
  onImportProfile?: () => void;
  isImportingProfile?: boolean;
  onAiBuild?: () => void;
  onRecompile?: () => void;
  isRecompiling?: boolean;
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
  downloadStep = "idle",
  onImportProfile,
  isImportingProfile = false,
  onAiBuild,
  onRecompile,
  isRecompiling = false,
}: EditorHeaderProps) {
  const [templates, setTemplates] = React.useState<any[]>([]);
  const [templateLoadError, setTemplateLoadError] = React.useState<boolean>(false);

  const fetchTemplates = React.useCallback(() => {
    setTemplateLoadError(false);
    fetch("/api/builder/templates")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load templates");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) setTemplates(data);
      })
      .catch((err) => {
        console.error("Failed to load templates", err);
        setTemplateLoadError(true);
      });
  }, []);

  React.useEffect(() => {
    fetchTemplates();
  }, [fetchTemplates]);

  // Standard throttle (1.5s) to prevent spamming recompile
  const [isRecompileThrottled, setIsRecompileThrottled] = React.useState(false);
  const lastRecompileTimeRef = React.useRef<number>(0);
  const RECOMPILE_THROTTLE_MS = 1500;

  const handleRecompileClick = () => {
    const now = Date.now();
    if (
      now - lastRecompileTimeRef.current < RECOMPILE_THROTTLE_MS ||
      isRecompiling ||
      isRecompileThrottled
    ) {
      return;
    }
    lastRecompileTimeRef.current = now;
    setIsRecompileThrottled(true);
    setTimeout(() => setIsRecompileThrottled(false), RECOMPILE_THROTTLE_MS);
    onRecompile?.();
  };

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
        {/* Left Section: Back link, Title & AI Build Button */}
        <div className="flex items-center gap-4 min-w-0">
          <Link
            href={BUILDER_ROUTES.HOME}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-dashboard-card text-text-secondary hover:text-text-primary transition-colors shrink-0"
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

          {/* Build Resume using AI Button */}
          {onAiBuild && (
            <button
              type="button"
              onClick={onAiBuild}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-brand-primary-500/30 bg-brand-primary-500/10 hover:bg-brand-primary-500/20 text-brand-primary-600 dark:text-brand-primary-400 font-display font-semibold text-xs transition-all shrink-0 ml-1"
              title="Build or tailor your resume using AI"
            >
              <Sparkles className="h-3.5 w-3.5 text-brand-primary-500" />
              <span className="whitespace-nowrap font-medium">Build Resume using AI</span>
            </button>
          )}
        </div>

        {/* Right Section: Template Selector, Download PDF & Save */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Import Profile Data Button */}
          <button
            type="button"
            onClick={onImportProfile}
            disabled={isImportingProfile || !onImportProfile}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border bg-surface-muted hover:bg-border-subtle text-text-primary font-display font-semibold text-xs transition-all disabled:opacity-50 shrink-0"
            title="Import personal information, education, and skills from your profile"
          >
            {isImportingProfile ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin text-text-primary" />
            ) : (
              <UserCheck className="h-3.5 w-3.5 text-text-primary" />
            )}
            <span className="whitespace-nowrap font-medium">
              {isImportingProfile ? "Importing..." : "Import Profile Data"}
            </span>
          </button>

          {/* Template Selector */}
          <Select
            value={currentTemplate}
            onValueChange={(val) => onTemplateChange(val as ResumeBuilderTemplate)}
            disabled={isTemplateUpdating || templates.length === 0}
          >
            <SelectTrigger
              className="w-[175px] sm:w-[205px] h-9 bg-surface-muted hover:bg-surface-subtle border-border rounded-xl px-3 text-xs font-display font-semibold text-text-primary dark:text-foreground focus:ring-1 focus:ring-text-primary focus:border-text-primary transition-all shrink-0"
              title="Change resume template"
            >
              <div className="flex items-center gap-1.5 truncate">
                {isTemplateUpdating ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-text-secondary shrink-0" />
                ) : (
                  <LayoutTemplate className="h-3.5 w-3.5 text-text-secondary shrink-0" />
                )}
                <SelectValue
                  placeholder={
                    templates.find((t) => t.slug === currentTemplate)?.name ||
                    (templateLoadError
                      ? "Failed to load"
                      : templates.length === 0
                      ? "Loading templates..."
                      : "Select template")
                  }
                />
              </div>
            </SelectTrigger>
            <SelectContent className="bg-surface dark:bg-surface-subtle border-border-subtle shadow-md rounded-xl p-1 z-50 max-h-80">
              {templateLoadError ? (
                <div className="py-2.5 px-3 text-xs text-red-500 text-center font-display space-y-1">
                  <div>Failed to load templates</div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      fetchTemplates();
                    }}
                    className="text-[11px] underline text-text-primary hover:text-text-secondary cursor-pointer"
                  >
                    Click to retry
                  </button>
                </div>
              ) : templates.length === 0 ? (
                <div className="py-2.5 px-3 text-xs text-text-muted text-center font-display">
                  Loading templates...
                </div>
              ) : (
                TEMPLATE_CATEGORIES.map(({ id, label }, index) => {
                  const groupTemplates = templates.filter((t) => t.category === id);
                  if (groupTemplates.length === 0) return null;

                  return (
                    <React.Fragment key={id}>
                      {index > 0 && <SelectSeparator className="my-1 bg-border-subtle" />}
                      <SelectGroup>
                        <SelectLabel className="px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-text-muted">
                          {label}
                        </SelectLabel>
                        {groupTemplates.map((template) => (
                          <SelectItem
                            key={template.slug}
                            value={template.slug}
                            className="text-xs font-display cursor-pointer"
                          >
                            {template.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </React.Fragment>
                  );
                })
              )}
            </SelectContent>
          </Select>

          {/* Recompile Preview Button */}
          {onRecompile && (
            <button
              type="button"
              onClick={handleRecompileClick}
              disabled={isRecompiling || isRecompileThrottled}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-border bg-surface-muted hover:bg-border-subtle text-text-primary font-display font-semibold text-xs transition-all disabled:opacity-50 shrink-0"
              title="Recompile preview with your latest changes"
            >
              <RefreshCw
                className={`h-3.5 w-3.5 text-text-primary ${
                  isRecompiling ? "animate-spin" : ""
                }`}
              />
              <span className="hidden sm:inline">
                {isRecompiling ? "Recompiling..." : "Recompile"}
              </span>
            </button>
          )}

          {/* PDF Download Button */}
          <button
            type="button"
            onClick={onDownloadPdf}
            disabled={isPdfGenerating || downloadStep === "saving" || downloadStep === "generating"}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-border bg-surface-muted hover:bg-border-subtle text-text-primary font-display font-semibold text-xs transition-all disabled:opacity-50"
            title="Download PDF version of your resume"
          >
            {isPdfGenerating || downloadStep === "saving" || downloadStep === "generating" ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin text-text-primary" />
            ) : (
              <Download className="h-3.5 w-3.5 text-text-primary" />
            )}
            <span className="hidden sm:inline">
              {downloadStep === "saving"
                ? "Saving..."
                : downloadStep === "generating" || isPdfGenerating
                ? "Generating..."
                : "Download PDF"}
            </span>
          </button>

          {/* Manual Save Button */}
          <button
            type="button"
            onClick={onSave}
            disabled={saveStatus === "saving" || !isDirty}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-text-primary text-white dark:text-brand-primary-900 font-display font-semibold text-xs transition-all hover:bg-black/80 dark:hover:bg-brand-secondary-200 disabled:opacity-50"
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
