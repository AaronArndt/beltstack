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
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "Keyword research, audits, and rank tracking",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    name: "BrightLocal",
    logoSrc: "/Logos/brightlocal.jpeg",
    rating: 4.5,
    bestFor: "Map Pack grids, citations, and GBP reporting",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
  },
  {
    name: "Whitespark",
    logoSrc: "/Logos/whitespark.jpeg",
    rating: 4.5,
    bestFor: "Citation finder and local listing work",
    reviewHref: getSeoToolsReviewUrl("whitespark"),
  },
];

const FAQ = [
  {
    q: "What is the difference between SEO and PPC?",
    a: "SEO (search engine optimization) earns unpaid placement through relevance, site quality, and authority—you invest in labor and optional tools. PPC (pay-per-click) buys sponsored placement through auctions—you pay when someone clicks. Both can appear on the same results page; they solve different speed and budget problems.",
  },
  {
    q: "Is PPC the same as Google Ads?",
    a: "For most small businesses, yes in practice. Google Ads is Google's PPC platform. Other search engines have their own ad products. SEO work targets organic listings and Maps; PPC targets sponsored slots labeled as ads.",
  },
  {
    q: "Which channel should a local service business prioritize?",
    a: "Often both over time: PPC fills capacity this week while SEO compounds. If budget forces a choice, pick the channel you can measure to booked jobs in CRM. Many trades run ads for peaks and invest SEO in Google Business Profile and service pages.",
  },
  {
    q: "Can SEO tools manage PPC campaigns?",
    a: "Some suites include PPC modules, but organic research tools do not replace ad platforms. Semrush and Ahrefs help with keywords and site audits; you still run bids and budgets in Google Ads. See free vs paid SEO tools for how research software fits.",
  },
  {
    q: "Does stopping PPC hurt SEO?",
    a: "No direct ranking penalty. You lose sponsored visibility immediately. SEO momentum depends on whether you keep maintaining listings, content, and technical health—not on ad spend.",
  },
  {
    q: "How do I compare SEO vs PPC ROI?",
    a: "Tag leads in CRM by source. Organic: Search Console clicks plus GBP actions divided by labor and tool cost. PPC: ad spend plus management divided by closed leads. Read how businesses measure SEO ROI and paid vs organic leads for frameworks.",
  },
  {
    q: "Where does this differ from organic SEO vs paid search?",
    a: "The concepts overlap. This guide emphasizes PPC as the paid side and SEO as organic. For SERP anatomy and blend strategy with the same vocabulary, see organic SEO vs paid search explained.",
  },
];

export default function SeoVsPpcWhatsTheDifferencePage() {
  const href = "/seo-tools/guides/seo-vs-ppc-whats-the-difference";
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
                    <li className="text-gray-700 font-medium" aria-current="page">SEO vs PPC</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    SEO vs PPC: What&apos;s the Difference?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How organic SEO and pay-per-click differ on cost, speed, control, and measurement—and when service businesses run both instead of treating them as interchangeable.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
                  <section id="overview" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">SEO and PPC answer different questions</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      SEO is the discipline of earning visibility in unpaid search results and local surfaces like Google Maps. PPC is buying sponsored placement—typically through Google Ads—where you pay per click or impression. Customers see both on the same page; your job is to decide how much to invest in each based on capacity, margin, and how fast you need leads.
                    </p>
                    <p className="mt-4">
                      For broader earned-vs-rented framing, read{" "}
                      <Link href="/seo-tools/guides/organic-seo-vs-paid-search-explained" className={link}>
                        organic SEO vs paid search explained
                      </Link>
                      . For what organic work actually produces, see{" "}
                      <Link href="/seo-tools/guides/what-seo-actually-does-for-businesses" className={link}>
                        what SEO actually does for businesses
                      </Link>
                      .
                    </p>
                  </section>

                  <section id="comparison" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Side-by-side comparison</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <ul className="mt-4 list-disc space-y-2 pl-5">
                      <li><strong className="text-[#1A2D48]">Speed</strong> — PPC can generate calls within days; SEO often needs weeks for GBP fixes and months for competitive keywords.</li>
                      <li><strong className="text-[#1A2D48]">Cost structure</strong> — PPC has direct media cost; SEO has labor, content, listings, and optional tools.</li>
                      <li><strong className="text-[#1A2D48]">Control</strong> — PPC offers budget caps and pause buttons; SEO offers compounding visibility you maintain rather than rent.</li>
                      <li><strong className="text-[#1A2D48]">Measurement</strong> — Ads platform for PPC; Search Console and CRM tagging for SEO.</li>
                    </ul>
                  </section>

                  <section id="local" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Local businesses: Maps, SEO, and Local Services Ads</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      Local intent often splits three ways: Map Pack (organic local SEO), sponsored local services ads, and standard search ads pointing to landing pages. Organic local work—GBP, citations, reviews, service pages—is covered in{" "}
                      <Link href="/seo-tools/guides/how-seo-helps-local-businesses" className={link}>
                        how SEO helps local businesses
                      </Link>{" "}
                      and{" "}
                      <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                        local SEO for service businesses
                      </Link>
                      . Tools like{" "}
                      <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>BrightLocal</Link>{" "}
                      help diagnose Map Pack visibility; they do not replace ad platforms.
                    </p>
                  </section>

                  <section id="tools" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Where SEO software fits (and does not)</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      Research suites—{" "}
                      <Link href={getSeoToolsReviewUrl("semrush")} className={link}>Semrush</Link>,{" "}
                      <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>Ahrefs</Link>{" "}
                      (<Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>compare</Link>)—inform keyword strategy, audits, and content gaps for organic work. They do not buy clicks. Browse the{" "}
                      <Link href="/seo-tools/best-seo-tools" className={link}>best SEO tools</Link>{" "}
                      roundup when organic research is the bottleneck, not ad management.
                    </p>
                  </section>

                  <section id="blend" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Blending SEO and PPC without double-counting wins</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      Use PPC to test offers and fill slow weeks; use SEO to build durable Map Pack and organic presence. Tag every lead in{" "}
                      <Link href="/crm" className={link}>CRM</Link>{" "}
                      by source. Compare economics using{" "}
                      <Link href="/lead-generation/guides/paid-vs-organic-leads" className={link}>
                        paid vs organic leads
                      </Link>{" "}
                      rather than platform vanity metrics alone.
                    </p>
                  </section>

                  <section id="when-choose" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">When to lean SEO, PPC, or both</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      Lean PPC when you need volume immediately and unit economics work at current CPCs. Lean SEO when you can invest three to six months and want margin without perpetual auction pressure. Run both when you have crew capacity and can measure booked jobs from each channel honestly.
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
              <GuideSidebar title="SEO tools for organic growth" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "SEO vs PPC: What's the Difference? (2026) | BeltStack",
    description:
      "SEO vs PPC for SMBs—cost, speed, control, local Maps vs ads, where SEO software fits, blend strategy, and CRM measurement.",
    keywords: ["SEO vs PPC", "SEO vs pay per click", "organic vs paid search", "Google Ads vs SEO", "local SEO vs PPC"],
  };
}
