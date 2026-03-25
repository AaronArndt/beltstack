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

const href = "/email-marketing/guides/how-to-use-email-marketing-for-contractors";
const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const FAQ = [
  {
    q: "What is the first automation a contractor should launch?",
    a: "A post-job sequence: thank-you, review or referral ask, and a soft upsell for maintenance—triggered from job completion in your CRM or field tool when integration allows. Add estimate reminders only after that runs without errors for 30 days.",
  },
  {
    q: "How often should trades email customers?",
    a: "Aim for predictable utility: appointment confirmations, one to two value emails monthly, and seasonal pushes you announce in advance. Avoid surprise blasts during peak emergency weeks when inboxes are noisy.",
  },
  {
    q: "Should proposals live inside email?",
    a: "Use email to link to hosted proposals or portal pages so version control stays honest. Never attach giant PDFs without context; summarize decision deadlines in the body and track clicks when possible.",
  },
  {
    q: "How do we keep office and field aligned?",
    a: "Define who edits copy, who approves sends, and how technicians trigger Do-Not-Contact flags after difficult jobs. Marketing cannot override ops reality on the ground.",
  },
  {
    q: "Mailchimp vs ActiveCampaign for contractors—which wins?",
    a: "Mailchimp when you need speed and templates with moderate automation; ActiveCampaign when CRM stages, tasks, and branching must reflect pipeline truth. See our dedicated comparison for decision steps.",
  },
  {
    q: "How does email connect to reputation programs?",
    a: "Tie review requests to closed tickets with clear timing—email carries richer context than SMS alone for some homeowners. Coordinate with your reputation stack so you do not double-ask.",
  },
];

export default function HowToUseEmailMarketingForContractorsPage() {
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
                      How to Use Email Marketing for Contractors
                    </li>
                  </ol>
                </nav>
                <header className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl">How to Use Email Marketing for Contractors</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed">
                    Contractors win email when messages mirror real job milestones—estimates, dispatch, completion, membership renewals—not random promotions. Start with our{" "}
                    <Link href="/email-marketing/best-email-marketing-software" className={link}>
                      best email marketing software
                    </Link>{" "}
                    roundup, read the{" "}
                    <Link href={getEmailMarketingReviewUrl("mailchimp")} className={link}>
                      Mailchimp
                    </Link>{" "}
                    and{" "}
                    <Link href={getEmailMarketingReviewUrl("activecampaign")} className={link}>
                      ActiveCampaign
                    </Link>{" "}
                    reviews, open{" "}
                    <Link href={getEmailMarketingCompareUrl("mailchimp-vs-activecampaign")} className={link}>
                      Mailchimp vs ActiveCampaign
                    </Link>{" "}
                    for tool choice, and use{" "}
                    <Link href={getEmailMarketingBestForUrl("contractors")} className={link}>
                      best email marketing for contractors
                    </Link>{" "}
                    for scenario picks.
                  </p>
                  <GuideLastUpdated date="March 25, 2026" />
                </header>
                <div className="prose prose-neutral mt-8 max-w-none text-[#57534E] text-base leading-relaxed">
                  <h2 className="text-[#1A2D48] text-xl font-bold">Map journeys to job truth</h2>
                  <p className="mt-2">
                    Sketch flows on paper before touching an ESP: estimate sent, no response in five business days, job scheduled, job completed, membership expiring in 30 days. If your{" "}
                    <Link href="/crm" className={link}>
                      CRM
                    </Link>{" "}
                    cannot emit those states, fix stages first—otherwise automation becomes guesswork that trains customers to ignore you.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Segment by economics, not vanity</h2>
                  <p className="mt-2">
                    Residential tune-ups, emergency premiums, commercial bids, and large retrofit projects deserve separate message tone and CTAs. Blending them produces weak offers that underperform for everyone. Tag by service line and ticket band when possible; at minimum separate “prospect,” “active maintenance,” and “dormant.”
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Integrate capture with field habits</h2>
                  <p className="mt-2">
                    Techs should confirm email consent when finishing jobs— verbal-only lists decay. Pair paper cards with QR codes that land on double opt-in pages from your{" "}
                    <Link href="/website-builders" className={link}>
                      website builder
                    </Link>
                    . Feed new subscribers into the same CRM you use for dispatch so sales sees opens before calling.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Run seasonal campaigns during quiet weeks</h2>
                  <p className="mt-2">
                    Build shoulder-season pushes when the office can QA copy, not during your busiest heat wave or freeze. Pre-write three variations (urgency, educational, membership) so you are not inventing tone under pressure.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Coordinate with leads and SEO</h2>
                  <p className="mt-2">
                    Email rescues leads that{" "}
                    <Link href="/lead-generation" className={link}>
                      paid programs
                    </Link>{" "}
                    deliver—use tagged nurture instead of generic newsletters. Capture organic visitors with content upgrades tied to service pages you improve via{" "}
                    <Link href="/seo-tools" className={link}>
                      SEO tooling
                    </Link>
                    . Close the loop with review campaigns aligned to{" "}
                    <Link href="/reputation-management" className={link}>
                      reputation workflows
                    </Link>
                    .
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
    title: "How to Use Email Marketing for Contractors | BeltStack",
    description: "Contractor email marketing playbooks: job-milestone automations, segmentation, seasonal campaigns, and CRM alignment.",
  };
}
