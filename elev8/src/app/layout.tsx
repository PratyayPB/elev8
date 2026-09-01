import type { Metadata } from "next";
import { ClerkAuthProvider } from "@/providers/clerk-provider";
import { ThemeProvider } from "@/providers";
import { Toaster } from "@/components/ui/sonner";
import { Albert_Sans, Geist } from "next/font/google";
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Elev8 - AI-Powered Career Development Platform",
  description: "Accelerate your career with AI guidance, roadmaps, resume scoring, and mock interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkAuthProvider>
      <html
        lang="en"
        suppressHydrationWarning
        className={`scroll-smooth ${geistSans.variable} ${albertSans.variable}`}
      >
        <body className="font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster position="top-right" richColors closeButton />
          </ThemeProvider>
        </body>
      </html>
    </ClerkAuthProvider>
  );
}
