"use client";

import { motion } from "framer-motion";
import { Compass, FileCheck, MessageSquare, Map } from "lucide-react";

const features = [
  {
    icon: <Compass className="w-6 h-6" />,
    title: "AI Career Guidance",
    description: "Get personalized career advice and role recommendations based on your unique skills and goals."
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Resume Scoring",
    description: "Optimize your resume with our ATS-friendly scanner to increase your interview callbacks."
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Mock Interviews",
    description: "Practice with our AI interviewer and receive instant, actionable feedback on your responses."
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: "Learning Roadmaps",
    description: "Follow customized, step-by-step learning paths to bridge your skill gaps and advance."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Features() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8" id="features">
      <div className="max-w-container-max mx-auto bg-[#F0ECE6] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-border-subtle/60 shadow-sm">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-medium text-text-primary mb-4">
            A simple platform for complex paths.
          </h2>
          <p className="text-text-secondary text-base">
            From resume optimization to interview prep, Elev8 provides the tools you need to navigate your career trajectory with confidence.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 border border-border-subtle shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center text-text-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium font-display text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-xs leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
