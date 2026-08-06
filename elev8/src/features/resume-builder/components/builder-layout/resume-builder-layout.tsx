import React from "react";

interface ResumeBuilderLayoutProps {
  sidebar: React.ReactNode;
  toolbar: React.ReactNode;
  children: React.ReactNode;
  preview: React.ReactNode;
}

export function ResumeBuilderLayout({ sidebar, toolbar, children, preview }: ResumeBuilderLayoutProps) {
  return (
    <div className="flex h-[calc(100vh-4rem)] bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r bg-white flex flex-col">
        {sidebar}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 border-b bg-white flex-shrink-0 flex items-center px-4">
          {toolbar}
        </header>
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>

      {/* Preview Panel */}
      <aside className="w-1/3 flex-shrink-0 border-l bg-gray-100 flex flex-col">
        {preview}
      </aside>
    </div>
  );
}
