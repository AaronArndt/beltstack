import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCallTrackingResources } from "@/components/guides/RelatedCallTrackingResources";
import { getCallTrackingBestForUrl, getCallTrackingCompareUrl, getCallTrackingReviewUrl } from "@/lib/routes";

const href = "/call-tracking/guides/what-is-call-tracking";
const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const FAQ = [
  {
    q: "Is call tracking only for Google Ads?",
    a: "No—quality tools attribute calls from organic landing pages, directories, and offline campaigns too. The key is consistent dynamic number insertion (DNI) and CRM handoffs.",
  },
  {
    q: "Will call tracking replace my phone number?",
    a: "Marketing-facing numbers often swap per session or campaign while static numbers remain on GBP and trucks when appropriate. Follow vendor guidance so NAP stays trustworthy.",
  },
  {
    q: "Do small businesses need enterprise tools?",
    a: "Usually not on day one. Start with an SMB-friendly stack, prove weekly usage, then graduate when conversation AI or compliance demands it.",
  },
];

export default function WhatIsCallTrackingPage() {
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
                  What Is Call Tracking?
                </li>
              </ol>
            </nav>
            <header className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">What Is Call Tracking?</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed">
                Call tracking connects inbound phone calls to the marketing touch that caused them—search ads, SEO pages, directories, or campaigns—using dynamic numbers, session data, and integrations. For
                product picks, start with our{" "}
                <Link href="/call-tracking/best-call-tracking-software" className={link}>
                  best call tracking software (2026) roundup
                </Link>{" "}
                roundup, then read our{" "}
                <Link href={getCallTrackingReviewUrl("callrail")} className={link}>
                  CallRail review
                </Link>{" "}
                and{" "}
                <Link href={getCallTrackingReviewUrl("whatconverts")} className={link}>
                  WhatConverts review
                </Link>
                . Scenario entry points include{" "}
                <Link href={getCallTrackingBestForUrl("small-business")} className={link}>
                  best call tracking for small business
                </Link>
                —and once calls become pipeline, your{" "}
                <Link href="/crm" className={link}>
                  CRM
                </Link>{" "}
                should record booked-job outcomes, not just ring counts.
              </p>
              <GuideLastUpdated date="March 24, 2026" />
            </header>
            <div className="prose prose-neutral mt-8 max-w-none text-[#57534E] text-base leading-relaxed">
              <h2 className="text-[#1A2D48] text-xl font-bold">Why service businesses use it</h2>
              <p className="mt-2">
                Contractors live on the phone. Without attribution, every ring looks the same—so you cannot defend LSA spend, prune bad keywords, or prove which SEO pages earn booked jobs. Call tracking
                makes source data operational, especially when paired with CRM stages. Track which lead sources drive phone calls with our{" "}
                <Link href="/lead-generation" className={link}>
                  lead generation tools hub
                </Link>
                , and measure organic landing pages that feed those calls via the{" "}
                <Link href="/seo-tools" className={link}>
                  SEO tools hub
                </Link>
                .
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Dynamic number insertion (DNI)</h2>
              <p className="mt-2">
                DNI swaps the number shown on your website based on the visitor&apos;s session or campaign parameters. That lets platforms map calls back to keywords, landing pages, or ads. Implementation
                quality matters—broken scripts create inconsistent reporting. Read{" "}
                <Link href="/call-tracking/guides/how-call-tracking-works" className={link}>
                  how call tracking works
                </Link>{" "}
                for setup habits.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">How tools differ</h2>
              <p className="mt-2">
                Some products emphasize marketing dashboards (CallRail-class), others emphasize lead-level rollups across calls, forms, and chats (WhatConverts-class), and others target deep paid-search
                analytics (CallTrackingMetrics-class). Compare{" "}
                <Link href={getCallTrackingCompareUrl("callrail-vs-whatconverts")} className={link}>
                  CallRail vs WhatConverts
                </Link>{" "}
                when you are torn between call-centric vs lead-inbox clarity.
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
    title: "What Is Call Tracking? | BeltStack",
    description: "Learn what call tracking is, how dynamic numbers work, and why contractors use it to prove marketing ROI.",
  };
}
