import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getSeoToolsCompareUrl, getSeoToolsReviewUrl } from "@/lib/routes";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSeoToolsResources } from "@/components/guides/RelatedSeoToolsResources";

const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Google Search Console",
    logoSrc: "/Logos/google.jpeg",
    rating: 4.8,
    bestFor: "Indexing and query coverage truth",
    reviewHref: getSeoToolsReviewUrl("google-search-console"),
  },
  {
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "Site crawls and issue prioritization",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    name: "Ahrefs",
    logoSrc: "/Logos/ahrefs.jpeg",
    rating: 4.7,
    bestFor: "Site structure and content gaps",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
  },
];

const FAQ = [
  {
    q: "How do businesses audit their SEO?",
    a: "They stack free Google data (Search Console, GBP insights) with periodic crawls for technical issues, a short keyword and page map, and local listing checks if they depend on Maps. The output is a prioritized fix list—not a 200-page PDF.",
  },
  {
    q: "How often should a small business run an SEO audit?",
    a: "Quarterly for stable sites; immediately after migrations, rebrands, phone number changes, or major CMS/plugin updates. Local brands should spot-check citations monthly when managing multiple locations.",
  },
  {
    q: "Do I need Semrush or Ahrefs to audit SEO?",
    a: "Not always. Search Console covers indexing and query performance for many SMBs. Paid crawlers pay off when you have hundreds of URLs, duplicate templates, or need historical issue tracking across domains.",
  },
  {
    q: "What is the difference between a technical audit and a full SEO audit?",
    a: "Technical audits focus on crawl, index, HTTPS, and site health. Full audits add content relevance, GBP alignment, citations, backlinks, and competitor gaps. Start technical—rankings cannot improve on pages Google does not index.",
  },
  {
    q: "Should agencies own the audit tools?",
    a: "You should own Search Console and GBP access regardless. Third-party crawl exports are fine, but verify findings in your own property before paying for fixes.",
  },
  {
    q: "What belongs in an audit deliverable?",
    a: "Top issues by revenue impact, URLs affected, who fixes them, and a 30-day plan. Tie to metrics you will track—see seo metrics businesses should track and how SEO reporting software works.",
  },
  {
    q: "What audit mistakes waste money?",
    a: "Chasing vanity keywords, ignoring indexing, and buying tools nobody acts on. Read common SEO mistakes businesses make for recovery order.",
  },
];

export default function HowBusinessesAuditTheirSeoPage() {
  const href = "/seo-tools/guides/how-businesses-audit-their-seo";
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
            <nav aria-label="Breadcrumb" className="pt-8 pb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-900">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/seo-tools" className="text-gray-500 hover:text-gray-900">
                    SEO Tools
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/seo-tools/guides" className="text-gray-500 hover:text-gray-900">
                    Guides
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  How Businesses Audit Their SEO
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How Businesses Audit Their SEO</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                A practical audit stack—Search Console, crawlers, local listings, and content checks—and how to turn findings into a fix list leadership will fund. Start with{" "}
                <Link href="/seo-tools/guides/technical-seo-audit-basics-for-small-business" className={link}>
                  technical SEO audit basics
                </Link>
                , then see{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools
                </Link>{" "}
                and{" "}
                <Link href="/seo-tools/compare" className={link}>
                  compare SEO tools
                </Link>{" "}
                when free data is not enough.
              </p>
              <GuideLastUpdated date="May 26, 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="audit-layers" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Four layers businesses combine</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>Effective audits stack complementary checks—each answers a different failure mode:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Index and crawl health</strong> — Can Google fetch and index money pages? Start in{" "}
                    <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                      Google Search Console
                    </Link>
                    ; expand with{" "}
                    <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                      Semrush
                    </Link>{" "}
                    or{" "}
                    <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>
                      Ahrefs
                    </Link>{" "}
                    when URL count exceeds manual review.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Query and page fit</strong> — Which URLs earn impressions for services you sell vs informational noise you will never convert?
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Local surfaces</strong> — GBP categories, service areas, NAP consistency, and citation drift for Maps-dependent businesses.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Outcomes</strong> — Clicks, calls, and CRM-tagged leads—not rank tables alone. Align metrics with{" "}
                    <Link href="/seo-tools/guides/seo-metrics-businesses-should-track" className={link}>
                      SEO metrics businesses should track
                    </Link>
                    .
                  </li>
                </ul>
              </section>

              <section id="technical-first" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Run technical checks before content debates</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Teams often argue about blog topics while service pages sit noindexed or behind redirect chains. Follow{" "}
                  <Link href="/seo-tools/guides/technical-seo-audit-basics-for-small-business" className={link}>
                    technical SEO audit basics for small business
                  </Link>
                  : property verification, sitemap status, HTTPS, canonical mistakes, and 5xx errors on templates that generate city or service URLs.
                </p>
                <p className="mt-4">
                  Compare crawl depth and duplication workflows in{" "}
                  <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>
                    Semrush vs Ahrefs
                  </Link>{" "}
                  before you annualize a suite nobody will open weekly.
                </p>
              </section>

              <section id="local-audit" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Add a local audit when Maps drives revenue</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  For service businesses, audit GBP against the website: services listed, photos, Q&A, review velocity, and whether the site targets the same geography. Sample Map Pack grids in priority ZIPs via BrightLocal or Whitespark when organic URL rank does not explain call volume changes.
                </p>
                <p className="mt-4">
                  Cross-check rank and grid trends using{" "}
                  <Link href="/seo-tools/guides/how-businesses-track-seo-rankings" className={link}>
                    how businesses track SEO rankings
                  </Link>
                  —audits should end with keywords and locations you will actually monitor.
                </p>
              </section>

              <section id="deliverable" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Turn the audit into a 30-day fix list</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Rank issues by revenue impact: indexing blockers first, then money-page content and GBP alignment, then citations and link opportunities. Assign owners and dates—an audit without assignments becomes shelfware, a pattern in{" "}
                  <Link href="/seo-tools/guides/common-seo-mistakes-businesses-make" className={link}>
                    common SEO mistakes businesses make
                  </Link>
                  .
                </p>
                <p className="mt-4">
                  Package progress for stakeholders with{" "}
                  <Link href="/seo-tools/guides/how-seo-reporting-software-works" className={link}>
                    how SEO reporting software works
                  </Link>
                  : short narrative, three to five metrics, and what shipped this month.
                </p>
              </section>

              <section id="cadence" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Audit cadence and when SEO is worth continuing</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Quarterly audits catch drift; event-driven audits catch migrations and rebrands. If repeated audits surface the same unfixed indexing errors, pause new content until execution discipline improves.
                </p>
                <p className="mt-4">
                  After two audit cycles, judge program health with pipeline data—not PDF thickness.{" "}
                  <Link href="/seo-tools/guides/is-seo-still-worth-it" className={link}>
                    Is SEO still worth it
                  </Link>{" "}
                  frames how owners should compare organic CAC to ads when audits keep finding work but leads stay flat.
                </p>
              </section>
            </div>

            <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <h2 className="text-[#1A2D48] text-2xl font-bold">FAQs</h2>
              <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
              <GuideFaqSection faqs={FAQ} />
            </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="SEO audit tools" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How Businesses Audit Their SEO (2026) | Search Console & Crawls | BeltStack",
    description:
      "How businesses audit SEO: technical indexing, query fit, local GBP and citations, prioritized fix lists, and when to add Semrush, Ahrefs, or reporting tools.",
  };
}
