"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="bg-[#F4F2EE] border-t border-[#E6E6E6] py-24 px-4 sm:px-6">
      <div className="max-w-xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#999999]">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg text-[#605F5F]">
            Have questions about enterprise plans or platform features? Drop us a note.
          </p>
        </div>

        <div className="bg-white border border-[#E6E6E6] rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-3 animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-[#84E6F6] text-black flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-black">Message Sent!</h3>
              <p className="text-sm text-[#605F5F]">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#605F5F] uppercase">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[#F4F2EE] border border-[#E6E6E6] rounded-xl px-4 py-3 text-sm text-black placeholder-[#999999] focus:outline-none focus:border-black transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#605F5F] uppercase">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#F4F2EE] border border-[#E6E6E6] rounded-xl px-4 py-3 text-sm text-black placeholder-[#999999] focus:outline-none focus:border-black transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#605F5F] uppercase">Subject</label>
                <input
                  required
                  type="text"
                  placeholder="Inquiry about..."
                  className="w-full bg-[#F4F2EE] border border-[#E6E6E6] rounded-xl px-4 py-3 text-sm text-black placeholder-[#999999] focus:outline-none focus:border-black transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#605F5F] uppercase">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full bg-[#F4F2EE] border border-[#E6E6E6] rounded-xl px-4 py-3 text-sm text-black placeholder-[#999999] focus:outline-none focus:border-black transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-3.5 rounded-full text-sm hover:bg-black/90 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Submit Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
