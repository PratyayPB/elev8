"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does Elev8 AI career guidance work?",
    answer: "Our AI analyzes your skills, experience, and career goals to generate personalized roadmaps, recommend roles, and identify skill gaps you need to fill to reach your targets."
  },
  {
    question: "Can I integrate it with my LinkedIn profile?",
    answer: "Yes, you can easily import your LinkedIn profile data to jumpstart your Elev8 profile, allowing our AI to instantly begin tailoring recommendations for you."
  },
  {
    question: "What is the Resume Scoring feature?",
    answer: "Our Resume Scorer uses the same ATS (Applicant Tracking System) logic as major companies. It analyzes your resume against target job descriptions and provides a score with specific, actionable feedback to improve it."
  },
  {
    question: "Are the mock interviews industry-specific?",
    answer: "Absolutely. When you start a mock interview, you can select your target role, industry, and experience level. The AI will generate tailored questions and evaluate your responses accordingly."
  },
  {
    question: "Is there a free tier available?",
    answer: "Yes, our Starter plan offers essential tools including 1 resume analysis per month and basic roadmaps completely free of charge."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8" id="faq">
      <div className="max-w-container-max mx-auto bg-[#F0ECE6] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-border-subtle/60 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-5">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-text-primary mb-4">
              Frequently Asked Questions.
            </h2>
            <p className="text-text-secondary text-base mb-8">
              Find answers to common questions about Elev8&apos;s AI tools, pricing, and how we can accelerate your career.
            </p>
            <button className="hidden lg:inline-flex items-center justify-center rounded-full border border-border-subtle bg-white px-5 py-2 text-xs font-medium text-text-primary hover:bg-surface-muted transition-colors">
              Contact Support
            </button>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="border-b border-border-subtle pb-4 last:border-0"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex justify-between items-center text-left py-2 group"
                  >
                    <span className="font-medium text-sm text-text-primary group-hover:text-black transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-text-secondary transition-transform duration-300 ${
                        openIndex === idx ? "rotate-180 text-text-primary" : ""
                      }`} 
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="py-4 text-text-secondary text-xs leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            
            <div className="mt-8 lg:hidden">
              <button className="w-full inline-flex justify-center items-center rounded-full border border-border-subtle bg-white px-6 py-2.5 text-sm font-medium text-text-primary hover:bg-surface-muted transition-colors">
                Contact Support
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
