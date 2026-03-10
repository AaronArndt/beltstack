"use client";

import Link from "next/link";
import { useState } from "react";
import {
  HubPageTemplate,
  type FeaturedPick,
  type ComparisonTableRow,
  type FaqItem,
} from "@/components/hubs/HubPageTemplate";

// ——— Invoicing placeholder routes ———
const INVOICING_REVIEW_BASE = "/invoicing/review";
const INVOICING_COMPARE_BASE = "/invoicing/compare";
const INVOICING_GUIDES_BASE = "/invoicing/guides";
const INVOICING_BEST_FOR_BASE = "/invoicing/best-for";

// ——— Hero & key takeaways ———
const KEY_TAKEAWAYS = [
  { label: "Best overall invoicing software: FreshBooks", anchor: "#pick-freshbooks" },
  { label: "Best free invoicing software: Wave", anchor: "#pick-wave" },
  { label: "Best for QuickBooks users: QuickBooks", anchor: "#pick-quickbooks" },
  { label: "Best value invoicing software: Zoho Invoice", anchor: "#pick-zoho-invoice" },
];

const TOP_PICKS: FeaturedPick[] = [
  {
    slug: "freshbooks",
    name: "FreshBooks",
    badge: "Best overall",
    descriptor: "Invoicing, time tracking, and expense management built for freelancers and service businesses.",
    rating: "4.5",
    price: "$19/mo",
    features: ["Professional invoices", "Recurring billing", "Time tracking"],
    reviewHref: `${INVOICING_REVIEW_BASE}/freshbooks`,
    compareHref: `${INVOICING_COMPARE_BASE}/freshbooks-vs-quickbooks`,
    logoSrc: "/Logos/freshbooks.jpeg",
    visitUrl: "https://www.freshbooks.com",
  },
  {
    slug: "quickbooks",
    name: "QuickBooks",
    badge: "Best for QuickBooks users",
    descriptor: "Invoicing inside QuickBooks for businesses already on the platform.",
    rating: "4.6",
    price: "$30/mo",
    features: ["Integrated with QB books", "Payment links", "Estimates"],
    reviewHref: `${INVOICING_REVIEW_BASE}/quickbooks`,
    compareHref: `${INVOICING_COMPARE_BASE}/freshbooks-vs-quickbooks`,
    logoSrc: "/Logos/quickbooks.png",
    visitUrl: "https://quickbooks.intuit.com",
  },
  {
    slug: "wave",
    name: "Wave",
    badge: "Best free",
    descriptor: "Free invoicing and receipt scanning for small businesses and freelancers.",
    rating: "4.3",
    price: "Free",
    features: ["Free invoicing", "Receipt scan", "Payment processing"],
    reviewHref: `${INVOICING_REVIEW_BASE}/wave`,
    compareHref: `${INVOICING_COMPARE_BASE}/freshbooks-vs-wave`,
    logoSrc: "/Logos/wave.jpeg",
    visitUrl: "https://www.waveapps.com",
  },
  {
    slug: "zoho-invoice",
    name: "Zoho Invoice",
    badge: "Best value",
    descriptor: "Affordable invoicing with projects, client portal, and automation.",
    rating: "4.4",
    price: "Free tier",
    features: ["Invoicing", "Projects", "Client portal"],
    reviewHref: `${INVOICING_REVIEW_BASE}/zoho-invoice`,
    compareHref: `${INVOICING_COMPARE_BASE}/zoho-invoice-vs-freshbooks`,
    logoSrc: "/Logos/zoho.jpeg",
    visitUrl: "https://www.zoho.com/invoice",
  },
  {
    slug: "xero",
    name: "Xero",
    badge: "Best for growing teams",
    descriptor: "Cloud invoicing and quoting with strong accounting integration.",
    rating: "4.5",
    price: "$15/mo",
    features: ["Invoicing & quotes", "Dashboard", "700+ integrations"],
    reviewHref: `${INVOICING_REVIEW_BASE}/xero`,
    compareHref: `${INVOICING_COMPARE_BASE}/xero-vs-quickbooks`,
    logoSrc: "/Logos/xero.png",
    visitUrl: "https://www.xero.com",
  },
];

