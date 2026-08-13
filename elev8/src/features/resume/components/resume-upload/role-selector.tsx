"use client";

import { POPULAR_RESUME_ROLES } from "../../constants";
import { Briefcase } from "lucide-react";

interface RoleSelectorProps {
  value: string;
  onChange: (role: string) => void;
}

export function RoleSelector({ value, onChange }: RoleSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-display font-bold text-text-primary flex items-center gap-2">
        <Briefcase className="w-4 h-4 text-text-primary" />
        Target Role
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g. Frontend Developer, Senior Fullstack Engineer..."
          list="popular-roles-list"
          className="w-full px-4 py-2.5 bg-white border border-border-subtle rounded-xl text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-text-primary/20 focus:border-text-primary transition-all shadow-sm font-sans"
        />
        <datalist id="popular-roles-list">
          {POPULAR_RESUME_ROLES.map((role) => (
            <option key={role} value={role} />
          ))}
        </datalist>
      </div>
      <p className="text-xs font-sans text-text-secondary">
        Type a custom role or choose from popular suggestions.
      </p>
    </div>
  );
}
