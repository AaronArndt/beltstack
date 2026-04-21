"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { BestOfUseCaseEditorialSection } from "@/components/best-of/BestOfUseCaseEditorialSection";
import { RoundupQuickPicksSection } from "@/components/best-of/RoundupQuickPicksSection";
import { RoundupHubLinksBlurb } from "@/components/best-of/RoundupHubLinksBlurb";
import { RoundupHowWeChoseSection } from "@/components/best-of/RoundupHowWeChoseSection";
import { SoftwarePickCard } from "@/components/software-picks/SoftwarePickCard";
import { FaqAccordionItem } from "@/components/faq/FaqAccordionItem";
import {
  TOP_PICKS,
  USE_CASE_LINKS,
  BEST_FOR_BY_TRADE,
  RELATED_COMPARISONS,
  FAQ_ITEMS,
} from "@/lib/data/paymentProcessingBestPaymentProcessingSoftware";
import { resolveBestOfUseCaseEditorials } from "@/lib/bestOf/resolveBestOfUseCaseEditorials";
import { getPaymentProcessingAlternativeUrl, getPaymentProcessingReviewUrl } from "@/lib/routes";
import { getSoftwarePickCategoryRoutes, toSoftwarePickCardProps } from "@/lib/data/softwarePickCards";
import { TrustIndicatorMark } from "@/components/trust/TrustIndicatorMark";
import { trustIndicatorAffiliateButtonClass, trustIndicatorListClass } from "@/lib/design-tokens";

const btnPrimary =
  "rounded-md bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

const ppPickRoutes = getSoftwarePickCategoryRoutes("payment-processing");

