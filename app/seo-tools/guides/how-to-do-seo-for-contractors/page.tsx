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
    name: "BrightLocal",
    logoSrc: "/Logos/brightlocal.jpeg",
    rating: 4.5,
    bestFor: "Map Pack, citations, and local rank grids",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
  },
  {
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "All-in-one research, audits, and rank tracking",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    name: "Ahrefs",
    logoSrc: "/Logos/ahrefs.jpeg",
    rating: 4.7,
    bestFor: "Backlinks and competitor content gaps",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
  },
];

const FAQ = [
  {
    q: "Where should contractors start with SEO?",
    a: "Verify Google Search Console on your website and claim or audit your Google Business Profile. Fix NAP consistency, primary category, and core service pages before paying for keyword suites. Free data from Google beats guessing from dashboards.",
  },
  {
    q: "Do I need Semrush or Ahrefs as a contractor?",
    a: "Not on day one. Add a flagship-style suite when you are expanding city pages, chasing competitor content gaps, or running technical audits across many URLs. Compare Semrush vs Ahrefs for depth, or SE Ranking vs Semrush if budget is tight. Always keep Search Console.",
  },
  {
    q: "How long until SEO produces calls?",
    a: "Local SEO often shows movement in 8–12 weeks when GBP and on-site basics are fixed; competitive metros or new domains can take longer. Pair organic work with paid leads if you need pipeline this month—see our lead generation hub and paid vs organic leads guide.",
  },
  {
    q: "Should I hire an agency or DIY?",
    a: "DIY works when someone owns weekly GBP updates, review responses, and one new page or improvement per month. Hire help when you have multi-location complexity, a penalty risk, or no internal time—still verify Search Console yourself so you own the data.",
  },
  {
    q: "What is the biggest mistake contractors make?",
    a: "Keyword-stuffed business names, fake service areas, and duplicate GBP listings. Those tactics create suspensions and bad reviews that hurt more than any tool can fix. Stay honest about where your crews actually work.",
  },
  {
    q: "How do I know if SEO is working?",
    a: "Track calls and booked jobs by source in your CRM—not just rankings. Search Console shows query growth; GBP insights show Maps actions. If impressions rise but calls do not, fix conversion on pages and phone routing before buying more software.",
  },
];

