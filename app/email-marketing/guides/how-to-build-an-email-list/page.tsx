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

const href = "/email-marketing/guides/how-to-build-an-email-list";
const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const FAQ = [
  {
    q: "Is it legal to add customers automatically?",
    a: "Depends on jurisdiction and consent language at booking. Many service brands use transactional necessity for receipts while requiring separate opt-in for marketing. Document what you promised on the form.",
  },
  {
    q: "Should we buy a list?",
    a: "No for reputable local operators—deliverability and trust collapse, and violations can trigger penalties. Grow from real service relationships and content.",
  },
  {
    q: "What is a realistic monthly growth target?",
    a: "Small teams often add low single-digit percentages of active customers when processes are tight—quality outpaces vanity volume. Celebrate engaged subscribers, not raw counts.",
  },
  {
    q: "How do integrations help?",
    a: "CRM and field tools should pass tags (service line, commercial vs residential) so the first campaign is relevant, not generic. Broken integrations create orphan subscribers who churn fast.",
  },
  {
    q: "Double opt-in—worth it?",
    a: "Strongly consider it if you send broadly or internationally—it proves consent and improves inbox placement over time.",
  },
  {
    q: "Which ESP helps small lists grow cleanly?",
    a: "MailerLite and Mailchimp offer approachable forms; HubSpot bundles help if CRM is already central. See sidebar reviews for depth.",
  },
];

export default function HowToBuildAnEmailListPage() {
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
                      How to Build an Email List
                    </li>
                  </ol>
                </nav>
                <header className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl">How to Build an Email List</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed">
                    Strong lists come from clear value and clean consent—not scraping or vague checkboxes. Benchmark ESPs via our{" "}
                    <Link href="/email-marketing/best-email-marketing-software" className={link}>
                      best email marketing software
                    </Link>{" "}
                    page, read{" "}
                    <Link href={getEmailMarketingReviewUrl("mailerlite")} className={link}>
                      MailerLite
                    </Link>{" "}
                    and{" "}
                    <Link href={getEmailMarketingReviewUrl("convertkit")} className={link}>
                      Kit
                    </Link>
                    , compare{" "}
                    <Link href={getEmailMarketingCompareUrl("convertkit-vs-mailchimp")} className={link}>
                      Kit vs Mailchimp
                    </Link>
                    , and align industries on{" "}
                    <Link href={getEmailMarketingBestForUrl("contractors")} className={link}>
                      contractor email picks
                    </Link>
                    .
                  </p>
                  <GuideLastUpdated date="March 25, 2026" />
                </header>
                <div className="prose prose-neutral mt-8 max-w-none text-[#57534E] text-base leading-relaxed">
                  <h2 className="text-[#1A2D48] text-xl font-bold">Design offers people actually want</h2>
                  <p className="mt-2">
                    Maintenance calendars, emergency shutoff checklists, and seasonal preparation one-pagers outperform “sign up for news.” Gate the asset behind a simple form that states email frequency and content themes plainly.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Capture everywhere you already have trust</h2>
                  <p className="mt-2">
                    After high-quality jobs, technicians can ask permission during walkthroughs. Front desks can scan QR codes to hosted forms. Online, embed widgets from your ESP into pages you build with modern{" "}
                    <Link href="/website-builders" className={link}>
                      website builders
                    </Link>
                    .
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Tag on entry</h2>
                  <p className="mt-2">
                    Ask one segmentation question when feasible—ZIP, service interest, residential vs commercial—so the welcome series can diverge immediately. Default everyone into one generic stream only when you must.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Sync CRM before scaling spend</h2>
                  <p className="mt-2">
                    Lists that fight your{" "}
                    <Link href="/crm" className={link}>
                      CRM
                    </Link>{" "}
                    duplicate contacts and confuse sales. Deduplicate aggressively; decide whether marketing unsubscribes should pause sales outreach too.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Feed subscribers from demand you already pay for</h2>
                  <p className="mt-2">
                    Offers attached to{" "}
                    <Link href="/lead-generation" className={link}>
                      lead generation
                    </Link>{" "}
                    landing pages convert when the promise matches the ad. Organic readers from{" "}
                    <Link href="/seo-tools" className={link}>
                      SEO improvements
                    </Link>{" "}
                    list-build slower but often stick longer—balance both funnels.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Close the loop with reviews</h2>
                  <p className="mt-2">
                    Happy subscribers often become advocates—coordinate post-job email timing with{" "}
                    <Link href="/reputation-management" className={link}>
                      reputation workflows
                    </Link>{" "}
                    so you ask once, confidently.
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
    title: "How to Build an Email List | BeltStack",
    description: "Ethical list growth for service businesses: offers, forms, CRM tagging, and consent workflows that protect deliverability.",
  };
}
