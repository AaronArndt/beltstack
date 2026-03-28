"use client";

import Link from "next/link";
import {
  HubPageTemplate,
  type FeaturedPickRef,
  type ComparisonTableRow,
  type FaqItem,
} from "@/components/hubs/HubPageTemplate";
import { getPaymentProcessingReviewUrl } from "@/lib/routes";
import { listSoftwarePicksBySlugs, toHubComparisonTableRow } from "@/lib/data/softwarePickCards";
import { HubEditorialUseCaseSection } from "@/components/hubs/HubEditorialUseCaseSection";
import { HubGuidesGrid } from "@/components/hubs/HubGuidesGrid";
import {
  PAYMENT_PROCESSING_HUB_GUIDES,
  PAYMENT_PROCESSING_HUB_POPULAR_COMPARISONS,
  PAYMENT_PROCESSING_USE_CASE_EDITORIAL,
} from "@/lib/data/paymentProcessingHubData";
import { getPaymentProcessingComparisonBySlug } from "@/lib/data/paymentProcessingComparisons";
import { BEST_FOR_BY_TRADE } from "@/lib/data/paymentProcessingBestPaymentProcessingSoftware";

const KEY_TAKEAWAYS = [
  { label: "Best online + Billing spine: Stripe", anchor: "#pick-stripe" },
  { label: "Best field + invoice simplicity: Square", anchor: "#pick-square" },
  { label: "Best wallet checkout: PayPal Business", anchor: "#pick-paypal-business" },
  { label: "Best Shopify-native checkout: Shopify Payments", anchor: "#pick-shopify-payments" },
];

const TOP_PICK_REFS: FeaturedPickRef[] = [
  { slug: "stripe" },
  { slug: "square" },
  { slug: "paypal-business" },
  { slug: "shopify-payments" },
];

const TABLE_ROWS: ComparisonTableRow[] = listSoftwarePicksBySlugs("payment-processing", [
  "stripe",
  "square",
  "paypal-business",
  "shopify-payments",
  "helcim",
  "stax",
  "authorize-net",
  "clover",
]).map(toHubComparisonTableRow);

const BEST_FOR_SCENARIOS = [
  { label: "Best payment processing software (roundup)", href: "/payment-processing/best-payment-processing-software" },
  { label: "Compare payment processing software", href: "/payment-processing/compare" },
  { label: "Payment processing guides", href: "/payment-processing/guides" },
  ...BEST_FOR_BY_TRADE,
];

const METHODOLOGY_BULLETS = [
  "We evaluate processors for card-present, invoicing, and online checkout as service businesses really use them—not generic retail demos.",
  "We compare effective rates, hardware, and reconciliation with accounting—not headline percentages alone.",
  "We map tools to contractor workflows: deposits, change orders, memberships, and chargeback documentation.",
];

const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

function IntroExtended() {
  return (
    <>
      <p>
        Payment processing software moves money from homeowners’ cards into your bank—whether techs tap a reader on site, the office emails an invoice link, or your website collects a deposit. Start with our{" "}
        <Link href="/payment-processing/best-payment-processing-software" className={linkGreen}>
          best payment processing software roundup
        </Link>
        , explore{" "}
        <Link href="/payment-processing/best-for/contractors" className={linkGreen}>
          payment processing for contractors
        </Link>
        , and read{" "}
        <Link href="/payment-processing/guides/how-payment-processing-works" className={linkGreen}>
          how payment processing works
        </Link>
        . Send invoices and accept payments through our{" "}
        <Link href="/invoicing" className={linkGreen}>
          invoicing software hub
        </Link>
        , accept in-person payments with{" "}
        <Link href="/pos" className={linkGreen}>
          POS software
        </Link>
        , track customers and jobs in your{" "}
        <Link href="/crm" className={linkGreen}>
          CRM
        </Link>
        , take web bookings via{" "}
        <Link href="/website-builders" className={linkGreen}>
          website builders
        </Link>
        , and send payment reminders through{" "}
        <Link href="/email-marketing" className={linkGreen}>
          email marketing
        </Link>
        .
      </p>
      <p>
        Narrow further with{" "}
        <Link href="/payment-processing/best-for/small-business" className={linkGreen}>
          best payment processing for small business
        </Link>{" "}
        and{" "}
        <Link href="/payment-processing/best-for/hvac" className={linkGreen}>
          HVAC payment picks
        </Link>
        , then study fees in{" "}
        <Link href="/payment-processing/guides/credit-card-processing-fees-explained" className={linkGreen}>
          credit card processing fees explained
        </Link>{" "}
        and{" "}
        <Link href="/payment-processing/guides/stripe-vs-square-fees" className={linkGreen}>
          Stripe vs Square fees
        </Link>
        , and walk the decision in{" "}
        <Link href="/payment-processing/guides/how-to-choose-a-payment-processor" className={linkGreen}>
          how to choose a payment processor
        </Link>
        .
      </p>
    </>
  );
}

