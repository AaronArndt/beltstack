import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar } from "@/components/guides/GuideSidebar";
import { RelatedEmailMarketingResources } from "@/components/guides/RelatedEmailMarketingResources";
import { EMAIL_MARKETING_GUIDE_SIDEBAR_ITEMS } from "@/lib/data/emailMarketingGuideSidebar";
import {
  getEmailMarketingBestForUrl,
  getEmailMarketingCompareUrl,
  getEmailMarketingReviewUrl,
} from "@/lib/routes";

const href = "/email-marketing/guides/best-email-campaigns-for-service-businesses";
const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const FAQ = [
  {
    q: "What email campaign moves the needle fastest post-launch?",
    a: "A tight post-job thank-you with optional review link and one upsell path (membership, tune-up, accessory) beats flashy seasonal art if operational data triggers it reliably.",
  },
  {
    q: "How many campaigns should a lean team maintain?",
    a: "One monthly broadcast plus two always-on automations—lead nurture and post-job—is plenty until someone owns measurement weekly.",
  },
  {
    q: "How do we avoid discount addiction?",
    a: "Rotate value emails (education, checklists) with limited promos. If every message cries sale, trained customers wait for coupons instead of booking on trust.",
  },
  {
    q: "Which metrics signal a healthy program?",
    a: "Trending click-to-book conversion, stable unsubscribe rates, and CRM-influenced revenue—not chasing arbitrary industry open benchmarks.",
  },
  {
    q: "Enterprise vs small-team creative?",
    a: "Polish helps, but clarity and truthful headlines beat stock glamor. Invest in concise copy and mobile previews first.",
  },
  {
    q: "When to add Klaviyo-style analytics?",
    a: "When you instrument events (completed job, membership status, tickets) and someone reviews cohorts monthly; otherwise simpler ESPs ship faster wins.",
  },
];

export default function BestEmailCampaignsForServiceBusinessesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px] pt-8 pb-16">
                <nav aria-label="Breadcrumb" className="pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li>
                      <Link href="/" className="text-gray-500 hover:text-gray-900">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/email-marketing" className="text-gray-500 hover:text-gray-900">
                        Email Marketing
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/email-marketing/guides" className="text-gray-500 hover:text-gray-900">
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      Best Email Campaigns for Service Businesses
                    </li>
                  </ol>
                </nav>
                <header className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Best Email Campaigns for Service Businesses</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed">
                    High-performing service brands choreograph a small set of proven plays—then measure honestly. Pick software using our{" "}
                    <Link href="/email-marketing/best-email-marketing-software" className={link}>
                      best email marketing software
                    </Link>{" "}
                    guide, study{" "}
                    <Link href={getEmailMarketingReviewUrl("hubspot-email-marketing")} className={link}>
                      HubSpot
                    </Link>{" "}
                    for CRM-heavy teams and{" "}
                    <Link href={getEmailMarketingReviewUrl("klaviyo")} className={link}>
                      Klaviyo
                    </Link>{" "}
                    for event-led programs, compare{" "}
                    <Link href={getEmailMarketingCompareUrl("klaviyo-vs-mailchimp")} className={link}>
                      Klaviyo vs Mailchimp
                    </Link>
                    , and tailor vertical advice via{" "}
                    <Link href={getEmailMarketingBestForUrl("hvac")} className={link}>
                      HVAC email marketing picks
                    </Link>
                    .
                  </p>
                  <GuideLastUpdated date="March 25, 2026" />
                </header>
                <div className="prose prose-neutral mt-8 max-w-none text-[#57534E] text-base leading-relaxed">
                  <h2 className="text-[#1A2D48] text-xl font-bold">Always-on: post-job gratitude and next step</h2>
                  <p className="mt-2">
                    Thank customers, summarize work performed, link warranty or care instructions, then offer a logical next appointment window. This email should feel operational—not like an ad blast—so deliverability stays strong.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Estimate nurture with deadlines</h2>
                  <p className="mt-2">
                    For stalled bids, sequence two or three concise reminders with calendar links and objection-handling FAQs (“how long crews are on site,” financing basics). Pull recipients from sends when CRM marks won/lost.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Seasonal and membership pushes</h2>
                  <p className="mt-2">
                    Plan tune-up windows early; pre-write copy variants for heat-dominated vs freeze risk weeks. Membership campaigns should restate tangible benefits (priority scheduling, waived fees) instead of vague “VIP” fluff.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Win-back for dormant customers</h2>
                  <p className="mt-2">
                    Target customers inactive 12–18 months with proof you remember their property (“last coil service date”) when data allows. Offer inspection or safety checks before margin-killing coupons.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Referral loops that respect relationships</h2>
                  <p className="mt-2">
                    Ask after high-NPS moments; provide shareable copy and a single CTA. Cross-link to{" "}
                    <Link href="/reputation-management" className={link}>
                      reputation campaigns
                    </Link>{" "}
                    when reviews—not friend referrals—are the goal.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Funnel alignment</h2>
                  <p className="mt-2">
                    Campaigns only work if acquisition matches messaging: sync{" "}
                    <Link href="/lead-generation" className={link}>
                      lead sources
                    </Link>
                    , tighten landing pages with your{" "}
                    <Link href="/website-builders" className={link}>
                      website builder
                    </Link>
                    , house customer truth in your{" "}
                    <Link href="/crm" className={link}>
                      CRM
                    </Link>
                    , and ensure{" "}
                    <Link href="/seo-tools" className={link}>
                      organic pages
                    </Link>{" "}
                    feed the same segments you email.
                  </p>
                </div>
                <div className="mt-12">
                  <GuideFaqSection faqs={FAQ} />
                </div>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Email Marketing Software Reviews" items={EMAIL_MARKETING_GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedEmailMarketingResources excludeHref={href} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best Email Campaigns for Service Businesses | BeltStack",
    description: "Campaign types that work for trades and local services—post-job flows, nurture, seasonal pushes, win-backs, and referrals.",
  };
}
