"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";
import { RandomLetterSwap } from "@/components/ui/random-letter-swap";

const faqCategories = [
  {
    id: "general",
    label: "General",
    questions: [
      {
        q: "How does Elev8 AI career guidance work?",
        a: "Our AI analyzes your skills, experience, and career goals to generate personalized roadmaps, recommend roles, and identify skill gaps you need to fill to reach your targets.",
      },
      {
        q: "Can I integrate it with my LinkedIn profile?",
        a: "Yes, you can easily import your LinkedIn profile data to jumpstart your Elev8 profile, allowing our AI to instantly begin tailoring recommendations for you.",
      },
    ],
  },
  {
    id: "resume",
    label: "Resumes",
    questions: [
      {
        q: "What is the Resume Scoring feature?",
        a: "Our Resume Scorer uses the same ATS logic as major companies. It analyzes your resume against target job descriptions and provides a score with specific, actionable feedback.",
      },
      {
        q: "Can Elev8 write my resume for me?",
        a: "Elev8 provides AI-driven suggestions and templates to help you craft the perfect resume, though it requires your input and review.",
      },
    ],
  },
  {
    id: "interview",
    label: "Interviews",
    questions: [
      {
        q: "Are the mock interviews industry-specific?",
        a: "Absolutely. When you start a mock interview, you can select your target role, industry, and experience level. The AI will generate tailored questions.",
      },
      {
        q: "Can I practice behavioral questions?",
        a: "Yes, our AI conducts both technical and behavioral rounds, ensuring you are well-prepared for any interview format.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing",
    questions: [
      {
        q: "Is there a free tier available?",
        a: "Yes, our Starter plan offers essential tools including 1 resume analysis per month and basic roadmaps completely free of charge.",
      },
      {
        q: "Can I cancel my subscription anytime?",
        a: "Yes, you can manage and cancel your subscription directly from the billing dashboard.",
      },
    ],
  },
];

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const activeCategoryData =
    faqCategories.find((c) => c.id === activeCategory) || faqCategories[0];

  const handleCategoryChange = (id: string) => {
    if (id !== activeCategory) {
      setActiveCategory(id);
      setOpenIndex(null);
    }
  };

  return (
    <section className="w-full flex flex-col " id="faq">
      {/* Top Section (Purple) */}
      <div className="bg-[#FCFBFA] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-display font-medium text-black mb-10 tracking-tight leading-none">
            Questions about Elev8?
          </h2>

          <div className="flex flex-wrap gap-4 items-center mt-6">
            {faqCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`
                    px-6 py-2.5 rounded-2xl text-sm md:text-base font-medium transition-all duration-300 outline-none
                    ${
                      isActive
                        ? "border-black border-[1.5px] border-dashed -rotate-[4deg] text-black bg-transparent"
                        : "border-black border text-black bg-transparent hover:bg-black/5"
                    }
                  `}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Section (Light) */}
      <div className="bg-[#FCFBFA] py-16 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column (Category Name) */}
            <div className="lg:col-span-4">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={activeCategoryData.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-medium text-black tracking-tight cursor-default"
                >
                  <RandomLetterSwap
                    label={activeCategoryData.label}
                    staggerDuration={0.025}
                    transition={{ duration: 0.5, type: "spring", stiffness: 280, damping: 18 }}
                  />
                </motion.h3>
              </AnimatePresence>
            </div>

            {/* Right Column (Questions List) */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategoryData.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col lg:mt-3"
                >
                  {activeCategoryData.questions.map((faq, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                      <div key={idx} className="border-b border-black/10">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : idx)}
                          className="w-full flex justify-between items-center text-left py-6 group outline-none"
                        >
                          <div className="flex items-center gap-4">
                            <Image
                              src="/icons/elev8-rocket.png"
                              alt="Elev8 Rocket"
                              width={24}
                              height={24}
                              className="shrink-0 transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:translate-x-1 group-hover:rotate-12 group-hover:scale-110"
                            />
                            <span className="font-medium text-base md:text-lg text-black pr-4 sm:pr-8 group-hover:text-black/80 transition-colors">
                              {faq.q}
                            </span>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="shrink-0 text-black"
                          >
                            <Plus className="w-5 h-5 stroke-[1.5]" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <p className="pb-8 pt-1 text-black/60 text-sm md:text-base leading-relaxed pr-12">
                                {faq.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
