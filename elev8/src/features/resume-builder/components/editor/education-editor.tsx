import React from "react";
import { EducationEntry } from "../../types";
import { generateEntryId } from "../../utils/editor-utils";
import { Plus, Trash2, ArrowUp, ArrowDown, GraduationCap, Calendar, BookOpen } from "lucide-react";

interface EducationEditorProps {
  entries: EducationEntry[];
  onAdd: (entry: EducationEntry) => void;
  onUpdate: (id: string, entry: Partial<EducationEntry>) => void;
  onRemove: (id: string) => void;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
}

export function EducationEditor({
  entries,
  onAdd,
  onUpdate,
  onRemove,
  onMoveUp,
  onMoveDown,
}: EducationEditorProps) {
  const handleAdd = () => {
    onAdd({
      id: generateEntryId("edu"),
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  return (
    <div className="space-y-6">
      {entries.length === 0 ? (
        <div className="text-center p-8 border border-dashed border-border rounded-2xl bg-surface-muted/30">
          <GraduationCap className="h-8 w-8 text-text-muted mx-auto mb-2" />
          <p className="text-sm text-text-secondary">No education details added yet.</p>
          <button
            type="button"
            onClick={handleAdd}
            className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-muted hover:bg-border-subtle text-text-primary text-xs font-semibold border border-border transition-all"
          >
            <Plus className="h-3.5 w-3.5" />
            Add Education
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
                  <GraduationCap className="h-3.5 w-3.5" />
                  Education #{index + 1}
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Institution */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-primary">
                    School / Institution
                  </label>
                  <input
                    type="text"
                    value={entry.institution || ""}
                    onChange={(e) => onUpdate(entry.id, { institution: e.target.value })}
                    placeholder="e.g. Stanford University"
                    className="w-full px-4 py-2 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
                  />
                </div>

                {/* Degree */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-primary">
                    Degree / Certificate
                  </label>
                  <input
                    type="text"
                    value={entry.degree || ""}
                    onChange={(e) => onUpdate(entry.id, { degree: e.target.value })}
                    placeholder="e.g. Bachelor of Science"
                    className="w-full px-4 py-2 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
                  />
                </div>

                {/* Field of Study */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3 text-text-secondary" />
                    Field of Study
                  </label>
                  <input
                    type="text"
                    value={entry.fieldOfStudy || ""}
                    onChange={(e) => onUpdate(entry.id, { fieldOfStudy: e.target.value })}
                    placeholder="e.g. Computer Science"
                    className="w-full px-4 py-2 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
                  />
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-text-primary flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-text-secondary" />
                      Start
                    </label>
                    <input
                      type="text"
                      value={entry.startDate || ""}
                      onChange={(e) => onUpdate(entry.id, { startDate: e.target.value })}
                      placeholder="MM/YYYY or YYYY"
                      className="w-full px-3 py-2 rounded-xl bg-surface-muted border border-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-text-primary flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-text-secondary" />
                      End
                    </label>
                    <input
                      type="text"
                      value={entry.endDate || ""}
                      onChange={(e) => onUpdate(entry.id, { endDate: e.target.value })}
                      placeholder="MM/YYYY, YYYY, or Present"
                      className="w-full px-3 py-2 rounded-xl bg-surface-muted border border-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-semibold text-text-primary">
                    Description / Key Accomplishments
                  </label>
                  <textarea
                    value={entry.description || ""}
                    onChange={(e) => onUpdate(entry.id, { description: e.target.value })}
                    placeholder="GPA, honors, thesis topic, relevant coursework, etc."
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
            Add Education Entry
          </button>
        </div>
      )}
    </div>
  );
}
