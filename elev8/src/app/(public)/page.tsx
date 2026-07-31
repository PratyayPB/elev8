import type { Metadata } from "next";
import {
  Hero,
  SocialProof,
  About,
  Features,
  HowItWorks,
  ProductShowcase,
  DashboardPreview,
  Gallery,
  Pricing,
  Testimonials,
  FAQ,
  CTA,
  Contact,
} from "@/components/landing";

export const metadata: Metadata = {
  title: "Elev8 - AI-Powered Career Development Platform",
  description: "Accelerate your career with AI guidance, roadmaps, resume scoring, and mock interviews.",
};

export default function LandingPage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <About />
      <Features />
      <HowItWorks />
      <ProductShowcase />
      <DashboardPreview />
      <Gallery />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}
