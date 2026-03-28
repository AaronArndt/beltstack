import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar } from "@/components/guides/GuideSidebar";
import { RelatedPaymentProcessingResources } from "@/components/guides/RelatedPaymentProcessingResources";
import { PAYMENT_PROCESSING_GUIDE_SIDEBAR_ITEMS } from "@/lib/data/paymentProcessingGuideSidebar";
import {
  getPaymentProcessingBestForUrl,
  getPaymentProcessingCompareUrl,
  getPaymentProcessingReviewUrl,
} from "@/lib/routes";

const href = "/payment-processing/guides/how-to-choose-a-payment-processor";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const bc = "text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";
const link =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const FAQ_ITEMS = [
  {
    q: "What should I decide first?",
    a: "Where money enters: field readers, invoices, website checkout, or recurring billing. Match the processor to that truth before comparing logos.",
  },
  {
    q: "How do I compare quotes fairly?",
    a: "Use the same historical 90-day volume file, same split of present vs not-present, and include hardware, software, and instant transfer fees.",
  },
  {
    q: "When do I need POS vs a reader only?",
    a: "Counters with tips, inventory, or complex discounts usually need our POS hub; many single-truck ops do not.",
  },
  {
    q: "How important are integrations?",
    a: "Critical—if payouts do not reconcile to QuickBooks or Xero without manual CSV work, the stack will fail no matter how cheap the percentage.",
  },
  {
    q: "Should I enable PayPal too?",
    a: "If A/B tests show completion lift for your customers—otherwise avoid extra rails that complicate reconciliation.",
  },
  {
    q: "What is the cheapest payment processor?",
    a: "Whichever minimizes net deposits after all fees and losses—verify empirically, not from sales decks.",
  },
];

const RELATED_RESOURCES_ITEMS = [
  { label: "Best Payment Processing Software", href: "/payment-processing/best-payment-processing-software" },
  { label: "Payment Processing Comparisons", href: "/payment-processing/compare" },
  { label: "How Payment Processing Works", href: "/payment-processing/guides/how-payment-processing-works" },
  { label: "Stripe vs Square Fees", href: "/payment-processing/guides/stripe-vs-square-fees" },
  { label: "Stripe Review", href: getPaymentProcessingReviewUrl("stripe") },
  { label: "Square Review", href: getPaymentProcessingReviewUrl("square") },
  { label: "Best for Contractors", href: getPaymentProcessingBestForUrl("contractors") },
  { label: "POS Software Hub", href: "/pos" },
];

export default function HowToChooseAPaymentProcessorPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li>
                      <Link href="/" className={bc}>
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/payment-processing" className={bc}>
                        Payment Processing
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/payment-processing/guides" className={bc}>
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      How to Choose a Payment Processor
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How to Choose a Payment Processor
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    A practical checklist for service businesses: channels, hardware, reserves, accounting sync, and the effective rate you should track every month.
                  </p>
                  <GuideLastUpdated date="March 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The right processor is the one that fits how you actually collect money—field swipes, emailed invoices, website checkout, or subscriptions—not the one with the catchiest homepage. Start from volume and entry method, then layer compliance,
                      support, and accounting sync.
                    </p>
                    <p>
                      Use our{" "}
                      <Link href="/payment-processing/best-payment-processing-software" className={link}>
                        best payment processing software
                      </Link>{" "}
                      roundup,{" "}
                      <Link href={getPaymentProcessingBestForUrl("contractors")} className={link}>
                        contractors scenario picks
                      </Link>
                      , and{" "}
                      <Link href={getPaymentProcessingCompareUrl("stripe-vs-square")} className={link}>
                        Stripe vs Square
                      </Link>{" "}
                      when you shortlist—then validate with a pilot before you cut over fully.
                    </p>
                  </div>
                </section>

                <section id="map-money-paths" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Start with how cash actually moves through your business.">Map money paths</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Draw a simple diagram: lead → estimate → deposit → work → final payment. Note whether each step is swiped, invoiced, or online. Your processor should shine on the heaviest arrows, not the rare edge case you might use someday. When most deposits leave from the office as PDFs and links, pair processing with{" "}
                      <Link href="/invoicing" className={link}>
                        invoicing software
                      </Link>{" "}
                      so line items stay consistent.
                    </p>
                  </div>
                </section>

                <section id="hardware" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Readers, tablets, and replacement cycles.">Hardware and durability</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Budget two generations of readers for trucks, label chargers, and assign an owner for replacements. Hardware failure mid-month is an operations problem disguised as a finance problem.
                    </p>
                  </div>
                </section>

                <section id="risk-reserves" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What new or high-ticket accounts should plan for.">Risk, reserves, and holds</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      New accounts and high-ticket service categories sometimes see rolling reserves—ask upfront and model cash impact before you promise vendor payments on optimistic timelines.
                    </p>
                  </div>
                </section>

                <section id="accounting" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Processors are not bookkeepers—tie-outs matter.">Accounting and taxes</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Ensure{" "}
                      <Link href="/accounting" className={link}>
                        accounting software
                      </Link>{" "}
                      categories match payout batches; teach staff to avoid miscoding processor fees as generic bank fees forever.
                    </p>
                  </div>
                </section>

                <section id="customer-experience" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Checkout that works on real phones in the field.">Customer experience</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Checkout should work on five-year-old phones. Test Apple Pay, Google Pay, and plain card entry. Pair polished web flows with{" "}
                      <Link href="/website-builders" className={link}>
                        website builders
                      </Link>{" "}
                      that mobile homeowners trust.
                    </p>
                  </div>
                </section>

                <section id="pilot" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Prove net deposits before you switch everyone.">Pilot before switching</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Run one crew or one location on a candidate processor for 30–45 days while legacy stacks continue elsewhere. Compare net deposits and support tickets, not vibes. If open invoices linger, layer polite follow-ups through{" "}
                      <Link href="/email-marketing" className={link}>
                        email marketing
                      </Link>{" "}
                      with clear consent and unsubscribe paths.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>

            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar
                title="Popular Payment Processing Providers"
                items={PAYMENT_PROCESSING_GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedPaymentProcessingResources items={RELATED_RESOURCES_ITEMS} excludeHref={href} />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How to Choose a Payment Processor | BeltStack",
    description:
      "Checklist for contractors: channels, hardware, reserves, accounting sync, and effective rate when choosing payment processing.",
  };
}
