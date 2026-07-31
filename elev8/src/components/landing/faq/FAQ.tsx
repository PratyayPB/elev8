"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is my data secure and private?",
      answer: "Yes, absolutely. We use enterprise-grade AES-256 encryption for all user data, CV uploads, and interview logs. Your data is never sold or used to train public AI models without consent.",
    },
    {
      question: "Can I cancel or change my plan anytime?",
      answer: "Yes, all subscription plans are flexible and can be upgraded, downgraded, or cancelled at any time directly from your settings dashboard with zero hidden fees.",
    },
    {
      question: "How often is the career roadmap updated?",
      answer: "Your career roadmap updates dynamically in real-time as you log completed courses, skills, and certifications, or when market hiring requirements shift.",
    },
    {
      question: "Do you offer team or enterprise plans?",
      answer: "Yes! We offer tailored team packages for engineering leaders, bootcamps, and universities looking to upskill their teams. Contact our sales team for custom pricing.",
    },
    {
      question: "What underlying AI models do you use?",
      answer: "Elev8 leverages Google Gemini models via Vercel AI SDK, combined with custom-trained evaluation prompts to deliver structured JSON outputs.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#F4F2EE] border-y border-[#E6E6E6] py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#999999]">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#605F5F]">
            Everything you need to know about the Elev8 platform and AI tools.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => toggleFAQ(idx)}
                className="bg-white border border-[#E6E6E6] rounded-2xl p-6 cursor-pointer transition-all duration-200 hover:border-black/30 shadow-sm"
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-base sm:text-lg font-bold text-black">{faq.question}</h3>
                  <div className="w-8 h-8 rounded-full bg-[#F4F2EE] border border-[#E6E6E6] flex items-center justify-center shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-black" /> : <Plus className="w-4 h-4 text-black" />}
                  </div>
                </div>

                {isOpen && (
                  <p className="mt-4 text-sm sm:text-base text-[#605F5F] leading-relaxed border-t border-[#E6E6E6] pt-4 animate-in fade-in">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
