import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getReputationManagementReviewUrl } from "@/lib/routes";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedReputationManagementResources } from "@/components/guides/RelatedReputationManagementResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";
const href = "/reputation-management/guides/review-request-timing-and-messaging";

const FAQ = [
  { q: "When is the best time to ask for a Google review?", a: "After a clearly successful outcome—walkthrough signed off, invoice paid without dispute, or warranty explained—and while emotion is positive. Avoid batch blasts unrelated to a specific job." },
  { q: "Can I offer incentives for reviews?", a: "Many platforms prohibit compensated reviews; even where legal, incentives bias sentiment and can backfire. Focus on easy links and timing instead." },
  { q: "SMS or email first?", a: "SMS can convert faster for mobile-first homeowners; email archives better for commercial clients. Test both with the same script and measure completion, not sends." },
];

const SIDEBAR: GuideSidebarItem[] = [
  { name: "Podium", logoSrc: "/Logos/podium.jpeg", rating: 4.4, bestFor: "Messaging + reviews", reviewHref: getReputationManagementReviewUrl("podium") },
  { name: "Birdeye", logoSrc: "/Logos/birdeye.svg", rating: 4.5, bestFor: "Enterprise scale", reviewHref: getReputationManagementReviewUrl("birdeye") },
  { name: "NiceJob", logoSrc: "/Logos/nicejob.jpeg", rating: 4.3, bestFor: "Automations", reviewHref: getReputationManagementReviewUrl("nicejob") },
];

export default function ReviewRequestTimingAndMessagingPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/">Home</Link></li><li aria-hidden>/</li>
                    <li><Link href="/reputation-management">Reputation Management</Link></li><li aria-hidden>/</li>
                    <li><Link href="/reputation-management/guides">Guides</Link></li><li aria-hidden>/</li>
                    <li className="font-medium text-gray-700" aria-current="page">Review Request Timing</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold sm:text-4xl">Review Request Timing &amp; Messaging</h1>
                  <p className="mt-3 text-[#57534E]">
                    When to ask, how to phrase invitations, and SMS vs email—policy-safe habits that improve completion rates without sounding desperate.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="py-8 space-y-4 text-[15px] text-neutral-700 leading-relaxed">
                  <p>
                    Link requests to delivery moments your team can defend. Pair with <Link href="/reputation-management/guides/how-to-get-more-google-reviews" className={link}>how to get more Google reviews</Link>,{" "}
                    <Link href="/email-marketing/guides/how-to-build-an-email-list" className={link}>email list ethics</Link>, and{" "}
                    <Link href="/seo-tools/guides/google-business-profile-optimization" className={link}>Google Business Profile optimization</Link>.
                  </p>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Keep language neutral and easy to act on.">Messaging principles</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Reference the completed service specifically</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>One link, one platform per touch—avoid choice overload</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>No quid pro quo language about stars</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Escalate unhappy customers offline before the review ask</span></li>
                  </ul>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <GuideFaqSection faqs={FAQ} />
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Reputation software" items={SIDEBAR} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedReputationManagementResources excludeHref={href} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Review Request Timing & Messaging (Google, SMS, email) | BeltStack",
    description:
      "When to ask for reviews after jobs, how to word requests safely, and SMS vs email—practical guidance for local service brands.",
  };
}
