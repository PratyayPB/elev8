import type { Metadata } from "next";
import {
  Hero,
  DashboardPreview,
  LogoBar,
  Features,
  Showcase,
  Stats,
  Results,
  Pricing,
  Testimonial,
  FAQ,
  CTA,
} from "@/components/landing";

export const metadata: Metadata = {
  title: "Elev8 - AI-Powered Career Development Platform",
  description:
    "Accelerate your career with AI guidance, roadmaps, resume scoring, and mock interviews.",
};

export default function LandingPage() {
  return (
    <>
      <Hero />
      <DashboardPreview />
      {/* <LogoBar /> */}
      <Features />
      <Showcase />
      <Stats />
      <Results />
      <Pricing />
      <Testimonial />
      <FAQ />
      <CTA />
    </>
  );
}
