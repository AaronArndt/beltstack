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
  {
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "Keyword research, audits, and rank tracking",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
];

const FAQ = [
  {
    q: "What is local SEO in simple terms?",
    a: "The work that helps nearby customers find your business on Google Maps and localized search results. It combines your Google Business Profile, website pages that mention your services and area, accurate listings elsewhere, and reviews that prove you show up.",
  },
  {
    q: "What should a beginner do first for local SEO?",
    a: "Claim and complete Google Business Profile, verify Search Console, fix obvious site issues, and make sure your name, address, and phone match everywhere. Only then worry about advanced keyword tools or citation campaigns.",
  },
  {
    q: "How is local SEO different from regular SEO?",
    a: "Local adds geography: rankings change by ZIP, Maps uses proximity signals, and listings matter more than for a national blog. National SEO chases broad keywords; local SEO chases service + city intent and Map Pack visibility.",
  },
  {
    q: "Do beginners need BrightLocal or Whitespark?",
    a: "Not on day one. Add them when you manage multiple locations, fight citation drift, or need Map Pack rank grids you cannot track manually. Single-location shops often win with GBP discipline and solid service pages first.",
  },
  {
    q: "How long until local SEO works for a beginner?",
    a: "GBP and technical fixes can move in weeks. Competitive Map Pack positions often take three to six months of consistent reviews, photos, aligned pages, and accurate citations—assuming you are not in an impossibly saturated market.",
  },
  {
    q: "Can I learn local SEO without an agency?",
    a: "Yes—start with our SEO for beginners guide and local SEO for service businesses for the full loop. Agencies help for scale or technical depth; you should still own Search Console and GBP access.",
  },
  {
    q: "What mistakes do beginners make with local SEO?",
    a: "Keyword-stuffed business names, fake addresses, duplicate listings, city pages with copy-paste paragraphs, and ignoring reviews. Google rewards honesty and proof, not tricks.",
  },
];

export default function LocalSeoForBeginnersPage() {
  const href = "/seo-tools/guides/local-seo-for-beginners";
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
                  Local SEO for Beginners
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Local SEO for Beginners</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                A plain-language start for Maps, listings, and local website basics—what to do first, what to ignore, and when specialist tools help. Read{" "}
                <Link href="/seo-tools/guides/seo-for-beginners-a-complete-guide" className={link}>
                  SEO for beginners
                </Link>{" "}
                for the wider picture, then{" "}
                <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                  local SEO for service businesses
                </Link>{" "}
                when you are ready to run the full system. Shortlist tools via{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools
                </Link>{" "}
                and{" "}
                <Link href="/seo-tools/compare" className={link}>
                  compare SEO tools
                </Link>
                .
              </p>
              <GuideLastUpdated date="May 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="what-local-seo-is" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">What local SEO is (without jargon)</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Local SEO is how you show up when someone nearby searches for what you sell—on Google Maps, in the local pack, and in organic results with city or “near me” intent. It is not a separate internet; it is Google matching relevance, distance, and trust signals to a real business that serves that area.
                </p>
                <p className="mt-4">
                  For why that matters commercially, see{" "}
                  <Link href="/seo-tools/guides/what-seo-actually-does-for-businesses" className={link}>
                    what SEO actually does for businesses
                  </Link>
                  —discovery before the first call, not vanity traffic.
                </p>
              </section>

              <section id="first-thirty-days" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Your first 30 days: a beginner checklist</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ol className="mt-4 list-decimal space-y-2 pl-5">
                  <li>Claim Google Business Profile; choose primary category and services that match real work.</li>
                  <li>Verify{" "}
                    <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                      Google Search Console
                    </Link>{" "}
                    and fix any “not indexed” or mobile usability issues on money pages.
                  </li>
                  <li>Audit NAP (name, address, phone) on your site footer, GBP, and top directories—one consistent format.</li>
                  <li>Publish or improve one service page with scope, area, proof, and a clear call to action.</li>
                  <li>Request reviews from recent customers; respond to every review within a few days.</li>
                </ol>
              </section>

              <section id="gbp-basics" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Google Business Profile basics beginners miss</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  GBP is often your highest-converting surface for local search. Beginners under-invest in photos, Q&A, and weekly posts; they over-invest in keyword-stuffed business names that risk suspension. Keep the name legal, align services with your website, and set a realistic service area if you travel to customers.
                </p>
                <p className="mt-4">
                  Go deeper in{" "}
                  <Link href="/seo-tools/guides/google-business-profile-optimization" className={link}>
                    Google Business Profile optimization
                  </Link>{" "}
                  and{" "}
                  <Link href="/seo-tools/guides/how-to-rank-in-google-maps" className={link}>
                    how to rank in Google Maps
                  </Link>{" "}
                  once the checklist above is stable.
                </p>
              </section>

              <section id="website-basics" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Website basics that support Maps</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Your site should confirm what GBP promises: same phone, services, and geography. Beginners fail when the site lists three cities but GBP lists one, or when the only “SEO” page is a generic homepage. Read{" "}
                  <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>
                    on-page SEO for local business
                  </Link>{" "}
                  for titles, internal links, and page structure that match local intent.
                </p>
              </section>

              <section id="citations-reviews" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Citations and reviews for beginners</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Citations are your business listed on directories and industry sites with consistent NAP. Reviews are proof you operate where you say you do. Beginners should fix obvious duplicate listings and earn steady review flow before buying citation software.
                </p>
                <p className="mt-4">
                  When manual audits fail—rebrand, phone change, or many locations—use{" "}
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>{" "}
                  or{" "}
                  <Link href={getSeoToolsReviewUrl("whitespark")} className={link}>
                    Whitespark
                  </Link>
                  . Compare them in{" "}
                  <Link href={getSeoToolsCompareUrl("brightlocal-vs-whitespark")} className={link}>
                    BrightLocal vs Whitespark
                  </Link>
                  ; use{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>{" "}
                  when you need keyword and competitor research beyond local listings.
                </p>
              </section>

              <section id="next-steps" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Next steps after the basics</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Graduate from beginner mode to an operating rhythm: monthly citation checks for multi-location brands, competitor page reviews, and Search Console queries that deserve new or refreshed pages. The{" "}
                  <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                    service business local SEO
                  </Link>{" "}
                  guide is the bridge—three pillars (Maps, site, authority) that reinforce each other every month.
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
              <GuideSidebar title="SEO tools for local beginners" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Local SEO for Beginners (2026) | Maps, GBP & Listings | BeltStack",
    description:
      "Beginner local SEO: what it is, 30-day checklist, GBP and website basics, citations and reviews, and when BrightLocal, Whitespark, or Semrush help.",
    keywords: [
      "local SEO for beginners",
      "beginner local SEO guide",
      "Google Business Profile for beginners",
      "local SEO checklist",
      "Maps SEO basics",
      "citation building for beginners",
    ],
  };
}
