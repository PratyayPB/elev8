"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 flex justify-center">
      <div className="w-full max-w-[900px] glass-pill rounded-full px-6 py-3 flex items-center justify-between shadow-sm transition-all duration-300">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-black">Elev8</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#dashboard"
            className="text-sm font-medium text-[#605F5F] hover:text-black transition-colors"
          >
            Dashboard
          </a>
          <a
            href="#features"
            className="text-sm font-medium text-[#605F5F] hover:text-black transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-[#605F5F] hover:text-black transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-[#605F5F] hover:text-black transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/sign-in"
            className="text-sm font-medium text-[#605F5F] hover:text-black transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-all shadow-sm"
          >
            Get Started
          </Link>
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
          <a
            href="#dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#1A1A1A] py-2 border-b border-[#E6E6E6]"
          >
            Dashboard
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#1A1A1A] py-2 border-b border-[#E6E6E6]"
          >
            Features
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#1A1A1A] py-2 border-b border-[#E6E6E6]"
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#1A1A1A] py-2 border-b border-[#E6E6E6]"
          >
            FAQ
          </a>
          <div className="flex flex-col gap-3 pt-2">
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
          </div>
        </div>
      )}
    </header>
  );
}