function GuidesSection() {
  return (
    <HubGuidesGrid
      sectionTitle="Payment processing guides"
      sectionSub="Economics and operations—not sales brochures."
      intro={<>These guides explain fees, channels, and trade workflows before you sign ISO paperwork.</>}
      guides={PAYMENT_PROCESSING_HUB_GUIDES}
      footer={
        <>
          Read our reviews:{" "}
          <Link href={getPaymentProcessingReviewUrl("stripe")} className={linkGreen}>
            Stripe
          </Link>
          ,{" "}
          <Link href={getPaymentProcessingReviewUrl("square")} className={linkGreen}>
            Square
          </Link>
          ,{" "}
          <Link href={getPaymentProcessingReviewUrl("paypal-business")} className={linkGreen}>
            PayPal Business
          </Link>
          .{" "}
          <Link href="/payment-processing/guides" className={linkGreen}>
            All payment processing guides →
          </Link>
        </>
      }
    />
  );
}

function PopularComparisonsSection() {
  const cards = PAYMENT_PROCESSING_HUB_POPULAR_COMPARISONS.map((item) => {
    const data = getPaymentProcessingComparisonBySlug(item.slug);
    return data ? { slug: item.slug, href: item.href, data } : null;
  }).filter(Boolean) as {
    slug: string;
    href: string;
    data: NonNullable<ReturnType<typeof getPaymentProcessingComparisonBySlug>>;
  }[];

  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">Popular Payment Processing Comparisons</h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#57534E] text-sm sm:text-base">Side-by-side pricing context, scenarios, and recommendations.</p>
      </div>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ slug, href, data }) => {
          const title = `${data.productA.name} vs ${data.productB.name}`;
          const summary =
            data.summaryParagraph.length > 140 ? data.summaryParagraph.slice(0, 140).trim() + "…" : data.summaryParagraph;
          return (
            <Link
              key={slug}
              href={href}
              className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
            >
              <div className="flex items-center gap-3">
                {data.productA.logoSrc ? (
                  <img
                    src={data.productA.logoSrc}
                    alt=""
                    className="h-10 w-auto max-w-[80px] object-contain object-left"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <span className="flex h-10 min-w-[60px] items-center text-sm font-medium text-[#57534E]">{data.productA.name}</span>
                )}
                <span className="text-[#57534E] text-lg font-medium" aria-hidden>
                  vs
                </span>
                {data.productB.logoSrc ? (
                  <img
                    src={data.productB.logoSrc}
                    alt=""
                    className="h-10 w-auto max-w-[80px] object-contain object-left"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <span className="flex h-10 min-w-[60px] items-center text-sm font-medium text-[#57534E]">{data.productB.name}</span>
                )}
              </div>
              <h3 className="mt-3 text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">{title}</h3>
              <p className="mt-1 text-[#57534E] text-sm leading-relaxed line-clamp-3">{summary}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">Compare →</span>
            </Link>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-[#57534E]">
        <Link href="/payment-processing/compare" className={linkGreen}>
          View all payment processing comparisons →
        </Link>
      </p>
    </>
  );
}

function HowToChooseSection() {
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">How to Choose Payment Processing Software</h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#57534E] text-sm sm:text-base">Channels, fees, and reconciliation—not buzzwords.</p>
      </div>
      <p className="mt-1 text-[#57534E] text-sm leading-relaxed max-w-3xl">
        Use the{" "}
        <Link href="#compare" className={linkGreen}>
          comparison table
        </Link>
        , then{" "}
        <a href="#by-scenario" className={linkGreen}>
          scenario picks
        </a>{" "}
        when you know your trade—or{" "}
        <a href="#payroll-guides" className={linkGreen}>
          guides
        </a>{" "}
        for fee fundamentals first. Our{" "}
        <Link href="/payment-processing/best-payment-processing-software" className={linkGreen}>
          full rankings
        </Link>{" "}
        and{" "}
        <Link href="/payment-processing/compare" className={linkGreen}>
          comparison hub
        </Link>{" "}
        round out vendor research.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:gap-8">
        <ul className="space-y-2.5 text-sm text-[#57534E]">
          <li>
            <strong className="text-[#1A2D48]">Card-present vs online</strong> — Match the processor to where dollars actually enter; split stacks only with policy.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Effective rate discipline</strong> — Export statements monthly; marketing percentages lie politely.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Invoicing alignment</strong> — Line items and job IDs should flow to receipts your bookkeeper recognizes.
          </li>
        </ul>
        <ul className="space-y-2.5 text-sm text-[#57534E]">
          <li>
            <strong className="text-[#1A2D48]">Hardware reality</strong> — Budget readers, chargers, and replacement cycles—not only software seats.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Stripe vs Square</strong> — Start with our{" "}
            <Link href="/payment-processing/compare/stripe-vs-square" className={linkGreen}>
              Stripe vs Square
            </Link>{" "}
            comparison for channel-based choice.
          </li>
          <li>
            <strong className="text-[#1A2D48]">POS depth</strong> — Counter-heavy retail may need our{" "}
            <Link href="/pos" className={linkGreen}>
              POS hub
            </Link>{" "}
            beyond a lone reader.
          </li>
        </ul>
      </div>
    </>
  );
}

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is payment processing for contractors?",
    a: "The combination of card readers, invoicing links, and online checkout that lets trades collect deposits and final balances—with fees, payouts, and chargebacks managed by a processor and bank partners.",
  },
  {
    q: "Stripe or Square for service businesses?",
    a: "Stripe when websites, portals, or subscriptions dominate; Square when trucks and counters swipe most revenue. See our comparison for pricing and scenario detail.",
  },
  {
    q: "How much do payment processors charge?",
    a: "Typically a percentage plus fixed fee per successful charge, with different rates for card-present, keyed, and online. Compute effective rate from statements, not ads.",
  },
  {
    q: "What is the cheapest payment processor?",
    a: "The one with the lowest net deposits for your actual mix after refunds, disputes, and monthly fees—often revealed only after 60–90 days of live volume.",
  },
  {
    q: "Do I need separate tools for invoicing?",
    a: "Often yes—pair processors with invoicing or field software so documents and payment status stay aligned; see our invoicing hub.",
  },
  {
    q: "How does payment processing connect to CRM?",
    a: "CRM should show paid vs owed by job; processors move money—integrate both so sales and finance share one timeline.",
  },
];

