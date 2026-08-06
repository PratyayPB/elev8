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
      <label className="block text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
        <Briefcase className="w-4 h-4 text-blue-600" />
        Target Role
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g. Frontend Developer, Senior Fullstack Engineer..."
          list="popular-roles-list"
          className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
        />
        <datalist id="popular-roles-list">
          {POPULAR_RESUME_ROLES.map((role) => (
            <option key={role} value={role} />
          ))}
        </datalist>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Type a custom role or choose from popular suggestions.
      </p>
    </div>
  );
}
