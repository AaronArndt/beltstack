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

const href = "/email-marketing/guides/email-marketing-for-local-business";
const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const FAQ = [
  {
    q: "How do local businesses grow a list without feeling pushy?",
    a: "Lead with value: maintenance checklists, seasonal preparation tips, and transparent service-area maps. Ask permission at booking, on the thank-you page, and after a great job—never from purchased lists.",
  },
  {
    q: "What cadence feels neighborly, not spammy?",
    a: "One useful monthly email plus triggered operational messages (confirmations, reminders). Add a second monthly send only if you have distinct segments with different needs.",
  },
  {
    q: "Should we personalize by ZIP or neighborhood?",
    a: "When you truly dispatch differently—storm surge vs steady retail—yes. Fake hyper-localization backfires; honest service-area storytelling performs better.",
  },
  {
    q: "Which platform fits lean local offices?",
    a: "Mailchimp or MailerLite often fit when templates and speed matter; ActiveCampaign when CRM-triggered follow-up must run weekly. Compare our reviews in the sidebar.",
  },
  {
    q: "How do we tie email to in-store or job-site visits?",
    a: "Use consistent offer codes, tracked booking links, and CRM source tags so offline jobs credit the campaign that influenced the decision.",
  },
  {
    q: "Can email replace door hangers?",
    a: "It complements them—email scales education and reminders; door hangers still anchor hyper-local awareness. Blend both with different creative so messaging does not duplicate awkwardly.",
  },
];

export default function EmailMarketingForLocalBusinessPage() {
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
                      Email Marketing for Local Business
                    </li>
                  </ol>
                </nav>
                <header className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Email Marketing for Local Business</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed">
                    Local operators succeed when email reinforces real proximity—honest service areas, familiar tech faces, and helpful seasonal advice. Compare vendors in our{" "}
                    <Link href="/email-marketing/best-email-marketing-software" className={link}>
                      best email marketing software
                    </Link>{" "}
                    guide, read{" "}
                    <Link href={getEmailMarketingReviewUrl("klaviyo")} className={link}>
                      Klaviyo
                    </Link>{" "}
                    and{" "}
                    <Link href={getEmailMarketingReviewUrl("constant-contact")} className={link}>
                      Constant Contact
                    </Link>
                    , study{" "}
                    <Link href={getEmailMarketingCompareUrl("mailchimp-vs-constant-contact")} className={link}>
                      Mailchimp vs Constant Contact
                    </Link>
                    , and narrow trade fit on{" "}
                    <Link href={getEmailMarketingBestForUrl("small-business")} className={link}>
                      best email marketing for small business
                    </Link>
                    .
                  </p>
                  <GuideLastUpdated date="March 25, 2026" />
                </header>
                <div className="prose prose-neutral mt-8 max-w-none text-[#57534E] text-base leading-relaxed">
                  <h2 className="text-[#1A2D48] text-xl font-bold">Earn permission at every touchpoint</h2>
                  <p className="mt-2">
                    Counter staff, estimators, and online forms should explain what subscribers receive—maintenance tips, exclusive booking windows, storm prep—not vague “updates.” Double opt-in remains the cleanest audit trail when disputes arise.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Keep creative specific and scannable</h2>
                  <p className="mt-2">
                    Mobile readers decide in seconds. Lead with the outcome (“Keep pipes flowing this freeze season”) and one bold CTA to book or call. Avoid cluttering footers with seven unrelated services unless you segment.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Bridge website traffic and the inbox</h2>
                  <p className="mt-2">
                    High-converting pages from your{" "}
                    <Link href="/website-builders" className={link}>
                      website builder
                    </Link>{" "}
                    should feed tagged lists—service line, urgency, commercial vs residential—so follow-up resonates. Pair blog or FAQ content with a single downloadable checklist to grow subscribers ethically.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Coordinate CRM and marketing lists</h2>
                  <p className="mt-2">
                    Marketing fatigue happens when sales still calls aggressively while nurture runs. Align suppression rules in your{" "}
                    <Link href="/crm" className={link}>
                      CRM
                    </Link>{" "}
                    so open opportunities do not receive blind win-back blasts.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Measure neighborhood impact honestly</h2>
                  <p className="mt-2">
                    Track booked jobs influenced by campaigns, not open rate trophies. Combine UTM discipline with{" "}
                    <Link href="/lead-generation" className={link}>
                      lead sources
                    </Link>{" "}
                    and{" "}
                    <Link href="/seo-tools" className={link}>
                      organic landing pages
                    </Link>{" "}
                    so you know which neighborhoods and intents actually respond.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Layer reputation moments carefully</h2>
                  <p className="mt-2">
                    Review requests belong in email when you can personalize the story of the job. Connect timing with{" "}
                    <Link href="/reputation-management" className={link}>
                      reputation software
                    </Link>{" "}
                    so SMS and email do not stack redundantly.
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
    title: "Email Marketing for Local Business | BeltStack",
    description: "How local service businesses build ethical lists, write neighbor-friendly cadences, and connect email to CRM and website capture.",
  };
}