const TABLE_ROWS: ComparisonTableRow[] = [
  { tool: "FreshBooks", bestFor: "Freelancers & service businesses", price: "$19/mo", rating: "4.5", slug: "freshbooks", logoSrc: "/Logos/freshbooks.jpeg" },
  { tool: "QuickBooks", bestFor: "QuickBooks ecosystem", price: "$30/mo", rating: "4.6", slug: "quickbooks", logoSrc: "/Logos/quickbooks.png" },
  { tool: "Wave", bestFor: "Free invoicing", price: "Free", rating: "4.3", slug: "wave", logoSrc: "/Logos/wave.jpeg" },
  { tool: "Zoho Invoice", bestFor: "Value & projects", price: "Free tier", rating: "4.4", slug: "zoho-invoice", logoSrc: "/Logos/zoho.jpeg" },
  { tool: "Xero", bestFor: "Accounting integration", price: "$15/mo", rating: "4.5", slug: "xero", logoSrc: "/Logos/xero.png" },
  { tool: "Invoice Ninja", bestFor: "Self-hosted & open source", price: "Free / paid", rating: "4.3", slug: "invoice-ninja", logoSrc: "/Logos/invoiceninja.jpeg" },
  { tool: "HoneyBook", bestFor: "Creative professionals", price: "Quote", rating: "4.4", slug: "honeybook", logoSrc: "/Logos/honeybook.jpeg" },
  { tool: "Bonsai", bestFor: "Freelancers & contracts", price: "Quote", rating: "4.3", slug: "bonsai", logoSrc: "/Logos/bonsai.jpeg" },
];

const INVOICING_GUIDES = [
  { title: "How Invoicing Software Works", href: `${INVOICING_GUIDES_BASE}/how-invoicing-software-works`, description: "What invoicing software does, from creating invoices to payment collection and reporting." },
  { title: "Best Invoicing Software for Freelancers", href: `${INVOICING_GUIDES_BASE}/best-invoicing-software-for-freelancers`, description: "Choosing invoicing tools that fit solo pros and project-based billing." },
  { title: "Invoicing Software vs Accounting Software", href: `${INVOICING_GUIDES_BASE}/invoicing-software-vs-accounting-software`, description: "When to use invoicing-only tools versus full accounting software." },
  { title: "How to Choose Invoicing Software", href: `${INVOICING_GUIDES_BASE}/how-to-choose-invoicing-software`, description: "Key factors: recurring billing, payment processing, and integrations." },
  { title: "Recurring Invoicing Explained", href: `${INVOICING_GUIDES_BASE}/recurring-invoicing-explained`, description: "How recurring invoices and subscription billing work in invoicing tools." },
];

const BEST_FOR_SCENARIOS = [
  { label: "Best invoicing software (roundup)", href: "/invoicing/best-invoicing-software" },
  { label: "Compare invoicing software", href: "/invoicing/compare" },
  { label: "Invoicing guides", href: "/invoicing/guides" },
  { label: "Freelancers", href: `${INVOICING_BEST_FOR_BASE}/freelancers` },
  { label: "Small business", href: `${INVOICING_BEST_FOR_BASE}/small-business` },
  { label: "Agencies", href: `${INVOICING_BEST_FOR_BASE}/agencies` },
  { label: "Contractors", href: `${INVOICING_BEST_FOR_BASE}/contractors` },
  { label: "Consultants", href: `${INVOICING_BEST_FOR_BASE}/consultants` },
];

const BY_INDUSTRY = [
  { label: "Landscaping", href: `${INVOICING_BEST_FOR_BASE}/landscaping` },
  { label: "Electricians", href: `${INVOICING_BEST_FOR_BASE}/electricians` },
  { label: "Plumbing", href: `${INVOICING_BEST_FOR_BASE}/plumbing` },
  { label: "Consultants", href: `${INVOICING_BEST_FOR_BASE}/consultants` },
  { label: "Agencies", href: `${INVOICING_BEST_FOR_BASE}/agencies` },
];

const BY_INDUSTRY_GROUPS = [
  { groupLabel: "By trade", links: BY_INDUSTRY.slice(0, 3) },
  { groupLabel: "By business type", links: BY_INDUSTRY.slice(3) },
];

