"use client";

import React from "react";
import { ProfileAvatar } from "./profile-avatar";
import { UserProfileData } from "@/features/profile/types";
import { Briefcase, MapPin, GraduationCap } from "lucide-react";

interface ProfileCardProps {
  profile: Partial<UserProfileData> | null;
  className?: string;
}

export function ProfileCard({ profile, className = "" }: ProfileCardProps) {
  if (!profile) return null;

  return (
    <div
      className={`bg-surface border border-border rounded-2xl p-6 shadow-sm space-y-4 ${className}`}
    >
      <div className="flex items-center gap-4">
        <ProfileAvatar
          src={profile.profilePicture}
          name={profile.fullName || profile.email}
          size="lg"
        />
        <div>
          <h3 className="text-lg font-semibold text-text-primary">
            {profile.fullName || "Elev8 Member"}
          </h3>
          <p className="text-sm text-text-secondary">{profile.email || "No email provided"}</p>
          {profile.currentRole && (
            <div className="flex items-center gap-1.5 text-xs text-accent-cyan mt-1">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{profile.currentRole}</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-text-secondary pt-2 border-t border-border">
        {profile.country && (
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-text-muted" />
            <span>{profile.country}</span>
          </div>
        )}
        {profile.institution && (
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-text-muted" />
            <span>{profile.institution}</span>
          </div>
        )}
      </div>
    </div>
  );
}
