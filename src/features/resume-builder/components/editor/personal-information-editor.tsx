import React from "react";
import { PersonalInformation } from "../../types";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Briefcase,
  Camera,
  Twitter,
  Building,
  Flag,
} from "lucide-react";
import { TemplateSupport } from "../../constants/template-support";

interface PersonalInformationEditorProps {
  data: PersonalInformation;
  onChange: (info: Partial<PersonalInformation>) => void;
  templateSupport?: TemplateSupport;
}

export function PersonalInformationEditor({
  data,
  onChange,
  templateSupport,
}: PersonalInformationEditorProps) {
  const handleChange = (field: keyof PersonalInformation, value: string) => {
    onChange({ [field]: value });
  };

  const showField = (field: any) => {
    if (!templateSupport) return true;
    return templateSupport.personalFields.includes(field);
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

      {/* Professional Headline / Label */}
      {showField("label") && (
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-text-secondary" />
            Headline / Professional Title
          </label>
          <input
            type="text"
            value={data.label || ""}
            onChange={(e) => handleChange("label", e.target.value)}
            placeholder="e.g. Senior Full Stack Engineer"
            className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
          />
        </div>
      )}

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

      {/* Avatar / Photo URL */}
      {showField("image") && (
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5 text-text-secondary" />
            Profile Picture URL (Supported by current template)
          </label>
          <input
            type="url"
            value={data.image || ""}
            onChange={(e) => handleChange("image", e.target.value)}
            placeholder="e.g. https://example.com/avatar.jpg"
            className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
          />
        </div>
      )}

      {/* General Location / Address */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-text-secondary" />
          Location / Address
        </label>
        <input
          type="text"
          value={data.location || ""}
          onChange={(e) => handleChange("location", e.target.value)}
          placeholder="e.g. San Francisco, CA"
          className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
        />
      </div>

      {/* City */}
      {showField("city") && (
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-text-secondary" />
            City
          </label>
          <input
            type="text"
            value={data.city || ""}
            onChange={(e) => handleChange("city", e.target.value)}
            placeholder="e.g. San Francisco"
            className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
          />
        </div>
      )}

      {/* Region / State */}
      {showField("region") && (
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-text-secondary" />
            State / Region
          </label>
          <input
            type="text"
            value={data.region || ""}
            onChange={(e) => handleChange("region", e.target.value)}
            placeholder="e.g. California or CA"
            className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
          />
        </div>
      )}

      {/* Country Code */}
      {showField("countryCode") && (
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <Flag className="w-3.5 h-3.5 text-text-secondary" />
            Country Code
          </label>
          <input
            type="text"
            value={data.countryCode || ""}
            onChange={(e) => handleChange("countryCode", e.target.value)}
            placeholder="e.g. US, IN, UK"
            className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
          />
        </div>
      )}

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

      {/* Twitter / X */}
      {showField("twitter") && (
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <Twitter className="w-3.5 h-3.5 text-text-secondary" />
            Twitter / X URL
          </label>
          <input
            type="url"
            value={data.twitter || ""}
            onChange={(e) => handleChange("twitter", e.target.value)}
            placeholder="e.g. https://twitter.com/johndoe"
            className="w-full px-4 py-2.5 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
          />
        </div>
      )}

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