const RELATED_COMPARISONS = [
  { label: "FreshBooks vs QuickBooks", href: `${INVOICING_COMPARE_BASE}/freshbooks-vs-quickbooks` },
  { label: "FreshBooks vs Wave", href: `${INVOICING_COMPARE_BASE}/freshbooks-vs-wave` },
  { label: "QuickBooks vs Wave", href: `${INVOICING_COMPARE_BASE}/quickbooks-vs-wave` },
  { label: "Zoho Invoice vs FreshBooks", href: `${INVOICING_COMPARE_BASE}/zoho-invoice-vs-freshbooks` },
  { label: "Xero vs QuickBooks", href: `${INVOICING_COMPARE_BASE}/xero-vs-quickbooks` },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is the best invoicing software for small businesses?",
    a: "FreshBooks is our top pick for most small businesses and freelancers: it combines professional invoicing, recurring billing, time tracking, and payment collection in one place. QuickBooks fits businesses already on the platform; Wave is the best free option.",
  },
  {
    q: "What is the best free invoicing software?",
    a: "Wave offers free invoicing and receipt scanning with no subscription. Zoho Invoice has a free tier for limited invoices. Both are suitable for freelancers and very small teams; paid plans add more features and payment processing.",
  },
  {
    q: "Do freelancers need invoicing software?",
    a: "Yes. Invoicing software helps freelancers create professional invoices, track sent and paid invoices, set up recurring billing for retainers, and accept online payments. It reduces admin work and keeps records in one place.",
  },
  {
    q: "What is the difference between invoicing software and accounting software?",
    a: "Invoicing software focuses on creating and sending invoices, tracking payments, and sometimes estimates and time tracking. Accounting software includes that plus full bookkeeping, P&L and balance sheet reports, bank feeds, and tax prep. Many accounting products (e.g. QuickBooks, Xero) include strong invoicing; standalone invoicing tools are lighter and often cheaper.",
  },
  {
    q: "Can invoicing software accept online payments?",
    a: "Yes. Most invoicing tools let you accept card and ACH payments via payment links or embedded buttons. Some use built-in payment processing; others integrate with Stripe, PayPal, or similar. Check fees and supported methods when comparing.",
  },
];

const METHODOLOGY_BULLETS = [
  "We test invoicing workflows: creating invoices, recurring billing, estimates, and payment collection.",
  "We compare pricing tiers, payment processing fees, and integrations with accounting tools.",
  "Reviews are written for freelancers, small businesses, agencies, and contractors.",
];

// ——— Section components (match payroll/accounting hubs) ———
const linkGreen = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

function HubSectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub != null && sub.length > 0 && <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

function InvoicingIntroExtended() {
  return (
    <p>
      Invoicing software helps businesses create invoices, track payments, manage recurring billing, and stay organized without relying on spreadsheets. This page compares the best invoicing tools for different business types and workflows.
    </p>
  );
}

function InvoicingHowToChooseSection() {
  return (
    <>
      <HubSectionTitle sub="Key factors when evaluating invoicing tools">
        How to Choose Invoicing Software
      </HubSectionTitle>
      <p className="mt-1 text-[#6E6E6E] text-sm leading-relaxed max-w-3xl">
        Invoicing software helps you send professional invoices, get paid faster, and track what’s owed. This page is for <Link href={`${INVOICING_BEST_FOR_BASE}/freelancers`} className={linkGreen}>freelancers</Link>, <Link href={`${INVOICING_BEST_FOR_BASE}/small-business`} className={linkGreen}>small businesses</Link>, <Link href={`${INVOICING_BEST_FOR_BASE}/agencies`} className={linkGreen}>agencies</Link>, and <Link href={`${INVOICING_BEST_FOR_BASE}/contractors`} className={linkGreen}>contractors</Link>. For a curated shortlist see our <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link> roundup; use the <Link href="/invoicing/compare" className={linkGreen}>comparison table</Link>, <Link href={`${INVOICING_GUIDES_BASE}/how-invoicing-software-works`} className={linkGreen}>guides</Link>, and scenario picks below.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:gap-8">
        <ul className="space-y-2.5 text-sm text-[#6E6E6E]">
          <li><strong className="text-[#1A2D48]">Freelancer vs team workflows</strong> — Solo pros often need simple invoicing and time tracking; teams may need approval flows, client portals, and project billing.</li>
          <li><strong className="text-[#1A2D48]">Recurring billing</strong> — Retainers and subscriptions need recurring invoices. See our <Link href={`${INVOICING_GUIDES_BASE}/recurring-invoicing-explained`} className={linkGreen}>recurring invoicing</Link> guide.</li>
          <li><strong className="text-[#1A2D48]">Estimates and proposals</strong> — Many tools turn estimates into invoices with one click. Helpful for project-based work and agencies.</li>
        </ul>
        <ul className="space-y-2.5 text-sm text-[#6E6E6E]">
          <li><strong className="text-[#1A2D48]">Payment processing</strong> — Accept card and ACH online; compare fees and supported methods. <Link href={`${INVOICING_GUIDES_BASE}/how-invoicing-software-works`} className={linkGreen}>How invoicing software works</Link>.</li>
          <li><strong className="text-[#1A2D48]">Integrations with accounting</strong> — If you use QuickBooks, Xero, or other books, check that your invoicing tool syncs or that you need full accounting instead. <Link href={`${INVOICING_GUIDES_BASE}/invoicing-software-vs-accounting-software`} className={linkGreen}>Invoicing vs accounting</Link>.</li>
          <li><strong className="text-[#1A2D48]">Reporting and price</strong> — Basic reporting (aged receivables, revenue) and clear pricing matter. <Link href={`${INVOICING_GUIDES_BASE}/how-to-choose-invoicing-software`} className={linkGreen}>How to choose invoicing software</Link>.</li>
        </ul>
      </div>
    </>
  );
}

