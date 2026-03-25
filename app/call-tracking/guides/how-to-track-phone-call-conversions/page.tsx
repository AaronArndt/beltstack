import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCallTrackingResources } from "@/components/guides/RelatedCallTrackingResources";
import { getCallTrackingBestForUrl, getCallTrackingReviewUrl } from "@/lib/routes";

const href = "/call-tracking/guides/how-to-track-phone-call-conversions";
const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const FAQ = [
  {
    q: "Is a answered call a conversion?",
    a: "Not automatically—define conversions around qualified leads or booked jobs so spam and wrong-number calls do not inflate performance.",
  },
  {
    q: "Who owns the process?",
    a: "Marketing owns tags and dashboards; sales or dispatch owns dispositions. Without both, reports stay pretty and pipeline stays wrong.",
  },
  {
    q: "How often should we review?",
    a: "Weekly during active paid programs; monthly at minimum for organic-led teams. Seasonal trades should compare peak vs shoulder quarters.",
  },
];

export default function HowToTrackPhoneCallConversionsPage() {
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
                  How to Track Phone Call Conversions
                </li>
              </ol>
            </nav>
            <header className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How to Track Phone Call Conversions</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed">
                Define what counts as a qualified call, push outcomes into your CRM, and reconcile marketing sources with booked revenue—not raw ring volume. Start from our{" "}
                <Link href="/call-tracking/best-call-tracking-software" className={link}>
                  best call tracking software
                </Link>{" "}
                roundup and vendor write-ups like the{" "}
                <Link href={getCallTrackingReviewUrl("callrail")} className={link}>
                  CallRail review
                </Link>{" "}
                and{" "}
                <Link href={getCallTrackingReviewUrl("whatconverts")} className={link}>
                  WhatConverts review
                </Link>
                . Scenario picks:{" "}
                <Link href={getCallTrackingBestForUrl("small-business")} className={link}>
                  small business
                </Link>{" "}
                and{" "}
                <Link href={getCallTrackingBestForUrl("home-services")} className={link}>
                  home services
                </Link>
                .
              </p>
              <GuideLastUpdated date="March 24, 2026" />
            </header>
            <div className="prose prose-neutral mt-8 max-w-none text-[#57534E] text-base leading-relaxed">
              <h2 className="text-[#1A2D48] text-xl font-bold">Define conversion stages</h2>
              <p className="mt-2">
                Start with a written definition: is a conversion a booked estimate, a qualified homeowner, or simply an answered call over 30 seconds? The tighter the definition, the more honest your
                cost-per-acquisition math becomes. Track which lead sources are driving phone calls by pairing call data with{" "}
                <Link href="/lead-generation/best-lead-generation-tools" className={link}>
                  lead generation tools
                </Link>{" "}
                you already pay for.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Wire CRM fields</h2>
              <p className="mt-2">
                Every lead should carry a durable source value from call tracking or forms. Train reps to update outcomes within 24 hours so marketing sees lag but not permanent blind spots.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Close the loop monthly</h2>
              <p className="mt-2">
                Compare spend, tracked calls, qualified leads, and booked jobs in one view. If a channel shows strong call volume but weak closes, fix scripts and targeting before increasing budget.
                Pair with{" "}
                <Link href="/crm" className={link}>
                  CRM software
                </Link>{" "}
                reviews when your stack needs an upgrade.
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
    title: "How to Track Phone Call Conversions | BeltStack",
    description: "Define call conversions, sync CRM outcomes, and report marketing ROI for service businesses.",
  };
}
