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

const href = "/payment-processing/guides/stripe-vs-square-fees";

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
    q: "Is Stripe cheaper than Square?",
    a: "Depends on card-present vs online mix, average ticket, refunds, and disputes. Compute effective rate from 90 days of statements for each stack before switching.",
  },
  {
    q: "Why does online cost more than tap?",
    a: "Card-not-present fraud risk is higher; networks and processors price accordingly. Invoices and keyed numbers usually land in higher tiers.",
  },
  {
    q: "When does Stripe Billing change the math?",
    a: "Recurring plans add software line items and failed-payment retries—budget those alongside per-transaction fees when modeling memberships.",
  },
  {
    q: "When does Square hardware matter?",
    a: "Amortize reader and tablet costs across expected life; cheap processing with expensive churn in devices can erase savings.",
  },
  {
    q: "Should HVAC shops assume interchange-plus wins?",
    a: "Only if statements prove it—large tickets help, but so does low refund/chargeback friction. Model both sides honestly.",
  },
  {
    q: "Where is the full comparison?",
    a: "Open our Stripe vs Square comparison page for decision guides and pricing discussion beyond percentages.",
  },
];

const RELATED_RESOURCES_ITEMS = [
  { label: "Stripe vs Square Comparison", href: getPaymentProcessingCompareUrl("stripe-vs-square") },
  { label: "Stripe Review", href: getPaymentProcessingReviewUrl("stripe") },
  { label: "Square Review", href: getPaymentProcessingReviewUrl("square") },
  { label: "Credit Card Processing Fees Explained", href: "/payment-processing/guides/credit-card-processing-fees-explained" },
  { label: "Best Payment Processing Software", href: "/payment-processing/best-payment-processing-software" },
  { label: "How to Choose a Payment Processor", href: "/payment-processing/guides/how-to-choose-a-payment-processor" },
  { label: "Invoicing software hub", href: "/invoicing" },
  { label: "Best payment processing for contractors", href: getPaymentProcessingBestForUrl("contractors") },
];

export default function StripeVsSquareFeesPage() {
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
                      Stripe vs Square Fees
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Stripe vs Square Fees
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Scenario math for trades—not a duke-out over logos. Compare effective rate, channels, and add-on lines before you switch.
                  </p>
                  <GuideLastUpdated date="March 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Headline processing rates rarely predict net deposits. Stripe and Square both stack fees from cards, hardware, instant payouts, and optional products—your job is to model the bundle you will actually run for 90 days, then divide total fees
                      by volume.
                    </p>
                    <p>
                      Read{" "}
                      <Link href={getPaymentProcessingReviewUrl("stripe")} className={link}>
                        Stripe
                      </Link>{" "}
                      and{" "}
                      <Link href={getPaymentProcessingReviewUrl("square")} className={link}>
                        Square
                      </Link>{" "}
                      reviews, then{" "}
                      <Link href={getPaymentProcessingCompareUrl("stripe-vs-square")} className={link}>
                        Stripe vs Square
                      </Link>{" "}
                      for full product recommendations beyond fee tables.
                    </p>
                  </div>
                </section>

                <section id="channel-mix" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Weight economics by how you actually collect.">Start with channel mix</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      List percentages are useless until you know how much volume is card-present, invoiced, or checkout. A plumbing company with 70% van swipes should weight Square-style economics; a design-build firm with 70% online deposits should weight
                      Stripe.
                    </p>
                  </div>
                </section>

                <section id="stripe-fee-lines" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Core cards plus modules you might enable.">Stripe: where fees accumulate</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Core card charges are table stakes; Stripe Billing, Terminal hardware, Connect, and currency conversion add lines. That is not bad—just insist on a spreadsheet that includes every module you will actually turn on this quarter.
                    </p>
                  </div>
                </section>

                <section id="square-bundles" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Hardware, software tiers, and instant transfer.">Square: hardware and software bundles</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Processing is one row; Instant Transfers, paid software tiers, and replacement readers are others. Owners love simplicity until they forget to model instant transfer on busy Fridays—rebuild cash-flow with and without it.
                    </p>
                  </div>
                </section>

                <section id="ticket-size" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When flat rate vs interchange-style math flips.">Micro-tickets vs whale tickets</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Flat rate can win on small average tickets where interchange would otherwise dominate; interchange-plus can win when your mean ticket crosses into replacement territory. Use your accounting system’s job export to compute true means, not gut
                      feel.
                    </p>
                  </div>
                </section>

                <section id="invoicing-double-fees" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Avoid counting the same cost twice.">Cross-check with invoicing</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      If{" "}
                      <Link href="/invoicing" className={link}>
                        invoicing software
                      </Link>{" "}
                      charges its own payment fee, avoid double-counting when comparing processors—some stacks hide fees in two vendors.
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
    title: "Stripe vs Square Fees | BeltStack",
    description: "Fee scenarios for contractors: card-present vs online, average ticket effects, and how to compute effective rate.",
  };
}
