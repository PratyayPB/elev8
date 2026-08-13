"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Check } from "lucide-react";

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
    <footer className="border-t border-[#E6E6E6] pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-container-max mx-auto space-y-12">
        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Product */}
          <div className="space-y-4">
            <span className="text-[11px] font-medium uppercase tracking-wider text-black block">Product</span>
            <ul className="space-y-2.5 text-xs text-[#605F5F]">
              <li><a href="#features" className="hover:text-black transition-colors">Features</a></li>
              <li><a href="#dashboard" className="hover:text-black transition-colors">Dashboard UI</a></li>
              <li><a href="#pricing" className="hover:text-black transition-colors">Pricing Plans</a></li>
              <li><Link href="/dashboard/roadmaps" className="hover:text-black transition-colors">Roadmaps</Link></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-4">
            <span className="text-[11px] font-medium uppercase tracking-wider text-black block">Company</span>
            <ul className="space-y-2.5 text-xs text-[#605F5F]">
              <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Blog &amp; Insights</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-4">
            <span className="text-[11px] font-medium uppercase tracking-wider text-black block">Support</span>
            <ul className="space-y-2.5 text-xs text-[#605F5F]">
              <li><a href="#" className="hover:text-black transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
              <li><a href="#faq" className="hover:text-black transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-black transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <span className="text-[11px] font-medium uppercase tracking-wider text-black block">Newsletter</span>
            <p className="text-xs text-[#605F5F]">
              Subscribe for the latest in AI career intelligence &amp; market hiring trends.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                required
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#F4F2EE] border border-[#E6E6E6] rounded-full px-4 py-2 text-sm text-black placeholder-[#999999] focus:outline-none focus:border-black flex-grow min-w-0"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="bg-black text-white p-2.5 rounded-full hover:bg-black/90 transition-all shrink-0"
              >
                {subscribed ? <Check className="w-4 h-4 text-[#84E6F6]" /> : <Send className="w-4 h-4" />}
              </button>
            </form>
            {subscribed && <span className="text-xs text-green-600 block">Subscribed successfully!</span>}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E6E6E6] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#999999]">
          <p>© 2026 Elev8 AI Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
