import { getInvoicingCompareUrl, getInvoicingReviewUrl, getInvoicingBestForUrl } from "@/lib/routes";
import type {
  BestForComparisonLink,
  BestForEditorialBlock,
  BestForFaqItem,
  BestForFeaturedProduct,
  BestForReviewLink,
  BestForTableRow,
  BestForTemplateProps,
} from "@/components/best/BestForTemplate";

type TradeConfig = {
  useCase: string;
  audiencePlural: string;
  audienceSingular: string;
  audienceShort: string;
  title: string;
  subtitle: string;
  introParagraph: string;
  hubTeaser: string;
  metaDescription: string;
  metaKeywords: string[];
};

const CATEGORY = { href: "/invoicing", label: "Invoicing" } as const;
const SEE_ALSO = {
  roundupLabel: "best invoicing software roundup",
  roundupHref: "/invoicing/best-invoicing-software",
  compareLabel: "invoicing software comparisons",
  compareHref: "/invoicing/compare",
} as const;

const TRADE_CONFIGS: readonly TradeConfig[] = [
  {
    useCase: "hvac",
    audiencePlural: "HVAC businesses",
    audienceSingular: "HVAC business",
    audienceShort: "HVAC",
    title: "Best Invoicing Software for HVAC Businesses (2026)",
    subtitle:
      "Compare invoicing software for HVAC businesses: estimates, service invoices, maintenance plan billing, online payments, and mobile workflows that help technicians close out jobs faster.",
    introParagraph:
      "HVAC businesses need invoicing software that handles tune-up agreements, install deposits, and same-day payment collection. These picks are best for shops that want clear estimates, fast invoice delivery, and fewer unpaid service calls.",
    hubTeaser:
      "Invoicing tools for HVAC teams with estimates, maintenance-plan billing, and mobile payment collection.",
    metaDescription:
      "Best invoicing software for HVAC businesses in 2026. Compare FreshBooks, QuickBooks, Zoho Invoice, and Wave for estimates, service invoices, and fast payment collection.",
    metaKeywords: ["best invoicing software for hvac", "hvac invoicing software", "hvac invoice app", "hvac estimate and invoice software"],
  },
  {
    useCase: "plumbing",
    audiencePlural: "Plumbing companies",
    audienceSingular: "plumbing company",
    audienceShort: "plumbing",
    title: "Best Invoicing Software for Plumbing Companies (2026)",
    subtitle:
      "Compare invoicing software for plumbing companies: quote-to-invoice workflows, emergency call billing, deposits, and payment links that speed up collections.",
    introParagraph:
      "Plumbing companies need fast invoicing from both office and field so emergency jobs do not become slow-pay jobs. These picks support estimate conversion, invoice reminders, and customer-friendly online payment options.",
    hubTeaser:
      "Best invoicing platforms for plumbing companies that need estimate-to-invoice speed and faster collections.",
    metaDescription:
      "Best invoicing software for plumbing companies in 2026. Compare top options for estimates, service invoices, emergency call billing, and online payments.",
    metaKeywords: ["best invoicing software for plumbing companies", "plumbing invoicing software", "plumber invoice app", "plumbing estimate software"],
  },
  {
    useCase: "electricians",
    audiencePlural: "Electricians",
    audienceSingular: "electrical contractor",
    audienceShort: "electrical",
    title: "Best Invoicing Software for Electricians (2026)",
    subtitle:
      "Compare invoicing software for electricians: estimate conversion, progress invoices, change-order billing, and mobile payments for residential and commercial electrical work.",
    introParagraph:
      "Electrical contractors need invoicing software that keeps labor, materials, and scope changes documented in one place. These picks help teams invoice accurately and reduce delays between completed work and collected cash.",
    hubTeaser:
      "Invoicing tools for electricians with change-order billing, progress invoices, and mobile payments.",
    metaDescription:
      "Best invoicing software for electricians in 2026. Compare software for estimates, progress billing, change orders, and payment collection.",
    metaKeywords: ["best invoicing software for electricians", "electrician invoicing software", "electrical contractor invoice app", "electrical estimate and invoice software"],
  },
  {
    useCase: "painting",
    audiencePlural: "Painting contractors",
    audienceSingular: "painting contractor",
    audienceShort: "painting",
    title: "Best Invoicing Software for Painting Contractors (2026)",
    subtitle:
      "Compare invoicing software for painting contractors: estimate templates, deposit billing, phase-based invoices, and reminders that reduce late payments.",
    introParagraph:
      "Painting contractors win when proposal, deposit, and final invoice steps are clear for homeowners and commercial clients. These tools help you standardize billing across prep, paint, and punch-list phases.",
    hubTeaser:
      "Best invoicing software for painting contractors with deposit billing and phase-based invoice workflows.",
    metaDescription:
      "Best invoicing software for painting contractors in 2026. Compare tools for estimates, deposits, project-phase billing, and customer payments.",
    metaKeywords: ["best invoicing software for painting contractors", "painting invoicing software", "painting estimate invoice app", "contractor invoicing for painters"],
  },
  {
    useCase: "roofing",
    audiencePlural: "Roofing companies",
    audienceSingular: "roofing company",
    audienceShort: "roofing",
    title: "Best Invoicing Software for Roofing Companies (2026)",
    subtitle:
      "Compare invoicing software for roofing companies: inspection estimate workflows, deposit invoices, supplement-friendly billing, and faster final collections.",
    introParagraph:
      "Roofing companies need invoicing software that supports inspections, staged payments, and high-ticket jobs. The best tools keep paperwork clean while making it easy to collect deposits and close receivables quickly.",
    hubTeaser:
      "Top invoicing software for roofing companies with staged billing and high-ticket payment workflows.",
    metaDescription:
      "Best invoicing software for roofing companies in 2026. Compare top tools for inspection estimates, staged payments, and faster invoice collection.",
    metaKeywords: ["best invoicing software for roofing companies", "roofing invoicing software", "roofing estimate invoice software", "roofing contractor billing app"],
  },
  {
    useCase: "general-contractors",
    audiencePlural: "General contractors",
    audienceSingular: "general contractor",
    audienceShort: "general contracting",
    title: "Best Invoicing Software for General Contractors (2026)",
    subtitle:
      "Compare invoicing software for general contractors: draw schedules, progress billing, subcontractor-ready documentation, and accounting-friendly invoice workflows.",
    introParagraph:
      "General contractors need invoicing software that supports milestone billing and clear paper trails across projects. These picks help teams handle draws, client approvals, and closeout invoices without messy spreadsheets.",
    hubTeaser:
      "Best invoicing tools for general contractors with draw schedules and progress-billing support.",
    metaDescription:
      "Best invoicing software for general contractors in 2026. Compare software for draw schedules, progress billing, and project-ready invoice workflows.",
    metaKeywords: ["best invoicing software for general contractors", "general contractor invoicing software", "construction draw invoicing software", "gc billing software"],
  },
  {
    useCase: "landscaping",
    audiencePlural: "Landscaping companies",
    audienceSingular: "landscaping company",
    audienceShort: "landscaping",
    title: "Best Invoicing Software for Landscaping Companies (2026)",
    subtitle:
      "Compare invoicing software for landscaping companies: recurring maintenance billing, project invoice templates, route-friendly payments, and seasonal cash-flow visibility.",
    introParagraph:
      "Landscaping companies often juggle recurring maintenance and one-time installs. The best invoicing software handles both cleanly, with recurring billing, reminders, and easy online payment options for clients.",
    hubTeaser:
      "Invoicing software for landscaping companies with recurring billing and install-project invoice workflows.",
    metaDescription:
      "Best invoicing software for landscaping companies in 2026. Compare recurring billing, project invoicing, and payment tools for landscaping businesses.",
    metaKeywords: ["best invoicing software for landscaping companies", "landscaping invoicing software", "lawn care invoice app", "landscape billing software"],
  },
  {
    useCase: "construction",
    audiencePlural: "Construction companies",
    audienceSingular: "construction company",
    audienceShort: "construction",
    title: "Best Invoicing Software for Construction Companies (2026)",
    subtitle:
      "Compare invoicing software for construction companies: milestone billing, progress invoices, change-order documentation, and cash-flow tracking for complex projects.",
    introParagraph:
      "Construction companies need invoicing software that keeps billing aligned with project milestones and approved scope. These tools are best for teams that need structured invoice workflows and better visibility into outstanding payments.",
    hubTeaser:
      "Best invoicing software for construction companies with milestone billing and change-order-ready invoicing.",
    metaDescription:
      "Best invoicing software for construction companies in 2026. Compare tools for milestone billing, progress invoices, and construction cash-flow management.",
    metaKeywords: ["best invoicing software for construction companies", "construction invoicing software", "progress billing software", "construction estimate invoice app"],
  },
  {
    useCase: "remodeling",
    audiencePlural: "Remodeling businesses",
    audienceSingular: "remodeling business",
    audienceShort: "remodeling",
    title: "Best Invoicing Software for Remodeling Businesses (2026)",
    subtitle:
      "Compare invoicing software for remodeling businesses: proposal-to-invoice workflows, phase billing, change-order tracking, and online payment options for homeowners.",
    introParagraph:
      "Remodeling businesses need invoicing software that handles long project timelines and evolving scope. These picks help teams invoice by phase, document changes clearly, and collect payments without awkward follow-up.",
    hubTeaser:
      "Best invoicing tools for remodelers with proposal-to-invoice and phase-billing workflows.",
    metaDescription:
      "Best invoicing software for remodeling businesses in 2026. Compare software for phase billing, change orders, and homeowner payment collection.",
    metaKeywords: ["best invoicing software for remodeling businesses", "remodeling invoicing software", "home remodel invoice app", "contractor phase billing software"],
  },
  {
    useCase: "handyman",
    audiencePlural: "Handyman businesses",
    audienceSingular: "handyman business",
    audienceShort: "handyman",
    title: "Best Invoicing Software for Handyman Businesses (2026)",
    subtitle:
      "Compare invoicing software for handyman businesses: fast same-day invoices, estimate templates, simple payment links, and lightweight workflows for small jobs.",
    introParagraph:
      "Handyman businesses need invoicing software that is quick, mobile, and easy to run between jobs. These picks are best for teams that want professional invoices without enterprise complexity.",
    hubTeaser:
      "Fast, mobile-friendly invoicing software for handyman businesses handling high-volume small jobs.",
    metaDescription:
      "Best invoicing software for handyman businesses in 2026. Compare easy-to-use tools for same-day invoices, estimates, and quick customer payments.",
    metaKeywords: ["best invoicing software for handyman businesses", "handyman invoicing software", "handyman invoice app", "small job invoicing software"],
  },
  {
    useCase: "property-management",
    audiencePlural: "Property management companies",
    audienceSingular: "property management company",
    audienceShort: "property management",
    title: "Best Invoicing Software for Property Management Companies (2026)",
    subtitle:
      "Compare invoicing software for property management companies: owner billing, tenant charge workflows, vendor pass-through invoicing, and recurring monthly statements.",
    introParagraph:
      "Property management companies need invoicing software that supports recurring billing and clear documentation across properties. These picks help teams keep owners informed and payments organized.",
    hubTeaser:
      "Invoicing software for property managers with recurring owner billing and portfolio-friendly workflows.",
    metaDescription:
      "Best invoicing software for property management companies in 2026. Compare tools for recurring billing, owner statements, and vendor pass-through invoices.",
    metaKeywords: ["best invoicing software for property management companies", "property management invoicing software", "owner statement software", "portfolio billing software"],
  },
  {
    useCase: "pest-control",
    audiencePlural: "Pest control businesses",
    audienceSingular: "pest control business",
    audienceShort: "pest control",
    title: "Best Invoicing Software for Pest Control Businesses (2026)",
    subtitle:
      "Compare invoicing software for pest control businesses: recurring service billing, route-friendly invoicing, service-plan renewals, and customer payment automation.",
    introParagraph:
      "Pest control teams rely on recurring service plans and predictable billing cycles. These tools help automate recurring invoices, follow-up reminders, and payment collection for route-based operations.",
    hubTeaser:
      "Recurring-billing invoicing software for pest control businesses with route-friendly workflows.",
    metaDescription:
      "Best invoicing software for pest control businesses in 2026. Compare recurring service billing, payment reminders, and route-based invoicing tools.",
    metaKeywords: ["best invoicing software for pest control businesses", "pest control invoicing software", "route invoicing software", "recurring service billing software"],
  },
  {
    useCase: "pool-service",
    audiencePlural: "Pool service companies",
    audienceSingular: "pool service company",
    audienceShort: "pool service",
    title: "Best Invoicing Software for Pool Service Companies (2026)",
    subtitle:
      "Compare invoicing software for pool service companies: recurring maintenance invoices, repair billing, service notes, and customer payment tracking.",
    introParagraph:
      "Pool service companies need invoicing software that supports weekly routes and occasional repair work. These picks help owners automate recurring invoices and reduce late-pay friction.",
    hubTeaser:
      "Best invoicing software for pool service teams with recurring route billing and repair invoice support.",
    metaDescription:
      "Best invoicing software for pool service companies in 2026. Compare recurring maintenance billing, repair invoices, and customer payment tools.",
    metaKeywords: ["best invoicing software for pool service companies", "pool service invoicing software", "pool route billing software", "pool maintenance invoice app"],
  },
  {
    useCase: "junk-removal",
    audiencePlural: "Junk removal businesses",
    audienceSingular: "junk removal business",
    audienceShort: "junk removal",
    title: "Best Invoicing Software for Junk Removal Businesses (2026)",
    subtitle:
      "Compare invoicing software for junk removal businesses: same-day quote-to-invoice workflows, on-site payment capture, and high-volume job billing.",
    introParagraph:
      "Junk removal businesses need invoicing software that moves as fast as dispatch. These tools help teams invoice from the truck, capture payment quickly, and track outstanding balances without admin drag.",
    hubTeaser:
      "Same-day invoicing software for junk removal businesses with on-site payment capture.",
    metaDescription:
      "Best invoicing software for junk removal businesses in 2026. Compare tools for same-day invoices, on-site payments, and high-volume job billing.",
    metaKeywords: ["best invoicing software for junk removal businesses", "junk removal invoicing software", "junk hauling invoice app", "on-site payment invoicing software"],
  },
  {
    useCase: "moving",
    audiencePlural: "Moving companies",
    audienceSingular: "moving company",
    audienceShort: "moving",
    title: "Best Invoicing Software for Moving Companies (2026)",
    subtitle:
      "Compare invoicing software for moving companies: estimate and deposit workflows, move-day adjustments, final invoices, and payment collection across teams.",
    introParagraph:
      "Moving companies need invoicing software that handles deposits, move-day scope updates, and final settlements cleanly. These picks help operators keep billing accurate and reduce disputes after delivery.",
    hubTeaser:
      "Best invoicing software for moving companies with deposit workflows and move-day billing support.",
    metaDescription:
      "Best invoicing software for moving companies in 2026. Compare software for deposits, move-day invoice adjustments, and faster payment collection.",
    metaKeywords: ["best invoicing software for moving companies", "moving company invoicing software", "moving estimate invoice app", "moving deposit billing software"],
  },
] as const;

