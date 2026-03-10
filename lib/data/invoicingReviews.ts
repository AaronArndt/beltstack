import {
  getInvoicingReviewUrl,
  getInvoicingCompareUrl,
  getInvoicingBestForUrl,
} from "@/lib/routes";
import type { ReviewTemplateProps } from "@/components/reviews/ReviewTemplate";

type ReviewData = Omit<ReviewTemplateProps, "categoryHref"> & { categoryHref: string };

const BEST_INVOICING_SOFTWARE_HREF = "/invoicing/best-invoicing-software";
const INVOICING_COMPARE_HUB = "/invoicing/compare";
const INVOICING_GUIDES_HUB = "/invoicing/guides";

const INVOICING_SCENARIO_LINKS: { label: string; href: string }[] = [
  { label: "Best for freelancers", href: getInvoicingBestForUrl("freelancers") },
  { label: "Best for small business", href: getInvoicingBestForUrl("small-business") },
  { label: "Best for agencies", href: getInvoicingBestForUrl("agencies") },
  { label: "Best for contractors", href: getInvoicingBestForUrl("contractors") },
  { label: "Best for consultants", href: getInvoicingBestForUrl("consultants") },
];

const INVOICING_METHODOLOGY = {
  title: "How we review invoicing software",
  sub: "Transparent process, small-business–focused criteria.",
  introParagraph:
    "Our reviews are independent and updated on a regular cadence so you get current pricing and feature information. We evaluate invoicing software for ease of use, recurring billing, payment collection, and integrations.",
  bullets: [
    "We test invoicing workflows: creating invoices, recurring billing, estimates, and payment collection.",
    "We compare pricing tiers, payment processing fees, and integrations with accounting tools.",
    "Reviews are written for freelancers, small businesses, agencies, and contractors.",
  ],
};

