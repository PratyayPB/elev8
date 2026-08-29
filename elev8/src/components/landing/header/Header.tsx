"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { RandomLetterSwap } from "@/components/ui/random-letter-swap";

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
    <header className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 flex justify-center items-center font-sans">
      <div className="w-full max-w-[700px] bg-white rounded-full px-4 py-2.5 flex items-center justify-between shadow-sm transition-all duration-300">
        <Link href="/" className="flex items-center gap-2.5 pl-1">
          <Image
            src="/icons/icon.png"
            alt="Grovia Icon"
            width={80}
            height={50}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 ml-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-[16px] font-medium text-black cursor-pointer"
          >
            <RandomLetterSwap
              label="About"
              staggerDuration={0.025}
              transition={{ duration: 0.5, type: "spring", stiffness: 280, damping: 18 }}
            />
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-[16px] font-medium text-black cursor-pointer"
          >
            <RandomLetterSwap
              label="Features"
              staggerDuration={0.025}
              transition={{ duration: 0.5, type: "spring", stiffness: 280, damping: 18 }}
            />
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-[16px] font-medium text-black cursor-pointer"
          >
            <RandomLetterSwap
              label="Pricing"
              staggerDuration={0.025}
              transition={{ duration: 0.5, type: "spring", stiffness: 280, damping: 18 }}
            />
          </button>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <SignedOut>
            <Link
              href="/sign-in"
              className="flex items-center gap-3 bg-black text-white pl-5 pr-1.5 py-1.5 rounded-full text-[15px] font-medium hover:bg-black/90 dark:hover:bg-brand-secondary-200 transition-all group"
            >
              Get Started
              <div className="bg-white text-black rounded-full p-1.5 group-hover:translate-x-0.5 transition-transform flex items-center justify-center">
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </div>
            </Link>
          </SignedOut>
          <SignedIn>
            <Link
              href="/dashboard"
              className="flex items-center gap-3 bg-black text-white pl-5 pr-1.5 py-1.5 rounded-full text-[15px] font-medium hover:bg-black/90 dark:hover:bg-brand-secondary-200 transition-all group"
            >
              Dashboard
              <div className="bg-white text-black rounded-full p-1.5 group-hover:translate-x-0.5 transition-transform flex items-center justify-center">
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </div>
            </Link>
          </SignedIn>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black hover:opacity-70 p-1"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Profile Icon in the top right corner of the viewport */}
      <div className="fixed top-6 right-4 sm:right-8 z-50 hidden sm:flex items-center">
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                userButtonAvatarBox: "w-11 h-11",
                avatarBox: "w-11 h-11",
              },
            }}
          />
        </SignedIn>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-[#E6E6E6] shadow-xl md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          <button
            onClick={() => scrollToSection("about")}
            className="text-left text-base font-medium text-black py-2 border-b border-[#E6E6E6]"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-left text-base font-medium text-black py-2 border-b border-[#E6E6E6]"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-left text-base font-medium text-black py-2 border-b border-[#E6E6E6]"
          >
            Pricing
          </button>
          <div className="flex flex-col gap-3 pt-2">
            <SignedOut>
              <Link
                href="/sign-in"
                className="flex items-center justify-center gap-2 w-full bg-black text-white text-sm font-medium py-3 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
                <div className="bg-white text-black rounded-full p-1">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </SignedOut>
            <SignedIn>
              <Link
                href="/dashboard"
                className="flex items-center justify-center gap-2 w-full bg-black text-white text-sm font-medium py-3 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
                <div className="bg-white text-black rounded-full p-1">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
              <div className="flex items-center justify-between px-2 pt-2 border-t border-[#E6E6E6]">
                <span className="text-sm font-medium text-neutral-600">
                  Account
                </span>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-11 h-11",
                      avatarBox: "w-11 h-11",
                    },
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
}
