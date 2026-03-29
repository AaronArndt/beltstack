import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar } from "@/components/guides/GuideSidebar";
import { RelatedEmailMarketingResources } from "@/components/guides/RelatedEmailMarketingResources";
import { EMAIL_MARKETING_GUIDE_SIDEBAR_ITEMS } from "@/lib/data/emailMarketingGuideSidebar";
import { getEmailMarketingBestForUrl, getEmailMarketingReviewUrl } from "@/lib/routes";

const href = "/email-marketing/guides/email-automation-for-service-businesses";
const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const FAQ = [
  { q: "What is the first automation most service businesses should ship?", a: "A post-job thank-you with clear next steps (warranty, maintenance, referral ask) beats a complex 12-email fantasy map nobody maintains." },
  { q: "How do I avoid automation feeling robotic?", a: "Branch on service line and neighborhood; use real tech names and photos; keep segments small enough that copy stays plausible." },
  { q: "When does CRM integration matter?", a: "Once more than one person updates job status—otherwise automation fires on stale data and erodes trust." },
];

export default function EmailAutomationForServiceBusinessesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px] pt-8 pb-16">
                <nav aria-label="Breadcrumb" className="pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link></li><li aria-hidden>/</li>
                    <li><Link href="/email-marketing" className="text-gray-500 hover:text-gray-900">Email Marketing</Link></li><li aria-hidden>/</li>
                    <li><Link href="/email-marketing/guides" className="text-gray-500 hover:text-gray-900">Guides</Link></li><li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Automation for Service Businesses</li>
                  </ol>
                </nav>
                <header className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold sm:text-4xl">Email Automation for Service Businesses</h1>
                  <p className="mt-3 text-[#57534E]">
                    Welcome flows, post-job follow-up, maintenance reminders, and win-back—sequences your office can own without a full marketing department.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </header>
                <div className="prose prose-neutral mt-8 max-w-none text-[#57534E] text-base leading-relaxed">
                  <h2 className="text-[#1A2D48] text-xl font-bold">Trigger from real job data</h2>
                  <p className="mt-2">
                    Strong automation keys off CRM or field-service milestones: job completed, estimate sent, membership expiring. Align with{" "}
                    <Link href="/crm" className={link}>CRM</Link> practices before scaling branches.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Tool fit</h2>
                  <p className="mt-2">
                    <Link href={getEmailMarketingReviewUrl("activecampaign")} className={link}>ActiveCampaign</Link> and{" "}
                    <Link href={getEmailMarketingReviewUrl("hubspot-email-marketing")} className={link}>HubSpot</Link> emphasize CRM-aware automation;{" "}
                    <Link href={getEmailMarketingReviewUrl("mailchimp")} className={link}>Mailchimp</Link> suits lighter stacks. Scenario:{" "}
                    <Link href={getEmailMarketingBestForUrl("contractors")} className={link}>email marketing for contractors</Link>.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Pair with deliverability and consent</h2>
                  <p className="mt-2">
                    Before heavy automation, confirm <Link href="/email-marketing/guides/email-deliverability-spf-dkim-dmarc" className={link}>SPF, DKIM, and DMARC</Link> and{" "}
                    <Link href="/email-marketing/guides/email-marketing-consent-and-can-spam" className={link}>CAN-SPAM basics</Link>.
                  </p>
                </div>
                <div className="mt-10">
                  <GuideFaqSection faqs={FAQ} />
                </div>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Email software reviews" items={EMAIL_MARKETING_GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Email Automation for Service Businesses | BeltStack",
    description:
      "Automation workflows for trades and local service: post-job sequences, maintenance reminders, and win-back—grounded in CRM triggers you can maintain.",
  };
}
