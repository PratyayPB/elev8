import { Header, Footer, ChatButton, ForceLightTheme } from "@/components/landing";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div 
      className="min-h-screen light bg-background text-foreground flex flex-col selection:bg-[#84E6F6] selection:text-black"
      data-theme="light"
    >
      <ForceLightTheme />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ChatButton />
    </div>
  );
}
