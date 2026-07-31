"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      price: isAnnual ? "$0" : "$0",
      period: "/mo",
      description: "Essential tools to evaluate your career standing.",
      features: [
        "Basic Profile Assessment",
        "1 ATS Resume Scan / Month",
        "Public Career Community Access",
        "Standard Roadmap Templates",
      ],
      cta: "Select Free Plan",
      popular: false,
      href: "/sign-up",
    },
    {
      name: "Pro",
      price: isAnnual ? "$24" : "$29",
      period: "/mo",
      description: "Everything you need to accelerate your job hunt and skills.",
      features: [
        "Full AI Diagnostic Assessment",
        "Unlimited Roadmap Engine",
        "Unlimited ATS Resume Scans",
        "5 AI Voice Interview Sims / Mo",
        "Real-time Market Skill Matching",
      ],
      cta: "Get Started with Pro",
      popular: true,
      href: "/sign-up",
    },
    {
      name: "Premium",
      price: isAnnual ? "$79" : "$99",
      period: "/mo",
      description: "Complete executive suite for high-stakes transitions.",
      features: [
        "Unlimited AI Voice & Text Sims",
        "1-on-1 Human Coach Resume Review",
        "Priority AI Processing & Support",
        "Executive Negotiation Scripts",
        "Custom Enterprise Benchmarking",
      ],
      cta: "Select Premium Plan",
      popular: false,
      href: "/sign-up",
    },
  ];

  return (
    <section id="pricing" className="bg-[#F4F2EE] border-y border-[#E6E6E6] py-24 px-4 sm:px-6">
      <div className="max-w-container-max mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#999999]">Transparent Plans</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Simple Pricing
          </h2>
          <p className="text-lg text-[#605F5F]">
            Invest in your career growth with predictable plans designed for every stage.
          </p>

          {/* Monthly / Annual Pill Toggle */}
          <div className="inline-flex items-center bg-white border border-[#E6E6E6] rounded-full p-1 shadow-sm mt-4">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                !isAnnual ? "bg-black text-white shadow-sm" : "text-[#605F5F] hover:text-black"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                isAnnual ? "bg-black text-white shadow-sm" : "text-[#605F5F] hover:text-black"
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-[#84E6F6] text-black text-[10px] px-2 py-0.5 rounded-full font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-8 border transition-all duration-300 flex flex-col justify-between relative ${
                plan.popular
                  ? "border-2 border-black shadow-xl md:-translate-y-2"
                  : "border-[#E6E6E6] shadow-sm hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-black text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full border border-black shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#FECD1A]" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-black">{plan.name}</h3>
                    <p className="text-xs text-[#605F5F] mt-1 min-h-[32px]">{plan.description}</p>
                  </div>
                </div>

                <div className="my-6">
                  <span className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight">{plan.price}</span>
                  <span className="text-sm text-[#999999] font-medium">{plan.period}</span>
                </div>

                <div className="border-t border-[#E6E6E6] pt-6 mb-8">
                  <span className="text-xs font-semibold text-[#999999] uppercase tracking-wider block mb-4">
                    What&apos;s included:
                  </span>
                  <ul className="space-y-3">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-sm text-[#1A1A1A]">
                        <div className="w-5 h-5 rounded-full bg-[#F4F2EE] border border-[#E6E6E6] flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-black" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={plan.href}
                className={`w-full py-3 rounded-full text-center text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-black text-white hover:bg-black/90 shadow-md"
                    : "bg-white text-black border border-[#E6E6E6] hover:bg-[#F4F2EE]"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
