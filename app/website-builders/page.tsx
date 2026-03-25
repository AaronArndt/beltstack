"use client";

import Link from "next/link";
import { HubPageTemplate, type FaqItem } from "@/components/hubs/HubPageTemplate";
import { HubEditorialUseCaseSection } from "@/components/hubs/HubEditorialUseCaseSection";
import { HubGuidesGrid } from "@/components/hubs/HubGuidesGrid";
import {
  WEBSITE_BUILDERS_COMPARISON_TABLE_ROWS,
  WEBSITE_BUILDERS_FAQ_ITEMS,
  WEBSITE_BUILDERS_FEATURED_PICKS,
  WEBSITE_BUILDERS_HUB_POPULAR_COMPARISONS,
  WEBSITE_BUILDERS_METHODOLOGY,
  WEBSITE_BUILDERS_SCENARIO_LINKS,
  WEBSITE_BUILDERS_TRADE_GROUPS,
  WEBSITE_BUILDERS_USE_CASE_EDITORIAL,
} from "@/lib/data/websiteBuildersHubData";
import { WEBSITE_BUILDERS_GUIDES } from "@/lib/data/websiteBuildersGuides";
import { getWebsiteBuildersComparisonBySlug } from "@/lib/data/websiteBuildersComparisons";
import { getWebsiteBuildersReviewUrl, getLeadGenerationBestForUrl } from "@/lib/routes";

const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

const KEY_TAKEAWAYS = [
  { label: "Best overall for local operators: Wix", anchor: "#pick-wix" },
  { label: "Best for polished visual branding: Squarespace", anchor: "#pick-squarespace" },
  { label: "Best when ecommerce matters: Shopify", anchor: "#pick-shopify" },
  { label: "Best for advanced customization: Webflow", anchor: "#pick-webflow" },
  { label: "Fast simple launch: GoDaddy", anchor: "#pick-godaddy-website-builder" },
  { label: "Best budget entry: Hostinger", anchor: "#pick-hostinger-website-builder" },
];

function HubSectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub != null && sub.length > 0 && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

function WebsiteBuildersIntroExtended() {
  return (
    <p>
      Find top picks, comparisons, guides, and our <Link href="/website-builders/best-for" className={linkGreen}>best website builders by use case</Link> hub for scenario-based picks. After launch, use our{" "}
      <Link href="/seo-tools" className={linkGreen}>
        SEO tools hub
      </Link>{" "}
      to measure queries and grow organic visibility, then pair the site with{" "}
      <Link href="/crm" className={linkGreen}>
        CRM software
      </Link>{" "}
      for lead follow-up,{" "}
      <Link href={getLeadGenerationBestForUrl("contractors")} className={linkGreen}>
        lead generation tools for contractors
      </Link>{" "}
      to fill the pipeline, and{" "}
      <Link href="/invoicing" className={linkGreen}>
        invoicing tools
      </Link>{" "}
      for billing—so your marketing-to-cash flow stays connected.
    </p>
  );
}

function WebsiteBuilderGuidesSection() {
  return (
    <HubGuidesGrid
      sectionTitle="Website builder guides"
      sectionSub="Learn how local SEO, conversion structure, and platform tradeoffs work—before you shortlist vendors."
      intro={
        <>
          These articles are educational: evaluation, structure, and maintenance—not duplicate product roundups. For scenario-based picks, use{" "}
          <a href="#by-scenario" className={linkGreen}>
            best website builders by use case
          </a>
          ; for trade entry points, see{" "}
          <a href="#by-trade" className={linkGreen}>
            website builders by business type
          </a>
          . Compare vendors anytime in our{" "}
          <Link href="/website-builders/compare" className={linkGreen}>
            comparison hub
          </Link>{" "}
          or{" "}
          <Link href="/website-builders/best-website-builders" className={linkGreen}>
            full rankings
          </Link>
          .
        </>
      }
      guides={WEBSITE_BUILDERS_GUIDES.map((g) => ({
        ...g,
        slug: g.href.split("/").filter(Boolean).pop(),
      }))}
      footer={
        <>
          Read our full reviews:{" "}
          <Link href={getWebsiteBuildersReviewUrl("wix")} className={linkGreen}>
            Wix
          </Link>
          ,{" "}
          <Link href={getWebsiteBuildersReviewUrl("squarespace")} className={linkGreen}>
            Squarespace
          </Link>
          ,{" "}
          <Link href={getWebsiteBuildersReviewUrl("shopify")} className={linkGreen}>
            Shopify
          </Link>
          ,{" "}
          <Link href={getWebsiteBuildersReviewUrl("webflow")} className={linkGreen}>
            Webflow
          </Link>
          ,{" "}
          <Link href={getWebsiteBuildersReviewUrl("duda")} className={linkGreen}>
            Duda
          </Link>
          ,{" "}
          <Link href={getWebsiteBuildersReviewUrl("godaddy-website-builder")} className={linkGreen}>
            GoDaddy
          </Link>
          ,{" "}
          <Link href={getWebsiteBuildersReviewUrl("wordpress")} className={linkGreen}>
            WordPress
          </Link>
          ,{" "}
          <Link href={getWebsiteBuildersReviewUrl("hostinger-website-builder")} className={linkGreen}>
            Hostinger
          </Link>
          .{" "}
          <Link href="/website-builders/guides" className={linkGreen}>
            All website builder guides →
          </Link>
        </>
      }
    />
  );
}