function InvoicingGuidesSection() {
  return (
    <>
      <HubSectionTitle sub="Guides to choosing and using invoicing software.">
        Invoicing Guides
      </HubSectionTitle>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {INVOICING_GUIDES.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
          >
            <h3 className="text-[#1A2D48] text-lg font-bold hover:text-[#10B981]">{guide.title}</h3>
            <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed line-clamp-2">{guide.description}</p>
            <span className="mt-3 text-sm font-semibold text-[#10B981]">Read guide →</span>
          </Link>
        ))}
      </div>
      <p className="mt-5 text-sm text-[#6E6E6E]">
        Read our full reviews:{" "}
        <Link href={`${INVOICING_REVIEW_BASE}/freshbooks`} className={linkGreen}>FreshBooks</Link>,{" "}
        <Link href={`${INVOICING_REVIEW_BASE}/quickbooks`} className={linkGreen}>QuickBooks</Link>,{" "}
        <Link href={`${INVOICING_REVIEW_BASE}/wave`} className={linkGreen}>Wave</Link>,{" "}
        <Link href={`${INVOICING_REVIEW_BASE}/zoho-invoice`} className={linkGreen}>Zoho Invoice</Link>,{" "}
        <Link href={`${INVOICING_REVIEW_BASE}/xero`} className={linkGreen}>Xero</Link>,{" "}
        <Link href={`${INVOICING_REVIEW_BASE}/invoice-ninja`} className={linkGreen}>Invoice Ninja</Link>,{" "}
        <Link href={`${INVOICING_REVIEW_BASE}/honeybook`} className={linkGreen}>HoneyBook</Link>,{" "}
        <Link href={`${INVOICING_REVIEW_BASE}/bonsai`} className={linkGreen}>Bonsai</Link>.
      </p>
    </>
  );
}

function InvoicingPopularComparisonsSection() {
  return (
    <>
      <HubSectionTitle sub="Side-by-side feature and pricing comparisons.">
        Popular Invoicing Comparisons
      </HubSectionTitle>
      <div className="mt-4 flex flex-wrap items-center gap-2.5">
        {RELATED_COMPARISONS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#1A2D48] transition-all hover:border-[#1A2D48] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <p className="mt-3 text-sm text-[#6E6E6E]">
        <Link href="/invoicing/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded">
          View all invoicing comparisons →
        </Link>
      </p>
    </>
  );
}

const btnPrimary =
  "rounded-lg bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const selectClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-[#1A2D48] focus:border-slate-300 focus:ring-1 focus:ring-slate-200 focus:outline-none";

function InvoicingFinderForm() {
  const [businessType, setBusinessType] = useState("");
  const [teamSize, setTeamSize] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4 pb-2">
      <div className="flex-1">
        <label htmlFor="invoicing-business-type" className="block text-sm font-semibold text-[#1A2D48]">
          Business type
        </label>
        <select
          id="invoicing-business-type"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          className={`mt-1 ${selectClass}`}
        >
          <option value="">Select</option>
          <option value="freelancer">Freelancer</option>
          <option value="agency">Agency</option>
          <option value="contractor">Contractor</option>
          <option value="small-business">Small business</option>
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="invoicing-team-size" className="block text-sm font-semibold text-[#1A2D48]">
          Team size
        </label>
        <select
          id="invoicing-team-size"
          value={teamSize}
          onChange={(e) => setTeamSize(e.target.value)}
          className={`mt-1 ${selectClass}`}
        >
          <option value="">Select</option>
          <option value="solo">Solo</option>
          <option value="2-5">2–5</option>
          <option value="6-20">6–20</option>
          <option value="21+">21+</option>
        </select>
      </div>
      <button type="submit" className={btnPrimary}>
        See results
      </button>
    </form>
  );
}

