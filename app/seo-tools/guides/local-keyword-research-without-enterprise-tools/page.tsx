import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getSeoToolsCompareUrl, getSeoToolsReviewUrl } from "@/lib/routes";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSeoToolsResources } from "@/components/guides/RelatedSeoToolsResources";

const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";
const href = "/seo-tools/guides/local-keyword-research-without-enterprise-tools";

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Google Search Console", logoSrc: "/Logos/google.jpeg", rating: 4.8, bestFor: "Query reality", reviewHref: getSeoToolsReviewUrl("google-search-console") },
  { name: "BrightLocal", logoSrc: "/Logos/brightlocal.jpeg", rating: 4.4, bestFor: "Local rank grids", reviewHref: getSeoToolsReviewUrl("brightlocal") },
  { name: "Semrush", logoSrc: "/Logos/semrush.jpeg", rating: 4.6, bestFor: "Keyword expansion", reviewHref: getSeoToolsReviewUrl("semrush") },
];

const FAQ = [
  { q: "Can I skip paid keyword tools entirely?", a: "Often yes early on: mine Search Console queries, GBP insights, and sales call language. Add paid volume estimates when you plan content calendars or paid/organic overlap." },
  { q: "What is Maps Pack intent?", a: "Queries where users want a nearby provider now—'plumber near me,' emergency modifiers. They need service + city pages aligned with GBP categories, not only blog posts." },
  { q: "When do Ahrefs or Semrush pay off?", a: "When you track dozens of service/geo combos, compare competitors at scale, or run content teams that need exportable briefs—see Semrush vs Ahrefs for fit." },
];

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

export default function LocalKeywordResearchWithoutEnterpriseToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link></li><li aria-hidden>/</li>
                    <li><Link href="/seo-tools" className="text-gray-500 hover:text-gray-900">SEO Tools</Link></li><li aria-hidden>/</li>
                    <li><Link href="/seo-tools/guides" className="text-gray-500 hover:text-gray-900">Guides</Link></li><li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Local Keyword Research</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Local Keyword Research Without Enterprise Tools</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Maps intent, service modifiers, and free query data—when Search Console is enough and when to layer Semrush, Ahrefs, or BrightLocal.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="pt-8 pb-8 space-y-4 text-[15px] leading-relaxed text-neutral-700">
                  <p>
                    Stack a desk research pass from your dispatch vocabulary with Search Console’s queries report. Then validate demand with{" "}
                    <Link href="/seo-tools/guides/how-to-rank-in-google-maps" className={link}>Google Maps ranking factors</Link> and{" "}
                    <Link href="/seo-tools/guides/google-business-profile-optimization" className={link}>Google Business Profile optimization</Link>.
                  </p>
                  <p>
                    If you need multi-location rank grids or citation context, read the <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>BrightLocal</Link> review. For broader keyword expansion, compare{" "}
                    <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>Semrush vs Ahrefs</Link> before you buy both.
                  </p>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Translate searches into page types.">From phrases to site structure</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span><strong className="text-[#1A2D48]">Service head terms</strong> → primary service pages</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span><strong className="text-[#1A2D48]">Emergency modifiers</strong> → dedicated landing copy + call CTAs</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span><strong className="text-[#1A2D48]">Neighborhood clusters</strong> → only when you can add unique proof</span></li>
                  </ul>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <GuideFaqSection faqs={FAQ} />
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Local SEO tools" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedSeoToolsResources excludeHref={href} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Local Keyword Research Without Enterprise SEO Tools | BeltStack",
    description:
      "Mine Search Console and Maps intent for local services—when free data is enough and when BrightLocal, Semrush, or Ahrefs earns its seat cost.",
  };
}
