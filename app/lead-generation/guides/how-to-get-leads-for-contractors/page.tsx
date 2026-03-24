import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedLeadGenerationResources } from "@/components/guides/RelatedLeadGenerationResources";

const FAQ = [
  { q: "Where should contractors start?", a: "Most teams pilot Thumbtack or Google Local Services Ads if eligible—then diversify after measuring booked-job CPA." },
  { q: "What metric matters most?", a: "Cost per booked job after refunds—not raw lead count." },
];

export default function HowToGetLeadsForContractorsPage() {
  const href = "/lead-generation/guides/how-to-get-leads-for-contractors";
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="max-w-[720px]">
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
                A practical path for trade businesses evaluating marketplaces, Google Local Services Ads, and complementary channels.
              </p>
              <GuideLastUpdated date="March 24, 2026" />
            </section>
            <section className="pt-8 pb-8 space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <p>
                Start with dispatch reality: if you cannot answer inbound in minutes, paid shared leads will underperform regardless of vendor.
                Build a simple SLA (phone + SMS), then test one marketplace and one search channel where eligible.
              </p>
              <p>
                Use our <Link href="/lead-generation/best-for/contractors" className="font-semibold text-[#10B981] hover:underline">best for contractors</Link> picks and{" "}
                <Link href="/lead-generation/compare/thumbtack-vs-angi" className="font-semibold text-[#10B981] hover:underline">Thumbtack vs Angi</Link> comparison when you shortlist.
              </p>
            </section>
            <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <h2 className="text-[#1A2D48] text-2xl font-bold">FAQs</h2>
              <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
              <GuideFaqSection faqs={FAQ} />
            </section>
          </article>
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
