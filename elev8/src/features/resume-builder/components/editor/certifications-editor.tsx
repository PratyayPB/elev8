import React from "react";
import { CertificationEntry } from "../../types";
import { generateEntryId } from "../../utils/editor-utils";
import { Plus, Trash2, ArrowUp, ArrowDown, Award, Calendar, Link as LinkIcon } from "lucide-react";

interface CertificationsEditorProps {
  entries: CertificationEntry[];
  onAdd: (entry: CertificationEntry) => void;
  onUpdate: (id: string, entry: Partial<CertificationEntry>) => void;
  onRemove: (id: string) => void;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
}

export function CertificationsEditor({
  entries,
  onAdd,
  onUpdate,
  onRemove,
  onMoveUp,
  onMoveDown,
}: CertificationsEditorProps) {
  const handleAdd = () => {
    onAdd({
      id: generateEntryId("cert"),
      name: "",
      issuingOrganization: "",
      issueDate: "",
      expiryDate: "",
      credentialUrl: "",
    });
  };

  return (
    <div className="space-y-6">
      {entries.length === 0 ? (
        <div className="text-center p-8 border border-dashed border-border rounded-2xl bg-surface-muted/30">
          <Award className="h-8 w-8 text-text-muted mx-auto mb-2" />
          <p className="text-sm text-text-secondary">No certifications added yet.</p>
          <button
            type="button"
            onClick={handleAdd}
            className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-muted hover:bg-border-subtle text-text-primary text-xs font-semibold border border-border transition-all"
          >
            <Plus className="h-3.5 w-3.5" />
            Add Certification
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {entries.map((entry, index) => (
            <div
              key={entry.id}
              className="p-5 rounded-2xl border border-border bg-dashboard-card space-y-4 relative group"
            >
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <span className="text-xs font-semibold text-text-secondary flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5" />
                  Certification #{index + 1}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => onMoveUp(entry.id)}
                    disabled={index === 0}
                    className="p-1.5 rounded-lg hover:bg-surface-muted text-text-secondary disabled:opacity-30 transition-colors"
                    title="Move Up"
                  >
                    <ArrowUp className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onMoveDown(entry.id)}
                    disabled={index === entries.length - 1}
                    className="p-1.5 rounded-lg hover:bg-surface-muted text-text-secondary disabled:opacity-30 transition-colors"
                    title="Move Down"
                  >
                    <ArrowDown className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm("Are you sure you want to delete this certification?")) {
                        onRemove(entry.id);
                      }
                    }}
                    className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                    title="Delete Entry"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-primary">
                    Certification Name
                  </label>
                  <input
                    type="text"
                    value={entry.name || ""}
                    onChange={(e) => onUpdate(entry.id, { name: e.target.value })}
                    placeholder="e.g. AWS Certified Solutions Architect"
                    className="w-full px-4 py-2 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
                  />
                </div>

                {/* Issuing Org */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-primary">
                    Issuing Organization
                  </label>
                  <input
                    type="text"
                    value={entry.issuingOrganization || ""}
                    onChange={(e) => onUpdate(entry.id, { issuingOrganization: e.target.value })}
                    placeholder="e.g. Amazon Web Services"
                    className="w-full px-4 py-2 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
                  />
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-text-primary flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-text-secondary" />
                      Issue Date
                    </label>
                    <input
                      type="text"
                      value={entry.issueDate || ""}
                      onChange={(e) => onUpdate(entry.id, { issueDate: e.target.value })}
                      placeholder="MM/YYYY or YYYY"
                      className="w-full px-3 py-2 rounded-xl bg-surface-muted border border-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-text-primary flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-text-secondary" />
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      value={entry.expiryDate || ""}
                      onChange={(e) => onUpdate(entry.id, { expiryDate: e.target.value })}
                      placeholder="MM/YYYY, YYYY, or N/A"
                      className="w-full px-3 py-2 rounded-xl bg-surface-muted border border-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
                    />
                  </div>
                </div>

                {/* URL */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
                    <LinkIcon className="w-3 h-3 text-text-secondary" />
                    Credential URL
                  </label>
                  <input
                    type="url"
                    value={entry.credentialUrl || ""}
                    onChange={(e) => onUpdate(entry.id, { credentialUrl: e.target.value })}
                    placeholder="e.g. https://credly.com/..."
                    className="w-full px-4 py-2 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAdd}
            className="w-full flex items-center justify-center gap-2 p-3 border-2 border-dashed border-border rounded-2xl hover:border-text-primary/20 hover:bg-surface-muted/50 transition-all text-sm font-semibold text-text-primary"
          >
            <Plus className="h-4 w-4" />
            Add Certification
          </button>
        </div>
      )}
    </div>
  );
}
