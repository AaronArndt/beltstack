import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getLeadGenerationReviewUrl } from "@/lib/routes";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedLeadGenerationResources } from "@/components/guides/RelatedLeadGenerationResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";

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
const href = "/lead-generation/guides/meta-leads-for-local-service-businesses";

const FAQ = [
  { q: "Are Meta leads lower quality than search?", a: "Intent can be earlier-stage; quality depends on creative, targeting, and speed-to-lead. Measure booked jobs and CPA, not raw form fills." },
  { q: "Should I use Instant Forms or send traffic to my website?", a: "Instant Forms reduce friction but shorten your brand story; website landers add message match and trust blocks. Test both with identical follow-up SLAs." },
  { q: "How do Meta leads connect to my CRM?", a: "Use native integrations or middleware (Zapier, Make) with deduping rules. Tag source and campaign on ingest so sales scripts stay consistent." },
];

const SIDEBAR: GuideSidebarItem[] = [
  { name: "Google LSA", logoSrc: "/Logos/google.jpeg", rating: 4.5, bestFor: "Search contrast", reviewHref: getLeadGenerationReviewUrl("google-local-services-ads") },
  { name: "Thumbtack", logoSrc: "/Logos/thumbtack.jpeg", rating: 4.4, bestFor: "Marketplace compare", reviewHref: getLeadGenerationReviewUrl("thumbtack") },
  { name: "Angi", logoSrc: "/Logos/angi.jpeg", rating: 4.0, bestFor: "Directory demand", reviewHref: getLeadGenerationReviewUrl("angi") },
];

export default function MetaLeadsForLocalServicePage() {
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
                    <li><Link href="/lead-generation">Lead Generation</Link></li><li aria-hidden>/</li>
                    <li><Link href="/lead-generation/guides">Guides</Link></li><li aria-hidden>/</li>
                    <li className="font-medium text-gray-700" aria-current="page">Meta Leads for Local Service</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold sm:text-4xl">Meta (Facebook &amp; Instagram) Leads for Local Service Businesses</h1>
                  <p className="mt-3 text-[#57534E]">
                    Lead forms, geo targeting, creative hooks, and CRM handoff—evaluation concepts for Meta ads without promising channel-specific CPA.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="py-8 space-y-4 text-[15px] text-neutral-700 leading-relaxed">
                  <p>
                    Buyers compare Meta to high-intent search. Meta can fill calendars when audiences are nurtured with proof-driven creative and tight retargeting, but it rarely tolerates slow follow-up. Read{" "}
                    <Link href="/lead-generation/guides/speed-to-lead-for-inbound-inquiries" className={link}>speed-to-lead</Link>,{" "}
                    <Link href="/lead-generation/guides/paid-vs-organic-leads" className={link}>paid vs organic leads</Link>, and{" "}
                    <Link href="/lead-generation/guides/how-google-local-services-ads-work" className={link}>how Google Local Services Ads work</Link> for contrast.
                  </p>
                  <p>
                    Align landing experience with <Link href="/lead-generation/guides/landing-pages-for-paid-lead-campaigns" className={link}>paid landing page basics</Link>; sync outcomes with{" "}
                    <Link href="/crm" className={link}>CRM</Link> and optionally <Link href="/call-tracking" className={link}>call tracking</Link> when phone is the primary conversion.
                  </p>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Creative + ops, not only audience presets.">Evaluation checklist</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Offer clarity matches ad headline (no bait-and-switch)</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Service radius and dispatch reality reflected in copy</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Budget buffers for learning phase and seasonality</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Daily cap until response SLA proven</span></li>
                  </ul>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Transparent measurement beats guru anecdotes.">Trust</SectionTitle>
                  <p className="text-[15px] leading-relaxed text-neutral-700">
                    BeltStack does not quote Meta CPAs here—costs swing by trade and market. Build a pilot with finance-visible reporting: cost per booked job after refunds and no-shows, not dashboard vanity metrics alone.
                  </p>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <GuideFaqSection faqs={FAQ} />
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Lead platforms" items={SIDEBAR} stickyTop={88} />
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
    title: "Meta (Facebook & Instagram) Leads for Local Service | BeltStack",
    description:
      "Evaluate Meta lead ads for home and local service: forms vs landers, CRM routing, creative proof, and how to compare against search and marketplaces.",
  };
}