const reviews: Record<string, ReviewData> = {
  freshbooks: {
    toolName: "FreshBooks",
    category: "Invoicing",
    categoryHref: "/invoicing",
    rating: "4.5",
    startingPrice: "$19/mo",
    bestFor: "freelancers and service businesses",
    visitUrl: "https://www.freshbooks.com",
    logoSrc: "/Logos/freshbooks.jpeg",
    quickVerdict:
      "FreshBooks is our top pick for freelancers and service businesses: strong invoicing, time tracking, client billing, and ease of use in one platform.",
    quickVerdictParagraphs: [
      "FreshBooks combines professional invoicing, recurring billing, time tracking, and payment collection in a package built for solo pros and small service teams. The interface is straightforward, and client portals keep communication in one place.",
      "We like FreshBooks for its focus on getting you paid: clear invoice status, payment links, and automation for repeat work. Estimates and proposals convert to invoices easily. It's less suited as full accounting software for larger operations—reporting and depth are good but not at QuickBooks or Xero level.",
      "If you're a freelancer or service business that prioritizes invoicing and client workflow over full bookkeeping, FreshBooks is a strong default. For free invoicing, Wave is an alternative; for full accounting plus invoicing, consider QuickBooks or Xero.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.5", explanation: "Strong invoicing, time tracking, estimates, and client portal. Good for service businesses; less depth for full accounting." },
      { category: "Pricing", score: "4.4", explanation: "Plans start around $19/month; tiered by clients and features. Transparent pricing." },
      { category: "Ease of Use", score: "4.6", explanation: "One of the easiest invoicing tools to set up and use daily. Clear navigation and templates." },
      { category: "Support", score: "4.4", explanation: "Help center, email support, and optional phone. Generally responsive." },
      { category: "Integrations", score: "4.3", explanation: "Connects to accounting tools, payment processors, and productivity apps. Solid but smaller than QuickBooks ecosystem." },
    ],
    pros: [
      "Professional invoicing and recurring billing",
      "Time tracking and client billing in one place",
      "Easy to use; quick setup",
      "Good client portal and payment collection",
      "Estimates and proposals that convert to invoices",
    ],
    cons: [
      "Less robust as full accounting software for larger operations",
      "Client and project limits on lower tiers",
      "Some advanced reporting on higher plans only",
    ],
    bestForEditorial:
      "FreshBooks is best for freelancers and service businesses that want strong invoicing, time tracking, and client workflows without the complexity of full accounting software. It fits solos and small teams that bill by project or retainer.",
    whoShouldAvoid:
      "Businesses that need full bookkeeping, heavy reporting, or deep accounting integration may prefer QuickBooks or Xero. Those on a tight budget might prefer free options like Wave or Zoho Invoice.",
    pricingSummary:
      "FreshBooks uses tiered plans starting around $19/month. Higher tiers add more billable clients, team members, and features. Compare plans against your client count and needs.",
    pricingTiers:
      "Lite covers basics for a limited number of clients; Plus and Premium add capacity and features. Check client limits and time tracking inclusion for your tier.",
    costVsCompetitors:
      "FreshBooks sits in the mid-range for invoicing software—more than Wave (free) and Zoho Invoice (free tier), competitive with QuickBooks for invoicing-focused users. Total cost depends on plan and client count.",
    features: [
      "Professional invoices and recurring billing",
      "Time tracking and project billing",
      "Estimates and proposals",
      "Client portal and payment links",
      "Expense tracking",
      "Basic reporting",
    ],
    keyFeatures: [
      { name: "Invoicing", description: "Create and send professional invoices; set up recurring invoices and payment reminders. Multiple templates and branding." },
      { name: "Time tracking", description: "Track time by project and client; convert hours to invoice line items. Helps service businesses bill accurately." },
      { name: "Client portal", description: "Clients can view invoices, pay online, and communicate in one place. Reduces back-and-forth." },
      { name: "Estimates and proposals", description: "Create estimates and proposals; convert to invoices with one click. Supports project-based workflows." },
    ],
    integrations: ["Accounting (QuickBooks, Xero)", "Payment processors", "CRM and productivity apps", "Expense tools"],
    integrationsIntro:
      "FreshBooks connects to accounting software, payment processors, and common productivity tools. If you use QuickBooks or Xero for books, you can sync data.",
    alternatives: [
      { name: "QuickBooks", href: getInvoicingReviewUrl("quickbooks"), description: "Full accounting plus invoicing; better if you need deeper books.", logoSrc: "/Logos/quickbooks.png" },
      { name: "Wave", href: getInvoicingReviewUrl("wave"), description: "Free invoicing and accounting for cost-conscious users.", logoSrc: "/Logos/wave.jpeg" },
      { name: "Zoho Invoice", href: getInvoicingReviewUrl("zoho-invoice"), description: "Good value and automation; strong if you use Zoho.", logoSrc: "/Logos/zoho.jpeg" },
      { name: "Bonsai", href: getInvoicingReviewUrl("bonsai"), description: "Contracts, proposals, and invoicing for freelancers.", logoSrc: "/Logos/bonsai.jpeg" },
    ],
    faqs: [
      { q: "Is FreshBooks good for freelancers?", a: "Yes. FreshBooks is built for freelancers and service businesses: invoicing, time tracking, and client billing in one place. It's one of our top picks for solo pros." },
      { q: "How much does FreshBooks cost?", a: "Plans start around $19/month and go up with client count and features. Check FreshBooks' site for current pricing and limits." },
      { q: "Can FreshBooks do recurring invoices?", a: "Yes. FreshBooks supports recurring invoices so you can automate retainer and subscription billing." },
      { q: "Does FreshBooks integrate with QuickBooks?", a: "Yes. FreshBooks can sync with QuickBooks and other accounting tools so paid invoices flow into your books." },
    ],
    methodology: INVOICING_METHODOLOGY,
    compareLinks: [
      { label: "FreshBooks vs QuickBooks", href: getInvoicingCompareUrl("freshbooks-vs-quickbooks") },
      { label: "FreshBooks vs Wave", href: getInvoicingCompareUrl("freshbooks-vs-wave") },
      { label: "FreshBooks vs Xero", href: getInvoicingCompareUrl("freshbooks-vs-xero") },
    ],
    bestPayrollSoftwareHref: BEST_INVOICING_SOFTWARE_HREF,
    compareHubHref: INVOICING_COMPARE_HUB,
    guideHubHref: INVOICING_GUIDES_HUB,
    guideHubLabel: "Invoicing guides",
    compareSectionTitle: "Compare with other invoicing software",
    compareHubLabel: "Compare invoicing software",
    bestRoundupLabel: "Best invoicing software (2026) — full roundup",
    bestForSectionTitle: "Best invoicing software for different use cases",
    bestForSectionSub: "Find invoicing software by scenario.",
    scenarioLinks: INVOICING_SCENARIO_LINKS,
  },

  quickbooks: {
    toolName: "QuickBooks",
    category: "Invoicing",
    categoryHref: "/invoicing",
    rating: "4.6",
    startingPrice: "$30/mo",
    bestFor: "businesses already using the QuickBooks ecosystem",
    visitUrl: "https://quickbooks.intuit.com",
    logoSrc: "/Logos/quickbooks.png",
    quickVerdict:
      "QuickBooks delivers invoicing plus full accounting in one platform. Best if you already use QuickBooks for your books; otherwise it can be more complex and costly than dedicated invoicing tools.",
    quickVerdictParagraphs: [
      "QuickBooks is the default for many small businesses that want invoicing and accounting in one place. Invoices, payment links, and estimates are built in, and paid invoices flow straight into your accounts. No sync or export.",
      "We like QuickBooks for the connection between invoicing and books—familiar to accountants and bookkeepers. The trade-off is cost and complexity: if you only need invoicing, dedicated tools like FreshBooks or Wave can be simpler and cheaper.",
      "Choose QuickBooks if you're already on the platform or need full accounting plus invoicing. For invoice-only workflows, FreshBooks or Zoho Invoice are often a better fit.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.7", explanation: "Full invoicing plus accounting: reporting, bank feeds, tax prep. Broad feature set." },
      { category: "Pricing", score: "4.2", explanation: "Plans start around $30/month; add-ons increase cost. Can be more than invoice-only users need." },
      { category: "Ease of Use", score: "4.4", explanation: "Familiar to many users; some learning curve for new users. Best when you already know QuickBooks." },
      { category: "Support", score: "4.5", explanation: "Help center, community, and support options. Widely supported by accountants." },
      { category: "Integrations", score: "4.8", explanation: "Extensive ecosystem: payroll, time tracking, ecommerce, and more." },
    ],
    pros: [
      "Invoicing and accounting in one place",
      "Strong reporting and familiarity",
      "Large integration ecosystem",
      "Accountant-friendly",
    ],
    cons: [
      "Can be more complex and expensive than simpler invoicing tools",
      "Overkill for invoice-only needs",
      "Some features locked to higher tiers",
    ],
    bestForEditorial:
      "QuickBooks is best for businesses already using QuickBooks for accounting who want invoicing in the same system. It fits companies that value one platform for books and billing.",
    whoShouldAvoid:
      "Freelancers or small teams that only need invoicing may find QuickBooks heavier and more expensive than FreshBooks or Wave. Consider dedicated invoicing software first.",
    pricingSummary:
      "QuickBooks uses tiered plans starting around $30/month. Invoicing is included; higher tiers add users and advanced reporting. Add-ons for payroll and payment processing increase total cost.",
    pricingTiers:
      "Starter includes invoicing and basics; Plus and Advanced add capacity and features. Compare against your need for accounting vs invoicing-only.",
    costVsCompetitors:
      "QuickBooks is at the upper end for combined invoicing and accounting. More expensive than Wave (free) and Zoho Invoice; competitive with Xero. Value is highest when you use the full accounting stack.",
    features: [
      "Invoicing and payment links",
      "Estimates and quotes",
      "Expense tracking and receipt capture",
      "Bank feeds and reporting",
      "Integrations with payroll and time tracking",
    ],
    keyFeatures: [
      { name: "Invoicing", description: "Create and send invoices; accept payments via link. Integrates with QuickBooks payment processing and others." },
      { name: "Books and reporting", description: "Invoicing ties directly to your chart of accounts and P&L. No separate sync." },
      { name: "Estimates", description: "Create estimates and convert to invoices. Supports project-based billing." },
      { name: "Integrations", description: "Payroll, time tracking, ecommerce, and hundreds of apps via the QuickBooks marketplace." },
    ],
    integrations: ["QuickBooks Payroll", "Time tracking", "Ecommerce", "Payment processors", "Expense apps"],
    integrationsIntro:
      "QuickBooks invoicing sits inside the full QuickBooks ecosystem. If you use QuickBooks for books, everything stays in one place; third-party integrations extend from there.",
    alternatives: [
      { name: "Xero", href: getInvoicingReviewUrl("xero"), description: "Full accounting plus invoicing; strong QuickBooks alternative.", logoSrc: "/Logos/xero.png" },
      { name: "FreshBooks", href: getInvoicingReviewUrl("freshbooks"), description: "Simpler invoicing-focused option for freelancers.", logoSrc: "/Logos/freshbooks.jpeg" },
      { name: "Wave", href: getInvoicingReviewUrl("wave"), description: "Free invoicing and accounting.", logoSrc: "/Logos/wave.jpeg" },
      { name: "Zoho Invoice", href: getInvoicingReviewUrl("zoho-invoice"), description: "Value-focused invoicing and automation.", logoSrc: "/Logos/zoho.jpeg" },
    ],
    faqs: [
      { q: "Is QuickBooks good for invoicing?", a: "Yes. QuickBooks includes full invoicing, estimates, and payment collection. It's especially strong when you also use it for accounting so everything stays in one place." },
      { q: "How much does QuickBooks cost for invoicing?", a: "Plans start around $30/month and include invoicing. Total cost depends on tier and add-ons like payroll or payment processing." },
      { q: "Can I use QuickBooks just for invoicing?", a: "You can, but you may pay for more than you need. If you only need invoicing, FreshBooks or Wave might be simpler and cheaper." },
    ],
    methodology: INVOICING_METHODOLOGY,
    compareLinks: [
      { label: "FreshBooks vs QuickBooks", href: getInvoicingCompareUrl("freshbooks-vs-quickbooks") },
      { label: "QuickBooks vs Wave", href: getInvoicingCompareUrl("quickbooks-vs-wave") },
      { label: "Xero vs QuickBooks", href: getInvoicingCompareUrl("xero-vs-quickbooks") },
    ],
    bestPayrollSoftwareHref: BEST_INVOICING_SOFTWARE_HREF,
    compareHubHref: INVOICING_COMPARE_HUB,
    guideHubHref: INVOICING_GUIDES_HUB,
    guideHubLabel: "Invoicing guides",
    compareSectionTitle: "Compare with other invoicing software",
    compareHubLabel: "Compare invoicing software",
    bestRoundupLabel: "Best invoicing software (2026) — full roundup",
    bestForSectionTitle: "Best invoicing software for different use cases",
    bestForSectionSub: "Find invoicing software by scenario.",
    scenarioLinks: INVOICING_SCENARIO_LINKS,
  },

  wave: {
    toolName: "Wave",
    category: "Invoicing",
    categoryHref: "/invoicing",
    rating: "4.3",
    startingPrice: "Free",
    bestFor: "free invoicing software",
    visitUrl: "https://www.waveapps.com",
    logoSrc: "/Logos/wave.jpeg",
    quickVerdict:
      "Wave offers free invoicing and receipt scanning, making it a practical choice for freelancers and very small businesses that don't need advanced features.",
    quickVerdictParagraphs: [
      "Wave stands out for its free plan: you get professional invoicing, receipt scanning, and basic accounting without a monthly subscription. That's appealing for solos and micro businesses watching costs.",
      "We like Wave for simplicity and price—you can send professional invoices and track payments at no software cost. Payment processing and payroll are paid add-ons. The trade-off is less depth than paid tools: fewer integrations and reporting options.",
      "If you need free invoicing and are okay with a simpler feature set, Wave is a solid default. When you need more, FreshBooks or Zoho Invoice are common upgrades.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.2", explanation: "Solid invoicing and receipt scan; basic reporting. Less depth than paid suites." },
      { category: "Pricing", score: "4.8", explanation: "Free for core invoicing and accounting. Payment processing and payroll are paid add-ons." },
      { category: "Ease of Use", score: "4.5", explanation: "Simple and straightforward. Good for first-time users." },
      { category: "Support", score: "4.2", explanation: "Help center and email support. Fewer options than paid competitors." },
      { category: "Integrations", score: "4.0", explanation: "Fewer third-party integrations than QuickBooks or Xero. Covers basics." },
    ],
    pros: [
      "Free invoicing and receipt scanning",
      "No subscription for core features",
      "Simple and easy to use",
      "Good for freelancers and micro businesses",
    ],
    cons: [
      "Less depth and flexibility than advanced paid tools",
      "Fewer integrations and reporting options",
      "Payments and payroll are paid add-ons",
    ],
    bestForEditorial:
      "Wave is best for businesses that want free invoicing software: professional invoices and basic tracking without a monthly fee. It fits freelancers and very small businesses that don't need advanced reporting or a large integration set.",
    whoShouldAvoid:
      "Businesses that need advanced reporting, heavy integrations, or robust client workflows may prefer a paid tool like FreshBooks or QuickBooks.",
    pricingSummary:
      "Wave's invoicing and accounting are free. Payment processing is per-transaction; payroll is a paid add-on. There's no mandatory subscription for core invoicing.",
    pricingTiers:
      "Core invoicing and receipt scan are free. Wave Payments and Wave Payroll cost extra. Check current pricing for your region.",
    costVsCompetitors:
      "Wave is the only major free option for core invoicing. Paid competitors offer more features; Wave wins on cost for basic needs.",
    features: [
      "Free invoicing",
      "Receipt scanning",
      "Expense tracking",
      "Basic reporting",
      "Payment processing (add-on)",
    ],
    keyFeatures: [
      { name: "Free invoicing", description: "Create and send professional invoices; set up recurring invoices. No subscription for core invoicing." },
      { name: "Receipt scan", description: "Scan and attach receipts to expenses. Keeps records in one place." },
      { name: "Basic reporting", description: "Income and expense reports for tax prep and overview. Less customizable than paid tools." },
      { name: "Payments", description: "Accept payments via Wave Payments (add-on) or link to other processors." },
    ],
    integrations: ["Wave Payments (add-on)", "Wave Payroll (add-on)", "Some third-party apps", "Bank feeds"],
    integrationsIntro:
      "Wave offers its own payment and payroll add-ons. Third-party integration list is smaller than QuickBooks or FreshBooks; sufficient for many very small businesses.",
    alternatives: [
      { name: "FreshBooks", href: getInvoicingReviewUrl("freshbooks"), description: "More features and client workflows; paid.", logoSrc: "/Logos/freshbooks.jpeg" },
      { name: "Zoho Invoice", href: getInvoicingReviewUrl("zoho-invoice"), description: "Free tier and more automation; good value.", logoSrc: "/Logos/zoho.jpeg" },
      { name: "Invoice Ninja", href: getInvoicingReviewUrl("invoice-ninja"), description: "Open-source option with more customization.", logoSrc: "/Logos/invoiceninja.jpeg" },
      { name: "QuickBooks", href: getInvoicingReviewUrl("quickbooks"), description: "Full accounting plus invoicing; paid.", logoSrc: "/Logos/quickbooks.png" },
    ],
    faqs: [
      { q: "Is Wave invoicing really free?", a: "Yes. Wave's core invoicing and receipt scanning are free. Payment processing and payroll are paid add-ons." },
      { q: "What does Wave include for free?", a: "Free features include unlimited invoicing, receipt scanning, expense tracking, and basic reports. Payments and payroll cost extra." },
      { q: "Is Wave good for freelancers?", a: "Yes. Wave is a common choice for freelancers who want free invoicing and simple tracking. For more features, many move to FreshBooks or Zoho Invoice." },
    ],
    methodology: INVOICING_METHODOLOGY,
    compareLinks: [
      { label: "FreshBooks vs Wave", href: getInvoicingCompareUrl("freshbooks-vs-wave") },
      { label: "QuickBooks vs Wave", href: getInvoicingCompareUrl("quickbooks-vs-wave") },
      { label: "Wave vs Zoho Invoice", href: getInvoicingCompareUrl("wave-vs-zoho-invoice") },
    ],
    bestPayrollSoftwareHref: BEST_INVOICING_SOFTWARE_HREF,
    compareHubHref: INVOICING_COMPARE_HUB,
    guideHubHref: INVOICING_GUIDES_HUB,
    guideHubLabel: "Invoicing guides",
    compareSectionTitle: "Compare with other invoicing software",
    compareHubLabel: "Compare invoicing software",
    bestRoundupLabel: "Best invoicing software (2026) — full roundup",
    bestForSectionTitle: "Best invoicing software for different use cases",
    bestForSectionSub: "Find invoicing software by scenario.",
    scenarioLinks: INVOICING_SCENARIO_LINKS,
  },

  "zoho-invoice": {
    toolName: "Zoho Invoice",
    category: "Invoicing",
    categoryHref: "/invoicing",
    rating: "4.4",
    startingPrice: "Free tier",
    bestFor: "value-conscious businesses and Zoho users",
    visitUrl: "https://www.zoho.com/invoice",
    logoSrc: "/Logos/zoho.jpeg",
    quickVerdict:
      "Zoho Invoice delivers strong value with automation, client portal, and a free tier. Best fit for businesses already using Zoho or those comparing cost vs features.",
    quickVerdictParagraphs: [
      "Zoho Invoice offers solid invoicing, automation, and a client portal at a lower price than many competitors. The free tier is generous for light use; paid plans add capacity and features.",
      "We like Zoho Invoice for value and automation—recurring invoices, payment reminders, and project tracking. The strongest fit is when you already use other Zoho products; the ecosystem connects well. Standalone, it's still competitive for cost-conscious teams.",
      "If you want more features than Wave for similar or low cost, or you're in the Zoho ecosystem, Zoho Invoice is a strong choice. For the broadest third-party familiarity, FreshBooks or QuickBooks may be easier for clients and accountants.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.4", explanation: "Good invoicing, automation, client portal, and projects. Strong value for the price." },
      { category: "Pricing", score: "4.6", explanation: "Free tier available; paid plans are affordable. Good cost-to-feature ratio." },
      { category: "Ease of Use", score: "4.4", explanation: "Clear interface; some learning curve for full automation. Well-documented." },
      { category: "Support", score: "4.3", explanation: "Help center and support options. Zoho ecosystem support available." },
      { category: "Integrations", score: "4.5", explanation: "Strong Zoho ecosystem; connectors to accounting and productivity tools." },
    ],
    pros: [
      "Good value and free tier",
      "Automation and client portal",
      "Project and time tracking",
      "Strong if you use Zoho ecosystem",
    ],
    cons: [
      "Strongest fit when already using Zoho products",
      "Less market familiarity than QuickBooks or FreshBooks",
      "Some features vary by plan",
    ],
    bestForEditorial:
      "Zoho Invoice is best for value-conscious businesses and those already using Zoho. It fits teams that want automation, client portal, and project tracking without premium pricing.",
    whoShouldAvoid:
      "Businesses that need the highest market familiarity for clients and accountants might prefer QuickBooks or FreshBooks. Those needing free-only may compare with Wave.",
    pricingSummary:
      "Zoho Invoice has a free tier for limited invoices; paid plans start low and scale by features and volume. Compare limits against your expected invoice volume.",
    pricingTiers:
      "Free tier for light use; paid tiers add invoices, clients, and automation. Check Zoho's site for current limits and pricing.",
    costVsCompetitors:
      "Zoho Invoice is often cheaper than FreshBooks and QuickBooks for comparable features. Competitive with Wave on value; more features than Wave free tier.",
    features: [
      "Invoicing and recurring billing",
      "Client portal and estimates",
      "Project and time tracking",
      "Automation and reminders",
      "Expense tracking",
    ],
    keyFeatures: [
      { name: "Invoicing", description: "Create and send invoices; set up recurring billing and payment reminders. Multiple templates." },
      { name: "Client portal", description: "Clients can view invoices, pay online, and access estimates. Reduces back-and-forth." },
      { name: "Automation", description: "Automate reminders, recurring invoices, and workflows. Saves time for repeat billing." },
      { name: "Projects", description: "Track time and expenses by project; bill from projects. Good for service businesses." },
    ],
    integrations: ["Zoho ecosystem", "Accounting (QuickBooks, Xero)", "Payment gateways", "CRM and productivity"],
    integrationsIntro:
      "Zoho Invoice integrates with other Zoho apps and with QuickBooks, Xero, and payment processors. Ecosystem fit is strongest within Zoho.",
    alternatives: [
      { name: "FreshBooks", href: getInvoicingReviewUrl("freshbooks"), description: "Similar focus on invoicing and clients; different pricing.", logoSrc: "/Logos/freshbooks.jpeg" },
      { name: "Wave", href: getInvoicingReviewUrl("wave"), description: "Free invoicing; simpler feature set.", logoSrc: "/Logos/wave.jpeg" },
      { name: "QuickBooks", href: getInvoicingReviewUrl("quickbooks"), description: "Full accounting plus invoicing; higher cost.", logoSrc: "/Logos/quickbooks.png" },
      { name: "Xero", href: getInvoicingReviewUrl("xero"), description: "Accounting plus invoicing; strong reporting.", logoSrc: "/Logos/xero.png" },
    ],
    faqs: [
      { q: "Is Zoho Invoice free?", a: "Zoho Invoice has a free tier with limits on invoices and clients. Paid plans add capacity and features. Check Zoho's site for current limits." },
      { q: "Does Zoho Invoice integrate with QuickBooks?", a: "Yes. Zoho Invoice can sync with QuickBooks and Xero so you can keep invoicing in Zoho and books elsewhere if needed." },
      { q: "Is Zoho Invoice good for freelancers?", a: "Yes. Zoho Invoice suits freelancers who want good value, automation, and a client portal. The free tier can work for light use." },
    ],
    methodology: INVOICING_METHODOLOGY,
    compareLinks: [
      { label: "Zoho Invoice vs FreshBooks", href: getInvoicingCompareUrl("zoho-invoice-vs-freshbooks") },
      { label: "Wave vs Zoho Invoice", href: getInvoicingCompareUrl("wave-vs-zoho-invoice") },
    ],
    bestPayrollSoftwareHref: BEST_INVOICING_SOFTWARE_HREF,
    compareHubHref: INVOICING_COMPARE_HUB,
    guideHubHref: INVOICING_GUIDES_HUB,
    guideHubLabel: "Invoicing guides",
    compareSectionTitle: "Compare with other invoicing software",
    compareHubLabel: "Compare invoicing software",
    bestRoundupLabel: "Best invoicing software (2026) — full roundup",
    bestForSectionTitle: "Best invoicing software for different use cases",
    bestForSectionSub: "Find invoicing software by scenario.",
    scenarioLinks: INVOICING_SCENARIO_LINKS,
  },

  xero: {
    toolName: "Xero",
    category: "Invoicing",
    categoryHref: "/invoicing",
    rating: "4.5",
    startingPrice: "$15/mo",
    bestFor: "businesses needing invoicing plus broader accounting workflows",
    visitUrl: "https://www.xero.com",
    logoSrc: "/Logos/xero.png",
    quickVerdict:
      "Xero combines invoicing with full accounting, strong reporting, and a large integration ecosystem. Best when you need more than invoice-only.",
    quickVerdictParagraphs: [
      "Xero is a strong choice when you want invoicing and full accounting in one platform. Invoices, quotes, and payments tie into the same books and reports. The interface is clean and the app marketplace is large.",
      "We like Xero for the breadth: invoicing, bank feeds, reporting, and multi-currency on higher tiers. It can be more than invoice-only users need—if you just send invoices and track payments, FreshBooks or Wave might be simpler.",
      "Choose Xero if you need accounting plus invoicing and want an alternative to QuickBooks. For invoice-only workflows, consider FreshBooks or Zoho Invoice.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.6", explanation: "Full invoicing plus accounting: reporting, bank feeds, multi-currency. Broad feature set." },
      { category: "Pricing", score: "4.5", explanation: "Lower entry price than QuickBooks; tiered plans. Add-ons can increase cost." },
      { category: "Ease of Use", score: "4.5", explanation: "Clean, modern interface. Some learning curve for full accounting features." },
      { category: "Support", score: "4.4", explanation: "Help center and support options. Accountant community and partners." },
      { category: "Integrations", score: "4.7", explanation: "Large app marketplace—700+ integrations for payroll, time tracking, ecommerce." },
    ],
    pros: [
      "Invoicing and accounting in one place",
      "Clean UI and strong reporting",
      "Large integration ecosystem",
      "Accountant-friendly",
    ],
    cons: [
      "May be more than invoice-only users need",
      "Learning curve for full feature set",
      "Add-ons and users can increase cost",
    ],
    bestForEditorial:
      "Xero is best for businesses that need invoicing plus full accounting: reporting, bank feeds, and integrations. It fits companies that want one platform for books and billing without the QuickBooks brand.",
    whoShouldAvoid:
      "Solo freelancers who only need simple invoicing may find Xero more than they need. Consider Wave or FreshBooks for a lighter tool.",
    pricingSummary:
      "Xero offers tiered plans starting around $15/month. Invoicing and quotes are included; higher tiers add more invoices, multi-currency, and advanced reporting.",
    pricingTiers:
      "Entry tier covers basics; mid and upper tiers add capacity and features. Check limits on invoices and bills for your volume.",
    costVsCompetitors:
      "Xero often has a lower starting price than QuickBooks. Competitive with FreshBooks and Zoho Invoice. Value is highest when you use both invoicing and accounting.",
    features: [
      "Invoicing and quotes",
      "Bank feeds and reconciliation",
      "Dashboard and reports",
      "Multi-currency (on higher tiers)",
      "700+ integrations",
    ],
    keyFeatures: [
      { name: "Invoicing and quotes", description: "Create and send invoices and quotes; track payments and reminders. Professional templates." },
      { name: "Reporting", description: "P&L, balance sheet, and other reports; export for accountants and tax prep." },
      { name: "Integrations", description: "Connect to payroll, time tracking, ecommerce, and hundreds of apps via the Xero app store." },
      { name: "Bank feeds", description: "Connect bank and credit card accounts; reconcile and keep books in sync." },
    ],
    integrations: ["Payroll", "Time tracking", "Ecommerce", "Expense apps", "Bank feeds", "CRM and project tools"],
    integrationsIntro:
      "Xero's app marketplace includes hundreds of integrations so you can connect invoicing and accounting to the tools you use.",
    alternatives: [
      { name: "QuickBooks", href: getInvoicingReviewUrl("quickbooks"), description: "Market leader; similar breadth. Higher starting price.", logoSrc: "/Logos/quickbooks.png" },
      { name: "FreshBooks", href: getInvoicingReviewUrl("freshbooks"), description: "Invoicing-focused; simpler for freelancers.", logoSrc: "/Logos/freshbooks.jpeg" },
      { name: "Zoho Invoice", href: getInvoicingReviewUrl("zoho-invoice"), description: "Good value and automation.", logoSrc: "/Logos/zoho.jpeg" },
      { name: "Wave", href: getInvoicingReviewUrl("wave"), description: "Free invoicing and accounting.", logoSrc: "/Logos/wave.jpeg" },
    ],
    faqs: [
      { q: "Is Xero good for invoicing?", a: "Yes. Xero includes full invoicing, quotes, and payment collection. It's especially strong when you also use it for accounting so everything stays in one place." },
      { q: "How does Xero compare to QuickBooks for invoicing?", a: "Both offer invoicing plus accounting. Xero often has a lower starting price and a cleaner interface; QuickBooks has broader market familiarity. Compare features and cost for your needs." },
      { q: "Can Xero do recurring invoices?", a: "Yes. Xero supports recurring invoices so you can automate retainer and subscription billing." },
    ],
    methodology: INVOICING_METHODOLOGY,
    compareLinks: [
      { label: "Xero vs QuickBooks", href: getInvoicingCompareUrl("xero-vs-quickbooks") },
      { label: "FreshBooks vs Xero", href: getInvoicingCompareUrl("freshbooks-vs-xero") },
    ],
    bestPayrollSoftwareHref: BEST_INVOICING_SOFTWARE_HREF,
    compareHubHref: INVOICING_COMPARE_HUB,
    guideHubHref: INVOICING_GUIDES_HUB,
    guideHubLabel: "Invoicing guides",
    compareSectionTitle: "Compare with other invoicing software",
    compareHubLabel: "Compare invoicing software",
    bestRoundupLabel: "Best invoicing software (2026) — full roundup",
    bestForSectionTitle: "Best invoicing software for different use cases",
    bestForSectionSub: "Find invoicing software by scenario.",
    scenarioLinks: INVOICING_SCENARIO_LINKS,
  },

  "invoice-ninja": {
    toolName: "Invoice Ninja",
    category: "Invoicing",
    categoryHref: "/invoicing",
    rating: "4.3",
    startingPrice: "Free / paid",
    bestFor: "businesses wanting flexibility and open-source style control",
    visitUrl: "https://www.invoiceninja.com",
    logoSrc: "/Logos/invoiceninja.jpeg",
    quickVerdict:
      "Invoice Ninja offers strong invoicing with customization and an open-source option. Good for teams that want flexibility and developer-friendly control.",
    quickVerdictParagraphs: [
      "Invoice Ninja provides robust invoicing, quotes, and payment tracking with a self-hosted or cloud option. The feature set is deep and customizable, and the open-source angle appeals to teams that want control or to avoid vendor lock-in.",
      "We like Invoice Ninja for flexibility—white-label options, API access, and customization. The trade-off is less mainstream adoption: fewer accountants and clients are familiar with it, and support is more community- and documentation-driven than with FreshBooks or QuickBooks.",
      "Choose Invoice Ninja if you value customization, open-source, or self-hosting. For the broadest familiarity and hand-holding, FreshBooks or QuickBooks may be easier.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.4", explanation: "Deep invoicing, quotes, projects, and automation. Customization and API." },
      { category: "Pricing", score: "4.5", explanation: "Free self-hosted option; paid cloud plans. Good value for the feature set." },
      { category: "Ease of Use", score: "4.2", explanation: "Powerful but can have a steeper learning curve than simpler tools. Good docs." },
      { category: "Support", score: "4.0", explanation: "Documentation and community. Less direct support than commercial leaders." },
      { category: "Integrations", score: "4.3", explanation: "API and integrations available. Ecosystem smaller than QuickBooks or Xero." },
    ],
    pros: [
      "Customization and white-label options",
      "Open-source / self-hosted choice",
      "Deep invoicing and automation",
      "API and developer-friendly",
    ],
    cons: [
      "Less mainstream adoption and support familiarity",
      "Learning curve for full customization",
      "Smaller ecosystem than QuickBooks or FreshBooks",
    ],
    bestForEditorial:
      "Invoice Ninja is best for businesses that want flexibility, customization, or open-source control. It fits teams that value depth and optional self-hosting over mainstream familiarity.",
    whoShouldAvoid:
      "Businesses that need the highest familiarity for clients and accountants might prefer FreshBooks or QuickBooks. Those wanting the simplest setup may prefer Wave.",
    pricingSummary:
      "Invoice Ninja offers a free self-hosted version and paid cloud plans. Cloud pricing is competitive; self-hosted has no ongoing software fee but requires your own server.",
    pricingTiers:
      "Self-hosted is free; cloud plans vary by features and clients. Check Invoice Ninja's site for current options.",
    costVsCompetitors:
      "Invoice Ninja can be very cost-effective, especially with self-hosting. Cloud plans compete with mid-range tools like Zoho Invoice.",
    features: [
      "Invoicing and quotes",
      "Recurring invoices and automation",
      "Projects and time tracking",
      "Client portal",
      "API and integrations",
    ],
    keyFeatures: [
      { name: "Invoicing", description: "Create and send invoices and quotes; recurring billing and automation. Highly customizable." },
      { name: "Projects and time", description: "Track time and expenses by project; bill clients. Good for agencies and contractors." },
      { name: "Client portal", description: "Clients can view invoices, pay, and access documents. White-label option." },
      { name: "API and self-host", description: "API for integrations; self-hosted option for full control and data ownership." },
    ],
    integrations: ["Payment gateways", "Accounting exports", "API for custom integrations", "Zapier and similar"],
    integrationsIntro:
      "Invoice Ninja supports payment gateways, accounting exports, and an API for custom integrations. Ecosystem is smaller than QuickBooks or Xero but flexible.",
    alternatives: [
      { name: "FreshBooks", href: getInvoicingReviewUrl("freshbooks"), description: "Mainstream option with strong support.", logoSrc: "/Logos/freshbooks.jpeg" },
      { name: "Wave", href: getInvoicingReviewUrl("wave"), description: "Free and simple.", logoSrc: "/Logos/wave.jpeg" },
      { name: "Zoho Invoice", href: getInvoicingReviewUrl("zoho-invoice"), description: "Good value and automation.", logoSrc: "/Logos/zoho.jpeg" },
      { name: "Bonsai", href: getInvoicingReviewUrl("bonsai"), description: "Freelancer-focused; contracts and proposals.", logoSrc: "/Logos/bonsai.jpeg" },
    ],
    faqs: [
      { q: "Is Invoice Ninja free?", a: "Invoice Ninja has a free self-hosted version. Cloud plans are paid. Self-hosting requires your own server and maintenance." },
      { q: "Can I self-host Invoice Ninja?", a: "Yes. Invoice Ninja offers a self-hosted option so you can run it on your own infrastructure and keep full control of data." },
      { q: "Is Invoice Ninja good for agencies?", a: "Yes. Invoice Ninja supports projects, time tracking, and client billing—good for agencies. Compare with FreshBooks and HoneyBook for client workflow focus." },
    ],
    methodology: INVOICING_METHODOLOGY,
    compareLinks: [
      { label: "FreshBooks vs Wave", href: getInvoicingCompareUrl("freshbooks-vs-wave") },
      { label: "Zoho Invoice vs FreshBooks", href: getInvoicingCompareUrl("zoho-invoice-vs-freshbooks") },
      { label: "Invoice Ninja vs FreshBooks", href: getInvoicingCompareUrl("invoice-ninja-vs-freshbooks") },
    ],
    bestPayrollSoftwareHref: BEST_INVOICING_SOFTWARE_HREF,
    compareHubHref: INVOICING_COMPARE_HUB,
    guideHubHref: INVOICING_GUIDES_HUB,
    guideHubLabel: "Invoicing guides",
    compareSectionTitle: "Compare with other invoicing software",
    compareHubLabel: "Compare invoicing software",
    bestRoundupLabel: "Best invoicing software (2026) — full roundup",
    bestForSectionTitle: "Best invoicing software for different use cases",
    bestForSectionSub: "Find invoicing software by scenario.",
    scenarioLinks: INVOICING_SCENARIO_LINKS,
  },

  honeybook: {
    toolName: "HoneyBook",
    category: "Invoicing",
    categoryHref: "/invoicing",
    rating: "4.4",
    startingPrice: "Quote",
    bestFor: "client-service businesses and project-based workflows",
    visitUrl: "https://www.honeybook.com",
    logoSrc: "/Logos/honeybook.jpeg",
    quickVerdict:
      "HoneyBook combines proposals, contracts, invoicing, and client workflow in one platform. Best for service businesses that run on projects and client relationships.",
    quickVerdictParagraphs: [
      "HoneyBook is built for creative and service professionals who need more than invoicing: proposals, contracts, scheduling, and client communication in one place. Invoicing is part of a broader client workflow.",
      "We like HoneyBook for the client journey—from first inquiry to contract, invoice, and payment. It's less focused on traditional accounting depth; if you need heavy reporting or full bookkeeping integration, QuickBooks or Xero may be better.",
      "Choose HoneyBook if you run a client-service business and want proposals, contracts, and invoicing in one tool. For simpler invoice-only needs, FreshBooks or Wave may be enough.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.5", explanation: "Strong proposals, contracts, invoicing, and client workflow. Less accounting depth." },
      { category: "Pricing", score: "4.2", explanation: "Subscription pricing; typically quoted. Compare total cost for your workflow." },
      { category: "Ease of Use", score: "4.5", explanation: "Designed for client-facing workflows. Intuitive for service businesses." },
      { category: "Support", score: "4.3", explanation: "Help center and support. Community for creative professionals." },
      { category: "Integrations", score: "4.2", explanation: "Connects to calendars, payment processors, and some accounting tools. Focused on client workflow." },
    ],
    pros: [
      "Proposals, contracts, and invoicing in one place",
      "Client workflow and communication",
      "Good for project-based service businesses",
      "Scheduling and client management",
    ],
    cons: [
      "Less focused on traditional accounting depth",
      "Pricing is typically quote-based",
      "Strongest for client-heavy businesses",
    ],
    bestForEditorial:
      "HoneyBook is best for client-service businesses and project-based workflows: creatives, consultants, and service providers who need proposals, contracts, and invoicing in one platform.",
    whoShouldAvoid:
      "Businesses that need full accounting, heavy reporting, or minimal client management might prefer QuickBooks, Xero, or a simpler invoicing tool like FreshBooks.",
    pricingSummary:
      "HoneyBook uses subscription pricing; plans are typically quoted based on features and usage. Check HoneyBook's site for current pricing and trials.",
    pricingTiers:
      "Plans vary by features—proposals, contracts, invoicing, scheduling, and client capacity. Get a quote for your needs.",
    costVsCompetitors:
      "HoneyBook is positioned for service and creative businesses. Compare with Bonsai and FreshBooks for similar client-workflow focus; compare with QuickBooks if you need more accounting.",
    features: [
      "Proposals and contracts",
      "Invoicing and payment collection",
      "Client communication and scheduling",
      "Project and workflow automation",
    ],
    keyFeatures: [
      { name: "Proposals", description: "Create and send proposals; get client approval and move to contract and invoice. Streamlines the sales-to-payment flow." },
      { name: "Contracts", description: "E-sign contracts and tie them to projects and invoices. Reduces paperwork." },
      { name: "Invoicing", description: "Send invoices and collect payments. Integrated with the rest of the client workflow." },
      { name: "Client management", description: "Keep client communication, scheduling, and projects in one place. Good for repeat clients." },
    ],
    integrations: ["Calendars", "Payment processors", "Some accounting tools", "CRM and marketing"],
    integrationsIntro:
      "HoneyBook connects to calendars, payment processors, and some accounting and marketing tools. Focus is on client workflow rather than deep accounting sync.",
    alternatives: [
      { name: "Bonsai", href: getInvoicingReviewUrl("bonsai"), description: "Similar focus on freelancers; contracts and proposals.", logoSrc: "/Logos/bonsai.jpeg" },
      { name: "FreshBooks", href: getInvoicingReviewUrl("freshbooks"), description: "Invoicing and time tracking; broader accounting option.", logoSrc: "/Logos/freshbooks.jpeg" },
      { name: "QuickBooks", href: getInvoicingReviewUrl("quickbooks"), description: "Full accounting plus invoicing.", logoSrc: "/Logos/quickbooks.png" },
    ],
    faqs: [
      { q: "Is HoneyBook good for freelancers?", a: "Yes. HoneyBook is popular with freelancers and creatives who need proposals, contracts, and invoicing in one place. Compare with Bonsai for a similar focus." },
      { q: "Does HoneyBook do invoicing?", a: "Yes. HoneyBook includes invoicing and payment collection as part of its client workflow. Proposals and contracts feed into invoices." },
      { q: "How does HoneyBook compare to Bonsai?", a: "Both focus on client workflow: proposals, contracts, and invoicing. HoneyBook is strong for creative and service businesses; Bonsai is also freelancer-focused. Compare features and pricing for your workflow." },
    ],
    methodology: INVOICING_METHODOLOGY,
    compareLinks: [
      { label: "FreshBooks vs QuickBooks", href: getInvoicingCompareUrl("freshbooks-vs-quickbooks") },
      { label: "HoneyBook vs Bonsai", href: getInvoicingCompareUrl("honeybook-vs-bonsai") },
    ],
    bestPayrollSoftwareHref: BEST_INVOICING_SOFTWARE_HREF,
    compareHubHref: INVOICING_COMPARE_HUB,
    guideHubHref: INVOICING_GUIDES_HUB,
    guideHubLabel: "Invoicing guides",
    compareSectionTitle: "Compare with other invoicing software",
    compareHubLabel: "Compare invoicing software",
    bestRoundupLabel: "Best invoicing software (2026) — full roundup",
    bestForSectionTitle: "Best invoicing software for different use cases",
    bestForSectionSub: "Find invoicing software by scenario.",
    scenarioLinks: INVOICING_SCENARIO_LINKS,
  },

  bonsai: {
    toolName: "Bonsai",
    category: "Invoicing",
    categoryHref: "/invoicing",
    rating: "4.3",
    startingPrice: "Quote",
    bestFor: "freelancers and solo service businesses",
    visitUrl: "https://www.hellobonsai.com",
    logoSrc: "/Logos/bonsai.jpeg",
    quickVerdict:
      "Bonsai combines proposals, contracts, invoicing, and simple workflow management for freelancers. Good for solos who want one place for client-facing work.",
    quickVerdictParagraphs: [
      "Bonsai is built for freelancers: proposals, contracts, invoicing, and basic project management in one tool. The workflow is straightforward and the focus is on getting from proposal to payment without complexity.",
      "We like Bonsai for simplicity—clear templates and a short learning curve. It's less robust for bigger teams or advanced reporting; if you need heavy project management or full accounting, consider FreshBooks or QuickBooks.",
      "Choose Bonsai if you're a freelancer or solo service business that wants proposals, contracts, and invoicing in one place. For more features or accounting depth, FreshBooks or HoneyBook may be better.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.3", explanation: "Solid proposals, contracts, invoicing. Good for freelancers; less for larger teams." },
      { category: "Pricing", score: "4.2", explanation: "Subscription pricing; often tiered by features. Compare for your use case." },
      { category: "Ease of Use", score: "4.5", explanation: "Simple and focused. Easy for freelancers to adopt." },
      { category: "Support", score: "4.2", explanation: "Help center and support. Community for freelancers." },
      { category: "Integrations", score: "4.0", explanation: "Connects to payment processors and some tools. Smaller ecosystem than leaders." },
    ],
    pros: [
      "Proposals, contracts, and invoicing in one place",
      "Simple workflow for freelancers",
      "Templates and ease of use",
      "Focused on solo and small teams",
    ],
    cons: [
      "Less robust for bigger teams or advanced reporting",
      "Smaller integration set than QuickBooks or FreshBooks",
      "Strongest for freelancer-style workflows",
    ],
    bestForEditorial:
      "Bonsai is best for freelancers and solo service businesses that want proposals, contracts, and invoicing in one simple platform. It fits solos who don't need full accounting or heavy project management.",
    whoShouldAvoid:
      "Businesses that need full accounting, heavy reporting, or large-team collaboration might prefer QuickBooks, Xero, or FreshBooks.",
    pricingSummary:
      "Bonsai uses subscription pricing; plans vary by features such as proposals, contracts, and invoicing. Check Bonsai's site for current pricing.",
    pricingTiers:
      "Plans typically include proposals, contracts, invoicing, and client management. Compare tiers for your workflow.",
    costVsCompetitors:
      "Bonsai is positioned for freelancers. Compare with HoneyBook for similar client workflow; compare with FreshBooks for more accounting and time tracking.",
    features: [
      "Proposals and contracts",
      "Invoicing and payment collection",
      "Client and project management",
      "Time tracking",
    ],
    keyFeatures: [
      { name: "Proposals", description: "Create and send proposals; get client approval. Templates for common freelance services." },
      { name: "Contracts", description: "E-sign contracts and tie them to projects. Reduces back-and-forth." },
      { name: "Invoicing", description: "Send invoices and collect payments. Recurring and one-time options." },
      { name: "Workflow", description: "Simple project and client management so you can track work and billing in one place." },
    ],
    integrations: ["Payment processors", "Calendars", "Some accounting exports"],
    integrationsIntro:
      "Bonsai connects to payment processors and common freelancer tools. Integration set is smaller than QuickBooks or FreshBooks but covers many solo needs.",
    alternatives: [
      { name: "HoneyBook", href: getInvoicingReviewUrl("honeybook"), description: "Similar client workflow; strong for creatives.", logoSrc: "/Logos/honeybook.jpeg" },
      { name: "FreshBooks", href: getInvoicingReviewUrl("freshbooks"), description: "More features and time tracking; good for service businesses.", logoSrc: "/Logos/freshbooks.jpeg" },
      { name: "Wave", href: getInvoicingReviewUrl("wave"), description: "Free invoicing; simpler.", logoSrc: "/Logos/wave.jpeg" },
      { name: "Zoho Invoice", href: getInvoicingReviewUrl("zoho-invoice"), description: "Good value and automation.", logoSrc: "/Logos/zoho.jpeg" },
    ],
    faqs: [
      { q: "Is Bonsai good for freelancers?", a: "Yes. Bonsai is built for freelancers: proposals, contracts, and invoicing in one place. It's a common choice for solos and small service businesses." },
      { q: "Does Bonsai do invoicing?", a: "Yes. Bonsai includes invoicing and payment collection. You can send one-time or recurring invoices and get paid online." },
      { q: "How does Bonsai compare to HoneyBook?", a: "Both focus on client workflow: proposals, contracts, invoicing. Bonsai is strong for freelancers; HoneyBook is also popular with creatives and service businesses. Compare features and pricing." },
    ],
    methodology: INVOICING_METHODOLOGY,
    compareLinks: [
      { label: "FreshBooks vs QuickBooks", href: getInvoicingCompareUrl("freshbooks-vs-quickbooks") },
      { label: "FreshBooks vs Wave", href: getInvoicingCompareUrl("freshbooks-vs-wave") },
      { label: "HoneyBook vs Bonsai", href: getInvoicingCompareUrl("honeybook-vs-bonsai") },
    ],
    bestPayrollSoftwareHref: BEST_INVOICING_SOFTWARE_HREF,
    compareHubHref: INVOICING_COMPARE_HUB,
    guideHubHref: INVOICING_GUIDES_HUB,
    guideHubLabel: "Invoicing guides",
    compareSectionTitle: "Compare with other invoicing software",
    compareHubLabel: "Compare invoicing software",
    bestRoundupLabel: "Best invoicing software (2026) — full roundup",
    bestForSectionTitle: "Best invoicing software for different use cases",
    bestForSectionSub: "Find invoicing software by scenario.",
    scenarioLinks: INVOICING_SCENARIO_LINKS,
  },
};

export function getInvoicingReviewBySlug(slug: string): ReviewData | undefined {
  return reviews[slug];
}

export function getInvoicingReviewSlugs(): string[] {
  return Object.keys(reviews);
}
