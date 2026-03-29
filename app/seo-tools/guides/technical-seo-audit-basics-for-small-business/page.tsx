import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getSeoToolsCompareUrl, getSeoToolsReviewUrl } from "@/lib/routes";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSeoToolsResources } from "@/components/guides/RelatedSeoToolsResources";

const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";
const href = "/seo-tools/guides/technical-seo-audit-basics-for-small-business";

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Google Search Console", logoSrc: "/Logos/google.jpeg", rating: 4.8, bestFor: "Free indexing truth", reviewHref: getSeoToolsReviewUrl("google-search-console") },
  { name: "Semrush", logoSrc: "/Logos/semrush.jpeg", rating: 4.6, bestFor: "Crawl + audits", reviewHref: getSeoToolsReviewUrl("semrush") },
  { name: "Ahrefs", logoSrc: "/Logos/ahrefs.jpeg", rating: 4.7, bestFor: "Site structure", reviewHref: getSeoToolsReviewUrl("ahrefs") },
];

const FAQ = [
  { q: "Do I need a paid tool for a technical audit?", a: "Search Console plus manual checks cover many SMBs. Paid crawlers help when you have hundreds of URLs, multiple domains, or need change monitoring over time." },
  { q: "What is the first thing to fix?", a: "Indexing blockers: robots mistakes, noindex on important templates, broken canonicals, and 5xx errors on money pages. Rankings do not matter if Google cannot render the page reliably." },
  { q: "How often should a small site audit?", a: "Quarterly at minimum; after major migrations, template changes, or adding large plugin stacks—instant retest." },
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

export default function TechnicalSeoAuditBasicsPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Technical SEO Audit Basics</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Technical SEO Audit Basics for Small Business</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Crawling, indexing, HTTPS, sitemaps, and prioritization—what to verify before you assume content is the bottleneck.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="pt-8 pb-8 space-y-4 text-[15px] leading-relaxed text-neutral-700">
                  <p>
                    Intent mixes anxiety (“is my site broken?”) with tool shopping. Start free: <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>Google Search Console</Link> coverage reports, page indexing requests, and manual checks of robots.txt. Add <Link href={getSeoToolsReviewUrl("semrush")} className={link}>Semrush</Link> or <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>Ahrefs</Link> when duplication, internal link depth, or backlog tracking exceeds spreadsheet tolerance—compare in <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>Semrush vs Ahrefs</Link>.
                  </p>
                  <p>
                    Complement with <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>on-page SEO for local business</Link>,{" "}
                    <Link href="/website-builders/guides/website-speed-and-core-web-vitals-for-small-business" className={link}>Core Web Vitals for small business sites</Link>, and the <Link href="/seo-tools/best-seo-tools" className={link}>best SEO tools</Link> roundup.
                  </p>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Triage list for owners and agencies.">Audit flow</SectionTitle>
                  <ol className="list-decimal pl-5 space-y-2 text-[15px] leading-relaxed text-neutral-700">
                    <li>Confirm property and sitemap submission; spot 404 spikes.</li>
                    <li>Check indexing status on top service/location URLs.</li>
                    <li>Validate HTTPS, mixed content, and redirect chains on money pages.</li>
                    <li>Review thin or duplicate templates auto-generated by CMS.</li>
                    <li>Only then expand content and backlinks workstreams.</li>
                  </ol>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Claims you can verify in tools, not lore.">E-E-A-T alignment</SectionTitle>
                  <p className="text-[15px] leading-relaxed text-neutral-700">
                    Technical SEO advice should be reproducible: same URLs, same crawl date, same screenshot. When vendors promise instant recovery after fixes, insist on before/after Search Console timelines—recovery often lags deployment.
                  </p>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <GuideFaqSection faqs={FAQ} />
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="SEO tools" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Technical SEO Audit Basics for Small Business | BeltStack",
    description:
      "Learn crawl, index, and site health basics for SMB sites—Search Console first, when to add Semrush or Ahrefs, and how to prioritize fixes.",
  };
}
