import type { AlternativesTemplateProps } from "@/components/alternatives/AlternativesTemplate";
import {
  getReputationManagementAlternativeUrl,
  getReputationManagementCompareUrl,
  getReputationManagementReviewUrl,
} from "@/lib/routes";

const LOGOS = {
  podium: "/Logos/podium.jpeg",
  birdeye: "/Logos/birdeye.svg",
  nicejob: "/Logos/nicejob.jpeg",
  broadly: "/Logos/broadly.png",
} as const;

function makePage(slug: "podium" | "birdeye" | "nicejob"): AlternativesTemplateProps {
  const name = slug === "podium" ? "Podium" : slug === "birdeye" ? "Birdeye" : "NiceJob";
  const title = `Best ${name} Alternatives (2026)`;
  const baseRows = {
    podium: { bestFor: "SMS-first review requests", price: "Custom / quote", standout: "Text-led workflows" },
    birdeye: { bestFor: "Multi-location reputation suites", price: "Custom / quote", standout: "Broad platform depth" },
    nicejob: { bestFor: "Simple review automation", price: "From ~$75/mo", standout: "Low-friction onboarding" },
  }[slug];

  return {
    title,
    subtitle:
      `${name} can be a strong fit, but teams switch when pricing, workflow ownership, or feature depth no longer matches operations.`,
    productName: name,
    productSlug: slug,
    categoryHref: "/reputation-management",
    categoryLabel: "Reputation Management",
    originalReviewHref: getReputationManagementReviewUrl(slug),
    showPayrollTypesColumn: false,
    quickAnswerParagraphs: [
      `The strongest ${name} alternatives depend on your operating model: some teams need deeper multi-location controls, while others need simpler request-and-response workflows that teams actually maintain.`,
      "Before switching, validate process fit: request timing, response ownership, and review-policy compliance usually drive outcomes more than feature lists.",
      "Use this page to compare practical replacements and narrow to two finalists for a real 30-60 day pilot.",
    ],
    whyPeopleLookForAlternatives: [
      { heading: "Pricing and contract fit", body: "As locations, seats, or messaging volume grow, total cost can outpace expected ROI." },
      { heading: "Workflow mismatch", body: "Teams often need different levels of automation, response controls, or multi-location governance." },
      { heading: "Adoption quality", body: "A platform can look strong on paper but fail when front-office teams do not run it consistently." },
      { heading: "Strategic stack changes", body: "New CRM, SEO, and lead generation priorities can change what reputation tooling should optimize for." },
    ],
    topAlternatives: [
      {
        slug: "podium",
        name: "Podium",
        logoSrc: LOGOS.podium,
        rating: "4.5",
        bestFor: "SMS-led local operations",
        description: "Strong for communication-first review request workflows.",
        reviewHref: getReputationManagementReviewUrl("podium"),
        compareHref: getReputationManagementCompareUrl("podium-vs-birdeye"),
        startingPrice: "Custom / quote",
      },
      {
        slug: "birdeye",
        name: "Birdeye",
        logoSrc: LOGOS.birdeye,
        rating: "4.6",
        bestFor: "Multi-location scale",
        description: "Broad suite for larger location footprints and policy workflows.",
        reviewHref: getReputationManagementReviewUrl("birdeye"),
        compareHref: getReputationManagementCompareUrl("podium-vs-birdeye"),
        startingPrice: "Custom / quote",
      },
      {
        slug: "nicejob",
        name: "NiceJob",
        logoSrc: LOGOS.nicejob,
        rating: "4.4",
        bestFor: "Lean team simplicity",
        description: "Low-friction approach for service businesses wanting consistent review growth.",
        reviewHref: getReputationManagementReviewUrl("nicejob"),
        compareHref: getReputationManagementCompareUrl("birdeye-vs-nicejob"),
        startingPrice: "From ~$75/mo",
      },
      {
        slug: "broadly",
        name: "Broadly",
        logoSrc: LOGOS.broadly,
        rating: "4.2",
        bestFor: "Small local-service operators",
        description: "Simple workflows and easier onboarding for owner-led teams.",
        reviewHref: getReputationManagementReviewUrl("broadly"),
        compareHref: getReputationManagementCompareUrl("podium-vs-broadly"),
        startingPrice: "Custom / quote",
      },
    ],
    comparisonTableRows: [
      { slug, name, logoSrc: LOGOS[slug], bestFor: baseRows.bestFor, startingPrice: baseRows.price, standoutFeature: baseRows.standout, reviewHref: getReputationManagementReviewUrl(slug) },
      { slug: "podium", name: "Podium", logoSrc: LOGOS.podium, bestFor: "SMS-first review requests", startingPrice: "Custom / quote", standoutFeature: "Text-led workflows", reviewHref: getReputationManagementReviewUrl("podium") },
      { slug: "birdeye", name: "Birdeye", logoSrc: LOGOS.birdeye, bestFor: "Multi-location suites", startingPrice: "Custom / quote", standoutFeature: "Broad platform depth", reviewHref: getReputationManagementReviewUrl("birdeye") },
      { slug: "nicejob", name: "NiceJob", logoSrc: LOGOS.nicejob, bestFor: "Simple automation", startingPrice: "From ~$75/mo", standoutFeature: "Low-friction onboarding", reviewHref: getReputationManagementReviewUrl("nicejob") },
    ],
    detailedAlternatives: [
      { productName: "Podium", heading: "Best for SMS-heavy teams", body: "Works well when review asks and customer communication already run through text.", reviewHref: getReputationManagementReviewUrl("podium"), compareHref: getReputationManagementCompareUrl("podium-vs-birdeye") },
      { productName: "Birdeye", heading: "Best for larger footprints", body: "Better fit for teams that need broader controls across many locations.", reviewHref: getReputationManagementReviewUrl("birdeye"), compareHref: getReputationManagementCompareUrl("podium-vs-birdeye") },
      { productName: "NiceJob", heading: "Best for owner-led simplicity", body: "Useful when ease-of-use and request consistency matter more than platform breadth.", reviewHref: getReputationManagementReviewUrl("nicejob"), compareHref: getReputationManagementCompareUrl("birdeye-vs-nicejob") },
    ],
    howToChoose: [
      { heading: "Start with request consistency", body: "Choose the platform your team can execute weekly with real customer jobs and handoffs." },
      { heading: "Match depth to footprint", body: "Single-location teams often need simplicity; multi-location brands need stronger controls and governance." },
      { heading: "Tie to conversion outcomes", body: "Track not just review count, but lead conversion and booked-job impact after review velocity improves." },
      { heading: "Run a true pilot", body: "Use a 30-60 day pilot with consistent scripts, cadence, and response SLAs before finalizing." },
    ],
    relatedComparisons: [
      { label: "Podium vs Birdeye", href: getReputationManagementCompareUrl("podium-vs-birdeye") },
      { label: "Birdeye vs NiceJob", href: getReputationManagementCompareUrl("birdeye-vs-nicejob") },
      { label: "Podium vs Broadly", href: getReputationManagementCompareUrl("podium-vs-broadly") },
    ],
    relatedResources: [
      { label: "Reputation management hub", href: "/reputation-management" },
      { label: "Best reputation management software", href: "/reputation-management/best-reputation-management-software" },
      { label: "Reputation software comparisons", href: "/reputation-management/compare" },
      { label: "Reputation management guides", href: "/reputation-management/guides" },
      { label: "SEO tools hub", href: "/seo-tools" },
      { label: "Lead generation hub", href: "/lead-generation" },
      { label: "CRM software hub", href: "/crm" },
      { label: "Call tracking hub", href: "/call-tracking" },
      { label: "Website builders hub", href: "/website-builders" },
    ],
    faqItems: [
      { q: `What is the best ${name} alternative?`, a: "For most service businesses, Podium, Birdeye, and NiceJob are the core shortlist, with Broadly often included for simplicity-first teams." },
      { q: "Should I switch platforms if ratings are similar?", a: "Only if operating fit improves. Better request cadence and response ownership usually matter more than minor feature differences." },
      { q: "How do I compare true cost?", a: "Compare annual cost by active locations, team access, message volume, and implementation overhead." },
      { q: "How long should migration take?", a: "Small teams can migrate quickly, while multi-location organizations should plan phased rollout and policy QA." },
      { q: "Will changing reputation software improve SEO and leads?", a: "It can help, but results come from consistent review operations plus strong SEO, lead handling, and CRM follow-up." },
    ],
  };
}

const pages: Record<string, AlternativesTemplateProps> = {
  podium: makePage("podium"),
  birdeye: makePage("birdeye"),
  nicejob: makePage("nicejob"),
};

export function getReputationManagementAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return pages[slug] ?? null;
}

export function getReputationManagementAlternativesSlugs(): string[] {
  return Object.keys(pages);
}
