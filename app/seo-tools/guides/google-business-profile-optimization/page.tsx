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
    bestFor: "GBP reporting, grids, and multi-location scale",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
  },
  {
    name: "Whitespark",
    logoSrc: "/Logos/whitespark.jpeg",
    rating: 4.5,
    bestFor: "Citations, listings, and local SEO education",
    reviewHref: getSeoToolsReviewUrl("whitespark"),
  },
  {
    name: "Moz Pro",
    logoSrc: "/Logos/mozpro.jpeg",
    rating: 4.3,
    bestFor: "On-page guidance and approachable rank tracking",
    reviewHref: getSeoToolsReviewUrl("moz-pro"),
  },
];

const FAQ = [
  {
    q: "What is the fastest legitimate GBP win?",
    a: "Pick the single most accurate primary category, tighten your service area to where crews actually work, add 8–12 strong job photos, and complete every service you want to rank for. Avoid stuffing keywords into your business name—that risks suspension.",
  },
  {
    q: "How often should I post photos or updates?",
    a: "Aim for weekly proof of activity: finished jobs, team shots, seasonal offers, or short updates. Stale profiles signal inactive businesses to both users and Google.",
  },
  {
    q: "Do I need a local SEO tool for GBP?",
    a: "Solo operators can manage GBP in Google’s interface plus Search Console on the site. Multi-location brands, agencies, and anyone running rank grids usually benefit from BrightLocal or Whitespark for reporting scale. Read BrightLocal vs Whitespark before you commit.",
  },
  {
    q: "How important are Google Business Profile categories?",
    a: "Very. The primary category is one of the strongest relevance signals for Maps. Secondary categories add breadth but should still reflect real revenue lines—not every keyword you wish you ranked for.",
  },
  {
    q: "Should I keyword-stuff my business name?",
    a: "No. It violates guidelines and can trigger suspensions or competitor edits. Use your legal or DBA name; put keywords into services, descriptions (where allowed), posts, and your website.",
  },
  {
    q: "How do reviews affect GBP performance?",
    a: "Reviews influence click-through rate and trust. Recent reviews with owner responses outperform stale five-star walls. Ask happy customers after jobs; reply with specifics and a human tone.",
  },
  {
    q: "What if I have multiple listings for the same business?",
    a: "Duplicates split reviews and confuse Google. Merge or remove extras per Google’s rules—often you need one profile per staffed location and service-area businesses use a single profile with defined areas.",
  },
];

export default function GoogleBusinessProfileOptimizationPage() {
  const href = "/seo-tools/guides/google-business-profile-optimization";
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
                  Google Business Profile Optimization
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Google Business Profile Optimization</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                A field guide to GBP for plumbers, HVAC, electricians, cleaners, and other service businesses that live in the Map Pack. Pair this with our{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools
                </Link>{" "}
                picks and{" "}
                <Link href="/seo-tools/guides/how-to-rank-in-google-maps" className={link}>
                  how to rank in Google Maps
                </Link>{" "}
                for ranking context.
              </p>
              <GuideLastUpdated date="March 24, 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="why-gbp" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Why Google Business Profile is a conversion surface—not a directory listing</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Many owners treat GBP like a Yellow Pages line item. In reality, it is often the <strong className="text-[#1A2D48]">first screen</strong> a customer sees: photos, reviews, services, hours, and the call button. Optimization means making that screen accurate, persuasive, and actively maintained—not stuffing keywords.
                </p>
                <p className="mt-4">
                  For how GBP fits into the full local stack, read{" "}
                  <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                    local SEO for service businesses
                  </Link>
                  .
                </p>
              </section>

              <section id="categories-services" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Categories and services: get relevance right</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Choose the <strong className="text-[#1A2D48]">primary category</strong> that best describes your core paid work. If you are 80% residential HVAC and occasionally commercial, residential should still lead unless you are strategically pivoting the whole business.
                </p>
                <p className="mt-4">
                  Add <strong className="text-[#1A2D48]">services</strong> that mirror how customers ask for help—&quot;drain cleaning&quot; not just &quot;plumbing.&quot; These reinforce relevance between Maps and your{" "}
                  <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>
                    website service pages
                  </Link>
                  .
                </p>
              </section>

              <section id="service-area" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Service area and address honesty</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Service-area businesses should define regions you can serve on time and profitably. Over-stretching maps produces one-star &quot;never showed&quot; reviews that damage both rankings and ads. If you operate from a home office, follow Google&apos;s rules for address display—do not invent storefronts.
                </p>
                <p className="mt-4">
                  Contractors juggling multiple crews should document which territories each team covers so GBP, dispatch, and web content stay aligned—see{" "}
                  <Link href="/seo-tools/guides/how-to-do-seo-for-contractors" className={link}>
                    how to do SEO for contractors
                  </Link>
                  .
                </p>
              </section>

              <section id="photos-media" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Photos, posts, and Q&amp;A</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Upload <strong className="text-[#1A2D48]">real job photos</strong> regularly: before/after, equipment, branded trucks, and finished installs. Rotate seasonal posts (spring tune-ups, storm prep) so the profile looks alive. Monitor <strong className="text-[#1A2D48]">Questions &amp; answers</strong>—seed common FAQs yourself so competitors or random users do not own the narrative.
                </p>
              </section>

              <section id="reviews" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Reviews and owner responses</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Request reviews after successful jobs; make it easy with a short link or SMS template. Respond to every review: thank specifics, acknowledge problems professionally, and avoid robotic copy-paste. Prospects read responses as a preview of how you handle conflict.
                </p>
              </section>

              <section id="website-bridge" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Bridge GBP to your website and CRM</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Use UTM parameters or call tracking numbers consistently so{" "}
                  <Link href="/crm" className={link}>
                    CRM
                  </Link>{" "}
                  reports show Maps-sourced leads. When you need jobs this month while organic ramps, review our{" "}
                  <Link href="/lead-generation/best-lead-generation-tools" className={link}>
                    best lead generation tools
                  </Link>{" "}
                  roundup—then keep source tags consistent in CRM. Your top services on GBP should deep-link to matching pages on the site—not always the homepage. If your site is hard to update, fix that with{" "}
                  <Link href="/website-builders/guides/best-website-builder-for-local-seo" className={link}>
                    best website builder for local SEO
                  </Link>{" "}
                  and{" "}
                  <Link href="/website-builders/guides/contractor-website-features" className={link}>
                    contractor website features
                  </Link>
                  .
                </p>
              </section>

              <section id="tools" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Tools that help at scale</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>{" "}
                  and{" "}
                  <Link href={getSeoToolsReviewUrl("whitespark")} className={link}>
                    Whitespark
                  </Link>{" "}
                  excel at local rank grids, citation tracking, and multi-location reporting. All-in-one suites such as{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>{" "}
                  add keyword and site audits when you are also growing content. Compare{" "}
                  <Link href={getSeoToolsCompareUrl("brightlocal-vs-whitespark")} className={link}>
                    BrightLocal vs Whitespark
                  </Link>{" "}
                  and browse{" "}
                  <Link href="/seo-tools/best-for/local-seo" className={link}>
                    best SEO tools for local SEO
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
              <GuideSidebar title="SEO tools for Google Business Profile" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Google Business Profile Optimization (2026) | GBP Guide for Local Services | BeltStack",
    description:
      "Optimize Google Business Profile for local service businesses: categories, service areas, photos, services, reviews, and tools like BrightLocal and Whitespark—without risky keyword stuffing.",
  };
}
