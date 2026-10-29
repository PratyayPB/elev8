import React, { useState } from "react";
import { InterestEntry } from "../../types";
import { generateEntryId } from "../../utils/editor-utils";
import { Plus, Trash2, ArrowUp, ArrowDown, Compass, X } from "lucide-react";

interface InterestsEditorProps {
  entries: InterestEntry[];
  onAdd: (entry: InterestEntry) => void;
  onUpdate: (id: string, entry: Partial<InterestEntry>) => void;
  onRemove: (id: string) => void;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
}

export function InterestsEditor({
  entries,
  onAdd,
  onUpdate,
  onRemove,
  onMoveUp,
  onMoveDown,
}: InterestsEditorProps) {
  const [keywordInputs, setKeywordInputs] = useState<Record<string, string>>({});

  const handleAdd = () => {
    onAdd({
      id: generateEntryId("int"),
      name: "",
      keywords: [],
    });
  };

  const handleAddKeyword = (id: string) => {
    const val = (keywordInputs[id] || "").trim();
    if (!val) return;
    const entry = entries.find((e) => e.id === id);
    const existing = entry?.keywords || [];
    if (!existing.includes(val)) {
      onUpdate(id, { keywords: [...existing, val] });
    }
    setKeywordInputs((prev) => ({ ...prev, [id]: "" }));
  };

  const handleRemoveKeyword = (id: string, keywordToRemove: string) => {
    const entry = entries.find((e) => e.id === id);
    const existing = entry?.keywords || [];
    onUpdate(id, {
      keywords: existing.filter((k) => k !== keywordToRemove),
    });
  };

  return (
    <div className="space-y-6">
      {entries.length === 0 ? (
        <div className="text-center p-8 border border-dashed border-border rounded-2xl bg-surface-muted/30">
          <Compass className="h-8 w-8 text-text-muted mx-auto mb-2" />
          <p className="text-sm text-text-secondary">No interests added yet.</p>
          <button
            type="button"
            onClick={handleAdd}
            className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-muted hover:bg-border-subtle text-text-primary text-xs font-semibold border border-border transition-all"
          >
            <Plus className="h-3.5 w-3.5" />
            Add Interest
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
                  <Compass className="h-3.5 w-3.5" />
                  Interest / Hobby #{index + 1}
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

              <div className="space-y-3">
                {/* Interest Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-primary">
                    Interest / Hobby Name
                  </label>
                  <input
                    type="text"
                    value={entry.name || ""}
                    onChange={(e) =>
                      onUpdate(entry.id, { name: e.target.value })
                    }
                    placeholder="e.g. Open Source, Autonomous Robotics, Photography"
                    className="w-full px-4 py-2 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
                  />
                </div>

                {/* Keywords Tags */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-primary">
                    Keywords / Related Sub-topics
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={keywordInputs[entry.id] || ""}
                      onChange={(e) =>
                        setKeywordInputs((prev) => ({
                          ...prev,
                          [entry.id]: e.target.value,
                        }))
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddKeyword(entry.id);
                        }
                      }}
                      placeholder="e.g. Rust, Linux kernel, Street photography (press Enter)"
                      className="flex-1 px-4 py-2 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => handleAddKeyword(entry.id)}
                      className="px-3.5 py-2 rounded-xl bg-surface-muted hover:bg-border-subtle border border-border text-xs font-semibold text-text-primary"
                    >
                      Add
                    </button>
                  </div>

                  {entry.keywords && entry.keywords.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {entry.keywords.map((kw, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-muted text-xs font-medium text-text-primary border border-border-subtle"
                        >
                          {kw}
                          <button
                            type="button"
                            onClick={() => handleRemoveKeyword(entry.id, kw)}
                            className="hover:text-red-500"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
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
            Add Interest Entry
          </button>
        </div>
      )}
    </div>
  );
}
