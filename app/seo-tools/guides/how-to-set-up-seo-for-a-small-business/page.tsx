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
    bestFor: "Indexing, queries, and crawl issues",
    reviewHref: getSeoToolsReviewUrl("google-search-console"),
  },
  {
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "Audits and keyword research at scale",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    name: "BrightLocal",
    logoSrc: "/Logos/brightlocal.jpeg",
    rating: 4.5,
    bestFor: "GBP, citations, and local rank grids",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
  },
];

const FAQ = [
  {
    q: "What is the first step to set up SEO for a small business?",
    a: "Claim and verify Google Search Console, confirm your site is indexed, and fix anything blocking crawlers. Without that baseline, every other tactic is guesswork. Pair it with an accurate Google Business Profile if customers find you locally.",
  },
  {
    q: "How long does initial SEO setup take?",
    a: "A focused owner can complete foundations in one to two weeks: technical pass, GBP alignment, three core service pages, and review workflow. Competitive markets need ongoing monthly work—not a one-time weekend project.",
  },
  {
    q: "Do I need paid SEO software on day one?",
    a: "Usually not. Start with free Google tools and disciplined execution. Add a suite when you need competitor keyword depth, large crawls, or rank tracking across many cities—see are SEO tools worth it before you subscribe.",
  },
  {
    q: "Should I hire an agency during setup?",
    a: "Hire for migrations, penalties, or complex multi-location programs. Owners can own GBP, reviews, and core pages themselves—read can you do SEO yourself for a realistic split of DIY vs outsource work.",
  },
  {
    q: "What pages does a small business need for SEO?",
    a: "Home, contact, and one strong page per primary service—with geography only where you truly operate. Avoid dozens of thin city clones; Google rewards proof and clarity over volume.",
  },
  {
    q: "How do I know setup worked?",
    a: "Search Console shows growing impressions for non-branded queries, GBP insights show more calls and direction requests, and your CRM tags which channel booked jobs. Rankings alone are a lagging indicator.",
  },
  {
    q: "What is the biggest setup mistake?",
    a: "Buying tools before fixing basics—wrong phone number on the site, unverified Search Console, or a GBP category that does not match what you sell. Run technical SEO audit basics for small business before you scale spend.",
  },
];

export default function HowToSetUpSeoForASmallBusinessPage() {
  const href = "/seo-tools/guides/how-to-set-up-seo-for-a-small-business";
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
                  Set Up SEO for a Small Business
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How to Set Up SEO for a Small Business</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                A practical setup sequence: verify Google properties, fix crawlability, align listings with your site, publish core service pages, and add tools only when free data is not enough. Start with{" "}
                <Link href="/seo-tools/guides/how-to-optimize-seo-for-free" className={link}>
                  how to optimize SEO for free
                </Link>{" "}
                and the{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools roundup
                </Link>{" "}
                when you are ready to expand the stack.
              </p>
              <GuideLastUpdated date="May 26, 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="setup-order" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">The setup order that actually sticks</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>Small businesses fail SEO when they randomize tactics. Use this sequence so each step unlocks the next:</p>
                <ol className="mt-4 list-decimal space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Measurement</strong> — Verify{" "}
                    <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                      Google Search Console
                    </Link>{" "}
                    and confirm sitemaps submit cleanly.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Technical hygiene</strong> — HTTPS, mobile usability, and noindex mistakes. See{" "}
                    <Link href="/seo-tools/guides/technical-seo-audit-basics-for-small-business" className={link}>
                      technical SEO audit basics for small business
                    </Link>
                    .
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Local surfaces</strong> — Google Business Profile, accurate NAP, and service-area honesty for crews.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Core pages</strong> — One strong page per money service with proof, FAQs, and a clear call path.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Ongoing cadence</strong> — Weekly Search Console checks, review responses, and one improvement shipped per month.
                  </li>
                </ol>
              </section>

              <section id="free-stack" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Start with the free stack</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Search Console shows which queries earn impressions; Google Business Profile drives Maps visibility for local buyers. That pair covers most setup work before you spend on research suites. Our{" "}
                  <Link href="/seo-tools/guides/how-to-optimize-seo-for-free" className={link}>
                    how to optimize SEO for free
                  </Link>{" "}
                  guide walks through weekly habits without a credit card.
                </p>
                <p className="mt-4">
                  If you are unsure whether you can maintain this yourself, read{" "}
                  <Link href="/seo-tools/guides/can-you-do-seo-yourself" className={link}>
                    can you do SEO yourself
                  </Link>{" "}
                  before you sign an agency contract during setup.
                </p>
              </section>

              <section id="site-and-gbp" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Align your website and Google Business Profile</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Setup is not complete until listings and pages tell the same story: services, cities you truly cover, phone numbers, and hours. Mismatches confuse customers and weaken rankings. For service companies,{" "}
                  <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                    local SEO for service businesses
                  </Link>{" "}
                  explains how the three pillars fit together after foundations are live.
                </p>
              </section>

              <section id="when-to-add-tools" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">When to add paid SEO tools</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Add software when a bottleneck costs more than the subscription—competitor gaps you cannot see in Search Console, citation drift across locations, or rank tracking across multiple services. Compare{" "}
                  <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>
                    Semrush vs Ahrefs
                  </Link>{" "}
                  for suite depth, or{" "}
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>{" "}
                  when Map Pack grids and citations are the constraint.
                </p>
                <p className="mt-4">
                  Before checkout, read{" "}
                  <Link href="/seo-tools/guides/are-seo-tools-worth-it" className={link}>
                    are SEO tools worth it
                  </Link>{" "}
                  and{" "}
                  <Link href="/seo-tools/guides/how-to-budget-for-seo-tools-and-subscriptions" className={link}>
                    how to budget for SEO tools and subscriptions
                  </Link>{" "}
                  so renewals match real headcount and markets.
                </p>
              </section>

              <section id="first-30-days" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Your first 30 days after setup</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Week 1: Fix crawl errors and publish or improve your top service page.</li>
                  <li>Week 2: GBP photos, Q&amp;A, and review response template.</li>
                  <li>Week 3: Internal links from home to money pages; check mobile speed on real devices.</li>
                  <li>Week 4: Review Search Console queries—add FAQs or proof where impressions exist but clicks lag.</li>
                </ul>
                <p className="mt-4">
                  Tag leads in your{" "}
                  <Link href="/crm" className={link}>
                    CRM
                  </Link>{" "}
                  so you know whether organic, Maps, or paid produced booked work—not just traffic vanity metrics.
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
              <GuideSidebar title="Tools for SMB SEO setup" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How to Set Up SEO for a Small Business (2026) | Step-by-Step | BeltStack",
    description:
      "Set up SEO for a small business: Search Console, technical basics, GBP alignment, core service pages, free vs paid tools, and when Semrush, Ahrefs, or BrightLocal fit.",
  };
}
