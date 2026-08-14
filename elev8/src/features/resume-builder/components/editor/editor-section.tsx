import React from "react";

interface EditorSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function EditorSection({ id, title, children }: EditorSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 p-6 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card shadow-sm space-y-4">
      <div className="border-b border-border-subtle pb-2">
        <h2 className="text-lg font-display font-bold text-text-primary">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
}
