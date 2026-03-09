import {
  getAccountingReviewUrl,
  getAccountingCompareUrl,
  getAccountingBestForUrl,
} from "@/lib/routes";
import type { ReviewTemplateProps } from "@/components/reviews/ReviewTemplate";

type ReviewData = Omit<ReviewTemplateProps, "categoryHref"> & { categoryHref: string };

const BEST_ACCOUNTING_SOFTWARE_HREF = "/accounting/best-accounting-software";
const ACCOUNTING_COMPARE_HUB = "/accounting/compare";

/** Scenario / best-for links for accounting review pages (only link to routes that exist or are planned). */
const ACCOUNTING_SCENARIO_LINKS: { label: string; href: string }[] = [
  { label: "Best for freelancers", href: getAccountingBestForUrl("freelancers") },
  { label: "Best for small business", href: getAccountingBestForUrl("small-business") },
  { label: "Best for contractors", href: getAccountingBestForUrl("contractors") },
  { label: "Best for ecommerce", href: getAccountingBestForUrl("ecommerce") },
];

const ACCOUNTING_METHODOLOGY = {
  title: "How we review accounting software",
  sub: "Transparent process, small-business–focused criteria.",
  introParagraph:
    "Our reviews are independent and updated on a regular cadence so you get current pricing and feature information. We evaluate accounting software for invoicing, bookkeeping, reporting, and tax prep.",
  bullets: [
    "We test accounting workflows: invoicing, expense tracking, reporting, and bank reconciliation.",
    "We compare pricing tiers, limits, and add-ons so you can budget accurately.",
    "Reviews are written for small businesses, freelancers, and contractors.",
  ],
};

