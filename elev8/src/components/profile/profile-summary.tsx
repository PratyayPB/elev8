"use client";

import React from "react";
import { ProfileData } from "@/features/profile/types";
import { ProfileAvatar } from "./profile-avatar";
import { Briefcase, GraduationCap, Target, Sparkles, Sliders, MapPin, Clock, Phone } from "lucide-react";
import { getCountryName } from "@/lib/data/countries";

interface ProfileSummaryProps {
  profile: ProfileData | null;
}

export function ProfileSummary({ profile }: ProfileSummaryProps) {
  if (!profile) return null;

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="flex items-center gap-4 p-5 rounded-[var(--card-radius)] bg-dashboard-card border border-dashboard-cardBorder shadow-sm">
        <ProfileAvatar name={profile.name} size="xl" />
        <div>
          <h3 className="text-xl font-display font-bold text-text-primary">{profile.name}</h3>
          <p className="text-sm font-sans text-text-secondary">{profile.currentRole}</p>
          <div className="flex flex-wrap gap-3 text-xs font-sans text-text-secondary mt-2">
            {profile.country && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-text-muted" /> {getCountryName(profile.country)}
              </span>
            )}
            {profile.phoneNumber && (
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-text-muted" /> {profile.phoneNumber}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-text-muted" /> {profile.weeklyLearningHours} hrs/week
            </span>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Education */}
        <div className="p-5 rounded-[var(--card-radius)] bg-dashboard-card border border-dashboard-cardBorder space-y-2">
          <div className="flex items-center gap-2 text-text-primary font-display font-semibold text-sm">
            <GraduationCap className="w-4 h-4" /> Academic Background
          </div>
          <p className="text-sm font-sans text-text-primary font-medium">
            {profile.education?.highestQualification || "Not specified"}{profile.education?.fieldOfStudy ? ` in ${profile.education.fieldOfStudy}` : ""}
          </p>
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-display font-medium bg-surface-muted text-text-secondary">
            {profile.currentStatus ? profile.currentStatus.replace(/_/g, " ") : "Not specified"}
          </span>
        </div>

        {/* Professional */}
        <div className="p-5 rounded-[var(--card-radius)] bg-dashboard-card border border-dashboard-cardBorder space-y-2">
          <div className="flex items-center gap-2 text-text-primary font-display font-semibold text-sm">
            <Briefcase className="w-4 h-4" /> Career Status
          </div>
          <p className="text-sm font-sans text-text-primary font-medium">{profile.currentRole}</p>
          <p className="text-xs font-sans text-text-secondary">
            {profile.yearsOfExperience} {profile.yearsOfExperience === 1 ? "year" : "years"} experience
          </p>
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-display font-medium bg-surface-muted text-text-secondary">
            {profile.targetCompanyType ? profile.targetCompanyType.replace(/_/g, " ") : "General"}
          </span>
        </div>
      </div>

      {/* Skills */}
      <div className="p-5 rounded-[var(--card-radius)] bg-dashboard-card border border-dashboard-cardBorder space-y-3">
        <div className="flex items-center gap-2 text-text-primary font-display font-semibold text-sm">
          <Sparkles className="w-4 h-4" /> Current Skills
        </div>
        {profile.skills && profile.skills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((sk, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-sans font-medium bg-surface-muted text-text-primary"
              >
                <span>{sk.name}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-dashboard-metricHighlight text-black font-display font-semibold">
                  {sk.proficiency}
                </span>
              </span>
            ))}
          </div>
        ) : (
          <p className="text-xs font-sans text-text-secondary italic">No skills listed yet.</p>
        )}
      </div>

      {/* Goals & Desired Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Desired Skills */}
        <div className="p-5 rounded-[var(--card-radius)] bg-dashboard-card border border-dashboard-cardBorder space-y-3">
          <div className="flex items-center gap-2 text-text-primary font-display font-semibold text-sm">
            <Target className="w-4 h-4" /> Desired Skills
          </div>
          {profile.desiredSkills && profile.desiredSkills.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {profile.desiredSkills.map((ds, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs font-sans font-medium border border-border-subtle text-text-secondary"
                >
                  {ds}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-xs font-sans text-text-secondary italic">No desired skills listed.</p>
          )}
        </div>

        {/* Goals */}
        <div className="p-5 rounded-[var(--card-radius)] bg-dashboard-card border border-dashboard-cardBorder space-y-3">
          <div className="flex items-center gap-2 text-text-primary font-display font-semibold text-sm">
            <Sliders className="w-4 h-4" /> Career Goals
          </div>
          <p className="text-sm font-sans font-medium text-text-primary">
            {profile.careerGoals?.primaryGoal ? profile.careerGoals.primaryGoal.replace(/_/g, " ") : "Not specified"}
          </p>
          {profile.careerGoals?.targetRole && (
            <p className="text-xs font-sans text-text-secondary">
              Target: {profile.careerGoals.targetRole}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
