"use client";

import React, { useState, useRef, useCallback } from "react";
import { ProfileData } from "../types";
import { PageHeader } from "@/components/dashboard";
import { ProfileCompletenessCard } from "./profile-completeness-card";
import { ProfileForm } from "./profile-form";
import { Loader2 } from "lucide-react";

interface ProfileWorkspaceProps {
  initialProfile: ProfileData | null;
}

export function ProfileWorkspace({ initialProfile }: ProfileWorkspaceProps) {
  const [profile, setProfile] = useState<ProfileData | null>(initialProfile);
  const [isDirty, setIsDirty] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSuccess = useCallback((updated: ProfileData) => {
    setProfile(updated);
    setIsDirty(false);
  }, []);

  const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formRef.current) {
      if (typeof formRef.current.requestSubmit === "function") {
        formRef.current.requestSubmit();
      } else {
        formRef.current.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        );
      }
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Career Profile"
        description="Your central career context powers personalized roadmaps, resume scoring, interview simulations, and career guidance."
        section="Profile Management"
        action={
          <button
            type="button"
            disabled={!isDirty || isSubmitting}
            onClick={handleSaveClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-text-primary text-white dark:text-brand-primary-900 font-display font-semibold text-sm hover:bg-black/80 dark:hover:bg-brand-secondary-200 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm active:scale-[0.98] cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Saving Changes...
              </>
            ) : profile ? (
              "Save Profile Changes"
            ) : (
              "Complete Profile Setup"
            )}
          </button>
        }
      />

      {/* Profile Completeness Visual Widget */}
      <ProfileCompletenessCard profile={profile} />

      {/* Main Profile Content: Edit / Setup */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-display font-bold text-text-primary">
            {profile ? "Profile Details & Sections" : "Create Profile"}
          </h2>
        </div>

        <ProfileForm
          formRef={formRef}
          initialProfile={profile}
          mode={profile ? "edit" : "create"}
          onSuccess={handleSuccess}
          onDirtyChange={setIsDirty}
          onSubmittingChange={setIsSubmitting}
        />
      </div>
    </div>
  );
}
