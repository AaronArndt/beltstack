"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { BestOfUseCaseEditorialSection } from "@/components/best-of/BestOfUseCaseEditorialSection";
import { SoftwarePickCard } from "@/components/software-picks/SoftwarePickCard";
import { FaqAccordionItem } from "@/components/faq/FaqAccordionItem";
import {
  BEST_FOR_BY_TRADE,
  COMPARISON_TABLE_ROWS,
  FAQ_ITEMS,
  MORE_WEBSITE_BUILDER_OPTIONS,
  RELATED_COMPARISONS,
  TOP_PICKS,
  USE_CASE_LINKS,
} from "@/lib/data/websiteBuildersBestWebsiteBuilders";
import { resolveBestOfUseCaseEditorials } from "@/lib/bestOf/resolveBestOfUseCaseEditorials";
import { getSoftwarePickCategoryRoutes, toSoftwarePickCardProps } from "@/lib/data/softwarePickCards";
import { TrustIndicatorMark } from "@/components/trust/TrustIndicatorMark";
import { trustIndicatorAffiliateButtonClass, trustIndicatorListClass } from "@/lib/design-tokens";

const websiteBuilderRoutes = getSoftwarePickCategoryRoutes("website-builders");

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

export function BestWebsiteBuildersPageClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [affiliateOpen, setAffiliateOpen] = useState(false);
  const useCaseEditorialItems = resolveBestOfUseCaseEditorials("website builders", USE_CASE_LINKS);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li><Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/website-builders" className="text-gray-500 hover:text-gray-900">Website Builders</Link></li>
                <li aria-hidden>/</li>
                <li className="text-[#1A2D48] font-medium" aria-current="page">Best Website Builders</li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best Website Builders (2026)
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              The best website builder for a small business, contractor, or home services company is the one your team
              will actually update after launch—without sacrificing local SEO, fast mobile pages, or obvious quote-and-call
              paths. This guide ranks top drag-and-drop and hosted platforms for real-world service workflows, not generic
              brochure or portfolio sites.
            </p>
            <p className="mt-2 text-[#57534E] text-base leading-relaxed max-w-3xl">
              We stress-test templates, editor friction, forms and booking, reviews and trust blocks, service-area structure,
              and recurring cost (plans plus essential apps). Whether you need a simple lead-generation site or a storefront
              alongside services, the picks below pair with our in-depth reviews and{" "}
              <Link href="/website-builders/compare" className={linkGreen}>
                website builder comparisons
              </Link>{" "}
              so you can choose confidently for 2026.
            </p>
            <p className="mt-2 text-[#57534E] text-base leading-relaxed max-w-3xl">
              New to evaluation criteria? Start with the{" "}
              <Link href="/website-builders" className={linkGreen}>
                website builders hub
              </Link>{" "}
              for trade-specific entry points, or read{" "}
              <Link href="/website-builders/guides/how-to-choose-a-website-builder" className={linkGreen}>
                how to choose a website builder
              </Link>{" "}
              before you shortlist vendors.
            </p>
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

        <section id="best-picks" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Why each platform made the list.">Best Website Builder Picks</SectionTitle>
            <div className="mt-6 space-y-10">
              {TOP_PICKS.map((pick) => (
                <SoftwarePickCard key={pick.slug} {...toSoftwarePickCardProps(pick, websiteBuilderRoutes, { id: `pick-${pick.slug}` })} />
              ))}
            </div>
          </div>
        </section>

        <section id="comparison-table" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Side-by-side at a glance.">Compare website builders</SectionTitle>
            <div className="mt-4 overflow-x-auto rounded-md border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead><tr className="border-b border-slate-200 bg-slate-50"><th className="px-4 py-3 font-bold text-[#1A2D48]">Tool</th><th className="px-4 py-3 font-bold text-[#1A2D48]">Best for</th><th className="px-4 py-3 font-bold text-[#1A2D48]">Starting price</th><th className="px-4 py-3 font-bold text-[#1A2D48]">Rating</th><th className="px-4 py-3 font-bold text-[#1A2D48]">Review</th></tr></thead>
                <tbody>
                  {COMPARISON_TABLE_ROWS.map((row) => (
                    <tr key={row.slug} className="border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50/80">
                      <td className="px-4 py-4 font-semibold text-[#1A2D48]">
                        <div className="flex items-center gap-2">
                          <img src={row.logoSrc} alt="" className="h-8 w-auto max-w-[80px] object-contain" />
                          {row.name}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-[#57534E]">{row.bestFor}</td>
                      <td className="px-4 py-4 text-[#57534E]">{row.startingPrice}</td>
                      <td className="px-4 py-4 font-semibold text-[#10B981]">{row.rating}</td>
                      <td className="px-4 py-4">
                        <Link href={row.reviewHref} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
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

        <section id="more-options" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Additional website builder tools worth considering.">More website builder options</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {MORE_WEBSITE_BUILDER_OPTIONS.map((opt) => (
                <article key={opt.slug} className="flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm">
                  <div className="flex items-center gap-2">
                    <img src={opt.logoSrc} alt="" className="h-10 w-auto max-w-[100px] object-contain" />
                    <h3 className="text-[#1A2D48] text-lg font-bold">
                      <Link href={opt.reviewHref} className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        {opt.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="mt-2 text-[#57534E] text-sm leading-relaxed">{opt.description}</p>
                  <div className="mt-4 border-t border-stone-200 pt-4">
                    <Link href={opt.reviewHref} className="text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                      Read review →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-to-choose" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="What to look for when you compare options.">How to choose website builder software</SectionTitle>
            <div className="mt-4 space-y-4 text-[#57534E] text-sm leading-relaxed">
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Lead capture and mobile conversion</h3>
                <p className="mt-1">
                  Service businesses live on calls, short forms, and booked jobs. Prioritize click-to-call, quote requests, and
                  above-the-fold trust (reviews, licenses) on small screens. If mobile edits are painful, your site will go stale.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Local SEO and service-area structure</h3>
                <p className="mt-1">
                  You need editable titles and descriptions, clean URLs, fast images, and room to grow service-area or location
                  pages. Evaluate how easily non-technical owners can add services and areas as the business expands.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Templates, editor, and maintenance ownership</h3>
                <p className="mt-1">
                  Pick a builder your team will actually update after launch. Balance template quality with editor learning curve:
                  design-forward brands may prefer polished defaults; operators may prefer speed and app breadth over pixel control.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Total cost (plan + apps + renewal)</h3>
                <p className="mt-1">
                  Model bookings, forms, marketing, and ecommerce add-ons at year two—not just promo entry pricing. Watch renewal
                  rates on budget hosts and confirm what is included before you migrate content.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Integrations and handoff to CRM</h3>
                <p className="mt-1">
                  Most service businesses pair the site with CRM and quoting. Check native integrations or Zapier-style paths so
                  leads do not die in inbox forward chains.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Ecommerce vs content-first fit</h3>
                <p className="mt-1">
                  If you sell products, memberships, or plans online, a commerce-first builder may win. If the site is mostly
                  lead-gen and trust content, avoid paying for storefront depth you will not use.
                </p>
              </div>
            </div>
          </div>
        </section>

        <BestOfUseCaseEditorialSection
          headingCategoryLabel="website builder software"
          sectionSub="Find website builders that fit your situation."
          items={useCaseEditorialItems}
        />

        <section id="by-trade" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Website builder guides by industry and trade.">Best website builders by trade</SectionTitle>
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

        <section id="related-comparisons" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Head-to-head comparisons to narrow your choice.">Related comparisons</SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              <Link href="/website-builders/compare" className={linkGreen}>
                View website builder comparisons
              </Link>{" "}
              to compare platforms side-by-side, or jump to a specific comparison below. For evaluation and SEO how-tos, see
              our{" "}
              <Link href="/website-builders/guides" className={linkGreen}>
                website builder guides
              </Link>.
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

        <section id="faqs" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Quick answers to common questions.">Best website builder FAQs</SectionTitle>
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
          <div
            className="fixed inset-0 z-50 bg-[#1A2D48]/60"
            aria-hidden
            onClick={() => setAffiliateOpen(false)}
          />
          <div
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border border-stone-200 bg-white p-6 shadow-lg"
            role="dialog"
            aria-labelledby="best-website-builders-affiliate-title"
            aria-modal="true"
          >
            <h3 id="best-website-builders-affiliate-title" className="text-[#1A2D48] text-lg font-bold">
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