type InvoicingTradeConfig = (typeof TRADE_CONFIGS)[number];

const TRADE_CONFIGS_BY_USE_CASE = Object.fromEntries(
  TRADE_CONFIGS.map((cfg) => [cfg.useCase, cfg])
) as Record<string, InvoicingTradeConfig>;

function buildTradePageProps(cfg: InvoicingTradeConfig): BestForTemplateProps {
  const useCasePhrase = cfg.audiencePlural.toLowerCase();
  return {
    title: cfg.title,
    subtitle: cfg.subtitle,
    useCase: cfg.useCase,
    categoryHref: CATEGORY.href,
    categoryLabel: CATEGORY.label,
    introParagraph: cfg.introParagraph,
    freshnessText: "Updated for 2026",
    topPicksSub: `Our top invoicing picks for ${useCasePhrase}.`,
    editorialSub: `What to look for when you're choosing invoicing software for ${useCasePhrase}.`,
    whyThesePicksSub: `Why these invoicing tools fit ${useCasePhrase}.`,
    seeAlsoBlock: SEE_ALSO,
    featuredProducts: [
      {
        slug: "freshbooks",
        name: "FreshBooks",
        badge: `Best overall for ${cfg.audienceShort}`,
        description:
          "Reliable estimate-to-invoice workflows with online payments and client-friendly invoice delivery for service businesses.",
        rating: "4.5",
        startingPrice: "$19/mo",
        reviewHref: getInvoicingReviewUrl("freshbooks"),
        visitUrl: "https://www.freshbooks.com",
        logoSrc: "/Logos/freshbooks.jpeg",
      },
      {
        slug: "quickbooks",
        name: "QuickBooks",
        badge: "Best for invoicing + accounting",
        description:
          "Invoicing in the same system as accounting, with strong reporting and a familiar workflow for bookkeepers and owners.",
        rating: "4.6",
        startingPrice: "$30/mo",
        reviewHref: getInvoicingReviewUrl("quickbooks"),
        visitUrl: "https://quickbooks.intuit.com",
        logoSrc: "/Logos/quickbooks.png",
      },
      {
        slug: "zoho-invoice",
        name: "Zoho Invoice",
        badge: `Best value for ${cfg.audienceShort} teams`,
        description:
          "Affordable invoicing with automation, reminders, and a client portal for smoother payment collection.",
        rating: "4.4",
        startingPrice: "Free tier",
        reviewHref: getInvoicingReviewUrl("zoho-invoice"),
        visitUrl: "https://www.zoho.com/invoice",
        logoSrc: "/Logos/zoho.png",
      },
      {
        slug: "wave",
        name: "Wave",
        badge: "Best free option",
        description:
          "Free core invoicing for budget-conscious businesses that still need professional invoices and payment tracking.",
        rating: "4.3",
        startingPrice: "Free",
        reviewHref: getInvoicingReviewUrl("wave"),
        visitUrl: "https://www.waveapps.com",
        logoSrc: "/Logos/wave.jpeg",
      },
    ] as BestForFeaturedProduct[],
    comparisonTableRows: [
      {
        slug: "freshbooks",
        name: "FreshBooks",
        logoSrc: "/Logos/freshbooks.jpeg",
        bestFor: `Best overall for ${cfg.audienceShort}`,
        startingPrice: "$19/mo",
        standoutFeature: "Estimate-to-invoice flow with online payments",
        reviewHref: getInvoicingReviewUrl("freshbooks"),
      },
      {
        slug: "quickbooks",
        name: "QuickBooks",
        logoSrc: "/Logos/quickbooks.png",
        bestFor: "Invoicing + accounting in one stack",
        startingPrice: "$30/mo",
        standoutFeature: "Integrated books, invoicing, and reporting",
        reviewHref: getInvoicingReviewUrl("quickbooks"),
      },
      {
        slug: "zoho-invoice",
        name: "Zoho Invoice",
        logoSrc: "/Logos/zoho.png",
        bestFor: `Value-focused ${cfg.audienceShort} businesses`,
        startingPrice: "Free tier",
        standoutFeature: "Automation and client portal",
        reviewHref: getInvoicingReviewUrl("zoho-invoice"),
      },
      {
        slug: "wave",
        name: "Wave",
        logoSrc: "/Logos/wave.jpeg",
        bestFor: "Teams prioritizing low software cost",
        startingPrice: "Free",
        standoutFeature: "Free core invoicing and payment tracking",
        reviewHref: getInvoicingReviewUrl("wave"),
      },
    ] as BestForTableRow[],
    editorialGuidance: [
      {
        heading: "Estimate-to-invoice speed",
        body: `For ${useCasePhrase}, speed matters: estimate approval, invoice delivery, and payment collection should happen with minimal manual steps. Prioritize tools that convert approved quotes to invoices and automate reminders.`,
      },
      {
        heading: "Field and office billing workflows",
        body: `Choose software that works for whoever invoices in your business, whether that is office admin, owners, or techs in the field. Mobile invoice access and clean customer communication reduce payment friction.`,
      },
      {
        heading: "Cash-flow visibility and integrations",
        body: `Your invoicing stack should make aging receivables obvious and connect cleanly to accounting. If you need deeper financial reporting, QuickBooks is strongest; if you need lower cost and simplicity, FreshBooks, Zoho Invoice, or Wave may fit better.`,
      },
    ] as BestForEditorialBlock[],
    whyThesePicks: [
      {
        heading: "FreshBooks",
        body: `FreshBooks is our default recommendation for many ${useCasePhrase} because it balances professional invoicing, easy estimate conversion, and a polished payment experience. It is especially strong for service teams that want less admin overhead and more on-time payments.`,
      },
      {
        heading: "QuickBooks",
        body: `QuickBooks is the right fit when billing must stay connected to the accounting ledger. ${cfg.audiencePlural} that need clearer profitability reporting and fewer handoffs between invoicing and bookkeeping usually benefit from this setup.`,
      },
      {
        heading: "Zoho Invoice",
        body: `Zoho Invoice delivers solid automation and client communication at a value price point. It works well for ${useCasePhrase} that need recurring reminders, customer portals, and better payment consistency without paying enterprise-level fees.`,
      },
      {
        heading: "Wave",
        body: `Wave is the strongest free invoicing option for smaller ${useCasePhrase} or early-stage operators. It is best when you want clean invoices and basic tracking now, with the option to move to a fuller stack later as complexity grows.`,
      },
    ] as BestForEditorialBlock[],
    relatedReviews: [
      { name: "FreshBooks", href: getInvoicingReviewUrl("freshbooks") },
      { name: "QuickBooks", href: getInvoicingReviewUrl("quickbooks") },
      { name: "Zoho Invoice", href: getInvoicingReviewUrl("zoho-invoice") },
      { name: "Wave", href: getInvoicingReviewUrl("wave") },
    ] as BestForReviewLink[],
    relatedComparisons: [
      { label: "FreshBooks vs QuickBooks", href: getInvoicingCompareUrl("freshbooks-vs-quickbooks") },
      { label: "FreshBooks vs Wave", href: getInvoicingCompareUrl("freshbooks-vs-wave") },
      { label: "QuickBooks vs Wave", href: getInvoicingCompareUrl("quickbooks-vs-wave") },
    ] as BestForComparisonLink[],
    faqItems: [
      {
        q: `What is the best invoicing software for ${useCasePhrase}?`,
        a: `FreshBooks is our top pick for most ${useCasePhrase} because it balances ease of use, estimate-to-invoice workflows, and payment collection. QuickBooks is best if you want invoicing and accounting in one system; Zoho Invoice is strong value; Wave is the best free option.`,
      },
      {
        q: `Do ${useCasePhrase} need invoicing software with estimates?`,
        a: `Yes. ${cfg.audiencePlural} usually close work from estimates or proposals, so conversion to invoice should be simple and trackable. This reduces manual errors and helps you bill faster after approval.`,
      },
      {
        q: `Can invoicing software help ${useCasePhrase} get paid faster?`,
        a: "Yes. The biggest wins come from automated reminders, payment links, and clear invoice status tracking. Tools that reduce manual follow-up typically improve collection speed and lower overdue balances.",
      },
      {
        q: "Should I choose invoicing-only software or invoicing plus accounting?",
        a: "Choose invoicing-only software if simplicity and lower cost are the priority. Choose an integrated accounting stack when you need stronger reporting, cleaner reconciliation, and less back-and-forth between billing and bookkeeping.",
      },
    ] as BestForFaqItem[],
  };
}

export function getInvoicingBestForTradeSlugs(): string[] {
  return TRADE_CONFIGS.map((cfg) => cfg.useCase);
}

export function getInvoicingBestForTradePageProps(useCase: string): BestForTemplateProps | null {
  const cfg = TRADE_CONFIGS_BY_USE_CASE[useCase];
  if (!cfg) return null;
  return buildTradePageProps(cfg);
}

export function getInvoicingBestForTradeMetadata(useCase: string): {
  title: string;
  description: string;
  keywords: string[];
} | null {
  const cfg = TRADE_CONFIGS_BY_USE_CASE[useCase];
  if (!cfg) return null;
  return {
    title: `${cfg.title} | BeltStack`,
    description: cfg.metaDescription,
    keywords: cfg.metaKeywords,
  };
}

export type InvoicingTradeBestForHubCard = { label: string; href: string; description: string };

export function getInvoicingTradeBestForHubCards(): InvoicingTradeBestForHubCard[] {
  return TRADE_CONFIGS.map((cfg) => ({
    label: cfg.title,
    href: getInvoicingBestForUrl(cfg.useCase),
    description: cfg.hubTeaser,
  }));
}
