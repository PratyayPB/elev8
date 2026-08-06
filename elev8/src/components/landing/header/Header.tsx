"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 flex justify-center">
      <div className="w-full max-w-[900px] glass-pill rounded-full px-6 py-3 flex items-center justify-between shadow-sm transition-all duration-300">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-medium tracking-tight text-black">Elev8</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("dashboard")}
            className="text-xs font-medium text-[#605F5F] hover:text-black transition-colors cursor-pointer"
          >
            Dashboard
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-xs font-medium text-[#605F5F] hover:text-black transition-colors cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-xs font-medium text-[#605F5F] hover:text-black transition-colors cursor-pointer"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-xs font-medium text-[#605F5F] hover:text-black transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <SignedOut>
            <Link
              href="/sign-in"
              className="text-xs font-medium text-[#605F5F] hover:text-black transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="bg-black text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-black/90 transition-all shadow-sm"
            >
              Get Started
            </Link>
          </SignedOut>
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-xs font-medium text-[#605F5F] hover:text-black transition-colors"
            >
              Dashboard
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#605F5F] hover:text-black p-1"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-[#E6E6E6] shadow-xl md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          <button
            onClick={() => scrollToSection("dashboard")}
            className="text-left text-base font-medium text-[#1A1A1A] py-2 border-b border-[#E6E6E6]"
          >
            Dashboard
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-left text-base font-medium text-[#1A1A1A] py-2 border-b border-[#E6E6E6]"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-left text-base font-medium text-[#1A1A1A] py-2 border-b border-[#E6E6E6]"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-left text-base font-medium text-[#1A1A1A] py-2 border-b border-[#E6E6E6]"
          >
            FAQ
          </button>
          <div className="flex flex-col gap-3 pt-2">
            <SignedOut>
              <Link
                href="/sign-in"
                className="w-full text-center text-sm font-medium py-2.5 border border-[#E6E6E6] rounded-full text-black"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="w-full text-center bg-black text-white text-sm font-medium py-2.5 rounded-full"
              >
                Get Started
              </Link>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center justify-between px-2">
                <Link
                  href="/dashboard"
                  className="flex-1 text-center bg-black text-white text-sm font-medium py-2.5 rounded-full mr-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
}
