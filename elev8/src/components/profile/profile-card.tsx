"use client";

import React from "react";
import { ProfileAvatar } from "./profile-avatar";
import { ProfileData } from "@/features/profile/types";
import { Briefcase, MapPin, Phone } from "lucide-react";

interface ProfileCardProps {
  profile: ProfileData | null;
  className?: string;
}

export function ProfileCard({ profile, className = "" }: ProfileCardProps) {
  if (!profile) return null;

  return (
    <div
      className={`bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius)] p-6 shadow-sm space-y-4 ${className}`}
    >
      <div className="flex items-center gap-4">
        <ProfileAvatar
          name={profile.name}
          size="lg"
        />
        <div>
          <h3 className="text-lg font-display font-semibold text-text-primary">
            {profile.name}
          </h3>
          <p className="text-sm font-sans text-text-secondary">
            {profile.education?.highestQualification || "Elev8 Member"}
          </p>
          {profile.currentRole && (
            <div className="flex items-center gap-1.5 text-xs text-text-primary font-display font-medium mt-1">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{profile.currentRole}</span>
            </div>
          )}
        </div>
      </div>

      {(profile.country || profile.phoneNumber) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-text-secondary pt-3 border-t border-border-subtle">
          {profile.country && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-text-muted" />
              <span>{profile.country}</span>
            </div>
          )}
          {profile.phoneNumber && (
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-text-muted" />
              <span>{profile.phoneNumber}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
