import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedReputationManagementResources } from "@/components/guides/RelatedReputationManagementResources";
import { getReputationManagementReviewUrl } from "@/lib/routes";

const href = "/reputation-management/guides/how-to-respond-to-negative-reviews";
const PODIUM_LOGO = "/Logos/podium.jpeg";
const BIRDEYE_LOGO = "/Logos/birdeye.svg";
const NICEJOB_LOGO = "/Logos/nicejob.jpeg";
const FAQ = [
  { q: "Should we respond to every negative review?", a: "Yes, when possible. Fast, professional responses show accountability and reduce trust damage." },
  { q: "What should we avoid in responses?", a: "Avoid defensive language, customer blame, and policy-violating disclosures." },
  { q: "How quickly should we reply?", a: "Target same-day response for serious complaints and no later than 24 hours for most negatives." },
  { q: "Can software help response quality?", a: "Yes, tools can route ownership and templates, but judgment and operational follow-through still matter." },
];
const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Birdeye", logoSrc: BIRDEYE_LOGO, rating: 4.6, bestFor: "Response workflow depth", reviewHref: getReputationManagementReviewUrl("birdeye") },
  { name: "Podium", logoSrc: PODIUM_LOGO, rating: 4.5, bestFor: "Fast communication loops", reviewHref: getReputationManagementReviewUrl("podium") },
  { name: "NiceJob", logoSrc: NICEJOB_LOGO, rating: 4.4, bestFor: "Simple team execution", reviewHref: getReputationManagementReviewUrl("nicejob") },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white"><main>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
          <article className="min-w-0 lg:col-span-8"><div className="max-w-[720px] pt-8 pb-16">
            <nav aria-label="Breadcrumb" className="pb-4"><ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]"><li><Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link></li><li aria-hidden>/</li><li><Link href="/reputation-management" className="text-gray-500 hover:text-gray-900">Reputation Management</Link></li><li aria-hidden>/</li><li><Link href="/reputation-management/guides" className="text-gray-500 hover:text-gray-900">Guides</Link></li><li aria-hidden>/</li><li className="text-gray-700 font-medium" aria-current="page">How to Respond to Negative Reviews</li></ol></nav>
            <header className="pb-6 border-b border-neutral-200/60"><h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl">How to Respond to Negative Reviews</h1><p className="mt-3 text-[#57534E]">Protect trust signals while moving customers to real resolution.</p><p className="mt-3 text-[#57534E]">Pair this framework with the <Link href="/reputation-management/best-reputation-management-software" className="font-semibold text-[#10B981] hover:underline">best reputation management software rankings</Link>, then evaluate response workflows in the <Link href={getReputationManagementReviewUrl("birdeye")} className="font-semibold text-[#10B981] hover:underline">Birdeye</Link> and <Link href={getReputationManagementReviewUrl("podium")} className="font-semibold text-[#10B981] hover:underline">Podium</Link> reviews and choose implementation depth from <Link href="/reputation-management/best-for/small-business" className="font-semibold text-[#10B981] hover:underline">small business</Link> or <Link href="/reputation-management/best-for/home-services" className="font-semibold text-[#10B981] hover:underline">home services</Link> best-for pages.</p><GuideLastUpdated date="March 25, 2026" /></header>
            <div className="prose prose-neutral mt-8 max-w-none text-[#57534E] text-base leading-relaxed">
              <h2 className="text-[#1A2D48] text-xl font-bold">Use a response framework</h2>
              <p>Acknowledge the issue, apologize when appropriate, offer a clear next step, and move sensitive details offline.</p>
              <p>
                A practical template is: acknowledge, own, clarify next step, and close loop. Keep tone calm and specific. Public responses are not only for the reviewer; they are trust signals for future prospects comparing service providers.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Route ownership internally</h2>
              <p>Assign review response owners by location or service line. Use <Link href={getReputationManagementReviewUrl("birdeye")} className="font-semibold text-[#10B981] hover:underline">Birdeye</Link> or <Link href={getReputationManagementReviewUrl("podium")} className="font-semibold text-[#10B981] hover:underline">Podium</Link> workflows to avoid response delays.</p>
              <p>
                Define escalation lanes for safety complaints, billing disputes, and service-quality failures. Without named ownership, teams either over-respond emotionally or under-respond and let negative sentiment compound.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Measure response quality, not just speed</h2>
              <p>
                Track response SLA, resolution handoff completion, and repeat complaint categories by service line. Fast low-quality responses can still damage trust. Tie resolution outcomes into <Link href="/crm" className="font-semibold text-[#10B981] hover:underline">CRM</Link> notes so office and field teams learn from recurring patterns.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Close the operational loop</h2>
              <p>Feed recurring complaint themes into dispatch, QA, and <Link href="/crm" className="font-semibold text-[#10B981] hover:underline">CRM</Link> follow-up processes so the same issues stop appearing in reviews.</p>
              <p>
                If the same complaints repeat, the issue is operational, not reputational. Use weekly review retros with service managers, then prioritize fixes that reduce complaint recurrence and improve close rates from new leads.
              </p>
              <p>
                After process fixes are in place, reinforce trust updates in your <Link href="/website-builders" className="font-semibold text-[#10B981] hover:underline">website pages</Link>, align local visibility changes with <Link href="/seo-tools" className="font-semibold text-[#10B981] hover:underline">SEO tools</Link>, monitor conversion trends in <Link href="/lead-generation" className="font-semibold text-[#10B981] hover:underline">lead generation</Link>, and validate call-quality impact through <Link href="/call-tracking" className="font-semibold text-[#10B981] hover:underline">call tracking</Link>.
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

export function generateMetadata() { return { title: "How to Respond to Negative Reviews | BeltStack", description: "Response frameworks for handling negative reviews in local service businesses." }; }
