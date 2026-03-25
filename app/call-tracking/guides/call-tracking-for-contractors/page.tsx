import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCallTrackingResources } from "@/components/guides/RelatedCallTrackingResources";
import { getCallTrackingBestForUrl, getCallTrackingCompareUrl, getCallTrackingReviewUrl } from "@/lib/routes";

const href = "/call-tracking/guides/call-tracking-for-contractors";
const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const FAQ = [
  {
    q: "LSA and PPC both run—how do I avoid double credit?",
    a: "Use consistent UTM and integration discipline; reconcile reporting weekly with dispatch feedback so duplicate narratives do not inflate perceived ROI.",
  },
  {
    q: "Should I track every truck line?",
    a: "Track marketing-facing lines and campaign landing pages first. Operational dispatch lines may not need DNI if they are not used as ad destinations.",
  },
  {
    q: "What if my CRM is messy?",
    a: "Fix stages and source fields before you scale spend—call tracking cannot save pipelines that never record outcomes.",
  },
];

export default function CallTrackingForContractorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="min-w-0 max-w-[720px] pt-8 pb-16">
            <nav aria-label="Breadcrumb" className="pb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-900">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/call-tracking" className="text-gray-500 hover:text-gray-900">
                    Call Tracking
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/call-tracking/guides" className="text-gray-500 hover:text-gray-900">
                    Guides
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Call Tracking for Contractors
                </li>
              </ol>
            </nav>
            <header className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Call Tracking for Contractors</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed">
                Dispatch-heavy trades need source truth on emergency and estimate calls. Our{" "}
                <Link href="/call-tracking/best-call-tracking-software" className={link}>
                  best call tracking software
                </Link>{" "}
                roundup ranks vendors; use{" "}
                <Link href={getCallTrackingBestForUrl("contractors")} className={link}>
                  best call tracking for contractors
                </Link>{" "}
                for trade-specific picks, read the{" "}
                <Link href={getCallTrackingReviewUrl("callrail")} className={link}>
                  CallRail review
                </Link>
                , and open{" "}
                <Link href={getCallTrackingCompareUrl("callrail-vs-whatconverts")} className={link}>
                  CallRail vs WhatConverts
                </Link>{" "}
                when you compare lead inbox vs call-centric workflows.
              </p>
              <GuideLastUpdated date="March 24, 2026" />
            </header>
            <div className="prose prose-neutral mt-8 max-w-none text-[#57534E] text-base leading-relaxed">
              <h2 className="text-[#1A2D48] text-xl font-bold">Start with CRM stages</h2>
              <p className="mt-2">
                Tag the marketing source on create, then require reps to move deals to booked/won/lost with reasons. Call tracking fills the top of that funnel with honest channel names; CRM tells you
                whether those channels produce revenue. Send inbound call leads into your{" "}
                <Link href="/crm" className={link}>
                  CRM
                </Link>{" "}
                with source tags intact—otherwise attribution stops at the dial.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Speed-to-lead still wins</h2>
              <p className="mt-2">
                Attribution does not replace answering fast—especially for LSA and marketplace leads. Pair tracking with routing rules your crew will actually follow on nights and weekends.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Cross-links that matter</h2>
              <p className="mt-2">
                Track calls coming from your website and paid programs together: compare{" "}
                <Link href="/lead-generation" className={link}>
                  lead generation tools for contractors
                </Link>{" "}
                when you need more opportunities, and ship high-converting pages with{" "}
                <Link href="/website-builders/best-for/contractors" className={link}>
                  website builders for contractors
                </Link>
                .
              </p>
            </div>
            <div className="mt-12">
              <GuideFaqSection faqs={FAQ} />
            </div>
          </article>
        </div>
        <RelatedCallTrackingResources excludeHref={href} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Call Tracking for Contractors | BeltStack",
    description: "How trades use call tracking with LSA, PPC, and SEO—plus CRM habits that make attribution honest.",
  };
}
