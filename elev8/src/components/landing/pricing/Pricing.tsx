"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    description: "Essential tools for career planning.",
    features: ["1 Resume Analysis/mo", "Basic Career Roadmap", "Community Access"],
    cta: "Start Free",
    highlighted: false
  },
  {
    name: "Professional",
    price: "$199",
    period: "/mo",
    description: "Advanced AI tools for active job seekers.",
    features: ["Unlimited Resume Scoring", "Mock Interview AI (5/mo)", "Personalized Roadmaps", "Priority Support"],
    cta: "Get Started",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams and organizations.",
    features: ["Team Analytics Dashboard", "Custom Skill Mapping", "Dedicated Success Manager", "API Access"],
    cta: "Contact Us",
    highlighted: false
  }
];

export function Pricing() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8" id="pricing">
      <div className="max-w-container-max mx-auto bg-[#F0ECE6] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-border-subtle/60 shadow-sm">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-medium text-text-primary mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="text-text-secondary text-base">
            Invest in your career growth with a plan that fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted 
                  ? "bg-black text-white shadow-2xl scale-105 z-10" 
                  : "bg-white border border-border-subtle shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex px-3 py-1 rounded-full bg-accent-cream text-black text-[11px] font-medium uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-lg font-display font-medium mb-2 ${plan.highlighted ? "text-white" : "text-text-primary"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={`text-3xl md:text-4xl font-display font-medium tracking-tight ${plan.highlighted ? "text-white" : "text-text-primary"}`}>
                    {plan.price}
                  </span>
                  <span className={plan.highlighted ? "text-white/70 text-xs" : "text-text-muted text-xs"}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-xs ${plan.highlighted ? "text-white/80" : "text-text-secondary"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <Check className={`w-4 h-4 mr-2.5 shrink-0 mt-0.5 ${plan.highlighted ? "text-accent-cyan" : "text-text-primary"}`} />
                    <span className={`text-xs ${plan.highlighted ? "text-white/90" : "text-text-secondary"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/sign-up"
                className={`w-full inline-flex justify-center items-center py-2.5 px-5 rounded-full text-xs font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-surface-muted"
                    : "bg-background border border-border-subtle text-text-primary hover:bg-border-subtle/50"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
