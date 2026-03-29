import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar } from "@/components/guides/GuideSidebar";
import { RelatedEmailMarketingResources } from "@/components/guides/RelatedEmailMarketingResources";
import { EMAIL_MARKETING_GUIDE_SIDEBAR_ITEMS } from "@/lib/data/emailMarketingGuideSidebar";
import { getEmailMarketingReviewUrl } from "@/lib/routes";

const href = "/email-marketing/guides/email-marketing-consent-and-can-spam";
const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const FAQ = [
  { q: "What is CAN-SPAM’s physical address rule?", a: "Commercial emails in the U.S. generally need a valid postal address in the footer. Your ESP usually enforces this—do not strip it." },
  { q: "Is verbal consent enough?", a: "Document consent in writing where possible (checked box, dated form). Verbal-only trails are hard to prove if deliverability or disputes arise." },
  { q: "Does this guide cover GDPR or CASL?", a: "No—this page covers US-oriented baseline habits. International sending needs separate legal review." },
];

export default function EmailMarketingConsentAndCanSpamPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Consent &amp; CAN-SPAM</li>
                  </ol>
                </nav>
                <header className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold sm:text-4xl">Email Marketing Consent &amp; CAN-SPAM Basics</h1>
                  <p className="mt-3 text-[#57534E]">
                    Permission, honest headers, physical address, and unsubscribe handling—practical habits for US-focused promotional email. Not legal advice.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </header>
                <div className="prose prose-neutral mt-8 max-w-none text-[#57534E] text-base leading-relaxed">
                  <h2 className="text-[#1A2D48] text-xl font-bold">Separate transactional from promotional</h2>
                  <p className="mt-2">
                    Receipts and appointment confirmations are not a license for unlimited marketing. Use clear opt-in for campaigns and document what subscribers agreed to—see{" "}
                    <Link href="/email-marketing/guides/how-to-build-an-email-list" className={link}>how to build an email list</Link>.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Technical trust signals</h2>
                  <p className="mt-2">
                    Authentication supports compliance narratives with mailbox providers. Read{" "}
                    <Link href="/email-marketing/guides/email-deliverability-spf-dkim-dmarc" className={link}>SPF, DKIM, and DMARC</Link> next.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">ESP defaults</h2>
                  <p className="mt-2">
                    Major providers like <Link href={getEmailMarketingReviewUrl("mailchimp")} className={link}>Mailchimp</Link> bake footer requirements into templates—work with their compliance docs rather than fighting defaults.
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
    title: "Email Marketing Consent & CAN-SPAM Basics | BeltStack",
    description:
      "US-focused consent and CAN-SPAM habits for small business email: permission, headers, footer address, and unsubscribe—not a substitute for legal counsel.",
  };
}
