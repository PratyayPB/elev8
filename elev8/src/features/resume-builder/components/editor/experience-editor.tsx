import React from "react";
import { ExperienceEntry } from "../../types";
import { generateEntryId } from "../../utils/editor-utils";
import { Plus, Trash2, ArrowUp, ArrowDown, Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceEditorProps {
  entries: ExperienceEntry[];
  onAdd: (entry: ExperienceEntry) => void;
  onUpdate: (id: string, entry: Partial<ExperienceEntry>) => void;
  onRemove: (id: string) => void;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
}

export function ExperienceEditor({
  entries,
  onAdd,
  onUpdate,
  onRemove,
  onMoveUp,
  onMoveDown,
}: ExperienceEditorProps) {
  const handleAdd = () => {
    onAdd({
      id: generateEntryId("exp"),
      jobTitle: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
      description: "",
      achievements: [],
    });
  };

  const handleAddAchievement = (id: string, currentAchievements: string[] = []) => {
    onUpdate(id, { achievements: [...currentAchievements, ""] });
  };

  const handleUpdateAchievement = (id: string, index: number, value: string, currentAchievements: string[] = []) => {
    const updated = [...currentAchievements];
    updated[index] = value;
    onUpdate(id, { achievements: updated });
  };

  const handleRemoveAchievement = (id: string, index: number, currentAchievements: string[] = []) => {
    const updated = currentAchievements.filter((_, i) => i !== index);
    onUpdate(id, { achievements: updated });
  };

  return (
    <div className="space-y-6">
      {entries.length === 0 ? (
        <div className="text-center p-8 border border-dashed border-border rounded-2xl bg-surface-muted/30">
          <Briefcase className="h-8 w-8 text-text-muted mx-auto mb-2" />
          <p className="text-sm text-text-secondary">No experience added yet.</p>
          <button
            type="button"
            onClick={handleAdd}
            className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-muted hover:bg-border-subtle text-text-primary text-xs font-semibold border border-border transition-all"
          >
            <Plus className="h-3.5 w-3.5" />
            Add Experience
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
                  <Briefcase className="h-3.5 w-3.5" />
                  Work Experience #{index + 1}
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
                {/* Job Title */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-primary">
                    Job Title
                  </label>
                  <input
                    type="text"
                    value={entry.jobTitle || ""}
                    onChange={(e) => onUpdate(entry.id, { jobTitle: e.target.value })}
                    placeholder="e.g. Senior Software Engineer"
                    className="w-full px-4 py-2 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
                  />
                </div>

                {/* Company */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-primary">
                    Company / Employer
                  </label>
                  <input
                    type="text"
                    value={entry.company || ""}
                    onChange={(e) => onUpdate(entry.id, { company: e.target.value })}
                    placeholder="e.g. Google"
                    className="w-full px-4 py-2 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
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
                    value={entry.location || ""}
                    onChange={(e) => onUpdate(entry.id, { location: e.target.value })}
                    placeholder="e.g. Mountain View, CA"
                    className="w-full px-4 py-2 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
                  />
                </div>

                {/* Dates */}
                <div className="space-y-4">
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
                        value={entry.currentlyWorking ? "Present" : entry.endDate || ""}
                        disabled={entry.currentlyWorking}
                        onChange={(e) => onUpdate(entry.id, { endDate: e.target.value })}
                        placeholder="MM/YYYY or YYYY"
                        className="w-full px-3 py-2 rounded-xl bg-surface-muted border border-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`current-${entry.id}`}
                      checked={entry.currentlyWorking || false}
                      onChange={(e) => onUpdate(entry.id, { 
                        currentlyWorking: e.target.checked,
                        ...(e.target.checked && { endDate: "Present" })
                      })}
                      className="rounded border-border text-text-primary focus:ring-text-primary"
                    />
                    <label htmlFor={`current-${entry.id}`} className="text-xs text-text-secondary select-none">
                      I am currently working in this role
                    </label>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-semibold text-text-primary">
                    Role Description
                  </label>
                  <textarea
                    value={entry.description || ""}
                    onChange={(e) => onUpdate(entry.id, { description: e.target.value })}
                    placeholder="Briefly describe your role and primary responsibilities..."
                    rows={3}
                    className="w-full px-4 py-2 rounded-xl bg-surface-muted border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors resize-y"
                  />
                </div>

                {/* Achievements List */}
                <div className="space-y-2 sm:col-span-2 border-t border-border-subtle pt-4 mt-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-text-primary">
                      Achievements / Impact Bullets
                    </label>
                    <button
                      type="button"
                      onClick={() => handleAddAchievement(entry.id, entry.achievements)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-muted hover:bg-border-subtle text-text-primary text-[10px] font-semibold border border-border transition-all"
                    >
                      <Plus className="h-3 w-3" />
                      Add Bullet
                    </button>
                  </div>

                  {(!entry.achievements || entry.achievements.length === 0) ? (
                    <p className="text-xs text-text-muted italic">No achievement bullet points added yet.</p>
                  ) : (
                    <div className="space-y-2">
                      {entry.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex gap-2 items-center">
                          <input
                            type="text"
                            value={ach}
                            onChange={(e) => handleUpdateAchievement(entry.id, aIdx, e.target.value, entry.achievements)}
                            placeholder="e.g. Led a team of 4 to design and deploy Next.js analytics dashboard, improving load time by 35%."
                            className="flex-1 px-3 py-1.5 rounded-xl bg-surface-muted border border-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveAchievement(entry.id, aIdx, entry.achievements)}
                            className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                            title="Remove Bullet"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
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
            Add Experience Entry
          </button>
        </div>
      )}
    </div>
  );
}
