import { useState, useCallback, useEffect, useRef } from "react";
import { BuilderResumeArtifact, ResumeBuilderTemplate, PersonalInformation } from "../types";
import { moveUp, moveDown } from "../utils/editor-utils";
import { BUILDER_API } from "../constants/builder-routes";

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
    // Clear any pending debounced save
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
      saveTimeoutRef.current = null;
    }

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

  const triggerAutosave = useCallback(() => {
    setSaveStatus("dirty");
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    saveTimeoutRef.current = setTimeout(() => {
      save();
    }, 2000);
  }, [save]);

  const updatePersonalInformation = useCallback(
    (info: Partial<PersonalInformation>) => {
      setArtifact((prev) => ({
        ...prev,
        personalInformation: {
          ...prev.personalInformation,
          ...info,
        },
      }));
      triggerAutosave();
    },
    [triggerAutosave]
  );

  const updateSummary = useCallback(
    (summary: string) => {
      setArtifact((prev) => ({
        ...prev,
        professionalSummary: summary,
      }));
      triggerAutosave();
    },
    [triggerAutosave]
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
      triggerAutosave();
    },
    [triggerAutosave]
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
      triggerAutosave();
    },
    [triggerAutosave]
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
      triggerAutosave();
    },
    [triggerAutosave]
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
      triggerAutosave();
    },
    [triggerAutosave]
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
      triggerAutosave();
    },
    [triggerAutosave]
  );

  const updateTemplate = useCallback(
    async (newTemplate: ResumeBuilderTemplate) => {
      setIsTemplateUpdating(true);
      try {
        const response = await fetch(BUILDER_API.RESUME(resumeId), {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ template: newTemplate }),
        });

        if (!response.ok) {
          throw new Error("Failed to update template");
        }

        setCurrentTemplate(newTemplate);
      } catch (err: unknown) {
        console.error("Failed to update template:", err);
      } finally {
        setIsTemplateUpdating(false);
      }
    },
    [resumeId]
  );

  return {
    artifact,
    currentTemplate,
    isTemplateUpdating,
    updateTemplate,
    saveStatus,
    saveError,
    lastSavedAt,
    isDirty: saveStatus === "dirty" || saveStatus === "saving" || saveStatus === "error",
    save,
    updatePersonalInformation,
    updateSummary,
    addEntry,
    updateEntry,
    removeEntry,
    moveEntryUp,
    moveEntryDown,
  };
}
