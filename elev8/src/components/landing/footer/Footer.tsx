"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Check, ImageIcon, Linkedin, Instagram, Youtube, Github } from "lucide-react";

const footerLinks = [
  {
    category: "COMPANY",
    links: [
      { label: "About", href: "#" },
      { label: "Journal", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Newsroom", href: "#" },
      { label: "Contact", href: "#" },
    ]
  },
  {
    category: "PLATFORM",
    links: [
      { label: "Pricing", href: "#" },
      { label: "Prototype tests", href: "#" },
      { label: "Live interviews", href: "#", badge: "NEW" },
      { label: "Session replay", href: "#" },
      { label: "Surveys", href: "#" },
    ]
  },
  {
    category: "RESOURCES",
    links: [
      { label: "Field guides", href: "#" },
      { label: "Research library", href: "#" },
      { label: "Events", href: "#" },
      { label: "Templates", href: "#" },
      { label: "Help center", href: "#" },
    ]
  },
  {
    category: "USE CASES",
    links: [
      { label: "Validate concepts", href: "#" },
      { label: "Test navigation", href: "#" },
      { label: "Measure sentiment", href: "#" },
      { label: "Benchmark journeys", href: "#" },
    ]
  }
];

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-[#0B0C09] text-white pt-16 md:pt-24 pb-8 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Side: Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerLinks.map((column, idx) => (
              <div key={idx} className="flex flex-col items-start">
                <span className="inline-flex px-2.5 py-1 rounded-md bg-white/10 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/60 mb-6">
                  {column.category}
                </span>
                <ul className="space-y-4">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="flex items-center">
                      <Link 
                        href={link.href}
                        className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                      {link.badge && (
                        <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded bg-white text-black text-[9px] font-bold uppercase tracking-wider">
                          {link.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Side: Newsletter & Social */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Newsletter Card */}
            <div className="bg-[#111211] border border-white/10 rounded-[1.5rem] p-6 md:p-8 flex flex-col">
              
              {/* Abstract Graphic */}
              <div className="w-full h-32 md:h-40 bg-white/5 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center border border-white/5">
                <img 
                  src="/images/landing/bg-gradient.png" 
                  alt="Newsletter graphic" 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>

              <h4 className="text-lg font-medium text-white mb-2">
                Sign up for the field guide
              </h4>
              <p className="text-sm text-white/60 mb-6 leading-relaxed">
                Research patterns and testing rituals from real product teams. Two issues a month, no noise.
              </p>

              <form onSubmit={handleSubscribe} className="flex gap-3">
                <input
                  required
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border border-white/20 rounded-full px-5 py-2.5 text-sm font-medium text-white placeholder-white/40 focus:outline-none focus:border-white/50 flex-grow min-w-0 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-white text-black rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-white/90 transition-all shrink-0 flex items-center justify-center min-w-[100px]"
                >
                  {subscribed ? "Done!" : "Subscribe"}
                </button>
              </form>
            </div>

            {/* Social Block */}
            <div className="bg-[#111211] border border-white/10 rounded-2xl p-5 flex justify-between items-center">
              <span className="text-sm font-semibold text-white">
                Follow us
              </span>
              <div className="flex gap-5">
                <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-[18px] h-[18px]" strokeWidth={2} />
                </a>
                <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="w-[18px] h-[18px]" strokeWidth={2} />
                </a>
                <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="YouTube">
                  <Youtube className="w-[20px] h-[20px]" strokeWidth={2} />
                </a>
                <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="GitHub">
                  <Github className="w-[18px] h-[18px]" strokeWidth={2} />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Massive Text */}
        <div className="w-full mt-16 md:mt-24 relative z-0 flex justify-center translate-y-4 md:translate-y-8 overflow-hidden">
          <h1 className="text-[20vw] sm:text-[18vw] md:text-[15vw] lg:text-[12vw] xl:text-[11rem] font-display font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/90 via-white/40 to-[#0B0C09] select-none">
            ELEVATE
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] sm:text-[11px] font-bold text-white/50 uppercase tracking-widest">
            © 2026 ELEV8 RESEARCH
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#" className="text-[10px] sm:text-[11px] font-bold text-white/50 hover:text-white uppercase tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-[10px] sm:text-[11px] font-bold text-white/50 hover:text-white uppercase tracking-widest transition-colors">Terms</a>
            <a href="#" className="text-[10px] sm:text-[11px] font-bold text-white/50 hover:text-white uppercase tracking-widest transition-colors">Security</a>
            <a href="#" className="text-[10px] sm:text-[11px] font-bold text-white/50 hover:text-white uppercase tracking-widest transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
