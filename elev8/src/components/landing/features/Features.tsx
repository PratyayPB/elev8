"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, FileCheck, Mic, Map } from "lucide-react";

const featuresData = [
  {
    id: "roadmap",
    label: "Roadmap",
    badge: "ROADMAP",
    icon: Map,
    title: "Generate roadmaps for learning",
    description:
      "Create customized, step-by-step learning paths to bridge your skill gaps and quickly reach your career goals.",
    image: "/images/landing/pic5.png",
  },
  {
    id: "resume",
    label: "Resume",
    badge: "RESUME",
    icon: FileCheck,
    title: "Build and score resumes",
    description:
      "Optimize your resume with our intelligent scanner. Build professional resumes that pass ATS checks and get you hired.",
    image: "/images/landing/pic5.png",
  },
  {
    id: "interview",
    label: "Interview",
    badge: "INTERVIEW",
    icon: Mic,
    title: "Practice interviews (text & voice)",
    description:
      "Engage in realistic interview simulations in both text and voice format with instant, actionable feedback.",
    image: "/images/landing/pic5.png",
  },
  {
    id: "assessment",
    label: "Assessment",
    badge: "ASSESSMENT",
    icon: Compass,
    title: "Assess your career",
    description:
      "Get personalized career advice and role recommendations based on your unique skills and goals.",
    image: "/images/landing/pic5.png",
  },
];

export function Features() {
  const [activeTab, setActiveTab] = useState(featuresData[0].id);

  const activeFeature =
    featuresData.find((f) => f.id === activeTab) || featuresData[0];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" id="features">
      <div className="max-w-container-max mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-text-primary mb-4 lg:mb-6">
            Built for high performance
          </h2>
          <p className="text-text-secondary text-base md:text-lg">
            From resume optimization to interview prep, Elev8 provides the tools
            you need to navigate your career trajectory with confidence.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10 lg:mb-12">
          <div className="flex items-center gap-1 sm:gap-2 bg-[#EFEBE5] p-1.5 rounded-full border border-border-subtle/50 overflow-x-auto max-w-full no-scrollbar">
            {featuresData.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFeatureTab"
                      className="absolute inset-0 bg-white rounded-full shadow-sm"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <Icon className="relative z-10 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Card Content */}
        <motion.div
          whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-border-subtle/60 shadow-md p-2 sm:p-2 lg:p-2 w-[95%] mx-auto group cursor-pointer"
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center min-h-[320px] lg:min-h-[400px]">
            {/* Left Image Section */}
            <div className="w-full lg:w-1/2 relative h-[280px] sm:h-[360px] lg:h-full lg:min-h-[400px] rounded-2xl md:rounded-[2rem] overflow-hidden bg-muted">
              {/* Background Gradient */}
              <img
                src="/images/landing/bg-gradient.png"
                alt="Background effect"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlapping Feature Image */}
              <div className="absolute top-6 sm:top-8 lg:top-10 left-6 sm:left-8 lg:left-10 right-0 bottom-0 rounded-tl-xl sm:rounded-tl-2xl overflow-hidden shadow-2xl bg-white border-t border-l border-white/20">
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeFeature.id}
                      src={activeFeature.image}
                      alt={activeFeature.title}
                      className="absolute inset-0 w-full h-full object-cover object-left-top"
                      initial={{ opacity: 0, scale: 0.95, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.05, y: -15 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center py-4 lg:py-12 pr-4 lg:pr-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-start"
                >
                  <span className="bg-[#FFE126] text-[#000000] text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full tracking-wider mb-6 uppercase">
                    {activeFeature.badge}
                  </span>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-text-primary mb-4 lg:mb-6 leading-tight">
                    {activeFeature.title}
                  </h3>

                  <p className="text-text-secondary text-base lg:text-lg leading-relaxed max-w-lg">
                    {activeFeature.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
