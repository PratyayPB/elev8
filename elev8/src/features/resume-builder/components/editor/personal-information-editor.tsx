import React from "react";
import { PersonalInformation } from "../../types";
import { User, Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";

interface PersonalInformationEditorProps {
  data: PersonalInformation;
  onChange: (info: Partial<PersonalInformation>) => void;
}

export function PersonalInformationEditor({
  data,
  onChange,
}: PersonalInformationEditorProps) {
  const handleChange = (field: keyof PersonalInformation, value: string) => {
    onChange({ [field]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Full Name */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-text-secondary" />
          Full Name
        </label>
        <input
          type="text"
          value={data.fullName || ""}
          onChange={(e) => handleChange("fullName", e.target.value)}
          placeholder="e.g. John Doe"
          className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
        />
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
          <Mail className="w-3.5 h-3.5 text-text-secondary" />
          Email Address
        </label>
        <input
          type="email"
          value={data.email || ""}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="e.g. john.doe@example.com"
          className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
        />
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5 text-text-secondary" />
          Phone Number
        </label>
        <input
          type="tel"
          value={data.phone || ""}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="e.g. +1 555-0199"
          className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
        />
      </div>

      {/* Location */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-text-secondary" />
          Location
        </label>
        <input
          type="text"
          value={data.location || ""}
          onChange={(e) => handleChange("location", e.target.value)}
          placeholder="e.g. New York, NY"
          className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
        />
      </div>

      {/* LinkedIn */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
          <Linkedin className="w-3.5 h-3.5 text-text-secondary" />
          LinkedIn URL
        </label>
        <input
          type="url"
          value={data.linkedin || ""}
          onChange={(e) => handleChange("linkedin", e.target.value)}
          placeholder="e.g. https://linkedin.com/in/johndoe"
          className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
        />
      </div>

      {/* GitHub */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
          <Github className="w-3.5 h-3.5 text-text-secondary" />
          GitHub URL
        </label>
        <input
          type="url"
          value={data.github || ""}
          onChange={(e) => handleChange("github", e.target.value)}
          placeholder="e.g. https://github.com/johndoe"
          className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
        />
      </div>

      {/* Portfolio */}
      <div className="space-y-1.5 md:col-span-2">
        <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-text-secondary" />
          Portfolio URL
        </label>
        <input
          type="url"
          value={data.portfolio || ""}
          onChange={(e) => handleChange("portfolio", e.target.value)}
          placeholder="e.g. https://johndoe.dev"
          className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
        />
      </div>
    </div>
  );
}
