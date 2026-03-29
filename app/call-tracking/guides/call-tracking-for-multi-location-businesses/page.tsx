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
const href = "/call-tracking/guides/call-tracking-for-multi-location-businesses";

const FAQ = [
  { q: "Do I need separate number pools per location?", a: "Often yes—collision risk and reporting clarity improve when each market has dedicated inventory, especially at higher call volumes." },
  { q: "How do franchises keep brand reporting consistent?", a: "Define naming conventions for sources, enforce CRM required fields, and roll up dashboards by territory—delegation without taxonomy collapses within a quarter." },
  { q: "What about HIPAA or sensitive verticals?", a: "Some industries need stricter logging and retention—validate with compliance before enabling recordings or transcripts." },
];

const SIDEBAR: GuideSidebarItem[] = [
  { name: "CallTrackingMetrics", logoSrc: "/Logos/calltrackingmetrics.jpeg", rating: 4.3, bestFor: "Multi-site", reviewHref: getCallTrackingReviewUrl("calltrackingmetrics") },
  { name: "CallRail", logoSrc: "/Logos/callrail.jpeg", rating: 4.5, bestFor: "SMB scale", reviewHref: getCallTrackingReviewUrl("callrail") },
  { name: "WhatConverts", logoSrc: "/Logos/whatconverts.jpeg", rating: 4.4, bestFor: "Lead IDs", reviewHref: getCallTrackingReviewUrl("whatconverts") },
];

export default function CallTrackingForMultiLocationBusinessesPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Multi-Location Call Tracking</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold sm:text-4xl">Call Tracking for Multi-Location Businesses</h1>
                  <p className="mt-3 text-[#57534E]">
                    Number pools, roll-up reporting, and CRM conventions—what to set before you scale past one storefront.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="py-8 space-y-4 text-[15px] text-neutral-700 leading-relaxed">
                  <p>
                    Align with <Link href="/reputation-management/guides/review-response-playbooks-for-multi-location" className={link}>multi-location reputation playbooks</Link> and{" "}
                    <Link href="/reputation-management/guides/nap-consistency-and-local-business-listings" className={link}>NAP discipline</Link> so tracking numbers do not fight directory data.
                  </p>
                  <p>
                    Contractor context: <Link href="/call-tracking/guides/call-tracking-for-contractors" className={link}>call tracking for contractors</Link> and{" "}
                    <Link href="/lead-generation/guides/speed-to-lead-for-inbound-inquiries" className={link}>speed-to-lead</Link>.
                  </p>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Governance before more numbers.">Implementation pattern</SectionTitle>
                  <ol className="list-decimal pl-5 space-y-2 text-[15px] leading-relaxed text-neutral-700">
                    <li>Canonical location IDs in CRM</li>
                    <li>Pool sizing per metro based on peak concurrent sessions</li>
                    <li>Dashboards: corporate vs franchise views</li>
                    <li>Retention policies for call recordings</li>
                  </ol>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <GuideFaqSection faqs={FAQ} />
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Call tracking tools" items={SIDEBAR} stickyTop={88} />
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
    title: "Call Tracking for Multi-Location Businesses | BeltStack",
    description:
      "Scale call tracking across locations: number pools, CRM IDs, roll-up reporting, and governance before you add markets.",
  };
}
