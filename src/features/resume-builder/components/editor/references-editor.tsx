import React from "react";
import { ReferenceEntry } from "../../types";
import { generateEntryId } from "../../utils/editor-utils";
import { Plus, Trash2, ArrowUp, ArrowDown, Users, Quote } from "lucide-react";

interface ReferencesEditorProps {
  entries: ReferenceEntry[];
  onAdd: (entry: ReferenceEntry) => void;
  onUpdate: (id: string, entry: Partial<ReferenceEntry>) => void;
  onRemove: (id: string) => void;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
}

export function ReferencesEditor({
  entries,
  onAdd,
  onUpdate,
  onRemove,
  onMoveUp,
  onMoveDown,
}: ReferencesEditorProps) {
  const handleAdd = () => {
    onAdd({
      id: generateEntryId("ref"),
      name: "",
      reference: "",
    });
  };

  return (
    <div className="space-y-6">
      {entries.length === 0 ? (
        <div className="text-center p-8 border border-dashed border-border rounded-2xl bg-surface-muted/30">
          <Users className="h-8 w-8 text-text-muted mx-auto mb-2" />
          <p className="text-sm text-text-secondary">No references added yet.</p>
          <button
            type="button"
            onClick={handleAdd}
            className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-muted hover:bg-border-subtle text-text-primary text-xs font-semibold border border-border transition-all"
          >
            <Plus className="h-3.5 w-3.5" />
            Add Reference
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {entries.map((entry, index) => (
            <div
              key={entry.id}
              className="p-5 rounded-2xl border border-border bg-dashboard-card space-y-4 relative group"
            >
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <span className="text-xs font-semibold text-text-secondary flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" />
                  Reference #{index + 1}
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
                    onClick={() => onRemove(entry.id)}
                    className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                    title="Delete Entry"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {/* Reference Name / Relationship */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-primary">
                    Referee Name & Title
                  </label>
                  <input
                    type="text"
                    value={entry.name || ""}
                    onChange={(e) =>
                      onUpdate(entry.id, { name: e.target.value })
                    }
                    placeholder="e.g. Dr. Jane Smith, VP of Engineering at Tech Corp"
                    className="w-full px-4 py-2 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
                  />
                </div>

                {/* Reference statement / Testimonial or Available upon request */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
                    <Quote className="w-3 h-3 text-text-secondary" />
                    Reference Statement / Note
                  </label>
                  <textarea
                    value={entry.reference || ""}
                    onChange={(e) =>
                      onUpdate(entry.id, { reference: e.target.value })
                    }
                    placeholder='e.g. "Available upon request" or testimonial quote from referee...'
                    rows={3}
                    className="w-full px-4 py-2 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors resize-y"
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
            Add Reference Entry
          </button>
        </div>
      )}
    </div>
  );
}
