import React from "react";
import { SkillEntry } from "../../types";
import { generateEntryId } from "../../utils/editor-utils";
import { Plus, Trash2, ArrowUp, ArrowDown, Sparkles } from "lucide-react";

interface SkillsEditorProps {
  entries: SkillEntry[];
  onAdd: (entry: SkillEntry) => void;
  onUpdate: (id: string, entry: Partial<SkillEntry>) => void;
  onRemove: (id: string) => void;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
}

export function SkillsEditor({
  entries,
  onAdd,
  onUpdate,
  onRemove,
  onMoveUp,
  onMoveDown,
}: SkillsEditorProps) {
  const handleAdd = () => {
    onAdd({
      id: generateEntryId("skill"),
      name: "",
      category: "",
      proficiency: "",
    });
  };

  return (
    <div className="space-y-6">
      {entries.length === 0 ? (
        <div className="text-center p-8 border border-dashed border-border rounded-2xl bg-surface-muted/30">
          <Sparkles className="h-8 w-8 text-text-muted mx-auto mb-2" />
          <p className="text-sm text-text-secondary">No skills added yet.</p>
          <button
            type="button"
            onClick={handleAdd}
            className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-muted hover:bg-border-subtle text-text-primary text-xs font-semibold border border-border transition-all"
          >
            <Plus className="h-3.5 w-3.5" />
            Add Skill
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="hidden sm:grid grid-cols-12 gap-4 px-4 text-xs font-bold text-text-secondary">
            <div className="col-span-5">Skill Name</div>
            <div className="col-span-4">Category</div>
            <div className="col-span-3">Action</div>
          </div>

          <div className="space-y-3">
            {entries.map((entry, index) => (
              <div
                key={entry.id}
                className="flex flex-col sm:grid sm:grid-cols-12 gap-3 p-4 rounded-xl border border-border bg-dashboard-card items-center"
              >
                {/* Name */}
                <div className="w-full sm:col-span-5 space-y-1 sm:space-y-0">
                  <span className="sm:hidden text-[10px] font-bold text-text-secondary">Skill Name</span>
                  <input
                    type="text"
                    value={entry.name || ""}
                    onChange={(e) => onUpdate(entry.id, { name: e.target.value })}
                    placeholder="e.g. React"
                    className="w-full px-3 py-2 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
                  />
                </div>

                {/* Category */}
                <div className="w-full sm:col-span-4 space-y-1 sm:space-y-0">
                  <span className="sm:hidden text-[10px] font-bold text-text-secondary">Category</span>
                  <input
                    type="text"
                    value={entry.category || ""}
                    onChange={(e) => onUpdate(entry.id, { category: e.target.value })}
                    placeholder="e.g. Frontend"
                    className="w-full px-3 py-2 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
                  />
                </div>

                {/* Actions */}
                <div className="w-full sm:col-span-3 flex items-center justify-between sm:justify-end gap-1.5 pt-2 sm:pt-0 border-t border-border-subtle sm:border-t-0">
                  <span className="sm:hidden text-[10px] font-bold text-text-secondary">Reorder & Delete</span>
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
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="w-full flex items-center justify-center gap-2 p-3 border-2 border-dashed border-border rounded-2xl hover:border-text-primary/20 hover:bg-surface-muted/50 transition-all text-sm font-semibold text-text-primary"
          >
            <Plus className="h-4 w-4" />
            Add Skill
          </button>
        </div>
      )}
    </div>
  );
}
