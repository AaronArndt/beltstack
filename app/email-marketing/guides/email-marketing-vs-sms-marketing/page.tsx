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

const href = "/email-marketing/guides/email-marketing-vs-sms-marketing";
const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const FAQ = [
  {
    q: "Should a service business start with email or SMS?",
    a: "Most begin with email for richer storytelling, documentation, and lower per-message cost at scale—then add SMS for urgent logistics (arrival windows, access issues) with explicit consent.",
  },
  {
    q: "How do compliance rules differ?",
    a: "Both require clear opt-in and easy unsubscribe paths; SMS often faces stricter carrier scrutiny, quiet hours, and shorthand consent language. Never mix channels without separate permission where regulations demand it.",
  },
  {
    q: "When does SMS outperform email?",
    a: "Time-sensitive dispatch updates, same-day schedule shifts, and appointment reminders where homeowners live on phones—but keep messages short and actionable.",
  },
  {
    q: "Can one vendor handle both?",
    a: "Brevo and several competitors bundle email plus SMS; Mailchimp-style tools may require add-ons. Compare total send economics, not headline price.",
  },
  {
    q: "How do we avoid over-messaging?",
    a: "Cap combined touches per week, suppress recipients after failures or complaints, and route “education” to email while reserving SMS for logistics or explicit promotional opt-ins.",
  },
  {
    q: "What metrics matter per channel?",
    a: "For email: click-to-book paths and downstream CRM wins. For SMS: delivery rate, reply rate where used, and complaint rate—opens are less meaningful than in email.",
  },
];

export default function EmailMarketingVsSmsMarketingPage() {
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
                      Email Marketing vs SMS Marketing
                    </li>
                  </ol>
                </nav>
                <header className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Email Marketing vs SMS Marketing</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed">
                    Choose channels by intent: email carries depth; SMS carries urgency. Start tool comparisons in our{" "}
                    <Link href="/email-marketing/best-email-marketing-software" className={link}>
                      best email marketing software
                    </Link>{" "}
                    roundup, read{" "}
                    <Link href={getEmailMarketingReviewUrl("brevo")} className={link}>
                      Brevo
                    </Link>{" "}
                    for bundled messaging, contrast{" "}
                    <Link href={getEmailMarketingReviewUrl("mailchimp")} className={link}>
                      Mailchimp
                    </Link>{" "}
                    when integrations matter, and review{" "}
                    <Link href={getEmailMarketingCompareUrl("brevo-vs-mailchimp")} className={link}>
                      Brevo vs Mailchimp
                    </Link>{" "}
                    for pricing models. Trade scenarios:{" "}
                    <Link href={getEmailMarketingBestForUrl("home-services")} className={link}>
                      home services email picks
                    </Link>
                    .
                  </p>
                  <GuideLastUpdated date="March 25, 2026" />
                </header>
                <div className="prose prose-neutral mt-8 max-w-none text-[#57534E] text-base leading-relaxed">
                  <h2 className="text-[#1A2D48] text-xl font-bold">Email: education, proof, and longer arcs</h2>
                  <p className="mt-2">
                    Email fits tutorials, before/after stories, and multi-step nurture after complex estimates. It also houses receipts and detailed policy updates customers may need to forward. Keep HTML readable and link to mobile-friendly booking pages built with your{" "}
                    <Link href="/website-builders" className={link}>
                      website stack
                    </Link>
                    .
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">SMS: logistics and immediacy</h2>
                  <p className="mt-2">
                    SMS shines for “technician en route,” access gate codes, and same-day schedule shifts—moments email opens too slowly to fix. Respect frequency caps; one poorly timed promo text damages trust faster than a skipped newsletter.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Operational pairing</h2>
                  <p className="mt-2">
                    Trigger SMS from field events when possible, while email explains the “why” behind memberships or seasonal programs. Align both with{" "}
                    <Link href="/crm" className={link}>
                      CRM
                    </Link>{" "}
                    tasks so sales sees the whole thread—not parallel silos arguing about attribution.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Vendor and cost reality</h2>
                  <p className="mt-2">
                    Bundled stacks simplify billing but may lock features; best-of-breed email plus point SMS can win when deliverability teams differ. Model annual sends, international compliance, and failover needs before choosing.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Connect to acquisition and reviews</h2>
                  <p className="mt-2">
                    Leads from{" "}
                    <Link href="/lead-generation" className={link}>
                      paid programs
                    </Link>{" "}
                    often need rapid SMS for speed-to-lead, then email for nurture. Post-job, email may carry richer review context while{" "}
                    <Link href="/reputation-management" className={link}>
                      reputation tools
                    </Link>{" "}
                    orchestrate timing.
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
    title: "Email Marketing vs SMS Marketing | BeltStack",
    description: "When home service businesses should use email vs SMS, how to combine both compliantly, and vendor considerations.",
  };
}
