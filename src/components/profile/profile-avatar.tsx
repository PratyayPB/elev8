"use client";

import React from "react";
import Image from "next/image";
import { User } from "lucide-react";

interface ProfileAvatarProps {
  src?: string | null;
  name?: string | null;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function ProfileAvatar({ src, name, size = "md", className = "" }: ProfileAvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-16 h-16 text-base",
    xl: "w-24 h-24 text-xl",
  }[size];

  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "";

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden bg-surface-muted border border-border shadow-sm flex-shrink-0 ${sizeClasses} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={name || "User profile picture"}
          fill
          sizes="96px"
          className="object-cover"
        />
      ) : initials ? (
        <span className="font-semibold text-text-primary">{initials}</span>
      ) : (
        <User className="w-1/2 h-1/2 text-text-muted" />
      )}
    </div>
  );
}
