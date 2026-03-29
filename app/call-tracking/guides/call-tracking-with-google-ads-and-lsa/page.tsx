import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getCallTrackingReviewUrl } from "@/lib/routes";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedCallTrackingResources } from "@/components/guides/RelatedCallTrackingResources";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";
const href = "/call-tracking/guides/call-tracking-with-google-ads-and-lsa";

const FAQ = [
  { q: "Can I count Google-forwarded calls and website DNI as the same conversion?", a: "Usually no—define primary conversion definitions per channel and dedupe in CRM where possible, or you double-count in reports." },
  { q: "Does LSA replace call tracking?", a: "LSA provides its own lead and call records; many teams still use CRM dispositioning and supplemental tracking for non-LSA landing pages. Align taxonomy before blending dashboards." },
  { q: "What about GA4?", a: "See our call tracking vs Google Analytics guide—telephony and analytics answer different questions." },
];

const SIDEBAR: GuideSidebarItem[] = [
  { name: "CallRail", logoSrc: "/Logos/callrail.jpeg", rating: 4.5, bestFor: "Ads integrations", reviewHref: getCallTrackingReviewUrl("callrail") },
  { name: "WhatConverts", logoSrc: "/Logos/whatconverts.jpeg", rating: 4.4, bestFor: "Attribution IDs", reviewHref: getCallTrackingReviewUrl("whatconverts") },
  { name: "CallTrackingMetrics", logoSrc: "/Logos/calltrackingmetrics.jpeg", rating: 4.3, bestFor: "Bidirectional sync", reviewHref: getCallTrackingReviewUrl("calltrackingmetrics") },
];

export default function CallTrackingWithGoogleAdsAndLsaPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/">Home</Link></li><li aria-hidden>/</li>
                    <li><Link href="/call-tracking">Call Tracking</Link></li><li aria-hidden>/</li>
                    <li><Link href="/call-tracking/guides">Guides</Link></li><li aria-hidden>/</li>
                    <li className="font-medium text-gray-700" aria-current="page">Google Ads &amp; LSA</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold sm:text-4xl">Call Tracking with Google Ads &amp; Local Services Ads</h1>
                  <p className="mt-3 text-[#57534E]">
                    Forwarding numbers, GCLID discipline, LSA call labels, and avoiding double-counted conversions—integration concepts for search advertisers.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="py-8 space-y-4 text-[15px] text-neutral-700 leading-relaxed">
                  <p>
                    Read <Link href="/lead-generation/guides/how-google-local-services-ads-work" className={link}>how Google Local Services Ads work</Link>,{" "}
                    <Link href="/call-tracking/guides/dynamic-number-insertion-explained" className={link}>dynamic number insertion</Link>, and{" "}
                    <Link href="/call-tracking/guides/call-tracking-vs-google-analytics" className={link}>call tracking vs Google Analytics</Link>.
                  </p>
                  <p>
                    Product reviews: <Link href={getCallTrackingReviewUrl("callrail")} className={link}>CallRail</Link>,{" "}
                    <Link href="/call-tracking/best-call-tracking-software" className={link}>best call tracking software</Link>.
                  </p>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="One naming sheet for paid, organic, and LSA.">Attribution hygiene</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Document which platforms own “source of truth” per lead type</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Migrate CRM stages before importing ad platform conversions</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Retest after sitewide tag or consent-banner changes</span></li>
                  </ul>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="BeltStack does not configure your ad accounts.">Clear expertise boundaries</SectionTitle>
                  <p className="text-[15px] leading-relaxed text-neutral-700">
                    This guide explains concepts so you can brief agencies honestly. Implementation details change when Google updates interfaces—verify in your live account and with certified partners.
                  </p>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <GuideFaqSection faqs={FAQ} />
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Call tracking" items={SIDEBAR} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCallTrackingResources excludeHref={href} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Call Tracking with Google Ads & Local Services Ads | BeltStack",
    description:
      "Integrate call tracking with Google Ads and LSA: forwarding numbers, deduping conversions, CRM handoffs, and GA4 boundaries.",
  };
}
