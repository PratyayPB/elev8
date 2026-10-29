import React from "react";

interface EditorSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function EditorSection({ id, title, children }: EditorSectionProps) {
  return (
    <section
      id={id}
      className="h-full scroll-mt-24 p-6 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card shadow-sm flex flex-col min-h-0 overflow-hidden"
    >
      <div className="border-b border-border-subtle pb-3 shrink-0">
        <h2 className="text-lg font-display font-bold text-text-primary">{title}</h2>
      </div>
      <div className="flex-1 overflow-y-auto pr-2 pt-2 min-h-0 [scrollbar-gutter:stable]">
        {children}
      </div>
    </section>
  );
}