export default function BestPaymentProcessingSoftwarePage() {
  const useCaseEditorialItems = resolveBestOfUseCaseEditorials("payment processing software", USE_CASE_LINKS);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [affiliateOpen, setAffiliateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* ——— 1) Hero ——— */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/payment-processing" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Payment Processing
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-[#1A2D48] font-medium" aria-current="page">
                  Best Payment Processing Software
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best Payment Processing Software (2026)
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              If you collect payments in the field, online, or by invoice, the best payment processing software should keep fees predictable while supporting the channels you actually use.
            </p>
            <p className="mt-2 text-[#57534E] text-base leading-relaxed max-w-3xl">
              We compared fee models, payout workflows, channel fit, reporting, and integration needs so the Key Takeaways shortlist is grounded in real payment operations.
            </p>
            <RoundupHubLinksBlurb categoryPath="/payment-processing" categoryLabel="payment processing software" />
            <div className={`mt-4 ${trustIndicatorListClass}`}>
              <span className="flex items-center gap-2">
                <TrustIndicatorMark />
                Updated for 2026
              </span>
              <button
                type="button"
                onClick={() => setAffiliateOpen(true)}
                className={trustIndicatorAffiliateButtonClass}
              >
                <TrustIndicatorMark />
                Affiliate disclosure
              </button>
            </div>
          </div>
        </section>

        {/* ——— 2) Best picks ——— */}
        <RoundupQuickPicksSection
          categoryLabel="payment processing software"
          picks={TOP_PICKS.map((pick) => ({
            slug: pick.slug,
            name: pick.name,
            badge: pick.badge,
            description: pick.description,
          }))}
        />

        <section id="best-payment-processing-picks" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Why we picked each platform and who it fits.">Best Payment Processing Software Picks</SectionTitle>
            <div className="mt-6 space-y-10">
              {TOP_PICKS.map((pick) => (
                <SoftwarePickCard key={pick.slug} {...toSoftwarePickCardProps(pick, ppPickRoutes, { id: `pick-${pick.slug}` })} />
              ))}
            </div>
          </div>
        </section>

        {/* ——— 3) Comparison table ——— */}
        <section id="comparison-table" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Side-by-side at a glance.">Compare payment processing software</SectionTitle>
            <div className="mt-4 overflow-x-auto rounded-md border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Software</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Best for</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Starting price</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Primary channel</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Standout feature</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Review</th>
                  </tr>
                </thead>
                <tbody>
                  {TOP_PICKS.map((pick) => (
                    <tr key={pick.slug} className="border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50/80">
                      <td className="px-4 py-4 font-semibold text-[#1A2D48]">
                        <div className="flex items-center gap-2">
                          <img src={pick.logoSrc} alt="" className="h-8 w-auto max-w-[80px] object-contain" />
                          {pick.name}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-[#57534E]">{pick.badge}</td>
                      <td className="px-4 py-4 text-[#57534E]">{pick.startingPrice}</td>
                      <td className="px-4 py-4 text-[#57534E]">{pick.primaryChannel}</td>
                      <td className="px-4 py-4 text-[#57534E]">{pick.standoutFeature}</td>
                      <td className="px-4 py-4">
                        <Link
                          href={getPaymentProcessingReviewUrl(pick.slug)}
                          className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                        >
                          Read review
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ——— How to choose ——— */}
        <section id="how-to-choose" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="What to look for when you compare options.">How to choose payment processing software</SectionTitle>
            <div className="mt-4 space-y-4 text-[#57534E] text-sm leading-relaxed">
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Channel alignment (field vs invoice vs web)</h3>
                <p className="mt-1">
                  Payment processing is the regulated path that authorizes cards and settles to your bank—it is not a substitute for invoicing or CRM. List where gross revenue actually enters: EMV swipes on trucks, Square or Stripe invoice links after walkthroughs, or
                  checkout when leads book online. Optimize the dominant rail first; avoid prestige stacks nobody uses in the field. See{" "}
                  <Link href="/payment-processing/guides/how-payment-processing-works" className={linkGreen}>
                    how payment processing works
                  </Link>{" "}
                  for the full flow.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Card-present vs card-not-present</h3>
                <p className="mt-1">
                  When technicians collect balances on site, prioritize chip/tap readers, receipts that carry job IDs, and training so the office does not key cards unnecessarily—keyed and CNP rates and risk flags often surprise growing teams. Square and Clover-class devices
                  win onboarding speed;{" "}
                  <Link href="/payment-processing/compare/stripe-vs-square" className={linkGreen}>
                    Stripe Terminal
                  </Link>{" "}
                  fits when the rest of your stack is already Stripe. For counters, tips, or inventory, pair with our{" "}
                  <Link href="/pos" className={linkGreen}>
                    POS software hub
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Invoices and payment links</h3>
                <p className="mt-1">
                  Deposits on replacements and commercial draws often flow through hosted links so homeowners can pay from work. Stripe Payment Links, Square Invoices, and PayPal invoices each reduce friction—pick the rail your office will send on time. Dedicated{" "}
                  <Link href="/invoicing" className={linkGreen}>
                    invoicing software
                  </Link>{" "}
                  adds line-item discipline processors alone do not provide.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Website checkout and wallets</h3>
                <p className="mt-1">
                  If marketing invests in web leads, checkout must match mobile UX and trust. Wallet options (Apple Pay, PayPal) can lift completion on deposits. Shopify merchants should read{" "}
                  <Link href="/payment-processing/compare/shopify-payments-vs-stripe" className={linkGreen}>
                    Shopify Payments vs Stripe
                  </Link>{" "}
                  before splitting gateways. Build pages that convert using our{" "}
                  <Link href="/website-builders" className={linkGreen}>
                    website builders hub
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Flat rate vs interchange-plus</h3>
                <p className="mt-1">
                  Flat-rate bundles (common with Square and simple Stripe tiers) simplify budgeting until average tickets grow large. Interchange-plus (Helcim, many ISOs) separates network cost from markup so finance can audit statements. Neither is automatically
                  cheapest—compute <strong className="font-semibold text-[#1A2D48]">effective rate</strong> (fees ÷ gross) after refunds and chargebacks. Read{" "}
                  <Link href="/payment-processing/guides/credit-card-processing-fees-explained" className={linkGreen}>
                    credit card processing fees explained
                  </Link>{" "}
                  and{" "}
                  <Link href="/payment-processing/guides/stripe-vs-square-fees" className={linkGreen}>
                    Stripe vs Square fees
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Accounting, CRM, and reconciliation</h3>
                <p className="mt-1">
                  Map processor payouts to bank feeds; tag jobs in memos or integration fields so month-end is predictable.{" "}
                  <Link href="/crm" className={linkGreen}>
                    CRM software
                  </Link>{" "}
                  should show paid vs open by customer so dispatch and finance agree. Running two processors (e.g. Square in the field and PayPal for wallet-heavy email) is fine only with written reconciliation rules.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Hardware, software TCO, and pricing transparency</h3>
                <p className="mt-1">
                  Budget readers, tablets, cables, instant-transfer fees, and POS subscriptions—not only the percentage on the marketing page. Clover and ISO-sold packages require contract and effective-rate scrutiny across resellers. Prefer published pricing when you
                  can; when quotes are custom, get sample statements in writing before you sign.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Reminders and follow-up</h3>
                <p className="mt-1">
                  Open invoices die quietly—use{" "}
                  <Link href="/email-marketing" className={linkGreen}>
                    email marketing
                  </Link>{" "}
                  for compliant payment reminders and post-job follow-ups when you have consent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ——— Best payment processing software by use case ——— */}
        <BestOfUseCaseEditorialSection
          headingCategoryLabel="payment processing software"
          sectionSub="Find payment processing software that fits your situation."
          sectionId="by-use-case"
          items={useCaseEditorialItems}
        />

        {/* ——— Best by trade ——— */}
        <section id="by-trade" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Payment processing guides by industry and trade.">Best payment processing software by trade</SectionTitle>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {BEST_FOR_BY_TRADE.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#1A2D48] transition-all hover:border-[#1A2D48] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ——— Related comparisons ——— */}
        <RoundupHowWeChoseSection
          categoryLabel="payment processing software"
          compareHref="/payment-processing/compare"
          guidesHref="/payment-processing/guides"
        />

        <section id="related-comparisons" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Head-to-head comparisons to narrow your choice.">Related comparisons</SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              <Link href="/payment-processing/compare" className={linkGreen}>
                View payment processing comparisons
              </Link>{" "}
              to compare platforms side-by-side, or jump to a specific comparison below. For fees, contractor workflows, and how processing fits your stack, see our{" "}
              <Link href="/payment-processing/guides" className={linkGreen}>
                payment processing guides
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {RELATED_COMPARISONS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#1A2D48] transition-all hover:border-[#1A2D48] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ——— FAQ ——— */}
        <section id="faqs" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Quick answers to common questions.">Best payment processing software FAQs</SectionTitle>
            <div className="mt-4 rounded-lg border border-stone-200 bg-white shadow-sm overflow-hidden">
              {FAQ_ITEMS.map((item, i) => (
                <FaqAccordionItem
                  key={i}
                  question={item.q}
                  answer={item.a}
                  isOpen={openFaqIndex === i}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  isFirst={i === 0}
                  isLast={i === FAQ_ITEMS.length - 1}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {affiliateOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-[#1A2D48]/60" aria-hidden onClick={() => setAffiliateOpen(false)} />
          <div
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border border-stone-200 bg-white p-6 shadow-lg"
            role="dialog"
            aria-labelledby="best-pp-affiliate-title"
            aria-modal="true"
          >
            <h3 id="best-pp-affiliate-title" className="text-[#1A2D48] text-lg font-bold">
              Affiliate disclosure
            </h3>
            <p className="mt-3 text-[#57534E] text-sm leading-relaxed">
              We may earn a commission when you purchase through our links. This does not affect our recommendations.
            </p>
            <button type="button" onClick={() => setAffiliateOpen(false)} className={`mt-4 ${btnPrimary}`}>
              Got it
            </button>
          </div>
        </>
      )}
    </div>
  );
}