function InvoicingEducationSection() {
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">What small businesses should look for in invoicing software</h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">What matters when small businesses and freelancers choose invoicing tools.</p>
      </div>
      <div className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Simplicity and speed</h3>
            <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed">
              Good invoicing software lets you create and send professional invoices quickly. Look for templates, recurring invoice options, and a clear view of what’s sent, viewed, and paid.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Recurring billing and payment collection</h3>
            <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed">
              Recurring invoices automate retainer and subscription billing. Payment collection—card and ACH via link or button—reduces follow-up and gets you paid faster. Compare fees and supported methods.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Invoice customization and client portals</h3>
            <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed">
              Custom branding, line items, and payment terms make invoices look professional. Client portals let clients view invoices and pay online without extra back-and-forth.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Integrations with accounting software</h3>
            <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed">
              If you use QuickBooks, Xero, or other accounting tools, check that your invoicing software syncs so paid invoices flow into your books. Some businesses prefer all-in-one accounting with built-in invoicing.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-[#1A2D48] text-lg font-semibold">Key features checklist</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#6E6E6E]">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Professional invoice templates
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Recurring invoices
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Online payment collection
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Estimates and proposals
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Client portal
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Integrations (accounting, time tracking)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default function InvoicingPage() {
  return (
    <HubPageTemplate
      title="Best Invoicing Software for Small Businesses (2026)"
      intro="Compare invoicing tools for freelancers, agencies, contractors, and small businesses."
      breadcrumbLabel="Invoicing"
      keyTakeaways={KEY_TAKEAWAYS}
      featuredPicks={TOP_PICKS}
      featuredPicksTitle="Top invoicing picks"
      featuredPicksSub="Hand-picked for freelancers and small businesses. Updated monthly."
      comparisonTable={{
        title: "Compare invoicing software",
        subtitle: "Side-by-side pricing and fit.",
        rows: TABLE_ROWS,
        detailsLinkBase: `${INVOICING_REVIEW_BASE}/`,
      }}
      comparisonTableIntro="Use the table below to compare pricing, ratings, and standout features across popular invoicing platforms."
      introExtended={<InvoicingIntroExtended />}
      howToChooseSection={<InvoicingHowToChooseSection />}
      guidesSection={<InvoicingGuidesSection />}
      popularComparisonsSection={<InvoicingPopularComparisonsSection />}
      bestRoundupBlock={{
        title: "Best Invoicing Software Overall",
        description: "View our full rankings of the best invoicing software for freelancers, small businesses, and service-based teams.",
        linkText: "See full rankings →",
        href: "/invoicing/best-invoicing-software",
      }}
      featuredPicksRankingsLink={{ label: "See full rankings →", href: "/invoicing/best-invoicing-software" }}
      comparisonTableRankingsLink={{ label: "See our full rankings →", href: "/invoicing/best-invoicing-software" }}
      scenarioLinks={{
        sectionTitle: "Best invoicing software by use case",
        sectionSub: "Find invoicing software that fits your situation.",
        description: "Choose a use case to see our top picks.",
        links: BEST_FOR_SCENARIOS,
        highlightFirstLink: true,
      }}
      tradeLinks={{
        sectionTitle: "Invoicing by industry / business type",
        sectionSub: "Invoicing recommendations by trade and business type.",
        links: BY_INDUSTRY,
        groups: BY_INDUSTRY_GROUPS,
      }}
      faqItems={FAQ_ITEMS}
      faqTitle="Invoicing software FAQs"
      faqSub="Quick answers to common questions."
      methodology={{
        title: "How we review invoicing software",
        sub: "Transparent process, small-business–focused criteria.",
        introParagraph: "Our reviews are independent and updated on a regular cadence so you get current pricing and feature information.",
        bullets: METHODOLOGY_BULLETS,
      }}
      finderSection={{
        title: "Find the right invoicing fit",
        sub: "Narrow down by business type and team size.",
        content: <InvoicingFinderForm />,
      }}
      educationSection={<InvoicingEducationSection />}
    />
  );
}
