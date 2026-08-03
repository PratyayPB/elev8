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
        <label className="block text-sm font-semibold text-gray-900 mb-1">
          Target Role <span className="text-red-500">*</span>
        </label>
        <p className="text-xs text-gray-500 mb-3">
          Select or type the exact job role you are aiming for.
        </p>

        {/* Input field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
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
            className={`w-full pl-10 pr-4 py-3 bg-white border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${
              error
                ? "border-red-300 focus:ring-red-200"
                : "border-gray-200 focus:ring-black/10 focus:border-black"
            }`}
          />
        </div>
        {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
      </div>

      {/* Suggested roles pill tags */}
      <div>
        <span className="text-xs font-medium text-gray-400 block mb-2">
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
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-black text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
