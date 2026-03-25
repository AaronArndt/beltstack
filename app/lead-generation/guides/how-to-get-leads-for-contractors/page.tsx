import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getLeadGenerationReviewUrl } from "@/lib/routes";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedLeadGenerationResources } from "@/components/guides/RelatedLeadGenerationResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";

const FAQ = [
  { q: "Where should contractors start?", a: "Most teams pilot Thumbtack or Google Local Services Ads if eligible—then diversify after measuring booked-job CPA." },
  { q: "What metric matters most?", a: "Cost per booked job after refunds—not raw lead count." },
  { q: "Should contractors buy leads or build organic channels first?", a: "Buy leads for immediate pipeline and build organic channels in parallel. Over time, organic and referral channels improve margin resilience." },
  { q: "How fast should my team respond to paid leads?", a: "Aim for near-immediate response by phone and SMS. Shared leads decay quickly when response is delayed." },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Thumbtack", logoSrc: "/Logos/thumbtack.jpeg", rating: 4.4, bestFor: "Best marketplace starter", reviewHref: getLeadGenerationReviewUrl("thumbtack") },
  { name: "Google Local Services Ads", logoSrc: "/Logos/google.jpeg", rating: 4.5, bestFor: "Best urgent search channel", reviewHref: getLeadGenerationReviewUrl("google-local-services-ads") },
  { name: "Angi", logoSrc: "/Logos/angi.jpeg", rating: 4.3, bestFor: "Best directory + bundle option", reviewHref: getLeadGenerationReviewUrl("angi") },
];

export default function HowToGetLeadsForContractorsPage() {
  const href = "/lead-generation/guides/how-to-get-leads-for-contractors";
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
            <nav aria-label="Breadcrumb" className="pt-8 pb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li><Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/lead-generation" className="text-gray-500 hover:text-gray-900">Lead Generation</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/lead-generation/guides" className="text-gray-500 hover:text-gray-900">Guides</Link></li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">How to Get Leads for Contractors</li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How to Get Leads for Contractors</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                A practical path for trade businesses evaluating marketplaces, Google Local Services Ads, and complementary channels. Use our{" "}
                <Link href="/lead-generation/best-lead-generation-tools" className="font-semibold text-[#10B981] hover:underline">
                  best lead generation tools roundup
                </Link>{" "}
                for ranked picks, then dive into product reviews when you shortlist.
              </p>
              <GuideLastUpdated date="March 25, 2026" />
            </section>
            <section className="pt-8 pb-8 space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <p>
                Start with dispatch reality: if you cannot answer inbound in minutes, paid shared leads will underperform regardless of vendor.
                Build a simple SLA (phone + SMS), then test one marketplace and one search channel where eligible.
              </p>
              <p>
                Use our <Link href="/lead-generation/best-for/contractors" className="font-semibold text-[#10B981] hover:underline">best lead generation tools for contractors</Link> picks, the{" "}
                <Link href="/lead-generation/compare/thumbtack-vs-angi" className="font-semibold text-[#10B981] hover:underline">Thumbtack vs Angi comparison</Link>, and full reviews such as{" "}
                <Link href={getLeadGenerationReviewUrl("thumbtack")} className="font-semibold text-[#10B981] hover:underline">Thumbtack</Link> and{" "}
                <Link href={getLeadGenerationReviewUrl("google-local-services-ads")} className="font-semibold text-[#10B981] hover:underline">Google Local Services Ads</Link> when you shortlist.
                Once calls flow, tighten follow-up with our <Link href="/crm" className="font-semibold text-[#10B981] hover:underline">CRM software hub</Link>.
              </p>
            </section>
            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <h2 className="text-[#1A2D48] text-2xl font-bold">Contractor lead channel mix</h2>
              <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
              <ul className="mt-4 space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                <li>• Intent channel: Google LSA (when eligible) for urgent calls.</li>
                <li>• Marketplace channel: Thumbtack/Angi for additional volume.</li>
                <li>• Owned channel: service pages + reviews + local SEO for long-term margin.</li>
                <li>• Ops layer: CRM and call-tracking discipline to keep attribution honest.</li>
              </ul>
            </section>
            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <h2 className="text-[#1A2D48] text-2xl font-bold">What to do after your first 30 days</h2>
              <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
                Keep the top-performing channel on booked-job margin, cut weak categories, and improve response scripts before increasing budget. Use{" "}
                <Link href="/lead-generation/guides/paid-vs-organic-leads" className="font-semibold text-[#10B981] hover:underline">paid vs organic leads</Link>{" "}
                to rebalance spend and{" "}
                <Link href="/call-tracking" className="font-semibold text-[#10B981] hover:underline">call tracking software</Link>{" "}
                to validate source quality.
              </p>
            </section>
            <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <h2 className="text-[#1A2D48] text-2xl font-bold">FAQs</h2>
              <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
              <GuideFaqSection faqs={FAQ} />
            </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Lead Generation Reviews" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedLeadGenerationResources excludeHref={href} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How to Get Leads for Contractors | BeltStack Guide",
    description: "How contractors should evaluate paid lead marketplaces, Google LSA, and follow-up before scaling spend.",
  };
}
