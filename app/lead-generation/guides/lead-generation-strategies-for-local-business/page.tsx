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

const FAQ_ITEMS = [
  { q: "What are the best lead generation strategies for local business?", a: "The strongest mix is one paid intent channel, one marketplace channel where relevant, and one owned channel (SEO + reviews + conversion pages)." },
  { q: "How long should I test a new lead source?", a: "Run at least 30-60 days with stable response processes and consistent script quality before scaling or cutting." },
  { q: "What is the biggest lead generation mistake?", a: "Scaling spend before confirming close rate and booked-job margin by channel." },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Thumbtack", logoSrc: "/Logos/thumbtack.jpeg", rating: 4.4, bestFor: "Marketplace starter", reviewHref: getLeadGenerationReviewUrl("thumbtack") },
  { name: "Angi", logoSrc: "/Logos/angi.jpeg", rating: 4.3, bestFor: "Home services ecosystem", reviewHref: getLeadGenerationReviewUrl("angi") },
  { name: "Facebook Lead Ads", logoSrc: "/Logos/facebook.jpeg", rating: 4.1, bestFor: "Offer-led paid social", reviewHref: getLeadGenerationReviewUrl("facebook-lead-ads") },
];

export default function LeadGenerationStrategiesPage() {
  const href = "/lead-generation/guides/lead-generation-strategies-for-local-business";
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
                <li className="font-medium text-gray-700" aria-current="page">Lead Generation Strategies</li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold sm:text-4xl">Lead Generation Strategies for Local Business</h1>
              <p className="mt-3 text-[#57534E]">Blend paid and owned channels so you are not 100% dependent on one vendor.</p>
              <GuideLastUpdated date="March 25, 2026" />
            </section>
            <section className="py-8 space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <p>
                Local businesses should pair short-term paid leads with SEO, reviews, and referral loops. Start with one paid channel you can measure honestly—then add a second only after CPA stabilizes.
              </p>
              <p>
                <Link href="/lead-generation/best-lead-generation-tools" className="font-semibold text-[#10B981] hover:underline">
                  Best lead generation tools
                </Link>{" "}
                ·{" "}
                <Link href="/lead-generation/guides/paid-vs-organic-leads" className="font-semibold text-[#10B981] hover:underline">
                  Paid vs organic leads
                </Link>{" "}
                ·{" "}
                <Link href="/lead-generation/best-for/home-services" className="font-semibold text-[#10B981] hover:underline">
                  Best lead gen for home services
                </Link>
              </p>
              <p>
                Product deep dives:{" "}
                <Link href={getLeadGenerationReviewUrl("yelp-ads")} className="font-semibold text-[#10B981] hover:underline">
                  Yelp Ads review
                </Link>{" "}
                and{" "}
                <Link href={getLeadGenerationReviewUrl("facebook-lead-ads")} className="font-semibold text-[#10B981] hover:underline">
                  Facebook Lead Ads review
                </Link>
                .
              </p>
            </section>
            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Use this sequence to reduce waste and improve close rates.">Execution order</SectionTitle>
              <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                <li>• Stabilize response operations (call/SMS SLA, dispatch scripts).</li>
                <li>• Start one paid channel and one tracked organic growth stream.</li>
                <li>• Add channel #2 only after booked-job economics are stable.</li>
                <li>• Review every channel monthly using the same CRM disposition stages.</li>
              </ul>
            </section>
            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Internal links to pick your next action quickly.">Where to go next</SectionTitle>
              <p className="text-[15px] leading-relaxed text-neutral-700">
                If you need immediate demand, start with{" "}
                <Link href="/lead-generation/guides/how-google-local-services-ads-work" className="font-semibold text-[#10B981] hover:underline">how Google LSA works</Link>{" "}
                and the{" "}
                <Link href="/lead-generation/compare/google-local-services-ads-vs-yelp-ads" className="font-semibold text-[#10B981] hover:underline">Google LSA vs Yelp Ads comparison</Link>
                . If your issue is conversion from owned traffic, strengthen your{" "}
                <Link href="/website-builders/best-for/contractors" className="font-semibold text-[#10B981] hover:underline">website builder stack for contractors</Link>{" "}
                and pipe leads into your{" "}
                <Link href="/crm" className="font-semibold text-[#10B981] hover:underline">CRM follow-up workflow</Link>.
              </p>
            </section>
            <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
              <GuideFaqSection faqs={FAQ_ITEMS} />
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
  return { title: "Lead Generation Strategies for Local Business | BeltStack", description: "How local operators should balance paid leads with owned marketing." };
}
