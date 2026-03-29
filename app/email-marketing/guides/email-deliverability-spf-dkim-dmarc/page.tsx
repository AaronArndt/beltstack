import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar } from "@/components/guides/GuideSidebar";
import { RelatedEmailMarketingResources } from "@/components/guides/RelatedEmailMarketingResources";
import { EMAIL_MARKETING_GUIDE_SIDEBAR_ITEMS } from "@/lib/data/emailMarketingGuideSidebar";
import { getEmailMarketingCompareUrl, getEmailMarketingReviewUrl } from "@/lib/routes";

const href = "/email-marketing/guides/email-deliverability-spf-dkim-dmarc";
const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const FAQ = [
  { q: "Do I need all three: SPF, DKIM, and DMARC?", a: "Most reputable senders publish all three. SPF and DKIM prove message authenticity; DMARC tells receivers how to treat failures and gives reporting signals." },
  { q: "Will fixing DNS instantly fix inbox placement?", a: "Authentication removes one class of failures; content, engagement, and list quality still matter. Expect gradual improvement as providers rebuild trust." },
  { q: "Should I edit DNS myself?", a: "If you are unsure, use your ESP’s guided wizards and involve whoever owns DNS—wrong TXT records can break email entirely." },
];

export default function EmailDeliverabilitySpfDkimDmarcPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">SPF, DKIM &amp; DMARC</li>
                  </ol>
                </nav>
                <header className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold sm:text-4xl">Email Deliverability: SPF, DKIM &amp; DMARC</h1>
                  <p className="mt-3 text-[#57534E]">
                    Authentication basics for small businesses—what each DNS record does, how ESPs use them, and when to bring in DNS help.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </header>
                <div className="prose prose-neutral mt-8 max-w-none text-[#57534E] text-base leading-relaxed">
                  <h2 className="text-[#1A2D48] text-xl font-bold">Start with your ESP’s checklist</h2>
                  <p className="mt-2">
                    Platforms like <Link href={getEmailMarketingReviewUrl("mailchimp")} className={link}>Mailchimp</Link>,{" "}
                    <Link href={getEmailMarketingReviewUrl("activecampaign")} className={link}>ActiveCampaign</Link>, and{" "}
                    <Link href={getEmailMarketingReviewUrl("klaviyo")} className={link}>Klaviyo</Link> publish the exact hostnames and values—compare vendors on our{" "}
                    <Link href="/email-marketing/best-email-marketing-software" className={link}>best email marketing software</Link> page and{" "}
                    <Link href={getEmailMarketingCompareUrl("mailchimp-vs-activecampaign")} className={link}>Mailchimp vs ActiveCampaign</Link>.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Why this ties to compliance and trust</h2>
                  <p className="mt-2">
                    Pair technical setup with <Link href="/email-marketing/guides/email-marketing-consent-and-can-spam" className={link}>consent and CAN-SPAM basics</Link>. For list growth discipline, see{" "}
                    <Link href="/email-marketing/guides/how-to-build-an-email-list" className={link}>how to build an email list</Link>.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Operational verification</h2>
                  <p className="mt-2">
                    After DNS propagates, send tests to major providers and monitor bounce reasons. BeltStack does not provide legal advice—verify records with your ESP and IT vendor against current documentation.
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
    title: "Email Deliverability: SPF, DKIM & DMARC Explained | BeltStack",
    description:
      "Learn SPF, DKIM, and DMARC for small business email—what DNS records do, how ESPs use them, and how to validate setup without breaking mail.",
  };
}
