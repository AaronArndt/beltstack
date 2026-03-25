"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { BestOfUseCaseEditorialSection } from "@/components/best-of/BestOfUseCaseEditorialSection";
import { SoftwarePickCard } from "@/components/software-picks/SoftwarePickCard";
import { FaqAccordionItem } from "@/components/faq/FaqAccordionItem";
import {
  TOP_PICKS,
  USE_CASE_LINKS,
  BEST_FOR_BY_TRADE,
  RELATED_COMPARISONS,
  FAQ_ITEMS,
  MORE_EMAIL_OPTIONS,
} from "@/lib/data/emailMarketingBestEmailMarketingSoftware";
import { resolveBestOfUseCaseEditorials } from "@/lib/bestOf/resolveBestOfUseCaseEditorials";
import {
  getEmailMarketingAlternativeUrl,
  getEmailMarketingCompareUrl,
  getEmailMarketingReviewUrl,
} from "@/lib/routes";
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

const routes = getSoftwarePickCategoryRoutes("email-marketing");

export default function BestEmailMarketingSoftwarePage() {
  const useCaseEditorialItems = resolveBestOfUseCaseEditorials("email marketing software", USE_CASE_LINKS);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [affiliateOpen, setAffiliateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <main>
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
                  <Link href="/email-marketing" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Email Marketing
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-[#1A2D48] font-medium" aria-current="page">
                  Best Email Marketing Software
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Best Email Marketing Software (2026)</h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Email marketing software is the system you use to send newsletters, automations, and transactional messages to homeowners and commercial clients—complete with subscriber records, consent, segmentation, and reporting so you know what drives booked work instead of guessing from open rates alone.
            </p>
            <p className="mt-2 text-[#57534E] text-base leading-relaxed max-w-3xl">
              For local service businesses, email matters because jobs have gaps: estimates go cold, memberships lapse, and seasons swing demand. Email keeps your brand present between truck rolls with appointment reminders, post-job follow-ups, referral prompts, and educational content that earns trust before the next emergency call. It also compounds leads you already paid for in{" "}
              <Link href="/lead-generation" className={linkGreen}>
                lead generation programs
              </Link>{" "}
              and visitors you earn through{" "}
              <Link href="/seo-tools" className={linkGreen}>
                SEO
              </Link>{" "}
              —without renting attention forever.
            </p>
            <p className="mt-2 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Invest in email when you can name who will own sends, when you have repeatable customer touchpoints (completed jobs, estimates, memberships), and when your website or{" "}
              <Link href="/crm" className={linkGreen}>
                CRM
              </Link>{" "}
              can feed clean subscriber data. Skip heavy marketing automation until someone can audit journeys monthly; broken automations erode trust faster than no email at all.
            </p>
            <p className="mt-2 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Tools differ primarily by automation depth, segmentation philosophy, bundling (SMS and transactional email), and how naturally they sit beside your CRM. Mailchimp-style platforms optimize for fast creative iteration; ActiveCampaign-class systems optimize for branching logic tied to pipeline stages; Klaviyo rewards teams that track events rigorously; Brevo appeals when multi-channel messaging should share one bill and compliance story.
            </p>
            <p className="mt-2 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Pair these picks with our{" "}
              <Link href="/email-marketing/compare" className={linkGreen}>
                email software comparisons
              </Link>
              ,{" "}
              <Link href="/email-marketing/best-for" className={linkGreen}>
                best by scenario pages
              </Link>
              , and{" "}
              <Link href="/email-marketing/guides" className={linkGreen}>
                email marketing guides
              </Link>
              . Capture subscribers from your{" "}
              <Link href="/website-builders" className={linkGreen}>
                website
              </Link>
              , request reviews through{" "}
              <Link href="/reputation-management" className={linkGreen}>
                reputation programs
              </Link>
              , and keep lists aligned with CRM reality.
            </p>
            <p className="mt-2 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Read full reviews for{" "}
              <Link href={getEmailMarketingReviewUrl("mailchimp")} className={linkGreen}>
                Mailchimp
              </Link>
              ,{" "}
              <Link href={getEmailMarketingReviewUrl("activecampaign")} className={linkGreen}>
                ActiveCampaign
              </Link>
              ,{" "}
              <Link href={getEmailMarketingReviewUrl("klaviyo")} className={linkGreen}>
                Klaviyo
              </Link>
              , and{" "}
              <Link href={getEmailMarketingReviewUrl("hubspot-email-marketing")} className={linkGreen}>
                HubSpot
              </Link>
              . Ranked alternatives pages (switching scenarios and migration notes) cover{" "}
              <Link href={getEmailMarketingAlternativeUrl("mailchimp")} className={linkGreen}>
                Mailchimp
              </Link>
              ,{" "}
              <Link href={getEmailMarketingAlternativeUrl("constant-contact")} className={linkGreen}>
                Constant Contact
              </Link>
              ,{" "}
              <Link href={getEmailMarketingAlternativeUrl("activecampaign")} className={linkGreen}>
                ActiveCampaign
              </Link>
              ,{" "}
              <Link href={getEmailMarketingAlternativeUrl("hubspot-email-marketing")} className={linkGreen}>
                HubSpot
              </Link>
              ,{" "}
              <Link href={getEmailMarketingAlternativeUrl("klaviyo")} className={linkGreen}>
                Klaviyo
              </Link>
              ,{" "}
              <Link href={getEmailMarketingAlternativeUrl("convertkit")} className={linkGreen}>
                Kit
              </Link>
              ,{" "}
              <Link href={getEmailMarketingAlternativeUrl("brevo")} className={linkGreen}>
                Brevo
              </Link>
              , and{" "}
              <Link href={getEmailMarketingAlternativeUrl("mailerlite")} className={linkGreen}>
                MailerLite
              </Link>
              .
            </p>
            <p className="mt-2 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Also review{" "}
              <Link href={getEmailMarketingReviewUrl("constant-contact")} className={linkGreen}>
                Constant Contact
              </Link>
              ,{" "}
              <Link href={getEmailMarketingReviewUrl("convertkit")} className={linkGreen}>
                Kit
              </Link>
              ,{" "}
              <Link href={getEmailMarketingReviewUrl("brevo")} className={linkGreen}>
                Brevo
              </Link>
              , and{" "}
              <Link href={getEmailMarketingReviewUrl("mailerlite")} className={linkGreen}>
                MailerLite
              </Link>
              . Compare matchups like{" "}
              <Link href={getEmailMarketingCompareUrl("mailchimp-vs-activecampaign")} className={linkGreen}>
                Mailchimp vs ActiveCampaign
              </Link>{" "}
              and{" "}
              <Link href={getEmailMarketingCompareUrl("klaviyo-vs-mailchimp")} className={linkGreen}>
                Klaviyo vs Mailchimp
              </Link>{" "}
              when decision guidance matters more than logos.
            </p>
            <div className={`mt-4 ${trustIndicatorListClass}`}>
              <span className="flex items-center gap-2">
                <TrustIndicatorMark />
                Updated for 2026
              </span>
              <button type="button" onClick={() => setAffiliateOpen(true)} className={trustIndicatorAffiliateButtonClass}>
                <TrustIndicatorMark />
                Affiliate disclosure
              </button>
            </div>
          </div>
        </section>

        <section id="best-picks" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Why we picked each platform and who it fits—including contractor and local workflows.">Best Email Marketing Picks</SectionTitle>
            <div className="mt-6 space-y-10">
              {TOP_PICKS.map((pick) => (
                <SoftwarePickCard key={pick.slug} {...toSoftwarePickCardProps(pick, routes, { id: `pick-${pick.slug}` })} />
              ))}
            </div>
          </div>
        </section>

        <section id="comparison-table" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Side-by-side at a glance.">Compare email marketing software</SectionTitle>
            <div className="mt-4 overflow-x-auto rounded-md border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Software</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Best for</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Starting price</th>
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
                      <td className="px-4 py-4 text-[#57534E]">{pick.standoutFeature}</td>
                      <td className="px-4 py-4">
                        <Link
                          href={getEmailMarketingReviewUrl(pick.slug)}
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

        <section id="more-options" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Additional platforms worth reviewing.">More email marketing options</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {MORE_EMAIL_OPTIONS.map((opt) => (
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
            <SectionTitle sub="What to look for when you compare options.">How to choose email marketing software</SectionTitle>
            <div className="mt-4 space-y-4 text-[#57534E] text-sm leading-relaxed">
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Match automation depth to admin capacity</h3>
                <p className="mt-1">Powerful journeys help only if someone audits branching, suppressions, and merge tags monthly. Start where your office can maintain accuracy.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Integrate capture and CRM handoffs</h3>
                <p className="mt-1">Subscribers from forms, marketplaces, and job completion should land with consent, tags, and owner context—otherwise campaigns feel generic.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Segment by job type and lifecycle</h3>
                <p className="mt-1">Residential maintenance, commercial bids, and emergency work need different CTAs; blend them and you train customers to ignore you.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Separate transactional and promotional streams</h3>
                <p className="mt-1">Receipts, scheduling, and password resets should not compete with promo reputation on the same unauthenticated domain strategy—clarify streams early.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Model list growth, SMS, and add-ons</h3>
                <p className="mt-1">Annualize contacts from CRM and lead programs; add realistic SMS volumes if you bundle channels so renewals do not surprise leadership.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Measure influence on booked work</h3>
                <p className="mt-1">Tag booking links, reconcile with CRM stages, and review influenced revenue—not opens alone—when you judge a platform renewal.</p>
              </div>
            </div>
          </div>
        </section>

        <BestOfUseCaseEditorialSection headingCategoryLabel="email marketing software" sectionSub="Find stacks that fit your situation." items={useCaseEditorialItems} />

        <section id="by-trade" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Guides by trade and use case.">Best email marketing by trade</SectionTitle>
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
              <Link href="/email-marketing/compare" className={linkGreen}>
                View email marketing comparisons
              </Link>{" "}
              or jump to a specific matchup below.
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
            <SectionTitle sub="Quick answers to common questions.">Best email marketing FAQs</SectionTitle>
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
            aria-labelledby="best-email-affiliate-title"
            aria-modal="true"
          >
            <h3 id="best-email-affiliate-title" className="text-[#1A2D48] text-lg font-bold">
              Affiliate disclosure
            </h3>
            <p className="mt-3 text-[#57534E] text-sm leading-relaxed">We may earn a commission when you purchase through our links. This does not affect our recommendations.</p>
            <button type="button" onClick={() => setAffiliateOpen(false)} className={`mt-4 ${btnPrimary}`}>
              Got it
            </button>
          </div>
        </>
      )}
    </div>
  );
}
