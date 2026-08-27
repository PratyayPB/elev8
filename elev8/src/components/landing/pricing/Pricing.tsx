"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const plansData = [
  {
    id: "starter",
    name: "Starter",
    description: "For solo builders shipping a first product",
    price: "$19",
    period: "/mo per seat",
    longPeriod: "/ month per seat",
    seats: "5 seats",
    support: "Community",
    uptime: "99.9%",
    includesText: "Includes:",
    features: [
      "Basic environments",
      "Manual deployments",
      "Standard release windows",
      "7-day release history",
    ],
    recommended: false,
  },
  {
    id: "growth",
    name: "Growth",
    description: "For teams making releases a routine",
    price: "$49",
    period: "/mo per seat",
    longPeriod: "/ month per seat",
    seats: "25 seats",
    support: "Priority email",
    uptime: "99.95%",
    includesText: "Everything in Starter, plus:",
    features: [
      "Unlimited environments",
      "Approval workflows",
      "Scheduled release windows",
      "Rollback automation",
      "1-year release history",
    ],
    recommended: true,
  },
  {
    id: "scale",
    name: "Scale",
    description: "For orgs coordinating many teams",
    price: "$129",
    period: "/mo per seat",
    longPeriod: "/ month per seat",
    seats: "Unlimited",
    support: "24/7 Dedicated",
    uptime: "99.99%",
    includesText: "Everything in Growth, plus:",
    features: [
      "Custom environments",
      "Advanced compliance workflows",
      "Custom release windows",
      "Instant rollbacks",
      "Unlimited release history",
    ],
    recommended: false,
  },
];

export function Pricing() {
  const [activePlan, setActivePlan] = useState("growth");

  const selectedPlan =
    plansData.find((p) => p.id === activePlan) || plansData[1];

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/landing/bg-gradient.png')" }}
      id="pricing"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column */}
        <div className="flex flex-col pt-2 lg:pt-8">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6 leading-tight tracking-tight">
            Pick the plan that matches your release cadence.
          </h2>
          <p className="text-white/60 text-base mb-12 max-w-md">
            Select a plan to see exactly what changes: seats, support, and the
            guardrails that come with each stage.
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {plansData.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setActivePlan(plan.id)}
                className={`cursor-pointer rounded-2xl p-5 md:p-6 border flex items-center justify-between transition-all duration-300 ${
                  activePlan === plan.id
                    ? "bg-white/5 border-[#FFDB00] shadow-lg scale-[1.02]"
                    : "bg-transparent border-white/10 hover:border-white/30"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Radio button circle */}
                  <div
                    className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      activePlan === plan.id
                        ? "border-white"
                        : "border-white/30"
                    }`}
                  >
                    {activePlan === plan.id && (
                      <motion.div
                        layoutId="radio-active"
                        className="w-2.5 h-2.5 rounded-full bg-white"
                      />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white font-medium">{plan.name}</h4>
                      {plan.recommended && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FFDB00] text-black">
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className="text-white text-xs sm:text-sm">
                      {plan.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end text-right shrink-0 ml-4">
                  <span className="text-xl md:text-2xl font-medium text-white">
                    {plan.price}
                  </span>
                  <span className="text-white text-xs">{plan.period}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-white text-xs sm:text-sm font-medium">
            Every plan includes unlimited viewers, API access, and two-factor
            authentication.
          </p>
        </div>

        {/* Right Column */}
        <div className="bg-[#111211] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col min-h-[580px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPlan.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-display font-medium text-white">
                  {selectedPlan.name}
                </h3>
                {selectedPlan.recommended && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FFDB00] text-black">
                    Recommended
                  </span>
                )}
              </div>
              <p className="text-white/60 text-sm mb-10">
                {selectedPlan.description}
              </p>

              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-5xl md:text-6xl font-display font-medium tracking-tight text-white">
                  {selectedPlan.price}
                </span>
                <span className="text-white/50 text-sm">
                  {selectedPlan.longPeriod}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-b border-white/10 py-6 mb-8">
                <div>
                  <div className="text-white/50 text-xs mb-1">Seats</div>
                  <div className="text-white font-medium text-sm">
                    {selectedPlan.seats}
                  </div>
                </div>
                <div>
                  <div className="text-white/50 text-xs mb-1">Support</div>
                  <div className="text-white font-medium text-sm">
                    {selectedPlan.support}
                  </div>
                </div>
                <div>
                  <div className="text-white/50 text-xs mb-1">Uptime</div>
                  <div className="text-white font-medium text-sm">
                    {selectedPlan.uptime}
                  </div>
                </div>
              </div>

              <div className="text-white font-medium text-sm mb-5">
                {selectedPlan.includesText}
              </div>

              <ul className="space-y-4">
                {selectedPlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