const reviews: Record<string, ReviewData> = {
  "quickbooks-online": {
    toolName: "QuickBooks Online",
    category: "Accounting",
    categoryHref: "/accounting",
    rating: "4.6",
    startingPrice: "$30/mo",
    bestFor: "small businesses that want established accounting software with broad features",
    visitUrl: "https://quickbooks.intuit.com",
    logoSrc: "/Logos/quickbooks.png",
    quickVerdict:
      "QuickBooks Online remains the go-to accounting choice for many small businesses: strong bookkeeping, reporting, invoicing, and a large integration ecosystem.",
    quickVerdictParagraphs: [
      "QuickBooks Online is our top pick for small businesses that want a full-featured, widely recognized accounting platform. It covers invoicing, expense tracking, bank feeds, P&L and balance sheet reports, and tax-ready exports. The brand is familiar to accountants and bookkeepers, which can simplify handoffs and support.",
      "We like QuickBooks for its depth: you get a broad set of features out of the box, and the app marketplace extends it with payroll, time tracking, and industry-specific tools. Invoicing and payment acceptance are solid, and reporting is strong enough for most small business and contractor needs.",
      "Drawbacks include cost—plans and add-ons can add up—and some complexity for very small or first-time users. If you need the most established name and don't mind paying for it, QuickBooks Online is a strong default.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.7", explanation: "Broad feature set: bookkeeping, invoicing, reporting, bank sync, and a large integration ecosystem. Suitable for most small business accounting needs." },
      { category: "Pricing", score: "4.3", explanation: "Tiered plans from around $30/month; add-ons and higher tiers increase cost. Transparent but can get expensive as needs grow." },
      { category: "Ease of Use", score: "4.5", explanation: "Familiar interface for many users; some learning curve for beginners. Well-documented and widely supported by accountants." },
      { category: "Support", score: "4.5", explanation: "Help center, community, and paid support options. Quality can vary; higher tiers get better access." },
      { category: "Integrations", score: "4.8", explanation: "Extensive app marketplace: payroll, time tracking, ecommerce, and more. Integrates with tools most small businesses already use." },
    ],
    pros: [
      "Strong bookkeeping, reporting, and invoicing in one platform",
      "Wide market familiarity—easy to find accountants who use it",
      "Large integration ecosystem and app marketplace",
      "Tax-ready reports and export for accountants",
      "Regular updates and established vendor support",
    ],
    cons: [
      "Can get expensive with higher tiers and add-ons",
      "Complexity may be more than very small businesses need",
      "Some features locked to higher plans",
    ],
    bestForEditorial:
      "QuickBooks Online is best for small businesses that want established accounting software with broad features: bookkeeping, reporting, invoicing, and integrations. It fits companies that value market familiarity and are willing to pay for depth and ecosystem.",
    whoShouldAvoid:
      "Solo freelancers who only need simple invoicing may find it heavier than necessary. Businesses on a tight budget might prefer a lower-cost or free alternative like Wave or Zoho Books.",
    pricingSummary:
      "QuickBooks Online uses tiered plans starting around $30/month. Higher tiers add more users, advanced reporting, and industry-specific features. Add-ons for payroll, time tracking, and payment processing increase the total cost.",
    pricingTiers:
      "Starter covers basics for one user; Plus adds more users and features; Advanced adds more capacity and advanced reporting. Compare tiers against your user count and reporting needs.",
    costVsCompetitors:
      "QuickBooks sits at the mid-to-upper range for small business accounting. It's more expensive than Wave (free) and Zoho Books, and competitive with Xero and FreshBooks. Total cost depends on plan and add-ons.",
    features: [
      "Invoicing and payment acceptance",
      "Expense tracking and receipt capture",
      "Bank and credit card feeds",
      "P&L, balance sheet, and cash flow reports",
      "Tax-ready reports and accountant access",
      "Integrations with payroll, time tracking, ecommerce",
    ],
    keyFeatures: [
      { name: "Bookkeeping and accounts", description: "Chart of accounts, journal entries, and bank reconciliation keep your books in order and ready for reporting and tax prep." },
      { name: "Invoicing and payments", description: "Create and send invoices, track payments, and accept card and ACH through QuickBooks or linked processors." },
      { name: "Reporting", description: "Profit and loss, balance sheet, and cash flow reports plus customizable reports and export for your accountant." },
      { name: "Integrations", description: "Connect to payroll, time tracking, ecommerce, and other apps via the QuickBooks marketplace." },
    ],
    integrations: ["Payroll (QuickBooks Payroll, Gusto, others)", "Time tracking", "Ecommerce (Shopify, etc.)", "Expense and receipt apps", "Bank feeds"],
    integrationsIntro:
      "QuickBooks connects to a wide range of apps for payroll, time tracking, ecommerce, and expenses. Most small business stacks are supported, so you can keep one set of books.",
    alternatives: [
      { name: "Xero", href: getAccountingReviewUrl("xero"), description: "Strong QuickBooks alternative with clean UI and accountant-friendly features.", logoSrc: "/Logos/xero.png" },
      { name: "FreshBooks", href: getAccountingReviewUrl("freshbooks"), description: "Better fit for freelancers and service businesses; simpler and focused on invoicing.", logoSrc: "/Logos/freshbooks.jpeg" },
      { name: "Zoho Books", href: getAccountingReviewUrl("zoho-books"), description: "Value-focused option with good automation and ecosystem if you use Zoho.", logoSrc: "/Logos/zoho.jpeg" },
      { name: "Wave", href: getAccountingReviewUrl("wave"), description: "Free accounting and invoicing for businesses that don't need advanced features.", logoSrc: "/Logos/wave.jpeg" },
      { name: "Sage Accounting", href: getAccountingReviewUrl("sage-accounting"), description: "Core accounting tools for SMBs; less mindshare than QuickBooks or Xero.", logoSrc: "/Logos/sage.png" },
    ],
    faqs: [
      { q: "Is QuickBooks Online good for small businesses?", a: "Yes. QuickBooks Online is built for small business accounting: invoicing, expenses, reporting, and tax prep in one place. It's widely used and supported by accountants." },
      { q: "How much does QuickBooks Online cost?", a: "Plans start around $30/month and go up with tier and add-ons. Payroll, time tracking, and payment processing can add to the total. Check current pricing on Intuit's site." },
      { q: "What is the difference between QuickBooks Online and QuickBooks Desktop?", a: "QuickBooks Online is cloud-based and works in the browser; Desktop is installed software. Online is the default choice for most small businesses and offers automatic backups and multi-device access." },
      { q: "Does QuickBooks integrate with payroll?", a: "Yes. QuickBooks Payroll integrates natively; other payroll providers like Gusto also integrate so payroll data flows into your books." },
    ],
    methodology: ACCOUNTING_METHODOLOGY,
    compareLinks: [
      { label: "QuickBooks vs Xero", href: getAccountingCompareUrl("quickbooks-vs-xero") },
      { label: "QuickBooks vs FreshBooks", href: getAccountingCompareUrl("quickbooks-vs-freshbooks") },
      { label: "Wave vs QuickBooks", href: getAccountingCompareUrl("wave-vs-quickbooks") },
    ],
    bestPayrollSoftwareHref: BEST_ACCOUNTING_SOFTWARE_HREF,
    compareHubHref: ACCOUNTING_COMPARE_HUB,
    compareSectionTitle: "Compare with other accounting software",
    compareHubLabel: "Compare accounting software",
    bestRoundupLabel: "Best accounting software (2026) — full roundup",
    bestForSectionTitle: "Best accounting software for different use cases",
    bestForSectionSub: "Find accounting software by scenario.",
    scenarioLinks: ACCOUNTING_SCENARIO_LINKS,
  },

  xero: {
    toolName: "Xero",
    category: "Accounting",
    categoryHref: "/accounting",
    rating: "4.5",
    startingPrice: "$15/mo",
    bestFor: "businesses looking for a strong QuickBooks alternative",
    visitUrl: "https://www.xero.com",
    logoSrc: "/Logos/xero.png",
    quickVerdict:
      "Xero is a strong QuickBooks alternative with a clean interface, accountant-friendly workflows, and a large integration ecosystem.",
    quickVerdictParagraphs: [
      "Xero appeals to businesses that want capable cloud accounting without the QuickBooks brand. The UI is clean and modern, and many accountants and bookkeepers are familiar with it. Invoicing, bank feeds, reporting, and multi-currency are solid.",
      "We like Xero for its clarity and the breadth of integrations—hundreds of apps connect for payroll, time tracking, and industry needs. Reporting is strong, and the dashboard gives a good overview of cash flow and receivables.",
      "Some users find a learning curve compared to simpler tools, and add-ons can increase total cost. If you're comparing to QuickBooks and want an alternative with a different feel and strong ecosystem, Xero is a top pick.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.6", explanation: "Full accounting: invoicing, expenses, bank feeds, reporting, and multi-currency. Add-ons extend functionality." },
      { category: "Pricing", score: "4.5", explanation: "Lower entry price than QuickBooks; tiered plans. Add-ons and user limits can increase cost." },
      { category: "Ease of Use", score: "4.5", explanation: "Clean, modern interface. Some learning curve for users new to accounting software." },
      { category: "Support", score: "4.4", explanation: "Help center and support options; community and partners available. Quality generally good." },
      { category: "Integrations", score: "4.7", explanation: "Large app marketplace—700+ integrations for payroll, time tracking, ecommerce, and more." },
    ],
    pros: [
      "Clean, modern UI and dashboard",
      "Accountant-friendly and widely adopted",
      "Strong invoicing and reporting",
      "Large integration ecosystem",
    ],
    cons: [
      "Learning curve for some users",
      "Add-ons and extra users can increase cost",
      "Some features vary by region",
    ],
    bestForEditorial:
      "Xero is best for businesses looking for a strong QuickBooks alternative with a clean interface and solid accounting features. It suits companies that want cloud accounting with good reporting and integrations.",
    whoShouldAvoid:
      "Solo users who want the simplest possible tool might find it more than they need. Businesses that rely heavily on Intuit ecosystem (e.g. TurboTax, QuickBooks Payroll) may prefer staying in QuickBooks.",
    pricingSummary:
      "Xero offers tiered plans starting around $15/month. Higher tiers add more invoices and bills, multi-currency, and other features. Per-user and add-on costs can apply.",
    pricingTiers:
      "Entry tier covers basics; mid and upper tiers add capacity and features like multi-currency and advanced reporting. Check limits on invoices and bills for your volume.",
    costVsCompetitors:
      "Xero often has a lower starting price than QuickBooks; total cost depends on users and add-ons. It's competitive with FreshBooks and Zoho Books for mid-market small business.",
    features: [
      "Invoicing and quotes",
      "Expense and bill management",
      "Bank feeds and reconciliation",
      "Dashboard and reports",
      "Multi-currency (on higher tiers)",
      "700+ integrations",
    ],
    keyFeatures: [
      { name: "Invoicing and quotes", description: "Create and send professional invoices and quotes; track payments and reminders." },
      { name: "Bank feeds and reconciliation", description: "Connect bank and credit card accounts; match transactions and reconcile with a clear workflow." },
      { name: "Reporting", description: "P&L, balance sheet, and other reports; export for accountants and tax prep." },
      { name: "Integrations", description: "Connect to payroll, time tracking, ecommerce, and hundreds of other apps via the Xero app store." },
    ],
    integrations: ["Payroll", "Time tracking", "Ecommerce", "Expense apps", "Bank feeds", "CRM and project tools"],
    integrationsIntro:
      "Xero's app marketplace includes hundreds of integrations so you can connect payroll, time tracking, and other tools to your books.",
    alternatives: [
      { name: "QuickBooks Online", href: getAccountingReviewUrl("quickbooks-online"), description: "Market leader with broad features and ecosystem; higher starting price.", logoSrc: "/Logos/quickbooks.png" },
      { name: "FreshBooks", href: getAccountingReviewUrl("freshbooks"), description: "Freelancer-focused; simpler invoicing and time tracking.", logoSrc: "/Logos/freshbooks.jpeg" },
      { name: "Zoho Books", href: getAccountingReviewUrl("zoho-books"), description: "Value and automation; strong if you use Zoho.", logoSrc: "/Logos/zoho.jpeg" },
      { name: "Wave", href: getAccountingReviewUrl("wave"), description: "Free core accounting and invoicing.", logoSrc: "/Logos/wave.jpeg" },
      { name: "Sage Accounting", href: getAccountingReviewUrl("sage-accounting"), description: "Core accounting for SMBs.", logoSrc: "/Logos/sage.png" },
    ],
    faqs: [
      { q: "Is Xero a good QuickBooks alternative?", a: "Yes. Xero is one of the most popular QuickBooks alternatives, with full accounting features, a clean UI, and a large integration ecosystem. Many accountants support both." },
      { q: "How much does Xero cost?", a: "Xero plans start around $15/month. Cost increases with tier, number of invoices/bills, and add-ons. Check Xero's site for current pricing and limits." },
      { q: "Does Xero have multi-currency?", a: "Multi-currency is available on higher-tier plans. Check your region and plan for availability." },
      { q: "Can my accountant use Xero?", a: "Yes. Xero is widely used by accountants and bookkeepers; many offer Xero-specific support and advisory." },
    ],
    methodology: ACCOUNTING_METHODOLOGY,
    compareLinks: [
      { label: "QuickBooks vs Xero", href: getAccountingCompareUrl("quickbooks-vs-xero") },
      { label: "Xero vs FreshBooks", href: getAccountingCompareUrl("xero-vs-freshbooks") },
      { label: "Zoho Books vs Xero", href: getAccountingCompareUrl("zoho-books-vs-xero") },
    ],
    bestPayrollSoftwareHref: BEST_ACCOUNTING_SOFTWARE_HREF,
    compareHubHref: ACCOUNTING_COMPARE_HUB,
    compareSectionTitle: "Compare with other accounting software",
    compareHubLabel: "Compare accounting software",
    bestRoundupLabel: "Best accounting software (2026) — full roundup",
    bestForSectionTitle: "Best accounting software for different use cases",
    bestForSectionSub: "Find accounting software by scenario.",
    scenarioLinks: ACCOUNTING_SCENARIO_LINKS,
  },

  freshbooks: {
    toolName: "FreshBooks",
    category: "Accounting",
    categoryHref: "/accounting",
    rating: "4.5",
    startingPrice: "$19/mo",
    bestFor: "freelancers and service businesses",
    visitUrl: "https://www.freshbooks.com",
    logoSrc: "/Logos/freshbooks.jpeg",
    quickVerdict:
      "FreshBooks is built for freelancers and service businesses: strong invoicing, time tracking, and client billing in a user-friendly package.",
    quickVerdictParagraphs: [
      "FreshBooks focuses on the needs of freelancers and service-based businesses. Invoicing is straightforward and looks professional; time tracking and expense management tie into client billing. The interface is one of the easiest to get started with.",
      "We like FreshBooks for usability and the way it handles the freelance workflow: track time, log expenses, send invoices, and get paid. Reporting is sufficient for most solos and small teams, though it's less deep than QuickBooks or Xero for complex accounting.",
      "If you're a freelancer or small service business that prioritizes simplicity and client-facing tools over heavy accounting depth, FreshBooks is a strong fit.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.4", explanation: "Strong invoicing, time tracking, and expense management. Less depth than full accounting suites for complex books." },
      { category: "Pricing", score: "4.5", explanation: "Clear tiered pricing; entry tier is affordable for freelancers. Higher tiers add clients and features." },
      { category: "Ease of Use", score: "4.8", explanation: "One of the easiest accounting-style tools to use; minimal learning curve for invoicing and time tracking." },
      { category: "Support", score: "4.5", explanation: "Help center and support; generally responsive. Good for small teams and solos." },
      { category: "Integrations", score: "4.4", explanation: "Integrates with common tools for payments, time tracking, and productivity. Fewer integrations than QuickBooks or Xero." },
    ],
    pros: [
      "Excellent invoicing and client billing",
      "Very user-friendly interface",
      "Time tracking built in and tied to invoicing",
      "Good for freelancers and service businesses",
    ],
    cons: [
      "Less robust for larger or more complex accounting needs",
      "Fewer integrations than QuickBooks or Xero",
      "Reporting depth is more limited",
    ],
    bestForEditorial:
      "FreshBooks is best for freelancers and service businesses that want simple, professional invoicing, time tracking, and expense management. It fits solos and small teams that bill by project or hour.",
    whoShouldAvoid:
      "Businesses that need heavy inventory, multi-entity books, or very advanced reporting may find FreshBooks limiting. Consider QuickBooks or Xero for those use cases.",
    pricingSummary:
      "FreshBooks uses tiered plans starting around $19/month. Plans scale by number of clients and features; time tracking and other tools are included on relevant tiers.",
    pricingTiers:
      "Lite starts with a small client set; Plus and Premium add more clients and features. Compare client limits and included features to your expected volume.",
    costVsCompetitors:
      "FreshBooks is competitively priced for freelancers and small service businesses. It's often more affordable than QuickBooks for solos; compare client limits and features to Wave and Zoho Books.",
    features: [
      "Invoicing and estimates",
      "Time tracking",
      "Expense tracking and receipt capture",
      "Client portal and payments",
      "Basic reporting",
      "Integrations",
    ],
    keyFeatures: [
      { name: "Invoicing", description: "Create and send professional invoices; set up recurring invoices and payment reminders. Client-facing experience is polished." },
      { name: "Time tracking", description: "Track time by project and client; bill hours directly to invoices. Good for freelancers who bill by the hour." },
      { name: "Expenses and receipts", description: "Log expenses and attach receipts; categorize for reports and tie to clients or projects." },
      { name: "Client portal", description: "Clients can view invoices and pay online, reducing back-and-forth and speeding up payment." },
    ],
    integrations: ["Stripe and other payment gateways", "G Suite and productivity tools", "Some payroll and time tracking", "Ecommerce (limited)"],
    integrationsIntro:
      "FreshBooks connects to payment processors, productivity tools, and some payroll and time-tracking apps. The list is smaller than QuickBooks or Xero but covers many freelancer needs.",
    alternatives: [
      { name: "QuickBooks Online", href: getAccountingReviewUrl("quickbooks-online"), description: "Broader accounting features; better for complex books.", logoSrc: "/Logos/quickbooks.png" },
      { name: "Xero", href: getAccountingReviewUrl("xero"), description: "Full accounting with clean UI; more depth than FreshBooks.", logoSrc: "/Logos/xero.png" },
      { name: "Wave", href: getAccountingReviewUrl("wave"), description: "Free invoicing and accounting; simpler feature set.", logoSrc: "/Logos/wave.jpeg" },
      { name: "Zoho Books", href: getAccountingReviewUrl("zoho-books"), description: "Good value and automation; strong Zoho ecosystem fit.", logoSrc: "/Logos/zoho.jpeg" },
    ],
    faqs: [
      { q: "Is FreshBooks good for freelancers?", a: "Yes. FreshBooks is built for freelancers and service businesses: invoicing, time tracking, and client billing are core strengths, and the interface is easy to use." },
      { q: "How much does FreshBooks cost?", a: "Plans start around $19/month and scale by number of clients and features. Time tracking and invoicing are included on relevant tiers. Check FreshBooks' site for current pricing." },
      { q: "Can I track time and invoice it with FreshBooks?", a: "Yes. Time tracking is built in; you can assign time to projects and clients and add it to invoices with a few clicks." },
      { q: "How does FreshBooks compare to QuickBooks?", a: "FreshBooks is simpler and more focused on freelancers and service billing. QuickBooks has broader accounting and reporting; choose FreshBooks for ease of use and client billing, QuickBooks for full books and ecosystem." },
    ],
    methodology: ACCOUNTING_METHODOLOGY,
    compareLinks: [
      { label: "QuickBooks vs FreshBooks", href: getAccountingCompareUrl("quickbooks-vs-freshbooks") },
      { label: "Xero vs FreshBooks", href: getAccountingCompareUrl("xero-vs-freshbooks") },
    ],
    bestPayrollSoftwareHref: BEST_ACCOUNTING_SOFTWARE_HREF,
    compareHubHref: ACCOUNTING_COMPARE_HUB,
    compareSectionTitle: "Compare with other accounting software",
    compareHubLabel: "Compare accounting software",
    bestRoundupLabel: "Best accounting software (2026) — full roundup",
    bestForSectionTitle: "Best accounting software for different use cases",
    bestForSectionSub: "Find accounting software by scenario.",
    scenarioLinks: ACCOUNTING_SCENARIO_LINKS,
  },

  "zoho-books": {
    toolName: "Zoho Books",
    category: "Accounting",
    categoryHref: "/accounting",
    rating: "4.4",
    startingPrice: "$15/mo",
    bestFor: "value-conscious businesses using the Zoho ecosystem",
    visitUrl: "https://www.zoho.com/books",
    logoSrc: "/Logos/zoho.jpeg",
    quickVerdict:
      "Zoho Books offers strong value, good automation, and a client portal—especially compelling if you already use Zoho apps.",
    quickVerdictParagraphs: [
      "Zoho Books fits value-conscious small businesses and those already in the Zoho ecosystem. Pricing is competitive, and you get invoicing, expenses, projects, inventory, and a client portal. Automation features help reduce data entry.",
      "We like Zoho Books for the combination of price and features: you get a lot for the monthly cost, and the fit is even better if you use Zoho CRM, Mail, or other Zoho products. Reporting and compliance tools are solid for small business.",
      "The main caveat is that the experience is strongest when you're already in Zoho. If you're not, compare workflow and integrations to QuickBooks and Xero to ensure your stack is supported.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.5", explanation: "Invoicing, expenses, projects, client portal, and automation. Good depth for the price." },
      { category: "Pricing", score: "4.7", explanation: "Competitive pricing; strong value for the feature set. Lower cost than many competitors." },
      { category: "Ease of Use", score: "4.4", explanation: "Clear interface; automation reduces manual work. Best experience within Zoho ecosystem." },
      { category: "Support", score: "4.3", explanation: "Help center and support; adequate for small business. Community and docs available." },
      { category: "Integrations", score: "4.4", explanation: "Integrates with Zoho suite and many third-party apps. Ecosystem fit matters." },
    ],
    pros: [
      "Strong value and competitive pricing",
      "Good automation and workflow features",
      "Client portal and project tracking",
      "Fits Zoho ecosystem well",
    ],
    cons: [
      "Best fit improves if you already use Zoho products",
      "Less market familiarity than QuickBooks or Xero",
      "Some advanced features vary by plan",
    ],
    bestForEditorial:
      "Zoho Books is best for value-conscious businesses and those using the Zoho ecosystem. It suits companies that want solid accounting, automation, and portal features without paying a premium.",
    whoShouldAvoid:
      "Businesses that rely heavily on non-Zoho tools with limited integration may find the ecosystem less ideal. Those who need the most widely recognized brand for accountant handoff might prefer QuickBooks or Xero.",
    pricingSummary:
      "Zoho Books has tiered plans starting around $15/month. You get a lot of features for the price; higher tiers add users and capacity.",
    pricingTiers:
      "Plans scale by number of users and features like projects and inventory. Compare limits to your team size and workflow.",
    costVsCompetitors:
      "Zoho Books is often cheaper than QuickBooks and competitive with Xero and FreshBooks. It's a strong value pick, especially with Zoho bundle pricing.",
    features: [
      "Invoicing and estimates",
      "Expense and bill management",
      "Projects and time tracking",
      "Client portal",
      "Inventory (on higher tiers)",
      "Automation and workflows",
    ],
    keyFeatures: [
      { name: "Invoicing and client portal", description: "Create invoices and estimates; clients can view and pay through a portal. Reduces back-and-forth and speeds payment." },
      { name: "Automation", description: "Workflow automation for recurring invoices, reminders, and approvals. Cuts down manual data entry." },
      { name: "Projects", description: "Track time and expenses by project; bill clients from projects. Good for agencies and service businesses." },
      { name: "Zoho ecosystem", description: "Integrates with Zoho CRM, Mail, and other Zoho apps for a unified stack." },
    ],
    integrations: ["Zoho CRM, Mail, and other Zoho apps", "Payment gateways", "Bank feeds", "Ecommerce and productivity tools"],
    integrationsIntro:
      "Zoho Books connects to the rest of the Zoho suite and to many third-party apps. If you're already on Zoho, the integration story is straightforward.",
    alternatives: [
      { name: "QuickBooks Online", href: getAccountingReviewUrl("quickbooks-online"), description: "Broader market familiarity and ecosystem.", logoSrc: "/Logos/quickbooks.png" },
      { name: "Xero", href: getAccountingReviewUrl("xero"), description: "Clean UI and large app marketplace.", logoSrc: "/Logos/xero.png" },
      { name: "FreshBooks", href: getAccountingReviewUrl("freshbooks"), description: "Freelancer-focused; simpler setup.", logoSrc: "/Logos/freshbooks.jpeg" },
      { name: "Wave", href: getAccountingReviewUrl("wave"), description: "Free option; fewer features.", logoSrc: "/Logos/wave.jpeg" },
    ],
    faqs: [
      { q: "Is Zoho Books good for small business?", a: "Yes. Zoho Books is aimed at small businesses and offers invoicing, expenses, projects, and reporting at a competitive price. It's especially strong if you use other Zoho products." },
      { q: "How much does Zoho Books cost?", a: "Plans start around $15/month and scale with users and features. Check Zoho's site for current pricing and limits." },
      { q: "Does Zoho Books integrate with Zoho CRM?", a: "Yes. Zoho Books integrates with Zoho CRM and other Zoho apps so you can keep sales and accounting in one ecosystem." },
      { q: "How does Zoho Books compare to QuickBooks?", a: "Zoho Books is typically cheaper and fits the Zoho ecosystem; QuickBooks has wider market familiarity and a larger third-party app marketplace. Choose by budget and tool stack." },
    ],
    methodology: ACCOUNTING_METHODOLOGY,
    compareLinks: [
      { label: "Zoho Books vs Xero", href: getAccountingCompareUrl("zoho-books-vs-xero") },
      { label: "QuickBooks vs Zoho Books", href: getAccountingCompareUrl("quickbooks-vs-zoho-books") },
    ],
    bestPayrollSoftwareHref: BEST_ACCOUNTING_SOFTWARE_HREF,
    compareHubHref: ACCOUNTING_COMPARE_HUB,
    compareSectionTitle: "Compare with other accounting software",
    compareHubLabel: "Compare accounting software",
    bestRoundupLabel: "Best accounting software (2026) — full roundup",
    bestForSectionTitle: "Best accounting software for different use cases",
    bestForSectionSub: "Find accounting software by scenario.",
    scenarioLinks: ACCOUNTING_SCENARIO_LINKS,
  },

  wave: {
    toolName: "Wave",
    category: "Accounting",
    categoryHref: "/accounting",
    rating: "4.3",
    startingPrice: "Free",
    bestFor: "businesses wanting free accounting software",
    visitUrl: "https://www.waveapps.com",
    logoSrc: "/Logos/wave.jpeg",
    quickVerdict:
      "Wave offers free accounting and invoicing, making it a practical choice for very small businesses and freelancers who don't need advanced features.",
    quickVerdictParagraphs: [
      "Wave stands out for its free plan: you get invoicing, expense tracking, and basic bookkeeping without a monthly subscription. That's appealing for solos and micro businesses watching costs.",
      "We like Wave for simplicity and price—you can run basic books and send professional invoices at no software cost. Receipt scanning and bank feeds are available. The trade-off is less depth than paid tools: reporting and integrations are more limited.",
      "If you need free accounting and are okay with a simpler feature set, Wave is a solid default. When you outgrow it, migrating to QuickBooks or Xero is a common path.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.2", explanation: "Solid basics: invoicing, expenses, receipt scan, bank feeds. Less depth than paid accounting suites." },
      { category: "Pricing", score: "4.8", explanation: "Free for core accounting and invoicing. Paid add-ons for payments and payroll; no mandatory subscription." },
      { category: "Ease of Use", score: "4.5", explanation: "Simple and straightforward. Good for first-time users and minimal accounting needs." },
      { category: "Support", score: "4.2", explanation: "Help center and email support. Fewer support options than paid competitors." },
      { category: "Integrations", score: "4.0", explanation: "Fewer integrations than QuickBooks or Xero. Covers basics; advanced stacks may need workarounds." },
    ],
    pros: [
      "Free plan for accounting and invoicing",
      "Simple bookkeeping and receipt capture",
      "No subscription required for core features",
      "Good for freelancers and micro businesses",
    ],
    cons: [
      "Limited depth compared with paid tools",
      "Fewer integrations and reporting options",
      "Payments and payroll are paid add-ons",
    ],
    bestForEditorial:
      "Wave is best for businesses that want free accounting software: invoicing, expense tracking, and basic bookkeeping without a monthly fee. It fits solos and very small businesses that don't need advanced reporting or a large integration set.",
    whoShouldAvoid:
      "Businesses that need advanced reporting, heavy integrations, or multi-entity books will likely need a paid tool like QuickBooks or Xero.",
    pricingSummary:
      "Wave's accounting and invoicing are free. Payment processing and payroll are paid add-ons. There's no mandatory subscription for core features.",
    pricingTiers:
      "Core accounting and invoicing are free. Add-ons include Wave Payments (per-transaction) and Wave Payroll (subscription). Check current pricing for your country.",
    costVsCompetitors:
      "Wave is the only major free option for core accounting and invoicing. Paid competitors offer more features and integrations; Wave wins on cost for basic needs.",
    features: [
      "Free invoicing",
      "Expense tracking and receipt scan",
      "Bank and credit card feeds",
      "Basic reporting",
      "Payment processing (add-on)",
      "Payroll (add-on)",
    ],
    keyFeatures: [
      { name: "Free invoicing", description: "Create and send professional invoices; set up recurring invoices. No subscription for core invoicing." },
      { name: "Expense tracking", description: "Track expenses and scan receipts; categorize for basic reports. Keeps records in one place." },
      { name: "Bank feeds", description: "Connect bank and credit card accounts; import and categorize transactions for bookkeeping." },
      { name: "Simple reporting", description: "P&L and other basic reports for tax prep and overview. Less customizable than paid tools." },
    ],
    integrations: ["Bank feeds", "Payment processing (Wave)", "Some third-party apps", "Payroll (Wave)"],
    integrationsIntro:
      "Wave offers bank feeds and its own payment and payroll add-ons. Third-party integration list is smaller than QuickBooks or Xero; sufficient for many very small businesses.",
    alternatives: [
      { name: "QuickBooks Online", href: getAccountingReviewUrl("quickbooks-online"), description: "More features and integrations; paid.", logoSrc: "/Logos/quickbooks.png" },
      { name: "Xero", href: getAccountingReviewUrl("xero"), description: "Full accounting with more depth; paid.", logoSrc: "/Logos/xero.png" },
      { name: "FreshBooks", href: getAccountingReviewUrl("freshbooks"), description: "Freelancer-focused; paid with stronger time tracking.", logoSrc: "/Logos/freshbooks.jpeg" },
      { name: "Zoho Books", href: getAccountingReviewUrl("zoho-books"), description: "Low-cost paid option with more features.", logoSrc: "/Logos/zoho.jpeg" },
    ],
    faqs: [
      { q: "Is Wave really free?", a: "Yes. Wave's accounting and invoicing features are free. Payment processing and payroll are paid add-ons. There's no subscription required for core bookkeeping and invoicing." },
      { q: "What does Wave include for free?", a: "Free features include unlimited invoicing, expense tracking, receipt scanning, and bank feeds. Basic reports are included. Payments and payroll cost extra." },
      { q: "How does Wave make money?", a: "Wave charges for payment processing (per transaction) and for Wave Payroll. The free accounting and invoicing attract users who may add those paid services." },
      { q: "Is Wave good for freelancers?", a: "Yes. Wave is a common choice for freelancers who want free invoicing and simple bookkeeping. When you need more features or integrations, many move to FreshBooks or QuickBooks." },
    ],
    methodology: ACCOUNTING_METHODOLOGY,
    compareLinks: [
      { label: "Wave vs QuickBooks", href: getAccountingCompareUrl("wave-vs-quickbooks") },
      { label: "Wave vs FreshBooks", href: getAccountingCompareUrl("wave-vs-freshbooks") },
    ],
    bestPayrollSoftwareHref: BEST_ACCOUNTING_SOFTWARE_HREF,
    compareHubHref: ACCOUNTING_COMPARE_HUB,
    compareSectionTitle: "Compare with other accounting software",
    compareHubLabel: "Compare accounting software",
    bestRoundupLabel: "Best accounting software (2026) — full roundup",
    bestForSectionTitle: "Best accounting software for different use cases",
    bestForSectionSub: "Find accounting software by scenario.",
    scenarioLinks: ACCOUNTING_SCENARIO_LINKS,
  },

  "sage-accounting": {
    toolName: "Sage Accounting",
    category: "Accounting",
    categoryHref: "/accounting",
    rating: "4.3",
    startingPrice: "Quote",
    bestFor: "small businesses needing core accounting tools",
    visitUrl: "https://www.sage.com/en-us/products/sage-business-cloud-accounting",
    logoSrc: "/Logos/sage.png",
    quickVerdict:
      "Sage Accounting provides core accounting tools for small businesses, with familiar bookkeeping and invoicing—though it has less momentum than QuickBooks or Xero in the US market.",
    quickVerdictParagraphs: [
      "Sage Accounting (Sage Business Cloud Accounting) offers invoicing, expense management, and reporting for small businesses. It's a recognized name in accounting software, especially in certain regions and industries.",
      "We like Sage for solid basics: you get real accounting, not just invoicing, and the product is familiar to many accountants. The downside is less mindshare and ecosystem buzz than QuickBooks or Xero in the US, so integrations and community support can feel thinner.",
      "If you're already considering Sage or need a straightforward accounting option with a known brand, it's worth a look. Otherwise, QuickBooks and Xero often have more third-party support and comparison content.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.3", explanation: "Core bookkeeping, invoicing, and reporting. Solid for small business basics; fewer bells and whistles than top competitors." },
      { category: "Pricing", score: "4.2", explanation: "Pricing often by quote; varies by region and plan. Competitive but less transparent than some rivals." },
      { category: "Ease of Use", score: "4.3", explanation: "Straightforward for basic accounting. Some users find the experience less polished than Xero or QuickBooks." },
      { category: "Support", score: "4.3", explanation: "Support available; quality and options vary by region and plan." },
      { category: "Integrations", score: "4.2", explanation: "Integrations exist but ecosystem is smaller than QuickBooks or Xero in many markets." },
    ],
    pros: [
      "Core bookkeeping and invoicing",
      "Recognized brand; many accountants know Sage",
      "SMB-focused and compliant",
    ],
    cons: [
      "Less momentum and mindshare than QuickBooks or Xero",
      "Pricing often by quote rather than transparent tiers",
      "Smaller app ecosystem in some regions",
    ],
    bestForEditorial:
      "Sage Accounting is best for small businesses that need core accounting tools—bookkeeping, invoicing, and reporting—and are comfortable with a recognized brand that has less US-focused buzz than QuickBooks or Xero.",
    whoShouldAvoid:
      "Businesses that want the largest ecosystem of integrations and community support may prefer QuickBooks or Xero. Those who need the simplest possible setup might look at FreshBooks or Wave.",
    pricingSummary:
      "Sage Accounting pricing often varies by region and is sometimes quoted. Check Sage's site or a partner for current plans and pricing in your area.",
    pricingTiers:
      "Plans and pricing differ by product and region. Compare features and support to QuickBooks and Xero for your location.",
    costVsCompetitors:
      "Sage can be competitive on price; direct comparison is harder because pricing is often quote-based. Feature-for-feature, QuickBooks and Xero usually have more visible comparison content and integrations.",
    features: [
      "Invoicing and estimates",
      "Expense and bill management",
      "Bank feeds and reconciliation",
      "Reporting",
      "Multi-currency (varies by plan)",
    ],
    keyFeatures: [
      { name: "Bookkeeping basics", description: "Chart of accounts, bank feeds, and reconciliation for day-to-day books." },
      { name: "Invoicing", description: "Create and send invoices; track payments and reminders." },
      { name: "Reporting", description: "Financial reports for management and tax prep; export for accountants." },
      { name: "Compliance", description: "Sage products are built for compliance and audit trails; familiar to many accountants." },
    ],
    integrations: ["Bank feeds", "Some payroll and productivity apps", "Sage ecosystem products"],
    integrationsIntro:
      "Sage Accounting connects to banks and selected third-party apps. The integration list is smaller than QuickBooks or Xero in many markets.",
    alternatives: [
      { name: "QuickBooks Online", href: getAccountingReviewUrl("quickbooks-online"), description: "Larger ecosystem and more US-focused content.", logoSrc: "/Logos/quickbooks.png" },
      { name: "Xero", href: getAccountingReviewUrl("xero"), description: "Strong alternative with large app marketplace.", logoSrc: "/Logos/xero.png" },
      { name: "FreshBooks", href: getAccountingReviewUrl("freshbooks"), description: "Simpler and freelancer-focused.", logoSrc: "/Logos/freshbooks.jpeg" },
      { name: "Zoho Books", href: getAccountingReviewUrl("zoho-books"), description: "Good value and automation.", logoSrc: "/Logos/zoho.jpeg" },
      { name: "Wave", href: getAccountingReviewUrl("wave"), description: "Free option for basic needs.", logoSrc: "/Logos/wave.jpeg" },
    ],
    faqs: [
      { q: "What is Sage Accounting?", a: "Sage Accounting (Sage Business Cloud Accounting) is cloud-based accounting software for small businesses. It covers invoicing, expenses, bank feeds, and reporting." },
      { q: "How much does Sage Accounting cost?", a: "Pricing often varies by region and is sometimes quoted. Check Sage's website or a local partner for current plans." },
      { q: "Is Sage Accounting good for small business?", a: "Yes. Sage Accounting is aimed at small businesses and provides core accounting tools. It's a recognized brand, though QuickBooks and Xero have more visibility in the US." },
      { q: "How does Sage compare to QuickBooks?", a: "Both offer small business accounting. QuickBooks has a larger US ecosystem and more third-party integrations; Sage is strong in certain regions and with accountants who already use Sage." },
    ],
    methodology: ACCOUNTING_METHODOLOGY,
    compareLinks: [
      { label: "Sage vs QuickBooks", href: getAccountingCompareUrl("sage-vs-quickbooks") },
      { label: "Sage vs Xero", href: getAccountingCompareUrl("sage-vs-xero") },
    ],
    bestPayrollSoftwareHref: BEST_ACCOUNTING_SOFTWARE_HREF,
    compareHubHref: ACCOUNTING_COMPARE_HUB,
    compareSectionTitle: "Compare with other accounting software",
    compareHubLabel: "Compare accounting software",
    bestRoundupLabel: "Best accounting software (2026) — full roundup",
    bestForSectionTitle: "Best accounting software for different use cases",
    bestForSectionSub: "Find accounting software by scenario.",
    scenarioLinks: ACCOUNTING_SCENARIO_LINKS,
  },
};

export function getAccountingReviewBySlug(slug: string): ReviewData | undefined {
  return reviews[slug];
}

export function getAccountingReviewSlugs(): string[] {
  return Object.keys(reviews);
}