function PopularComparisonsSection() {
  const cards = WEBSITE_BUILDERS_HUB_POPULAR_COMPARISONS.map((item) => {
    const data = getWebsiteBuildersComparisonBySlug(item.slug);
    return data ? { slug: item.slug, href: item.href, data } : null;
  }).filter(Boolean) as {
    slug: string;
    href: string;
    data: NonNullable<ReturnType<typeof getWebsiteBuildersComparisonBySlug>>;
  }[];

  return (
    <>
      <HubSectionTitle sub="Side-by-side website builder features, pricing context, and recommendations.">
        Popular Website Builder Comparisons
      </HubSectionTitle>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ slug, href, data }) => {
          const title = `${data.productA.name} vs ${data.productB.name}`;
          const summary =
            data.summaryParagraph.length > 140
              ? `${data.summaryParagraph.slice(0, 140).trim()}…`
              : data.summaryParagraph;
          return (
            <Link
              key={slug}
              href={href}
              className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
            >
              <div className="flex items-center gap-3">
                {data.productA.logoSrc ? (
                  <img
                    src={data.productA.logoSrc}
                    alt=""
                    className="h-10 w-auto max-w-[80px] object-contain object-left"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <span className="flex h-10 min-w-[60px] items-center text-sm font-medium text-[#57534E]">{data.productA.name}</span>
                )}
                <span className="text-lg font-medium text-[#57534E]" aria-hidden>
                  vs
                </span>
                {data.productB.logoSrc ? (
                  <img
                    src={data.productB.logoSrc}
                    alt=""
                    className="h-10 w-auto max-w-[80px] object-contain object-left"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <span className="flex h-10 min-w-[60px] items-center text-sm font-medium text-[#57534E]">{data.productB.name}</span>
                )}
              </div>
              <h3 className="mt-3 text-xl font-bold text-[#1A2D48] group-hover:text-[#10B981]">{title}</h3>
              <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-[#57534E]">{summary}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">Compare →</span>
            </Link>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-[#57534E]">
        <Link href="/website-builders/compare" className={linkGreen}>
          View all website builder comparisons →
        </Link>
      </p>
    </>
  );
}

function WebsiteBuildersEducationSection() {
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">What businesses should look for in website builder software</h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#57534E] text-sm sm:text-base">What matters when service businesses choose a website platform.</p>
      </div>
      <div className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="space-y-6 lg:col-span-2">
          <div>
            <h3 className="text-lg font-semibold text-[#1A2D48]">Lead capture and mobile conversion</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#57534E]">
              Most local revenue still starts with a call, form, or quote request. Your builder should make click-to-call, short forms, and service-area clarity obvious on small screens—without burying trust content (reviews, licenses, guarantees) where nobody scrolls.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1A2D48]">Local SEO and service-page architecture</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#57534E]">
              Rankings follow structure: dedicated pages per primary service, clean URLs, editable titles and descriptions, and fast-loaded images. Evaluate how easily you can add locations and service routes as you grow—not just how pretty the homepage template is.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1A2D48]">Maintenance ownership and total cost</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#57534E]">
              The best platform is one your team actually updates after launch. Model subscription cost plus bookings, forms, marketing apps, and ecommerce add-ons. If you need{" "}
              <Link href="/website-builders/guides/website-builders-vs-wordpress" className={linkGreen}>
                WordPress-level flexibility
              </Link>
              , confirm you have the ops capacity; if not, favor simpler builders with clearer guardrails.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1A2D48]">Key features checklist</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#57534E]">
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-[#10B981]" aria-hidden>
                  ✓
                </span>
                Quote/contact forms and clear CTAs
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-[#10B981]" aria-hidden>
                  ✓
                </span>
                Service and service-area pages
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-[#10B981]" aria-hidden>
                  ✓
                </span>
                Reviews, galleries, and trust proof
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-[#10B981]" aria-hidden>
                  ✓
                </span>
                Editable SEO metadata and URL control
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-[#10B981]" aria-hidden>
                  ✓
                </span>
                Mobile performance and simple editing
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-[#10B981]" aria-hidden>
                  ✓
                </span>
                Integrations (analytics, booking, CRM handoff)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default function WebsiteBuildersHubPage() {
  return (
    <HubPageTemplate
      title="Website Builders for Service Businesses (2026)"
      intro="Compare website builders for contractors, home service teams, and local operators. Find the best platform for leads, trust, and easy maintenance."
      breadcrumbLabel="Website Builders"
      keyTakeaways={KEY_TAKEAWAYS}
      softwarePickCategory="website-builders"
      featuredPicks={WEBSITE_BUILDERS_FEATURED_PICKS}
      featuredPicksTitle="Top website builder picks"
      featuredPicksSub="Hand-picked for local service-business growth."
      comparisonTable={{
        title: "Compare website builders",
        subtitle: "Side-by-side pricing, fit, and standout strengths.",
        rows: WEBSITE_BUILDERS_COMPARISON_TABLE_ROWS,
        detailsLinkBase: "/website-builders/review/",
      }}
      comparisonTableIntro="Use this table to quickly compare options before diving into full reviews and use-case pages."
      introExtended={<WebsiteBuildersIntroExtended />}
      scenarioCustomContent={
        <HubEditorialUseCaseSection
          sectionTitle="Best website builders by use case"
          sectionSub="Scenario-based picks—lead flow, ecommerce depth, and who maintains the site—not your industry label alone."
          intro={
            <>
              These blurbs explain who each situation fits and what to prioritize. For trade- or identity-based entry points (HVAC, plumbers, home services), use{" "}
              <a href="#by-trade" className={linkGreen}>
                website builders by business type
              </a>{" "}
              below. For deeper how-to (SEO, WordPress tradeoffs), see{" "}
              <a href="#payroll-guides" className={linkGreen}>
                website builder guides
              </a>
              .
            </>
          }
          blocks={WEBSITE_BUILDERS_USE_CASE_EDITORIAL}
        />
      }
      popularComparisonsSection={<PopularComparisonsSection />}
      guidesSection={<WebsiteBuilderGuidesSection />}
      educationSection={<WebsiteBuildersEducationSection />}
      bestRoundupBlock={{
        title: "Best Website Builders Overall",
        description: "See our full rankings for service-business websites, including trade-specific recommendations.",
        linkText: "See full rankings →",
        href: "/website-builders/best-website-builders",
      }}
      featuredPicksRankingsLink={{ label: "See full rankings →", href: "/website-builders/best-website-builders" }}
      comparisonTableRankingsLink={{ label: "See our full rankings →", href: "/website-builders/best-website-builders" }}
      scenarioLinks={{
        sectionTitle: "Best website builders by use case",
        sectionSub: "Scenario-based recommendations.",
        links: WEBSITE_BUILDERS_SCENARIO_LINKS,
        highlightFirstLink: true,
      }}
      tradeLinks={{
        sectionTitle: "Website builders by business type",
        sectionSub:
          "Identity-based navigation: your industry or business model—not template aesthetics alone. Different trades need different proof, urgency, and page structure.",
        links: [],
        groups: WEBSITE_BUILDERS_TRADE_GROUPS,
      }}
      faqItems={WEBSITE_BUILDERS_FAQ_ITEMS as FaqItem[]}
      faqTitle="Website builder FAQs"
      faqSub="Quick answers for local operators."
      methodology={WEBSITE_BUILDERS_METHODOLOGY}
    />
  );
}
