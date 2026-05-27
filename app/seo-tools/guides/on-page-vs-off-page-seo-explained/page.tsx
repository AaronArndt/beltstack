import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getSeoToolsCompareUrl, getSeoToolsReviewUrl } from "@/lib/routes";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSeoToolsResources } from "@/components/guides/RelatedSeoToolsResources";

const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Semrush", logoSrc: "/Logos/semrush.jpeg", rating: "4.6", bestFor: "On-page audits and content gaps", reviewHref: getSeoToolsReviewUrl("semrush") },
  { name: "Ahrefs", logoSrc: "/Logos/ahrefs.jpeg", rating: "4.6", bestFor: "Backlink research and competitor links", reviewHref: getSeoToolsReviewUrl("ahrefs") },
  { name: "BrightLocal", logoSrc: "/Logos/brightlocal.jpeg", rating: "4.5", bestFor: "Local citations and GBP", reviewHref: getSeoToolsReviewUrl("brightlocal") },
];

const FAQ = [
  {
    q: "What is on-page SEO?",
    a: "Everything you control on your own site: titles and meta descriptions, headings, body copy, internal links, image alt text, URL structure, and technical signals like mobile usability and page speed. For local businesses, service and area pages are the core on-page asset.",
  },
  {
    q: "What is off-page SEO?",
    a: "Signals outside your site that suggest trust and relevance—backlinks, brand mentions, reviews, citations with consistent NAP, and local listing accuracy. You influence off-page SEO; you do not fully control it.",
  },
  {
    q: "Which matters more for local service businesses?",
    a: "On-page and local off-page signals both matter. Weak service pages hurt even with great reviews. Weak GBP or citation drift hurts even with perfect copy. Start with on-page alignment and GBP, then build reviews and relevant local links.",
  },
  {
    q: "Is technical SEO on-page or off-page?",
    a: "Usually classified as on-page or its own pillar—crawlability, indexing, HTTPS, and Core Web Vitals live on your infrastructure. Read technical SEO explained and technical SEO audit basics for small business.",
  },
  {
    q: "What tools help with each?",
    a: "On-page: Google Search Console, Semrush or Ahrefs site audits. Off-page: Ahrefs or Semrush backlink reports; BrightLocal or Whitespark for citations and local grids. Compare Semrush vs Ahrefs for suite depth.",
  },
  {
    q: "Can I do off-page SEO without link building?",
    a: "Local businesses often focus on reviews, GBP activity, and citation accuracy before aggressive outreach. That is still off-page work. National brands may need deliberate link acquisition; spammy links hurt more than they help.",
  },
  {
    q: "How do on-page and off-page work together?",
    a: "On-page tells Google what you should rank for; off-page helps Google believe you deserve visibility. A page targeting emergency plumber Austin needs clear on-page intent plus local proof—reviews, citations, and relevant mentions.",
  },
];

export default function OnPageVsOffPageSeoExplainedPage() {
  const href = "/seo-tools/guides/on-page-vs-off-page-seo-explained";
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
                    <li className="text-gray-700 font-medium" aria-current="page">On-Page vs Off-Page SEO</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    On-Page vs Off-Page SEO Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    What you control on your site versus trust signals elsewhere—and how local businesses balance service pages, listings, and reviews.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
                  <section id="on-page" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">On-page SEO: what you publish and structure</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      On-page SEO is the work inside your website: clear titles, headings that match search intent, service descriptions customers actually read, internal links between related pages, and fast mobile rendering. For local operators, that usually means dedicated pages per core service and geography—not one generic homepage trying to rank for everything.
                    </p>
                    <p className="mt-4">
                      Deep dive:{" "}
                      <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>
                        on-page SEO for local business
                      </Link>
                      . Execution checklist:{" "}
                      <Link href="/seo-tools/guides/how-to-seo-your-website" className={link}>
                        how to SEO your website
                      </Link>
                      .
                    </p>
                  </section>

                  <section id="off-page" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Off-page SEO: trust beyond your domain</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      Off-page SEO includes backlinks from relevant sites, Google Business Profile strength, review velocity, accurate citations, and brand mentions. Local off-page work often matters more than national link campaigns for HVAC, plumbing, and similar trades—customers and Google both read reviews as proof.
                    </p>
                    <p className="mt-4">
                      Citations and grids:{" "}
                      <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>BrightLocal</Link>,{" "}
                      <Link href={getSeoToolsReviewUrl("whitespark")} className={link}>Whitespark</Link>{" "}
                      (<Link href={getSeoToolsCompareUrl("brightlocal-vs-whitespark")} className={link}>compare</Link>). Link research:{" "}
                      <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>Ahrefs</Link>{" "}
                      or{" "}
                      <Link href={getSeoToolsReviewUrl("semrush")} className={link}>Semrush</Link>.
                    </p>
                  </section>

                  <section id="local-twist" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">The local twist: GBP is off-page you must own</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      Google Business Profile is not on your site, but it heavily influences local visibility. Treat GBP optimization, photos, Q&A, and review responses as off-page operations tied to on-page service pages. See{" "}
                      <Link href="/seo-tools/guides/google-business-profile-optimization" className={link}>
                        Google Business Profile optimization
                      </Link>{" "}
                      and{" "}
                      <Link href="/seo-tools/guides/what-is-local-seo" className={link}>
                        what is local SEO
                      </Link>
                      .
                    </p>
                  </section>

                  <section id="technical" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Where technical SEO fits</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      Technical SEO—indexing, sitemaps, HTTPS, structured data—enables on-page content to be crawled and understood. Fix technical blockers first; pretty copy cannot rank if Google cannot index the URL. Read{" "}
                      <Link href="/seo-tools/guides/technical-seo-explained" className={link}>
                        technical SEO explained
                      </Link>{" "}
                      and{" "}
                      <Link href="/seo-tools/guides/how-technical-seo-tools-work" className={link}>
                        how technical SEO tools work
                      </Link>
                      .
                    </p>
                  </section>

                  <section id="prioritize" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">How to prioritize limited time</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      Month one: indexable service pages, GBP accuracy, Search Console baseline. Month two: reviews and citation cleanup. Month three: content depth and selective link or PR where relevant. Avoid buying links before on-page and GBP fundamentals are solid—see{" "}
                      <Link href="/seo-tools/guides/common-seo-mistakes-businesses-make" className={link}>
                        common SEO mistakes businesses make
                      </Link>
                      .
                    </p>
                  </section>

                  <section id="measure" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Measure both sides honestly</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      On-page progress shows in Search Console queries and landing-page engagement. Off-page progress shows in review count, citation health, and referring domains—not vanity keyword ranks alone. Tie outcomes to CRM using{" "}
                      <Link href="/seo-tools/guides/seo-metrics-businesses-should-track" className={link}>
                        SEO metrics businesses should track
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
              <GuideSidebar title="SEO tools for on-page and off-page" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "On-Page vs Off-Page SEO Explained (2026) | BeltStack",
    description:
      "On-page vs off-page SEO for SMBs—service pages, GBP, citations, links, technical fit, prioritization, and tools like Semrush, Ahrefs, and BrightLocal.",
    keywords: ["on-page vs off-page SEO", "on-page SEO", "off-page SEO", "local SEO signals", "backlinks vs content"],
  };
}
