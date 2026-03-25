import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCallTrackingResources } from "@/components/guides/RelatedCallTrackingResources";
import { getCallTrackingBestForUrl, getCallTrackingReviewUrl } from "@/lib/routes";

const href = "/call-tracking/guides/call-tracking-vs-google-analytics";
const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const FAQ = [
  {
    q: "Can I use only GA4 for calls?",
    a: "GA4 can count phone clicks, but it often lacks carrier-grade call metadata and keyword/session fidelity that dedicated call platforms provide—especially for paid search.",
  },
  {
    q: "Will both tools double-count?",
    a: "They can if you fire redundant conversion events without rules. Decide which system owns phone conversion truth for reporting and align tag plans accordingly.",
  },
  {
    q: "What about privacy and consent banners?",
    a: "Work with your vendor on regional requirements—especially if you record calls or run EU-heavy sites. See also privacy-forward options in our reviews.",
  },
];

export default function CallTrackingVsGoogleAnalyticsPage() {
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
                  Call Tracking vs Google Analytics
                </li>
              </ol>
            </nav>
            <header className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Call Tracking vs Google Analytics</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed">
                GA4 helps you understand site behavior; call tracking ties real phone conversations to marketing sources with telco-level detail. Most growing service businesses end up using both—with
                clear ownership of what counts as a conversion. See our{" "}
                <Link href="/call-tracking/best-call-tracking-software" className={link}>
                  best call tracking software
                </Link>{" "}
                roundup, then compare vendor depth in the{" "}
                <Link href={getCallTrackingReviewUrl("callrail")} className={link}>
                  CallRail review
                </Link>{" "}
                and{" "}
                <Link href={getCallTrackingReviewUrl("calltrackingmetrics")} className={link}>
                  CallTrackingMetrics review
                </Link>
                .
              </p>
              <GuideLastUpdated date="March 24, 2026" />
            </header>
            <div className="prose prose-neutral mt-8 max-w-none text-[#57534E] text-base leading-relaxed">
              <h2 className="text-[#1A2D48] text-xl font-bold">What GA4 does well</h2>
              <p className="mt-2">
                Funnels, landing page performance, and cross-device paths are GA4 strengths—especially when Search Console and ads accounts are linked. It is weaker when buyers pick up the phone and
                never complete a thank-you page.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">What call tracking adds</h2>
              <p className="mt-2">
                Keyword-level or session-level call context, recordings (where allowed), and native CRM integrations are the usual reasons teams add CallRail-class stacks. The goal is not duplicate
                dashboards—it is cleaner answers to which campaigns earn booked jobs.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Practical split</h2>
              <p className="mt-2">
                Let GA4 own site analytics; let call tracking own telephony attribution exports into CRM and ads platforms. Document the handoff so finance does not reconcile two conflicting conversion
                totals at month-end. Measure calls generated from organic traffic with our{" "}
                <Link href="/seo-tools" className={link}>
                  SEO tools hub
                </Link>
                , explore{" "}
                <Link href="/call-tracking/guides/how-to-track-phone-call-conversions" className={link}>
                  how to track phone call conversions
                </Link>
                , and use{" "}
                <Link href={getCallTrackingBestForUrl("contractors")} className={link}>
                  best call tracking for contractors
                </Link>{" "}
                when trade context matters.
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
    title: "Call Tracking vs Google Analytics | BeltStack",
    description: "When GA4 is enough, when you need call tracking, and how to avoid double-counting phone conversions.",
  };
}
