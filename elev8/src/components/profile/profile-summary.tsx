"use client";

import React from "react";
import { UserProfileData } from "@/features/profile/types";
import { ProfileAvatar } from "./profile-avatar";
import { Briefcase, GraduationCap, Target, Sparkles, Sliders, MapPin, Globe } from "lucide-react";

interface ProfileSummaryProps {
  profile: Partial<UserProfileData> | null;
}

export function ProfileSummary({ profile }: ProfileSummaryProps) {
  if (!profile) return null;

  const skills = profile.skills || {
    languages: [],
    frameworks: [],
    databases: [],
    cloud: [],
    tools: [],
    softSkills: [],
  };

  const allSkills = [
    ...(skills.languages || []),
    ...(skills.frameworks || []),
    ...(skills.databases || []),
    ...(skills.cloud || []),
    ...(skills.tools || []),
    ...(skills.softSkills || []),
  ];

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-border">
        <ProfileAvatar src={profile.profilePicture} name={profile.fullName} size="xl" />
        <div>
          <h3 className="text-xl font-bold text-text-primary">{profile.fullName || "User Profile"}</h3>
          <p className="text-sm text-text-secondary">{profile.email}</p>
          <div className="flex flex-wrap gap-3 text-xs text-text-muted mt-2">
            {profile.country && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {profile.country}
              </span>
            )}
            {profile.timezone && (
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" /> {profile.timezone}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Education */}
        <div className="p-4 rounded-2xl bg-surface border border-border space-y-2">
          <div className="flex items-center gap-2 text-accent-cyan font-semibold text-sm">
            <GraduationCap className="w-4 h-4" /> Academic Background
          </div>
          <p className="text-sm text-text-primary">
            {profile.degree ? `${profile.degree} in ${profile.major || ""}` : "Not specified"}
          </p>
          <p className="text-xs text-text-secondary">
            {profile.institution || "No institution listed"}
            {profile.graduationYear ? ` (${profile.graduationYear})` : ""}
          </p>
          {profile.currentStatus && (
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-surface-muted border border-border text-text-secondary">
              {profile.currentStatus.replace("_", " ")}
            </span>
          )}
        </div>

        {/* Professional */}
        <div className="p-4 rounded-2xl bg-surface border border-border space-y-2">
          <div className="flex items-center gap-2 text-accent-gold font-semibold text-sm">
            <Briefcase className="w-4 h-4" /> Professional Background
          </div>
          <p className="text-sm text-text-primary">{profile.currentRole || "Not specified"}</p>
          <p className="text-xs text-text-secondary">
            {profile.industry || "No industry specified"} • {profile.yearsOfExperience ?? 0} yrs exp
          </p>
          {profile.employmentStatus && (
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-surface-muted border border-border text-text-secondary">
              {profile.employmentStatus}
            </span>
          )}
        </div>
      </div>

      {/* Skills */}
      <div className="p-4 rounded-2xl bg-surface border border-border space-y-3">
        <div className="flex items-center gap-2 text-accent-coral font-semibold text-sm">
          <Sparkles className="w-4 h-4" /> Skills & Competencies
        </div>
        {allSkills.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {allSkills.map((sk, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-surface-muted border border-border text-text-primary"
              >
                {sk}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-xs text-text-muted">No skills listed yet.</p>
        )}
      </div>

      {/* Interests & Goals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Interests */}
        <div className="p-4 rounded-2xl bg-surface border border-border space-y-3">
          <div className="flex items-center gap-2 text-accent-cyan font-semibold text-sm">
            <Target className="w-4 h-4" /> Career Interests
          </div>
          {profile.careerInterests && profile.careerInterests.length > 0 ? (
            <ul className="list-disc list-inside text-xs text-text-secondary space-y-1">
              {profile.careerInterests.map((int, i) => (
                <li key={i}>{int}</li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-text-muted">No interests selected.</p>
          )}
        </div>

        {/* Goals */}
        <div className="p-4 rounded-2xl bg-surface border border-border space-y-3">
          <div className="flex items-center gap-2 text-accent-gold font-semibold text-sm">
            <Sliders className="w-4 h-4" /> Career Goals
          </div>
          {profile.careerGoals && profile.careerGoals.length > 0 ? (
            <ul className="list-disc list-inside text-xs text-text-secondary space-y-1">
              {profile.careerGoals.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-text-muted">No goals selected.</p>
          )}
        </div>
      </div>
    </div>
  );
}
