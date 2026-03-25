import Link from "next/link";
import { Footer } from "@/components/Footer";
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
  { q: "How do Google Local Services Ads charge?", a: "LSA generally charges per lead interaction, not per click. Final economics still depend on category, location, and booked-job conversion quality." },
  { q: "Why are my LSA leads expensive?", a: "Competition, weak profile trust signals, broad service areas, and poor response speed can all raise effective cost per booked job." },
  { q: "What should I run with LSA?", a: "Most teams run LSA with at least one marketplace or paid social channel plus owned SEO pages to reduce dependency risk." },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Google Local Services Ads", logoSrc: "/Logos/google.jpeg", rating: 4.5, bestFor: "Best urgent search intent", reviewHref: "/lead-generation/review/google-local-services-ads" },
  { name: "Yelp Ads", logoSrc: "/Logos/yelp.png", rating: 4.0, bestFor: "Yelp-heavy metros", reviewHref: "/lead-generation/review/yelp-ads" },
  { name: "Thumbtack", logoSrc: "/Logos/thumbtack.jpeg", rating: 4.4, bestFor: "Marketplace complement", reviewHref: "/lead-generation/review/thumbtack" },
];

export default function HowGoogleLsaWorkPage() {
  const href = "/lead-generation/guides/how-google-local-services-ads-work";
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
                <li className="font-medium text-gray-700" aria-current="page">How Google LSA Works</li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold sm:text-4xl">How Google Local Services Ads Work</h1>
              <p className="mt-3 text-[#57534E]">Screening, budgets, disputes, and lead billing basics.</p>
              <GuideLastUpdated date="March 25, 2026" />
            </section>
            <section className="py-8 space-y-4 text-[15px] text-neutral-700 leading-relaxed">
              <p>LSA shows a Google Screened listing for eligible categories. You set a weekly budget, receive calls/messages as leads, and can dispute misfires per policy.</p>
              <p>
                <Link href="/lead-generation/best-lead-generation-tools" className="font-semibold text-[#10B981] hover:underline">
                  Best lead generation tools roundup
                </Link>{" "}
                ·{" "}
                <Link href="/lead-generation/review/google-local-services-ads" className="font-semibold text-[#10B981] hover:underline">
                  Full Google LSA review
                </Link>{" "}
                ·{" "}
                <Link href="/lead-generation/compare/google-local-services-ads-vs-yelp-ads" className="font-semibold text-[#10B981] hover:underline">
                  Google LSA vs Yelp Ads comparison
                </Link>
              </p>
              <p>
                Marketplace contrast:{" "}
                <Link href="/lead-generation/review/thumbtack" className="font-semibold text-[#10B981] hover:underline">
                  Thumbtack review
                </Link>
                . Trade scenario:{" "}
                <Link href="/lead-generation/best-for/plumbing" className="font-semibold text-[#10B981] hover:underline">
                  best lead generation for plumbers
                </Link>
                .
              </p>
            </section>
            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="What usually drives LSA performance up or down.">Key success factors</SectionTitle>
              <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                <li>• Verification and profile completeness</li>
                <li>• Response speed and call-handling quality</li>
                <li>• Tight service-area and category settings</li>
                <li>• Dispute process consistency and CRM tracking</li>
              </ul>
            </section>
            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="How to compare LSA with other channels fairly.">LSA vs marketplaces and social</SectionTitle>
              <p className="text-[15px] leading-relaxed text-neutral-700">
                Compare LSA against marketplace channels with one scorecard: same response SLA, same qualification script, and same CRM outcome stages. Use this with{" "}
                <Link href="/lead-generation/guides/paid-vs-organic-leads" className="font-semibold text-[#10B981] hover:underline">paid vs organic leads</Link>{" "}
                and{" "}
                <Link href="/lead-generation/guides/how-to-choose-a-lead-generation-platform" className="font-semibold text-[#10B981] hover:underline">platform selection checklist</Link>{" "}
                before scaling.
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
  return { title: "How Google Local Services Ads Work | BeltStack Guide", description: "Overview of Google LSA for local service businesses: verification, bidding, and lead quality." };
}
