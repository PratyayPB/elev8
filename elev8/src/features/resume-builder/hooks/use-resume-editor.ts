import { useState, useCallback, useEffect, useRef } from "react";
import { BuilderResumeArtifact, ResumeBuilderTemplate, PersonalInformation } from "../types";
import { moveUp, moveDown } from "../utils/editor-utils";
import { toast } from "sonner";
import { BUILDER_API } from "../constants/builder-routes";
import { getPopulatedBuilderSections } from "../adapters/section-mapping";

export type SaveStatus = "clean" | "dirty" | "saving" | "saved" | "error";

interface UseResumeEditorProps {
  resumeId: string;
  initialArtifact: BuilderResumeArtifact;
  initialVersion: number;
  initialTemplate?: ResumeBuilderTemplate;
}

export function useResumeEditor({
  resumeId,
  initialArtifact,
  initialVersion,
  initialTemplate = "CLASSIC",
}: UseResumeEditorProps) {
  const [artifact, setArtifact] = useState<BuilderResumeArtifact>(initialArtifact);
  const [currentVersion, setCurrentVersion] = useState<number>(initialVersion);
  const [currentTemplate, setCurrentTemplate] = useState<ResumeBuilderTemplate>(initialTemplate);
  const [isTemplateUpdating, setIsTemplateUpdating] = useState<boolean>(false);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("clean");
  const [saveError, setSaveError] = useState<string | null>(null);
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);

  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentArtifactRef = useRef<BuilderResumeArtifact>(artifact);
  const currentVersionRef = useRef<number>(currentVersion);

  // Sync refs so callbacks always have the freshest value without triggering effect re-runs
  useEffect(() => {
    currentArtifactRef.current = artifact;
  }, [artifact]);

  useEffect(() => {
    currentVersionRef.current = currentVersion;
  }, [currentVersion]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  const save = useCallback(async () => {
    setSaveStatus("saving");
    setSaveError(null);

    try {
      const response = await fetch(BUILDER_API.ARTIFACT(resumeId), {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          artifact: currentArtifactRef.current,
          clientVersion: currentVersionRef.current,
        }),
      });

      if (!response.ok) {
        if (response.status === 409) {
          throw new Error("Version conflict: The resume has been modified elsewhere. Please refresh to load changes.");
        }
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || "Failed to save resume");
      }

      const result = await response.json();
      setCurrentVersion(result.version);
      setLastSavedAt(new Date(result.savedAt));
      setSaveStatus("saved");

      // Reset to clean status after 3 seconds
      setTimeout(() => {
        setSaveStatus((prev) => (prev === "saved" ? "clean" : prev));
      }, 3000);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to save changes.";
      setSaveError(msg);
      setSaveStatus("error");
    }
  }, [resumeId]);

  const markDirty = useCallback(() => {
    setSaveStatus("dirty");
  }, []);

  const replaceArtifact = useCallback(
    (newArtifact: BuilderResumeArtifact, newVersion?: number, savedAt?: Date) => {
      setArtifact(newArtifact);
      if (newVersion !== undefined) {
        setCurrentVersion(newVersion);
      }
      if (savedAt) {
        setLastSavedAt(savedAt);
        setSaveStatus("saved");
        setTimeout(() => {
          setSaveStatus((prev) => (prev === "saved" ? "clean" : prev));
        }, 3000);
      } else {
        markDirty();
      }
    },
    [markDirty]
  );

  const updatePersonalInformation = useCallback(
    (info: Partial<PersonalInformation>) => {
      setArtifact((prev) => ({
        ...prev,
        personalInformation: {
          ...prev.personalInformation,
          ...info,
        },
      }));
      markDirty();
    },
    [markDirty]
  );

  const updateSummary = useCallback(
    (summary: string) => {
      setArtifact((prev) => ({
        ...prev,
        professionalSummary: summary,
      }));
      markDirty();
    },
    [markDirty]
  );

  const addEntry = useCallback(
    (
      section: "education" | "experience" | "projects" | "skills" | "certifications" | "achievements",
      entry: any
    ) => {
      setArtifact((prev) => ({
        ...prev,
        [section]: [...(prev[section] as any[]), entry],
      }));
      markDirty();
    },
    [markDirty]
  );

  const updateEntry = useCallback(
    (
      section: "education" | "experience" | "projects" | "skills" | "certifications" | "achievements",
      id: string,
      data: any
    ) => {
      setArtifact((prev) => ({
        ...prev,
        [section]: (prev[section] as any[]).map((item) =>
          item.id === id ? { ...item, ...data } : item
        ),
      }));
      markDirty();
    },
    [markDirty]
  );

  const removeEntry = useCallback(
    (
      section: "education" | "experience" | "projects" | "skills" | "certifications" | "achievements",
      id: string
    ) => {
      setArtifact((prev) => ({
        ...prev,
        [section]: (prev[section] as any[]).filter((item) => item.id !== id),
      }));
      markDirty();
    },
    [markDirty]
  );

  const moveEntryUp = useCallback(
    (
      section: "education" | "experience" | "projects" | "skills" | "certifications" | "achievements",
      id: string
    ) => {
      setArtifact((prev) => ({
        ...prev,
        [section]: moveUp(prev[section] as any[], id),
      }));
      markDirty();
    },
    [markDirty]
  );

  const moveEntryDown = useCallback(
    (
      section: "education" | "experience" | "projects" | "skills" | "certifications" | "achievements",
      id: string
    ) => {
      setArtifact((prev) => ({
        ...prev,
        [section]: moveDown(prev[section] as any[], id),
      }));
      markDirty();
    },
    [markDirty]
  );

  const updateTemplate = useCallback(
    async (newTemplate: ResumeBuilderTemplate) => {
      try {
        setIsTemplateUpdating(true);
        
        // Fetch metadata to check supported sections
        try {
          const res = await fetch(`/api/builder/templates/${newTemplate}`);
          if (res.ok) {
            const templateMeta = await res.json();
            const populated = getPopulatedBuilderSections(artifact);
            const BUILDER_TO_JSON_RESUME_SECTION: Record<string, string> = {
              personalInformation: "basics",
              professionalSummary: "basics",
              experience: "work",
              education: "education",
              projects: "projects",
              skills: "skills",
              certifications: "certificates",
              achievements: "awards",
            };
            
            const unsupported: string[] = [];
            for (const p of populated) {
              const mapped = BUILDER_TO_JSON_RESUME_SECTION[p];
              if (mapped && !templateMeta.supportedSections.includes(mapped)) {
                unsupported.push(p);
              }
            }
            
            if (unsupported.length > 0) {
              toast.warning(`You switched to ${templateMeta.name}.`, {
                description: `This template does not support: ${unsupported.join(", ")}. Your data will remain saved but will not appear in this template.`,
                duration: 6000,
              });
            }
          }
        } catch (e) {
          console.error("Error fetching template metadata", e);
        }

        const response = await fetch(BUILDER_API.RESUME(resumeId), {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ template: newTemplate }),
        });

        if (!response.ok) throw new Error("Failed to update template");

        setCurrentTemplate(newTemplate);
        toast.success("Template updated successfully");
      } catch (err: unknown) {
        toast.error("Unable to update template", {
          description: "An error occurred while switching templates.",
        });
        console.error(err);
      } finally {
        setIsTemplateUpdating(false);
      }
    },
    [resumeId, artifact]
  );

  return {
    artifact,
    currentVersion,
    currentTemplate,
    isTemplateUpdating,
    updateTemplate,
    saveStatus,
    saveError,
    lastSavedAt,
    isDirty: saveStatus === "dirty" || saveStatus === "saving" || saveStatus === "error",
    save,
    replaceArtifact,
    updatePersonalInformation,
    updateSummary,
    addEntry,
    updateEntry,
    removeEntry,
    moveEntryUp,
    moveEntryDown,
  };
}
