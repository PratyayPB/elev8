"use client";

import React, { useState } from "react";
import Link from "next/link";
import { UserProfileData } from "../types";
import { useProfile } from "../hooks/use-profile";
import { ProfileProgress } from "@/components/profile/profile-progress";
import { ProfileSummary } from "@/components/profile/profile-summary";
import { PersonalInfoStep } from "@/components/onboarding/personal-info";
import { EducationStep } from "@/components/onboarding/education";
import { ProfessionalStep } from "@/components/onboarding/professional";
import { SkillsStep } from "@/components/onboarding/skills";
import { InterestsStep } from "@/components/onboarding/interests";
import { GoalsStep } from "@/components/onboarding/goals";
import { PreferencesStep } from "@/components/onboarding/preferences";
import { ROUTES } from "@/constants/routes";
import { ArrowRight, Check, User, GraduationCap, Briefcase, Sparkles, Target, Sliders, SlidersHorizontal, Eye } from "lucide-react";

interface ProfileEditorProps {
  initialProfile: UserProfileData;
}

export function ProfileEditor({ initialProfile }: ProfileEditorProps) {
  const { profile, updateProfile, isLoading } = useProfile(initialProfile);
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  const currentProfile = profile || initialProfile;

  const handleSaveSection = async (data: Partial<UserProfileData>) => {
    const res = await updateProfile(data);
    if (res.success) {
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    }
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: Eye },
    { id: "personal", label: "Personal Info", icon: User },
    { id: "education", label: "Academic", icon: GraduationCap },
    { id: "professional", label: "Professional", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Sparkles },
    { id: "interests", label: "Interests", icon: Target },
    { id: "goals", label: "Goals", icon: Sliders },
    { id: "preferences", label: "Preferences", icon: SlidersHorizontal },
  ];

  return (
    <div className="space-y-6">
      {/* Header & Progress */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-surface p-6 rounded-3xl border border-border">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">Profile & Settings</h2>
          <p className="text-xs text-text-secondary">
            Manage your personal details, academic history, skills, and preferences.
          </p>
        </div>

        {currentProfile.onboardingStatus !== "COMPLETED" && (
          <Link
            href={ROUTES.ONBOARDING}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-cyan text-black text-xs font-semibold hover:brightness-105 transition-all shadow-sm flex-shrink-0"
          >
            Resume Onboarding Wizard
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      <ProfileProgress profile={currentProfile} />

      {savedSuccess && (
        <div className="p-3.5 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-semibold flex items-center gap-2">
          <Check className="w-4 h-4" />
          Profile updated successfully!
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-border overflow-x-auto pb-2 no-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                isActive
                  ? "bg-text-primary text-background font-semibold"
                  : "bg-surface text-text-secondary hover:text-text-primary hover:bg-surface-muted"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Contents */}
      <div className="bg-surface p-6 rounded-3xl border border-border shadow-sm">
        {activeTab === "overview" && <ProfileSummary profile={currentProfile} />}

        {activeTab === "personal" && (
          <PersonalInfoStep
            initialValues={currentProfile}
            currentStep={2}
            isSubmitting={isLoading}
            onSubmit={(data) => handleSaveSection(data)}
            onPrevious={() => setActiveTab("overview")}
            onSkip={() => {}}
          />
        )}

        {activeTab === "education" && (
          <EducationStep
            initialValues={currentProfile}
            currentStep={3}
            isSubmitting={isLoading}
            onSubmit={(data) =>
              handleSaveSection({
                ...data,
                currentStatus: data.currentStatus || null,
              })
            }
            onPrevious={() => setActiveTab("personal")}
            onSkip={() => {}}
          />
        )}

        {activeTab === "professional" && (
          <ProfessionalStep
            initialValues={currentProfile}
            currentStep={4}
            isSubmitting={isLoading}
            onSubmit={(data) => handleSaveSection(data)}
            onPrevious={() => setActiveTab("education")}
            onSkip={() => {}}
          />
        )}

        {activeTab === "skills" && (
          <SkillsStep
            initialValues={currentProfile}
            currentStep={5}
            isSubmitting={isLoading}
            onSubmit={(data) => handleSaveSection(data)}
            onPrevious={() => setActiveTab("professional")}
            onSkip={() => {}}
          />
        )}

        {activeTab === "interests" && (
          <InterestsStep
            initialValues={currentProfile}
            currentStep={6}
            isSubmitting={isLoading}
            onSubmit={(data) => handleSaveSection(data)}
            onPrevious={() => setActiveTab("skills")}
            onSkip={() => {}}
          />
        )}

        {activeTab === "goals" && (
          <GoalsStep
            initialValues={currentProfile}
            currentStep={7}
            isSubmitting={isLoading}
            onSubmit={(data) => handleSaveSection(data)}
            onPrevious={() => setActiveTab("interests")}
            onSkip={() => {}}
          />
        )}

        {activeTab === "preferences" && (
          <PreferencesStep
            initialValues={currentProfile}
            currentStep={8}
            isSubmitting={isLoading}
            onSubmit={(data) => handleSaveSection(data)}
            onPrevious={() => setActiveTab("goals")}
            onSkip={() => {}}
          />
        )}
      </div>
    </div>
  );
}
