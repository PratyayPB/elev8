const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const TEMPLATES = [
  { slug: "academic-cv-lite", name: "Academic CV Lite", category: "ATS_FRIENDLY" },
  { slug: "consultant-polished", name: "Consultant Polished", category: "ATS_FRIENDLY" },
  { slug: "developer-mono", name: "Developer Mono", category: "ATS_FRIENDLY" },
  { slug: "government-standard", name: "Government Standard", category: "ATS_FRIENDLY" },
  { slug: "architects-portfolio", name: "Architects Portfolio", category: "MINIMAL_MODERN" },
  { slug: "minimalist-grid", name: "Minimalist Grid", category: "MINIMAL_MODERN" },
  { slug: "nordic-minimal", name: "Nordic Minimal", category: "MINIMAL_MODERN" },
  { slug: "desert-modern", name: "Desert Modern", category: "MINIMAL_MODERN" },
  { slug: "executive-slate", name: "Executive Slate", category: "TWO_COLUMN" },
  { slug: "elegant", name: "Elegant", category: "TWO_COLUMN" },
  { slug: "macchiato", name: "Macchiato", category: "TWO_COLUMN" },
  { slug: "sidebar", name: "Sidebar", category: "TWO_COLUMN" },
  { slug: "creative-studio", name: "Creative Studio", category: "CREATIVE" },
  { slug: "even", name: "Even", category: "CREATIVE" },
  { slug: "art-deco", name: "Art Deco", category: "CREATIVE" },
  { slug: "art-school-modern", name: "Art School Modern", category: "CREATIVE" },
  { slug: "brutalist", name: "Brutalist", category: "CREATIVE" },
];

async function seedResumeTemplates() {
  console.log("Seeding Resume Templates...");
  
  for (const t of TEMPLATES) {
    await prisma.resumeTemplate.upsert({
      where: { slug: t.slug },
      update: {
        name: t.name,
        category: t.category,
        supportedSections: ["basics", "work", "education", "skills", "projects", "certificates", "awards"],
      },
      create: {
        id: `template_${t.slug}`,
        name: t.name,
        slug: t.slug,
        category: t.category,
        supportedSections: ["basics", "work", "education", "skills", "projects", "certificates", "awards"],
      },
    });
  }
  
  console.log("Seeding Resume Templates complete.");
}

module.exports = { seedResumeTemplates };
