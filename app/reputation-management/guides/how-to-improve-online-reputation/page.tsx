import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedReputationManagementResources } from "@/components/guides/RelatedReputationManagementResources";
import { getReputationManagementReviewUrl } from "@/lib/routes";

const href = "/reputation-management/guides/how-to-improve-online-reputation";
const PODIUM_LOGO = "/Logos/podium.jpeg";
const BIRDEYE_LOGO = "/Logos/birdeye.svg";
const NICEJOB_LOGO = "/Logos/nicejob.jpeg";
const FAQ = [
  { q: "How long does online reputation improvement take?", a: "Most teams see directional improvement within 30-90 days when request and response workflows are consistent." },
  { q: "What should we prioritize first?", a: "Start with post-job request consistency, then response SLA, then recurring root-cause fixes from complaint patterns." },
  { q: "How do we connect reputation work to revenue?", a: "Track conversion-rate and booked-job changes alongside review trends in CRM and lead reports." },
  { q: "Can software alone improve reputation?", a: "No. Software enables consistency, but outcomes depend on service delivery quality and follow-up behavior." },
];
const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Podium", logoSrc: PODIUM_LOGO, rating: 4.5, bestFor: "Communication-first review systems", reviewHref: getReputationManagementReviewUrl("podium") },
  { name: "Birdeye", logoSrc: BIRDEYE_LOGO, rating: 4.6, bestFor: "Broader operational controls", reviewHref: getReputationManagementReviewUrl("birdeye") },
  { name: "NiceJob", logoSrc: NICEJOB_LOGO, rating: 4.4, bestFor: "Fast owner-led adoption", reviewHref: getReputationManagementReviewUrl("nicejob") },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white"><main>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
          <article className="min-w-0 lg:col-span-8"><div className="max-w-[720px] pt-8 pb-16">
            <nav aria-label="Breadcrumb" className="pb-4"><ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]"><li><Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link></li><li aria-hidden>/</li><li><Link href="/reputation-management" className="text-gray-500 hover:text-gray-900">Reputation Management</Link></li><li aria-hidden>/</li><li><Link href="/reputation-management/guides" className="text-gray-500 hover:text-gray-900">Guides</Link></li><li aria-hidden>/</li><li className="text-gray-700 font-medium" aria-current="page">How to Improve Online Reputation</li></ol></nav>
            <header className="pb-6 border-b border-neutral-200/60"><h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl">How to Improve Online Reputation</h1><p className="mt-3 text-[#57534E]">A practical 90-day framework for local service businesses.</p><p className="mt-3 text-[#57534E]">After building this operating plan, shortlist tools in our <Link href="/reputation-management/best-reputation-management-software" className="font-semibold text-[#10B981] hover:underline">best reputation management software roundup</Link>, then compare implementation trade-offs in the <Link href={getReputationManagementReviewUrl("podium")} className="font-semibold text-[#10B981] hover:underline">Podium</Link> and <Link href={getReputationManagementReviewUrl("nicejob")} className="font-semibold text-[#10B981] hover:underline">NiceJob</Link> reviews and choose rollout fit on the <Link href="/reputation-management/best-for/contractors" className="font-semibold text-[#10B981] hover:underline">contractors best-for page</Link>.</p><GuideLastUpdated date="March 25, 2026" /></header>
            <div className="prose prose-neutral mt-8 max-w-none text-[#57534E] text-base leading-relaxed">
              <h2 className="text-[#1A2D48] text-xl font-bold">Phase 1: Build request consistency</h2>
              <p>Trigger review requests from completed jobs and standardize request copy by service type.</p>
              <p>
                Define who sends requests, when they are sent, and what counts as an eligible job. Keep request workflows simple and measurable so teams can maintain cadence during busy weeks.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Phase 2: Tighten response quality</h2>
              <p>Respond quickly to all feedback, especially negatives. Escalate operational issues into service-team playbooks.</p>
              <p>
                Build response templates for common scenarios, then allow manager edits for context. Track both speed and resolution quality; fast low-quality replies can still harm trust and conversions.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Phase 3: Fix root causes from review themes</h2>
              <p>
                Group complaints by service category (timeliness, pricing clarity, communication, workmanship) and push owners in operations. Reputation only compounds when service delivery issues are reduced at the source.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Phase 4: Measure business impact</h2>
              <p>Track rating trends against lead and booked-job conversion in <Link href="/crm" className="font-semibold text-[#10B981] hover:underline">CRM</Link>, while improving visibility through <Link href="/seo-tools" className="font-semibold text-[#10B981] hover:underline">SEO tools</Link> and improving funnel quality with <Link href="/lead-generation" className="font-semibold text-[#10B981] hover:underline">lead generation systems</Link>.</p>
              <p>
                Pair review metrics with <Link href="/call-tracking" className="font-semibold text-[#10B981] hover:underline">call attribution</Link> and <Link href="/website-builders" className="font-semibold text-[#10B981] hover:underline">website trust placement</Link> to confirm that reputation gains translate into higher-quality pipeline.
              </p>
            </div>
            <div className="mt-12"><GuideFaqSection faqs={FAQ} /></div>
          </div></article>
          <div className="hidden lg:block lg:col-span-4 lg:pt-8"><GuideSidebar title="Reputation Management Reviews" items={SIDEBAR_ITEMS} stickyTop={88} /></div>
        </div>
      </div>
      <RelatedReputationManagementResources excludeHref={href} />
    </main><Footer /></div>
  );
}

export function generateMetadata() { return { title: "How to Improve Online Reputation | BeltStack", description: "A practical system to improve ratings, responses, and trust-led conversion for local teams." }; }
