import { Header, Footer, ChatButton } from "@/components/landing";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div 
      className="min-h-screen text-foreground flex flex-col selection:bg-[#84E6F6] selection:text-black"
    >
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ChatButton />
    </div>
  );
}
