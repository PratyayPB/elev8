"use client";

import React, { useState } from "react";
import { POPULAR_ROADMAP_ROLES } from "../../constants/roadmap-roles";
import { Search, Briefcase } from "lucide-react";

interface RoleSelectorProps {
  value: string;
  onChange: (role: string) => void;
  error?: string;
}

export function RoleSelector({ value, onChange, error }: RoleSelectorProps) {
  const [query, setQuery] = useState("");

  const filteredRoles = POPULAR_ROADMAP_ROLES.filter((role) =>
    role.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-display font-semibold text-text-primary mb-1">
          Target Role <span className="text-rose-500">*</span>
        </label>
        <p className="text-xs font-sans text-text-secondary mb-3">
          Select or type the exact job role you are aiming for.
        </p>

        {/* Input field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
              setQuery(e.target.value);
            }}
            placeholder="e.g. Full Stack Developer, AI Engineer..."
            className={`w-full pl-10 pr-4 py-3 bg-surface-muted border rounded-xl text-sm font-sans text-text-primary placeholder-text-muted focus:outline-none transition-all ${
              error
                ? "border-rose-300 focus:border-rose-500"
                : "border-border-subtle focus:border-text-primary"
            }`}
          />
        </div>
        {error && <p className="text-xs font-sans text-rose-500 mt-1.5">{error}</p>}
      </div>

      {/* Suggested roles pill tags */}
      <div>
        <span className="text-xs font-display font-semibold text-text-secondary block mb-2">
          Popular Roles
        </span>
        <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto pr-1">
          {filteredRoles.map((role) => {
            const isSelected = value.toLowerCase() === role.toLowerCase();
            return (
              <button
                key={role}
                type="button"
                onClick={() => onChange(role)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-display font-medium transition-all ${
                  isSelected
                    ? "bg-text-primary text-white dark:text-brand-primary-900 shadow-sm"
                    : "bg-surface-muted text-text-primary border border-border-subtle hover:bg-border-subtle"
                }`}
              >
                <Briefcase className="w-3 h-3" />
                {role}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
