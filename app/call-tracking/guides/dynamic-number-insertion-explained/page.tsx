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
const href = "/call-tracking/guides/dynamic-number-insertion-explained";

const FAQ = [
  { q: "Does DNI hurt local SEO NAP?", a: "When misconfigured, swapping primary NAP on every page can confuse signals. Many teams display a stable legal number in footer/schema and use tracking numbers in campaign-specific placements—validate with your SEO owner." },
  { q: "What breaks DNI most often?", a: "Script load order, cached pages, consent managers blocking tags, and hybrid mobile subdomains. Always QA in production-like environments." },
  { q: "Is DNI the same as call extensions?", a: "Related but not identical—ads can use Google-controlled forwarding numbers while DNI specifically swaps numbers on your site by traffic source." },
];

const SIDEBAR: GuideSidebarItem[] = [
  { name: "CallRail", logoSrc: "/Logos/callrail.jpeg", rating: 4.5, bestFor: "DNI + forms", reviewHref: getCallTrackingReviewUrl("callrail") },
  { name: "WhatConverts", logoSrc: "/Logos/whatconverts.jpeg", rating: 4.4, bestFor: "Lead capture", reviewHref: getCallTrackingReviewUrl("whatconverts") },
  { name: "CTM", logoSrc: "/Logos/calltrackingmetrics.jpeg", rating: 4.3, bestFor: "Agency stacks", reviewHref: getCallTrackingReviewUrl("calltrackingmetrics") },
];

export default function DynamicNumberInsertionExplainedPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Dynamic Number Insertion</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold sm:text-4xl">Dynamic Number Insertion (DNI) Explained</h1>
                  <p className="mt-3 text-[#57534E]">
                    How DNI swaps phone numbers by source or session, what commonly breaks, and how to QA before campaigns launch.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="py-8 space-y-4 text-[15px] text-neutral-700 leading-relaxed">
                  <p>
                    Foundation: <Link href="/call-tracking/guides/what-is-call-tracking" className={link}>what is call tracking</Link> and{" "}
                    <Link href="/call-tracking/guides/how-call-tracking-works" className={link}>how call tracking works</Link>. NAP considerations:{" "}
                    <Link href="/reputation-management/guides/nap-consistency-and-local-business-listings" className={link}>NAP and listings</Link>.
                  </p>
                  <p>
                    Product depth: <Link href={getCallTrackingReviewUrl("callrail")} className={link}>CallRail</Link>,{" "}
                    <Link href="/call-tracking/compare" className={link}>call tracking comparisons</Link>.
                  </p>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Don’t ship Friday without this.">QA checklist</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Test organic, paid, and direct sessions side by side</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Verify number persists through first navigation click</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Confirm CRM receives source metadata on inbound calls</span></li>
                  </ul>
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
    title: "Dynamic Number Insertion (DNI) Explained | BeltStack",
    description:
      "Learn how DNI swaps numbers on your site by marketing source, SEO/NAP considerations, and pre-launch QA for local advertisers.",
  };
}