export default function HowToDoSeoForContractorsPage() {
  const href = "/seo-tools/guides/how-to-do-seo-for-contractors";
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
                  How to Do SEO for Contractors
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How to Do SEO for Contractors</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                A practical playbook for construction, remodeling, and trade businesses that want more calls from Google—without chasing vanity rankings. If you are comparing software, start with our{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools (2026) roundup
                </Link>{" "}
                and{" "}
                <Link href="/seo-tools/best-for/contractors" className={link}>
                  best SEO tools for contractors
                </Link>{" "}
                scenario picks.
              </p>
              <GuideLastUpdated date="March 24, 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="why-different" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Why contractor SEO is different</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Homeowners and property managers usually search with urgent or high-trust intent: &quot;emergency plumber near me,&quot; &quot;licensed electrician [city],&quot; or &quot;roof repair before rain.&quot; That means{" "}
                  <strong className="text-[#1A2D48]">Google Maps (the local pack)</strong>, your{" "}
                  <Link href="/seo-tools/guides/google-business-profile-optimization" className={link}>
                    Google Business Profile
                  </Link>
                  , and <strong className="text-[#1A2D48]">mobile-friendly service pages</strong> matter more than blog volume or national keyword trophies.
                </p>
                <p className="mt-4">
                  Contractors also live with <strong className="text-[#1A2D48]">seasonality, dispatch boundaries, and review sensitivity</strong>. SEO that ignores real service areas or slow phone answer rates will underperform no matter which tool you buy. Your job is to align what Google shows with how you actually operate.
                </p>
              </section>

              <section id="foundations" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Phase 1: Foundations (free before you buy)</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <h3 className="text-[#1A2D48] text-base font-semibold mt-0">Google Search Console</h3>
                <p className="mt-2">
                  Install and verify Search Console on your primary domain. It shows which queries drive impressions, which pages lose clicks, and whether Google can crawl important URLs. Read our{" "}
                  <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                    Google Search Console review
                  </Link>{" "}
                  for why it stays in every stack—even when you also use{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>{" "}
                  or{" "}
                  <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>
                    Ahrefs
                  </Link>
                  .
                </p>
                <h3 className="text-[#1A2D48] text-base font-semibold mt-6">Google Business Profile</h3>
                <p className="mt-2">
                  Claim one profile per legitimate business location. Choose the <strong className="text-[#1A2D48]">most specific primary category</strong> that matches how you get paid (not how you describe yourself in conversation). Add real project photos, accurate hours, and service lists. Deep dive:{" "}
                  <Link href="/seo-tools/guides/google-business-profile-optimization" className={link}>
                    Google Business Profile optimization guide
                  </Link>
                  .
                </p>
                <h3 className="text-[#1A2D48] text-base font-semibold mt-6">NAP consistency</h3>
                <p className="mt-2">
                  Pick one legal business name, one phone number for customer calls, and one canonical address format. Use them on your site, GBP, and major directories. Inconsistent citations confuse Google and customers; fix listings before paying for citation tools. When scale matters, compare{" "}
                  <Link href={getSeoToolsCompareUrl("brightlocal-vs-whitespark")} className={link}>
                    BrightLocal vs Whitespark
                  </Link>
                  .
                </p>
              </section>

              <section id="website" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Phase 2: Website structure that converts</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Every core trade line deserves a dedicated page: what you do, where you work, proof (photos, licenses, warranties), and a clear call—call, text, or short form. Avoid thin &quot;city stamp&quot; pages that only swap the metro name. Our{" "}
                  <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>
                    on-page SEO for local business
                  </Link>{" "}
                  guide walks through titles, headings, and internal links.
                </p>
                <p className="mt-4">
                  If you are still choosing or fixing your site platform, use{" "}
                  <Link href="/website-builders/best-for/contractors" className={link}>
                    website builders for contractors
                  </Link>
                  ,{" "}
                  <Link href="/website-builders/guides/how-to-build-a-service-business-website" className={link}>
                    how to build a service business website
                  </Link>
                  , and{" "}
                  <Link href="/website-builders/guides/best-website-builder-for-local-seo" className={link}>
                    best website builder for local SEO
                  </Link>{" "}
                  so publishing does not fight you every month.
                </p>
              </section>

              <section id="reputation" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Phase 3: Reviews, photos, and trust</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Reviews influence both click-through rate in Maps and homeowner confidence. Ask after successful jobs; respond to every review with specifics (not copy-paste spam). Upload fresh job-site photos weekly when possible—Google and users both treat stale profiles as inactive.
                </p>
                <p className="mt-4">
                  For Map Pack mechanics and what you can realistically influence, read{" "}
                  <Link href="/seo-tools/guides/how-to-rank-in-google-maps" className={link}>
                    how to rank in Google Maps
                  </Link>{" "}
                  and{" "}
                  <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                    local SEO for service businesses
                  </Link>
                  .
                </p>
              </section>

              <section id="tools" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Phase 4: When to add paid SEO tools</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Add software when you have a weekly operator and a clear job: track rankings across ZIPs, audit crawl errors after a redesign, research competitor service pages, or report to a franchise owner. If Maps and citations are your bottleneck, prioritize{" "}
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>{" "}
                  or{" "}
                  <Link href={getSeoToolsReviewUrl("whitespark")} className={link}>
                    Whitespark
                  </Link>{" "}
                  alongside Search Console—not another generic keyword tool.
                </p>
                <p className="mt-4">
                  Choosing between all-in-one suites? See{" "}
                  <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>
                    Semrush vs Ahrefs
                  </Link>
                  ,{" "}
                  <Link href={getSeoToolsCompareUrl("semrush-vs-ubersuggest")} className={link}>
                    Semrush vs Ubersuggest
                  </Link>{" "}
                  for lighter budgets, and{" "}
                  <Link href={getSeoToolsCompareUrl("se-ranking-vs-semrush")} className={link}>
                    SE Ranking vs Semrush
                  </Link>
                  . If you already use Semrush but want swaps, read{" "}
                  <Link href="/seo-tools/alternatives/semrush" className={link}>
                    best Semrush alternatives
                  </Link>
                  .
                </p>
              </section>

              <section id="measurement" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Phase 5: Measurement and pipeline</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Tag lead source in your{" "}
                  <Link href="/crm" className={link}>
                    CRM
                  </Link>{" "}
                  (organic, Maps, paid, referral) so you can compare <strong className="text-[#1A2D48]">cost per booked job</strong>, not cost per click. SEO wins show up as improved organic or GBP-sourced deals over quarters—if you need faster tests while SEO compounds, use the{" "}
                  <Link href="/lead-generation" className={link}>
                    lead generation hub
                  </Link>{" "}
                  and{" "}
                  <Link href="/lead-generation/guides/how-to-get-leads-for-contractors" className={link}>
                    how to get leads for contractors
                  </Link>
                  .
                </p>
              </section>

              <section id="checklist" className="scroll-mt-section rounded-lg border border-stone-200 bg-stone-50/80 p-5">
                <h2 className="text-[#1A2D48] text-lg font-bold">30-day contractor SEO checklist</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>Verify Search Console; fix any critical coverage errors on money pages.</li>
                  <li>Audit GBP category, services, service area, and photos; post 4+ new job photos.</li>
                  <li>Improve one high-value service page with proof, FAQs, and internal links.</li>
                  <li>Request reviews from 10 happy customers; respond to all new reviews within 48 hours.</li>
                  <li>Decide if you need a local SEO tool or a research suite—only subscribe if someone owns weekly login.</li>
                </ul>
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
              <GuideSidebar title="SEO tools for contractors" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How to Do SEO for Contractors (2026) | Local SEO Playbook | BeltStack",
    description:
      "Step-by-step contractor SEO: Google Business Profile, Search Console, service pages, reviews, and when to add Semrush, Ahrefs, or local SEO tools. Built for trades and home services.",
  };
}
