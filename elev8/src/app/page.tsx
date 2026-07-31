import {
  Header,
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
  Footer,
  ChatButton,
} from "@/components/landing";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-[#84E6F6] selection:text-black">
      {/* 1. Sticky / Floating Pill Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Social Proof */}
        <SocialProof />

        {/* 4. About Section */}
        <About />

        {/* 5. Core Features */}
        <Features />

        {/* 6. How It Works Timeline */}
        <HowItWorks />

        {/* 7. Product Showcase */}
        <ProductShowcase />

        {/* 8. Dashboard Preview & Telemetry */}
        <DashboardPreview />

        {/* 9. Sample Reports Gallery */}
        <Gallery />

        {/* 10. Pricing Plans */}
        <Pricing />

        {/* 11. User Success Testimonials */}
        <Testimonials />

        {/* 12. FAQ Accordion */}
        <FAQ />

        {/* 13. Final CTA */}
        <CTA />

        {/* 14. Contact Form */}
        <Contact />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* 16. Floating Assistant Chat Button */}
      <ChatButton />
    </div>
  );
}
