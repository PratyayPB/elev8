"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const results = [
  {
    image: "/images/landing/result-1.jpg",
    category: "Career Pivot",
    title: "AI-Led Career Transitions",
    description: "How our users successfully shifted to tech roles using personalized roadmaps and gap analysis."
  },
  {
    image: "/images/landing/result-2.jpg",
    category: "Interview Success",
    title: "Resume-to-Offer Pipeline",
    description: "Optimized resumes that bypassed ATS filters, leading to a 300% increase in interview callbacks."
  },
  {
    image: "/images/landing/result-3.jpg",
    category: "Skill Development",
    title: "Actionable Skill Analysis",
    description: "Bridging the gap between current skills and dream jobs with step-by-step guidance."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Results() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-container-max mx-auto px-4 sm:px-6">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-wider text-text-secondary mb-3">Case Studies</div>
            <h2 className="text-2xl md:text-3xl font-display font-medium text-text-primary">
              Proven Results.
            </h2>
          </div>
          <button className="hidden md:inline-flex items-center text-xs font-medium text-text-primary hover:text-text-secondary transition-colors">
            View all stories
            <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {results.map((result, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full aspect-[3/2]">
                <Image
                  src={result.image}
                  alt={result.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-[11px] font-medium uppercase tracking-wider text-text-secondary mb-3">
                  {result.category}
                </div>
                <h3 className="text-lg font-display font-medium text-text-primary mb-3 leading-tight">
                  {result.title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {result.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-10 text-center md:hidden">
          <button className="inline-flex items-center text-sm font-medium text-text-primary">
            View all stories
            <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
