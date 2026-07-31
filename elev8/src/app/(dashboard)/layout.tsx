export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      <aside className="w-full md:w-64 p-4 border-r border-border hidden md:block">
        Sidebar Placeholder
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="p-4 border-b border-border">
          Top Navigation Placeholder
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
