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

const href = "/payment-processing/guides/credit-card-processing-fees-explained";

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
    q: "What is the cheapest payment processor?",
    a: "The one with the lowest net deposits for your business after refunds, chargebacks, monthly fees, and hardware—not the lowest advertised percentage.",
  },
  {
    q: "How much do payment processors charge?",
    a: "Typically a percentage plus fixed cents per authorization, with higher rates for keyed and online-not-present transactions. International and premium cards can cost more.",
  },
  {
    q: "What is interchange?",
    a: "The wholesale component paid to card networks and issuers. Flat-rate processors bundle it; interchange-plus processors show it separately plus disclosed markup.",
  },
  {
    q: "What is effective rate?",
    a: "Total fees divided by total card volume for a period—your real cost after everything, expressed as a percentage.",
  },
  {
    q: "Do chargebacks add cost?",
    a: "Yes—lost disputes and per-case fees hurt margin. Prevention through documentation beats shopping processors endlessly.",
  },
  {
    q: "Where do I learn Stripe vs Square fee differences?",
    a: "Read our Stripe vs Square fees guide and the Stripe vs Square comparison page for scenario-based picks beyond headline rates.",
  },
];

const RELATED_RESOURCES_ITEMS = [
  { label: "Stripe vs Square Fees", href: "/payment-processing/guides/stripe-vs-square-fees" },
  { label: "Stripe vs Square Comparison", href: getPaymentProcessingCompareUrl("stripe-vs-square") },
  { label: "Helcim vs Stax", href: getPaymentProcessingCompareUrl("helcim-vs-stax") },
  { label: "Helcim Review", href: getPaymentProcessingReviewUrl("helcim") },
  { label: "Stripe Review", href: getPaymentProcessingReviewUrl("stripe") },
  { label: "Best Payment Processing Software", href: "/payment-processing/best-payment-processing-software" },
  { label: "How Payment Processing Works", href: "/payment-processing/guides/how-payment-processing-works" },
  { label: "Best payment processing for small business", href: getPaymentProcessingBestForUrl("small-business") },
  { label: "Square Review", href: getPaymentProcessingReviewUrl("square") },
  { label: "Email marketing hub (payment reminders)", href: "/email-marketing" },
];

export default function CreditCardProcessingFeesExplainedPage() {
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
                      Credit Card Processing Fees Explained
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Credit Card Processing Fees Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Interchange, assessments, markup, flat rates, and the effective rate you should actually track each month.
                  </p>
                  <GuideLastUpdated date="March 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Merchant statements look complicated on purpose—but a few ideas unlock most of them: whether you are on flat-rate or interchange-plus pricing, how card-present vs not-present affects cost, and the single number (effective rate) that tells
                      you what you really paid last month.
                    </p>
                    <p>
                      Pair this guide with our{" "}
                      <Link href={getPaymentProcessingReviewUrl("helcim")} className={link}>
                        Helcim
                      </Link>{" "}
                      and{" "}
                      <Link href={getPaymentProcessingReviewUrl("stripe")} className={link}>
                        Stripe
                      </Link>{" "}
                      reviews and the{" "}
                      <Link href="/payment-processing/best-payment-processing-software" className={link}>
                        best payment processing software
                      </Link>{" "}
                      roundup when you compare vendors.
                    </p>
                  </div>
                </section>

                <section id="flat-rate" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Simple percentages until volume changes the math.">Flat-rate pricing</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      One blended percentage simplifies budgeting and protects teams from reading dense statements—until average tickets grow large enough that basis points matter. Many trades start here with Square or simple Stripe tiers.
                    </p>
                  </div>
                </section>

                <section id="interchange-plus" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Transparency on statements—and more to reconcile.">Interchange-plus pricing</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Statements separate interchange (network cost) from processor markup. Finance-heavy owners prefer this transparency when negotiating renewals or comparing ISO quotes. Evaluate{" "}
                      <Link href={getPaymentProcessingCompareUrl("helcim-vs-stax")} className={link}>
                        Helcim vs Stax
                      </Link>{" "}
                      when membership models enter the picture.
                    </p>
                  </div>
                </section>

                <section id="present-vs-not-present" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why swipes usually cost less than keyed or online.">Card-present vs not-present</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Swipes and chips usually cost less than keyed numbers or online invoices because fraud risk differs. Train crews to tap when possible—savings compound across hundreds of jobs.
                    </p>
                  </div>
                </section>

                <section id="hidden-lines" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Instant transfers, chargebacks, FX, minimums.">Hidden lines that bite</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Instant transfers, chargeback fees, FX, and monthly minimums belong in models. Export CSVs from your processor and accounting tool together so nothing hides in rounding.
                    </p>
                  </div>
                </section>

                <section id="service-examples" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Mixed channels on one job.">Service-business examples</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A $9,000 HVAC replacement with a 50% deposit online and balance swiped on site mixes rates—compute effective rate on the whole job, not each leg in isolation. That number should drive processor decisions.
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
    title: "Credit Card Processing Fees Explained | BeltStack",
    description:
      "Interchange, flat rate vs interchange-plus, effective rate, and what contractors should track on merchant statements.",
  };
}