export default function PaymentProcessingHubPage() {
  return (
    <HubPageTemplate
      title="Payment Processing Software for Local Service Businesses (2026)"
      intro="Compare card-present, invoicing, and online checkout for contractors and home services—pricing clarity, hardware fit, and reconciliation with accounting."
      breadcrumbLabel="Payment Processing"
      keyTakeaways={KEY_TAKEAWAYS}
      softwarePickCategory="payment-processing"
      featuredPicks={TOP_PICK_REFS}
      featuredPicksTitle="Top payment processing picks"
      featuredPicksSub="Hand-picked for service businesses. Updated regularly."
      comparisonTable={{
        title: "Compare payment processing software",
        subtitle: "Side-by-side pricing and fit.",
        rows: TABLE_ROWS,
        detailsLinkBase: "/payment-processing/review/",
      }}
      comparisonTableIntro="Use the table below to compare pricing, ratings, and standout strengths across popular payment processors."
      introExtended={<IntroExtended />}
      howToChooseSection={<HowToChooseSection />}
      guidesSection={<GuidesSection />}
      scenarioCustomContent={
        <HubEditorialUseCaseSection
          sectionTitle="Best payment processing by use case"
          sectionSub="Channels and economics—not generic feature grids."
          intro={<>Pick by where money enters: field swipes, invoice links, or ecommerce checkout.</>}
          blocks={PAYMENT_PROCESSING_USE_CASE_EDITORIAL}
        />
      }
      popularComparisonsSection={<PopularComparisonsSection />}
      bestRoundupBlock={{
        title: "Best Payment Processing Software Overall",
        description: "Rankings, deep dives, and trade-offs across online, mobile, and countertop stacks.",
        linkText: "See full rankings →",
        href: "/payment-processing/best-payment-processing-software",
      }}
      featuredPicksRankingsLink={{ label: "See full rankings →", href: "/payment-processing/best-payment-processing-software" }}
      comparisonTableRankingsLink={{ label: "See our full rankings →", href: "/payment-processing/best-payment-processing-software" }}
      scenarioLinks={{
        sectionTitle: "Best payment processing by scenario",
        sectionSub: "Roundup, comparisons, guides, and trade entry points.",
        links: BEST_FOR_SCENARIOS,
        highlightFirstLink: true,
      }}
      tradeLinks={{
        sectionTitle: "Payment processing by business type",
        sectionSub: "Scenario picks for trades and operating models.",
        links: BEST_FOR_BY_TRADE,
      }}
      faqItems={FAQ_ITEMS}
      faqTitle="Payment processing FAQs"
      faqSub="Quick answers to common questions."
      methodology={{
        title: "How we review payment processing software",
        sub: "Transparent criteria focused on local operators.",
        introParagraph: "Our reviews are independent and updated on a regular cadence so you get current pricing signals and workflow fit.",
        bullets: METHODOLOGY_BULLETS,
      }}
    />
  );
}
