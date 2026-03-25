import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCallTrackingResources } from "@/components/guides/RelatedCallTrackingResources";
import { getCallTrackingReviewUrl } from "@/lib/routes";

const href = "/call-tracking/guides/how-call-tracking-works";
const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const FAQ = [
  {
    q: "How often should I audit numbers?",
    a: "After major site template changes, GBP updates, or new landing page launches—broken pools are a common source of silent data loss.",
  },
  {
    q: "Do I need separate numbers per ad group?",
    a: "Not always—pools and keyword mapping can reduce clutter. Balance granularity with operational complexity your team will maintain.",
  },
  {
    q: "What about form leads?",
    a: "Many stacks track forms and chats alongside calls—use one lead inbox when possible to avoid arguing over channel credit in spreadsheets.",
  },
];

export default function HowCallTrackingWorksPage() {
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
                  How Call Tracking Works
                </li>
              </ol>
            </nav>
            <header className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How Call Tracking Works</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed">
                A practical overview of swap scripts, number pools, integrations, and QA—for teams that need trustworthy attribution, not vanity ring counts. Pair with{" "}
                <Link href={getCallTrackingReviewUrl("calltrackingmetrics")} className={link}>
                  CallTrackingMetrics
                </Link>{" "}
                or{" "}
                <Link href={getCallTrackingReviewUrl("callrail")} className={link}>
                  CallRail
                </Link>{" "}
                reviews when you shortlist vendors.
              </p>
              <GuideLastUpdated date="March 24, 2026" />
            </header>
            <div className="prose prose-neutral mt-8 max-w-none text-[#57534E] text-base leading-relaxed">
              <h2 className="text-[#1A2D48] text-xl font-bold">Swap script + session context</h2>
              <p className="mt-2">
                Most SMB stacks install a JavaScript snippet that listens for phone links and text on the page. When a visitor arrives from a tagged campaign or organic entry point, the tool serves a
                tracking number and associates the eventual call with that session where possible.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Number pools</h2>
              <p className="mt-2">
                High-traffic sites may use pools of numbers so concurrent visitors each get unique or semi-unique identifiers. Pool sizing affects cost—right-size against real concurrent sessions, not
                theoretical peak marketing slides.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">CRM and ads handoffs</h2>
              <p className="mt-2">
                The best implementations push call events (and dispositions) into the CRM so marketing and ops share one definition of a qualified lead. Without that bridge, dashboards look busy while
                pipeline truth stays opaque.
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
    title: "How Call Tracking Works | BeltStack",
    description: "How DNI, number pools, and CRM integrations produce trustworthy call attribution for local businesses.",
  };
}
