import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getSeoToolsReviewUrl } from "@/lib/routes";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSeoToolsResources } from "@/components/guides/RelatedSeoToolsResources";

const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Semrush", logoSrc: "/Logos/semrush.jpeg", rating: "4.6", bestFor: "Site audits and crawl reports", reviewHref: getSeoToolsReviewUrl("semrush") },
  { name: "Ahrefs", logoSrc: "/Logos/ahrefs.jpeg", rating: "4.6", bestFor: "Technical crawl and site health", reviewHref: getSeoToolsReviewUrl("ahrefs") },
  { name: "BrightLocal", logoSrc: "/Logos/brightlocal.jpeg", rating: "4.5", bestFor: "Local site audits alongside Search Console", reviewHref: getSeoToolsReviewUrl("brightlocal") },
];

const FAQ = [
  {
    q: "What is technical SEO?",
    a: "The practice of making sure search engines can crawl, index, and understand your site—and that pages load quickly and securely for users. It includes sitemaps, robots rules, HTTPS, mobile usability, structured data, and fixing errors that block visibility.",
  },
  {
    q: "Is technical SEO different from on-page SEO?",
    a: "Related but distinct. On-page SEO focuses on content and HTML elements users see. Technical SEO focuses on infrastructure and crawlability. Both matter; technical blockers can prevent on-page work from ranking.",
  },
  {
    q: "Do small businesses need technical SEO?",
    a: "Yes at a baseline: indexable pages, valid sitemap, HTTPS, mobile-friendly templates, and no accidental noindex on money pages. You do not need enterprise crawl budgets unless you have thousands of URLs or complex faceted navigation.",
  },
  {
    q: "What tools diagnose technical SEO issues?",
    a: "Google Search Console is free and authoritative for indexing. Semrush, Ahrefs, and Screaming Frog-style crawlers find broken links, redirect chains, and duplicate content. Read how technical SEO tools work for workflow detail.",
  },
  {
    q: "How is technical SEO different from technical SEO audit basics?",
    a: "This guide explains the concept. The audit basics guide is a prioritized checklist for small businesses executing fixes. Use both: understand first, then run the checklist.",
  },
  {
    q: "Can a website builder fix technical SEO automatically?",
    a: "Builders handle HTTPS and mobile templates; they do not replace intentional URL structure, redirects after migrations, or Search Console monitoring. See website builder guides if you are choosing a platform.",
  },
  {
    q: "Does technical SEO affect local rankings?",
    a: "Yes. Slow mobile pages hurt conversions and can dampen rankings. Indexing errors hide service pages from search. Local SEO still needs a crawlable, trustworthy site behind GBP.",
  },
];

export default function TechnicalSeoExplainedPage() {
  const href = "/seo-tools/guides/technical-seo-explained";
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
                    <li><Link href="/seo-tools" className="text-gray-500 hover:text-gray-900">SEO Tools</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/seo-tools/guides" className="text-gray-500 hover:text-gray-900">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Technical SEO Explained</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Technical SEO Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Crawling, indexing, site health, and performance—the foundation that lets on-page content and local listings actually show up in search.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
                  <section id="crawl-index" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Crawl, index, rank—in that order</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      Search engines discover URLs by crawling links and sitemaps, store eligible pages in an index, then rank them for queries. Technical SEO ensures the first two steps work. If a service page is blocked by robots.txt, noindexed by mistake, or only reachable through JavaScript Google struggles to render, content quality cannot save you.
                    </p>
                    <p className="mt-4">
                      Ground truth lives in{" "}
                      <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                        Google Search Console
                      </Link>
                      . Pair it with how SEO works for the full discovery-to-rank loop.
                    </p>
                  </section>

                  <section id="core-areas" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Core technical areas SMBs should understand</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <ul className="mt-4 list-disc space-y-2 pl-5">
                      <li><strong className="text-[#1A2D48]">Indexation</strong> — Which URLs Google stores; fix coverage errors and accidental noindex.</li>
                      <li><strong className="text-[#1A2D48]">Site architecture</strong> — Logical URLs, internal links, and shallow click depth to money pages.</li>
                      <li><strong className="text-[#1A2D48]">Performance</strong> — Mobile speed and Core Web Vitals affect UX and rankings.</li>
                      <li><strong className="text-[#1A2D48]">Security</strong> — HTTPS is baseline; mixed content and expired certificates break trust.</li>
                      <li><strong className="text-[#1A2D48]">Structured data</strong> — LocalBusiness schema can clarify entity data when implemented correctly.</li>
                    </ul>
                  </section>

                  <section id="audit" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Audits: free first, paid when complexity grows</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      Start with Search Console coverage and page experience reports. Run a prioritized checklist from{" "}
                      <Link href="/seo-tools/guides/technical-seo-audit-basics-for-small-business" className={link}>
                        technical SEO audit basics for small business
                      </Link>
                      . Add{" "}
                      <Link href={getSeoToolsReviewUrl("semrush")} className={link}>Semrush</Link>{" "}
                      or{" "}
                      <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>Ahrefs</Link>{" "}
                      site audits when you need crawl depth beyond a dozen pages. See{" "}
                      <Link href="/seo-tools/guides/how-businesses-audit-their-seo" className={link}>
                        how businesses audit their SEO
                      </Link>{" "}
                      for the full audit stack.
                    </p>
                  </section>

                  <section id="tools" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">How technical SEO tools help</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      Crawlers simulate Googlebot, flag redirect chains, duplicate titles, and broken links. They do not replace Search Console for indexing truth. Read{" "}
                      <Link href="/seo-tools/guides/how-technical-seo-tools-work" className={link}>
                        how technical SEO tools work
                      </Link>{" "}
                      before you buy an enterprise crawl quota for a five-page site.
                    </p>
                  </section>

                  <section id="local" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Technical SEO and local visibility</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      Map Pack rankings still depend on a crawlable site that reinforces GBP categories and services. Thin doorway city pages and duplicate templates trigger quality issues. Align technical health with{" "}
                      <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>
                        on-page SEO for local business
                      </Link>{" "}
                      instead of publishing fifty near-identical location URLs.
                    </p>
                  </section>

                  <section id="fix-order" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Fix order that avoids wasted content spend</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      (1) Indexing and HTTPS. (2) Mobile speed on top landing pages. (3) URL and redirect hygiene after any rebrand. (4) On-page and GBP work. Skipping step one while blogging weekly is a common failure mode—see{" "}
                      <Link href="/seo-tools/guides/common-seo-myths-explained" className={link}>
                        common SEO myths explained
                      </Link>
                      .
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
              <GuideSidebar title="Tools for technical SEO" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Technical SEO Explained (2026) | Crawl, Index & Site Health | BeltStack",
    description:
      "Technical SEO explained for SMBs—crawl and index basics, core areas, audits, tools, local fit, and fix order before content spend.",
    keywords: ["technical SEO explained", "technical SEO basics", "site crawlability", "indexing SEO", "technical SEO small business"],
  };
}
